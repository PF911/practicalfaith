const triviaQuestions = [

  {
    id: 1,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who built the ark?",
    choices: ["Moses", "Noah", "Abraham", "David"],
    answer: 1,
    reference: "Genesis 6:14",
    verseText: "Make yourself an ark of gopher wood."
  },

  {
    id: 2,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Beginner",
    question: "Who was swallowed by a great fish?",
    choices: ["Jonah", "Peter", "Samuel", "Joseph"],
    answer: 0,
    reference: "Jonah 1:17",
    verseText: "The Lord had prepared a great fish to swallow Jonah."
  },

  {
    id: 3,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who killed Goliath?",
    choices: ["Solomon", "David", "Saul", "Elijah"],
    answer: 1,
    reference: "1 Samuel 17:50",
    verseText: "David prevailed over the Philistine with a sling and a stone."
  },

  {
    id: 4,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Events",
    difficulty: "Student",
    question: "How many days and nights did it rain during the Flood?",
    choices: ["30", "40", "50", "70"],
    answer: 1,
    reference: "Genesis 7:12",
    verseText: "The rain was on the earth forty days and forty nights."
  },

  {
    id: 5,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Student",
    question: "How many brothers did Joseph have?",
    choices: ["10", "11", "12", "13"],
    answer: 1,
    reference: "Genesis 37:2",
    verseText: "Joseph... was feeding the flock with his brothers."
  },

  {
    id: 6,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Student",
    question: "Who led Israel after Moses died?",
    choices: ["Caleb", "Aaron", "Joshua", "Samuel"],
    answer: 2,
    reference: "Joshua 1:1-2",
    verseText: "Moses my servant is dead... arise, go over this Jordan."
  },

  {
    id: 7,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Scholar",
    question: "How old was Noah when the floodwaters came upon the earth?",
    choices: ["500", "550", "600", "650"],
    answer: 2,
    reference: "Genesis 7:6",
    verseText: "Noah was six hundred years old when the floodwaters were on the earth."
  },

  {
    id: 8,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "On what mountain did the ark come to rest?",
    choices: ["Sinai", "Ararat", "Carmel", "Hermon"],
    answer: 1,
    reference: "Genesis 8:4",
    verseText: "The ark rested... upon the mountains of Ararat."
  },

  {
    id: 9,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Scholar",
    question: "Who interpreted the handwriting on the wall for Belshazzar?",
    choices: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: 3,
    reference: "Daniel 5:25-28",
    verseText: "This is the inscription that was written: MENE, MENE, TEKEL, UPHARSIN."
  },

  {
    id: 91,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who was the father of Isaac?",
    choices: ["Jacob", "Abraham", "Moses", "Samuel"],
    answer: 1,
    reference: "Genesis 21:1-3",
    verseText: "Abraham called the name of his son... Isaac."
  },

  {
    id: 92,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who received the Ten Commandments from God?",
    choices: ["Aaron", "Joshua", "Moses", "David"],
    answer: 2,
    reference: "Exodus 31:18",
    verseText: "He gave unto Moses... two tables of testimony, tables of stone."
  },

  {
    id: 93,
    game: "General Bible Trivia",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who baptized Jesus?",
    choices: ["Peter", "John the Baptist", "Andrew", "Philip"],
    answer: 1,
    reference: "Matthew 3:13-17",
    verseText: "Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him."
  },

  {
    id: 94,
    game: "General Bible Trivia",
    testament: "Both",
    category: "Teachings",
    difficulty: "Beginner",
    question: "True or False: The Bible says, \"Cleanliness is next to godliness.\"",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "N/A",
    verseText: "That exact statement does not appear in Scripture."
  },

  {
    id: 95,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Events",
    difficulty: "Student",
    question: "How many plagues did God send on Egypt?",
    choices: ["7", "10", "12", "14"],
    answer: 1,
    reference: "Exodus 7-12",
    verseText: "The Lord sent ten plagues upon Egypt before Pharaoh let Israel go."
  },

  {
    id: 96,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Student",
    question: "Who was the mother of Samuel?",
    choices: ["Ruth", "Hannah", "Elizabeth", "Rebekah"],
    answer: 1,
    reference: "1 Samuel 1:20",
    verseText: "Hannah... bare a son, and called his name Samuel."
  },

  {
    id: 97,
    game: "General Bible Trivia",
    testament: "New Testament",
    category: "People",
    difficulty: "Student",
    question: "Who climbed into a sycamore tree to see Jesus?",
    choices: ["Bartimaeus", "Nicodemus", "Zacchaeus", "Jairus"],
    answer: 2,
    reference: "Luke 19:2-4",
    verseText: "He ran before, and climbed up into a sycomore tree to see him."
  },

  {
    id: 98,
    game: "General Bible Trivia",
    testament: "Both",
    category: "Teachings",
    difficulty: "Student",
    question: "Who am I? I was taken up into heaven in a whirlwind and left my mantle behind.",
    choices: ["Elijah", "Elisha", "Enoch", "Isaiah"],
    answer: 0,
    reference: "2 Kings 2:11-13",
    verseText: "Elijah went up by a whirlwind into heaven... and his mantle fell from him."
  },

  {
    id: 99,
    game: "General Bible Trivia",
    testament: "New Testament",
    category: "Teachings",
    difficulty: "Scholar",
    question: "True or False: The Bible says, \"God helps those who help themselves.\"",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 2,
    reference: "N/A",
    verseText: "That exact statement does not appear in Scripture."
  },

  {
    id: 100,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "Events",
    difficulty: "Scholar",
    question: "How many spies did Moses send to search the land of Canaan?",
    choices: ["10", "12", "40", "70"],
    answer: 1,
    reference: "Numbers 13:1-3",
    verseText: "Moses... sent them from the wilderness of Paran: all those men were heads of the children of Israel."
  },

  {
    id: 101,
    game: "General Bible Trivia",
    testament: "Old Testament",
    category: "People",
    difficulty: "Scholar",
    question: "Who was the grandfather of King David?",
    choices: ["Jesse", "Boaz", "Obed", "Nahshon"],
    answer: 2,
    reference: "Ruth 4:21-22",
    verseText: "Salmon begat Boaz, and Boaz begat Obed, and Obed begat Jesse, and Jesse begat David."
  }

];
