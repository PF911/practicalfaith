// ─── Sound ───────────────────────────────────────────────────────────────────

const soundCorrect = new Audio("sounds/correct.wav");
const soundWrong   = new Audio("sounds/wrong.wav");
const soundStreak  = new Audio("sounds/streak.wav");
const soundFinish  = new Audio("sounds/finish.wav");
const soundPerfect = new Audio("sounds/applause.wav");

const allSounds = [soundCorrect, soundWrong, soundStreak, soundFinish, soundPerfect];
const SOUND_KEY = "bibleQuizSoundEnabled";
let soundEnabled = true;

function loadSoundSetting(){
  try{
    const saved = localStorage.getItem(SOUND_KEY);
    if(saved === null) return true;
    return saved === "true";
  }catch(e){ return true; }
}
function saveSoundSetting(){
  try{ localStorage.setItem(SOUND_KEY, String(soundEnabled)); }catch(e){}
}
function stopAllSounds(){
  allSounds.forEach(audio => {
    try{ audio.pause(); audio.currentTime = 0; }catch(e){}
  });
}
function updateSoundUI(){
  const btn = document.getElementById('soundToggleBtn');
  if(!btn) return;
  if(soundEnabled){
    btn.textContent = '🔊 Sound is On';
    btn.style.background  = '#16a34a';
    btn.style.borderColor = '#15803d';
    btn.style.color       = '#ffffff';
  } else {
    btn.textContent = '🔇 Sound is Off';
    btn.style.background  = '#dc2626';
    btn.style.borderColor = '#b91c1c';
    btn.style.color       = '#ffffff';
  }
}
function toggleSound(){
  soundEnabled = !soundEnabled;
  if(!soundEnabled) stopAllSounds();
  saveSoundSetting();
  updateSoundUI();
}
window.toggleSound = toggleSound;
function initializeSoundToggle(){
  soundEnabled = loadSoundSetting();
  updateSoundUI();
}
function safePlay(audio){
  if(!soundEnabled) return;
  try{
    audio.pause();
    audio.currentTime = 0;
    const p = audio.play();
    if(p && typeof p.catch === "function") p.catch(() => {});
  }catch(e){}
}
function playCorrect(){ safePlay(soundCorrect); }
function playWrong(){   safePlay(soundWrong); }
function playStreak(){  safePlay(soundStreak); }
function playFinish(){  safePlay(soundFinish); }
function playPerfect(){ safePlay(soundPerfect); }

// ─── Constants & State ───────────────────────────────────────────────────────

const correctMessages   = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages  = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages  = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

const QUESTIONS_PER_ROUND = 10;
const STATS_KEY       = "bibleQuizStats";
const DAILY_KEY       = "bibleQuizDailyState";
const PROGRESS_KEY    = "bibleQuizProgress";
const SAVE_KEY        = "bibleQuizSavedGame";
const PRO_KEY         = "bibleQuizPro";

// ─── Free tier limits ─────────────────────────────────────────────────────────
const FREE_LIMITS = { Beginner: 25, Student: 5, Scholar: 3 };

function isProUnlocked(){
  try{ return localStorage.getItem(PRO_KEY) === 'true'; }catch(e){ return false; }
}
function unlockPro(){
  try{ localStorage.setItem(PRO_KEY, 'true'); }catch(e){}
  // Update lock icons
  document.querySelectorAll('.pro-lock').forEach(el => el.style.display = 'none');
  showScreen('menu');
  setTimeout(() => alert('🎉 Welcome to Bible Quiz Challenge Pro!\n\nAll questions and features are now unlocked. Enjoy!'), 300);
}
window.unlockPro = unlockPro;

function showPaywall(level){
  const msg = document.getElementById('paywallMessage');
  if(msg){
    if(level === 'Daily'){
      msg.innerHTML = `You've used your <strong>free Daily Challenge</strong>.<br><br>
        Unlock <strong>Pro</strong> to get 5 new questions every day, build streaks, and track your daily progress —<br>
        <em>are you up for the challenge?</em>`;
    } else {
      const previewed = FREE_LIMITS[level] || 5;
      msg.innerHTML = `You've completed your <strong>${previewed} free ${level} questions</strong>.<br><br>
        You're just getting started. <strong>1,001+ questions</strong> across 3 levels are waiting —<br>
        <em>are you up for the challenge?</em>`;
    }
  }
  showScreen('paywallScreen');
}
window.showPaywall = showPaywall;
const ACHIEVEMENT_KEY = "bibleQuizAchievements";
const BOOKMARKS_KEY   = "bibleQuizBookmarks";
const WRONG_KEY       = "bibleQuizWrongAnswers";
const SETTINGS_KEY    = "bibleQuizSettings";
const TUTORIAL_KEY    = "bibleQuizTutorialSeen";

// Quiz state
let currentCategory        = '';
let currentLevel           = '';
let currentQuestions       = [];
let currentQuestionIndex   = 0;
let score                  = 0;
let answered               = false;
let correctStreak          = 0;
let bestStreakThisQuiz      = 0;
let attemptsThisQuestion   = 0;
let disabledAnswers        = [];
let currentVerseRef        = '';
let currentVerseText       = '';
let currentQuestion        = null;
let categoryCompleteAtStart = false;
let isPracticeMode         = false;

// Quiz results (session only — for Review screen)
let quizResults = [];   // [{q, wasCorrect, attemptsUsed}]

// Timer state
let timerInterval = null;
let timerValue    = 0;
let timerDuration = 15;

// Daily state
let dailyQuestions    = [];
let dailyIndex        = 0;
let dailyScore        = 0;
let dailyAnswers      = [];  // [{wasCorrect}]
let dailyAnsweredCurrent = false;
let dailyVerseRef     = '';
let dailyVerseText    = '';

// ─── Navigation ──────────────────────────────────────────────────────────────

