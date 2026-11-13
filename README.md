# Notes to Test

Turn your study notes into a practice test. Upload photos of a study guide, a PDF, a Word file or pasted notes, and Claude writes multiple-choice questions from them. Then take the test as a quiz or study it as flashcards, with a notepad beside you. You can also upload a worksheet and get worked answers on the Solutions tab.

It's a static website (HTML, CSS and JavaScript, with no build step), so it runs for free on GitHub Pages.

## Features

- **Make a test** from photos (JPG, PNG, WebP, GIF), PDF (including scanned pages), Word (.docx), text files or pasted notes. Choose the number of questions (5 to 60), difficulty and question types.
- **Quiz** with hints, explanations, a score for each topic, and retries of just the questions you missed.
- **Make a new test on what I missed:** Claude writes new questions on the facts you got wrong.
- **Flashcards** that look like index cards, with "Got it" and "Study again" piles.
- **Notepad** for each test, on lined paper. One tap adds a question and its answer to your notes.
- **Solutions:** upload a worksheet, homework sheet or review packet, and Claude finds every question and answers it with a short explanation, plus steps for math if you ask. Answers stay hidden until you tap, so you can try first. If answers are already written on the sheet, Claude checks them and shows your score. Answers Claude isn't sure about are marked "Double-check". You can turn a sheet into a practice test, or save answers to the notepad.
- **My tests:** tests, scores and notes are saved in your browser.
- Works on phones, has keyboard shortcuts, and supports dark mode.

## How Claude is connected

Pick one mode in `config.js`.

| | Mode A: each visitor uses their own key (default) | Mode B: you pay with your key |
|---|---|---|
| Setup | Nothing beyond GitHub Pages | GitHub Pages plus a free Cloudflare Worker |
| Visitors need | An Anthropic API key | Nothing |
| Who pays | Each visitor, on their own key | You, for every test anyone makes |
| Where the key lives | The visitor's browser | Cloudflare, as a secret |

In Mode A, the page calls `api.anthropic.com` directly from the browser. Anthropic allows this when the request includes the `anthropic-dangerous-direct-browser-access` header. The key is never sent to GitHub or anywhere other than Anthropic.

## Publish on GitHub Pages (Mode A)

1. Sign in to GitHub and click **New repository**. Name it, for example `notes-to-test`. Make it **Public**, and leave "Add a README" unchecked.
2. On the new repository's page, click **uploading an existing file**. Drag in everything from this folder, including the `worker` folder and the `.nojekyll` file, then click **Commit changes**.
   - Hidden files such as `.nojekyll` and `.gitignore` may not show in your file browser. If you can't see them, use the command-line steps below.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, the branch to **main** and the folder to **/ (root)**, then click **Save**.
4. Wait a minute or two, then open `https://YOUR-USERNAME.github.io/notes-to-test/`.

Using the command line instead:

```bash
cd notes-to-test
git init
git add .
git commit -m "Notes to Test"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/notes-to-test.git
git push -u origin main
```

Then turn on Pages as in step 3.

### What visitors do

1. Get an API key at <https://console.anthropic.com/settings/keys>. Their Anthropic account needs credit.
2. Open the site, go to **Make a test**, paste the key under **Connect Claude** and click **Save key**.
   - "Remember on this device" keeps the key in the browser's local storage. If it's unchecked, the key is forgotten when the tab closes.
3. Add notes and click **Make my test**.

## Optional: pay for everyone with a Cloudflare Worker (Mode B)

The `worker/` folder holds a small proxy. It keeps your API key on Cloudflare, adds the model and token limit, and streams Claude's reply back to the site. Cloudflare's free plan allows 100,000 requests a day.

You'll need [Node.js](https://nodejs.org) and a free [Cloudflare account](https://dash.cloudflare.com/sign-up).

1. **Set a spending limit first.** In the [Anthropic Console](https://console.anthropic.com), set a monthly spend limit for your organization. Anyone who can reach your site can spend your credit.
2. In `worker/wrangler.toml`, set `ALLOWED_ORIGINS` to your site's address: just the scheme and host, such as `https://YOUR-USERNAME.github.io`, with no path and no trailing slash.
3. Deploy:

   ```bash
   cd worker
   npx wrangler login
   npx wrangler secret put ANTHROPIC_API_KEY   # paste your key when asked
   npx wrangler deploy
   ```

   Wrangler prints the Worker's address, such as `https://notes-to-test-api.YOUR-NAME.workers.dev`.
4. In `config.js`, set `apiEndpoint` to that address, then commit and push. The **Connect Claude** panel disappears, and visitors can make tests right away.

Know the limits:

- **The origin check isn't a password.** It stops other websites from using your Worker in a browser, but someone writing their own script can send any `Origin` header. Your spending limit is the real protection.
- **The proxy forwards any message content.** Someone could use it as general access to Claude. The model and token limit are always the ones set in `wrangler.toml`.
- **Your Anthropic usage page shows the cost.** To add per-visitor limits, look at Cloudflare's rate limiting.

## Settings (`config.js`)

| Setting | Default | What it does |
|---|---|---|
| `apiEndpoint` | `""` | Empty means Mode A. Your Worker's address means Mode B. |
| `model` | `"claude-sonnet-5-5"` | The Claude model used in Mode A. In Mode B, set `MODEL` in `worker/wrangler.toml`. |
| `maxImages` | `20` | Most photos or scanned pages sent with one test. |

Model names change over time. See Anthropic's [models overview](https://docs.claude.com/en/docs/about-claude/models/overview) for current names.

## Privacy

- **Notes and photos** go only to Anthropic: directly from the browser in Mode A, or through your Worker in Mode B. PDFs and Word files are read in the browser first.
- **Tests, scores, missed questions, notepads and the API key** are stored in the visitor's browser (local storage). Nothing is stored on GitHub or on the Worker.
- **Clearing the browser's site data** deletes saved tests and notes. They don't sync between devices.
- **A saved key** can be read by anything that runs on the page. All text the app displays is escaped to prevent script injection, but if you add your own scripts, be careful what you include. Visitors on shared computers should uncheck "Remember on this device."

## Run it on your computer

Any static file server works. For example, from this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly as a file also mostly works, but a local server is closer to GitHub Pages.

## Change the example test

The built-in example test (Bio Units 5 & 6) is the `SAMPLE` object near the top of `app.js`. Edit its questions or replace it with your own. Each question looks like this:

```js
{ q: "Question text", options: ["A", "B", "C", "D"], answer: 1, explanation: "Why B is right.", topic: "Topic", hint: "Optional hint" }
```

`answer` is the position of the correct option, counting from 0.

## Files

```
index.html        Page layout
styles.css        Design: colors, fonts, dark mode, phone layout
app.js            The app: reading files, quiz, flashcards, solutions, notepad, calls to Claude
config.js         Settings (Mode A or B, model, photo limit)
worker/           Optional Cloudflare Worker for Mode B
.nojekyll         Tells GitHub Pages to serve files as they are
```

Libraries load from cdnjs only when needed: [pdf.js](https://mozilla.github.io/pdf.js/) for PDFs and [mammoth.js](https://github.com/mwilliamson/mammoth.js) for Word files. Fonts come from Google Fonts.

## License

MIT. See [LICENSE](LICENSE).
