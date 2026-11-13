/* ---------------- Example test (from the Bio Units 5 & 6 study guide) ---------------- */
const SAMPLE_NOTES = `Unit 5: The muscular system
- Includes muscular tissue and tendons. Helps your body move. Works closely with the skeletal system.
- More than 639 muscles. Biggest muscle = gluteus maximus (butt). Smallest muscle = stapedius (inner ear).
- 4 functions: movement, heat production, maintain posture, protection.
- Voluntary muscle action is under your control. Involuntary muscle action is not under your control.
- 3 muscle types:
  - Cardiac: involuntary, branched and striated, only found in the heart.
  - Smooth: involuntary, walls of blood vessels and organs, moves food through the digestive tract and empties the bladder, spindle shaped.
  - Skeletal: attached to bones by tendons, produces movement, voluntary, striated, multinucleated.
- Striations: main function is to contract with force.
- Flexor bends a part of your body (biceps, hamstring). Extensor straightens a part of your body (triceps, quadriceps).
- Antagonistic muscle pairs: one contracts while the other relaxes. Agonist = the one doing the work. Antagonist = relaxes.
- Muscle fiber structure: muscles are composed of fibers arranged in bundles. Each muscle cell is called a muscle fiber. Muscle cells are made of protein filaments: actin (thin filaments), myosin (thick filaments).
- Exercise: resistance exercise (push ups, pull ups, weights); aerobic exercise (running, cycling, swimming).
- Anabolic steroids: hormones that people use to make their muscles bigger and stronger.
- Muscle injury: muscle strain = pulled or torn muscle. Tendon injuries: tendon becomes hot or inflamed because of overuse = tendonitis.
Muscles you need to know (with location):
- Biceps brachii: upper arm muscles on front (flexor). Triceps brachii: upper arm muscles on back (extensor).
- Brachioradialis: attached to radius (forearm). Sartorius: diagonal muscle on thigh. Gastrocnemius: calf muscles.
- Deltoids: shoulder muscles. Pectorals: chest muscles. Quadriceps: thigh muscles on front (extensor). Hamstring: thigh muscles on back (flexor).
- Gluteus maximus: largest muscle. Intercostals: muscles between ribs. Diaphragm: muscle below lungs (can't see from the outside).
- Trapezius: large back muscle. Rectus abdominus or abdominals: stomach muscles.
- Diagram front view labels: pectorals, intercostals, biceps brachii, abdominals, brachioradialis, quadriceps, sartorius. Back view labels: deltoids, trapezius, triceps brachii, latissimus dorsi, gluteus maximus, hamstring, gastrocnemius.
Unit 6: The integumentary system
- Made up of hair, skin, nails, oil glands and sweat glands. Covers the entire body and helps with homeostasis. Skin is the largest organ in your body.
- Functions: 1. protection 2. sense 3. body temperature regulation 4. get rid of wastes 5. vitamin D synthesis.
- Layers of skin: 1. Epidermis: protects our body. 2. Dermis: protects your internal organs, keeps in body heat. 3. Subcutaneous: fat, helps keep your body warm, absorbs shock.
- Structures in the dermis: blood vessels (transport substances, help keep our body warm); nerve receptors (carry messages, sense your surroundings); hair/hair follicles (hair follicles make hair, hair warms our skin like a blanket); oil/sebaceous glands (release oil); sweat glands (release sweat); muscle fiber.
- Nails: protect fingers and toes from injury, help sense of touch.`;

const S = (q, o, a, e, t, h) => ({ q, options: o, answer: a, explanation: e, topic: t, hint: h || "" });
const SAMPLE = {
  id: "example-bio-5-6",
  title: "Bio Units 5 & 6 Review",
  source: "Example from a Bio study guide",
  created: "2026-10-27T22:36:00-05:00",
  example: true,
  notes: SAMPLE_NOTES,
  questions: [
    S("Tendons are part of which body system?", ["Integumentary","Muscular","Digestive","Nervous"], 1, "The muscular system includes muscular tissue and tendons.", "Muscular system"),
    S("Your notes say the muscular system has:", ["Fewer than 300 muscles","Exactly 206 muscles","More than 639 muscles","About 50 muscles"], 2, "More than 639 muscles. 206 is the number of bones.", "Muscular system"),
    S("Which pairing of biggest and smallest muscle is correct?", ["Biggest: quadriceps, smallest: stapedius","Biggest: gluteus maximus, smallest: stapedius","Biggest: stapedius, smallest: gluteus maximus","Biggest: trapezius, smallest: deltoid"], 1, "Gluteus maximus (buttocks) is the biggest; stapedius (inner ear) is the smallest.", "Muscular system"),
    S("Which list shows all 4 functions of the muscular system?", ["Movement, heat production, posture, protection","Movement, sense, vitamin D, protection","Protection, sense, temperature, wastes","Movement, digestion, posture, breathing"], 0, "Movement, heat production, maintaining posture and protection.", "Muscular system", "Sense and vitamin D belong to the skin."),
    S("Shivering when cold is an example of which muscle function?", ["Posture","Heat production","Protection","Sense"], 1, "Shivering muscles produce heat.", "Muscular system"),
    S("Muscle action that is NOT under your control is called:", ["Voluntary","Involuntary","Striated","Aerobic"], 1, "Involuntary action is not under your control; voluntary action is.", "Muscle types"),
    S("Name the 3 muscle types.", ["Flexor, extensor, agonist","Cardiac, skeletal, smooth","Actin, myosin, tendon","Epidermis, dermis, subcutaneous"], 1, "The 3 types are cardiac, skeletal and smooth.", "Muscle types"),
    S("Where is cardiac muscle found?", ["Only in the heart","In blood vessel walls","Attached to bones","In the bladder"], 0, "Cardiac muscle is only found in the heart.", "Muscle types"),
    S("Which describes cardiac muscle?", ["Voluntary and spindle-shaped","Involuntary, branched and striated","Voluntary and multinucleated","Involuntary and not striated"], 1, "Cardiac muscle is involuntary, branched and striated.", "Muscle types"),
    S("Which muscle type is the only voluntary one?", ["Cardiac","Smooth","Skeletal","None are voluntary"], 2, "Skeletal muscle is voluntary. Cardiac and smooth are involuntary.", "Muscle types"),
    S("Moving food through the digestive tract is the job of which muscle type?", ["Smooth","Skeletal","Cardiac","Extensor"], 0, "Smooth muscle moves food through the digestive tract and empties the bladder.", "Muscle types"),
    S("A muscle cell that is spindle-shaped and has no striations is:", ["Skeletal","Cardiac","Smooth","A tendon"], 2, "Smooth muscle is spindle-shaped and not striated.", "Muscle types"),
    S("Striations help muscle do what?", ["Contract with force","Make sweat","Store fat","Sense heat"], 0, "The main function of striations is to contract with force.", "Muscle types"),
    S("Skeletal muscle is attached to bones by ______ and produces ______.", ["Ligaments; heat only","Tendons; movement","Nerves; sweat","Fat; posture only"], 1, "Skeletal muscle is attached to bones by tendons and produces movement.", "Muscle types"),
    S("A muscle that STRAIGHTENS a body part is a(n):", ["Flexor","Extensor","Agonist","Filament"], 1, "Extensors straighten (triceps, quadriceps). Flexors bend (biceps, hamstring).", "Flexors & extensors"),
    S("Which pair are both FLEXORS?", ["Triceps and quadriceps","Biceps and hamstring","Biceps and triceps","Quadriceps and hamstring"], 1, "Biceps and hamstring bend body parts, so they're flexors.", "Flexors & extensors"),
    S("In an antagonistic pair, the antagonist:", ["Does the work","Relaxes","Releases oil","Becomes a tendon"], 1, "The agonist does the work; the antagonist relaxes.", "Flexors & extensors"),
    S("You straighten your arm to push open a door. Which muscle is the agonist?", ["Biceps brachii","Triceps brachii","Hamstring","Pectorals"], 1, "Straightening the elbow uses the triceps (extensor) while the biceps relaxes.", "Flexors & extensors", "Which arm muscle straightens?"),
    S("You bend your knee to bring your heel toward your butt. Which muscle contracts?", ["Quadriceps","Hamstring","Sartorius","Trapezius"], 1, "Bending the knee is flexing, done by the hamstring.", "Flexors & extensors"),
    S("A single muscle cell is called a:", ["Muscle fiber","Bundle","Tendon","Follicle"], 0, "Each muscle cell is a muscle fiber; fibers are arranged in bundles.", "Fibers & filaments"),
    S("Which is the THIN protein filament?", ["Myosin","Actin","Keratin","Collagen"], 1, "Actin is thin; myosin is thick.", "Fibers & filaments"),
    S("Which activity is RESISTANCE exercise?", ["Running","Swimming","Pull-ups","Cycling"], 2, "Push-ups, pull-ups and weights are resistance. Running, cycling and swimming are aerobic.", "Exercise & injury"),
    S("Why do some people use anabolic steroids?", ["To heal skin","To make muscles bigger and stronger","To make vitamin D","To slow the heart"], 1, "They are hormones used to make muscles bigger and stronger.", "Exercise & injury"),
    S("Which pairing is correct?", ["Muscle strain = inflamed tendon; tendonitis = torn muscle","Muscle strain = pulled or torn muscle; tendonitis = inflamed tendon from overuse","Both mean a broken bone","Both are caused by anabolic steroids"], 1, "Strain = pulled or torn muscle. Tendonitis = tendon hot or inflamed from overuse.", "Exercise & injury"),
    S("Which of these is part of the integumentary system?", ["Tendons","Sweat glands","Biceps","Actin"], 1, "The integumentary system is hair, skin, nails, oil glands and sweat glands.", "Skin"),
    S("The largest organ in your body is the:", ["Gluteus maximus","Skin","Heart","Liver"], 1, "Skin is the largest organ. The gluteus maximus is the largest muscle, not organ.", "Skin"),
    S("Which list shows the 5 functions of the skin?", ["Protection, sense, body temperature regulation, getting rid of wastes, vitamin D synthesis","Movement, heat production, posture, protection, sense","Protection, digestion, breathing, sense, movement","Sense, posture, wastes, vitamin C, movement"], 0, "Protection, sense, body temperature regulation, getting rid of wastes and vitamin D synthesis.", "Skin"),
    S("Which skin layer's main job is to protect the body from the outside?", ["Epidermis","Dermis","Subcutaneous","Hair follicle"], 0, "The epidermis is the outer layer that protects the body.", "Skin layers"),
    S("Which is the DEEPEST skin layer?", ["Epidermis","Dermis","Subcutaneous","Nail bed"], 2, "Deepest means farthest from the surface. Subcutaneous (fat) is the bottom layer; it keeps you warm and absorbs shock.", "Skin layers", "\"Sub\" means under."),
    S("Hair follicles, sweat glands and oil glands are all found in the:", ["Epidermis","Dermis","Subcutaneous layer","Muscle fibers"], 1, "These structures are all in the dermis.", "Skin layers"),
    S("What does a sebaceous gland do?", ["Releases sweat","Releases oil","Makes hair","Carries messages"], 1, "Sebaceous (oil) glands release oil.", "Skin structures"),
    S("Which dermis structure lets you sense your surroundings?", ["Blood vessels","Nerve receptors","Sweat glands","Hair follicles"], 1, "Nerve receptors carry messages and sense your surroundings.", "Skin structures"),
    S("Nails help the body by:", ["Protecting fingers and toes and helping the sense of touch","Making vitamin D","Releasing oil","Absorbing shock"], 0, "Nails protect fingers and toes from injury and help the sense of touch.", "Skin structures"),
    S("The muscles between your ribs are the:", ["Pectorals","Intercostals","Diaphragm","Trapezius"], 1, "Intercostals are between the ribs.", "Muscle locations"),
    S("Which muscle is the calf muscle?", ["Gastrocnemius","Sartorius","Hamstring","Deltoid"], 0, "Gastrocnemius is the calf, on the back of the lower leg.", "Muscle locations"),
    S("Which muscle runs diagonally across the thigh?", ["Quadriceps","Sartorius","Hamstring","Gluteus maximus"], 1, "The sartorius is the diagonal thigh muscle.", "Muscle locations"),
    S("The brachioradialis is in the:", ["Forearm, attached to the radius","Shoulder","Calf","Back"], 0, "The brachioradialis is in the forearm, attached to the radius.", "Muscle locations", "\"Radialis\" is the clue."),
    S("Which muscle is the large back muscle?", ["Pectorals","Deltoids","Trapezius","Rectus abdominus"], 2, "The trapezius is the large back muscle.", "Muscle locations"),
    S("Match in order: deltoids, pectorals, rectus abdominus.", ["Shoulder, chest, stomach","Chest, shoulder, stomach","Stomach, chest, shoulder","Shoulder, stomach, chest"], 0, "Deltoids = shoulder, pectorals = chest, rectus abdominus = stomach.", "Muscle locations"),
    S("Which muscle can't be seen from the outside because it sits below the lungs?", ["Intercostals","Diaphragm","Pectorals","Latissimus dorsi"], 1, "The diaphragm is below the lungs and isn't visible from the outside.", "Muscle locations")
  ]
};

