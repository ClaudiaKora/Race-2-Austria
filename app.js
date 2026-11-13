// --- STATE & STORAGE ---
const STORAGE_KEY = "tour_autriche_progress_v1";

let userState = loadProgress();
let currentStageId = "general";

let session = {
  level: 1,
  questions: [],
  currentIndex: 0,
  firstTryCorrect: 0,
  examPoints: 0,
  maxExamPoints: 0,
  timerSeconds: 90,
  timeLeft: 90,
  timerInterval: null,
  cardFailedOnce: false
};

const PRAISE_MESSAGES = [
  "AWESOME PACE! 🚴‍♂️💨",
  "CRUSHED IT! 🔥",
  "PURE POWER ON THE PEDALS! ⚡",
  "KING OF THE MOUNTAIN! 🏔️",
  "UNSTOPPABLE SPRINT! 🏆"
];

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  return { xp: 0, cards: {} };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
}

function getCardState(qId) {
  if (!userState.cards[qId]) {
    userState.cards[qId] = { slot: 1, streak: 0 };
  }
  return userState.cards[qId];
}

// --- AUDIO (GERMAN TEXT-TO-SPEECH) ---
function speakGerman(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/\{|\}/g, "");
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "de-AT";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

// --- NAVIGATION ---
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// --- DASHBOARD RENDER ---
function initDashboard() {
  const select = document.getElementById("stage-select");
  select.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const count = QUESTIONS.filter(q => q.category_id === cat.id).length;
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = `Stage ${cat.stage}: ${cat.title} (${count})`;
    if (cat.id === currentStageId) opt.selected = true;
    select.appendChild(opt);
  });

  select.onchange = (e) => {
    currentStageId = e.target.value;
    updateDashboardStats();
  };

  updateDashboardStats();
}

function updateDashboardStats() {
  const cat = CATEGORIES.find(c => c.id === currentStageId);
  const stageQuestions = QUESTIONS.filter(q => q.category_id === currentStageId);

  document.getElementById("stage-title").textContent = `${cat.icon} ${cat.title}`;
  document.getElementById("user-xp").textContent = userState.xp;

  let rank = "Rookie";
  if (userState.xp >= 1500) rank = "Austrian MVP 🏆";
  else if (userState.xp >= 700) rank = "Yellow Jersey 💛";
  else if (userState.xp >= 250) rank = "Climber 🏔️";
  document.getElementById("user-rank").textContent = rank;

  let slots = { 1: 0, 2: 0, 3: 0, 4: 0 };
  stageQuestions.forEach(q => {
    const st = getCardState(q.id);
    slots[st.slot]++;
  });

  document.getElementById("slot-count-1").textContent = slots[1];
  document.getElementById("slot-count-2").textContent = slots[2];
  document.getElementById("slot-count-3").textContent = slots[3];
  document.getElementById("slot-count-4").textContent = slots[4];

  const masteredForToday = slots[2] + slots[3] + slots[4];
  const total = stageQuestions.length || 1;
  const pct = Math.round((masteredForToday / total) * 100);

  document.getElementById("stage-progress-text").textContent = `${masteredForToday} / ${stageQuestions.length} Cards`;
  document.getElementById("stage-progress-fill").style.width = `${pct}%`;

  const btnStart = document.getElementById("btn-start-sprint");
  if (stageQuestions.length === 0) {
    btnStart.textContent = "COMING SOON (ADD QUESTIONS IN JS)";
    btnStart.disabled = true;
    btnStart.style.opacity = "0.5";
  } else {
    btnStart.textContent = "▶ START 8-CARD SPRINT (90s/Card)";
    btnStart.disabled = false;
    btnStart.style.opacity = "1";
  }
}

