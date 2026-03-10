

const soundCorrect = new Audio("sounds/correct.wav");
const soundWrong = new Audio("sounds/wrong.wav");
const soundStreak = new Audio("sounds/streak.wav");
const soundFinish = new Audio("sounds/finish.wav");
const soundPerfect = new Audio("sounds/applause.wav");

const allSounds = [soundCorrect, soundWrong, soundStreak, soundFinish, soundPerfect];
const SOUND_KEY = "bibleQuizSoundEnabled";
let soundEnabled = true;

function loadSoundSetting(){
  try{
    const saved = localStorage.getItem(SOUND_KEY);
    if(saved === null) return true;
    return saved === "true";
  }catch(e){
    return true;
  }
}

function saveSoundSetting(){
  try{
    localStorage.setItem(SOUND_KEY, String(soundEnabled));
  }catch(e){}
}

function stopAllSounds(){
  allSounds.forEach(audio => {
    try{
      audio.pause();
      audio.currentTime = 0;
    }catch(e){}
  });
}

function updateSoundUI(){
  const btn = document.getElementById('soundToggleBtn');
  if(!btn) return;

  if(soundEnabled){
    btn.textContent = '🔊 Sound is On';
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#15803d';
    btn.style.color = '#ffffff';
  } else {
    btn.textContent = '🔇 Sound is Off';
    btn.style.background = '#dc2626';
    btn.style.borderColor = '#b91c1c';
    btn.style.color = '#ffffff';
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
function playWrong(){ safePlay(soundWrong); }
function playStreak(){ safePlay(soundStreak); }
function playFinish(){ safePlay(soundFinish); }
function playPerfect(){ safePlay(soundPerfect); }

const correctMessages = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

const QUESTIONS_PER_ROUND = 10;
const SAVE_KEY = "bibleQuizSavedGame";
const STATS_KEY = "bibleQuizStats";
const DAILY_KEY = "bibleQuizDailyState";
const RECENT_KEY = "bibleQuizRecentQuestions";

let currentCategory = '';
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let correctStreak = 0;
let bestStreakThisQuiz = 0;
let attemptsThisQuestion = 0;
let disabledAnswers = [];
let currentVerseRef = '';
let currentVerseText = '';
let categoryCompleteAtStart = false;

let dailyQuestion = null;
let dailyAnswered = false;
let dailyCorrect = false;
let dailyVerseRef = '';
let dailyVerseText = '';

function resetScreenPosition(id){
  const active = document.getElementById(id);
  const app = document.querySelector('.app');

  const doReset = () => {
    try{
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if(app) app.scrollTop = 0;
      if(active){
        active.scrollTop = 0;
        active.scrollIntoView({ block: 'start', inline: 'nearest' });
      }
    }catch(e){}
  };

  doReset();
  requestAnimationFrame(doReset);
  setTimeout(doReset, 0);
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  resetScreenPosition(id);
  updateSoundUI();
}

function updateStreakBadge(){
  const wrap = document.getElementById('streakWrap');
  const count = document.getElementById('streakCount');
  if(!wrap || !count) return;

  if(correctStreak >= 3){
    count.textContent = correctStreak;
    wrap.style.display = 'inline-flex';
  } else {
    wrap.style.display = 'none';
    count.textContent = '0';
  }
}

function randomFrom(list){
  return list[Math.floor(Math.random() * list.length)];
}

function shuffleArray(array){
  const copy = [...array];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getQuestionPool(){
  if(Array.isArray(quizQuestions)) return quizQuestions;
  if(typeof groupedQuestions !== 'undefined' && groupedQuestions){
    const pool = [];
    Object.keys(groupedQuestions).forEach(category => {
      const levels = groupedQuestions[category] || {};
      Object.keys(levels).forEach(level => {
        (levels[level] || []).forEach(q => {
          pool.push({
            game: category,
            difficulty: level,
            question: q.question,
            choices: q.choices,
            answer: q.answer,
            reference: q.reference,
            verseText: q.verseText
          });
        });
      });
    });
    return pool;
  }
  return [];
}

function getFilteredQuestions(category, level){
  const filtered = getQuestionPool().filter(q => q.game === category && q.difficulty === level);
  const shuffled = shuffleArray(filtered);

  const recentIds = getRecentQuestionIds(category, level);
  const recentSet = new Set(recentIds);

  const freshQuestions = shuffled.filter(q => !recentSet.has(getQuestionProgressKey(q)));
  const recentQuestions = shuffled.filter(q => recentSet.has(getQuestionProgressKey(q)));

  const ordered = [...freshQuestions, ...recentQuestions];
  return ordered.slice(0, Math.min(QUESTIONS_PER_ROUND, ordered.length));
}

function getRecentBucketKey(category, level){
  return (category || '') + "||" + (level || '');
}

function loadRecentQuestions(){
  try{
    const raw = localStorage.getItem(RECENT_KEY);
    if(!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  }catch(e){
    return {};
  }
}

function saveRecentQuestions(data){
  localStorage.setItem(RECENT_KEY, JSON.stringify(data));
}

function getRecentQuestionIds(category, level){
  const allRecent = loadRecentQuestions();
  const bucketKey = getRecentBucketKey(category, level);
  const items = Array.isArray(allRecent[bucketKey]) ? allRecent[bucketKey] : [];
  return items;
}

function rememberRecentQuestions(category, level, questions){
  if(!questions || !questions.length) return;

  const bucketKey = getRecentBucketKey(category, level);
  const allRecent = loadRecentQuestions();
  const existing = Array.isArray(allRecent[bucketKey]) ? allRecent[bucketKey] : [];
  const incoming = questions.map(q => getQuestionProgressKey(q)).filter(Boolean);

  const merged = [...existing];
  incoming.forEach(id => {
    const foundIndex = merged.indexOf(id);
    if(foundIndex !== -1) merged.splice(foundIndex, 1);
    merged.push(id);
  });

  const maxKeep = Math.max(QUESTIONS_PER_ROUND * 2, incoming.length);
  allRecent[bucketKey] = merged.slice(-maxKeep);
  saveRecentQuestions(allRecent);
}

function getResumeSummary(saved){
  if(!saved) return "";
  const qNum = Math.min((saved.currentQuestionIndex || 0) + 1, (saved.currentQuestions || []).length || 1);
  const total = (saved.currentQuestions || []).length || QUESTIONS_PER_ROUND;
  return saved.currentCategory + " — " + saved.currentLevel + " — Question " + qNum + " of " + total;
}

function updateResumeUI(){
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeNote = document.getElementById('resumeNote');
  const saved = loadSavedProgress();
  if(!resumeBtn || !resumeNote) return;

  if(saved && saved.currentQuestions && saved.currentQuestions.length){
    resumeBtn.style.display = 'inline-block';
    resumeNote.style.display = 'block';
    resumeNote.textContent = getResumeSummary(saved);
  } else {
    resumeBtn.style.display = 'none';
    resumeNote.style.display = 'none';
    resumeNote.textContent = '';
  }
}

function saveProgress(){
  if(!currentQuestions.length) return;

  const payload = {
    currentCategory,
    currentLevel,
    currentQuestions,
    currentQuestionIndex,
    score,
    answered,
    correctStreak,
    bestStreakThisQuiz,
    attemptsThisQuestion,
    disabledAnswers,
    feedbackText: document.getElementById('feedback').textContent,
    feedbackClass: document.getElementById('feedback').className,
    verseRef: document.getElementById('verseRef').textContent,
    verseText: document.getElementById('verseText').textContent,
    nextBtnText: document.getElementById('nextBtn').textContent,
    nextBtnDisplay: document.getElementById('nextBtn').style.display
  };

  localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
  updateResumeUI();
}

function loadSavedProgress(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){
    return null;
  }
}

function clearSavedProgress(){
  localStorage.removeItem(SAVE_KEY);
  updateResumeUI();
}

function defaultStats(){
  return {
    totalQuizzesPlayed: 0,
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    perfectScores: 0,
    bestScore: 0,
    bestScoreTotal: 0,
    bestPercent: 0,
    longestStreak: 0,
    lastQuiz: "",
    highScores: {}
  };
}

function loadStats(){
  try{
    const raw = localStorage.getItem(STATS_KEY);
    if(!raw) return defaultStats();
    return { ...defaultStats(), ...JSON.parse(raw) };
  }catch(e){
    return defaultStats();
  }
}

function saveStats(stats){
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function updateStatsAfterQuiz(finalScore, totalQuestions, category, level, streakRecord){
  const stats = loadStats();
  stats.totalQuizzesPlayed += 1;
  stats.totalQuestionsAnswered += totalQuestions;
  stats.totalCorrectAnswers += finalScore;
  if(finalScore === totalQuestions) stats.perfectScores += 1;

  const percent = totalQuestions ? (finalScore / totalQuestions) * 100 : 0;
  if(percent > stats.bestPercent || (percent === stats.bestPercent && finalScore > stats.bestScore)){
    stats.bestPercent = percent;
    stats.bestScore = finalScore;
    stats.bestScoreTotal = totalQuestions;
  }

  if(streakRecord > stats.longestStreak){
    stats.longestStreak = streakRecord;
  }

  stats.lastQuiz = category + " — " + level + " — " + finalScore + " / " + totalQuestions;

  const key = category + "||" + level;
  const previous = stats.highScores[key];
  if(!previous || percent > previous.percent || (percent === previous.percent && finalScore > previous.score)){
    stats.highScores[key] = { category, level, score: finalScore, total: totalQuestions, percent };
  }

  saveStats(stats);
}

function getCategoryTotals(){
  const totals = {};
  getQuestionPool().forEach(q => {
    if(!q || !q.game) return;
    totals[q.game] = (totals[q.game] || 0) + 1;
  });
  return totals;
}

function defaultProgress(){
  return {};
}

function normalizeProgressData(parsed){
  const normalized = {};
  Object.keys(parsed || {}).forEach(category => {
    const value = parsed[category];

    if(value && typeof value === 'object' && !Array.isArray(value)){
      const answered = value.answered && typeof value.answered === 'object' ? value.answered : value;
      normalized[category] = { answered: {} };
      Object.keys(answered || {}).forEach(key => {
        if(answered[key]) normalized[category].answered[key] = true;
      });
      return;
    }

    normalized[category] = { answered: {} };
  });
  return normalized;
}

function loadProgress(){
  try{
    const raw = localStorage.getItem("bibleQuizCategoryProgress");
    if(!raw) return defaultProgress();
    return normalizeProgressData(JSON.parse(raw) || {});
  }catch(e){
    return defaultProgress();
  }
}

function saveProgressStats(progress){
  localStorage.setItem("bibleQuizCategoryProgress", JSON.stringify(progress));
}

function getQuestionProgressKey(q){
  if(!q) return '';
  if(typeof q.id !== 'undefined' && q.id !== null) return String(q.id);
  return [q.game || '', q.difficulty || '', q.question || '', q.reference || ''].join('||');
}

function recordQuestionProgress(q){
  if(!q || !q.game) return;
  const progress = loadProgress();
  if(!progress[q.game] || typeof progress[q.game] !== 'object'){
    progress[q.game] = { answered: {} };
  }
  if(!progress[q.game].answered || typeof progress[q.game].answered !== 'object'){
    progress[q.game].answered = {};
  }
  const key = getQuestionProgressKey(q);
  if(!key) return;
  progress[q.game].answered[key] = true;
  saveProgressStats(progress);
}

function getAnsweredCount(progress, category){
  const bucket = progress[category];
  if(!bucket || !bucket.answered || typeof bucket.answered !== 'object') return 0;
  return Object.keys(bucket.answered).length;
}


function getCategoryMedal(pct){
  if(pct >= 100) return "⭐";
  if(pct >= 75) return "🥇";
  if(pct >= 50) return "🥈";
  if(pct >= 25) return "🥉";
  return "";
}

function renderMenuProgress(){
  const summary = document.getElementById('menuProgressSummary');
  const progress = loadProgress();
  const totals = getCategoryTotals();
  const categories = Object.keys(totals);
  let completedCategories = 0;

  document.querySelectorAll('.cat-strip').forEach(strip => {
    const category = strip.getAttribute('data-category');
    const done = getAnsweredCount(progress, category);
    const total = Number(totals[category] || 0);

    if(total === 0){
      strip.style.display = 'none';
      strip.innerHTML = '';
      return;
    }

    strip.style.display = '';
    const pct = Math.min(100, Math.round((done / total) * 100));
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
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.width = target;
    }));
  });
}

function isCategoryFullyComplete(category){
  const totals = getCategoryTotals();
  const total = Number(totals[category] || 0);
  if(total <= 0) return false;
  const progress = loadProgress();
  const done = getAnsweredCount(progress, category);
  return done >= total;
}

function showCategoryCompletion(){
  const totals = getCategoryTotals();
  const total = Number(totals[currentCategory] || 0);
  const copy = total > 0
    ? `You answered every question in ${currentCategory}. ${total} / ${total} complete.`
    : `You answered every question in ${currentCategory}.`;

  document.getElementById('completionCategory').textContent = currentCategory;
  document.getElementById('completionCopy').textContent = copy;
  launchConfetti();
  showScreen('completionScreen');
}

function percentText(value){
  return Math.round(value) + "%";
}

function openHighScores(){
  const stats = loadStats();
  const scoresList = document.getElementById('scoresList');

  const entries = Object.values(stats.highScores || {}).sort((a,b) => {
    if(b.percent !== a.percent) return b.percent - a.percent;
    return b.score - a.score;
  });

  if(!entries.length){
    scoresList.innerHTML = '<div class="empty-note">No high scores yet. Play a quiz and your best results will appear here.</div>';
  } else {
    scoresList.innerHTML = entries.map(entry => `
      <div class="score-row">
        <div class="score-label">${entry.category}</div>
        <div class="score-value">${entry.score} / ${entry.total}</div>
        <div class="score-subline">${entry.level} — ${percentText(entry.percent)}</div>
      </div>
    `).join('');
  }

  showScreen('highScoresScreen');
}
function openStats(){
  const stats = loadStats();
  const statsList = document.getElementById('statsList');
  const accuracy = stats.totalQuestionsAnswered ? (stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100 : 0;
  const daily = loadDailyState();

  statsList.innerHTML = `
    <div class="stat-row">
      <div class="stat-label">Total Quizzes Played</div>
      <div class="stat-value">${stats.totalQuizzesPlayed}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Total Questions Answered</div>
      <div class="stat-value">${stats.totalQuestionsAnswered}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Total Correct Answers</div>
      <div class="stat-value">${stats.totalCorrectAnswers}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Accuracy</div>
      <div class="stat-value">${percentText(accuracy)}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Perfect Scores</div>
      <div class="stat-value">${stats.perfectScores}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Best Overall Score</div>
      <div class="stat-value">${stats.bestScoreTotal ? `${stats.bestScore} / ${stats.bestScoreTotal}` : '—'}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Longest Streak</div>
      <div class="stat-value">${stats.longestStreak}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Daily Streak</div>
      <div class="stat-value">${daily.streak || 0}</div>
    </div>
    <div class="stat-row">
      <div class="stat-label">Last Quiz</div>
      <div class="score-subline">${stats.lastQuiz || 'No quiz completed yet.'}</div>
    </div>
  `;

  showScreen('statsScreen');
}

function openAbout(){
  showScreen('aboutScreen');
}

function openVerseModal(){
  document.getElementById('modalVerseRef').textContent = currentVerseRef || '';
  document.getElementById('modalVerseText').textContent = currentVerseText || '';
  document.getElementById('verseModal').classList.add('open');
}

function closeVerseModal(event){
  if(event && event.target && event.target.id !== 'verseModal') return;
  document.getElementById('verseModal').classList.remove('open');
}

function applySavedUiState(saved){
  const buttons = document.querySelectorAll('#quizScreen .answer-btn');
  const feedback = document.getElementById('feedback');
  const verseRef = document.getElementById('verseRef');
  const verseText = document.getElementById('verseText');
  const nextBtn = document.getElementById('nextBtn');
  const verseActionRow = document.getElementById('verseActionRow');

  buttons.forEach((btn, index) => {
    btn.className = 'answer-btn';
    btn.disabled = false;
    if((saved.disabledAnswers || []).includes(index)){
      btn.classList.add('wrong');
      btn.disabled = true;
    }
  });

  const q = currentQuestions[currentQuestionIndex];
  if(saved.answered){
    buttons.forEach(btn => btn.disabled = true);
    buttons[q.answer].classList.add('correct');
  }

  feedback.textContent = saved.feedbackText || '';
  feedback.className = saved.feedbackClass || 'feedback';
  verseRef.textContent = saved.verseRef || '';
  verseText.textContent = saved.verseText || '';
  currentVerseRef = saved.verseRef || '';
  currentVerseText = saved.verseText || '';
  verseActionRow.style.display = currentVerseText ? 'flex' : 'none';
  nextBtn.textContent = saved.nextBtnText || 'Next Question';
  nextBtn.style.display = saved.nextBtnDisplay || 'none';
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];
  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent = currentLevel;
  document.getElementById('quizMeta').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;

  const labels = ['A) ','B) ','C) ','D) '];
  q.choices.forEach((choice, i) => {
    const btn = document.getElementById('answer' + i);
    btn.textContent = labels[i] + choice;
    btn.className = 'answer-btn';
    btn.disabled = false;
  });

  document.getElementById('questionText').textContent = q.question;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('verseRef').textContent = '';
  document.getElementById('verseText').textContent = '';
  document.getElementById('verseActionRow').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  currentVerseRef = '';
  currentVerseText = '';

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  updateStreakBadge();
}

function loadQuestion(){
  answered = false;
  attemptsThisQuestion = 0;
  disabledAnswers = [];
  renderQuestion();
  saveProgress();
}

function showVerse(q, showCorrect){
  const refText = showCorrect ? ('Correct answer: ' + q.choices[q.answer] + ' — ' + q.reference) : q.reference;
  document.getElementById('verseRef').textContent = refText;
  document.getElementById('verseText').textContent = q.verseText || '';
  currentVerseRef = refText;
  currentVerseText = q.verseText || '';
  document.getElementById('verseActionRow').style.display = currentVerseText ? 'flex' : 'none';
}

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  showScreen('levelMenu');
}

