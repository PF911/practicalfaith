const correctMessages = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

const QUESTIONS_PER_ROUND = 10;
const SAVE_KEY = "bibleQuizSavedGame";

let currentCategory = '';
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let correctStreak = 0;
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

function prepareQuestion(questionObj){
  const answers = questionObj.choices.map((choice, index) => ({
    text: choice,
    isCorrect: index === questionObj.answer
  }));

  const shuffledAnswers = shuffleArray(answers);
  const newCorrectIndex = shuffledAnswers.findIndex(answer => answer.isCorrect);

  return {
    question: questionObj.question,
    answers: shuffledAnswers.map(answer => answer.text),
    correct: newCorrectIndex,
    verse: questionObj.reference,
    verseText: questionObj.verseText || "",
    category: questionObj.category,
    difficulty: questionObj.difficulty,
    testament: questionObj.testament,
    game: questionObj.game
  };
}

function correctFeedbackMessage(){
  if(attemptsThisQuestion === 2) return randomFrom(recoveryMessages);
  if(correctStreak >= 5) return "You're on fire!";
  if(correctStreak === 4) return "Impressive streak!";
  if(correctStreak === 3) return "Wow! You're on a roll!";
  if(correctStreak === 2) return "Nice! You're getting warmed up!";
  return randomFrom(correctMessages);
}

function incorrectFeedbackMessage(){
  return randomFrom(incorrectMessages);
}

function tryAgainFeedbackMessage(){
  return randomFrom(tryAgainMessages);
}

function getFilteredQuestions(category, level){
  const filtered = quizQuestions.filter(q => q.game === category && q.difficulty === level);
  const shuffled = shuffleArray(filtered);
  const selected = shuffled.slice(0, Math.min(QUESTIONS_PER_ROUND, shuffled.length));
  return selected.map(prepareQuestion);
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
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return null;
    return JSON.parse(raw);
  } catch (err){
    return null;
  }
}

function clearSavedProgress(){
  localStorage.removeItem(SAVE_KEY);
  updateResumeUI();
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
    if(saved.feedbackClass && saved.feedbackClass.includes('correct')){
      buttons[q.correct].classList.add('correct');
    } else {
      buttons[q.correct].classList.add('correct');
    }
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

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  const progressFill = document.getElementById('progressFill');
  if(progressFill){
    progressFill.style.width = progress + '%';
  }

  document.getElementById('questionText').textContent = q.question;

  const labels = ['A)','B)','C)','D)'];
  q.answers.forEach((answer, index) => {
    const btn = document.getElementById('answer' + index);
    btn.textContent = labels[index] + ' ' + answer;
    btn.className = 'answer-btn';
    btn.disabled = false;
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('verseRef').textContent = '';
  document.getElementById('verseText').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';
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
    showCorrect ? ('Correct answer: ' + q.answers[q.correct] + ' — ' + q.verse) : q.verse;
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

  if(index === q.correct){
    answered = true;
    score++;
    correctStreak++;
    buttons.forEach(btn => btn.disabled = true);
    buttons[q.correct].classList.add('correct');
    feedback.textContent = correctFeedbackMessage();
    feedback.className = 'feedback correct';
    showVerse(q, false);

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Score';
    nextBtn.style.display = 'flex';
    saveProgress();
    return;
  }

  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;
  if(!disabledAnswers.includes(index)) disabledAnswers.push(index);

  if(attemptsThisQuestion === 1){
    correctStreak = 0;
    feedback.textContent = tryAgainFeedbackMessage();
    feedback.className = 'feedback wrong';
    saveProgress();
    return;
  }

  answered = true;
  correctStreak = 0;
  buttons[q.correct].classList.add('correct');
  buttons.forEach(btn => btn.disabled = true);
  feedback.textContent = incorrectFeedbackMessage();
  feedback.className = 'feedback wrong';
  showVerse(q, true);

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Score';
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
