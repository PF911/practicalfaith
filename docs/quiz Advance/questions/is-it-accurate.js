const isItAccurateQuestions = [
  {
    "id": 20001,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Money is the root of all evil.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "1 Timothy 6:10",
    "verseText": "For the love of money is a root of all kinds of evil.",
    "explanation": "The actual verse (1 Timothy 6:10) says 'the love of money is a root of all kinds of evil' — not money itself, and not the root of all evil universally. The popular saying drops both qualifiers."
  },
  {
    "id": 20002,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Cleanliness is next to godliness.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "This saying appears nowhere in Scripture. It originated with John Wesley in an 18th-century sermon. It has a pious ring but no biblical source."
  },
  {
    "id": 20003,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Judge not, that you be not judged.' means believers must never evaluate doctrine or conduct.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 7:1-5; John 7:24; 1 Corinthians 5:12-13",
    "verseText": "Do not judge according to appearance, but judge with righteous judgment.",
    "explanation": "Jesus taught against hypocritical judging (Matt 7:1–5), not all evaluation. He explicitly commands righteous judgment (John 7:24), and Paul directs the church to judge those within it (1 Cor 5:12–13)."
  },
  {
    "id": 20004,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The meek shall inherit the earth.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 5:5",
    "verseText": "Blessed are the meek, for they shall inherit the earth.",
    "explanation": "Matthew 5:5 quotes this directly from Psalm 37:11. The wording is accurate to the biblical text."
  },
  {
    "id": 20005,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'God helps those who help themselves.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "This phrase is often attributed to the Bible but appears nowhere in Scripture. Benjamin Franklin used a version of it. The Bible consistently teaches dependence on God, not self-reliance as a spiritual principle."
  },
  {
    "id": 20006,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'There were three wise men.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "Matthew 2:1-12",
    "verseText": "The text mentions three gifts, not three men.",
    "explanation": "Matthew 2:1–12 mentions three gifts (gold, frankincense, myrrh) but never specifies how many magi there were. Three wise men is a tradition, not a biblical statement."
  },
  {
    "id": 20007,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'To be absent from the body is to be present with the Lord.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "2 Corinthians 5:6-8",
    "verseText": "to be absent from the body and to be present with the Lord.",
    "explanation": "2 Corinthians 5:8 reads 'to be absent from the body and to be present with the Lord' — it does not say 'to be absent from the body is to be present.' The phrase 'is to be' changes a condition into an equation that the text does not assert."
  },
  {
    "id": 20008,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The lion shall lie down with the lamb.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Isaiah 11:6",
    "verseText": "The wolf also shall dwell with the lamb.",
    "explanation": "Isaiah 11:6 says 'the wolf also shall dwell with the lamb.' The lion lying down with the lamb is a widespread cultural misremembering of this verse."
  },
  {
    "id": 20009,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Man shall not live by bread alone.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 4:4; Deuteronomy 8:3",
    "verseText": "Man shall not live by bread alone, but by every word that proceeds from the mouth of God.",
    "explanation": "Both Matthew 4:4 and Deuteronomy 8:3 (which Jesus quotes) use this wording. The saying accurately reflects its scriptural source."
  },
  {
    "id": 20010,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Spare the rod, spoil the child.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "Proverbs 13:24",
    "verseText": "He who spares his rod hates his son.",
    "explanation": "Proverbs 13:24 says 'He who spares his rod hates his son.' The popular condensed form 'spare the rod, spoil the child' is a paraphrase rather than a quotation, and the second clause does not appear in the text."
  },
  {
    "id": 20011,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The truth shall set you free.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "John 8:31-32",
    "verseText": "The truth shall make you free.",
    "explanation": "John 8:32 reads 'the truth shall make you free,' not 'set you free.' The verb is different — apolyō (make free) vs. a setting-free metaphor — though the meaning is closely related."
  },
  {
    "id": 20012,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Ask and you shall receive.' guarantees every request will be granted exactly as desired.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 7:7; 1 John 5:14",
    "verseText": "If we ask anything according to His will, He hears us.",
    "explanation": "Matthew 7:7 offers the promise, but 1 John 5:14 conditions it: 'if we ask anything according to His will.' Scripture never guarantees every request exactly as desired or in the timing we prefer."
  },
  {
    "id": 20013,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Money answers all things.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Ecclesiastes 10:19",
    "verseText": "A feast is made for laughter... but money answers everything.",
    "explanation": "Ecclesiastes 10:19 uses this exact phrasing in the KJV. The NKJV renders it 'money answers everything,' but the KJV form 'money answereth all things' is a direct quotation."
  },
  {
    "id": 20014,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The eye is the window to the soul.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "Matthew 6:22-23",
    "verseText": "The lamp of the body is the eye.",
    "explanation": "The popular saying 'the eye is the window to the soul' never claims to quote the Bible. Matthew 6:22 calls the eye 'the lamp of the body,' which concerns inner spiritual orientation — not the same idea."
  },
  {
    "id": 20015,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'All things work together for good for everyone.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Romans 8:28",
    "verseText": "To those who love God, to those who are the called according to His purpose.",
    "explanation": "Romans 8:28 limits the promise to 'those who love God' and 'those who are the called according to His purpose.' The saying 'all things work together for good for everyone' removes both qualifications."
  },
  {
    "id": 20016,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Faith can move mountains.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 17:20; 21:21",
    "verseText": "If you have faith as a mustard seed...",
    "explanation": "Matthew 17:20 says 'if you have faith as a mustard seed, you will say to this mountain, Move... and nothing will be impossible for you.' The popular condensation 'faith can move mountains' is a reasonable and accurate summary."
  },
  {
    "id": 20017,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The sabbath was made for man.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Mark 2:27",
    "verseText": "The Sabbath was made for man, and not man for the Sabbath.",
    "explanation": "Mark 2:27 records Jesus saying this directly. The wording in the popular saying matches the biblical text."
  },
  {
    "id": 20018,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'God will never give you more than you can handle.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "1 Corinthians 10:13; 2 Corinthians 1:8-9",
    "verseText": "He will also make the way of escape.",
    "explanation": "1 Corinthians 10:13 concerns temptation, not all hardship — it promises a way of escape from temptation. 2 Corinthians 1:8–9 explicitly says Paul was 'burdened beyond measure, above strength.' The saying reverses what Scripture actually teaches."
  },
  {
    "id": 20019,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Forgive and forget.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "The phrase 'forgive and forget' appears nowhere in Scripture. God does speak of not remembering sins (Isaiah 43:25), but that is a divine act, not a human formula — and the human call is to forgive, not necessarily to achieve literal amnesia."
  },
  {
    "id": 20020,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Where two or three are gathered together in my name, there am I in the midst of them.' applies to any casual Christian gathering without regard to context.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 18:15-20",
    "verseText": "The saying appears in a passage about discipline and agreement.",
    "explanation": "Matthew 18:15–20 places the saying in the context of church discipline and the binding/loosing authority that follows agreed-upon prayer. It is not a general promise about any casual gathering."
  },
  {
    "id": 20021,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Pride goes before a fall.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Proverbs 16:18",
    "verseText": "Pride goes before destruction, and a haughty spirit before a fall.",
    "explanation": "Proverbs 16:18 says 'Pride goes before destruction, and a haughty spirit before a fall.' The popular saying compresses this to 'pride goes before a fall,' dropping 'destruction' and collapsing two lines into one."
  },
  {
    "id": 20022,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Let he who is without sin cast the first stone.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "John 8:7",
    "verseText": "He who is without sin among you, let him throw a stone at her first.",
    "explanation": "John 8:7 records Jesus saying 'He who is without sin among you, let him throw a stone at her first.' The popular 'let he who is without sin cast the first stone' restructures the grammar but preserves the full meaning and substance of the saying."
  },
  {
    "id": 20023,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'We are all God's children.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "John 1:12; Galatians 3:26; Ephesians 2:1-3",
    "verseText": "But as many as received Him, to them He gave the right to become children of God.",
    "explanation": "John 1:12 makes sonship conditional: 'as many as received Him... He gave the right to become children of God.' Galatians 3:26 ties it to faith in Christ. All humans are God's creatures; they are not all His children in the redemptive sense."
  },
  {
    "id": 20024,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Love covers a multitude of sins.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 Peter 4:8; Proverbs 10:12",
    "verseText": "Love will cover a multitude of sins.",
    "explanation": "1 Peter 4:8 says 'Love will cover a multitude of sins,' closely echoing Proverbs 10:12. The saying accurately reflects its biblical source."
  },
  {
    "id": 20025,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The spirit indeed is willing, but the flesh is weak.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 26:41",
    "verseText": "The spirit indeed is willing, but the flesh is weak.",
    "explanation": "Matthew 26:41 records Jesus saying this in Gethsemane. The wording in the saying matches the text."
  },
  {
    "id": 20026,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The wages of sin is death.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Romans 6:23",
    "verseText": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
    "explanation": "Romans 6:23 states this directly. The saying is an accurate quotation of the first clause."
  },
  {
    "id": 20027,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Do unto others as you would have them do unto you.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 7:12; Luke 6:31",
    "verseText": "Whatever you want men to do to you, do also to them.",
    "explanation": "Matthew 7:12 says 'whatever you want men to do to you, do also to them.' The popular phrasing is an accurate paraphrase of the Golden Rule."
  },
  {
    "id": 20028,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'God is love.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 John 4:8",
    "verseText": "God is love.",
    "explanation": "1 John 4:8 states 'God is love' as a direct, complete sentence. The saying matches the text exactly."
  },
  {
    "id": 20029,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'There is none righteous, no, not one.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Romans 3:10",
    "verseText": "There is none righteous, no, not one.",
    "explanation": "Romans 3:10 quotes this directly (itself citing Psalm 14:1). The saying reproduces the text accurately."
  },
  {
    "id": 20030,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The fear of the Lord is the beginning of wisdom.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 9:10; Psalm 111:10",
    "verseText": "The fear of the LORD is the beginning of wisdom.",
    "explanation": "Proverbs 9:10 and Psalm 111:10 both contain this statement. The saying is a direct and accurate quotation."
  },
  {
    "id": 20031,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Man looks on the outward appearance, but the LORD looks on the heart.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 Samuel 16:7",
    "verseText": "Man looks at the outward appearance, but the LORD looks at the heart.",
    "explanation": "1 Samuel 16:7 says 'man looks at the outward appearance, but the LORD looks at the heart.' The modern form in the question preserves the same text. The saying is accurate."
  },
  {
    "id": 20032,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Ask, and it shall be given you; seek, and you shall find.' guarantees immediate answers in the timing we prefer.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 7:7; Luke 18:1-8",
    "verseText": "Men always ought to pray and not lose heart.",
    "explanation": "Matthew 7:7 offers the promise of asking, seeking, and knocking, but Luke 18:1–8 makes clear that persevering prayer — not instant gratification — is the model. No text guarantees answers in the timing the pray-er prefers."
  },
  {
    "id": 20033,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The letter kills, but the spirit gives life.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "2 Corinthians 3:6",
    "verseText": "The letter kills, but the Spirit gives life.",
    "explanation": "2 Corinthians 3:6 states this directly in KJV. The NKJV renders it 'the letter kills, but the Spirit gives life.' The KJV form 'killeth / giveth' is an accurate quotation."
  },
  {
    "id": 20034,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Be therefore perfect, even as your Father which is in heaven is perfect.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 5:48",
    "verseText": "Therefore you shall be perfect, just as your Father in heaven is perfect.",
    "explanation": "Matthew 5:48 records Jesus saying this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20035,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'My kingdom is not of this world.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "John 18:36",
    "verseText": "My kingdom is not of this world.",
    "explanation": "John 18:36 records Jesus saying this to Pilate. The saying matches the text accurately."
  },
  {
    "id": 20036,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'This too shall pass.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "This saying appears nowhere in the Bible. It is attributed in various forms to Abraham Lincoln, King Solomon in legend, and Sufi poetry — none of which are scriptural sources."
  },
  {
    "id": 20038,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The love of money is the root of all kinds of evil.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "1 Timothy 6:10",
    "verseText": "For the love of money is a root of all kinds of evil.",
    "explanation": "1 Timothy 6:10 says 'the love of money is A root of all kinds of evil.' The popular saying substitutes 'THE root,' adding a definite article that makes the claim absolute — as if money-love were the single universal source of all evil — where Paul's language is deliberately more measured."
  },
  {
    "id": 20039,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The just shall live by faith.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Habakkuk 2:4; Romans 1:17; Galatians 3:11; Hebrews 10:38",
    "verseText": "The just shall live by faith.",
    "explanation": "Habakkuk 2:4 states this, and Paul quotes it in Romans 1:17, Galatians 3:11, and Hebrews 10:38 echoes it. The saying is a direct quotation found across both Testaments."
  },
  {
    "id": 20040,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Be still, and know that I am God.' was originally spoken as a private devotional command to anxious believers.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Psalm 46:10",
    "verseText": "Be still, and know that I am God; I will be exalted among the nations.",
    "explanation": "Psalm 46:10 is addressed to nations and enemies in a wartime context: 'Be still, and know that I am God; I will be exalted among the nations.' It is a divine command to the nations to cease striving, not a private invitation to personal quiet time."
  },
  {
    "id": 20041,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The joy of the Lord is your strength.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Nehemiah 8:10",
    "verseText": "The joy of the LORD is your strength.",
    "explanation": "Nehemiah 8:10 records this as Nehemiah's word to the people. The saying accurately quotes the text."
  },
  {
    "id": 20042,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Without a vision, the people perish.' means every individual must have a personal life dream or ambition.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Proverbs 29:18",
    "verseText": "Where there is no revelation, the people cast off restraint; but happy is he who keeps the law.",
    "explanation": "Proverbs 29:18 says 'where there is no revelation [prophetic vision], the people cast off restraint.' The word 'vision' (hazon) means prophetic revelation, not personal ambition. The popular use treats it as a motivational slogan about individual dreams."
  },
  {
    "id": 20043,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Train up a child in the way he should go: and when he is old, he will not depart from it.' is framed as an absolute guarantee in every case.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Proverbs 22:6",
    "verseText": "The proverb gives wisdom, not a mechanical guarantee.",
    "explanation": "Proverbs gives wisdom principles, not ironclad guarantees. The form of the proverb ('in the way he should go') describes a general pattern, not a mechanical promise that every child raised correctly will remain faithful without exception."
  },
  {
    "id": 20044,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Whom the Lord loves he disciplines.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Hebrews 12:6; Proverbs 3:12",
    "verseText": "For whom the LORD loves He chastens.",
    "explanation": "Hebrews 12:6 states this directly, quoting Proverbs 3:12. The saying accurately represents the text."
  },
  {
    "id": 20045,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'If God be for us, who can be against us?' means believers will face no opposition.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Romans 8:31-39",
    "verseText": "Paul speaks of conquest through suffering, not the absence of enemies.",
    "explanation": "Romans 8:31–39 explicitly describes tribulation, distress, persecution, famine, nakedness, danger, and sword as things believers face — and declares them conquered through Christ. The promise is not the absence of opposition but victory through it."
  },
  {
    "id": 20046,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Resist the devil, and he will flee from you.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "James 4:7",
    "verseText": "Therefore submit to God. Resist the devil and he will flee from you.",
    "explanation": "James 4:7 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20047,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Submit yourselves therefore to God' is optional, while resisting the devil is the only real command in James 4:7.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "James 4:7-10",
    "verseText": "Submission, resistance, cleansing, mourning, and humility all appear together in context.",
    "explanation": "James 4:7–10 presents submission, resistance, cleansing, mourning, and humility as a unified sequence of commands. 'Submit to God' precedes and conditions 'resist the devil' — neither is optional and neither outranks the other."
  },
  {
    "id": 20048,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The name of the LORD is a strong tower: the righteous runs into it, and is safe.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 18:10",
    "verseText": "The name of the LORD is a strong tower.",
    "explanation": "Proverbs 18:10 states this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20049,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'As iron sharpens iron; so a man sharpens the countenance of his friend.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 27:17",
    "verseText": "As iron sharpens iron, so a man sharpens the countenance of his friend.",
    "explanation": "Proverbs 27:17 states this directly in both KJV and NKJV. The saying accurately quotes the text."
  },
  {
    "id": 20050,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'To thine own self be true.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "'To thine own self be true' is from Shakespeare's Hamlet (Act 1, Scene 3), spoken by Polonius. It has no biblical source."
  },
  {
    "id": 20051,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Out of the abundance of the heart the mouth speaks.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 12:34; Luke 6:45",
    "verseText": "Out of the abundance of the heart the mouth speaks.",
    "explanation": "Matthew 12:34 and Luke 6:45 both record Jesus saying this. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20052,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Faith without works is dead.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "James 2:17, 20, 26",
    "verseText": "Faith without works is dead.",
    "explanation": "James 2:17, 20, and 26 all state this directly. The saying accurately quotes the text."
  },
  {
    "id": 20053,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'By grace are you saved through faith; and that not of yourselves: it is the gift of God.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Ephesians 2:8-9",
    "verseText": "For by grace you have been saved through faith.",
    "explanation": "Ephesians 2:8–9 states this directly in KJV form. The saying accurately quotes the text."
  },
  {
    "id": 20054,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'God cannot look upon sin.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Habakkuk 1:13; Genesis 6:5; Job 34:21",
    "verseText": "You are of purer eyes than to behold evil... yet Scripture repeatedly says God sees wickedness.",
    "explanation": "Habakkuk 1:13 says God is 'of purer eyes than to behold evil,' but Genesis 6:5 records God seeing humanity's wickedness, Job 34:21 says 'His eyes are on the ways of man,' and Proverbs 15:3 says 'the eyes of the LORD are in every place.' The saying overstates Habakkuk's point."
  },
  {
    "id": 20055,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The battle is not yours, but God's.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "2 Chronicles 20:15",
    "verseText": "The battle is not yours, but God's.",
    "explanation": "2 Chronicles 20:15 records this as the word of the Spirit through Jahaziel. The saying accurately quotes the text."
  },
  {
    "id": 20056,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Where your treasure is, there will your heart be also.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 6:21",
    "verseText": "For where your treasure is, there your heart will be also.",
    "explanation": "Matthew 6:21 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20057,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'God hates the sin but loves the sinner.' is an exact biblical quotation.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "The phrase 'God hates the sin but loves the sinner' does not appear in the Bible in any form. It is often attributed to Augustine or Gandhi. Scripture does speak of God's love for the world (John 3:16) and his hatred of certain behaviors, but the formula itself is not a biblical quotation."
  },
  {
    "id": 20058,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Touch not mine anointed, and do my prophets no harm.' forbids all criticism of religious leaders in every setting.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Psalm 105:15; 1 Timothy 5:19-20; Galatians 2:11",
    "verseText": "The Psalm recounts God's protection of patriarchs, not blanket immunity from rebuke.",
    "explanation": "Psalm 105:15 was originally spoken about the patriarchs wandering among nations — not a general immunity for religious leaders. Paul publicly rebuked Peter (Galatians 2:11), and 1 Timothy 5:19–20 establishes a process for bringing accusations against elders."
  },
  {
    "id": 20059,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The heart is deceitful above all things, and desperately wicked.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Jeremiah 17:9",
    "verseText": "The heart is deceitful above all things, and desperately wicked.",
    "explanation": "Jeremiah 17:9 states this directly. The saying accurately quotes the KJV text."
  },
  {
    "id": 20060,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'He that is faithful in that which is least is faithful also in much.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Luke 16:10",
    "verseText": "He who is faithful in what is least is also faithful in much.",
    "explanation": "Luke 16:10 states this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20061,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The borrower is servant to the lender.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 22:7",
    "verseText": "The borrower is servant to the lender.",
    "explanation": "Proverbs 22:7 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20062,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Study to show thyself approved unto God.' primarily means academic scholarship in the modern sense.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "2 Timothy 2:15",
    "verseText": "The charge is to be diligent and rightly divide the word of truth.",
    "explanation": "2 Timothy 2:15's charge is to 'be diligent' (spoudazō — earnest effort) to 'rightly divide the word of truth.' The word 'study' in the KJV renders diligence, not academic scholarship. The context is faithful handling of Scripture, not formal education."
  },
  {
    "id": 20063,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'To obey is better than sacrifice.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 Samuel 15:22",
    "verseText": "To obey is better than sacrifice.",
    "explanation": "1 Samuel 15:22 records Samuel saying this to Saul. The saying accurately quotes the text."
  },
  {
    "id": 20064,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The Lord works in mysterious ways.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "William Cowper's 1773 hymn 'God Moves in a Mysterious Way' is the source of this phrase. It is not found in Scripture, though the concept of divine inscrutability appears throughout (Romans 11:33–34)."
  },
  {
    "id": 20065,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'A merry heart does good like a medicine.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 17:22",
    "verseText": "A merry heart does good, like medicine, but a broken spirit dries the bones.",
    "explanation": "Proverbs 17:22 states this directly. The saying accurately quotes the KJV text."
  },
  {
    "id": 20067,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Man does not live on bread alone but on every word that comes from the mouth of God.' comes from Jesus only and has no Old Testament background.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 4:4; Deuteronomy 8:3",
    "verseText": "Jesus quotes Deuteronomy.",
    "explanation": "Jesus quotes Deuteronomy 8:3 verbatim in Matthew 4:4. The saying implies the idea originated with Jesus, but the text shows he was quoting Moses — the saying's claim of exclusive NT origin is False."
  },
  {
    "id": 20068,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The hand that rocks the cradle rules the world.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 2,
    "reference": "",
    "verseText": "",
    "explanation": "This phrase comes from an 1865 poem by William Ross Wallace ('The Hand That Rocks the Cradle Is the Hand That Rules the World'). It has no biblical source."
  },
  {
    "id": 20069,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Blessed are the peacemakers: for they shall be called the children of God.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Matthew 5:9",
    "verseText": "Blessed are the peacemakers.",
    "explanation": "Matthew 5:9 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20070,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The spirit of prophecy is the testimony of Jesus.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Revelation 19:10",
    "verseText": "For the testimony of Jesus is the spirit of prophecy.",
    "explanation": "Revelation 19:10 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20071,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'No weapon formed against you shall prosper.' promises believers immunity from every earthly loss or injury.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Isaiah 54:17; Hebrews 11:35-38",
    "verseText": "The promise concerns God's vindication, not a denial of suffering.",
    "explanation": "Isaiah 54:17 promises that no weapon 'formed against you shall prosper' — meaning God will vindicate his people ultimately. But Hebrews 11:35–38 records faithful believers who were tortured, killed, and destitute. The promise is eschatological vindication, not immunity from earthly harm."
  },
  {
    "id": 20072,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The letter kills, but the Spirit gives life.' means the Old Testament itself has no value for believers.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "2 Corinthians 3:6; Romans 15:4; 2 Timothy 3:16",
    "verseText": "Paul is contrasting covenants and ministry, not dismissing Scripture.",
    "explanation": "Paul is contrasting the old covenant of law with the new covenant of the Spirit in 2 Corinthians 3:6. Romans 15:4 says all Scripture was 'written for our learning,' and 2 Timothy 3:16 declares all Scripture profitable. Paul never dismisses the OT."
  },
  {
    "id": 20073,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Where there is no law, there is no transgression.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Romans 4:15",
    "verseText": "But where there is no law there is no transgression.",
    "explanation": "Romans 4:15 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20074,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The kingdom of God is within you.' was spoken by Jesus to a believing audience already indwelt by the Spirit.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Luke 17:20-21",
    "verseText": "Jesus answered the Pharisees.",
    "explanation": "Luke 17:20–21 records Jesus saying this in response to Pharisees asking when the kingdom would come. He was not speaking to believing disciples already indwelt by the Spirit — the Spirit had not yet been given (John 7:39)."
  },
  {
    "id": 20075,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'A little leaven leavens the whole lump.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Galatians 5:9; 1 Corinthians 5:6",
    "verseText": "A little leaven leavens the whole lump.",
    "explanation": "Galatians 5:9 and 1 Corinthians 5:6 both state this directly. The saying accurately quotes the text."
  },
  {
    "id": 20076,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'My grace is sufficient for you: for my strength is made perfect in weakness.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "2 Corinthians 12:9",
    "verseText": "My grace is sufficient for you.",
    "explanation": "2 Corinthians 12:9 records God's response to Paul's prayer. The saying accurately quotes the KJV text."
  },
  {
    "id": 20077,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Where there is no vision, the people cast off restraint.' better reflects the idea of Proverbs 29:18 than the common wording 'perish.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 29:18",
    "verseText": "The proverb concerns prophetic revelation and moral restraint.",
    "explanation": "The KJV of Proverbs 29:18 says 'where there is no vision, the people perish.' The NKJV renders it 'cast off restraint.' 'Cast off restraint' better captures the Hebrew para (to let loose, to be unrestrained) — the verse is about moral restraint under prophetic revelation, not individual vision."
  },
  {
    "id": 20078,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'For me to live is Christ, and to die is gain.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Philippians 1:21",
    "verseText": "For to me, to live is Christ, and to die is gain.",
    "explanation": "Philippians 1:21 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20079,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Let not your heart be troubled: you believe in God, believe also in me.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "John 14:1",
    "verseText": "Let not your heart be troubled.",
    "explanation": "John 14:1 states this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20080,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The kingdom suffers violence, and the violent take it by force.' clearly teaches aggressive self-assertion as a spiritual method for all believers.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 11:12",
    "verseText": "The saying is difficult and debated; it cannot be reduced to a simple slogan about aggression.",
    "explanation": "Matthew 11:12 is one of the most debated verses in the Gospels. Scholars disagree on whether 'the violent take it by force' is positive (forceful people eagerly pressing in) or negative (opponents attacking it). It cannot be reduced to a simple slogan about aggressive spiritual self-assertion."
  },
  {
    "id": 20081,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Whosoever shall call upon the name of the Lord shall be saved.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Joel 2:32; Romans 10:13",
    "verseText": "Whoever calls on the name of the LORD shall be saved.",
    "explanation": "Joel 2:32 and Romans 10:13 both state this directly. The saying accurately quotes the text."
  },
  {
    "id": 20082,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The kingdom of heaven is at hand.' means the final consummation arrived fully during Jesus' earthly ministry with nothing future remaining.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 4:17; 6:10; 26:29",
    "verseText": "The phrase announces nearness, but the New Testament still speaks of future fulfillment.",
    "explanation": "Matthew 4:17 announces the kingdom as 'at hand,' but Matthew 6:10 still prays 'your kingdom come,' and Matthew 26:29 points to a future kingdom banquet. 'At hand' announces nearness and inauguration, not complete arrival with nothing remaining."
  },
  {
    "id": 20083,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Perfect love casts out fear.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 John 4:18",
    "verseText": "Perfect love casts out fear.",
    "explanation": "1 John 4:18 states this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20084,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Be angry, and sin not.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Psalm 4:4; Ephesians 4:26",
    "verseText": "Be angry, and do not sin.",
    "explanation": "Psalm 4:4 in the Septuagint (quoted by Paul in Ephesians 4:26) states this. The saying accurately quotes the text."
  },
  {
    "id": 20085,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'A soft answer turns away wrath.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 15:1",
    "verseText": "A soft answer turns away wrath.",
    "explanation": "Proverbs 15:1 states this directly. The saying accurately quotes the text."
  },
  {
    "id": 20086,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The laborer is worthy of his wages.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Luke 10:7; 1 Timothy 5:18",
    "verseText": "The laborer is worthy of his wages.",
    "explanation": "Luke 10:7 and 1 Timothy 5:18 say 'the laborer is worthy of his wages' (misthos — wage/reward). The popular form 'worthy of his wages' uses the KJV word for 'hire,' but hire and wages mean the same thing — this is a stylistic variant, not a substantive distortion. The answer Misquoted reflects that 'hire' vs 'wages' is a word-level substitution."
  },
  {
    "id": 20087,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The law was our schoolmaster to bring us unto Christ.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Galatians 3:24",
    "verseText": "The law was our tutor to bring us to Christ.",
    "explanation": "Galatians 3:24 in the KJV says 'schoolmaster' (paidagōgos). The NKJV renders it 'tutor.' A paidagōgos was a slave who escorted children to school — closer to guardian or escort than schoolmaster. The KJV rendering introduces a connotation the Greek does not carry."
  },
  {
    "id": 20088,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Neither do I condemn you: go, and sin no more.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "John 8:11",
    "verseText": "Neither do I condemn you; go and sin no more.",
    "explanation": "John 8:11 records Jesus saying this directly. The saying accurately quotes the text."
  },
  {
    "id": 20089,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The powers that be are ordained of God.' therefore every civil ruler always acts with divine approval.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Romans 13:1-7; Acts 5:29; Revelation 13",
    "verseText": "God ordains governing authority, but rulers remain morally accountable.",
    "explanation": "Romans 13:1–7 establishes governing authority as God-ordained — but Acts 5:29 records Peter saying 'we ought to obey God rather than men,' and Revelation 13 portrays governing power in demonic terms. God ordains governing structures without endorsing every ruler's actions."
  },
  {
    "id": 20090,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Man shall not lie with mankind, as with womankind: it is abomination.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Leviticus 18:22",
    "verseText": "You shall not lie with a male as with a woman.",
    "explanation": "Leviticus 18:22 states the prohibition. The KJV phrasing 'Man shall not lie with mankind, as with womankind: it is abomination' accurately conveys the substance of the text, though the NKJV renders it differently. The core moral content is accurately stated."
  },
  {
    "id": 20091,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Do not muzzle the ox when it treads out the grain.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Deuteronomy 25:4; 1 Corinthians 9:9",
    "verseText": "You shall not muzzle an ox while it treads out the grain.",
    "explanation": "Deuteronomy 25:4 states this directly. Paul quotes it in 1 Corinthians 9:9 applying it to ministers of the gospel. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20092,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'For all have sinned, and come short of the glory of God.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Romans 3:23",
    "verseText": "For all have sinned and fall short of the glory of God.",
    "explanation": "Romans 3:23 states this directly. The KJV phrasing in the saying matches the biblical text."
  },
  {
    "id": 20093,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Add not to his words, lest he reprove you, and you be found a liar.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Proverbs 30:6",
    "verseText": "Do not add to His words.",
    "explanation": "Proverbs 30:6 states this directly. The saying accurately quotes the KJV text."
  },
  {
    "id": 20094,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 3,
    "reference": "Romans 14:17",
    "verseText": "For the kingdom of God is not eating and drinking, but righteousness and peace and joy in the Holy Spirit.",
    "explanation": "Romans 14:17 in the NKJV reads 'not eating and drinking' and 'joy in the Holy Spirit.' The popular form uses the KJV terms 'meat and drink' and 'Holy Ghost' — accurate to the KJV but a departure from the NKJV wording this app uses as its standard text."
  },
  {
    "id": 20095,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Luke 9:23",
    "verseText": "Take up his cross daily, and follow Me.",
    "explanation": "Luke 9:23 records Jesus saying this directly. The saying accurately quotes the KJV text."
  },
  {
    "id": 20096,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'He that is not against us is for us.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Mark 9:40; Luke 9:50",
    "verseText": "For he who is not against us is on our side.",
    "explanation": "Mark 9:40 and Luke 9:50 both record Jesus saying this. The saying accurately quotes the text."
  },
  {
    "id": 20097,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'He that is not with me is against me.' contradicts 'He that is not against us is for us.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Matthew 12:30; Mark 9:40",
    "verseText": "The sayings address different contexts.",
    "explanation": "The two sayings address different contexts. Matthew 12:30 ('not with me is against me') concerns undivided allegiance to Christ in the controversy over Beelzebub. Mark 9:40 ('not against us is for us') concerns someone outside the disciples' group doing works in Jesus' name. They are not contradictory but situationally distinct."
  },
  {
    "id": 20098,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "1 Corinthians 13:1",
    "verseText": "I have become sounding brass or a clanging cymbal.",
    "explanation": "1 Corinthians 13:1 states this directly in KJV. The saying accurately quotes the text."
  },
  {
    "id": 20099,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'The dead know nothing.' is a complete biblical doctrine statement on the entire state of the dead in every passage.",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 1,
    "reference": "Ecclesiastes 9:5; Luke 16:19-31; Philippians 1:23; Revelation 6:9-11",
    "verseText": "The line appears in Ecclesiastes and must be read in canonical context.",
    "explanation": "Ecclesiastes 9:5 says 'the dead know nothing' in the context of life under the sun. Luke 16:19–31 shows the dead Lazarus conscious and in comfort. Philippians 1:23 describes death as 'being with Christ.' Revelation 6:9–11 shows martyrs crying out. No single verse can settle the entire question of the state of the dead."
  },
  {
    "id": 20100,
    "game": "Is It Accurate?",
    "difficulty": "Advanced",
    "question": "True, False, Not Stated, or Misquoted: 'Faith comes by hearing, and hearing by the word of God.'",
    "choices": [
      "True",
      "False",
      "Not Stated",
      "Misquoted"
    ],
    "answer": 0,
    "reference": "Romans 10:17",
    "verseText": "So then faith comes by hearing, and hearing by the word of God.",
    "explanation": "Romans 10:17 states this directly. The KJV phrasing in the saying matches the biblical text."
  }
];
