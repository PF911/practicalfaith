const miraclesQuestions = [
  {
    id: 9001,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is the primary theological purpose of Jesus turning water into wine at Cana?",
    choices: [
      "To provide entertainment at weddings",
      "To reveal His glory as the bringer of the new covenant reality",
      "To demonstrate culinary skill",
      "To replace all future feasts"
    ],
    answer: 1,
    reference: "John 2:1-11",
    verseText: "This beginning of miracles did Jesus... and manifested forth his glory."
  },
  {
    id: 9002,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus rebuke the storm in Mark 4?",
    choices: [
      "To impress the disciples with spectacle",
      "To demonstrate authority over creation and expose the disciples' lack of faith",
      "To punish the sea",
      "To fulfill a Levitical law"
    ],
    answer: 1,
    reference: "Mark 4:35-41",
    verseText: "Why are ye so fearful? how is it that ye have no faith?"
  },
  {
    id: 9003,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What deeper reality is signified in the healing of the paralytic in Mark 2?",
    choices: [
      "Physical healing is more important than forgiveness",
      "Jesus has authority to forgive sins, validated through visible healing",
      "The scribes were correct in their accusation",
      "Faith is irrelevant to healing"
    ],
    answer: 1,
    reference: "Mark 2:1-12",
    verseText: "The Son of man hath power on earth to forgive sins."
  },
  {
    id: 9004,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why is the feeding of the 5,000 especially significant in John's Gospel?",
    choices: [
      "It shows Jesus as a political revolutionary",
      "It sets up Jesus as the true bread from heaven",
      "It replaces all future meals",
      "It proves the disciples were self-sufficient"
    ],
    answer: 1,
    reference: "John 6:1-14, 32-35",
    verseText: "I am the bread of life."
  },
  {
    id: 9005,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is revealed in Jesus walking on the water?",
    choices: [
      "He mastered a natural trick",
      "He displays divine authority over chaos and identifies Himself with God's power",
      "The disciples imagined the event",
      "It fulfills a dietary law"
    ],
    answer: 1,
    reference: "Matthew 14:22-33; Job 9:8",
    verseText: "Be of good cheer; it is I; be not afraid."
  },
  {
    id: 9006,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why is the raising of Lazarus pivotal in John's Gospel?",
    choices: [
      "It ends all miracles afterward",
      "It reveals Jesus as the resurrection and the life, intensifying conflict leading to the cross",
      "It proves Lazarus never died",
      "It removes the need for faith"
    ],
    answer: 1,
    reference: "John 11:1-53",
    verseText: "I am the resurrection, and the life."
  },
  {
    id: 9007,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is the significance of Jesus healing on the Sabbath?",
    choices: [
      "He abolishes the Sabbath entirely",
      "He reveals the Sabbath's true purpose and His authority over it",
      "He violates God's law unknowingly",
      "He avoids confrontation with leaders"
    ],
    answer: 1,
    reference: "Mark 3:1-6; Luke 13:10-17",
    verseText: "The Son of man is Lord also of the sabbath."
  },
  {
    id: 9008,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus often connect faith with healing?",
    choices: [
      "Faith is a magical force that earns miracles",
      "Faith is trust directed toward Him, through which His power is received",
      "Faith replaces God's will",
      "Faith guarantees identical outcomes in every case"
    ],
    answer: 1,
    reference: "Mark 5:34; Luke 7:50",
    verseText: "Thy faith hath made thee whole."
  },
  {
    id: 9009,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What does the casting out of demons demonstrate in Jesus' ministry?",
    choices: [
      "A psychological technique only",
      "The arrival of God's kingdom overpowering demonic authority",
      "The irrelevance of spiritual warfare",
      "That demons do not exist"
    ],
    answer: 1,
    reference: "Luke 11:20; Mark 1:34",
    verseText: "If I with the finger of God cast out devils, no doubt the kingdom of God is come upon you."
  },
  {
    id: 9010,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus sometimes command silence after miracles?",
    choices: [
      "He feared public attention",
      "He controlled premature or misguided messianic expectations",
      "He did not want witnesses",
      "He doubted the miracle occurred"
    ],
    answer: 1,
    reference: "Mark 1:43-45; Mark 8:29-30",
    verseText: "See thou say nothing to any man."
  },
  {
    id: 9011,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is unique about the healing of the man born blind in John 9?",
    choices: [
      "It is the only healing done privately",
      "It raises the issue of spiritual blindness versus sight",
      "It proves sin always causes disability",
      "It avoids confrontation entirely"
    ],
    answer: 1,
    reference: "John 9:1-41",
    verseText: "Whereas I was blind, now I see."
  },
  {
    id: 9012,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why is the cursing of the fig tree significant?",
    choices: [
      "It is an act of frustration only",
      "It symbolizes judgment on fruitless religiosity",
      "It shows hatred for nature",
      "It proves hunger controls Jesus' actions"
    ],
    answer: 1,
    reference: "Mark 11:12-21",
    verseText: "No man eat fruit of thee hereafter for ever."
  },
  {
    id: 9013,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What does the Transfiguration reveal beyond a miracle of light?",
    choices: [
      "Jesus becomes divine at that moment",
      "His divine glory is unveiled and affirmed by the Father",
      "Moses and Elijah replace Him",
      "It ends His earthly mission"
    ],
    answer: 1,
    reference: "Matthew 17:1-5",
    verseText: "This is my beloved Son... hear ye him."
  },
  {
    id: 9014,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why is Peter's attempt to walk on water important?",
    choices: [
      "It proves humans can master nature independently",
      "It shows faith sustained by focus on Christ versus fear-driven doubt",
      "It invalidates the miracle",
      "It replaces discipleship with spectacle"
    ],
    answer: 1,
    reference: "Matthew 14:28-31",
    verseText: "O thou of little faith, wherefore didst thou doubt?"
  },
  {
    id: 9015,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is demonstrated when Jesus heals the centurion's servant at a distance?",
    choices: [
      "He needed physical proximity",
      "His authority transcends location and responds to genuine faith",
      "Only Jews can receive miracles",
      "The servant healed himself"
    ],
    answer: 1,
    reference: "Matthew 8:5-13",
    verseText: "I have not found so great faith, no, not in Israel."
  },
  {
    id: 9016,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus ask, 'Who touched me?' after the woman with the issue of blood is healed?",
    choices: [
      "He did not know what happened",
      "He draws her into public acknowledgment of faith and restoration",
      "He wants to accuse her",
      "He denies the miracle occurred"
    ],
    answer: 1,
    reference: "Mark 5:25-34",
    verseText: "Daughter, thy faith hath made thee whole."
  },
  {
    id: 9017,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What does Jesus raising Jairus's daughter demonstrate?",
    choices: [
      "Death is final and unchallenged",
      "His authority extends over death itself",
      "Children cannot die",
      "Faith guarantees no mourning"
    ],
    answer: 1,
    reference: "Mark 5:35-43",
    verseText: "Talitha cumi."
  },
  {
    id: 9018,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus use physical means like mud in some healings?",
    choices: [
      "The materials themselves contain power",
      "The act serves as a sign while power ultimately comes from Him",
      "He lacked authority otherwise",
      "It fulfills a medical law"
    ],
    answer: 1,
    reference: "John 9:6-7",
    verseText: "He anointed the eyes... and said... wash."
  },
  {
    id: 9019,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is the deeper meaning behind Jesus cleansing lepers?",
    choices: [
      "Only physical healing is intended",
      "He restores both physical health and social-religious inclusion",
      "He abolishes the law immediately",
      "He avoids priestly involvement"
    ],
    answer: 1,
    reference: "Luke 5:12-14; Leviticus 14",
    verseText: "Show thyself to the priest."
  },
  {
    id: 9020,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why does Jesus marvel at unbelief in Nazareth?",
    choices: [
      "Because miracles require perfect environments",
      "Because familiarity bred rejection and hindered response to His works",
      "Because He lost His power there",
      "Because Nazareth had no sick people"
    ],
    answer: 1,
    reference: "Mark 6:1-6",
    verseText: "He marvelled because of their unbelief."
  },
  {
    id: 9021,
    game: "Miracles",
    testament: "New Testament",
    category: "Apostles",
    difficulty: "Advanced",
    question: "What does the healing of the lame man in Acts 3 demonstrate about apostolic ministry?",
    choices: [
      "The apostles act independently of Christ",
      "Miracles authenticate the continued authority of the risen Christ through His apostles",
      "The temple is no longer relevant",
      "Healing replaces preaching"
    ],
    answer: 1,
    reference: "Acts 3:1-16",
    verseText: "In the name of Jesus Christ of Nazareth rise up and walk."
  },
  {
    id: 9022,
    game: "Miracles",
    testament: "New Testament",
    category: "Apostles",
    difficulty: "Advanced",
    question: "Why is Ananias and Sapphira's judgment considered miraculous?",
    choices: [
      "It is purely symbolic",
      "It is a direct divine act exposing hypocrisy within the early church",
      "Peter caused their death by anger",
      "It denies grace in the church"
    ],
    answer: 1,
    reference: "Acts 5:1-11",
    verseText: "Thou hast not lied unto men, but unto God."
  },
  {
    id: 9023,
    game: "Miracles",
    testament: "New Testament",
    category: "Apostles",
    difficulty: "Advanced",
    question: "What is the significance of Peter raising Tabitha?",
    choices: [
      "It proves Peter replaces Jesus",
      "It parallels Jesus' works, showing continuity of divine power in apostolic witness",
      "It eliminates death permanently",
      "It was done secretly with no purpose"
    ],
    answer: 1,
    reference: "Acts 9:36-42",
    verseText: "Tabitha, arise."
  },
  {
    id: 9024,
    game: "Miracles",
    testament: "New Testament",
    category: "Apostles",
    difficulty: "Advanced",
    question: "Why are miracles associated with Paul's ministry?",
    choices: [
      "To entertain crowds",
      "To confirm the gospel message among both Jews and Gentiles",
      "To replace teaching",
      "To prove Paul superior to other apostles"
    ],
    answer: 1,
    reference: "Acts 14:3; Acts 19:11-12",
    verseText: "God wrought special miracles by the hands of Paul."
  },
  {
    id: 9025,
    game: "Miracles",
    testament: "New Testament",
    category: "Apostles",
    difficulty: "Advanced",
    question: "What is the significance of Eutychus being raised in Acts 20?",
    choices: [
      "It proves sermons should be shorter",
      "It demonstrates life-restoring power accompanying apostolic teaching",
      "It ends Paul's ministry",
      "It removes the need for vigilance"
    ],
    answer: 1,
    reference: "Acts 20:7-12",
    verseText: "His life is in him."
  },
  {
    id: 9026,
    game: "Miracles",
    testament: "Old Testament",
    category: "Moses",
    difficulty: "Advanced",
    question: "What do the plagues in Egypt primarily reveal?",
    choices: [
      "Natural disasters without purpose",
      "God's judgment on Egypt's gods and power over creation",
      "Moses' personal power",
      "Israel's military strength"
    ],
    answer: 1,
    reference: "Exodus 7-12",
    verseText: "Against all the gods of Egypt I will execute judgment."
  },
  {
    id: 9027,
    game: "Miracles",
    testament: "Old Testament",
    category: "Moses",
    difficulty: "Advanced",
    question: "What is the significance of the Red Sea crossing?",
    choices: [
      "A narrow escape only",
      "A decisive act of salvation and judgment establishing Israel as God's redeemed people",
      "A minor geographic detail",
      "Proof Egypt was stronger"
    ],
    answer: 1,
    reference: "Exodus 14:13-31",
    verseText: "Stand still, and see the salvation of the LORD."
  },
  {
    id: 9028,
    game: "Miracles",
    testament: "Old Testament",
    category: "Moses",
    difficulty: "Advanced",
    question: "Why is water from the rock significant in the wilderness?",
    choices: [
      "It proves Israel needed no God",
      "It shows God's provision despite Israel's complaints",
      "It replaces all future water sources",
      "It eliminates judgment entirely"
    ],
    answer: 1,
    reference: "Exodus 17:1-7; Numbers 20:8-11",
    verseText: "He brought streams also out of the rock."
  },
  {
    id: 9029,
    game: "Miracles",
    testament: "Old Testament",
    category: "Elijah",
    difficulty: "Advanced",
    question: "What is the significance of fire from heaven on Mount Carmel?",
    choices: [
      "It proves Baal shares power with God",
      "It demonstrates the LORD alone answers and vindicates true worship",
      "It ends all prophecy",
      "It replaces prayer"
    ],
    answer: 1,
    reference: "1 Kings 18:36-39",
    verseText: "The LORD, he is the God."
  },
  {
    id: 9030,
    game: "Miracles",
    testament: "Old Testament",
    category: "Elijah",
    difficulty: "Advanced",
    question: "Why is the widow's oil and flour miracle important?",
    choices: [
      "It enriches Elijah personally",
      "It shows God's sustaining provision during judgment",
      "It ends famine instantly for all",
      "It replaces agriculture permanently"
    ],
    answer: 1,
    reference: "1 Kings 17:8-16",
    verseText: "The barrel of meal shall not waste."
  },
  {
    id: 9031,
    game: "Miracles",
    testament: "Old Testament",
    category: "Elisha",
    difficulty: "Advanced",
    question: "What is demonstrated in Naaman's healing after washing in the Jordan?",
    choices: [
      "Water itself has magical power",
      "Obedience to God's word humbles pride and brings healing",
      "Israel's rivers are superior geographically",
      "Elisha required payment"
    ],
    answer: 1,
    reference: "2 Kings 5:10-14",
    verseText: "Then went he down, and dipped himself seven times."
  },
  {
    id: 9032,
    game: "Miracles",
    testament: "Old Testament",
    category: "Elisha",
    difficulty: "Advanced",
    question: "Why does Elisha multiply the widow's oil?",
    choices: [
      "To create wealth for display",
      "To provide deliverance from debt and preserve her household",
      "To replace the temple economy",
      "To avoid teaching"
    ],
    answer: 1,
    reference: "2 Kings 4:1-7",
    verseText: "The oil stayed."
  },
  {
    id: 9033,
    game: "Miracles",
    testament: "Old Testament",
    category: "Elisha",
    difficulty: "Advanced",
    question: "What is the significance of the floating axe head?",
    choices: [
      "It proves physics is irrelevant",
      "It shows God's care extends even to small, practical needs",
      "It was an illusion",
      "It replaces tools permanently"
    ],
    answer: 1,
    reference: "2 Kings 6:1-7",
    verseText: "And the iron did swim."
  },
  {
    id: 9034,
    game: "Miracles",
    testament: "Old Testament",
    category: "Joshua",
    difficulty: "Advanced",
    question: "What is the theological meaning of the sun standing still in Joshua 10?",
    choices: [
      "It glorifies Israel's military genius",
      "It emphasizes God's direct intervention in battle for His covenant purposes",
      "It denies natural order entirely",
      "It ends all warfare forever"
    ],
    answer: 1,
    reference: "Joshua 10:12-14",
    verseText: "The LORD fought for Israel."
  },
  {
    id: 9035,
    game: "Miracles",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What is demonstrated by Daniel surviving the lions' den?",
    choices: [
      "Lions were not dangerous",
      "God preserves His servant and vindicates faithfulness under persecution",
      "Daniel had secret weapons",
      "Prayer is ineffective"
    ],
    answer: 1,
    reference: "Daniel 6:16-23",
    verseText: "No manner of hurt was found upon him."
  },
  {
    id: 9036,
    game: "Miracles",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What is revealed in the fiery furnace account?",
    choices: [
      "Fire loses all power universally",
      "God is present with His people in suffering and able to deliver",
      "Babylonian gods intervened",
      "Faith prevents all trials"
    ],
    answer: 1,
    reference: "Daniel 3:24-25",
    verseText: "The form of the fourth is like the Son of God."
  },
  {
    id: 9037,
    game: "Miracles",
    testament: "Old Testament",
    category: "Jonah",
    difficulty: "Advanced",
    question: "What is the purpose of Jonah being swallowed by a great fish?",
    choices: [
      "A random punishment",
      "A means of preservation and redirection toward God's mission",
      "Proof Jonah died permanently",
      "An unrelated myth"
    ],
    answer: 1,
    reference: "Jonah 1:17; Jonah 2:1-10",
    verseText: "Salvation is of the LORD."
  },
  {
    id: 9038,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is the significance of Jesus healing ten lepers but only one returning?",
    choices: [
      "Healing requires gratitude to remain effective",
      "It highlights faith and thankfulness versus mere reception of benefit",
      "Nine were not healed",
      "Jesus reversed the miracle later"
    ],
    answer: 1,
    reference: "Luke 17:11-19",
    verseText: "Were there not ten cleansed? but where are the nine?"
  },
  {
    id: 9039,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "Why is the healing of the deaf and mute man in Mark 7 distinctive?",
    choices: [
      "It is performed without any action",
      "Jesus uses personal interaction emphasizing restoration of communication",
      "It occurs in Jerusalem temple",
      "It replaces preaching entirely"
    ],
    answer: 1,
    reference: "Mark 7:31-37",
    verseText: "Ephphatha, that is, Be opened."
  },
  {
    id: 9040,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is revealed when Jesus restores the ear of the servant in Gethsemane?",
    choices: [
      "Violence is the method of His kingdom",
      "His kingdom is not advanced by force and He still shows mercy to enemies",
      "The arrest is canceled",
      "Peter was correct in his action"
    ],
    answer: 1,
    reference: "Luke 22:50-51; John 18:10-11",
    verseText: "Suffer ye thus far."
  },
  {
    id: 9041,
    game: "Miracles",
    testament: "New Testament",
    category: "Jesus",
    difficulty: "Advanced",
    question: "What is the ultimate miracle that anchors all others in the New Testament?",
    choices: [
      "Feeding of the multitudes",
      "The resurrection of Jesus",
      "Walking on water",
      "Casting out demons"
    ],
    answer: 1,
    reference: "Matthew 28:1-10; 1 Corinthians 15:14-20",
    verseText: "He is not here: for he is risen."
  },
  {
    id: 9042,
    game: "Miracles",
    testament: "New Testament",
    category: "Theology",
    difficulty: "Advanced",
    question: "What do biblical miracles consistently function as within redemptive history?",
    choices: [
      "Random displays of power",
      "Signs pointing to God's revelation, authority, and saving purpose",
      "Ends in themselves only",
      "Proof that faith is unnecessary"
    ],
    answer: 1,
    reference: "John 20:30-31; Hebrews 2:3-4",
    verseText: "These are written, that ye might believe."
  }
];