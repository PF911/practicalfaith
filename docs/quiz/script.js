const soundCorrect = new Audio("sounds/correct.wav");
const soundWrong = new Audio("sounds/wrong.wav");
const soundStreak = new Audio("sounds/streak.wav");
const soundFinish = new Audio("sounds/finish.wav");
const soundPerfect = new Audio("sounds/applause.wav");

const correctMessages = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

const QUESTIONS_PER_ROUND = 10;
const SAVE_KEY = "bibleQuizSavedGame";
const STATS_KEY = "bibleQuizStats";
const DAILY_STREAK_KEY = "bibleQuizDailyStreak";
const SOUND_KEY = "bibleQuizSoundEnabled";
const CATEGORY_PROGRESS_KEY = "bibleQuizCategoryProgress";

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

function soundEnabled(){
  const saved = localStorage.getItem(SOUND_KEY);
  return saved !== "false";
}

function updateSoundToggleUI(){
  const btn = document.getElementById('soundToggleBtn');
  if(!btn) return;
  btn.textContent = soundEnabled() ? "🔊 Sound: On" : "🔇 Sound: Off";
}

function toggleSound(){
  const nextValue = !soundEnabled();
  localStorage.setItem(SOUND_KEY, nextValue ? "true" : "false");
  updateSoundToggleUI();
}

