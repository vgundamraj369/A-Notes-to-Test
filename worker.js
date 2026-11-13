// Notes to Test: optional Cloudflare Worker that keeps your Anthropic API key on the server.
// The site sends the message content (photos + prompt) and this Worker adds the key,
// the model and the token limit, then streams Claude's reply back.
//
// Settings (see wrangler.toml and the README):
//   ANTHROPIC_API_KEY  secret, set with: npx wrangler secret put ANTHROPIC_API_KEY
//   ALLOWED_ORIGINS    comma-separated sites allowed to call this Worker
//   MODEL              Claude model id

const MAX_BODY = 20_000_000; // about 20 MB of photos and text

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim().replace(/\/$/, "")).filter(Boolean);
    const originOk = allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": originOk ? origin : (allowed[0] || ""),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin"
    };

    if (req.method === "OPTIONS") return new Response(null, { status: originOk ? 204 : 403, headers: cors });
    if (req.method !== "POST") return fail(405, "Use POST.", cors);
    if (!originOk) return fail(403, "This site isn't allowed to use this server. Add it to ALLOWED_ORIGINS.", cors);
    if (!env.ANTHROPIC_API_KEY) return fail(500, "The server is missing its ANTHROPIC_API_KEY secret.", cors);
    if (Number(req.headers.get("content-length") || 0) > MAX_BODY) return fail(413, "Too much to send at once.", cors);

    // The body is the JSON array of message content blocks. It is passed through as text
    // (no parsing) to stay well under the Workers free-plan CPU limit. Model and token
    // limit come after it, so they always use the server's values.
    const content = await req.text();
    if (content.length > MAX_BODY) return fail(413, "Too much to send at once.", cors);
    if (!content.startsWith("[")) return fail(400, "Bad request.", cors);

    const body = `{"messages":[{"role":"user","content":${content}}],"model":${JSON.stringify(env.MODEL || "claude-sonnet-5-5")},"max_tokens":12000,"stream":true}`;

    let upstream;
    try {
      upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body
      });
    } catch (e) {
      return fail(502, "Couldn't reach Anthropic.", cors);
    }

    const headers = new Headers(cors);
    headers.set("content-type", upstream.headers.get("content-type") || "text/event-stream");
    headers.set("cache-control", "no-store");
    return new Response(upstream.body, { status: upstream.status, headers });
  }
};

function fail(status, message, cors) {
  return new Response(JSON.stringify({ type: "error", error: { type: "proxy_error", message } }), {
    status,
    headers: { ...cors, "content-type": "application/json" }
  });
}