/* ---------------- Storage (this device only) ---------------- */
const KEY = "notes-to-test.v1";
function loadStore() {
  try { const raw = localStorage.getItem(KEY); if (raw) { const s = JSON.parse(raw); if (s && Array.isArray(s.tests)) return Object.assign({ stats: {} }, s); } } catch (e) {}
  return { tests: [], stats: {}, currentId: SAMPLE.id };
}
let store = loadStore();
function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { toast("Couldn't save on this device. The test works until you close the page."); } }
function getTest(id) { return id === SAMPLE.id ? SAMPLE : store.tests.find(t => t.id === id); }
function current() { return getTest(store.currentId) || SAMPLE; }
function setCurrent(id) { flushPad(); store.currentId = id; save(); resetQuiz(); resetCards(); renderCurrent(); renderPad(); }
function stats(id) { return store.stats[id] || (store.stats[id] = { best: null, missed: [] }); }

/* ---------------- Helpers ---------------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const range = n => Array.from({ length: n }, (_, i) => i);
const LETTERS = "ABCDEF";
const fmtDate = iso => { try { return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); } catch (e) { return ""; } };
let toastTimer;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 3200); }
const isTF = q => q.options.length === 2 && /^true$/i.test(q.options[0].trim()) && /^false$/i.test(q.options[1].trim());

/* ---------------- Views ---------------- */
const VIEWS = ["make", "quiz", "cards", "solutions", "library"];
function show(view) {
  if (!VIEWS.includes(view)) view = "quiz";
  VIEWS.forEach(v => { $("#view-" + v).hidden = v !== view; const tab = $("#tab-" + v); if (v === view) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current"); });
  if (location.hash.slice(1) !== view) { try { history.replaceState(null, "", "#" + view); } catch (e) {} }
  activeView = view;
  $("#current").hidden = view === "solutions";
  if (view === "quiz") renderQuiz();
  if (view === "cards") renderCards();
  if (view === "library") renderLibrary();
  if (view === "make") renderMake();
  if (view === "solutions") renderSolutions();
  flushPad();
  renderPad();
  window.scrollTo(0, 0);
}
let activeView = "quiz";
document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => show(b.dataset.view)));
window.addEventListener("hashchange", () => { const v = location.hash.slice(1); if (v !== activeView && VIEWS.includes(v)) show(v); });

function renderCurrent() {
  const t = current();
  $("#current").innerHTML = `<span>Current test:</span> <strong>${esc(t.title)}</strong> <span>· ${t.questions.length} questions</span>${t.example ? ' <span class="pill example">Example</span>' : ""}`;
}

/* ---------------- Quiz ---------------- */
let quiz = null;
function resetQuiz() { quiz = null; }
function startQuiz(onlyIdx) {
  const t = current();
  const idx = onlyIdx && onlyIdx.length ? onlyIdx : range(t.questions.length);
  quiz = {
    testId: t.id, order: shuffle(idx), pos: 0, picks: {}, hintShown: {}, retryMode: !!(onlyIdx && onlyIdx.length),
    optOrder: Object.fromEntries(idx.map(i => [i, isTF(t.questions[i]) ? range(t.questions[i].options.length) : shuffle(range(t.questions[i].options.length))])),
    done: false
  };
}
function renderQuiz() {
  const t = current();
  if (!quiz || quiz.testId !== t.id) startQuiz();
  updatePadButtons();
  const el = $("#view-quiz");
  if (quiz.done) return renderResults(el, t);
  const qi = quiz.order[quiz.pos];
  const q = t.questions[qi];
  const order = quiz.optOrder[qi];
  const picked = quiz.picks[qi];
  const answered = picked !== undefined;
  const correctCount = Object.entries(quiz.picks).filter(([i, p]) => t.questions[i].answer === p).length;
  const pct = Math.round((quiz.pos / quiz.order.length) * 100);
  el.innerHTML = `
    <div class="sheet" aria-live="polite">
      <div class="q-meta"><span>Question ${quiz.pos + 1} of ${quiz.order.length}${quiz.retryMode ? " · missed questions" : ""}</span><span>${esc(q.topic || "")}${q.topic ? " · " : ""}${correctCount} correct</span></div>
      <div class="bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
      <h2 class="q-text" id="q-text">${esc(q.q)}</h2>
      <div class="options" role="group" aria-labelledby="q-text">
        ${order.map((oi, k) => {
          let cls = "opt";
          if (answered) { if (oi === q.answer) cls += " correct"; else if (oi === picked) cls += " wrong"; else cls += " dim"; }
          return `<button class="${cls}" data-oi="${oi}" ${answered ? "disabled" : ""} id="opt-${k}"><span class="key">${LETTERS[k]}</span><span>${esc(q.options[oi])}</span></button>`;
        }).join("")}
      </div>
      ${!answered && q.hint ? (quiz.hintShown[qi] ? `<p class="hint-text">${esc(q.hint)}</p>` : `<button class="btn ghost" id="hint-btn" type="button">Show a hint</button>`) : ""}
      ${answered ? `<div class="feedback ${picked === q.answer ? "good" : "bad"}"><span class="verdict">${picked === q.answer ? "Correct." : "Not quite. The answer is " + esc(q.options[q.answer]) + "."}</span><span>${esc(q.explanation)}</span></div>` : ""}
      <div class="btn-row" style="justify-content:space-between">
        <span class="kbd">${answered ? "Press Enter for the next question" : "Press A to " + LETTERS[order.length - 1] + " to answer"}</span>
        <div class="btn-row">
          ${!answered ? `<button class="btn ghost" id="skip-btn" type="button">Skip</button>` : ""}
          ${answered ? `<button class="btn primary" id="next-btn" type="button">${quiz.pos + 1 < quiz.order.length ? "Next question" : "See my score"}</button>` : ""}
        </div>
      </div>
    </div>`;
  el.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => choose(Number(b.dataset.oi))));
  $("#hint-btn")?.addEventListener("click", () => { quiz.hintShown[qi] = true; renderQuiz(); });
  $("#next-btn")?.addEventListener("click", nextQ);
  $("#skip-btn")?.addEventListener("click", () => { const [cur] = quiz.order.splice(quiz.pos, 1); quiz.order.push(cur); renderQuiz(); });
  if (answered) $("#next-btn")?.focus({ preventScroll: true });
}
function choose(oi) {
  const qi = quiz.order[quiz.pos];
  if (quiz.picks[qi] !== undefined) return;
  quiz.picks[qi] = oi;
  renderQuiz();
}
function nextQ() {
  if (quiz.pos + 1 < quiz.order.length) { quiz.pos++; renderQuiz(); window.scrollTo({ top: 0 }); }
  else { finishQuiz(); }
}
function finishQuiz() {
  const t = current();
  quiz.done = true;
  const missed = quiz.order.filter(i => quiz.picks[i] !== t.questions[i].answer);
  const st = stats(t.id);
  if (!quiz.retryMode) {
    const score = quiz.order.length - missed.length;
    const pct = Math.round(score / quiz.order.length * 100);
    if (st.best === null || pct > st.best) st.best = pct;
    st.missed = missed;
    st.last = pct;
  } else {
    st.missed = (st.missed || []).filter(i => missed.includes(i));
  }
  save();
  renderQuiz();
  window.scrollTo({ top: 0 });
}
function renderResults(el, t) {
  const total = quiz.order.length;
  const missed = quiz.order.filter(i => quiz.picks[i] !== t.questions[i].answer);
  const score = total - missed.length;
  const pct = Math.round(score / total * 100);
  const byTopic = {};
  quiz.order.forEach(i => { const k = t.questions[i].topic || "General"; byTopic[k] = byTopic[k] || { n: 0, ok: 0 }; byTopic[k].n++; if (quiz.picks[i] === t.questions[i].answer) byTopic[k].ok++; });
  const topicRows = Object.entries(byTopic).sort((a, b) => (a[1].ok / a[1].n) - (b[1].ok / b[1].n));
  const verdict = pct >= 90 ? "Excellent. You know this material." : pct >= 75 ? "Solid. Review the questions you missed." : pct >= 50 ? "Getting there. Focus on your weakest topics below." : "Keep studying. Start with flashcards for the topics below.";
  el.innerHTML = `
    <div class="sheet">
      <div class="eyebrow">${quiz.retryMode ? "Missed questions retry" : "Your score"}</div>
      <div class="score"><span class="big">${score} / ${total}</span><span class="pct">${pct}%</span></div>
      <p>${verdict}</p>
      ${topicRows.length > 1 ? `<div class="topics" aria-label="Score by topic">${topicRows.map(([k, v]) => `<div class="topic-row ${v.ok / v.n < .7 ? "weak" : ""}"><span>${esc(k)}</span><div class="bar"><span style="width:${Math.round(v.ok / v.n * 100)}%"></span></div><span class="n">${v.ok}/${v.n}</span></div>`).join("")}</div>` : ""}
      <div class="btn-row">
        ${missed.length ? `<button class="btn primary" id="retry-missed" type="button">Retry the ${missed.length} I missed</button>` : ""}
        ${missed.length && claudeSample ? `<button class="btn" id="new-on-missed" type="button">Make a new test on what I missed</button>` : ""}
        <button class="btn" id="retake" type="button">Retake the whole test</button>
        ${missed.length ? `<button class="btn ghost" id="cards-missed" type="button">Flashcards for missed</button>` : ""}
        ${missed.length ? `<button class="btn ghost" id="pad-missed" type="button">Add missed to notepad</button>` : ""}
      </div>
    </div>
    ${missed.length ? `<div class="sheet"><h2 style="font-size:1.3rem">Questions you missed</h2>
      <ul class="missed">${missed.map(i => { const q = t.questions[i]; const p = quiz.picks[i]; return `<li><span class="mq">${esc(q.q)}</span><span class="ma">${p === undefined ? "" : `<span class="yours">Your answer: ${esc(q.options[p])}</span> · `}<span class="right">Correct: ${esc(q.options[q.answer])}</span></span><span class="ma" style="color:var(--muted)">${esc(q.explanation)}</span></li>`; }).join("")}</ul></div>` : ""}`;
  $("#retry-missed")?.addEventListener("click", () => { startQuiz(missed); renderQuiz(); });
  $("#retake")?.addEventListener("click", () => { startQuiz(); renderQuiz(); });
  $("#cards-missed")?.addEventListener("click", () => { resetCards(missed); show("cards"); });
  $("#new-on-missed")?.addEventListener("click", () => prepareFromTest(t, missed));
  $("#pad-missed")?.addEventListener("click", () => {
    if (!padOpen) togglePad(true);
    appendPad(`Missed on ${fmtDate(new Date().toISOString())}:\n` + missed.map(i => padEntry(t.questions[i])).join("\n"));
    toast(`Added ${missed.length} question${missed.length === 1 ? "" : "s"} to your notepad`);
  });
}