function showScreen(id){
  stopTimer();
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  el.scrollTop = 0;
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    el.scrollTop = 0;
  }, 50);
  updateSoundUI();
}

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  // Show/hide Practice Tough Ones button
  const practiceBtn = document.getElementById('practiceBtn');
  if(practiceBtn){
    const wrongIds = loadWrongAnswers();
    const hasTough = Object.keys(wrongIds).some(id => {
      const q = (typeof quizQuestions !== 'undefined') && quizQuestions.find(q => String(q.id) === id);
      return q && q.game === category;
    });
    practiceBtn.style.display = hasTough ? 'flex' : 'none';
  }
  showScreen('levelMenu');
}
function openHighScores(){ renderHighScores(); showScreen('highScoresScreen'); }
function openStats(){ renderStats(); renderAchievements(); showScreen('statsScreen'); }
function openAbout(){ showScreen('aboutScreen'); }
function openMyVerses(){ renderMyVerses(); showScreen('myVersesScreen'); }
function openSettings(){ renderSettingsUI(); showScreen('settingsScreen'); }
// Expose ALL onclick-called functions on window to guarantee global scope
window.openHighScores      = openHighScores;
window.openStats           = openStats;
window.openAbout           = openAbout;
window.openMyVerses        = openMyVerses;
window.openSettings        = openSettings;
window.openLevelMenu       = openLevelMenu;
window.showScreen          = showScreen;
window.selectLevel         = selectLevel;
window.submitAnswer        = submitAnswer;
window.nextQuestion        = nextQuestion;
window.restartLevel        = restartLevel;
window.startDailyChallenge = startDailyChallenge;
window.submitDailyAnswer   = submitDailyAnswer;
window.openDailyVerseModal = openDailyVerseModal;
window.closeDailyVerseModal= closeDailyVerseModal;
window.openVerseModal      = openVerseModal;
window.closeVerseModal     = closeVerseModal;
window.closeAchievementPopup = closeAchievementPopup;
window.openReview          = openReview;

// ─── Progress Storage ────────────────────────────────────────────────────────

function loadProgress(){
  try{ const raw = localStorage.getItem(PROGRESS_KEY); return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; }
}
function saveProgress(progress){
  try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }catch(e){}
}
function recordQuestionProgress(q){
  if(!q || !q.game) return;
  const progress = loadProgress();
  if(!progress[q.game]) progress[q.game] = {};
  if(q.id) progress[q.game][String(q.id)] = true;
  saveProgress(progress);
}
function getAnsweredCount(progress, category){
  const cat = progress[category];
  return cat ? Object.keys(cat).length : 0;
}
function getCategoryTotals(){
  const totals = {};
  if(typeof quizQuestions !== 'undefined'){
    quizQuestions.forEach(q => {
      if(!totals[q.game]) totals[q.game] = 0;
      totals[q.game]++;
    });
  }
  return totals;
}
function isCategoryFullyComplete(category){
  const totals = getCategoryTotals();
  const total  = Number(totals[category] || 0);
  if(total <= 0) return false;
  return getAnsweredCount(loadProgress(), category) >= total;
}
function getCategoryMedal(pct){
  if(pct >= 100) return "⭐";
  if(pct >= 75)  return "🥇";
  if(pct >= 50)  return "🥈";
  if(pct >= 25)  return "🥉";
  return "";
}

// ─── Menu Progress ───────────────────────────────────────────────────────────

function renderMenuProgress(){
  const summary  = document.getElementById('menuProgressSummary');
  const progress = loadProgress();
  const totals   = getCategoryTotals();
  const categories = Object.keys(totals);
  let completedCategories = 0;

  document.querySelectorAll('.cat-strip').forEach(strip => {
    const category = strip.getAttribute('data-category');
    const done     = getAnsweredCount(progress, category);
    const total    = Number(totals[category] || 0);
    if(total === 0){ strip.style.display = 'none'; strip.innerHTML = ''; return; }
    strip.style.display = '';
    const pct   = Math.min(100, Math.round((done / total) * 100));
    if(pct === 100) completedCategories++;
    const medal = getCategoryMedal(pct);
    const badge = pct === 100 ? ' &nbsp;<span class="cat-strip-badge">🏆 Completed</span>' : '';
    strip.innerHTML = `
      <div class="cat-strip-head">
        <span>${medal ? medal + ' ' : ''}${done} / ${total} &nbsp; ${pct}%${badge}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:0%;" data-width="${pct}%"></div>
      </div>
    `;
  });

  if(summary){
    summary.textContent = `Categories Completed: ${completedCategories} / ${categories.length}`;
  }
  document.querySelectorAll('.cat-strip .progress-fill').forEach(fill => {
    const target = fill.getAttribute('data-width') || '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = target; }));
  });
}

// ─── Stats & High Scores ─────────────────────────────────────────────────────

function loadStats(){
  try{ const raw = localStorage.getItem(STATS_KEY); return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; }
}
function saveStats(stats){
  try{ localStorage.setItem(STATS_KEY, JSON.stringify(stats)); }catch(e){}
}
function recordQuizStats(category, level, scoreVal, total, bestStreak){
  const stats = loadStats();
  stats.totalQuizzes   = (stats.totalQuizzes   || 0) + 1;
  stats.totalCorrect   = (stats.totalCorrect   || 0) + scoreVal;
  stats.totalQuestions = (stats.totalQuestions || 0) + total;
  if(bestStreak > (stats.bestStreak || 0)) stats.bestStreak = bestStreak;
  if(!stats.highScores) stats.highScores = [];
  stats.highScores.push({ category, level, score: scoreVal, total, date: new Date().toLocaleDateString() });
  stats.highScores.sort((a,b) => (b.score/b.total) - (a.score/a.total));
  if(stats.highScores.length > 20) stats.highScores = stats.highScores.slice(0, 20);
  saveStats(stats);
}
function renderHighScores(){
  const stats = loadStats();
  const list  = document.getElementById('scoresList');
  if(!list) return;
  const scores = stats.highScores || [];
  if(!scores.length){
    list.innerHTML = '<div class="empty-note">No scores yet. Play a quiz to get started!</div>';
    return;
  }
  list.innerHTML = scores.slice(0, 10).map((s, i) => `
    <div class="score-row">
      <div class="score-label">#${i+1} — ${s.category} · ${s.level}</div>
      <div class="score-value">${s.score} / ${s.total}</div>
      <div class="score-subline">${s.date}</div>
    </div>
  `).join('');
}
function renderStats(){
  const stats = loadStats();
  const list  = document.getElementById('statsList');
  if(!list) return;
  const total   = stats.totalQuestions || 0;
  const correct = stats.totalCorrect   || 0;
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;
  list.innerHTML = `
    <div class="stat-row"><div class="stat-label">Total Quizzes Played</div><div class="stat-value">${stats.totalQuizzes || 0}</div></div>
    <div class="stat-row"><div class="stat-label">Total Questions Answered</div><div class="stat-value">${total}</div></div>
    <div class="stat-row"><div class="stat-label">Total Correct</div><div class="stat-value">${correct} (${pct}%)</div></div>
    <div class="stat-row"><div class="stat-label">Best Streak</div><div class="stat-value">🔥 ${stats.bestStreak || 0}</div></div>
  `;
}

// ─── Streak Badge ─────────────────────────────────────────────────────────────

