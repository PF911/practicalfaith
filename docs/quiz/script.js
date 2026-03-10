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
const STATS_KEY    = "bibleQuizStats";
const DAILY_KEY    = "bibleQuizDailyState";
const PROGRESS_KEY = "bibleQuizProgress";
const SAVE_KEY     = "bibleQuizSavedGame";

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
let categoryCompleteAtStart = false;

let dailyQuestion  = null;
let dailyAnswered  = false;
let dailyCorrect   = false;
let dailyVerseRef  = '';
let dailyVerseText = '';

// ─── Navigation ──────────────────────────────────────────────────────────────

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
  updateSoundUI();
}

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  showScreen('levelMenu');
}

function openHighScores(){
  renderHighScores();
  showScreen('highScoresScreen');
}

function openStats(){
  renderStats();
  showScreen('statsScreen');
}

function openAbout(){
  showScreen('aboutScreen');
}

// ─── Progress Storage ────────────────────────────────────────────────────────

function loadProgress(){
  try{
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
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

// ─── Menu Progress (inline cat-strips) ───────────────────────────────────────

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
  try{
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}

function saveStats(stats){
  try{ localStorage.setItem(STATS_KEY, JSON.stringify(stats)); }catch(e){}
}

function recordQuizStats(category, level, score, total, bestStreak){
  const stats = loadStats();
  stats.totalQuizzes   = (stats.totalQuizzes   || 0) + 1;
  stats.totalCorrect   = (stats.totalCorrect   || 0) + score;
  stats.totalQuestions = (stats.totalQuestions || 0) + total;
  if(bestStreak > (stats.bestStreak || 0)) stats.bestStreak = bestStreak;
  if(!stats.highScores) stats.highScores = [];
  stats.highScores.push({ category, level, score, total, date: new Date().toLocaleDateString() });
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

function scoreText(score, total){
  if(score === total)                       return "🏆 Bible Master!";
  if(score >= total - 1)                    return "⭐ Bible Scholar!";
  if(score >= Math.ceil(total * 0.7))       return "📘 Solid Student!";
  if(score >= Math.ceil(total * 0.5))       return "🌱 Getting Warmer!";
  return "🔍 Keep Studying!";
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
      bestStreakThisQuiz: bestStreakThisQuiz
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  }catch(e){}
}

function clearGameState(){
  try{ localStorage.removeItem(SAVE_KEY); }catch(e){}
}

function loadGameState(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

function checkForSavedGame(){
  const state = loadGameState();
  if(!state) return;

  const resumeBtn  = document.getElementById('resumeBtn');
  const resumeNote = document.getElementById('resumeNote');
  if(!resumeBtn) return;

  // Support both save formats for question count
  const total = (state.questions && state.questions.length)
    || (state.questionIds && state.questionIds.length)
    || 0;

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

  // Support both new format (questions array) and old format (questionIds)
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
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);

  loadQuestion();
  showScreen('quizScreen');
}

// ─── Quiz Flow ────────────────────────────────────────────────────────────────

function selectLevel(level){
  if(typeof quizQuestions === 'undefined' || !quizQuestions.length){
    alert('Questions failed to load. Please check your questions/ folder and questions-index.js are uploaded to the server.');
    return;
  }
  currentLevel = level;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);

  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && q.difficulty === level)
  ).slice(0, QUESTIONS_PER_ROUND);

  if(!currentQuestions.length){
    alert(`No "${level}" questions found for "${currentCategory}".\n\nTotal questions loaded: ${quizQuestions.length}\n\nCheck that your question files use the correct game name.`);
    return;
  }

  currentQuestionIndex = 0;
  score                = 0;
  correctStreak        = 0;
  bestStreakThisQuiz   = 0;

  loadQuestion();
  saveGameState();
  showScreen('quizScreen');
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];

  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent    = currentLevel;
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
  renderQuestion();
}

