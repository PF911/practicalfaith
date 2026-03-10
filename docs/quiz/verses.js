const versesQuestions = [

  {
    id: 28,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: 'Finish the verse: "The Lord is my shepherd; ____."',
    choices: ["I shall not want", "He is my rock", "I will fear no evil", "His mercy endures"],
    answer: 0,
    reference: "Psalm 23:1",
    verseText: "The Lord is my shepherd; I shall not want."
  },

  {
    id: 29,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: 'Finish the verse: "In the beginning God created the ____ and the earth."',
    choices: ["light", "heavens", "angels", "sea"],
    answer: 1,
    reference: "Genesis 1:1",
    verseText: "In the beginning God created the heavens and the earth."
  },

  {
    id: 30,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: 'Finish the verse: "Jesus wept." This verse is found in:',
    choices: ["John 11:35", "Matthew 5:9", "Luke 2:10", "Psalm 23:1"],
    answer: 0,
    reference: "John 11:35",
    verseText: "Jesus wept."
  },

  {
    id: 31,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Student",
    question: 'Finish the verse: "For all have sinned and fall short of the ____ of God."',
    choices: ["truth", "grace", "law", "glory"],
    answer: 3,
    reference: "Romans 3:23",
    verseText: "For all have sinned and fall short of the glory of God."
  },

  {
    id: 32,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Student",
    question: 'Finish the verse: "Trust in the Lord with all thine heart; and lean not unto thine own ____."',
    choices: ["strength", "understanding", "wisdom", "way"],
    answer: 1,
    reference: "Proverbs 3:5",
    verseText: "Lean not on your own understanding."
  },

  {
    id: 33,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Student",
    question: 'Finish the verse: "Thy word is a lamp unto my feet, and a ____ unto my path."',
    choices: ["light", "sword", "shield", "guide"],
    answer: 0,
    reference: "Psalm 119:105",
    verseText: "Your word is a lamp to my feet and a light to my path."
  },

  {
    id: 34,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: 'Finish the verse: "Man shall not live by bread alone, but by every word that proceeds out of the mouth of ____."',
    choices: ["the prophets", "God", "Moses", "the Lord of hosts"],
    answer: 1,
    reference: "Matthew 4:4",
    verseText: "Man shall not live by bread alone, but by every word that proceeds from the mouth of God."
  },

  {
    id: 35,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: 'Finish the verse: "The just shall live by ____."',
    choices: ["works", "grace", "faith", "hope"],
    answer: 2,
    reference: "Habakkuk 2:4",
    verseText: "The just shall live by his faith."
  },

  {
    id: 36,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: 'Finish the verse: "Be ye doers of the word, and not hearers only, deceiving your own ____."',
    choices: ["hearts", "selves", "minds", "souls"],
    answer: 1,
    reference: "James 1:22",
    verseText: "Be doers of the word, and not hearers only, deceiving yourselves."
  },

  {
    id: 124,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: "Finish the verse: \"For God so loved the world, that he gave his only begotten ____.\"",
    choices: ["church", "Son", "kingdom", "angel"],
    answer: 1,
    reference: "John 3:16",
    verseText: "For God so loved the world, that he gave his only begotten Son."
  },

  {
    id: 125,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: "Finish the verse: \"Honor thy father and thy ____.\"",
    choices: ["teacher", "mother", "neighbor", "brother"],
    answer: 1,
    reference: "Exodus 20:12",
    verseText: "Honour thy father and thy mother."
  },

  {
    id: 126,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: "Finish the verse: \"I am the way, the truth, and the ____.\"",
    choices: ["light", "door", "life", "vine"],
    answer: 2,
    reference: "John 14:6",
    verseText: "I am the way, the truth, and the life."
  },

  {
    id: 127,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Beginner",
    question: "Finish the verse: \"The fear of the Lord is the beginning of ____.\"",
    choices: ["peace", "wisdom", "joy", "strength"],
    answer: 1,
    reference: "Proverbs 9:10",
    verseText: "The fear of the Lord is the beginning of wisdom."
  },

  {
    id: 128,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Student",
    question: "Finish the verse: \"The wages of sin is death; but the gift of God is eternal ____.\"",
    choices: ["faith", "grace", "life", "truth"],
    answer: 2,
    reference: "Romans 6:23",
    verseText: "The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."
  },

  {
    id: 129,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Student",
    question: "Finish the verse: \"Walk by faith, not by ____.\"",
    choices: ["works", "law", "fear", "sight"],
    answer: 3,
    reference: "2 Corinthians 5:7",
    verseText: "For we walk by faith, not by sight."
  },

  {
    id: 130,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Student",
    question: "Finish the verse: \"Be still, and know that I am ____.\"",
    choices: ["your shield", "God", "holy", "near"],
    answer: 1,
    reference: "Psalm 46:10",
    verseText: "Be still, and know that I am God."
  },

  {
    id: 131,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Student",
    question: "Finish the verse: \"Blessed are the peacemakers: for they shall be called the children of ____.\"",
    choices: ["light", "men", "peace", "God"],
    answer: 3,
    reference: "Matthew 5:9",
    verseText: "Blessed are the peacemakers: for they shall be called the children of God."
  },

  {
    id: 132,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: "Finish the verse: \"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in ____.\"",
    choices: ["truth", "grace", "righteousness", "wisdom"],
    answer: 2,
    reference: "2 Timothy 3:16",
    verseText: "All scripture is given by inspiration of God... for instruction in righteousness."
  },

  {
    id: 133,
    game: "Finish the Verse",
    testament: "Old Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: "Finish the verse: \"Not by might, nor by power, but by my Spirit, saith the Lord of ____.\"",
    choices: ["hosts", "Israel", "glory", "heaven"],
    answer: 0,
    reference: "Zechariah 4:6",
    verseText: "Not by might, nor by power, but by my spirit, saith the Lord of hosts."
  },

  {
    id: 134,
    game: "Finish the Verse",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: "Finish the verse: \"Faith cometh by hearing, and hearing by the word of ____.\"",
    choices: ["grace", "truth", "God", "Christ"],
    answer: 2,
    reference: "Romans 10:17",
    verseText: "So then faith cometh by hearing, and hearing by the word of God."
  }

];