function updateStreakBadge(){
  const wrap  = document.getElementById('streakWrap');
  const count = document.getElementById('streakCount');
  if(!wrap || !count) return;
  if(correctStreak >= 3){
    count.textContent = correctStreak;
    wrap.style.display = 'inline-flex';
  } else {
    wrap.style.display = 'none';
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function randomFrom(list){ return list[Math.floor(Math.random() * list.length)]; }

function shuffleArray(array){
  const copy = [...array];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function scoreText(scoreVal, total){
  if(scoreVal === total)                         return "🏆 Bible Master!";
  if(scoreVal >= total - 1)                      return "⭐ Bible Scholar!";
  if(scoreVal >= Math.ceil(total * 0.7))         return "📘 Solid Student!";
  if(scoreVal >= Math.ceil(total * 0.5))         return "🌱 Getting Warmer!";
  return "🔍 Keep Studying!";
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function loadSettings(){
  try{
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { timerEnabled: false, timerSeconds: 15, ...JSON.parse(raw) } : { timerEnabled: false, timerSeconds: 15 };
  }catch(e){ return { timerEnabled: false, timerSeconds: 15 }; }
}
function saveSettings(s){
  try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }catch(e){}
}
function renderSettingsUI(){
  const s = loadSettings();
  const tog = document.getElementById('timerToggle');
  const dur = document.getElementById('timerDuration');
  const row = document.getElementById('timerDurationRow');
  if(tog) tog.checked = s.timerEnabled;
  if(dur) dur.value   = String(s.timerSeconds);
  if(row) row.style.display = s.timerEnabled ? 'flex' : 'none';
}
function onTimerToggleChange(){
  const tog = document.getElementById('timerToggle');
  const row = document.getElementById('timerDurationRow');
  if(row) row.style.display = tog && tog.checked ? 'flex' : 'none';
}
function saveSettingsFromUI(){
  const tog = document.getElementById('timerToggle');
  const dur = document.getElementById('timerDuration');
  const s = {
    timerEnabled: tog ? tog.checked : false,
    timerSeconds: dur ? parseInt(dur.value, 10) : 15
  };
  saveSettings(s);
  showScreen('menu');
}
window.onTimerToggleChange = onTimerToggleChange;
window.saveSettingsFromUI  = saveSettingsFromUI;

// ─── Timer ────────────────────────────────────────────────────────────────────

function stopTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
  const row = document.getElementById('timerRow');
  if(row) row.style.display = 'none';
}

function startTimer(){
  stopTimer();
  const settings = loadSettings();
  if(!settings.timerEnabled) return;

  timerDuration = settings.timerSeconds || 15;
  timerValue    = timerDuration;

  const row   = document.getElementById('timerRow');
  const count = document.getElementById('timerCount');
  const fill  = document.getElementById('timerFill');
  if(!row || !count || !fill) return;

  row.style.display = 'flex';
  count.textContent = timerValue;
  fill.style.width  = '100%';
  fill.style.background = '#3e9b4f';

  timerInterval = setInterval(() => {
    timerValue--;
    if(count) count.textContent = timerValue;
    const pct = (timerValue / timerDuration) * 100;
    if(fill){
      fill.style.width = pct + '%';
      fill.style.background = timerValue <= 5 ? '#c84545' : timerValue <= 10 ? '#f39a3e' : '#3e9b4f';
    }
    if(timerValue <= 0){
      stopTimer();
      onTimerExpired();
    }
  }, 1000);
}

function onTimerExpired(){
  if(answered) return;
  answered = true;
  correctStreak = 0;
  playWrong();

  const q = currentQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll('#quizScreen .answer-btn');
  buttons.forEach(btn => btn.disabled = true);
  buttons[q.answer].classList.add('correct');

  const feedback = document.getElementById('feedback');
  feedback.textContent = '⏰ Time\'s Up!';
  feedback.className   = 'feedback wrong';
  updateStreakBadge();

  currentVerseRef  = q.reference || '';
  currentVerseText = q.verseText || '';
  document.getElementById('verseRef').textContent = currentVerseRef;
  const verseRow = document.getElementById('verseActionRow');
  if(verseRow) verseRow.style.display = currentVerseText ? 'flex' : 'none';

  recordQuestionProgress(q);
  recordWrongAnswer(q);
  quizResults.push({ q, wasCorrect: false, attemptsUsed: 0 });

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent   = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
  nextBtn.style.display = 'flex';
}

// ─── Save / Resume ────────────────────────────────────────────────────────────

function saveGameState(){
  try{
    const state = {
      category:           currentCategory,
      level:              currentLevel,
      questions:          currentQuestions,
      questionIndex:      currentQuestionIndex,
      score:              score,
      correctStreak:      correctStreak,
      bestStreakThisQuiz: bestStreakThisQuiz,
      isPracticeMode:     isPracticeMode
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  }catch(e){}
}
function clearGameState(){
  try{ localStorage.removeItem(SAVE_KEY); }catch(e){}
}
function loadGameState(){
  try{ const raw = localStorage.getItem(SAVE_KEY); return raw ? JSON.parse(raw) : null; }catch(e){ return null; }
}

function confirmReset(){
  if(!confirm('Reset ALL progress?\n\nThis will clear your stats, high scores, category progress, saved game, daily streak, achievements, bookmarks, and wrong answer log.\n\nThis cannot be undone.')) return;
  try{
    [STATS_KEY, DAILY_KEY, PROGRESS_KEY, SAVE_KEY, ACHIEVEMENT_KEY, BOOKMARKS_KEY, WRONG_KEY].forEach(k => localStorage.removeItem(k));
  }catch(e){}
  const resumeBtn  = document.getElementById('resumeBtn');
  const resumeNote = document.getElementById('resumeNote');
  const resetBtn   = document.getElementById('resetBtn');
  if(resumeBtn)  { resumeBtn.style.display  = 'none'; }
  if(resumeNote) { resumeNote.style.display = 'none'; }
  if(resetBtn)   { resetBtn.style.display   = 'none'; }
  try{ renderMenuProgress(); }catch(e){}
  alert('✅ All progress has been reset. Good luck starting fresh!');
}
window.confirmReset = confirmReset;

function checkForSavedGame(){
  const state    = loadGameState();
  const resetBtn = document.getElementById('resetBtn');
  const hasAnyData = !!(
    state ||
    localStorage.getItem(STATS_KEY) ||
    localStorage.getItem(DAILY_KEY) ||
    localStorage.getItem(PROGRESS_KEY)
  );
  if(resetBtn) resetBtn.style.display = hasAnyData ? 'block' : 'none';
  if(!state) return;

  const resumeBtn  = document.getElementById('resumeBtn');
  const resumeNote = document.getElementById('resumeNote');
  if(!resumeBtn) return;

  const total = (state.questions && state.questions.length)
    || (state.questionIds && state.questionIds.length) || 0;
  if(!total){ clearGameState(); return; }

  resumeBtn.style.display = 'block';
  resumeBtn.onclick = () => resumeLastQuiz();
  if(resumeNote){
    resumeNote.style.display = 'block';
    resumeNote.textContent   =
      `${state.category} · ${state.level} — Question ${(state.questionIndex || 0) + 1} of ${total}`;
  }
}

function resumeLastQuiz(){
  const state = loadGameState();
  if(!state){ clearGameState(); return; }

  let questions = state.questions || [];
  if(!questions.length && state.questionIds && typeof quizQuestions !== 'undefined'){
    const idMap = {};
    quizQuestions.forEach(q => { if(q.id) idMap[String(q.id)] = q; });
    questions = state.questionIds.map(id => idMap[String(id)]).filter(Boolean);
  }
  if(!questions.length){ clearGameState(); checkForSavedGame(); return; }

  currentCategory         = state.category        || '';
  currentLevel            = state.level            || '';
  currentQuestions        = questions;
  currentQuestionIndex    = state.questionIndex    || 0;
  score                   = state.score            || 0;
  correctStreak           = state.correctStreak    || 0;
  bestStreakThisQuiz      = state.bestStreakThisQuiz || 0;
  isPracticeMode          = state.isPracticeMode   || false;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  quizResults             = [];

  loadQuestion();
  showScreen('quizScreen');
}

// ─── Wrong Answer Log ─────────────────────────────────────────────────────────

function loadWrongAnswers(){
  try{ const raw = localStorage.getItem(WRONG_KEY); return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; }
}
function saveWrongAnswers(data){
  try{ localStorage.setItem(WRONG_KEY, JSON.stringify(data)); }catch(e){}
}
function recordWrongAnswer(q){
  if(!q || !q.id) return;
  const data = loadWrongAnswers();
  data[String(q.id)] = true;
  saveWrongAnswers(data);
}
function clearWrongAnswer(q){
  if(!q || !q.id) return;
  const data = loadWrongAnswers();
  delete data[String(q.id)];
  saveWrongAnswers(data);
}

function startPracticeMode(){
  if(typeof quizQuestions === 'undefined' || !quizQuestions.length) return;
  const wrongIds = loadWrongAnswers();
  const pool = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && wrongIds[String(q.id)])
  ).slice(0, QUESTIONS_PER_ROUND);

  if(!pool.length){
    alert('No tough questions to practice for this category yet. Play a few quizzes first!');
    return;
  }

  isPracticeMode          = true;
  currentLevel            = 'Practice';
  categoryCompleteAtStart = false;
  currentQuestions        = pool;
  currentQuestionIndex    = 0;
  score                   = 0;
  correctStreak           = 0;
  bestStreakThisQuiz      = 0;
  quizResults             = [];

  loadQuestion();
  saveGameState();
  showScreen('quizScreen');
}
window.startPracticeMode = startPracticeMode;

// ─── Quiz Flow ────────────────────────────────────────────────────────────────

function selectLevel(level){
  if(typeof quizQuestions === 'undefined' || !quizQuestions.length){
    alert('Questions failed to load. Please check your questions/ folder and questions-index.js are uploaded to the server.');
    return;
  }
  currentLevel = level;
  isPracticeMode = false;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);

  const allForLevel = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && q.difficulty === level)
  );

  if(!allForLevel.length){
    alert(`No "${level}" questions found for "${currentCategory}".\n\nTotal questions loaded: ${quizQuestions.length}\n\nCheck that your question files use the correct game name.`);
    return;
  }

  // Apply free tier limit if not pro
  const limit = (!isProUnlocked() && FREE_LIMITS[level]) ? FREE_LIMITS[level] : QUESTIONS_PER_ROUND;
  currentQuestions = allForLevel.slice(0, limit);

  currentQuestionIndex = 0;
  score                = 0;
  correctStreak        = 0;
  bestStreakThisQuiz   = 0;
  quizResults          = [];

  loadQuestion();
  saveGameState();
  showScreen('quizScreen');
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];
  currentQuestion = q;

  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent    =
    isPracticeMode ? '🎯 Practice Mode' : currentLevel;
  document.getElementById('quizMeta').textContent     =
    'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;

  const labels = ['A) ','B) ','C) ','D) '];
  q.choices.forEach((choice, i) => {
    const btn       = document.getElementById('answer' + i);
    btn.textContent = labels[i] + choice;
    btn.className   = 'answer-btn';
    btn.disabled    = false;
  });

  const qText = document.getElementById('questionText');
  if(q.question.startsWith("Choose One:")){
    qText.innerHTML =
      `<span class="choose-tag">[Choose One]</span> ${q.question.replace("Choose One:", "").trim()}`;
  } else {
    qText.textContent = q.question;
  }

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className   = 'feedback';
  document.getElementById('verseRef').textContent  = '';

  const verseRow = document.getElementById('verseActionRow');
  if(verseRow) verseRow.style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  updateStreakBadge();
}