function selectLevel(level){
  currentLevel = level;
  currentQuestions = getFilteredQuestions(currentCategory, currentLevel);
  rememberRecentQuestions(currentCategory, currentLevel, currentQuestions);

  if(currentQuestions.length === 0){
    alert('No questions loaded yet for ' + currentCategory + ' / ' + currentLevel + '.');
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  updateStreakBadge();
  loadQuestion();
  showScreen('quizScreen');
}

function resumeLastQuiz(){
  const saved = loadSavedProgress();
  if(!saved || !saved.currentQuestions || !saved.currentQuestions.length){
    updateResumeUI();
    return;
  }

  currentCategory = saved.currentCategory || '';
  currentLevel = saved.currentLevel || '';
  currentQuestions = saved.currentQuestions || [];
  currentQuestionIndex = saved.currentQuestionIndex || 0;
  score = saved.score || 0;
  answered = !!saved.answered;
  correctStreak = saved.correctStreak || 0;
  bestStreakThisQuiz = saved.bestStreakThisQuiz || 0;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  attemptsThisQuestion = saved.attemptsThisQuestion || 0;
  disabledAnswers = saved.disabledAnswers || [];

  renderQuestion();
  applySavedUiState(saved);
  updateStreakBadge();
  showScreen('quizScreen');
}

function submitAnswer(index){
  if(answered) return;

  attemptsThisQuestion++;
  const q = currentQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll('#quizScreen .answer-btn');
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
    feedback.className = 'feedback correct';
    updateStreakBadge();
    showVerse(q, false);
    recordQuestionProgress(q);
    renderMenuProgress();

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
    nextBtn.style.display = 'flex';
    saveProgress();
    return;
  }

  playWrong();
  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;
  if(!disabledAnswers.includes(index)) disabledAnswers.push(index);

  if(attemptsThisQuestion === 1){
    correctStreak = 0;
    feedback.textContent = randomFrom(tryAgainMessages);
    feedback.className = 'feedback wrong';
    updateStreakBadge();
    saveProgress();
    return;
  }

  answered = true;
  correctStreak = 0;
  buttons[q.answer].classList.add('correct');
  buttons.forEach(btn => btn.disabled = true);
  feedback.textContent = randomFrom(incorrectMessages);
  feedback.className = 'feedback wrong';
  updateStreakBadge();
  showVerse(q, true);
  recordQuestionProgress(q);
  renderMenuProgress();

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'See Score' : 'Next Question';
  nextBtn.style.display = 'flex';
  saveProgress();
}

