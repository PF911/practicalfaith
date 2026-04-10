// questions-index.js

(function () {
  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  const rawQuestions = [
    ...safeArray(typeof triviaQuestions !== "undefined" ? triviaQuestions : []),
    ...safeArray(typeof quotesQuestions !== "undefined" ? quotesQuestions : []),
    ...safeArray(typeof timelineQuestions !== "undefined" ? timelineQuestions : []),
    ...safeArray(typeof versesQuestions !== "undefined" ? versesQuestions : []),
    ...safeArray(typeof prophecyQuestions !== "undefined" ? prophecyQuestions : []),
    ...safeArray(typeof miraclesQuestions !== "undefined" ? miraclesQuestions : []),
    ...safeArray(typeof oldTestamentQuestions !== "undefined" ? oldTestamentQuestions : []),
    ...safeArray(typeof parablesQuestions !== "undefined" ? parablesQuestions : []),
    ...safeArray(typeof geographyQuestions !== "undefined" ? geographyQuestions : []),
    ...safeArray(typeof apostlesQuestions !== "undefined" ? apostlesQuestions : []),
    ...safeArray(typeof isItAccurateQuestions !== "undefined" ? isItAccurateQuestions : []),
    ...safeArray(typeof whoAmIQuestions !== "undefined" ? whoAmIQuestions : []),
    ...safeArray(typeof typologyQuestions !== "undefined" ? typologyQuestions : [])
  ];

  const gameLabelMap = {
    "Trivia": "General Bible Trivia",
    "Quotes": "Who said it?",
    "Timeline": "Bible Timeline",
    "Verses": "Finish the Verse",
    "Prophecy": "Prophecy Quiz",
    "Miracles": "Miracles of Jesus",
    "Old Testament": "Old Testament Events",
    "Parables": "Parables",
    "Geography": "Bible Geography",
    "Apostles": "Apostles & Early Church",
    "Is It Accurate": "Is It Accurate?",
    "Who Am I": "Who Am I?",
    "Typology": "Biblical Typology"
  };

  const quizQuestions = rawQuestions.map((q) => {
    const copy = { ...q };
    if (copy.game && gameLabelMap[copy.game]) {
      copy.game = gameLabelMap[copy.game];
    }
    return copy;
  });

  window.quizQuestions = quizQuestions;
  window.allQuestions = quizQuestions;
})();