// questions-index.js

(function () {
  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  const rawQuestions = [
    ...safeArray(typeof triviaQuestions          !== "undefined" ? triviaQuestions          : []),
    ...safeArray(typeof quotesQuestions          !== "undefined" ? quotesQuestions          : []),
    ...safeArray(typeof timelineQuestions        !== "undefined" ? timelineQuestions        : []),
    ...safeArray(typeof versesQuestions          !== "undefined" ? versesQuestions          : []),
    ...safeArray(typeof prophecyQuestions        !== "undefined" ? prophecyQuestions        : []),
    ...safeArray(typeof miraclesQuestions        !== "undefined" ? miraclesQuestions        : []),
    ...safeArray(typeof oldTestamentQuestions    !== "undefined" ? oldTestamentQuestions    : []),
    ...safeArray(typeof parablesQuestions        !== "undefined" ? parablesQuestions        : []),
    ...safeArray(typeof geographyQuestions       !== "undefined" ? geographyQuestions       : []),
    ...safeArray(typeof apostlesQuestions        !== "undefined" ? apostlesQuestions        : []),
    ...safeArray(typeof isItAccurateQuestions    !== "undefined" ? isItAccurateQuestions    : []),
    ...safeArray(typeof whoAmIQuestions          !== "undefined" ? whoAmIQuestions          : []),
    ...safeArray(typeof typologyQuestions        !== "undefined" ? typologyQuestions        : []),
    ...safeArray(typeof lettersQuestions         !== "undefined" ? lettersQuestions         : []),
    ...safeArray(typeof namesQuestions           !== "undefined" ? namesQuestions           : [])
  ];

  // Maps the game field in source files to the display name used in the UI.
  // Only entries where the source name DIFFERS from the display name are needed.
  // Files whose game field already matches the UI label need no entry here.
  const gameLabelMap = {
    "Trivia":        "General Bible Trivia",
    "Quotes":        "Who said it?",
    "Verses":        "Finish the Verse",
    "Prophecy":      "Prophecy Quiz",
    "Old Testament": "Old Testament Events",
    "Geography":     "Bible Geography",
    "Apostles":      "Apostles & Early Church",
    "Typology":      "Biblical Typology",
    "Parables":      "Parables"
  };

  const quizQuestions = rawQuestions.map((q) => {
    const copy = { ...q };
    if (copy.game && gameLabelMap[copy.game]) {
      copy.game = gameLabelMap[copy.game];
    }
    return copy;
  });

  window.quizQuestions = quizQuestions;
  window.allQuestions  = quizQuestions;
})();