function nextQuestion(){
  currentQuestionIndex++;
  if(currentQuestionIndex < currentQuestions.length){
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults(){
  playFinish();
  if(score === currentQuestions.length){
    playPerfect();
    launchConfetti();
  }

  const categoryJustCompleted = !categoryCompleteAtStart && isCategoryFullyComplete(currentCategory);

  updateStatsAfterQuiz(score, currentQuestions.length, currentCategory, currentLevel, bestStreakThisQuiz);
  renderMenuProgress();
  clearSavedProgress();
  document.getElementById('resultCategory').textContent = currentCategory;
  document.getElementById('resultLevel').textContent = currentLevel;
  document.getElementById('scoreBig').textContent = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent = scoreText(score, currentQuestions.length);
  document.getElementById('perfectBox').style.display = score === currentQuestions.length ? 'block' : 'none';

  if(categoryJustCompleted){
    showCategoryCompletion();
    return;
  }

  showScreen('resultScreen');
}

function scoreText(score, total){
  if(score === total) return "🏆 Bible Master!";
  if(score >= total - 1) return "⭐ Bible Scholar!";
  if(score >= Math.ceil(total * 0.7)) return "📘 Solid Student!";
  if(score >= Math.ceil(total * 0.5)) return "🌱 Getting Warmer!";
  return "🔍 Keep Studying!";
}

function restartLevel(){
  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;
  categoryCompleteAtStart = isCategoryFullyComplete(currentCategory);
  updateStreakBadge();
  currentQuestions = getFilteredQuestions(currentCategory, currentLevel);
  rememberRecentQuestions(currentCategory, currentLevel, currentQuestions);
  loadQuestion();
  showScreen('quizScreen');
}

function launchConfetti(){
  const colors = ['#6b2fbd','#3f6fb4','#f39a3e','#3e9b4f','#c84545','#f7e8c4'];
  for(let i = 0; i < 90; i++){
    const piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = (2.8 + Math.random() * 2.2) + 's';
    piece.style.opacity = 0.85 + Math.random() * 0.15;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

// Daily Challenge
function getTodayKey(){
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatTodayLabel(){
  const now = new Date();
  return now.toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric', year:'numeric' });
}

function defaultDailyState(){
  return {
    lastDate: "",
    streak: 0,
    completedToday: false,
    lastCorrect: false
  };
}

function loadDailyState(){
  try{
    const raw = localStorage.getItem(DAILY_KEY);
    if(!raw) return defaultDailyState();
    return { ...defaultDailyState(), ...JSON.parse(raw) };
  }catch(e){
    return defaultDailyState();
  }
}

function saveDailyState(state){
  localStorage.setItem(DAILY_KEY, JSON.stringify(state));
}

function pickDailyQuestion(){
  const pool = getQuestionPool();
  if(!pool.length) return null;
  const key = getTodayKey();
  let hash = 0;
  for(let i = 0; i < key.length; i++) hash = ((hash << 5) - hash) + key.charCodeAt(i);
  const index = Math.abs(hash) % pool.length;
  return pool[index];
}

function startDailyChallenge(){
  dailyQuestion = pickDailyQuestion();
  const label = document.getElementById('dailyDateLabel');
  const statusText = document.getElementById('dailyStatusText');
  const wrap = document.getElementById('dailyQuestionWrap');
  const completeBox = document.getElementById('dailyCompleteBox');
  const state = loadDailyState();
  const today = getTodayKey();

  label.textContent = formatTodayLabel();
  completeBox.style.display = 'none';
  completeBox.textContent = '';
  document.getElementById('dailyFeedback').textContent = '';
  document.getElementById('dailyFeedback').className = 'feedback';
  document.getElementById('dailyVerseRef').textContent = '';
  document.getElementById('dailyVerseActionRow').style.display = 'none';
  document.getElementById('dailyDoneBtn').style.display = 'none';
  dailyAnswered = false;
  dailyCorrect = false;
  dailyVerseRef = '';
  dailyVerseText = '';

  if(!dailyQuestion){
    statusText.textContent = 'No daily question loaded.';
    wrap.style.display = 'none';
    showScreen('dailyScreen');
    return;
  }

  if(state.lastDate === today && state.completedToday){
    statusText.textContent = state.lastCorrect ? '✅ You already completed today’s Daily Challenge.' : '📅 You already played today’s Daily Challenge.';
    wrap.style.display = 'none';
    completeBox.style.display = 'block';
    completeBox.textContent = `Daily Streak: ${state.streak || 0}`;
    showScreen('dailyScreen');
    return;
  }

  statusText.textContent = 'One special question for today.';
  wrap.style.display = 'block';
  document.getElementById('dailyQuestionText').textContent = dailyQuestion.question;
  ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].forEach((id, i) => {
    const btn = document.getElementById(id);
    btn.textContent = ['A) ','B) ','C) ','D) '][i] + (dailyQuestion.choices[i] || '');
    btn.className = 'answer-btn';
    btn.disabled = false;
  });
  showScreen('dailyScreen');
}

function submitDailyAnswer(index){
  if(dailyAnswered || !dailyQuestion) return;

  const buttons = ['dailyAnswer0','dailyAnswer1','dailyAnswer2','dailyAnswer3'].map(id => document.getElementById(id));
  const feedback = document.getElementById('dailyFeedback');
  const verseRef = document.getElementById('dailyVerseRef');
  const doneBtn = document.getElementById('dailyDoneBtn');

  dailyAnswered = true;
  buttons.forEach(btn => btn.disabled = true);

  if(index === dailyQuestion.answer){
    dailyCorrect = true;
    playPerfect();
    launchConfetti();
    buttons[index].classList.add('correct');
    feedback.textContent = '🎉 Daily Challenge Complete!';
    feedback.className = 'feedback correct';
    verseRef.textContent = dailyQuestion.reference || '';
    dailyVerseRef = dailyQuestion.reference || '';
    dailyVerseText = dailyQuestion.verseText || '';
    recordQuestionProgress(dailyQuestion);
    renderMenuProgress();
  } else {
    dailyCorrect = false;
    playWrong();
    buttons[index].classList.add('wrong');
    buttons[dailyQuestion.answer].classList.add('correct');
    feedback.textContent = "Today's answer is revealed.";
    feedback.className = 'feedback wrong';
    const refText = 'Correct answer: ' + dailyQuestion.choices[dailyQuestion.answer] + ' — ' + (dailyQuestion.reference || '');
    verseRef.textContent = refText;
    dailyVerseRef = refText;
    dailyVerseText = dailyQuestion.verseText || '';
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
    const prev = new Date(state.lastDate + 'T00:00:00');
    const curr = new Date(today + 'T00:00:00');
    const diff = Math.round((curr - prev) / 86400000);
    if(diff === 1){
      nextStreak = dailyCorrect ? nextStreak + 1 : 0;
    } else {
      nextStreak = dailyCorrect ? 1 : 0;
    }
  } else if(state.lastDate === today) {
    nextStreak = state.streak || 0;
  } else {
    nextStreak = dailyCorrect ? 1 : 0;
  }

  saveDailyState({
    lastDate: today,
    streak: nextStreak,
    completedToday: true,
    lastCorrect: dailyCorrect
  });

  document.getElementById('dailyQuestionWrap').style.display = 'none';
  document.getElementById('dailyStatusText').textContent = dailyCorrect ? '✅ Come back tomorrow for a new Daily Challenge.' : '📅 Daily Challenge completed. Come back tomorrow.';
  const completeBox = document.getElementById('dailyCompleteBox');
  completeBox.style.display = 'block';
  completeBox.textContent = `Daily Streak: ${nextStreak}`;
}

function openDailyVerseModal(){
  document.getElementById('dailyModalVerseRef').textContent = dailyVerseRef || '';
  document.getElementById('dailyModalVerseText').textContent = dailyVerseText || '';
  document.getElementById('dailyVerseModal').classList.add('open');
}

function closeDailyVerseModal(event){
  if(event && event.target && event.target.id !== 'dailyVerseModal') return;
  document.getElementById('dailyVerseModal').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const resumeBtn = document.getElementById('resumeBtn');

  initializeSoundToggle();

  if(startBtn) startBtn.onclick = () => {
    renderMenuProgress();
    showScreen('menu');
  };
  if(resumeBtn) resumeBtn.onclick = resumeLastQuiz;

  updateResumeUI();
  renderMenuProgress();
});