function submitAnswer(index){
  if(answered) return;

  attemptsThisQuestion++;
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

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent   = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
    nextBtn.style.display = 'flex';
    return;
  }

  playWrong();
  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;
  if(!disabledAnswers.includes(index)) disabledAnswers.push(index);

  if(attemptsThisQuestion === 1){
    correctStreak = 0;
    feedback.textContent = randomFrom(tryAgainMessages);
    feedback.className   = 'feedback wrong';
    updateStreakBadge();
    return;
  }

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
  playFinish();
  if(score === currentQuestions.length) playPerfect();

  recordQuizStats(currentCategory, currentLevel, score, currentQuestions.length, bestStreakThisQuiz);
  renderMenuProgress();

  document.getElementById('resultCategory').textContent = currentCategory;
  document.getElementById('resultLevel').textContent    = currentLevel;
  document.getElementById('scoreBig').textContent       = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent       = scoreText(score, currentQuestions.length);

  const perfectBox = document.getElementById('perfectBox');
  if(perfectBox) perfectBox.style.display = score === currentQuestions.length ? 'block' : 'none';

  if(score === currentQuestions.length && !categoryCompleteAtStart && isCategoryFullyComplete(currentCategory)){
    showCategoryCompletion();
    return;
  }

  showScreen('resultScreen');
}

function showCategoryCompletion(){
  document.getElementById('completionCategory').textContent = currentCategory;
  const copy = document.getElementById('completionCopy');
  if(copy) copy.textContent = `You've answered every question in ${currentCategory}! Outstanding work.`;
  launchConfetti();
  showScreen('completionScreen');
}

function restartLevel(){
  currentQuestionIndex    = 0;
  score                   = 0;
  correctStreak           = 0;
  bestStreakThisQuiz      = 0;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && q.difficulty === currentLevel)
  ).slice(0, QUESTIONS_PER_ROUND);
  loadQuestion();
  saveGameState();
  showScreen('quizScreen');
}

// ─── Verse Modal ─────────────────────────────────────────────────────────────

function openVerseModal(){
  document.getElementById('modalVerseRef').textContent  = currentVerseRef  || '';
  document.getElementById('modalVerseText').textContent = currentVerseText || '';
  document.getElementById('verseModal').classList.add('open');
}

function closeVerseModal(event){
  if(event && event.target && event.target.id !== 'verseModal') return;
  document.getElementById('verseModal').classList.remove('open');
}

// ─── Confetti ─────────────────────────────────────────────────────────────────

