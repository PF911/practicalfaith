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

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  updateSoundUI();
}

function updateStreakBadge(){
  const wrap = document.getElementById('streakWrap');
  const count = document.getElementById('streakCount');

  if(correctStreak >= 3){
    count.textContent = correctStreak;
    wrap.style.display = 'inline-flex';
  } else {
    wrap.style.display = 'none';
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

function openLevelMenu(category){
  currentCategory = category;
  document.getElementById('levelCategory').textContent = category;
  showScreen('levelMenu');
}

function selectLevel(level){
  currentLevel = level;
  currentQuestions = shuffleArray(
    quizQuestions.filter(q => q.game === currentCategory && q.difficulty === level)
  ).slice(0, QUESTIONS_PER_ROUND);

  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;

  loadQuestion();
  showScreen('quizScreen');
}

function renderQuestion(){
  const q = currentQuestions[currentQuestionIndex];

  document.getElementById('quizCategory').textContent = currentCategory;
  document.getElementById('quizLevel').textContent = currentLevel;

  document.getElementById('quizMeta').textContent =
    'Question ' + (currentQuestionIndex + 1) + ' of ' + currentQuestions.length;

  const labels = ['A) ','B) ','C) ','D) '];

  q.choices.forEach((choice, i) => {
    const btn = document.getElementById('answer' + i);
    btn.textContent = labels[i] + choice;
    btn.className = 'answer-btn';
    btn.disabled = false;
  });

  const qText = document.getElementById('questionText');

  if(q.question.startsWith("Choose One:")){
    qText.innerHTML =
      `<span class="choose-tag">Choose One</span> ${q.question.replace("Choose One:", "").trim()}`;
  }else{
    qText.textContent = q.question;
  }

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';

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

    if(correctStreak > bestStreakThisQuiz)
      bestStreakThisQuiz = correctStreak;

    if(correctStreak >= 3)
      playStreak();

    buttons.forEach(btn => btn.disabled = true);
    buttons[index].classList.add('correct');

    feedback.textContent =
      attemptsThisQuestion === 2 ? randomFrom(recoveryMessages) : randomFrom(correctMessages);

    feedback.className = 'feedback correct';

    updateStreakBadge();

    const nextBtn = document.getElementById('nextBtn');

    nextBtn.textContent =
      currentQuestionIndex === currentQuestions.length - 1
        ? 'See Score'
        : 'Next Question';

    nextBtn.style.display = 'flex';

    return;
  }

  playWrong();

  buttons[index].classList.add('wrong');
  buttons[index].disabled = true;

  if(!disabledAnswers.includes(index))
    disabledAnswers.push(index);

  if(attemptsThisQuestion === 1){

    correctStreak = 0;

    feedback.textContent = randomFrom(tryAgainMessages);
    feedback.className = 'feedback wrong';

    updateStreakBadge();

    return;
  }

  answered = true;
  correctStreak = 0;

  buttons[q.answer].classList.add('correct');

  buttons.forEach(btn => btn.disabled = true);

  feedback.textContent = randomFrom(incorrectMessages);
  feedback.className = 'feedback wrong';

  updateStreakBadge();

  const nextBtn = document.getElementById('nextBtn');

  nextBtn.textContent =
    currentQuestionIndex === currentQuestions.length - 1
      ? 'See Score'
      : 'Next Question';

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

  playFinish();

  if(score === currentQuestions.length){
    playPerfect();
  }

  document.getElementById('scoreBig').textContent =
    score + ' / ' + currentQuestions.length;

  showScreen('resultScreen');
}

function restartLevel(){

  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  bestStreakThisQuiz = 0;

  loadQuestion();

  showScreen('quizScreen');
}

document.addEventListener('DOMContentLoaded', () => {

  initializeSoundToggle();

  const startBtn = document.getElementById('startBtn');

  if(startBtn)
    startBtn.onclick = () => showScreen('menu');
});