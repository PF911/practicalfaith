
const correctMessages = ["Whoa, nice!","Great job!","Excellent!","You got it!","Well done!","Nice one!"];
const incorrectMessages = ["Ooh, I'm sorry, that's incorrect.","Close, but that's not right.","Not quite.","Good try, but that's incorrect.","Almost!","That's not the right answer."];
const tryAgainMessages = ["Close, but that's not right. Try again!","Not quite. Take one more shot!","Ooh, not that one. Try again!","Good try — give it one more go!","Almost! Try once more!"];
const recoveryMessages = ["Nice recovery!","Good catch!","You got it on the second try!","Well done — you found it!","There you go!"];

let currentCategory = '';
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let correctStreak = 0;
let attemptsThisQuestion = 0;

function showScreen(screenId){
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
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
    verseText: "",
    category: questionObj.category,
    difficulty: questionObj.difficulty,
    testament: questionObj.testament
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

document.getElementById('startBtn').onclick = () => showScreen('menu');

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  showScreen('levelMenu');
}

function selectLevel(level){
  currentLevel = level;

  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.difficulty === currentLevel)
  ).map(prepareQuestion);

  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;

  loadQuestion();
  showScreen('quizScreen');
}

function loadQuestion(){
  answered = false;
  attemptsThisQuestion = 0;

  const q = currentQuestions[currentQuestionIndex];
  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent = currentLevel;
  document.getElementById('quizMeta').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;
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

function showVerse(q, showCorrect){
  document.getElementById('verseRef').textContent =
    showCorrect ? ('Correct answer: ' + q.answers[q.correct] + ' — ' + q.verse) : q.verse;
  document.getElementById('verseText').textContent = q.verseText || '';
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
    return;
  }

  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;

  if(attemptsThisQuestion === 1){
    correctStreak = 0;
    feedback.textContent = tryAgainFeedbackMessage();
    feedback.className = 'feedback wrong';
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
  document.getElementById('resultCategory').textContent = currentCategory;
  document.getElementById('resultLevel').textContent = currentLevel;
  document.getElementById('scoreBig').textContent = score + ' / ' + currentQuestions.length;
  document.getElementById('scoreSub').textContent = scoreText(score, currentQuestions.length);
  showScreen('resultScreen');
}

function scoreText(score, total){
  if(score === total) return 'Perfect score!';
  if(score >= total - 1) return 'Excellent work!';
  if(score >= Math.ceil(total / 2)) return 'Nice job!';
  return 'Good start — try again!';
}

function restartLevel(){
  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;

  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.difficulty === currentLevel)
  ).map(prepareQuestion);

  loadQuestion();
  showScreen('quizScreen');
}