/* ---------------- Flashcards ---------------- */
let cards = null;
function resetCards(only) { cards = only ? { testId: current().id, order: shuffle(only), pos: 0, flipped: false, again: new Set(), known: new Set(), subset: true } : null; }
function startCards() { const t = current(); cards = { testId: t.id, order: range(t.questions.length), pos: 0, flipped: false, again: new Set(), known: new Set(), subset: false }; }
function renderCards() {
  const t = current();
  if (!cards || cards.testId !== t.id) startCards();
  updatePadButtons();
  const el = $("#view-cards");
  if (!cards.order.length) { el.innerHTML = `<div class="sheet empty">No cards to show.</div>`; return; }
  const qi = cards.order[cards.pos];
  const q = t.questions[qi];
  const mark = cards.known.has(qi) ? "Got it" : cards.again.has(qi) ? "Study again" : "";
  el.innerHTML = `
    <div class="tally"><span>${cards.subset ? "Studying a set of " + cards.order.length + " cards" : "All " + cards.order.length + " cards"}</span><span style="color:var(--good)">Got it: ${cards.known.size}</span><span style="color:var(--bad)">Study again: ${cards.again.size}</span></div>
    <div class="card-stage">
      <button class="card ${cards.flipped ? "flipped" : ""}" id="card" type="button" aria-label="${cards.flipped ? "Answer side. Press to show the question." : "Question side. Press to show the answer."}">
        <div class="face front" aria-hidden="${cards.flipped}">
          <div class="side"><span>Question</span><span>${esc(q.topic || "")}</span></div>
          <div class="front-text">${esc(q.q)}</div>
          <div class="tap">Tap or press Space to flip${mark ? " · " + mark : ""}</div>
        </div>
        <div class="face back" aria-hidden="${!cards.flipped}">
          <div class="side"><span>Answer</span><span>${esc(q.topic || "")}</span></div>
          <div class="answer">${esc(q.options[q.answer])}</div>
          <div class="why">${esc(q.explanation)}</div>
        </div>
      </button>
    </div>
    <div class="card-nav">
      <button class="btn" id="prev-card" type="button" aria-label="Previous card" ${cards.pos === 0 ? "disabled" : ""}>←</button>
      <div class="card-count">${cards.pos + 1} / ${cards.order.length}</div>
      <button class="btn" id="next-card" type="button" aria-label="Next card" ${cards.pos === cards.order.length - 1 ? "disabled" : ""}>→</button>
    </div>
    <div class="sort-row">
      <button class="btn again" id="mark-again" type="button">Study again</button>
      <button class="btn known" id="mark-known" type="button">Got it</button>
    </div>
    <div class="btn-row">
      <button class="btn ghost" id="shuffle-cards" type="button">Shuffle</button>
      ${cards.again.size ? `<button class="btn ghost" id="again-only" type="button">Study only the ${cards.again.size} to review</button>` : ""}
      ${cards.subset ? `<button class="btn ghost" id="all-cards" type="button">Show all cards</button>` : ""}
      <span class="kbd">Keys: Space flip · ← → move · K got it · J again</span>
    </div>`;
  $("#card").addEventListener("click", flip);
  $("#prev-card").addEventListener("click", () => moveCard(-1));
  $("#next-card").addEventListener("click", () => moveCard(1));
  $("#mark-again").addEventListener("click", () => markCard("again"));
  $("#mark-known").addEventListener("click", () => markCard("known"));
  $("#shuffle-cards").addEventListener("click", () => { cards.order = shuffle(cards.order); cards.pos = 0; cards.flipped = false; renderCards(); toast("Shuffled"); });
  $("#again-only")?.addEventListener("click", () => { const keep = [...cards.again]; cards = { testId: t.id, order: shuffle(keep), pos: 0, flipped: false, again: new Set(), known: new Set(), subset: true }; renderCards(); });
  $("#all-cards")?.addEventListener("click", () => { startCards(); renderCards(); });
}
function flip() { cards.flipped = !cards.flipped; renderCards(); $("#card")?.focus({ preventScroll: true }); }
function moveCard(d) { const n = cards.pos + d; if (n < 0 || n >= cards.order.length) return; cards.pos = n; cards.flipped = false; renderCards(); $("#card")?.focus({ preventScroll: true }); }
function markCard(kind) {
  const qi = cards.order[cards.pos];
  cards.known.delete(qi); cards.again.delete(qi);
  (kind === "known" ? cards.known : cards.again).add(qi);
  if (cards.pos < cards.order.length - 1) { cards.pos++; cards.flipped = false; }
  else toast(cards.again.size ? `Done. ${cards.again.size} to study again.` : "Done. You got them all.");
  renderCards();
}

/* ---------------- Library ---------------- */
let pendingDelete = null;
function renderLibrary() {
  const el = $("#view-library");
  const list = [...store.tests].sort((a, b) => (b.created || "").localeCompare(a.created || "")).concat([SAMPLE]);
  el.innerHTML = `
    <div><h1 class="page-title">My tests</h1><p class="lede" style="margin-top:8px">Tests are saved in this browser on this device.</p></div>
    <div class="lib">${list.map(t => {
      const st = store.stats[t.id] || {};
      const isCur = t.id === store.currentId;
      return `<div class="sheet lib-item">
        <div class="lib-head"><h3>${esc(t.title)}</h3>${isCur ? '<span class="pill">Current</span>' : t.example ? '<span class="pill example">Example</span>' : ""}</div>
        <div class="lib-meta"><span>${t.questions.length} questions</span>${t.created ? `<span>${fmtDate(t.created)}</span>` : ""}<span>${st.best != null ? "Best score " + st.best + "%" : "Not taken yet"}</span>${st.missed && st.missed.length ? `<span>${st.missed.length} missed last time</span>` : ""}${store.pads && store.pads[t.id] ? `<span>Notepad: ${wordCount(store.pads[t.id])} words</span>` : ""}</div>
        ${t.source ? `<div class="lib-meta"><span>From: ${esc(t.source)}</span></div>` : ""}
        <div class="btn-row">
          <button class="btn primary" data-act="quiz" data-id="${esc(t.id)}" type="button">Quiz</button>
          <button class="btn" data-act="cards" data-id="${esc(t.id)}" type="button">Flashcards</button>
          ${claudeSample && t.notes ? `<button class="btn" data-act="again" data-id="${esc(t.id)}" type="button">New test from these notes</button>` : ""}
          ${!t.example ? (pendingDelete === t.id ? `<span class="confirm">Delete this test? <button class="btn danger" data-act="del-yes" data-id="${esc(t.id)}" type="button">Delete</button><button class="btn ghost" data-act="del-no" type="button">Keep</button></span>` : `<button class="btn ghost danger" data-act="del" data-id="${esc(t.id)}" type="button">Delete</button>`) : ""}
        </div>
      </div>`;
    }).join("")}</div>`;
  el.querySelectorAll("[data-act]").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.id, act = b.dataset.act;
    if (act === "quiz") { setCurrent(id); show("quiz"); }
    else if (act === "cards") { setCurrent(id); show("cards"); }
    else if (act === "again") { prepareFromTest(getTest(id), null); }
    else if (act === "del") { pendingDelete = id; renderLibrary(); }
    else if (act === "del-no") { pendingDelete = null; renderLibrary(); }
    else if (act === "del-yes") {
      store.tests = store.tests.filter(t => t.id !== id); delete store.stats[id];
      if (store.pads) delete store.pads[id];
      if ($("#pad-text").dataset.test === id) { clearTimeout(padTimer); padTimer = null; $("#pad-text").dataset.test = ""; }
      if (store.currentId === id) store.currentId = SAMPLE.id;
      pendingDelete = null; save(); resetQuiz(); resetCards(); renderCurrent(); renderLibrary(); toast("Test deleted");
    }
  }));
}