function loadQuestion(){
  answered             = false;
  attemptsThisQuestion = 0;
  disabledAnswers      = [];
  currentVerseRef      = '';
  currentVerseText     = '';
  currentQuestion      = null;
  renderQuestion();
  startTimer();
}

function submitAnswer(index){
  if(answered) return;

  attemptsThisQuestion++;
  stopTimer();

  const q        = currentQuestions[currentQuestionIndex];
  const buttons  = document.querySelectorAll('#quizScreen .answer-btn');
  const feedback = document.getElementById('feedback');

  if(index === q.answer){
    playCorrect();
    answered = true;
    score++;
    correctStreak++;
    if(correctStreak > bestStreakThisQuiz) bestStreakThisQuiz = correctStreak;
    if(correctStreak >= 3) playStreak();

    buttons.forEach(btn => btn.disabled = true);
    buttons[index].classList.add('correct');
    feedback.textContent = attemptsThisQuestion === 2 ? randomFrom(recoveryMessages) : randomFrom(correctMessages);
    feedback.className   = 'feedback correct';
    updateStreakBadge();

    currentVerseRef  = q.reference || '';
    currentVerseText = q.verseText || '';
    document.getElementById('verseRef').textContent = currentVerseRef;
    const verseRow = document.getElementById('verseActionRow');
    if(verseRow) verseRow.style.display = currentVerseText ? 'flex' : 'none';

    recordQuestionProgress(q);
    // In practice mode, remove from wrong list when answered correctly
    if(isPracticeMode) clearWrongAnswer(q);
    quizResults.push({ q, wasCorrect: true, attemptsUsed: attemptsThisQuestion });

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent   = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
    nextBtn.style.display = 'flex';
    return;
  }

  // Wrong answer
  playWrong();
  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;
  if(!disabledAnswers.includes(index)) disabledAnswers.push(index);

  if(attemptsThisQuestion === 1){
    correctStreak = 0;
    feedback.textContent = randomFrom(tryAgainMessages);
    feedback.className   = 'feedback wrong';
    updateStreakBadge();
    startTimer(); // restart timer for second attempt
    return;
  }

  // Second wrong attempt
  answered      = true;
  correctStreak = 0;
  buttons[q.answer].classList.add('correct');
  buttons.forEach(btn => btn.disabled = true);
  feedback.textContent = randomFrom(incorrectMessages);
  feedback.className   = 'feedback wrong';
  updateStreakBadge();

  currentVerseRef  = q.reference || '';
  currentVerseText = q.verseText || '';
  document.getElementById('verseRef').textContent = currentVerseRef;
  const verseRow = document.getElementById('verseActionRow');
  if(verseRow) verseRow.style.display = currentVerseText ? 'flex' : 'none';

  recordQuestionProgress(q);
  recordWrongAnswer(q);
  quizResults.push({ q, wasCorrect: false, attemptsUsed: attemptsThisQuestion });

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent   = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
  nextBtn.style.display = 'flex';
}