function launchConfetti(){
  const colors = ['#6b2fbd','#3f6fb4','#f39a3e','#3e9b4f','#c84545','#f7e8c4'];
  for(let i = 0; i < 90; i++){
    const piece = document.createElement('div');
    piece.className            = 'confetti';
    piece.style.left           = Math.random() * 100 + 'vw';
    piece.style.background     = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform      = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = (2.8 + Math.random() * 2.2) + 's';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

// ─── Daily Challenge ─────────────────────────────────────────────────────────

function getTodayKey(){
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}

function formatTodayLabel(){
  return new Date().toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric', year:'numeric' });
}

function defaultDailyState(){
  return { lastDate:"", streak:0, completedToday:false, lastCorrect:false };
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

function pickDailyQuestion(){
  if(typeof quizQuestions === 'undefined' || !quizQuestions.length) return null;
  const key = getTodayKey();
  let hash = 0;
  for(let i = 0; i < key.length; i++) hash = ((hash << 5) - hash) + key.charCodeAt(i);
  return quizQuestions[Math.abs(hash) % quizQuestions.length];
}

function startDailyChallenge(){
  dailyQuestion     = pickDailyQuestion();
  const label       = document.getElementById('dailyDateLabel');
  const statusText  = document.getElementById('dailyStatusText');
  const wrap        = document.getElementById('dailyQuestionWrap');
  const completeBox = document.getElementById('dailyCompleteBox');
  const state       = loadDailyState();
  const today       = getTodayKey();

  label.textContent             = formatTodayLabel();
  completeBox.style.display     = 'none';
  completeBox.textContent       = '';
  document.getElementById('dailyFeedback').textContent   = '';
  document.getElementById('dailyFeedback').className     = 'feedback';
  document.getElementById('dailyVerseRef').textContent   = '';
  document.getElementById('dailyVerseActionRow').style.display = 'none';
  document.getElementById('dailyDoneBtn').style.display  = 'none';
  dailyAnswered  = false;
  dailyCorrect   = false;
  dailyVerseRef  = '';
  dailyVerseText = '';

  if(!dailyQuestion){
    statusText.textContent = 'No daily question available.';
    wrap.style.display = 'none';
    showScreen('dailyScreen');
    return;
  }

  if(state.lastDate === today && state.completedToday){
    statusText.textContent    = state.lastCorrect
      ? "✅ You already completed today's Daily Challenge."
      : "📅 You already played today's Daily Challenge.";
    wrap.style.display        = 'none';
    completeBox.style.display = 'block';
    completeBox.textContent   = `Daily Streak: ${state.streak || 0}`;
    showScreen('dailyScreen');
    return;
  }

  statusText.textContent = 'One special question for today.';
  wrap.style.display     = 'block';
  document.getElementById('dailyQuestionText').textContent = dailyQuestion.question;

  ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].forEach((id, i) => {
    const btn       = document.getElementById(id);
    btn.textContent = ['A) ','B) ','C) ','D) '][i] + (dailyQuestion.choices[i] || '');
    btn.className   = 'answer-btn';
    btn.disabled    = false;
  });

  showScreen('dailyScreen');
}

function submitDailyAnswer(index){
  if(dailyAnswered || !dailyQuestion) return;

  const buttons  = ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].map(id => document.getElementById(id));
  const feedback = document.getElementById('dailyFeedback');
  const verseRef = document.getElementById('dailyVerseRef');
  const doneBtn  = document.getElementById('dailyDoneBtn');

  dailyAnswered = true;
  buttons.forEach(btn => btn.disabled = true);

  if(index === dailyQuestion.answer){
    dailyCorrect         = true;
    playPerfect();
    launchConfetti();
    buttons[index].classList.add('correct');
    feedback.textContent = '🎉 Daily Challenge Complete!';
    feedback.className   = 'feedback correct';
    dailyVerseRef        = dailyQuestion.reference || '';
    dailyVerseText       = dailyQuestion.verseText || '';
    verseRef.textContent = dailyVerseRef;
    recordQuestionProgress(dailyQuestion);
    renderMenuProgress();
  } else {
    dailyCorrect         = false;
    playWrong();
    buttons[index].classList.add('wrong');
    buttons[dailyQuestion.answer].classList.add('correct');
    feedback.textContent = "Today's answer is revealed.";
    feedback.className   = 'feedback wrong';
    const refText        = 'Correct answer: ' + dailyQuestion.choices[dailyQuestion.answer] + ' — ' + (dailyQuestion.reference || '');
    verseRef.textContent = refText;
    dailyVerseRef        = refText;
    dailyVerseText       = dailyQuestion.verseText || '';
    recordQuestionProgress(dailyQuestion);
    renderMenuProgress();
  }

  document.getElementById('dailyVerseActionRow').style.display = dailyVerseText ? 'flex' : 'none';
  doneBtn.style.display = 'flex';
}

function finishDailyChallenge(){
  const today = getTodayKey();
  const state = loadDailyState();
  let nextStreak = state.streak || 0;

  if(state.lastDate && state.lastDate !== today){
    const diff = Math.round((new Date(today + 'T00:00:00') - new Date(state.lastDate + 'T00:00:00')) / 86400000);
    nextStreak = diff === 1 ? (dailyCorrect ? nextStreak + 1 : 0) : (dailyCorrect ? 1 : 0);
  } else if(state.lastDate === today){
    nextStreak = state.streak || 0;
  } else {
    nextStreak = dailyCorrect ? 1 : 0;
  }

  saveDailyState({ lastDate:today, streak:nextStreak, completedToday:true, lastCorrect:dailyCorrect });

  document.getElementById('dailyQuestionWrap').style.display = 'none';
  document.getElementById('dailyStatusText').textContent     = dailyCorrect
    ? '✅ Come back tomorrow for a new Daily Challenge.'
    : '📅 Daily Challenge completed. Come back tomorrow.';

  const completeBox         = document.getElementById('dailyCompleteBox');
  completeBox.style.display = 'block';
  completeBox.textContent   = `Daily Streak: ${nextStreak}`;
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

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Wire up start button FIRST before anything else can throw
  const startBtn = document.getElementById('startBtn');
  if(startBtn) startBtn.onclick = () => {
    try{ renderMenuProgress(); }catch(e){}
    showScreen('menu');
  };

  try{ initializeSoundToggle(); }catch(e){}
  try{ renderMenuProgress(); }catch(e){}
  try{ checkForSavedGame(); }catch(e){}

});
