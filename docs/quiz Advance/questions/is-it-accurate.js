const isItAccurateQuestions = [

  {
    id: "as001",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Money is the root of all evil.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "1 Timothy 6:10",
    verseText: "For the love of money is the root of all kinds of evil..."
  },
  {
    id: "as002",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Cleanliness is next to godliness.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as003",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Judge not, that ye be not judged.' means believers must never make moral judgments of any kind.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 7:1-5; John 7:24",
    verseText: "Judge righteous judgment."
  },
  {
    id: "as004",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The meek shall inherit the earth.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 5:5",
    verseText: "Blessed are the meek..."
  },
  {
    id: "as005",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God helps those who help themselves.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as006",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'There were three wise men.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "Matthew 2:1-12",
    verseText: "Three gifts mentioned, not three men."
  },
  {
    id: "as007",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'To be absent from the body is to be present with the Lord.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "2 Corinthians 5:8",
    verseText: "Willing rather to be absent... and present with the Lord."
  },
  {
    id: "as008",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The lion shall lie down with the lamb.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Isaiah 11:6",
    verseText: "The wolf also shall dwell with the lamb."
  },
  {
    id: "as009",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Man shall not live by bread alone.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 4:4",
    verseText: "But by every word..."
  },
  {
    id: "as010",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Spare the rod, spoil the child.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "Proverbs 13:24",
    verseText: "He that spareth his rod..."
  },

  {
    id: "as011",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The truth shall set you free.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "John 8:31-32",
    verseText: "The truth shall make you free."
  },
  {
    id: "as012",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Ask and you shall receive.' guarantees every request will be granted.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "1 John 5:14",
    verseText: "According to his will."
  },
  {
    id: "as013",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Money answers everything.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Ecclesiastes 10:19",
    verseText: "Money answereth all things."
  },
  {
    id: "as014",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The eye is the window to the soul.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Matthew 6:22",
    verseText: "The light of the body is the eye."
  },
  {
    id: "as015",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'All things work together for good for everyone.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Romans 8:28",
    verseText: "To them that love God..."
  },

  {
    id: "as016",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Faith can move mountains.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Matthew 17:20",
    verseText: "If ye have faith..."
  },
  {
    id: "as017",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The Sabbath was made for man.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Mark 2:27",
    verseText: "The sabbath was made for man."
  },
  {
    id: "as018",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God will never give you more than you can handle.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "1 Corinthians 10:13",
    verseText: "Make a way to escape."
  },
  {
    id: "as019",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Forgive and forget.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as020",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Where two or three are gathered, there I am in the midst.' applies to any casual gathering.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 18:20",
    verseText: "Context matters."
  },

  {
    id: "as021",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Pride goes before a fall.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Proverbs 16:18",
    verseText: "Pride goeth before destruction."
  },
  {
    id: "as022",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Let he who is without sin cast the first stone.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "John 8:7",
    verseText: "Let him first cast a stone."
  },
  {
    id: "as023",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'We are all God's children.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "John 1:12",
    verseText: "To them gave he power..."
  },
  {
    id: "as024",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Love covers a multitude of sins.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Peter 4:8",
    verseText: "Charity shall cover..."
  },
  {
    id: "as025",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The spirit is willing, but the flesh is weak.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 26:41",
    verseText: "The spirit indeed is willing..."
  },

  {
    id: "as026",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The wages of sin is death.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 6:23",
    verseText: "The wages of sin is death..."
  },
  {
    id: "as027",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Do unto others as you would have them do unto you.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 7:12",
    verseText: "Therefore all things..."
  },
  {
    id: "as028",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God is love.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 John 4:8",
    verseText: "God is love."
  },
  {
    id: "as029",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'There is none righteous, no, not one.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 3:10",
    verseText: "None righteous..."
  },
  {
    id: "as030",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The fear of the Lord is the beginning of wisdom.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 9:10",
    verseText: "Beginning of wisdom."
  },
  {
    id: "as031",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Man looks on the outward appearance, but the Lord looks on the heart.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Samuel 16:7",
    verseText: "The LORD looketh on the heart."
  },
  {
    id: "as032",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Ask, and it shall be given you; seek, and you shall find.' guarantees immediate answers.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "1 John 5:14",
    verseText: "According to his will."
  },
  {
    id: "as033",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The letter kills, but the Spirit gives life.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "2 Corinthians 3:6",
    verseText: "The spirit giveth life."
  },
  {
    id: "as034",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Be ye perfect, even as your Father in heaven is perfect.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 5:48",
    verseText: "Be ye therefore perfect."
  },
  {
    id: "as035",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'My kingdom is not of this world.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "John 18:36",
    verseText: "Not of this world."
  }

];