/* ---------------- Make: source files ---------------- */
let files = []; // {id, name, kind:'image'|'text'|'error', blob?, text?, url?, status, pages?}
let reuse = null; // {label, text, avoid:[], focus}
let fid = 0;
const imgTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

function loadScript(src) {
  return new Promise((res, rej) => { if (document.querySelector(`script[src="${src}"]`)) return res(); const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => rej(new Error("load")); document.head.appendChild(s); });
}
async function ensurePdf() {
  if (window.pdfjsLib) return window.pdfjsLib;
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js");
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
  return window.pdfjsLib;
}
async function ensureMammoth() {
  if (window.mammoth) return window.mammoth;
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js");
  return window.mammoth;
}

async function addFiles(list, target = files, render = renderFiles) {
  for (const f of list) {
    const item = { id: ++fid, name: f.name || "file", kind: "pending", status: "Reading…" };
    target.push(item); render();
    try {
      const name = (f.name || "").toLowerCase();
      if (/\.(heic|heif)$/.test(name) || /heic|heif/.test(f.type)) {
        item.kind = "error"; item.status = "iPhone HEIC photos can't be read here. Save it as a JPEG, then add it again.";
      } else if (imgTypes.includes(f.type) || /\.(jpe?g|png|webp|gif)$/.test(name)) {
        item.kind = "image"; item.blob = f; item.url = URL.createObjectURL(f); item.status = "Photo";
      } else if (f.type === "application/pdf" || name.endsWith(".pdf")) {
        await readPdf(f, item, render);
      } else if (name.endsWith(".docx")) {
        const m = await ensureMammoth();
        const r = await m.extractRawText({ arrayBuffer: await f.arrayBuffer() });
        item.kind = "text"; item.text = r.value.trim(); item.status = `Word file · ${wordCount(item.text)} words`;
        if (!item.text) { item.kind = "error"; item.status = "No text found in this Word file."; }
      } else if (f.type.startsWith("text/") || /\.(txt|md|csv)$/.test(name)) {
        item.kind = "text"; item.text = (await f.text()).trim(); item.status = `Text · ${wordCount(item.text)} words`;
      } else {
        item.kind = "error"; item.status = "This file type isn't supported. Use photos, PDF, Word or text files.";
      }
    } catch (e) {
      item.kind = "error"; item.status = "Couldn't read this file. Try a different copy or paste the text.";
    }
    render();
  }
}
const wordCount = s => (s.match(/\S+/g) || []).length;
async function readPdf(f, item, render = renderFiles) {
  const pdfjs = await ensurePdf();
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await f.arrayBuffer()), isEvalSupported: false }).promise;
  const texts = [], images = [];
  const maxPages = Math.min(doc.numPages, 40);
  for (let p = 1; p <= maxPages; p++) {
    item.status = `Reading page ${p} of ${maxPages}…`; render();
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const txt = tc.items.map(i => i.str).join(" ").replace(/\s+/g, " ").trim();
    if (txt.length > 60) texts.push(`[Page ${p}] ${txt}`);
    else if (images.length < 8) {
      const vp = page.getViewport({ scale: 1.6 });
      const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
      await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      const blob = await new Promise(r => c.toBlob(r, "image/jpeg", 0.85));
      if (blob) images.push(blob);
    }
  }
  item.text = texts.join("\n"); item.pageImages = images;
  item.kind = "text";
  const parts = [`PDF · ${doc.numPages} page${doc.numPages === 1 ? "" : "s"}`];
  if (texts.length) parts.push(`${wordCount(item.text)} words`);
  if (images.length) parts.push(`${images.length} scanned page${images.length === 1 ? "" : "s"}`);
  if (doc.numPages > maxPages) parts.push(`first ${maxPages} pages used`);
  item.status = parts.join(" · ");
  if (!texts.length && !images.length) { item.kind = "error"; item.status = "No readable content found in this PDF."; }
}
function renderFileList(el, arr, remove) {
  el.innerHTML = arr.map(f => `<li class="file">
      ${f.kind === "image" ? `<img class="thumb" src="${f.url}" alt="">` : `<span class="thumb">${f.kind === "error" ? "!" : esc((f.name.split(".").pop() || "").toUpperCase().slice(0, 4))}</span>`}
      <div class="meta"><div class="name">${esc(f.name)}</div><div class="status ${f.kind === "error" ? "err" : ""}">${esc(f.status)}</div></div>
      <button class="icon-btn" data-rm="${f.id}" type="button" aria-label="Remove ${esc(f.name)}">×</button>
    </li>`).join("");
  el.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => {
    const id = Number(b.dataset.rm);
    const f = arr.find(x => x.id === id); if (f?.url) URL.revokeObjectURL(f.url);
    remove(id);
  }));
}
function renderFiles() {
  renderFileList($("#files"), files, id => { files = files.filter(x => x.id !== id); renderFiles(); });
  updateGenHint();
}
function bindDrop(dropEl, inputEl, onFiles) {
  ["dragenter", "dragover"].forEach(ev => dropEl.addEventListener(ev, e => { e.preventDefault(); dropEl.classList.add("over"); }));
  ["dragleave", "drop"].forEach(ev => dropEl.addEventListener(ev, e => { e.preventDefault(); dropEl.classList.remove("over"); }));
  dropEl.addEventListener("drop", e => { if (e.dataTransfer?.files?.length) onFiles([...e.dataTransfer.files]); });
  inputEl.addEventListener("change", e => { onFiles([...e.target.files]); e.target.value = ""; });
}
bindDrop($("#drop"), $("#file-input"), list => addFiles(list));
$("#paste").addEventListener("input", updateGenHint);
$("#reuse-clear").addEventListener("click", () => { reuse = null; renderMake(); });

/* ---------------- Make: settings ---------------- */
const settings = { count: 20, difficulty: "Mixed", styles: new Set(["Recall facts", "Real-life scenarios", "Which is NOT…"]) };
function chipGroup(sel, values, isOn, onClick, rerender = renderSettings) {
  const el = $(sel);
  el.innerHTML = values.map(v => `<button class="chip" type="button" aria-pressed="${isOn(v)}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
  el.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { onClick(b.dataset.v); rerender(); }));
}
function renderSettings() {
  chipGroup("#count-chips", ["10", "20", "30", "40", "50"], v => Number(v) === settings.count, v => { settings.count = Number(v); });
  $("#count").value = settings.count;
  chipGroup("#diff-chips", ["Easier", "Mixed", "Harder"], v => v === settings.difficulty, v => { settings.difficulty = v; });
  chipGroup("#style-chips", ["Recall facts", "Real-life scenarios", "Which is NOT…", "True / false", "Matching pairs"], v => settings.styles.has(v), v => { if (settings.styles.has(v)) { if (settings.styles.size > 1) settings.styles.delete(v); } else settings.styles.add(v); });
}
$("#count").addEventListener("change", e => { let n = Math.round(Number(e.target.value) || 20); n = Math.max(5, Math.min(60, n)); settings.count = n; renderSettings(); });

function renderMake() {
  renderSettings();
  renderConnect();
  if (reuse) { $("#reuse").hidden = false; $("#reuse-text").innerHTML = reuse.labelHtml; } else $("#reuse").hidden = true;
  updateGenHint();
}
function updateGenHint() {
  const hasSource = reuse || files.some(f => f.kind === "image" || (f.kind === "text" && (f.text || f.pageImages?.length))) || $("#paste").value.trim().length > 20;
  const busy = files.some(f => f.kind === "pending") || generating;
  $("#generate").disabled = !hasSource || busy;
  $("#gen-hint").textContent = generating ? "" : busy ? "Reading your files…" : !hasSource ? "Add your notes first." : !canGenerate() ? "Connect Claude first (top of this page)." : "";
}

function prepareFromTest(t, missedIdx) {
  if (!t) return;
  const avoid = t.questions.map(q => q.q);
  if (missedIdx && missedIdx.length) {
    const missedQs = missedIdx.map(i => t.questions[i]);
    const topics = [...new Set(missedQs.map(q => q.topic).filter(Boolean))];
    reuse = {
      labelHtml: `Using the notes from <strong>${esc(t.title)}</strong>, focused on the ${missedQs.length} question${missedQs.length === 1 ? "" : "s"} you missed.`,
      text: t.notes || "",
      avoid,
      missed: missedQs.map(q => `${q.q} (correct answer: ${q.options[q.answer]})`),
      source: t.source || t.title
    };
    settings.count = Math.min(40, Math.max(10, Math.round(missedQs.length * 2 / 5) * 5 || 10));
    $("#focus").value = topics.length ? `Focus on what I missed: ${topics.join(", ")}.` : "Focus on what I missed.";
  } else {
    reuse = { labelHtml: `Using the notes from <strong>${esc(t.title)}</strong>. New questions won't repeat the old ones.`, text: t.notes || "", avoid, source: t.source || t.title };
  }
  show("make");
}

/* ---------------- Claude (Anthropic API) ----------------
   Two ways to reach Claude, picked in config.js:
   1. No apiEndpoint (default): each visitor pastes their own Anthropic API key.
      The key stays in their browser and requests go straight to api.anthropic.com.
   2. apiEndpoint set: requests go to your own proxy (see worker/), which holds the key. */
const CFG = Object.assign({ apiEndpoint: "", model: "claude-sonnet-5-5", maxImages: 20 }, window.NTT_CONFIG || {});
const useProxy = !!CFG.apiEndpoint;
const KEY_STORE = "notes-to-test.apikey";
let apiKey = "";
try { apiKey = localStorage.getItem(KEY_STORE) || sessionStorage.getItem(KEY_STORE) || ""; } catch (e) {}
const canGenerate = () => useProxy || !!apiKey;
const claudeSample = true; // features that use Claude are always offered; generate() asks for a key when needed

function renderConnect() {
  const box = $("#connect");
  if (!box) return;
  box.hidden = useProxy;
  if (useProxy) return;
  $("#key-set").hidden = !apiKey;
  $("#key-form").hidden = !!apiKey;
  if (apiKey) $("#key-tail").textContent = "…" + apiKey.slice(-4);
}
function clearStoredKey() { try { localStorage.removeItem(KEY_STORE); sessionStorage.removeItem(KEY_STORE); } catch (e) {} }
$("#key-save").addEventListener("click", () => {
  const v = $("#api-key").value.trim();
  const err = $("#key-error");
  if (!v) { err.textContent = "Paste your API key first."; err.hidden = false; return; }
  if (!/^sk-ant-/.test(v)) { err.textContent = "That doesn't look like an Anthropic API key. Keys start with sk-ant-."; err.hidden = false; return; }
  err.hidden = true;
  apiKey = v;
  $("#api-key").value = "";
  clearStoredKey();
  try { ($("#key-remember").checked ? localStorage : sessionStorage).setItem(KEY_STORE, v); } catch (e) {}
  renderConnect(); updateGenHint(); $("#make-error").hidden = true;
  toast("Claude connected");
});
$("#api-key").addEventListener("input", () => { $("#key-error").hidden = true; });
$("#api-key").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); $("#key-save").click(); } });
$("#key-remove").addEventListener("click", () => {
  apiKey = ""; clearStoredKey(); renderConnect(); updateGenHint();
  toast("Key removed from this device");
});