function nextQuestion(){
  currentQuestionIndex++;
  if(currentQuestionIndex < currentQuestions.length){
    saveGameState();
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults(){
  clearGameState();
  stopTimer();
  playFinish();
  if(score === currentQuestions.length) playPerfect();

  recordQuizStats(currentCategory, isPracticeMode ? 'Practice' : currentLevel, score, currentQuestions.length, bestStreakThisQuiz);
  renderMenuProgress();

  document.getElementById('resultCategory').textContent = currentCategory + (isPracticeMode ? ' (Practice)' : '');
  document.getElementById('resultLevel').textContent    = isPracticeMode ? '🎯 Practice Mode' : currentLevel;
  document.getElementById('scoreBig').textContent       = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent       = scoreText(score, currentQuestions.length);

  const perfectBox = document.getElementById('perfectBox');
  if(perfectBox) perfectBox.style.display = score === currentQuestions.length ? 'block' : 'none';

  // 🔥 Streak bonus
  const streakBonusBox = document.getElementById('streakBonusBox');
  if(streakBonusBox){
    let bonusMsg = '';
    if(bestStreakThisQuiz >= 10)      bonusMsg = `🔥🔥🔥 Incredible! ${bestStreakThisQuiz}-question streak!`;
    else if(bestStreakThisQuiz >= 7)  bonusMsg = `🔥🔥 Amazing! ${bestStreakThisQuiz}-question streak!`;
    else if(bestStreakThisQuiz >= 5)  bonusMsg = `🔥 Hot streak! ${bestStreakThisQuiz} in a row!`;
    else if(bestStreakThisQuiz >= 3)  bonusMsg = `🔥 ${bestStreakThisQuiz}-answer streak!`;
    streakBonusBox.textContent   = bonusMsg;
    streakBonusBox.style.display = bonusMsg ? 'block' : 'none';
  }

  // Difficulty up-sell
  const levelUpBox = document.getElementById('levelUpBox');
  if(levelUpBox){
    let upMsg = '';
    if(!isPracticeMode && score === currentQuestions.length){
      if(currentLevel === 'Beginner')       upMsg = '🚀 Aced it! Ready to try Student level?';
      else if(currentLevel === 'Student')   upMsg = '🎓 Mastered it! Try Scholar next!';
    }
    levelUpBox.textContent   = upMsg;
    levelUpBox.style.display = upMsg ? 'block' : 'none';
  }

  if(!isPracticeMode && score === currentQuestions.length && !categoryCompleteAtStart && isCategoryFullyComplete(currentCategory)){
    showCategoryCompletion();
    return;
  }

  checkOverallAchievements();

  // Show paywall after free session ends (non-pro users)
  if(!isProUnlocked() && !isPracticeMode && FREE_LIMITS[currentLevel]){
    showScreen('paywallScreen');
    return;
  }

  showScreen('resultScreen');
}

// ─── Share Score ──────────────────────────────────────────────────────────────

function shareScore(){
  const category = document.getElementById('resultCategory').textContent || currentCategory;
  const level    = document.getElementById('resultLevel').textContent    || currentLevel;
  const scoreStr = document.getElementById('scoreBig').textContent       || (score + ' / ' + currentQuestions.length);
  const msg = `I scored ${scoreStr} on ${category} (${level}) in the Bible Quiz Challenge! Can you beat me? 📖🏆\nhttps://PracticalFaith.net/quiz`;

  if(navigator.share){
    navigator.share({ title: 'Bible Quiz Challenge', text: msg }).catch(() => {});
  } else {
    // Fallback: copy to clipboard
    try{
      navigator.clipboard.writeText(msg).then(() => {
        const btn = document.getElementById('shareBtn');
        if(btn){ const orig = btn.textContent; btn.textContent = '✅ Copied!'; setTimeout(() => btn.textContent = orig, 2000); }
      });
    }catch(e){
      prompt('Copy your score to share:', msg);
    }
  }
}
window.shareScore = shareScore;

// ─── Question Review ──────────────────────────────────────────────────────────

function openReview(){
  renderReview();
  showScreen('reviewScreen');
}
window.openReview = openReview;

function renderReview(){
  const list = document.getElementById('reviewList');
  if(!list) return;
  if(!quizResults.length){
    list.innerHTML = '<div class="empty-note">No quiz results to review yet.</div>';
    return;
  }
  list.innerHTML = quizResults.map((r, i) => {
    const q = r.q;
    const icon = r.wasCorrect ? '✅' : '❌';
    const correct = q.choices[q.answer] || '';
    const bgClass = r.wasCorrect ? 'review-row correct' : 'review-row wrong';
    return `
      <div class="${bgClass}">
        <div class="review-num">${icon} Q${i+1}</div>
        <div class="review-question">${q.question}</div>
        <div class="review-answer">✔ ${correct}</div>
        <div class="review-ref">${q.reference || ''}</div>
      </div>
    `;
  }).join('');
}

// ─── Achievement Milestones ───────────────────────────────────────────────────

function loadAchievements(){
  try{ const r = localStorage.getItem(ACHIEVEMENT_KEY); return r ? JSON.parse(r) : {}; }catch(e){ return {}; }
}
function saveAchievements(a){
  try{ localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(a)); }catch(e){}
}
function getOverallPct(){
  const progress = loadProgress();
  const totals   = getCategoryTotals();
  const totalQ   = Object.values(totals).reduce((s,n) => s+n, 0);
  if(totalQ === 0) return 0;
  const done = Object.keys(totals).reduce((s, cat) => s + getAnsweredCount(progress, cat), 0);
  return Math.round((done / totalQ) * 100);
}
function checkOverallAchievements(){
  const pct    = getOverallPct();
  const earned = loadAchievements();
  const milestones = [
    { key:'p25',  pct:25,  icon:'🥉', label:'Bronze Scholar — 25% complete!' },
    { key:'p50',  pct:50,  icon:'🥈', label:'Silver Scholar — 50% complete!' },
    { key:'p75',  pct:75,  icon:'🥇', label:'Gold Scholar — 75% complete!' },
    { key:'p100', pct:100, icon:'🏆', label:'Bible Champion — 100% complete!' },
  ];
  let newMilestone = null;
  milestones.forEach(m => {
    if(pct >= m.pct && !earned[m.key]){ earned[m.key] = true; newMilestone = m; }
  });
  if(newMilestone){ saveAchievements(earned); showAchievementPopup(newMilestone); }
}
function showAchievementPopup(milestone){
  const popup = document.getElementById('achievementPopup');
  const icon  = document.getElementById('achievementIcon');
  const msg   = document.getElementById('achievementMsg');
  if(!popup || !icon || !msg) return;
  icon.textContent = milestone.icon;
  msg.textContent  = milestone.label;
  popup.classList.add('open');
  clearTimeout(popup._timer);
  popup._timer = setTimeout(() => popup.classList.remove('open'), 4000);
}
function closeAchievementPopup(){
  const popup = document.getElementById('achievementPopup');
  if(popup){ clearTimeout(popup._timer); popup.classList.remove('open'); }
}
function renderAchievements(){
  const box = document.getElementById('achievementsList');
  if(!box) return;
  const earned  = loadAchievements();
  const pct     = getOverallPct();
  const milestones = [
    { key:'p25',  pct:25,  icon:'🥉', label:'Bronze Scholar',  sub:'25% of all questions answered' },
    { key:'p50',  pct:50,  icon:'🥈', label:'Silver Scholar',  sub:'50% of all questions answered' },
    { key:'p75',  pct:75,  icon:'🥇', label:'Gold Scholar',    sub:'75% of all questions answered' },
    { key:'p100', pct:100, icon:'🏆', label:'Bible Champion',  sub:'100% of all questions answered!' },
  ];
  box.innerHTML = milestones.map(m => {
    const done = earned[m.key];
    return `<div class="achievement-row ${done ? 'earned' : 'locked'}">
      <span class="ach-icon">${done ? m.icon : '🔒'}</span>
      <div class="ach-text">
        <div class="ach-label">${m.label}</div>
        <div class="ach-sub">${m.sub}</div>
      </div>
    </div>`;
  }).join('') + `<div class="ach-overall">Overall progress: ${pct}%</div>`;
}

function showCategoryCompletion(){
  document.getElementById('completionCategory').textContent = currentCategory;
  const copy = document.getElementById('completionCopy');
  if(copy) copy.textContent = `You've answered every question in ${currentCategory}! Outstanding work.`;
  launchConfetti();
  showScreen('completionScreen');
}

function restartLevel(){
  isPracticeMode          = false;
  currentQuestionIndex    = 0;
  score                   = 0;
  correctStreak           = 0;
  bestStreakThisQuiz      = 0;
  quizResults             = [];
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && q.difficulty === currentLevel)
  ).slice(0, QUESTIONS_PER_ROUND);
  loadQuestion();
  saveGameState();
  showScreen('quizScreen');
}

