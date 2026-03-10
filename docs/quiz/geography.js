const geographyQuestions = [

  {
    id: 73,
    game: "Bible Geography",
    testament: "Both",
    category: "Places",
    difficulty: "Beginner",
    question: "In what city was Jesus born?",
    choices: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"],
    answer: 2,
    reference: "Matthew 2:1",
    verseText: "Now when Jesus was born in Bethlehem of Judaea..."
  },

  {
    id: 74,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "What river was Jesus baptized in?",
    choices: ["Jordan River", "Nile River", "Euphrates River", "Jabbok River"],
    answer: 0,
    reference: "Matthew 3:13",
    verseText: "Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him."
  },

  {
    id: 75,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "On what mountain did Noah's ark rest?",
    choices: ["Mount Sinai", "Mount Zion", "Mount Ararat", "Mount Carmel"],
    answer: 2,
    reference: "Genesis 8:4",
    verseText: "And the ark rested... upon the mountains of Ararat."
  },

  {
    id: 76,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Student",
    question: "From what town was Lazarus?",
    choices: ["Bethany", "Bethlehem", "Nazareth", "Emmaus"],
    answer: 0,
    reference: "John 11:1",
    verseText: "Now a certain man was sick, named Lazarus, of Bethany..."
  },

  {
    id: 77,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Student",
    question: "What sea did Jesus often cross with his disciples during his ministry?",
    choices: ["Red Sea", "Dead Sea", "Sea of Galilee", "Black Sea"],
    answer: 2,
    reference: "Mark 4:35-41",
    verseText: "Let us pass over unto the other side."
  },

  {
    id: 78,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Student",
    question: "Which city's walls fell after Israel marched around them?",
    choices: ["Ai", "Jericho", "Hebron", "Samaria"],
    answer: 1,
    reference: "Joshua 6:20",
    verseText: "And the wall fell down flat."
  },

  {
    id: 79,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "Which island did Paul visit on his voyage to Rome after the shipwreck?",
    choices: ["Crete", "Cyprus", "Malta", "Patmos"],
    answer: 2,
    reference: "Acts 28:1",
    verseText: "And when they were escaped, then they knew that the island was called Melita."
  },

  {
    id: 80,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "Which road was Saul traveling on when he encountered the risen Christ?",
    choices: ["Jericho road", "Damascus road", "Roman road", "King's highway"],
    answer: 1,
    reference: "Acts 9:3",
    verseText: "And as he journeyed, he came near Damascus: and suddenly there shined round about him a light from heaven."
  },

  {
    id: 81,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "On what mountain did Moses receive the Ten Commandments?",
    choices: ["Mount Sinai", "Mount Tabor", "Mount Moriah", "Mount Hermon"],
    answer: 0,
    reference: "Exodus 19:20; 31:18",
    verseText: "And the LORD came down upon mount Sinai... And he gave unto Moses... two tables of testimony."
  },

  {
    id: 179,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "In what garden did Adam and Eve live?",
    choices: ["Gethsemane", "Eden", "Shiloh", "Bethel"],
    answer: 1,
    reference: "Genesis 2:8",
    verseText: "The Lord God planted a garden eastward in Eden."
  },

  {
    id: 180,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "In what city was Jesus crucified?",
    choices: ["Bethlehem", "Nazareth", "Jerusalem", "Capernaum"],
    answer: 2,
    reference: "Luke 23:33; John 19:20",
    verseText: "The place of the crucifixion was outside Jerusalem."
  },

  {
    id: 181,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "What river flowed through Babylon where Judah's captives wept?",
    choices: ["Jordan", "Chebar", "Nile", "Kishon"],
    answer: 1,
    reference: "Psalm 137:1; Ezekiel 1:1",
    verseText: "By the rivers of Babylon... among the captives by the river of Chebar."
  },

  {
    id: 182,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Beginner",
    question: "True or False: Paul was shipwrecked on the island of Patmos.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Acts 28:1; Revelation 1:9",
    verseText: "Paul was shipwrecked on Malta (Melita); John was on Patmos."
  },

  {
    id: 183,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Student",
    question: "Near what city did Jesus raise Lazarus?",
    choices: ["Jericho", "Bethany", "Nazareth", "Tyre"],
    answer: 1,
    reference: "John 11:1,18",
    verseText: "Lazarus was of Bethany, near Jerusalem."
  },

  {
    id: 184,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Student",
    question: "What mountain did Elijah confront the prophets of Baal on?",
    choices: ["Sinai", "Ararat", "Carmel", "Tabor"],
    answer: 2,
    reference: "1 Kings 18:19-20",
    verseText: "Gather to me... unto mount Carmel."
  },

  {
    id: 185,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Student",
    question: "To what city was Saul traveling when he saw the heavenly light?",
    choices: ["Jericho", "Antioch", "Damascus", "Rome"],
    answer: 2,
    reference: "Acts 9:3",
    verseText: "As he journeyed, he came near Damascus."
  },

  {
    id: 186,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Student",
    question: "Where did Jonah try to flee when the Lord sent him to Nineveh?",
    choices: ["Tyre", "Joppa", "Tarshish", "Jerusalem"],
    answer: 2,
    reference: "Jonah 1:3",
    verseText: "Jonah rose up to flee unto Tarshish from the presence of the Lord."
  },

  {
    id: 187,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "What plain was associated with the tower built after the flood?",
    choices: ["Plain of Jezreel", "Plain of Jordan", "Plain in the land of Shinar", "Valley of Achor"],
    answer: 2,
    reference: "Genesis 11:2-4",
    verseText: "They found a plain in the land of Shinar; and they dwelt there."
  },

  {
    id: 188,
    game: "Bible Geography",
    testament: "New Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "What port did Paul depart from when he sailed for Rome as a prisoner?",
    choices: ["Caesarea", "Joppa", "Alexandria", "Ephesus"],
    answer: 0,
    reference: "Acts 27:1-2",
    verseText: "When it was determined that we should sail into Italy... Paul was delivered..."
  },

  {
    id: 189,
    game: "Bible Geography",
    testament: "Old Testament",
    category: "Places",
    difficulty: "Scholar",
    question: "Who am I? I was the brook where Elijah was fed by ravens.",
    choices: ["Kidron", "Cherith", "Jabbok", "Arnon"],
    answer: 1,
    reference: "1 Kings 17:3-6",
    verseText: "Hide thyself by the brook Cherith... and I have commanded the ravens to feed thee there."
  }

];