function safePlay(audio){
  if(!soundEnabled()) return;
  try{
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

function showScreen(screenId){
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  const el = document.getElementById(screenId);
  if(el) el.classList.add('active');

  if(screenId === 'menu'){
    updateResumeUI();
    updateDailyStreakUI();
    updateSoundToggleUI();
    updateCategoryProgressUI();
  }
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

function getFilteredQuestions(category, level){
  const filtered = quizQuestions.filter(q => q.game === category && q.difficulty === level);
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(QUESTIONS_PER_ROUND, shuffled.length));
}

function getResumeSummary(saved){
  if(!saved) return "";
  const qNum = Math.min((saved.currentQuestionIndex || 0) + 1, (saved.currentQuestions || []).length || 1);
  const total = (saved.currentQuestions || []).length || QUESTIONS_PER_ROUND;
  return saved.currentCategory + " — " + saved.currentLevel + " — Question " + qNum + " of " + total;
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
    feedbackText: document.getElementById('feedback')?.textContent || '',
    feedbackClass: document.getElementById('feedback')?.className || 'feedback',
    verseRef: document.getElementById('verseRef')?.textContent || '',
    verseText: document.getElementById('verseText')?.dataset?.verseText || '',
    nextBtnText: document.getElementById('nextBtn')?.textContent || 'Next Question',
    nextBtnDisplay: document.getElementById('nextBtn')?.style.display || 'none'
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

function percentText(value){
  return Math.round(value) + "%";
}

function openHighScores(){
  const stats = loadStats();
  const scoresList = document.getElementById('scoresList');
  if(!scoresList) return;

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
  if(!statsList) return;

  const accuracy = stats.totalQuestionsAnswered ? (stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100 : 0;

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
      <div class="stat-label">Last Quiz</div>
      <div class="score-subline">${stats.lastQuiz || 'No quiz completed yet.'}</div>
    </div>
  `;

  showScreen('statsScreen');
}

function openAbout(){
  showScreen('aboutScreen');
}

function applySavedUiState(saved){
  const buttons = document.querySelectorAll('.answer-btn');
  const feedback = document.getElementById('feedback');
  const verseRef = document.getElementById('verseRef');
  const verseText = document.getElementById('verseText');
  const nextBtn = document.getElementById('nextBtn');

  buttons.forEach((btn, index) => {
    btn.className = 'answer-btn';
    btn.disabled = false;
    if((saved.disabledAnswers || []).includes(index)){
      btn.classList.add('wrong');
      btn.disabled = true;
    }
  });

  const q = currentQuestions[currentQuestionIndex];
  if(saved.answered && q){
    buttons.forEach(btn => btn.disabled = true);
    if(buttons[q.answer]) buttons[q.answer].classList.add('correct');
  }

  if(feedback){
    feedback.textContent = saved.feedbackText || '';
    feedback.className = saved.feedbackClass || 'feedback';
  }
  if(verseRef) verseRef.textContent = saved.verseRef || '';
  if(verseText){
    verseText.textContent = saved.verseText ? 'Click to see the verse' : '';
    verseText.className = saved.verseText ? 'verse-link' : 'verse-link hidden';
    verseText.dataset.verseRef = (saved.verseRef || '').replace(/^Correct answer:\s.*? — /, '');
    verseText.dataset.verseText = saved.verseText || '';
  }
  if(nextBtn){
    nextBtn.textContent = saved.nextBtnText || 'Next Question';
    nextBtn.style.display = saved.nextBtnDisplay || 'none';
  }
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];
  if(!q) return;

  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent = currentLevel;
  document.getElementById('quizMeta').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;

  const labels = ['A) ','B) ','C) ','D) '];
  q.choices.forEach((choice, i) => {
    const btn = document.getElementById('answer' + i);
    if(!btn) return;
    btn.textContent = labels[i] + choice;
    btn.className = 'answer-btn';
    btn.disabled = false;
  });

  document.getElementById('questionText').textContent = q.question;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('verseRef').textContent = '';
  const verseLink = document.getElementById('verseText');
  verseLink.textContent = '';
  verseLink.className = 'verse-link hidden';
  verseLink.dataset.verseRef = '';
  verseLink.dataset.verseText = '';
  document.getElementById('nextBtn').style.display = 'none';

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

function openVerseModal(){
  const verseLink = document.getElementById('verseText');
  const overlay = document.getElementById('verseModal');
  const ref = document.getElementById('modalVerseRef');
  const text = document.getElementById('modalVerseText');

  if(!verseLink || !overlay || !verseLink.dataset.verseText) return;

  ref.textContent = verseLink.dataset.verseRef || '';
  text.textContent = verseLink.dataset.verseText || '';
  overlay.classList.add('active');
}

function closeVerseModal(event){
  if(event && event.target && !event.target.classList.contains('modal-overlay')) return;
  const overlay = document.getElementById('verseModal');
  if(overlay) overlay.classList.remove('active');
}

function showVerse(q, showCorrect){
  document.getElementById('verseRef').textContent =
    showCorrect ? ('Correct answer: ' + q.choices[q.answer] + ' — ' + q.reference) : q.reference;

  const verseLink = document.getElementById('verseText');
  if(q.verseText){
    verseLink.textContent = 'Click to see the verse';
    verseLink.className = 'verse-link';
    verseLink.dataset.verseRef = q.reference || '';
    verseLink.dataset.verseText = q.verseText || '';
  } else {
    verseLink.textContent = '';
    verseLink.className = 'verse-link hidden';
    verseLink.dataset.verseRef = '';
    verseLink.dataset.verseText = '';
  }
}

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  showScreen('levelMenu');
}

function selectLevel(level){
  currentLevel = level;
  currentQuestions = getFilteredQuestions(currentCategory, currentLevel);

  if(currentQuestions.length === 0){
    alert('No questions loaded yet for ' + currentCategory + ' / ' + currentLevel + '.');
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;
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
  const buttons = document.querySelectorAll('.answer-btn');
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
  updateStreakBadge();
  currentQuestions = getFilteredQuestions(currentCategory, currentLevel);
  loadQuestion();
  showScreen('quizScreen');
}

function launchPerfectConfetti(){
  const canvas = document.getElementById('confettiCanvas');
  if(!canvas) return;

  const ctx = canvas.getContext('2d');
  const colors = ['#6b2fbd','#3f6fb4','#ffcf6e','#f39a3e','#3e9b4f','#c84545','#ffffff'];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');

  const pieces = Array.from({length: 140}, () => ({
    x: canvas.width / 2 + (Math.random() - 0.5) * 140,
    y: canvas.height * 0.28 + (Math.random() - 0.5) * 40,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 9,
    vy: -7 - Math.random() * 7,
    gravity: 0.18 + Math.random() * 0.08,
    rotation: Math.random() * 3.14159,
    vr: (Math.random() - 0.5) * 0.3,
    alpha: 1
  }));

  let frame = 0;

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vr;
      p.alpha -= 0.0065;

      ctx.save();
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frame++;
    const alive = pieces.some(p => p.alpha > 0 && p.y < canvas.height + 40);
    if(alive && frame < 240){
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove('active');
    }
  }

  requestAnimationFrame(draw);
}

function defaultCategoryProgress(){
  return {};
}

function loadCategoryProgress(){
  try{
    const raw = localStorage.getItem(CATEGORY_PROGRESS_KEY);
    if(!raw) return defaultCategoryProgress();
    return { ...defaultCategoryProgress(), ...JSON.parse(raw) };
  }catch(e){
    return defaultCategoryProgress();
  }
}

function saveCategoryProgress(progress){
  localStorage.setItem(CATEGORY_PROGRESS_KEY, JSON.stringify(progress));
}

function getQuestionKey(q){
  return [q.question || '', q.reference || '', (q.choices || []).join('|')].join('||');
}

function categoryId(category){
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function recordCategoryProgress(category, questions){
  if(!category || category === "Daily Challenge") return;
  if(!Array.isArray(questions) || !questions.length) return;

  const progress = loadCategoryProgress();
  if(!progress[category]){
    progress[category] = {};
  }

  questions.forEach(q => {
    progress[category][getQuestionKey(q)] = true;
  });

  saveCategoryProgress(progress);
}

function updateCategoryProgressUI(){
  if(typeof quizQuestions === 'undefined' || !Array.isArray(quizQuestions)) return;

  const categories = [
    'General Bible Trivia',
    'Who said it?',
    'Bible Timeline',
    'Finish the Verse',
    'Prophecy Quiz'
  ];

  const progress = loadCategoryProgress();

  categories.forEach(category => {
    const total = quizQuestions.filter(q => q.game === category).length;
    const done = progress[category] ? Object.keys(progress[category]).length : 0;
    const safeDone = Math.min(done, total);
    const percent = total ? Math.round((safeDone / total) * 100) : 0;
    const id = categoryId(category);

    const textEl = document.getElementById('progressText_' + id);
    const fillEl = document.getElementById('progressFill_' + id);

    if(textEl){
      textEl.textContent = safeDone + ' / ' + total + ' completed';
    }

    if(fillEl){
      fillEl.style.width = percent + '%';
    }
  });
}

function defaultDailyStreak(){
  return {
    streak: 0,
    best: 0,
    lastCompleted: ""
  };
}

function loadDailyStreak(){
  try{
    const raw = localStorage.getItem(DAILY_STREAK_KEY);
    if(!raw) return defaultDailyStreak();
    return { ...defaultDailyStreak(), ...JSON.parse(raw) };
  }catch(e){
    return defaultDailyStreak();
  }
}

function saveDailyStreak(data){
  localStorage.setItem(DAILY_STREAK_KEY, JSON.stringify(data));
}

function getTodayKey(){
  const d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function getYesterdayKey(){
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function updateDailyStreakUI(){
  const line = document.getElementById('dailyStreakLine');
  if(!line) return;

  const streakData = loadDailyStreak();
  let text = "🔥 Daily Streak: " + streakData.streak;
  if(streakData.best > 0){
    text += "   •   Best: " + streakData.best;
  }
  line.textContent = text;
}

function recordDailyChallengeCompletion(){
  const today = getTodayKey();
  const yesterday = getYesterdayKey();
  const streakData = loadDailyStreak();

  if(streakData.lastCompleted === today){
    return;
  }

  if(streakData.lastCompleted === yesterday){
    streakData.streak += 1;
  } else {
    streakData.streak = 1;
  }

  if(streakData.streak > streakData.best){
    streakData.best = streakData.streak;
  }

  streakData.lastCompleted = today;
  saveDailyStreak(streakData);
  updateDailyStreakUI();
}

function getDailyBadge(streak){
  if(streak >= 30){
    return {
      title: "👑 Bible Champion",
      note: "Thirty days strong. That is outstanding."
    };
  }

  if(streak >= 7){
    return {
      title: "🏅 Faithful",
      note: "A full week of steady faithfulness."
    };
  }

  if(streak >= 3){
    return {
      title: "🔥 On Fire",
      note: "Your daily rhythm is building strong momentum."
    };
  }

  return {
    title: "🌟 Starter",
    note: "Every streak begins with one faithful day."
  };
}

function openDailyRewardScreen(){
  const streakData = loadDailyStreak();
  const streakEl = document.getElementById('dailyRewardStreak');
  const msgEl = document.getElementById('dailyRewardMessage');
  const badgeEl = document.getElementById('dailyRewardBadge');
  const badgeNoteEl = document.getElementById('dailyRewardBadgeNote');
  const badge = getDailyBadge(streakData.streak);

  if(streakEl){
    streakEl.textContent = "🔥 Daily Streak: " + streakData.streak;
  }

  if(msgEl){
    msgEl.textContent = streakData.streak > 1
      ? "You completed today's Daily Challenge and kept your streak alive."
      : "You completed today's Daily Challenge.";
  }

  if(badgeEl){
    badgeEl.textContent = badge.title;
  }

  if(badgeNoteEl){
    badgeNoteEl.textContent = badge.note;
  }

  showScreen('dailyRewardScreen');
}

function showResults(){
  const wasDailyChallenge = localStorage.getItem("dailyChallengeActive") === "true";

  if(wasDailyChallenge){
    finishDailyChallenge();
  }

  updateStatsAfterQuiz(score, currentQuestions.length, currentCategory, currentLevel, bestStreakThisQuiz);
  recordCategoryProgress(currentCategory, currentQuestions);
  clearSavedProgress();

  if(wasDailyChallenge){
    playFinish();
    openDailyRewardScreen();
    return;
  }

  const perfect = score === currentQuestions.length;

  document.getElementById('resultCategory').textContent = currentCategory;
  document.getElementById('resultLevel').textContent = currentLevel;
  document.getElementById('scoreBig').textContent = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent = scoreText(score, currentQuestions.length);

  const badge = document.getElementById('perfectBadge');
  const note = document.getElementById('perfectNote');

  if(perfect){
    badge.style.display = 'block';
    note.style.display = 'block';
    playPerfect();
    launchPerfectConfetti();
  } else {
    badge.style.display = 'none';
    note.style.display = 'none';
    playFinish();
  }

  showScreen('resultScreen');
}

function startDailyChallenge(){
  const today = getTodayKey();
  const completed = localStorage.getItem("dailyChallengeDate");

  if(completed === today){
    alert("You've already completed today's Daily Challenge. Come back tomorrow!");
    return;
  }

  localStorage.setItem("dailyChallengeActive","true");
  loadDailyQuestion();
}

function finishDailyChallenge(){
  const today = getTodayKey();
  localStorage.setItem("dailyChallengeDate", today);
  localStorage.removeItem("dailyChallengeActive");
  recordDailyChallengeCompletion();
  alert("Nice work! You completed today's Daily Challenge.");
}

function loadDailyQuestion(){
  if(!Array.isArray(quizQuestions) || quizQuestions.length === 0){
    alert("No daily questions are available right now.");
    return;
  }

  const today = new Date();
  const dayIndex = Math.floor(today.getTime() / 86400000);
  const index = dayIndex % quizQuestions.length;
  const dailyQuestion = quizQuestions[index];

  currentCategory = "Daily Challenge";
  currentLevel = "Special";
  currentQuestions = [dailyQuestion];
  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;
  attemptsThisQuestion = 0;
  disabledAnswers = [];

  showScreen('quizScreen');
  loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const resumeBtn = document.getElementById('resumeBtn');

  if(startBtn) startBtn.onclick = () => showScreen('menu');
  if(resumeBtn) resumeBtn.onclick = resumeLastQuiz;

  updateResumeUI();
  updateDailyStreakUI();
  updateSoundToggleUI();
  updateCategoryProgressUI();
});