const ERRORS = {
  auth: useProxy ? "The server's API key isn't working. Ask the site owner to check it." : "Anthropic didn't accept your API key. Remove it and paste a new one.",
  permission: "This API key isn't allowed to use this model. Check the key in the Anthropic Console.",
  billing: "The Anthropic account is out of credit. Add credit in the Anthropic Console, then try again.",
  rate_limited: "Too many requests right now. Wait a minute, then try again.",
  overloaded: "Claude is busy right now. Wait a moment, then try again.",
  too_large: "Your notes are too long for one test. Remove a file or paste a shorter section.",
  image_rejected: "One of the photos couldn't be read. Try a JPEG or PNG.",
  refused: "Claude couldn't make a test from these notes. Try different notes.",
  invalid_json: "The questions came back in an unexpected format. Try again, or ask for fewer questions.",
  empty_completion: "Claude didn't return any questions. Try again with fewer questions.",
  network: useProxy ? "Couldn't reach the server. Check your connection and try again." : "Couldn't reach Anthropic. Check your connection and try again.",
};
const errText = e => ERRORS[e?.code] || (e?.message ? "Claude returned an error: " + e.message : "Something went wrong reaching Claude. Try again.");

// Shrink a photo or scanned page to a JPEG Claude can read (max 1568px on the long side).
async function toImageBlock(blob) {
  let bmp;
  try { bmp = await createImageBitmap(blob, { imageOrientation: "from-image" }); }
  catch (e) { throw { code: "image_rejected" }; }
  const scale = Math.min(1, 1568 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(bmp.width * scale));
  c.height = Math.max(1, Math.round(bmp.height * scale));
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(bmp, 0, 0, c.width, c.height);
  if (bmp.close) bmp.close();
  const data = c.toDataURL("image/jpeg", 0.82).split(",")[1];
  return { type: "image", source: { type: "base64", media_type: "image/jpeg", data } };
}

// Send one request to Claude and stream the reply. Returns the full text.
async function callClaude(prompt, imageBlocks, { signal, onText }) {
  const content = [...imageBlocks, { type: "text", text: prompt }];
  let res;
  try {
    if (useProxy) {
      res = await fetch(CFG.apiEndpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(content), signal });
    } else {
      res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", signal,
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({ model: CFG.model, max_tokens: 12000, stream: true, messages: [{ role: "user", content }] })
      });
    }
  } catch (e) {
    if (e?.name === "AbortError") throw { code: "cancelled" };
    throw { code: "network" };
  }
  if (!res.ok) {
    let msg = "";
    try { const j = await res.json(); msg = j?.error?.message || ""; } catch (e) {}
    const s = res.status;
    const code =
      s === 401 ? "auth" :
      s === 403 ? (useProxy ? "proxy" : "permission") :
      s === 413 ? "too_large" :
      s === 429 ? "rate_limited" :
      (s === 500 || s === 503 || s === 529) ? "overloaded" :
      /credit balance/i.test(msg) ? "billing" :
      /too long|too large|exceed/i.test(msg) ? "too_large" : "api";
    throw { code, message: msg };
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "", text = "", stop = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true }).replace(/\r\n/g, "\n");
      let i;
      while ((i = buf.indexOf("\n\n")) >= 0) {
        const evt = buf.slice(0, i);
        buf = buf.slice(i + 2);
        const data = evt.split("\n").filter(l => l.startsWith("data:")).map(l => l.slice(5).trim()).join("");
        if (!data) continue;
        let d;
        try { d = JSON.parse(data); } catch (e) { continue; }
        if (d.type === "content_block_delta" && d.delta?.type === "text_delta") { text += d.delta.text; if (onText) onText(text); }
        else if (d.type === "message_delta" && d.delta?.stop_reason) stop = d.delta.stop_reason;
        else if (d.type === "error") throw { code: d.error?.type === "overloaded_error" ? "overloaded" : "api", message: d.error?.message };
      }
    }
  } catch (e) {
    if (e?.name === "AbortError") throw { code: "cancelled" };
    throw e?.code ? e : { code: "network" };
  }
  if (stop === "refusal") throw { code: "refused" };
  if (!text.trim()) throw { code: "empty_completion" };
  return text;
}

// Read JSON from Claude's reply, even if it's wrapped in a code fence or a sentence.
function parseJSON(text) {
  const attempt = s => { try { return JSON.parse(s); } catch (e) { return undefined; } };
  let v = attempt(text.trim());
  if (v !== undefined) return v;
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) { v = attempt(fence[1]); if (v !== undefined) return v; }
  const a = text.indexOf("{"), b = text.lastIndexOf("}");
  if (a >= 0 && b > a) { v = attempt(text.slice(a, b + 1)); if (v !== undefined) return v; }
  throw { code: "invalid_json" };
}

let generating = false;
let genCtl = null;
$("#gen-stop").addEventListener("click", () => genCtl?.abort());
$("#generate").addEventListener("click", generate);

function buildPrompt({ n, sourceText, imageCount, avoid, wantMeta, missed }) {
  const styles = [...settings.styles].map(s => ({
    "Recall facts": "straight recall of facts and definitions",
    "Real-life scenarios": "real-life scenario questions that make the student apply a fact",
    "Which is NOT…": "\"Which is NOT…\" questions",
    "True / false": "true/false questions (options exactly [\"True\", \"False\"])",
    "Matching pairs": "matching questions where each option is a full set of pairings, only one set correct"
  }[s])).join("; ");
  const diff = { Easier: "Easier: direct questions with clearly different options.", Mixed: "Mixed: mostly medium, a few easy and a few harder ones.", Harder: "Harder: close distractors and questions that combine two facts." }[settings.difficulty];
  const focus = $("#focus").value.trim();
  return [
    `Write a multiple-choice practice test for a student, based only on the study material below${imageCount ? " and in the " + imageCount + " attached image" + (imageCount === 1 ? "" : "s") : ""}.`,
    imageCount ? "The images are photos or scans of handwritten or printed notes, worksheets and labeled diagrams. Some may be rotated or upside down; read them in whatever orientation they are in. Labeled diagrams count as part of the material." : "",
    `Write exactly ${n} questions.`,
    `Difficulty: ${diff}`,
    `Question types to mix: ${styles}.`,
    focus ? `The student asked: "${focus.slice(0, 600)}"` : "",
    missed && missed.length ? `The student got these questions wrong. Write new questions that test the same facts in different ways, and spend most of the test on these facts:\n- ${missed.slice(0, 60).join("\n- ")}` : "",
    "Rules:",
    "- Every question must be answerable from the material. Don't test facts that aren't in it.",
    "- If the material has an obvious factual error, use the correct fact and say so briefly in the explanation.",
    "- 4 options per question, except true/false which has exactly 2. Exactly one correct option. Wrong options should be believable, ideally other terms from the same material.",
    "- Don't use \"All of the above\" or \"None of the above\". Vary which position holds the correct option.",
    "- explanation: 1 or 2 short, plain sentences on why the answer is right.",
    "- hint: a short nudge that doesn't give the answer away.",
    "- topic: a 1 to 3 word topic label. Reuse the same small set of labels across questions.",
    avoid && avoid.length ? `Don't repeat or lightly reword any of these questions the student has already seen:\n- ${avoid.slice(-90).join("\n- ")}` : "",
    wantMeta ? "Also return \"title\" (a short name for the test, like \"Bio Units 5-6: Muscles & Skin\") and \"notes\" (a faithful plain-text bullet list of the key facts in the material, up to about 700 words, so more tests can be made later without the files)." : "",
    "",
    "Reply with only JSON in this shape:",
    `{${wantMeta ? '"title": "...", "notes": "...", ' : ""}"questions": [{"q": "question text", "options": ["...", "...", "...", "..."], "answer": 0, "explanation": "...", "hint": "...", "topic": "..."}]}`,
    "\"answer\" is the 0-based index of the correct option.",
    sourceText ? `\nStudy material (text):\n"""\n${sourceText}\n"""` : ""
  ].filter(Boolean).join("\n");
}

function cleanQuestions(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(x => {
    if (!x || typeof x !== "object") return null;
    const options = Array.isArray(x.options) ? x.options.map(o => String(o ?? "").trim()).filter(Boolean) : [];
    const answer = Number(x.answer);
    const q = String(x.q ?? x.question ?? "").trim();
    if (!q || options.length < 2 || options.length > 6 || !Number.isInteger(answer) || answer < 0 || answer >= options.length) return null;
    return { q, options, answer, explanation: String(x.explanation ?? "").trim(), hint: String(x.hint ?? "").trim(), topic: String(x.topic ?? "").trim().slice(0, 40) };
  }).filter(Boolean);
}

function setGenStatus(label, frac, sub) {
  $("#gen-status").hidden = false;
  $("#gen-label").textContent = label;
  $("#gen-bar").style.width = Math.round(Math.max(0.03, Math.min(1, frac)) * 100) + "%";
  if (sub !== undefined) $("#gen-sub").textContent = sub;
}