// --- QUESTION SELECTION ENGINE ---
function buildSprintQueue(level) {
  let pool = [];

  if (level === 1) {
    const stageQs = QUESTIONS.filter(q => q.category_id === currentStageId);
    const weights = { 1: 10, 2: 5, 3: 2, 4: 1 };
    let weighted = [];

    stageQs.forEach(q => {
      const slot = getCardState(q.id).slot;
      for (let i = 0; i < weights[slot]; i++) weighted.push(q);
    });

    const chosen = new Set();
    while (chosen.size < Math.min(8, stageQs.length)) {
      const pick = weighted[Math.floor(Math.random() * weighted.length)];
      chosen.add(pick);
      const twin = stageQs.find(q => q.base_question_id === pick.base_question_id && !chosen.has(q));
      if (twin && chosen.size < Math.min(8, stageQs.length)) {
        chosen.add(twin);
      }
    }
    pool = Array.from(chosen);
  } else if (level === 2 || level === 3) {
    const qualified = QUESTIONS.filter(q => getCardState(q.id).slot >= 2);
    const source = qualified.length >= 6 ? qualified : QUESTIONS;
    const count = level === 2 ? 10 : 12;
    pool = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(count, source.length));
  } else if (level === 4) {
    const usedBases = new Set();
    const twoPts = QUESTIONS.filter(q => q.points === 2).sort(() => Math.random() - 0.5);
    const threePts = QUESTIONS.filter(q => q.points === 3).sort(() => Math.random() - 0.5);

    const pickUnique = (arr, limit) => {
      const res = [];
      for (const q of arr) {
        if (!usedBases.has(q.base_question_id) && res.length < limit) {
          usedBases.add(q.base_question_id);
          res.push(q);
        }
      }
      return res;
    };

    const p2 = pickUnique(twoPts, 9);
    const p3 = pickUnique(threePts, 9);
    pool = [...p2, ...p3];
  }

  return pool;
}

// --- START SESSION ---
function startSession(level) {
  const queue = buildSprintQueue(level);
  if (queue.length === 0) return;

  session = {
    level,
    questions: queue,
    currentIndex: 0,
    firstTryCorrect: 0,
    examPoints: 0,
    maxExamPoints: queue.reduce((sum, q) => sum + q.points, 0),
    timerSeconds: level === 3 ? 60 : (level === 4 ? 2400 : 90),
    timeLeft: level === 3 ? 60 : (level === 4 ? 2400 : 90),
    timerInterval: null,
    cardFailedOnce: false
  };

  showScreen("screen-game");
  if (level === 4) startTimer();
  renderQuestion();
}

// --- TIMER / PACEMAKER ---
function startTimer() {
  clearInterval(session.timerInterval);
  if (session.level !== 4) {
    session.timeLeft = session.timerSeconds;
  }
  updateTimerUI();

  session.timerInterval = setInterval(() => {
    if (session.timeLeft > 0) {
      session.timeLeft--;
      updateTimerUI();
    } else if (session.level === 4) {
      clearInterval(session.timerInterval);
      finishSession();
    }
  }, 1000);
}

function updateTimerUI() {
  const bar = document.getElementById("pacemaker-bar");
  const bike = document.getElementById("pacemaker-bike");
  const timerText = document.getElementById("pacemaker-timer");
  const label = document.getElementById("pacemaker-label");

  const mins = Math.floor(session.timeLeft / 60).toString().padStart(2, "0");
  const secs = (session.timeLeft % 60).toString().padStart(2, "0");
  timerText.textContent = `${mins}:${secs}`;

  const ratio = session.timeLeft / session.timerSeconds;
  const pctLeft = Math.max(0, Math.min(100, ratio * 100));
  const bikePos = Math.max(0, Math.min(92, (1 - ratio) * 92));

  bar.style.width = `${pctLeft}%`;
  bike.style.left = `${bikePos}%`;

  if (session.level === 4) {
    label.textContent = "Official Exam Clock (40 Min)";
    bar.style.background = ratio < 0.2 ? "var(--primary)" : "var(--blue)";
  } else if (session.timeLeft === 0) {
    label.textContent = "Overtime – Finish strong! 🚴‍♂️";
    bar.style.background = "var(--yellow)";
  } else if (ratio < 0.3) {
    label.textContent = "Final Sprint! ⚡";
    bar.style.background = "var(--yellow)";
  } else {
    label.textContent = `Pacemaker: ${session.timerSeconds}s`;
    bar.style.background = "var(--green)";
  }
}

