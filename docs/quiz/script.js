const soundCorrect = new Audio("sounds/correct.wav");
const soundWrong = new Audio("sounds/wrong.wav");
const soundStreak = new Audio("sounds/streak.wav");
const soundFinish = new Audio("sounds/finish.wav");

function safePlay(audio){
  try{
    audio.currentTime = 0;
    const p = audio.play();
    if(p && typeof p.catch === "function"){ p.catch(() => {}); }
  }catch(e){}
}

function playCorrect(){ safePlay(soundCorrect); }
function playWrong(){ safePlay(soundWrong); }
function playStreak(){ safePlay(soundStreak); }
function playFinish(){ safePlay(soundFinish); }

const correctMessages = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

const QUESTIONS_PER_ROUND = 10;
const SAVE_KEY = "bibleQuizSavedGame";
const STATS_KEY = "bibleQuizStats";

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

function showScreen(screenId){
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
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
    stats.highScores[key] = {
      category,
      level,
      score: finalScore,
      total: totalQuestions,
      percent
    };
  }

  saveStats(stats);
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
  if(saved.answered){
    buttons.forEach(btn => btn.disabled = true);
    buttons[q.answer].classList.add('correct');
  }

  feedback.textContent = saved.feedbackText || '';
  feedback.className = saved.feedbackClass || 'feedback';
  verseRef.textContent = saved.verseRef || '';
  verseText.textContent = saved.verseText || '';
  nextBtn.textContent = saved.nextBtnText || 'Next Question';
  nextBtn.style.display = saved.nextBtnDisplay || 'none';
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];
  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent = currentLevel;
  document.getElementById('quizMeta').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;
  document.getElementById('questionText').textContent = q.question;

  const labels = ['A) ','B) ','C) ','D) '];
  q.choices.forEach((choice, i) => {
    const btn = document.getElementById('answer' + i);
    btn.textContent = labels[i] + choice;
    btn.className = 'answer-btn';
    btn.disabled = false;
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('verseRef').textContent = '';
  document.getElementById('verseText').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
}

function loadQuestion(){
  answered = false;
  attemptsThisQuestion = 0;
  disabledAnswers = [];
  renderQuestion();
  saveProgress();
}

function showVerse(q, showCorrect){
  document.getElementById('verseRef').textContent =
    showCorrect ? ('Correct answer: ' + q.choices[q.answer] + ' — ' + q.reference) : q.reference;
  document.getElementById('verseText').textContent = q.verseText || '';
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
    saveProgress();
    return;
  }

  answered = true;
  correctStreak = 0;
  buttons[q.answer].classList.add('correct');
  buttons.forEach(btn => btn.disabled = true);
  feedback.textContent = randomFrom(incorrectMessages);
  feedback.className = 'feedback wrong';
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

function showResults(){
  playFinish();
  updateStatsAfterQuiz(score, currentQuestions.length, currentCategory, currentLevel, bestStreakThisQuiz);
  clearSavedProgress();
  document.getElementById('resultCategory').textContent = currentCategory;
  document.getElementById('resultLevel').textContent = currentLevel;
  document.getElementById('scoreBig').textContent = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent = scoreText(score, currentQuestions.length);
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
  currentQuestions = getFilteredQuestions(currentCategory, currentLevel);
  loadQuestion();
  showScreen('quizScreen');
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const resumeBtn = document.getElementById('resumeBtn');

  if(startBtn){
    startBtn.onclick = () => showScreen('menu');
  }

  if(resumeBtn){
    resumeBtn.onclick = resumeLastQuiz;
  }

  updateResumeUI();
});