async function generate() {
  if (generating) return;
  if (!canGenerate()) { showMakeError("Connect Claude first: paste your Anthropic API key at the top of this page."); $("#api-key")?.focus(); return; }
  $("#make-error").hidden = true;
  // Gather source
  let text = reuse ? (reuse.text || "") : "";
  let images = [];
  const labels = [];
  if (!reuse) {
    files.forEach(f => {
      if (f.kind === "image") { images.push(f.blob); labels.push(f.name); }
      if (f.kind === "text") { if (f.text) text += `\n\n[From ${f.name}]\n${f.text}`; if (f.pageImages) images.push(...f.pageImages); labels.push(f.name); }
    });
    const pasted = $("#paste").value.trim();
    if (pasted) { text += `\n\n[Pasted notes]\n${pasted}`; labels.push("pasted notes"); }
  }
  text = text.trim();
  if (!text && !images.length) { showMakeError("Add your notes first: photos, a file, or pasted text."); return; }
  if (text.length > 180000) { showMakeError(ERRORS.too_large); return; }
  let dropped = 0;
  if (images.length) {
    const imageLimit = Math.max(1, Number(CFG.maxImages) || 20);
    if (images.length > imageLimit) { dropped = images.length - imageLimit; images = images.slice(0, imageLimit); }
  }

  const total = settings.count;
  const batches = Math.ceil(total / 15);
  const sizes = range(batches).map(i => Math.floor(total / batches) + (i < total % batches ? 1 : 0));
  const collected = [];
  let title = "", notes = "";
  const avoid = reuse?.avoid ? reuse.avoid.slice() : [];
  generating = true; updateGenHint();
  genCtl = new AbortController();
  $("#gen-stop").hidden = false;
  const sub = (dropped ? `Only the first ${images.length} images could be sent; ${dropped} left out. ` : "") + "This usually takes 1 to 2 minutes for every 15 questions.";
  setGenStatus("Reading your notes…", 0.03, sub);

  try {
    const imageBlocks = [];
    for (let i = 0; i < images.length; i++) {
      setGenStatus(`Preparing photo ${i + 1} of ${images.length}…`, 0.03);
      imageBlocks.push(await toImageBlock(images[i]));
      if (genCtl.signal.aborted) throw { code: "cancelled" };
    }
    for (let b = 0; b < batches; b++) {
      const n = sizes[b];
      const before = collected.length;
      const prompt = buildPrompt({ n, sourceText: text || (b > 0 ? notes : ""), imageCount: images.length, avoid: avoid.concat(collected.map(q => q.q)), wantMeta: b === 0 && !reuse, missed: reuse?.missed });
      const raw = await callClaude(prompt, imageBlocks, {
        signal: genCtl.signal,
        onText: t => {
          const seen = Math.min(n, (t.match(/"q"\s*:/g) || []).length);
          setGenStatus(`Writing question ${Math.min(total, before + Math.max(1, seen))} of ${total}…`, (before + seen) / total);
        }
      });
      const out = parseJSON(raw);
      if (b === 0) { title = String(out?.title || "").trim(); notes = String(out?.notes || "").trim(); }
      const qs = cleanQuestions(out?.questions);
      collected.push(...qs);
      setGenStatus(`${collected.length} of ${total} questions written`, collected.length / total);
    }
    if (!collected.length) throw { code: "empty_completion" };
    finishGenerate({ title, notes, questions: collected, labels, text });
  } catch (e) {
    if (collected.length) {
      finishGenerate({ title, notes, questions: collected, labels, text }, e?.code === "cancelled" ? `Stopped. Saved the ${collected.length} questions written so far.` : `${errText(e)} Saved the ${collected.length} questions written so far.`);
    } else if (e?.code === "cancelled") {
      toast("Stopped");
    } else {
      showMakeError(errText(e));
    }
  } finally {
    generating = false; genCtl = null; $("#gen-status").hidden = true; updateGenHint();
  }
}
function showMakeError(msg) { const el = $("#make-error"); el.textContent = msg; el.hidden = false; }
function finishGenerate({ title, notes, questions, labels, text }, message) {
  const fallbackTitle = reuse ? "Review: " + (reuse.source || "practice test") : "Practice test";
  const t = {
    id: "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    title: (title || fallbackTitle).slice(0, 80),
    source: reuse ? reuse.source : (labels.length ? labels.slice(0, 4).join(", ") + (labels.length > 4 ? ` and ${labels.length - 4} more` : "") : "your notes"),
    created: new Date().toISOString(),
    notes: (notes || reuse?.text || text || "").slice(0, 30000),
    questions
  };
  store.tests.push(t);
  reuse = null;
  setCurrent(t.id);
  toast(message || `Your ${questions.length}-question test is ready`);
  show("quiz");
}

/* ---------------- Notepad (one per test, saved on this device) ---------------- */
if (!store.pads) store.pads = {};
let padOpen = typeof store.padOpen === "boolean" ? store.padOpen : window.matchMedia("(min-width: 1120px)").matches;
let padTimer = null;
let padConfirm = false;

// The notepad belongs to the open answer sheet on the Solutions tab, otherwise to the current test.
function padContext() {
  if (activeView === "solutions" && solOpenId) { const s = getSolution(solOpenId); if (s) return { id: "sol:" + s.id, title: s.title }; }
  const t = current();
  return { id: t.id, title: t.title };
}
function renderPad() {
  const t = padContext();
  $("#layout").classList.toggle("pad-open", padOpen);
  $("#notepad").hidden = !padOpen;
  $("#pad-toggle").setAttribute("aria-pressed", String(padOpen));
  $("#pad-for").textContent = "For " + t.title;
  const ta = $("#pad-text");
  if (ta.dataset.test !== t.id) { ta.value = store.pads[t.id] || ""; ta.dataset.test = t.id; ta.scrollTop = 0; }
  padConfirm = false;
  renderPadConfirm();
  padStatus();
  updatePadButtons();
}
function padStatus(msg) {
  const w = wordCount($("#pad-text").value);
  $("#pad-status").textContent = (msg ? msg + " · " : "") + w + (w === 1 ? " word" : " words");
}
function savePadNow() {
  const ta = $("#pad-text");
  const id = ta.dataset.test;
  clearTimeout(padTimer); padTimer = null;
  if (!id) return;
  if (ta.value.trim()) store.pads[id] = ta.value; else delete store.pads[id];
  save();
  padStatus("Saved");
}
function flushPad() { if (padTimer) savePadNow(); }
function togglePad(open) {
  flushPad();
  padOpen = open; store.padOpen = open; save();
  renderPad();
}
function renderPadConfirm() { $("#pad-foot").hidden = padConfirm; $("#pad-confirm").hidden = !padConfirm; }
function padQuestion() {
  const t = current();
  if (activeView === "quiz" && quiz && !quiz.done && quiz.testId === t.id) {
    const qi = quiz.order[quiz.pos];
    return { q: t.questions[qi], ready: quiz.picks[qi] !== undefined };
  }
  if (activeView === "cards" && cards && cards.testId === t.id && cards.order.length) return { q: t.questions[cards.order[cards.pos]], ready: true };
  return null;
}
function updatePadButtons() {
  const b = $("#pad-add");
  if (!b) return;
  const pq = padQuestion();
  b.hidden = !pq;
  b.disabled = !!pq && !pq.ready;
  b.textContent = pq && !pq.ready ? "Answer first to add" : activeView === "cards" ? "Add this card" : "Add this question";
}
const padEntry = q => `• ${q.q}\n  Answer: ${q.options[q.answer]}${q.explanation ? "\n  Why: " + q.explanation : ""}`;
function appendPad(text) {
  const ta = $("#pad-text");
  const id = padContext().id;
  if (ta.dataset.test !== id) { ta.value = store.pads[id] || ""; ta.dataset.test = id; }
  const cur = ta.value.replace(/\s+$/, "");
  ta.value = (cur ? cur + "\n\n" : "") + text;
  savePadNow();
  ta.scrollTop = ta.scrollHeight;
}

$("#pad-toggle").addEventListener("click", () => togglePad(!padOpen));
$("#pad-close").addEventListener("click", () => { togglePad(false); $("#pad-toggle").focus(); });
$("#pad-text").addEventListener("input", () => { padStatus("Saving…"); clearTimeout(padTimer); padTimer = setTimeout(savePadNow, 500); });
$("#pad-text").addEventListener("blur", flushPad);
window.addEventListener("pagehide", flushPad);
$("#pad-add").addEventListener("click", () => {
  const pq = padQuestion();
  if (!pq || !pq.ready) return;
  appendPad(padEntry(pq.q));
  toast("Added to your notepad");
});
$("#pad-copy").addEventListener("click", async () => {
  const ta = $("#pad-text");
  if (!ta.value.trim()) { toast("The notepad is empty"); return; }
  try { await navigator.clipboard.writeText(ta.value); toast("Notes copied"); }
  catch (e) { ta.focus(); ta.select(); toast("Press Ctrl+C (or Cmd+C) to copy"); }
});
$("#pad-clear").addEventListener("click", () => {
  if (!$("#pad-text").value.trim()) { toast("The notepad is already empty"); return; }
  padConfirm = true; renderPadConfirm(); $("#pad-clear-no").focus();
});
$("#pad-clear-no").addEventListener("click", () => { padConfirm = false; renderPadConfirm(); $("#pad-clear").focus(); });
$("#pad-clear-yes").addEventListener("click", () => {
  $("#pad-text").value = ""; savePadNow();
  padConfirm = false; renderPadConfirm(); toast("Notes cleared");
});

/* ---------------- Solutions: answers for an uploaded worksheet ---------------- */
// How Solutions reaches Claude in this version: the visitor's API key, or your Worker.
const claudeAvailable = () => canGenerate();
const maxImagesAllowed = () => Math.max(1, Number(CFG.maxImages) || 20);
const noClaudeMsg = "Connect Claude first: add your Anthropic API key at the top of the Make a test page.";
async function askClaudeText(prompt, images, { signal, onText }) {
  const blocks = [];
  for (const im of images) {
    blocks.push(await toImageBlock(im));
    if (signal.aborted) throw { code: "cancelled" };
  }
  return callClaude(prompt, blocks, { signal, onText });
}

const SOL_SAMPLE = {
  id: "example-solutions",
  title: "Muscles & Skin Worksheet",
  source: "Example worksheet",
  created: "2026-11-12T19:00:00-06:00",
  example: true,
  items: [
    { num: "1", question: "Which type of muscle is found only in the heart?", options: ["A. Skeletal", "B. Smooth", "C. Cardiac", "D. Striated"], answer: "C. Cardiac", explanation: "Cardiac muscle is involuntary, branched and striated, and it's only found in the heart.", steps: [], unsure: false, note: "", studentAnswer: "C", studentCorrect: true },
    { num: "2", question: "A muscle that straightens a part of your body is called an ________.", options: [], answer: "extensor", explanation: "Extensors straighten (triceps, quadriceps). Flexors bend (biceps, hamstring).", steps: [], unsure: false, note: "", studentAnswer: "flexor", studentCorrect: false },
    { num: "3", question: "List the three layers of the skin, from outside to inside.", options: [], answer: "Epidermis, dermis, subcutaneous", explanation: "The epidermis is the outer layer, the dermis is the middle layer with glands and nerves, and the subcutaneous layer is the deepest, made of fat.", steps: [], unsure: false, note: "", studentAnswer: "", studentCorrect: null },
    { num: "4", question: "Name two functions of the skin.", options: [], answer: "Any two of: protection, sense, body temperature regulation, getting rid of wastes, vitamin D synthesis.", explanation: "The skin has five functions, so any two of them answer the question.", steps: [], unsure: false, note: "", studentAnswer: "", studentCorrect: null },
    { num: "5", question: "A muscle fiber is 0.1 mm wide. How many fibers fit side by side across 5 mm?", options: [], answer: "50 fibers", explanation: "Divide the total width by the width of one fiber.", steps: ["Both widths are already in millimeters.", "5 mm ÷ 0.1 mm = 50"], unsure: false, note: "", studentAnswer: "", studentCorrect: null },
    { num: "6", question: "Label the large muscle of the buttocks on the back view of the diagram.", options: [], answer: "Gluteus maximus", explanation: "The gluteus maximus is the largest muscle in the body and sits on the buttocks.", steps: [], unsure: true, note: "The arrow in the photo was hard to see. This answer assumes it points to the buttocks.", studentAnswer: "", studentCorrect: null }
  ]
};

