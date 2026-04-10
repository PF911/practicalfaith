const isItAccurateQuestions = [
  {
    id: "as001",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Money is the root of all evil.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "1 Timothy 6:10",
    verseText: "For the love of money is a root of all kinds of evil."
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
    question: "True, False, Not Stated, or Misquoted: 'Judge not, that ye be not judged.' means believers must never evaluate doctrine or conduct.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 7:1-5; John 7:24; 1 Corinthians 5:12-13",
    verseText: "Do not judge according to appearance, but judge with righteous judgment."
  },
  {
    id: "as004",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The meek shall inherit the earth.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 5:5",
    verseText: "Blessed are the meek, for they shall inherit the earth."
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
    verseText: "The text mentions three gifts, not three men."
  },
  {
    id: "as007",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'To be absent from the body is to be present with the Lord.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "2 Corinthians 5:6-8",
    verseText: "to be absent from the body and to be present with the Lord."
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
    reference: "Matthew 4:4; Deuteronomy 8:3",
    verseText: "Man shall not live by bread alone, but by every word that proceeds from the mouth of God."
  },
  {
    id: "as010",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Spare the rod, spoil the child.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "Proverbs 13:24",
    verseText: "He who spares his rod hates his son."
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
    question: "True, False, Not Stated, or Misquoted: 'Ask and you shall receive.' guarantees every request will be granted exactly as desired.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 7:7; 1 John 5:14",
    verseText: "If we ask anything according to His will, He hears us."
  },
  {
    id: "as013",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Money answereth all things.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Ecclesiastes 10:19",
    verseText: "A feast is made for laughter... but money answers everything."
  },
  {
    id: "as014",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The eye is the window to the soul.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Matthew 6:22-23",
    verseText: "The lamp of the body is the eye."
  },
  {
    id: "as015",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'All things work together for good for everyone.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Romans 8:28",
    verseText: "To those who love God, to those who are the called according to His purpose."
  },
  {
    id: "as016",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Faith can move mountains.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Matthew 17:20; 21:21",
    verseText: "If you have faith as a mustard seed..."
  },
  {
    id: "as017",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The sabbath was made for man.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Mark 2:27",
    verseText: "The Sabbath was made for man, and not man for the Sabbath."
  },
  {
    id: "as018",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God will never give you more than you can handle.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "1 Corinthians 10:13; 2 Corinthians 1:8-9",
    verseText: "He will also make the way of escape."
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
    question: "True, False, Not Stated, or Misquoted: 'Where two or three are gathered together in my name, there am I in the midst of them.' applies to any casual Christian gathering without regard to context.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 18:15-20",
    verseText: "The saying appears in a passage about discipline and agreement."
  },
  {
    id: "as021",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Pride goes before a fall.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Proverbs 16:18",
    verseText: "Pride goes before destruction, and a haughty spirit before a fall."
  },
  {
    id: "as022",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Let he who is without sin cast the first stone.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "John 8:7",
    verseText: "He who is without sin among you, let him throw a stone at her first."
  },
  {
    id: "as023",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'We are all God's children.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "John 1:12; Galatians 3:26; Ephesians 2:1-3",
    verseText: "But as many as received Him, to them He gave the right to become children of God."
  },
  {
    id: "as024",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Love covers a multitude of sins.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Peter 4:8; Proverbs 10:12",
    verseText: "Love will cover a multitude of sins."
  },
  {
    id: "as025",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The spirit indeed is willing, but the flesh is weak.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 26:41",
    verseText: "The spirit indeed is willing, but the flesh is weak."
  },
  {
    id: "as026",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The wages of sin is death.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 6:23",
    verseText: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."
  },
  {
    id: "as027",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Do unto others as you would have them do unto you.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 7:12; Luke 6:31",
    verseText: "Whatever you want men to do to you, do also to them."
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
    verseText: "There is none righteous, no, not one."
  },
  {
    id: "as030",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The fear of the Lord is the beginning of wisdom.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 9:10; Psalm 111:10",
    verseText: "The fear of the LORD is the beginning of wisdom."
  },
  {
    id: "as031",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Man looketh on the outward appearance, but the LORD looketh on the heart.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Samuel 16:7",
    verseText: "Man looks at the outward appearance, but the LORD looks at the heart."
  },
  {
    id: "as032",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Ask, and it shall be given you; seek, and ye shall find.' guarantees immediate answers in the timing we prefer.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 7:7; Luke 18:1-8",
    verseText: "Men always ought to pray and not lose heart."
  },
  {
    id: "as033",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The letter killeth, but the spirit giveth life.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "2 Corinthians 3:6",
    verseText: "The letter kills, but the Spirit gives life."
  },
  {
    id: "as034",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Be ye therefore perfect, even as your Father which is in heaven is perfect.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 5:48",
    verseText: "Therefore you shall be perfect, just as your Father in heaven is perfect."
  },
  {
    id: "as035",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'My kingdom is not of this world.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "John 18:36",
    verseText: "My kingdom is not of this world."
  },
  {
    id: "as036",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'This too shall pass.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as037",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Hate the sin, love the sinner.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as038",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The love of money is the root of all kinds of evil.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "1 Timothy 6:10",
    verseText: "For the love of money is a root of all kinds of evil."
  },
  {
    id: "as039",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The just shall live by faith.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Habakkuk 2:4; Romans 1:17; Galatians 3:11; Hebrews 10:38",
    verseText: "The just shall live by faith."
  },
  {
    id: "as040",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Be still, and know that I am God.' was originally spoken as a private devotional command to anxious believers.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Psalm 46:10",
    verseText: "Be still, and know that I am God; I will be exalted among the nations."
  },
  {
    id: "as041",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The joy of the Lord is your strength.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Nehemiah 8:10",
    verseText: "The joy of the LORD is your strength."
  },
  {
    id: "as042",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Without a vision, the people perish.' means every individual must have a personal life dream or ambition.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Proverbs 29:18",
    verseText: "Where there is no revelation, the people cast off restraint; but happy is he who keeps the law."
  },
  {
    id: "as043",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Train up a child in the way he should go: and when he is old, he will not depart from it.' is framed as an absolute guarantee in every case.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Proverbs 22:6",
    verseText: "The proverb gives wisdom, not a mechanical guarantee."
  },
  {
    id: "as044",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Whom the Lord loveth he chasteneth.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Hebrews 12:6; Proverbs 3:12",
    verseText: "For whom the LORD loves He chastens."
  },
  {
    id: "as045",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'If God be for us, who can be against us?' means believers will face no opposition.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Romans 8:31-39",
    verseText: "Paul speaks of conquest through suffering, not the absence of enemies."
  },
  {
    id: "as046",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Resist the devil, and he will flee from you.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "James 4:7",
    verseText: "Therefore submit to God. Resist the devil and he will flee from you."
  },
  {
    id: "as047",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Submit yourselves therefore to God' is optional, while resisting the devil is the only real command in James 4:7.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "James 4:7-10",
    verseText: "Submission, resistance, cleansing, mourning, and humility all appear together in context."
  },
  {
    id: "as048",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The name of the LORD is a strong tower: the righteous runneth into it, and is safe.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 18:10",
    verseText: "The name of the LORD is a strong tower."
  },
  {
    id: "as049",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'As iron sharpeneth iron; so a man sharpeneth the countenance of his friend.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so a man sharpens the countenance of his friend."
  },
  {
    id: "as050",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'To thine own self be true.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as051",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Out of the abundance of the heart the mouth speaketh.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 12:34; Luke 6:45",
    verseText: "Out of the abundance of the heart the mouth speaks."
  },
  {
    id: "as052",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Faith without works is dead.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "James 2:17, 20, 26",
    verseText: "Faith without works is dead."
  },
  {
    id: "as053",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'By grace are ye saved through faith; and that not of yourselves: it is the gift of God.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Ephesians 2:8-9",
    verseText: "For by grace you have been saved through faith."
  },
  {
    id: "as054",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God cannot look upon sin.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Habakkuk 1:13; Genesis 6:5; Job 34:21",
    verseText: "You are of purer eyes than to behold evil... yet Scripture repeatedly says God sees wickedness."
  },
  {
    id: "as055",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The battle is not yours, but God's.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "2 Chronicles 20:15",
    verseText: "The battle is not yours, but God's."
  },
  {
    id: "as056",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Where your treasure is, there will your heart be also.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 6:21",
    verseText: "For where your treasure is, there your heart will be also."
  },
  {
    id: "as057",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'God hates the sin but loves the sinner.' is an exact biblical quotation.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as058",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Touch not mine anointed, and do my prophets no harm.' forbids all criticism of religious leaders in every setting.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Psalm 105:15; 1 Timothy 5:19-20; Galatians 2:11",
    verseText: "The Psalm recounts God's protection of patriarchs, not blanket immunity from rebuke."
  },
  {
    id: "as059",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The heart is deceitful above all things, and desperately wicked.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Jeremiah 17:9",
    verseText: "The heart is deceitful above all things, and desperately wicked."
  },
  {
    id: "as060",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'He that is faithful in that which is least is faithful also in much.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Luke 16:10",
    verseText: "He who is faithful in what is least is also faithful in much."
  },
  {
    id: "as061",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The borrower is servant to the lender.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 22:7",
    verseText: "The borrower is servant to the lender."
  },
  {
    id: "as062",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Study to show thyself approved unto God.' primarily means academic scholarship in the modern sense.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "2 Timothy 2:15",
    verseText: "The charge is to be diligent and rightly divide the word of truth."
  },
  {
    id: "as063",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'To obey is better than sacrifice.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Samuel 15:22",
    verseText: "To obey is better than sacrifice."
  },
  {
    id: "as064",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The Lord works in mysterious ways.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as065",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'A merry heart doeth good like a medicine.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 17:22",
    verseText: "A merry heart does good, like medicine, but a broken spirit dries the bones."
  },
  {
    id: "as066",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'A merry heart doeth good like medicine.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 17:22",
    verseText: "A merry heart does good, like medicine."
  },
  {
    id: "as067",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Man does not live on bread alone but on every word that comes from the mouth of God.' comes from Jesus only and has no Old Testament background.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 4:4; Deuteronomy 8:3",
    verseText: "Jesus quotes Deuteronomy."
  },
  {
    id: "as068",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The hand that rocks the cradle rules the world.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "",
    verseText: ""
  },
  {
    id: "as069",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Blessed are the peacemakers: for they shall be called the children of God.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Matthew 5:9",
    verseText: "Blessed are the peacemakers."
  },
  {
    id: "as070",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The spirit of prophecy is the testimony of Jesus.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Revelation 19:10",
    verseText: "For the testimony of Jesus is the spirit of prophecy."
  },
  {
    id: "as071",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'No weapon formed against you shall prosper.' promises believers immunity from every earthly loss or injury.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Isaiah 54:17; Hebrews 11:35-38",
    verseText: "The promise concerns God's vindication, not a denial of suffering."
  },
  {
    id: "as072",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The letter kills, but the Spirit gives life.' means the Old Testament itself has no value for believers.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "2 Corinthians 3:6; Romans 15:4; 2 Timothy 3:16",
    verseText: "Paul is contrasting covenants and ministry, not dismissing Scripture."
  },
  {
    id: "as073",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Where there is no law, there is no transgression.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 4:15",
    verseText: "But where there is no law there is no transgression."
  },
  {
    id: "as074",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The kingdom of God is within you.' was spoken by Jesus to a believing audience already indwelt by the Spirit.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Luke 17:20-21",
    verseText: "Jesus answered the Pharisees."
  },
  {
    id: "as075",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'A little leaven leaveneth the whole lump.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Galatians 5:9; 1 Corinthians 5:6",
    verseText: "A little leaven leavens the whole lump."
  },
  {
    id: "as076",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'My grace is sufficient for thee: for my strength is made perfect in weakness.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "2 Corinthians 12:9",
    verseText: "My grace is sufficient for you."
  },
  {
    id: "as077",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Where there is no vision, the people cast off restraint.' better reflects the idea of Proverbs 29:18 than the common wording 'perish.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 29:18",
    verseText: "The proverb concerns prophetic revelation and moral restraint."
  },
  {
    id: "as078",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'For me to live is Christ, and to die is gain.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Philippians 1:21",
    verseText: "For to me, to live is Christ, and to die is gain."
  },
  {
    id: "as079",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Let not your heart be troubled: ye believe in God, believe also in me.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "John 14:1",
    verseText: "Let not your heart be troubled."
  },
  {
    id: "as080",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The kingdom suffers violence, and the violent take it by force.' clearly teaches aggressive self-assertion as a spiritual method for all believers.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 11:12",
    verseText: "The saying is difficult and debated; it cannot be reduced to a simple slogan about aggression."
  },
  {
    id: "as081",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Whosoever shall call upon the name of the Lord shall be saved.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Joel 2:32; Romans 10:13",
    verseText: "Whoever calls on the name of the LORD shall be saved."
  },
  {
    id: "as082",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The kingdom of heaven is at hand.' means the final consummation arrived fully during Jesus' earthly ministry with nothing future remaining.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 4:17; 6:10; 26:29",
    verseText: "The phrase announces nearness, but the New Testament still speaks of future fulfillment."
  },
  {
    id: "as083",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Perfect love casteth out fear.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 John 4:18",
    verseText: "Perfect love casts out fear."
  },
  {
    id: "as084",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Be angry, and sin not.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Psalm 4:4; Ephesians 4:26",
    verseText: "Be angry, and do not sin."
  },
  {
    id: "as085",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'A soft answer turneth away wrath.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 15:1",
    verseText: "A soft answer turns away wrath."
  },
  {
    id: "as086",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The laborer is worthy of his hire.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Luke 10:7; 1 Timothy 5:18",
    verseText: "The laborer is worthy of his wages."
  },
  {
    id: "as087",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The law was our schoolmaster to bring us unto Christ.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Galatians 3:24",
    verseText: "The law was our tutor to bring us to Christ."
  },
  {
    id: "as088",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Neither do I condemn thee: go, and sin no more.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "John 8:11",
    verseText: "Neither do I condemn you; go and sin no more."
  },
  {
    id: "as089",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The powers that be are ordained of God.' therefore every civil ruler always acts with divine approval.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Romans 13:1-7; Acts 5:29; Revelation 13",
    verseText: "God ordains governing authority, but rulers remain morally accountable."
  },
  {
    id: "as090",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Man shall not lie with mankind, as with womankind: it is abomination.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Leviticus 18:22",
    verseText: "You shall not lie with a male as with a woman."
  },
  {
    id: "as091",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Thou shalt not muzzle the ox when he treadeth out the corn.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Deuteronomy 25:4; 1 Corinthians 9:9",
    verseText: "You shall not muzzle an ox while it treads out the grain."
  },
  {
    id: "as092",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'For all have sinned, and come short of the glory of God.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 3:23",
    verseText: "For all have sinned and fall short of the glory of God."
  },
  {
    id: "as093",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Add thou not unto his words, lest he reprove thee, and thou be found a liar.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Proverbs 30:6",
    verseText: "Do not add to His words."
  },
  {
    id: "as094",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 3,
    reference: "Romans 14:17",
    verseText: "For the kingdom of God is not eating and drinking, but righteousness and peace and joy in the Holy Spirit."
  },
  {
    id: "as095",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Luke 9:23",
    verseText: "Take up his cross daily, and follow Me."
  },
  {
    id: "as096",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'He that is not against us is for us.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Mark 9:40; Luke 9:50",
    verseText: "For he who is not against us is on our side."
  },
  {
    id: "as097",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'He that is not with me is against me.' contradicts 'He that is not against us is for us.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 12:30; Mark 9:40",
    verseText: "The sayings address different contexts."
  },
  {
    id: "as098",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "1 Corinthians 13:1",
    verseText: "I have become sounding brass or a clanging cymbal."
  },
  {
    id: "as099",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'The dead know nothing.' is a complete biblical doctrine statement on the entire state of the dead in every passage.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Ecclesiastes 9:5; Luke 16:19-31; Philippians 1:23; Revelation 6:9-11",
    verseText: "The line appears in Ecclesiastes and must be read in canonical context."
  },
  {
    id: "as100",
    game: "Is It Accurate?",
    difficulty: "Advanced",
    question: "True, False, Not Stated, or Misquoted: 'Faith cometh by hearing, and hearing by the word of God.'",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 0,
    reference: "Romans 10:17",
    verseText: "So then faith comes by hearing, and hearing by the word of God."
  }
];