// ─── Verse Modal & Bookmarks ──────────────────────────────────────────────────

function loadBookmarks(){
  try{ const raw = localStorage.getItem(BOOKMARKS_KEY); return raw ? JSON.parse(raw) : []; }catch(e){ return []; }
}
function saveBookmarks(b){
  try{ localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(b)); }catch(e){}
}
function isBookmarked(id){
  return loadBookmarks().some(b => String(b.id) === String(id));
}
function toggleBookmark(q){
  if(!q) return;
  let bookmarks = loadBookmarks();
  const idx = bookmarks.findIndex(b => String(b.id) === String(q.id));
  if(idx >= 0){
    bookmarks.splice(idx, 1);
  } else {
    bookmarks.push({ id: q.id, game: q.game, question: q.question, ref: q.reference || '', text: q.verseText || '' });
  }
  saveBookmarks(bookmarks);
  updateBookmarkButton(q);
}
function updateBookmarkButton(q){
  const btn = document.getElementById('bookmarkBtn');
  if(!btn || !q) return;
  const saved = isBookmarked(q.id);
  btn.textContent = saved ? '🔖 Bookmarked' : '🔖 Bookmark Verse';
  btn.style.background = saved ? '#f7e8c4' : '';
}
window.toggleBookmark = toggleBookmark;

function openVerseModal(){
  document.getElementById('modalVerseRef').textContent  = currentVerseRef  || '';
  document.getElementById('modalVerseText').textContent = currentVerseText || '';
  const q = currentQuestion || (currentQuestions && currentQuestions[currentQuestionIndex]);
  updateBookmarkButton(q);
  document.getElementById('verseModal').classList.add('open');
}
function closeVerseModal(event){
  if(event && event.target && event.target.id !== 'verseModal') return;
  document.getElementById('verseModal').classList.remove('open');
}

function renderMyVerses(){
  const list = document.getElementById('myVersesList');
  if(!list) return;
  const bookmarks = loadBookmarks();
  if(!bookmarks.length){
    list.innerHTML = '<div class="empty-note">No bookmarked verses yet. Tap 🔖 after any question to save a verse.</div>';
    return;
  }
  list.innerHTML = bookmarks.map((b, i) => `
    <div class="verse-bookmark-row">
      <div class="vb-ref">${b.ref}</div>
      <div class="vb-text">${b.text || b.question}</div>
      <div class="vb-game">${b.game}</div>
      <button class="vb-remove" onclick="removeBookmark(${i})">✕ Remove</button>
    </div>
  `).join('');
}
function removeBookmark(index){
  const bookmarks = loadBookmarks();
  bookmarks.splice(index, 1);
  saveBookmarks(bookmarks);
  renderMyVerses();
}
window.removeBookmark = removeBookmark;

// ─── Confetti ─────────────────────────────────────────────────────────────────