if (!Array.isArray(store.solutions)) store.solutions = [];
const solSettings = Object.assign({ detail: "Answers + why", hide: true }, store.solSettings || {});
let solFiles = [];
let solOpenId = null;
let solRevealed = new Set();
let solving = false;
let solCtl = null;
let pendingSolDelete = null;

const getSolution = id => id === SOL_SAMPLE.id ? SOL_SAMPLE : store.solutions.find(s => s.id === id);

function buildSolvePrompt({ sourceText, imageCount }) {
  const stepByStep = solSettings.detail === "Step-by-step";
  return [
    `A student wants help checking their work. Below${imageCount ? ` and in the ${imageCount} attached image${imageCount === 1 ? "" : "s"}` : ""} is a worksheet, homework sheet, quiz or review packet.`,
    imageCount ? "The images are photos or scans of the pages. Some may be rotated or upside down; read them in whatever orientation they are in. Handwriting may be messy." : "",
    "Find every question or task in it, in order, and answer each one.",
    "Rules:",
    "- Keep the document's own numbering (for example \"3\" or \"4b\"). If there is none, number them 1, 2, 3.",
    "- Copy each question's text faithfully. Shorten very long reading passages with \"…\". For multiple choice, copy the options exactly, with their letters.",
    "- Give each answer in the form the sheet expects: the letter and text for multiple choice, the missing word for a blank, label → name pairs for a diagram, a number with units for math.",
    "- Use accurate knowledge of the subject. If the sheet includes notes or a word bank, use them, but correct any obvious mistakes and say so.",
    "- explanation: 1 to 3 short, plain sentences on why the answer is right, written for a student.",
    stepByStep ? "- steps: for every question, a list of short steps showing how to reach the answer." : "- steps: only for math or multi-step problems, a list of short steps. Otherwise an empty list.",
    "- If a question is hard to read, cut off, or depends on a picture you can't see clearly, still give your best answer, set \"unsure\" to true and say why in \"note\".",
    "- If the student already wrote an answer on the sheet, copy it into \"student_answer\" and set \"student_correct\" to true or false. Otherwise use \"\" and null.",
    "- Skip name and date lines, and instructions that aren't questions.",
    "",
    "Reply with only JSON in this shape:",
    '{"title": "short name for the sheet", "items": [{"num": "1", "question": "...", "options": [], "answer": "...", "explanation": "...", "steps": [], "unsure": false, "note": "", "student_answer": "", "student_correct": null}]}',
    sourceText ? `\nWorksheet (text):\n"""\n${sourceText}\n"""` : ""
  ].filter(Boolean).join("\n");
}

// Read Claude's JSON reply. If the reply was cut off, keep every question that came through whole.
function parseSolutions(text) {
  const attempt = s => { try { return JSON.parse(s); } catch (e) { return undefined; } };
  const t = String(text || "").trim();
  let v = attempt(t);
  if (v === undefined) { const f = t.match(/```(?:json)?\s*([\s\S]*?)```/); if (f) v = attempt(f[1]); }
  if (v === undefined) { const a = t.indexOf("{"), b = t.lastIndexOf("}"); if (a >= 0 && b > a) v = attempt(t.slice(a, b + 1)); }
  if (v !== undefined) return { value: v, partial: false };
  const start = t.indexOf("{");
  if (start >= 0 && t.indexOf('"items"') > start) {
    for (let pos = t.lastIndexOf("}"), tries = 0; pos > start && tries < 80; pos = t.lastIndexOf("}", pos - 1), tries++) {
      v = attempt(t.slice(start, pos + 1) + "]}");
      if (v !== undefined && Array.isArray(v.items)) return { value: v, partial: true };
    }
  }
  throw { code: "invalid_json" };
}

function cleanSolutionItems(arr) {
  if (!Array.isArray(arr)) return [];
  const list = a => Array.isArray(a) ? a.map(s => String(s ?? "").trim()).filter(Boolean).slice(0, 20) : [];
  return arr.map((x, i) => {
    if (!x || typeof x !== "object") return null;
    const question = String(x.question ?? x.q ?? "").trim();
    const answer = Array.isArray(x.answer) ? x.answer.map(String).join("; ") : String(x.answer ?? "").trim();
    if (!question || !answer) return null;
    const sc = x.student_correct ?? x.studentCorrect;
    return {
      num: String(x.num ?? "").trim().slice(0, 12) || String(i + 1),
      question, options: list(x.options), answer,
      explanation: String(x.explanation ?? "").trim(),
      steps: list(x.steps),
      unsure: x.unsure === true,
      note: String(x.note ?? "").trim(),
      studentAnswer: String(x.student_answer ?? x.studentAnswer ?? "").trim(),
      studentCorrect: sc === true ? true : sc === false ? false : null
    };
  }).filter(Boolean);
}

const solEntry = x => `• ${x.num}. ${x.question}${x.options.length ? "\n  " + x.options.join("\n  ") : ""}\n  Answer: ${x.answer}${x.steps.length ? "\n  Steps: " + x.steps.join(" → ") : ""}${x.explanation ? "\n  Why: " + x.explanation : ""}`;
const solText = s => s.items.map(x => `${x.num}. ${x.question}${x.options.length ? "\n" + x.options.join("\n") : ""}\nAnswer: ${x.answer}${x.steps.length ? "\nSteps: " + x.steps.join(" → ") : ""}${x.explanation ? "\nWhy: " + x.explanation : ""}`).join("\n\n");

/* Uploading */
bindDrop($("#sol-drop"), $("#sol-file-input"), list => addFiles(list, solFiles, renderSolFiles));
function renderSolFiles() {
  renderFileList($("#sol-files"), solFiles, id => { solFiles = solFiles.filter(x => x.id !== id); renderSolFiles(); });
  updateSolHint();
}
$("#sol-paste").addEventListener("input", updateSolHint);

function renderSolSettings() {
  chipGroup("#sol-detail-chips", ["Answers + why", "Step-by-step"], v => v === solSettings.detail, v => { solSettings.detail = v; saveSolSettings(); }, renderSolSettings);
  chipGroup("#sol-reveal-chips", ["Hide until I tap", "Show right away"], v => (v === "Hide until I tap") === solSettings.hide, v => { solSettings.hide = v === "Hide until I tap"; saveSolSettings(); }, renderSolSettings);
}
function saveSolSettings() { store.solSettings = { detail: solSettings.detail, hide: solSettings.hide }; save(); }

function updateSolHint() {
  const hasSource = solFiles.some(f => f.kind === "image" || (f.kind === "text" && (f.text || f.pageImages?.length))) || $("#sol-paste").value.trim().length > 10;
  const busy = solFiles.some(f => f.kind === "pending") || solving;
  $("#sol-go").disabled = !hasSource || busy;
  $("#sol-hint").textContent = solving ? "" : busy ? "Reading your files…" : !hasSource ? "Add your worksheet first." : !claudeAvailable() ? noClaudeMsg : "";
}
function solError(msg) { const el = $("#sol-error"); el.textContent = msg; el.hidden = false; }
function setSolStatus(label, frac, sub) {
  $("#sol-status").hidden = false;
  $("#sol-label").textContent = label;
  $("#sol-bar").style.width = Math.round(Math.max(0.03, Math.min(1, frac)) * 100) + "%";
  if (sub !== undefined) $("#sol-sub").textContent = sub;
}

$("#sol-stop").addEventListener("click", () => solCtl?.abort());
$("#sol-go").addEventListener("click", solve);

async function solve() {
  if (solving) return;
  $("#sol-error").hidden = true;
  if (!claudeAvailable()) { solError(noClaudeMsg); return; }
  let text = "";
  let images = [];
  const labels = [];
  solFiles.forEach(f => {
    if (f.kind === "image") { images.push(f.blob); labels.push(f.name); }
    if (f.kind === "text") { if (f.text) text += `\n\n[From ${f.name}]\n${f.text}`; if (f.pageImages) images.push(...f.pageImages); labels.push(f.name); }
  });
  const pasted = $("#sol-paste").value.trim();
  if (pasted) { text += `\n\n[Pasted]\n${pasted}`; labels.push("pasted text"); }
  text = text.trim();
  if (!text && !images.length) { solError("Add your worksheet first: photos, a file, or pasted text."); return; }
  if (text.length > 180000) { solError("This worksheet is too long for one go. Upload fewer pages at a time."); return; }
  const cap = maxImagesAllowed();
  let dropped = 0;
  if (images.length > cap) {
    if (!cap && !text) { solError("Photos can't be sent from this view. Paste the questions as text instead."); return; }
    dropped = images.length - cap; images = images.slice(0, cap);
  }

  solving = true;
  solCtl = new AbortController();
  updateSolHint();
  setSolStatus("Reading your worksheet…", 0.04, (dropped ? `Only the first ${images.length} pages could be sent; ${dropped} left out. ` : "") + "A one-page sheet usually takes under a minute.");
  try {
    const raw = await askClaudeText(buildSolvePrompt({ sourceText: text, imageCount: images.length }), images, {
      signal: solCtl.signal,
      onText: t => {
        const n = (t.match(/"answer"\s*:/g) || []).length;
        setSolStatus(n ? `Answered ${n} question${n === 1 ? "" : "s"}…` : "Reading your worksheet…", Math.min(0.95, 0.06 + n * 0.05));
      }
    });
    const { value, partial } = parseSolutions(raw);
    const items = cleanSolutionItems(value?.items);
    if (!items.length) throw { code: "no_questions" };
    const s = {
      id: "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: String(value?.title || "").trim().slice(0, 80) || "Worksheet answers",
      source: labels.slice(0, 4).join(", ") + (labels.length > 4 ? ` and ${labels.length - 4} more` : ""),
      created: new Date().toISOString(),
      items
    };
    store.solutions.push(s);
    save();
    solFiles.forEach(f => { if (f.url) URL.revokeObjectURL(f.url); });
    solFiles = [];
    $("#sol-paste").value = "";
    renderSolFiles();
    openSolution(s.id);
    toast(partial ? `The reply was cut off, so only the first ${items.length} questions were answered. Upload the rest separately.` : `Answered ${items.length} question${items.length === 1 ? "" : "s"}`);
  } catch (e) {
    if (e?.code === "cancelled" || e?.name === "AbortError") toast("Stopped");
    else if (e?.code === "no_questions") solError("Claude couldn't find any questions in this file. Try a clearer photo, or paste the questions as text.");
    else solError(errText(e));
  } finally {
    solving = false; solCtl = null; $("#sol-status").hidden = true; updateSolHint();
  }
}

