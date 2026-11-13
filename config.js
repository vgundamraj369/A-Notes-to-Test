// Notes to Test settings. Edit this file, then commit it.
window.NTT_CONFIG = {
  // Leave empty ("") so each visitor connects Claude with their own Anthropic API key.
  // Or set it to your Cloudflare Worker URL (see worker/ and the README) so visitors
  // don't need a key and your key pays for every test.
  // Example: apiEndpoint: "https://notes-to-test-api.YOUR-NAME.workers.dev",
  apiEndpoint: "",

  // The Claude model used when visitors bring their own key.
  // (With the Worker, set MODEL in worker/wrangler.toml instead.)
  model: "claude-sonnet-5-5",

  // Most photos or scanned pages sent with one test.
  maxImages: 20
};