function launchConfetti(){
  const colors = ['#6b2fbd','#3f6fb4','#f39a3e','#3e9b4f','#c84545','#f7e8c4'];
  for(let i = 0; i < 90; i++){
    const piece = document.createElement('div');
    piece.className               = 'confetti';
    piece.style.left              = Math.random() * 100 + 'vw';
    piece.style.background        = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform         = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = (2.8 + Math.random() * 2.2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

// ─── Daily Challenge (5 questions) ───────────────────────────────────────────

function getTodayKey(){
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}
function formatTodayLabel(){
  return new Date().toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric', year:'numeric' });
}
function defaultDailyState(){
  return { lastDate:'', streak:0, completedToday:false, questionIds:[], answers:[], score:0 };
}
function loadDailyState(){
  try{
    const raw = localStorage.getItem(DAILY_KEY);
    return raw ? { ...defaultDailyState(), ...JSON.parse(raw) } : defaultDailyState();
  }catch(e){ return defaultDailyState(); }
}
function saveDailyState(state){
  try{ localStorage.setItem(DAILY_KEY, JSON.stringify(state)); }catch(e){}
}

function pickDailyQuestions(){
  if(typeof quizQuestions === 'undefined' || !quizQuestions.length) return [];
  const key = getTodayKey();
  let hash = 0;
  for(let i = 0; i < key.length; i++) hash = ((hash << 5) - hash) + key.charCodeAt(i);
  hash = Math.abs(hash);
  const total = quizQuestions.length;
  const step  = Math.floor(total / 5);
  const qs = [];
  for(let i = 0; i < 5; i++){
    qs.push(quizQuestions[(hash + i * step) % total]);
  }
  return qs;
}

function renderDailyProgress(){
  const dotsEl    = document.getElementById('dailyAnswerDots');
  const progressEl = document.getElementById('dailyProgressText');
  const scoreEl   = document.getElementById('dailyScoreText');
  const state     = loadDailyState();
  const today     = getTodayKey();

  if(progressEl) progressEl.textContent = `Question ${dailyIndex + 1} of ${dailyQuestions.length}`;
  if(scoreEl)    scoreEl.textContent    = `Score: ${dailyScore}`;

  if(dotsEl){
    const answers = (state.lastDate === today && state.answers) ? state.answers : dailyAnswers;
    dotsEl.innerHTML = dailyQuestions.map((_, i) => {
      if(i < dailyAnswers.length){
        return `<span class="daily-dot ${dailyAnswers[i].wasCorrect ? 'dot-correct' : 'dot-wrong'}">${dailyAnswers[i].wasCorrect ? '✓' : '✗'}</span>`;
      }
      if(i === dailyIndex) return `<span class="daily-dot dot-current">•</span>`;
      return `<span class="daily-dot dot-empty">○</span>`;
    }).join('');
  }
}

function startDailyChallenge(){
  // Free users get day 1 only — check if they've already used their free daily
  if(!isProUnlocked()){
    const freeUsed = localStorage.getItem('bibleQuizFreeDailyUsed');
    if(freeUsed){
      showPaywall('Daily');
      return;
    }
    localStorage.setItem('bibleQuizFreeDailyUsed', 'true');
  }

  const today  = getTodayKey();
  const state  = loadDailyState();

  document.getElementById('dailyDateLabel').textContent = formatTodayLabel();
  document.getElementById('dailyProgressRow').style.display = 'flex';
  document.getElementById('dailyAnswerDots').innerHTML = '';

  // Already completed today
  if(state.lastDate === today && state.completedToday){
    const scoreStr = `${state.score || 0} / 5`;
    document.getElementById('dailyStatusText').textContent  = '';
    document.getElementById('dailyQuestionWrap').style.display = 'none';
    const completeBox = document.getElementById('dailyCompleteBox');
    completeBox.style.display = 'block';
    completeBox.innerHTML = `
      <div style="font-size:28px;margin-bottom:8px;">📅 Already completed today!</div>
      <div style="font-size:22px;font-weight:900;">Score: ${scoreStr}</div>
      <div style="font-size:18px;margin-top:6px;">🔥 Daily Streak: ${state.streak}</div>
      <div style="font-size:14px;margin-top:8px;color:#888;">Come back tomorrow for 5 new questions</div>
    `;
    // Show completed dots
    const dotsEl = document.getElementById('dailyAnswerDots');
    if(dotsEl && state.answers){
      dotsEl.innerHTML = state.answers.map(a =>
        `<span class="daily-dot ${a.wasCorrect ? 'dot-correct' : 'dot-wrong'}">${a.wasCorrect ? '✓' : '✗'}</span>`
      ).join('');
    }
    document.getElementById('dailyProgressRow').style.display = 'none';
    showScreen('dailyScreen');
    return;
  }

  // Start fresh for today
  dailyQuestions       = pickDailyQuestions();
  dailyIndex           = 0;
  dailyScore           = 0;
  dailyAnswers         = [];
  dailyAnsweredCurrent = false;
  dailyVerseRef        = '';
  dailyVerseText       = '';

  document.getElementById('dailyCompleteBox').style.display = 'none';

  if(!dailyQuestions.length){
    document.getElementById('dailyStatusText').textContent = 'No daily questions available.';
    document.getElementById('dailyQuestionWrap').style.display = 'none';
    showScreen('dailyScreen');
    return;
  }

  loadDailyQuestion();
  showScreen('dailyScreen');
}

function loadDailyQuestion(){
  if(dailyIndex >= dailyQuestions.length){ finishDailyChallenge(); return; }
  dailyAnsweredCurrent = false;
  dailyVerseRef        = '';
  dailyVerseText       = '';

  const q = dailyQuestions[dailyIndex];
  renderDailyProgress();

  document.getElementById('dailyStatusText').textContent          = '';
  document.getElementById('dailyQuestionWrap').style.display      = 'block';
  document.getElementById('dailyQuestionText').textContent        = q.question;
  document.getElementById('dailyFeedback').textContent            = '';
  document.getElementById('dailyFeedback').className              = 'feedback';
  document.getElementById('dailyVerseRef').textContent            = '';
  document.getElementById('dailyVerseActionRow').style.display    = 'none';
  document.getElementById('dailyNextBtn').style.display           = 'none';

  const labels = ['A) ','B) ','C) ','D) '];
  ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].forEach((id, i) => {
    const btn       = document.getElementById(id);
    btn.textContent = labels[i] + (q.choices[i] || '');
    btn.className   = 'answer-btn';
    btn.disabled    = false;
  });
}

function submitDailyAnswer(index){
  if(dailyAnsweredCurrent) return;
  const q       = dailyQuestions[dailyIndex];
  const buttons = ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].map(id => document.getElementById(id));
  const feedback = document.getElementById('dailyFeedback');

  dailyAnsweredCurrent = true;
  buttons.forEach(btn => btn.disabled = true);

  const wasCorrect = (index === q.answer);
  if(wasCorrect){
    dailyScore++;
    playCorrect();
    buttons[index].classList.add('correct');
    feedback.textContent = '✅ ' + randomFrom(correctMessages);
    feedback.className   = 'feedback correct';
    dailyVerseRef        = q.reference || '';
    dailyVerseText       = q.verseText || '';
    recordQuestionProgress(q);
    renderMenuProgress();
  } else {
    playWrong();
    buttons[index].classList.add('wrong');
    buttons[q.answer].classList.add('correct');
    feedback.textContent = `❌ Correct answer: ${q.choices[q.answer]}`;
    feedback.className   = 'feedback wrong';
    dailyVerseRef        = q.reference  || '';
    dailyVerseText       = q.verseText  || '';
    recordQuestionProgress(q);
    renderMenuProgress();
  }

  dailyAnswers.push({ wasCorrect });
  renderDailyProgress();

  document.getElementById('dailyVerseRef').textContent          = dailyVerseRef;
  document.getElementById('dailyVerseActionRow').style.display  = dailyVerseText ? 'flex' : 'none';

  const nextBtn = document.getElementById('dailyNextBtn');
  nextBtn.textContent   = dailyIndex < dailyQuestions.length - 1 ? 'Next Question' : 'See Results';
  nextBtn.style.display = 'flex';
}

function nextDailyQuestion(){
  dailyIndex++;
  if(dailyIndex < dailyQuestions.length){
    loadDailyQuestion();
  } else {
    finishDailyChallenge();
  }
}
window.nextDailyQuestion = nextDailyQuestion;

function finishDailyChallenge(){
  const today = getTodayKey();
  const state = loadDailyState();
  let nextStreak = state.streak || 0;

  if(state.lastDate && state.lastDate !== today){
    const diff = Math.round((new Date(today + 'T00:00:00') - new Date(state.lastDate + 'T00:00:00')) / 86400000);
    nextStreak = diff === 1 ? nextStreak + 1 : 1;
  } else if(!state.lastDate){
    nextStreak = 1;
  }

  saveDailyState({
    lastDate:       today,
    streak:         nextStreak,
    completedToday: true,
    score:          dailyScore,
    answers:        dailyAnswers,
    questionIds:    dailyQuestions.map(q => q.id)
  });

  document.getElementById('dailyQuestionWrap').style.display  = 'none';
  document.getElementById('dailyProgressRow').style.display   = 'none';
  document.getElementById('dailyStatusText').textContent      = '';

  const perfect    = dailyScore === dailyQuestions.length;
  if(perfect){ playPerfect(); launchConfetti(); }

  const completeBox = document.getElementById('dailyCompleteBox');
  completeBox.style.display = 'block';
  completeBox.innerHTML = `
    <div style="font-size:30px;margin-bottom:8px;">${perfect ? '🏆 Perfect Day!' : '📅 Daily Complete!'}</div>
    <div style="font-size:24px;font-weight:900;">Score: ${dailyScore} / ${dailyQuestions.length}</div>
    <div style="font-size:18px;margin-top:6px;">🔥 Daily Streak: ${nextStreak}</div>
    <div style="font-size:14px;margin-top:8px;color:#555;">Come back tomorrow for 5 new questions</div>
  `;

  // Show final dots
  const dotsEl = document.getElementById('dailyAnswerDots');
  if(dotsEl){
    dotsEl.innerHTML = dailyAnswers.map(a =>
      `<span class="daily-dot ${a.wasCorrect ? 'dot-correct' : 'dot-wrong'}">${a.wasCorrect ? '✓' : '✗'}</span>`
    ).join('');
    dotsEl.style.display = 'flex';
  }
}

function openDailyVerseModal(){
  document.getElementById('dailyModalVerseRef').textContent  = dailyVerseRef  || '';
  document.getElementById('dailyModalVerseText').textContent = dailyVerseText || '';
  document.getElementById('dailyVerseModal').classList.add('open');
}
function closeDailyVerseModal(event){
  if(event && event.target && event.target.id !== 'dailyVerseModal') return;
  document.getElementById('dailyVerseModal').classList.remove('open');
}

// ─── First-Launch Tutorial ────────────────────────────────────────────────────

const tutorialSlides = [
  {
    icon: '📖',
    title: 'Welcome to Bible Quiz Challenge!',
    body: 'Test your Bible knowledge with 1,001+ questions across 10 categories — from Trivia and Prophecy to Parables and Timeline events.'
  },
  {
    icon: '🎓',
    title: 'Three Difficulty Levels',
    body: 'Start with Beginner to build your foundation, move to Student for deeper questions, or jump straight to Scholar for the toughest challenges!'
  },
  {
    icon: '🏆',
    title: 'Track Your Progress',
    body: 'Earn medals as you answer more questions in each category. Build daily streaks, unlock achievements, and bookmark your favorite verses. Your progress saves automatically.'
  }
];
let tutorialStep = 0;

function checkAndShowTutorial(){
  try{
    if(localStorage.getItem(TUTORIAL_KEY)) return;
  }catch(e){ return; }
  tutorialStep = 0;
  renderTutorialSlide();
  const overlay = document.getElementById('tutorialOverlay');
  if(overlay) overlay.classList.add('open');
}

function renderTutorialSlide(){
  const slide = tutorialSlides[tutorialStep];
  const icon  = document.getElementById('tutIcon');
  const title = document.getElementById('tutTitle');
  const body  = document.getElementById('tutBody');
  const dots  = document.getElementById('tutDots');
  const nextBtn = document.getElementById('tutNextBtn');
  if(icon)  icon.textContent  = slide.icon;
  if(title) title.textContent = slide.title;
  if(body)  body.textContent  = slide.body;
  if(nextBtn) nextBtn.textContent = tutorialStep < tutorialSlides.length - 1 ? 'Next →' : "Let's Go! 🚀";
  if(dots){
    dots.innerHTML = tutorialSlides.map((_, i) =>
      `<span class="tut-dot ${i === tutorialStep ? 'active' : ''}"></span>`
    ).join('');
  }
}

function tutorialNext(){
  tutorialStep++;
  if(tutorialStep >= tutorialSlides.length){
    closeTutorial();
  } else {
    renderTutorialSlide();
  }
}

function closeTutorial(){
  try{ localStorage.setItem(TUTORIAL_KEY, 'true'); }catch(e){}
  const overlay = document.getElementById('tutorialOverlay');
  if(overlay) overlay.classList.remove('open');
}
window.tutorialNext  = tutorialNext;
window.closeTutorial = closeTutorial;

// ─── IAP Stubs (replace with Capacitor IAP plugin for store submission) ───────

function purchasePro(){
  // TODO: Replace with Capacitor IAP plugin call
  if(confirm('This will simulate a Pro purchase for testing.\n\nIn the live app this triggers the App Store / Play Store payment.')){
    unlockPro();
  }
}
window.purchasePro = purchasePro;

function restorePurchase(){
  // TODO: Replace with Capacitor IAP restore call
  if(isProUnlocked()){
    alert('✅ Pro is already unlocked on this device!');
  } else {
    alert('No previous purchase found.\n\nIf you purchased on another device, contact support@practicalfaith.net');
  }
}
window.restorePurchase = restorePurchase;

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  const startBtn = document.getElementById('startBtn');
  if(startBtn) startBtn.onclick = () => {
    try{ renderMenuProgress(); }catch(e){}
    showScreen('menu');
  };

  try{ initializeSoundToggle(); }catch(e){}
  try{ renderMenuProgress(); }catch(e){}
  try{ checkForSavedGame(); }catch(e){}
  try{ setTimeout(checkAndShowTutorial, 600); }catch(e){}

  // Hide lock icons if already pro
  if(isProUnlocked()){
    document.querySelectorAll('.pro-lock').forEach(el => el.style.display = 'none');
  }

});