/* Viewing */
function openSolution(id) {
  const s = getSolution(id);
  if (!s) return;
  flushPad();
  solOpenId = id;
  solRevealed = new Set(solSettings.hide ? [] : s.items.map((_, i) => i));
  if (activeView !== "solutions") show("solutions"); else { renderSolutions(); renderPad(); }
  window.scrollTo(0, 0);
}
function closeSolution() {
  flushPad();
  solOpenId = null;
  renderSolutions();
  renderPad();
  window.scrollTo(0, 0);
}

function renderSolutions() {
  const s = solOpenId ? getSolution(solOpenId) : null;
  if (!s) solOpenId = null;
  $("#sol-new").hidden = !!s;
  $("#sol-open").hidden = !s;
  if (s) renderSolOpen(s);
  else { renderSolSettings(); renderSolSaved(); updateSolHint(); }
}

function renderSolSaved() {
  const list = [...store.solutions].sort((a, b) => (b.created || "").localeCompare(a.created || "")).concat([SOL_SAMPLE]);
  const el = $("#sol-saved");
  el.innerHTML = list.map(s => {
    const checked = s.items.filter(x => x.studentCorrect !== null);
    return `<div class="sol-saved-item">
      <div class="lib-head"><h3>${esc(s.title)}</h3>${s.example ? '<span class="pill example">Example</span>' : ""}</div>
      <div class="lib-meta"><span>${s.items.length} question${s.items.length === 1 ? "" : "s"}</span>${s.created ? `<span>${fmtDate(s.created)}</span>` : ""}${checked.length ? `<span>Sheet answers: ${checked.filter(x => x.studentCorrect).length} of ${checked.length} right</span>` : ""}${s.source ? `<span>From: ${esc(s.source)}</span>` : ""}</div>
      <div class="btn-row">
        <button class="btn" data-sol-open="${esc(s.id)}" type="button">Open</button>
        ${!s.example ? (pendingSolDelete === s.id
          ? `<span class="confirm">Delete these answers? <button class="btn danger" data-sol-del-yes="${esc(s.id)}" type="button">Delete</button><button class="btn ghost" data-sol-del-no type="button">Keep</button></span>`
          : `<button class="btn ghost danger" data-sol-del="${esc(s.id)}" type="button">Delete</button>`) : ""}
      </div>
    </div>`;
  }).join("");
  el.querySelectorAll("[data-sol-open]").forEach(b => b.addEventListener("click", () => openSolution(b.dataset.solOpen)));
  el.querySelectorAll("[data-sol-del]").forEach(b => b.addEventListener("click", () => { pendingSolDelete = b.dataset.solDel; renderSolSaved(); }));
  el.querySelectorAll("[data-sol-del-no]").forEach(b => b.addEventListener("click", () => { pendingSolDelete = null; renderSolSaved(); }));
  el.querySelectorAll("[data-sol-del-yes]").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.solDelYes;
    store.solutions = store.solutions.filter(s => s.id !== id);
    delete store.pads["sol:" + id];
    if ($("#pad-text").dataset.test === "sol:" + id) { clearTimeout(padTimer); padTimer = null; $("#pad-text").dataset.test = ""; }
    pendingSolDelete = null; save(); renderSolSaved(); renderPad(); toast("Answers deleted");
  }));
}

function solItemHtml(x, i) {
  const shown = solRevealed.has(i);
  const verdict = x.studentCorrect === true ? ' <span class="pill good">Correct</span>' : x.studentCorrect === false ? ' <span class="pill bad">Check this</span>' : "";
  return `<article class="sheet sol" id="sol-item-${i}">
    <div class="sol-head"><span class="sol-num">${esc(x.num)}</span><p class="sol-q">${esc(x.question)}</p></div>
    ${x.options.length ? `<ul class="sol-opts">${x.options.map(o => `<li>${esc(o)}</li>`).join("")}</ul>` : ""}
    ${x.studentAnswer ? `<p class="sol-student">On the sheet: <strong>${esc(x.studentAnswer)}</strong>${verdict}</p>` : ""}
    ${shown ? `<div class="sol-ans">
      <div class="eyebrow">Answer</div>
      <div class="sol-answer ${x.answer.length > 48 ? "long" : ""}">${esc(x.answer)}</div>
      ${x.steps.length ? `<ol class="sol-steps">${x.steps.map(st => `<li>${esc(st)}</li>`).join("")}</ol>` : ""}
      ${x.explanation ? `<p class="sol-why">${esc(x.explanation)}</p>` : ""}
      ${x.unsure ? `<p class="sol-unsure"><span class="pill warn">Double-check</span> ${esc(x.note || "Claude wasn't sure about this one.")}</p>` : ""}
    </div>` : ""}
    <div class="btn-row">
      <button class="btn sm" data-reveal="${i}" type="button" aria-expanded="${shown}">${shown ? "Hide answer" : "Show answer"}</button>
      ${shown ? `<button class="btn sm ghost" data-solpad="${i}" type="button">Add to notepad</button>` : ""}
    </div>
  </article>`;
}

function renderSolOpen(s) {
  const el = $("#sol-open");
  const allShown = s.items.every((_, i) => solRevealed.has(i));
  const checked = s.items.filter(x => x.studentCorrect !== null);
  const right = checked.filter(x => x.studentCorrect).length;
  const unsure = s.items.filter(x => x.unsure).length;
  el.innerHTML = `
    <div><button class="btn ghost sm" id="sol-back" type="button">← All answer sheets</button></div>
    <div class="sheet">
      <div class="lib-head"><h1 class="page-title">${esc(s.title)}</h1>${s.example ? '<span class="pill example">Example</span>' : ""}</div>
      <div class="lib-meta"><span>${s.items.length} question${s.items.length === 1 ? "" : "s"}</span>${s.created ? `<span>${fmtDate(s.created)}</span>` : ""}${s.source ? `<span>From: ${esc(s.source)}</span>` : ""}</div>
      ${checked.length ? `<p class="sol-score">Answers written on the sheet: <strong>${right} of ${checked.length} right</strong></p>` : ""}
      ${unsure ? `<p class="notice">${unsure} answer${unsure === 1 ? " is" : "s are"} marked "Double-check" because the question was hard to read or depended on a picture. Compare ${unsure === 1 ? "it" : "them"} with your notes or textbook.</p>` : ""}
      <div class="btn-row">
        <button class="btn primary" id="sol-toggle-all" type="button">${allShown ? "Hide all answers" : "Show all answers"}</button>
        <button class="btn" id="sol-practice" type="button">Make a practice test from this sheet</button>
        <button class="btn ghost" id="sol-pad-all" type="button">Add all to notepad</button>
        <button class="btn ghost" id="sol-copy" type="button">Copy all</button>
      </div>
    </div>
    <div class="sol-list">${s.items.map(solItemHtml).join("")}</div>
    <p class="sol-caution">Claude can make mistakes. Check answers that count toward your grade against your notes, textbook or teacher.</p>`;

  $("#sol-back").addEventListener("click", closeSolution);
  $("#sol-toggle-all").addEventListener("click", () => {
    solRevealed = allShown ? new Set() : new Set(s.items.map((_, i) => i));
    renderSolOpen(s);
  });
  $("#sol-copy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(`${s.title}\n\n${solText(s)}`); toast("Answers copied"); }
    catch (e) { toast("Copy didn't work here. Use Add all to notepad, then copy from there."); }
  });
  $("#sol-pad-all").addEventListener("click", () => {
    if (!padOpen) togglePad(true);
    appendPad(`${s.title}:\n` + s.items.map(solEntry).join("\n"));
    toast(`Added ${s.items.length} answers to your notepad`);
  });
  $("#sol-practice").addEventListener("click", () => {
    reuse = {
      labelHtml: `Using the questions and answers from <strong>${esc(s.title)}</strong>.`,
      text: solText(s),
      avoid: [],
      source: s.title
    };
    settings.count = Math.min(40, Math.max(10, Math.round(s.items.length * 1.5 / 5) * 5));
    $("#focus").value = "Test the same facts as this worksheet, with the questions worded differently.";
    show("make");
  });
  el.querySelectorAll("[data-reveal]").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.reveal);
    if (solRevealed.has(i)) solRevealed.delete(i); else solRevealed.add(i);
    renderSolOpen(s);
    el.querySelector(`[data-reveal="${i}"]`)?.focus({ preventScroll: true });
  }));
  el.querySelectorAll("[data-solpad]").forEach(b => b.addEventListener("click", () => {
    appendPad(solEntry(s.items[Number(b.dataset.solpad)]));
    toast("Added to your notepad");
  }));
}

/* ---------------- Keyboard ---------------- */
document.addEventListener("keydown", e => {
  if (e.target.closest("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (activeView === "quiz" && quiz && !quiz.done) {
    const qi = quiz.order[quiz.pos];
    const answered = quiz.picks[qi] !== undefined;
    const idx = "abcdef".indexOf(k) >= 0 ? "abcdef".indexOf(k) : "123456".indexOf(k);
    if (!answered && idx >= 0 && idx < quiz.optOrder[qi].length) { e.preventDefault(); choose(quiz.optOrder[qi][idx]); }
    else if (answered && k === "enter" && e.target.id !== "next-btn") { e.preventDefault(); nextQ(); }
  } else if (activeView === "cards" && cards) {
    if (k === " " || (k === "enter" && e.target.id !== "card" && !e.target.closest("button"))) { e.preventDefault(); flip(); }
    else if (k === "arrowright") { e.preventDefault(); moveCard(1); }
    else if (k === "arrowleft") { e.preventDefault(); moveCard(-1); }
    else if (k === "k") markCard("known");
    else if (k === "j") markCard("again");
  }
});

/* ---------------- Start ---------------- */
renderCurrent();
renderSettings();
renderPad();
show(VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "quiz");