// --- RENDER QUESTION CARD ---
function renderQuestion() {
  const q = session.questions[session.currentIndex];
  const lvl = session.level;
  session.cardFailedOnce = false;

  document.getElementById("feedback-drawer").classList.add("hidden");
  document.getElementById("keyword-popup").classList.add("hidden");

  const modeLabel = lvl === 4 ? "Exam Q" : "Card";
  document.getElementById("game-progress").textContent = `${modeLabel}: ${session.currentIndex + 1} / ${session.questions.length}`;

  const pill = document.getElementById("game-points-pill");
  if (lvl >= 3) {
    pill.style.display = "inline-block";
    pill.textContent = `${q.points} PTS`;
  } else {
    pill.style.display = "none";
  }

  const anchorEl = document.getElementById("visual-anchor");
  const hintBtn = document.getElementById("btn-show-hint");
  anchorEl.textContent = q.learning_aids.visual_anchor;

  if (lvl === 1) {
    anchorEl.style.display = "block";
    hintBtn.style.display = "none";
  } else if (lvl === 2) {
    anchorEl.style.display = "none";
    hintBtn.style.display = "block";
    hintBtn.onclick = () => {
      anchorEl.style.display = "block";
      hintBtn.style.display = "none";
      session.timeLeft = Math.max(0, session.timeLeft - 3);
      updateTimerUI();
    };
  } else {
    anchorEl.style.display = "none";
    hintBtn.style.display = "none";
  }

  const audioBtn = document.getElementById("btn-audio-q");
  if (lvl <= 2) {
    audioBtn.style.display = "block";
    audioBtn.onclick = () => speakGerman(lvl === 1 ? q.learning_aids.short_question : q.official_text.question);
  } else {
    audioBtn.style.display = "none";
  }

  const qTextEl = document.getElementById("question-text");
  if (lvl === 1) {
    let html = q.learning_aids.short_question.replace(/\{([^}]+)\}/g, (match, word) => {
      return `<span class="kw-tag" data-kw="${word}">${word}</span>`;
    });
    qTextEl.innerHTML = html;

    qTextEl.querySelectorAll(".kw-tag").forEach(tag => {
      tag.onclick = () => {
        const kw = tag.getAttribute("data-kw");
        const translation = q.learning_aids.keywords[kw] || "";
      const popup = document.getElementById("keyword-popup");
      popup.textContent = `🇺🇸 ${kw} = ${translation}`;
      popup.classList.remove("hidden");
      };
    });
    speakGerman(q.learning_aids.short_question);
} else if (lvl === 3) {
    let html = q.official_text.question;
    q.learning_aids.signal_words.forEach(sw => {
      const escapedSignalWord = sw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escapedSignalWord})`, "gi");
      html = html.replace(regex, `<span class="signal-bold">$1</span>`);
    });
    qTextEl.innerHTML = html;
} else {
    qTextEl.textContent = q.official_text.question;
}
const optContainer = document.getElementById("options-container");
optContainer.innerHTML = "";
q.official_text.options.forEach(opt => {
const tile = document.createElement("div");
tile.className = "option-tile";
tile.dataset.optId = opt.id;
if (lvl <= 2) {
const aBtn = document.createElement("button");
aBtn.className = "option-audio";
aBtn.textContent = "🔊";
aBtn.onclick = (e) => {
e.stopPropagation();
speakGerman(opt.text);
};
tile.appendChild(aBtn);
}
const selBtn = document.createElement("button");
selBtn.className = "option-select";
   selBtn.textContent = `${opt.id}) ${opt.text}`;
selBtn.onclick = () => handleAnswer(opt.id, tile);
tile.appendChild(selBtn);
optContainer.appendChild(tile);
});
if (lvl !== 4) startTimer();
}
// --- ANSWER HANDLING ---
function handleAnswer(selectedId, clickedTile) {
const q = session.questions[session.currentIndex];
const isCorrect = selectedId === q.official_text.correct_option;
const lvl = session.level;
if (lvl === 4) {
document.querySelectorAll(".option-tile").forEach(t => t.classList.remove("selected-exam"));
clickedTile.classList.add("selected-exam");
if (isCorrect) {
session.examPoints += q.points;
session.firstTryCorrect++;
}
setTimeout(() => nextQuestion(), 350);
return;
}
if (isCorrect) {
clearInterval(session.timerInterval);
clickedTile.classList.add("correct");
document.querySelectorAll(".option-select").forEach(b => b.disabled = true);
if (!session.cardFailedOnce) {
session.firstTryCorrect++;
session.examPoints += q.points;
updateCardSlot(q.id, true);
userState.xp += 15;
} else {
userState.xp += 5;
}
saveProgress();
const st = getCardState(q.id);
const praise = PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)];
    showFeedback(
      true,
      praise,
      `+${session.cardFailedOnce ? 5 : 15} XP · Card Progress: Slot ${st.slot} (${st.streak}× correct)`
    );
} else {
if (!session.cardFailedOnce) {
session.cardFailedOnce = true;
updateCardSlot(q.id, false);
saveProgress();
}
clickedTile.classList.add("wrong-muted");
clickedTile.querySelector(".option-select").disabled = true;
    showFeedback(
      false,
      "🚴‍♂️ SMALL BUMP IN THE ROAD!",
      `💡 Coach Tip: ${q.learning_aids.coach_tip_en} — Tap the right answer above to keep pedaling!`
    );
}
}
function updateCardSlot(qId, isSuccess) {
const st = getCardState(qId);
if (isSuccess) {
st.streak++;
if (st.streak >= 10) st.slot = 4;
else if (st.streak >= 4) st.slot = 3;
else if (st.streak >= 3) st.slot = 2;
else st.slot = 1;
} else {
if (st.slot === 4) { st.slot = 3; st.streak = 9; }
else if (st.slot === 3) { st.slot = 2; st.streak = 3; }
else if (st.slot === 2) { st.slot = 1; st.streak = 2; }
else { st.slot = 1; st.streak = 0; }
}
}
function showFeedback(isPositive, title, msg) {
const drawer = document.getElementById("feedback-drawer");
const nextBtn = document.getElementById("btn-next-card");
drawer.classList.remove("hidden", "is-correct", "is-coach");
drawer.classList.add(isPositive ? "is-correct" : "is-coach");
document.getElementById("feedback-title").textContent = title;
document.getElementById("feedback-message").textContent = msg;
nextBtn.style.display = isPositive ? "block" : "none";
}
function nextQuestion() {
session.currentIndex++;
if (session.currentIndex < session.questions.length) {
renderQuestion();
} else {
finishSession();
}
}
// --- SUMMARY SCREEN ---
function finishSession() {
clearInterval(session.timerInterval);
window.speechSynthesis.cancel();
document.getElementById("feedback-drawer").classList.add("hidden");
showScreen("screen-summary");
const titleEl = document.getElementById("summary-title");
const subEl = document.getElementById("summary-subtitle");
const iconEl = document.getElementById("summary-icon");
const statsEl = document.getElementById("summary-stats");
if (session.level === 4) {
const passed = session.examPoints >= 25;
iconEl.textContent = passed ? "🌈🏆" : "🚴‍♂️💪";
titleEl.textContent = passed ? "WORLD CHAMPION! PASSED!" : "GREAT TRAINING RIDE!";
subEl.textContent = passed
? "You crushed the 25-point mark! Ready for the real ÖIF exam."
: "You need 25 points to win the jersey. Keep training and try again!";
    statsEl.innerHTML = `<div>🏅 Exam Score: <strong>${session.examPoints} / ${session.maxExamPoints} Points</strong> (Pass: 25)</div><div>✅ Correct Answers: <strong>${session.firstTryCorrect} / ${session.questions.length}</strong></div>`;
} else {
iconEl.textContent = "🏆";
titleEl.textContent = "SPRINT COMPLETE!";
subEl.textContent = "Awesome effort! Your cards moved up in the slots.";
    statsEl.innerHTML = `<div>🎯 First-Try Hits: <strong>${session.firstTryCorrect} / ${session.questions.length}</strong></div><div>⚡ Total Career XP: <strong>${userState.xp} XP</strong></div>`;
}
}
// --- EVENT LISTENERS ---
document.getElementById("btn-start-sprint").onclick = () => startSession(1);
document.getElementById("btn-mode-2").onclick = () => startSession(2);
document.getElementById("btn-mode-3").onclick = () => startSession(3);
document.getElementById("btn-mode-4").onclick = () => startSession(4);
document.getElementById("btn-next-card").onclick = () => nextQuestion();
document.getElementById("btn-quit").onclick = () => {
clearInterval(session.timerInterval);
window.speechSynthesis.cancel();
document.getElementById("feedback-drawer").classList.add("hidden");
showScreen("screen-dashboard");
updateDashboardStats();
};
document.getElementById("btn-back-dashboard").onclick = () => {
showScreen("screen-dashboard");
updateDashboardStats();
};
// Boot App
initDashboard();