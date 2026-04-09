const apostlesQuestions = [
  {
    id: 1001,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle was originally called Simon, son of Jonah?",
    choices: ["Andrew", "Peter", "James the Less", "Thomas"],
    answer: 1,
    reference: "Matthew 16:17-18",
    verseText: "Blessed art thou, Simon Barjona..."
  },
  {
    id: 1002,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle was the brother of Peter?",
    choices: ["John", "Philip", "Andrew", "Bartholomew"],
    answer: 2,
    reference: "Matthew 4:18",
    verseText: "Simon called Peter, and Andrew his brother..."
  },
  {
    id: 1003,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which pair of apostles were the sons of Zebedee?",
    choices: ["Peter and Andrew", "James and John", "Philip and Bartholomew", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 10:2",
    verseText: "James the son of Zebedee, and John his brother..."
  },
  {
    id: 1004,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle had first been a disciple of John the Baptist before following Jesus?",
    choices: ["Andrew", "Matthew", "Simon the Zealot", "Judas son of James"],
    answer: 0,
    reference: "John 1:35-40",
    verseText: "One of the two... was Andrew..."
  },
  {
    id: 1005,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle was also called Levi?",
    choices: ["Thaddaeus", "Matthew", "Bartholomew", "Thomas"],
    answer: 1,
    reference: "Mark 2:14; Luke 5:27-29",
    verseText: "Levi... and Matthew..."
  },
  {
    id: 1006,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle was described as being from Bethsaida, the city of Andrew and Peter?",
    choices: ["Philip", "Matthew", "James son of Alphaeus", "Simon the Zealot"],
    answer: 0,
    reference: "John 1:44",
    verseText: "Philip was of Bethsaida..."
  },
  {
    id: 1007,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is closely associated with the statement, 'Can there any good thing come out of Nazareth?'",
    choices: ["Thomas", "Nathanael", "Andrew", "Judas Iscariot"],
    answer: 1,
    reference: "John 1:45-46",
    verseText: "And Nathanael said unto him..."
  },
  {
    id: 1008,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Bartholomew is commonly identified with which figure in John's Gospel?",
    choices: ["Nicodemus", "Nathanael", "Joseph of Arimathaea", "Cleopas"],
    answer: 1,
    reference: "John 1:45-51; John 21:2",
    verseText: "Nathanael... traditionally linked with Bartholomew."
  },
  {
    id: 1009,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is specifically called 'Didymus'?",
    choices: ["Thomas", "Philip", "Judas son of James", "John"],
    answer: 0,
    reference: "John 11:16; John 20:24",
    verseText: "Thomas, which is called Didymus..."
  },
  {
    id: 1010,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle asked Jesus, 'Lord, shew us the Father'?",
    choices: ["Philip", "Andrew", "Peter", "Matthew"],
    answer: 0,
    reference: "John 14:8",
    verseText: "Philip saith unto him..."
  },
  {
    id: 1011,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle asked at the Last Supper why Jesus would manifest Himself to the disciples and not to the world?",
    choices: ["Judas Iscariot", "Judas not Iscariot", "Thomas", "Bartholomew"],
    answer: 1,
    reference: "John 14:22",
    verseText: "Judas saith unto him, not Iscariot..."
  },
  {
    id: 1012,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is also called Simon the Canaanite in some Gospel lists?",
    choices: ["Simon Peter", "Simon the Zealot", "Simeon Niger", "Judas son of James"],
    answer: 1,
    reference: "Matthew 10:4; Mark 3:18; Luke 6:15",
    verseText: "Simon the Canaanite... Simon called Zelotes..."
  },
  {
    id: 1013,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle was sitting at the receipt of custom when Jesus called him?",
    choices: ["Matthew", "Thomas", "Philip", "Andrew"],
    answer: 0,
    reference: "Matthew 9:9",
    verseText: "A man, named Matthew, sitting at the receipt of custom..."
  },
  {
    id: 1014,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which two brothers were casting a net into the sea when Jesus called them?",
    choices: ["James and John", "Peter and Andrew", "Philip and Nathanael", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 4:18-20",
    verseText: "Simon called Peter, and Andrew his brother..."
  },
  {
    id: 1015,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which two brothers were mending their nets with Zebedee when Jesus called them?",
    choices: ["Peter and Andrew", "James and John", "Philip and Bartholomew", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 4:21-22",
    verseText: "James... and John... mending their nets..."
  },
  {
    id: 1016,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle first brought his own brother to Jesus?",
    choices: ["John", "Andrew", "Philip", "Thomas"],
    answer: 1,
    reference: "John 1:40-42",
    verseText: "He first findeth his own brother Simon..."
  },
  {
    id: 1017,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle brought Nathanael to Jesus?",
    choices: ["Andrew", "Philip", "Peter", "Matthew"],
    answer: 1,
    reference: "John 1:45-46",
    verseText: "Philip findeth Nathanael..."
  },
  {
    id: 1018,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "At the feeding of the five thousand, which apostle pointed out the lad with five barley loaves and two small fishes?",
    choices: ["Philip", "Andrew", "John", "Thomas"],
    answer: 1,
    reference: "John 6:8-9",
    verseText: "One of his disciples, Andrew..."
  },
  {
    id: 1019,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle was tested by Jesus with the question, 'Whence shall we buy bread, that these may eat?'",
    choices: ["Peter", "Philip", "Bartholomew", "Matthew"],
    answer: 1,
    reference: "John 6:5-7",
    verseText: "He saith unto Philip..."
  },
  {
    id: 1020,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which three apostles were present at the raising of Jairus's daughter, the Transfiguration, and Gethsemane?",
    choices: [
      "Peter, James, and John",
      "Peter, Andrew, and John",
      "James, John, and Andrew",
      "Peter, Thomas, and John"
    ],
    answer: 0,
    reference: "Mark 5:37; Mark 9:2; Mark 14:33",
    verseText: "Peter and James and John..."
  },
  {
    id: 1021,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle confessed, 'Thou art the Christ, the Son of the living God'?",
    choices: ["John", "Peter", "Thomas", "James"],
    answer: 1,
    reference: "Matthew 16:16",
    verseText: "Simon Peter answered..."
  },
  {
    id: 1022,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle attempted to walk on the water toward Jesus?",
    choices: ["Andrew", "Peter", "James", "Philip"],
    answer: 1,
    reference: "Matthew 14:28-29",
    verseText: "And Peter answered him..."
  },
  {
    id: 1023,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle drew a sword and struck the high priest's servant?",
    choices: ["John", "Peter", "Simon the Zealot", "Thomas"],
    answer: 1,
    reference: "John 18:10",
    verseText: "Then Simon Peter having a sword..."
  },
  {
    id: 1024,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle denied Jesus three times before the rooster crowed?",
    choices: ["Andrew", "Peter", "Thomas", "Matthew"],
    answer: 1,
    reference: "Luke 22:54-62",
    verseText: "Peter said... and immediately, while he yet spake, the cock crew."
  },
  {
    id: 1025,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle was known to the high priest and gained access to the courtyard after Jesus' arrest?",
    choices: ["John", "James", "Philip", "Thomas"],
    answer: 0,
    reference: "John 18:15-16",
    verseText: "That disciple was known unto the high priest..."
  },
  {
    id: 1026,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which apostle said, 'Except I shall see in his hands the print of the nails... I will not believe'?",
    choices: ["Peter", "Thomas", "Matthew", "Bartholomew"],
    answer: 1,
    reference: "John 20:25",
    verseText: "Except I shall see... I will not believe."
  },
  {
    id: 1027,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which apostle responded to the risen Christ with, 'My Lord and my God'?",
    choices: ["John", "Thomas", "Peter", "Philip"],
    answer: 1,
    reference: "John 20:28",
    verseText: "Thomas answered and said unto him..."
  },
  {
    id: 1028,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which two apostles ran together to the empty tomb, with one arriving before the other?",
    choices: [
      "Peter and Andrew",
      "Peter and John",
      "James and John",
      "Thomas and Matthew"
    ],
    answer: 1,
    reference: "John 20:2-8",
    verseText: "Peter... and that other disciple..."
  },
  {
    id: 1029,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Who stood up among the disciples and proposed the replacement of Judas Iscariot?",
    choices: ["John", "Peter", "James", "Andrew"],
    answer: 1,
    reference: "Acts 1:15-22",
    verseText: "Peter stood up in the midst of the disciples..."
  },
  {
    id: 1030,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Who was chosen by lot to take the place of Judas Iscariot?",
    choices: ["Joseph Barsabas", "Matthias", "Silas", "Barnabas"],
    answer: 1,
    reference: "Acts 1:26",
    verseText: "The lot fell upon Matthias..."
  },
  {
    id: 1031,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle preached the Pentecost sermon recorded in Acts 2?",
    choices: ["John", "Peter", "James", "Thomas"],
    answer: 1,
    reference: "Acts 2:14-41",
    verseText: "Peter, standing up with the eleven..."
  },
  {
    id: 1032,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which two apostles went up together into the temple at the hour of prayer and encountered the lame man?",
    choices: [
      "Peter and John",
      "Peter and Andrew",
      "John and James",
      "Philip and Thomas"
    ],
    answer: 0,
    reference: "Acts 3:1",
    verseText: "Peter and John went up together..."
  },
  {
    id: 1033,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle said to the lame man, 'Silver and gold have I none'?",
    choices: ["John", "Peter", "James", "Andrew"],
    answer: 1,
    reference: "Acts 3:6",
    verseText: "Then Peter said..."
  },
  {
    id: 1034,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which two apostles were sent to Samaria after many believed through Philip's preaching?",
    choices: [
      "Peter and John",
      "Peter and James",
      "John and Andrew",
      "Thomas and Matthew"
    ],
    answer: 0,
    reference: "Acts 8:14",
    verseText: "They sent unto them Peter and John..."
  },
  {
    id: 1035,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle rebuked Simon Magus for thinking the gift of God could be purchased with money?",
    choices: ["John", "Peter", "Philip", "Andrew"],
    answer: 1,
    reference: "Acts 8:20-23",
    verseText: "Peter said unto him, Thy money perish with thee..."
  },
  {
    id: 1036,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle was miraculously released from prison by an angel in Acts 12?",
    choices: ["Peter", "John", "Andrew", "Matthew"],
    answer: 0,
    reference: "Acts 12:5-11",
    verseText: "Peter was kept in prison... and, behold, the angel of the Lord came..."
  },
  {
    id: 1037,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle was killed by Herod with the sword in Acts 12?",
    choices: ["James the son of Zebedee", "James the son of Alphaeus", "John", "Andrew"],
    answer: 0,
    reference: "Acts 12:1-2",
    verseText: "He killed James the brother of John with the sword."
  },
  {
    id: 1038,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle was present at the Jerusalem Council and spoke of God making no distinction between Jews and Gentiles by faith?",
    choices: ["Thomas", "Peter", "Matthew", "Bartholomew"],
    answer: 1,
    reference: "Acts 15:7-11",
    verseText: "Peter rose up, and said unto them..."
  },
  {
    id: 1039,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What was Paul's Hebrew name before he is predominantly called Paul in Acts?",
    choices: ["Saul", "Silvanus", "Sosthenes", "Simeon"],
    answer: 0,
    reference: "Acts 13:9",
    verseText: "Then Saul, (who also is called Paul)..."
  },
  {
    id: 1040,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "On the road to Damascus, what question did Saul ask after Jesus identified Himself?",
    choices: [
      "Who art thou, Lord?",
      "What wilt thou have me to do?",
      "Why hast thou forsaken me?",
      "Where dwellest thou?"
    ],
    answer: 0,
    reference: "Acts 9:5",
    verseText: "And he said, Who art thou, Lord?"
  },
  {
    id: 1041,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Who laid hands on Saul so that he might receive his sight after the Damascus road encounter?",
    choices: ["Barnabas", "Ananias", "Peter", "Philip"],
    answer: 1,
    reference: "Acts 9:17-18",
    verseText: "And Ananias went his way..."
  },
  {
    id: 1042,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Who first introduced Saul to the apostles in Jerusalem after his conversion?",
    choices: ["Peter", "Barnabas", "James", "John Mark"],
    answer: 1,
    reference: "Acts 9:27",
    verseText: "But Barnabas took him, and brought him to the apostles..."
  },
  {
    id: 1043,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "According to Galatians 1, whom did Paul say he went up to Jerusalem to see after his conversion?",
    choices: ["John", "Peter", "Andrew", "Thomas"],
    answer: 1,
    reference: "Galatians 1:18",
    verseText: "I went up to Jerusalem to see Peter..."
  },
  {
    id: 1044,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Which apostle did Paul say he saw in Jerusalem besides Peter, namely 'James, the Lord's brother'?",
    choices: ["James", "John", "Andrew", "Philip"],
    answer: 0,
    reference: "Galatians 1:19",
    verseText: "Other of the apostles saw I none, save James the Lord's brother."
  },
  {
    id: 1045,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Which apostle did Paul publicly rebuke at Antioch over withdrawing from Gentile believers?",
    choices: ["James", "Peter", "John", "Matthew"],
    answer: 1,
    reference: "Galatians 2:11-14",
    verseText: "I withstood him to the face..."
  },
  {
    id: 1046,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle identified himself as 'an apostle of the circumcision' in effect through his ministry focus?",
    choices: ["Peter", "Paul", "John", "Thomas"],
    answer: 0,
    reference: "Galatians 2:7-8",
    verseText: "The gospel of the circumcision was unto Peter..."
  },
  {
    id: 1047,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle wrote of believers as 'lively stones' built into a spiritual house?",
    choices: ["John", "Peter", "James", "Jude"],
    answer: 1,
    reference: "1 Peter 2:5",
    verseText: "Ye also, as lively stones..."
  },
  {
    id: 1048,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle wrote, 'God is love'?",
    choices: ["Peter", "Paul", "John", "James"],
    answer: 2,
    reference: "1 John 4:8",
    verseText: "God is love."
  },
  {
    id: 1049,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle referred to himself as 'the disciple whom Jesus loved' in the Gospel traditionally attributed to him?",
    choices: ["Peter", "John", "Andrew", "James"],
    answer: 1,
    reference: "John 13:23; John 21:20",
    verseText: "That disciple whom Jesus loved..."
  },
  {
    id: 1050,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle wrote the book of Revelation while on the isle called Patmos?",
    choices: ["Peter", "John", "Paul", "Thomas"],
    answer: 1,
    reference: "Revelation 1:9",
    verseText: "I John... was in the isle that is called Patmos..."
  }
];

if (typeof window !== "undefined") {
  window.apostlesQuestions = apostlesQuestions;
}