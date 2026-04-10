const apostlesQuestions = [

  {
    id: 11001,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is explicitly called 'Simon Barjona' in connection with Peter's confession at Caesarea Philippi?",
    choices: ["Andrew", "Peter", "Simon the Zealot", "Thomas"],
    answer: 1,
    reference: "Matthew 16:16-17",
    verseText: "Blessed are you, Simon Bar-Jonah..."
  },
  {
    id: 11002,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is identified as Peter's brother and one of the first to follow Jesus in John's account?",
    choices: ["James", "Andrew", "Philip", "Bartholomew"],
    answer: 1,
    reference: "John 1:40-41",
    verseText: "One of the two... was Andrew, Simon Peter's brother."
  },
  {
    id: 11003,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which pair of apostles are repeatedly grouped together as the sons of Zebedee?",
    choices: ["Peter and Andrew", "James and John", "Philip and Bartholomew", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 10:2; Mark 3:17",
    verseText: "James the son of Zebedee, and John his brother."
  },
  {
    id: 11004,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle had previously been associated with John the Baptist before following Jesus?",
    choices: ["Matthew", "Andrew", "Thomas", "Judas son of James"],
    answer: 1,
    reference: "John 1:35-40",
    verseText: "One of the two who heard John speak... was Andrew."
  },
  {
    id: 11005,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is also identified with Levi the publican?",
    choices: ["Matthew", "Bartholomew", "Simon the Zealot", "Thaddaeus"],
    answer: 0,
    reference: "Mark 2:14; Luke 5:27-29",
    verseText: "He saw Levi... and said to him, 'Follow Me.'"
  },
  {
    id: 11006,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle was from Bethsaida, the same town linked with Andrew and Peter?",
    choices: ["Philip", "Thomas", "James son of Alphaeus", "Matthew"],
    answer: 0,
    reference: "John 1:44",
    verseText: "Now Philip was from Bethsaida, the city of Andrew and Peter."
  },
  {
    id: 11007,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which figure in John's Gospel is commonly identified with Bartholomew in apostolic comparisons?",
    choices: ["Nicodemus", "Nathanael", "Cleopas", "Joseph of Arimathaea"],
    answer: 1,
    reference: "John 1:45-49; John 21:2",
    verseText: "Philip found Nathanael..."
  },
  {
    id: 11008,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is specifically called Didymus (meaning 'the Twin')?",
    choices: ["Thomas", "Philip", "John", "Judas not Iscariot"],
    answer: 0,
    reference: "John 11:16; John 20:24",
    verseText: "Thomas, who is called the Twin."
  },
  {
    id: 11009,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle asked Jesus to show the disciples the Father?",
    choices: ["Andrew", "Philip", "Peter", "Matthew"],
    answer: 1,
    reference: "John 14:8-9",
    verseText: "Philip said to Him, 'Lord, show us the Father.'"
  },
  {
    id: 11010,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle, distinguished from Judas Iscariot, asked why Jesus would manifest Himself to the disciples and not to the world?",
    choices: ["Thomas", "Judas not Iscariot", "Bartholomew", "Simon the Zealot"],
    answer: 1,
    reference: "John 14:22",
    verseText: "Judas (not Iscariot) said to Him..."
  },

  {
    id: 11011,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle was called while sitting at the receipt of custom, showing Christ's call reaching into a despised profession?",
    choices: ["Matthew", "Thomas", "Philip", "Andrew"],
    answer: 0,
    reference: "Matthew 9:9",
    verseText: "A man named Matthew sitting at the tax office."
  },
  {
    id: 11012,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which brothers were called while casting a net into the sea, illustrating Jesus' summons in the midst of ordinary labor?",
    choices: ["James and John", "Peter and Andrew", "Philip and Bartholomew", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 4:18-20",
    verseText: "Simon called Peter, and Andrew his brother, casting a net."
  },
  {
    id: 11013,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which brothers were called while mending their nets with Zebedee their father?",
    choices: ["Peter and Andrew", "James and John", "Philip and Nathanael", "Thomas and Matthew"],
    answer: 1,
    reference: "Matthew 4:21-22",
    verseText: "James... and John his brother... mending their nets."
  },
  {
    id: 11014,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle first brought his own brother to Jesus after declaring, 'We have found the Messiah'?",
    choices: ["John", "Andrew", "Philip", "Thomas"],
    answer: 1,
    reference: "John 1:40-42",
    verseText: "He first found his own brother Simon."
  },
  {
    id: 11015,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Which apostle brought Nathanael to Jesus, illustrating a chain of witness in the earliest discipleship scenes?",
    choices: ["Andrew", "Philip", "Peter", "Matthew"],
    answer: 1,
    reference: "John 1:45-46",
    verseText: "Philip found Nathanael."
  },
  {
    id: 11016,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "What best characterizes the apostolic calling narratives in the Gospels?",
    choices: [
      "Jesus calls only the socially powerful",
      "Jesus calls through a mixture of command, witness, and personal encounter",
      "Jesus waits for every apostle to volunteer",
      "Jesus first tests every apostle through formal schooling"
    ],
    answer: 1,
    reference: "Matthew 4:18-22; John 1:35-51; Matthew 9:9",
    verseText: "Follow Me... Come and see."
  },
  {
    id: 11017,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "Why is Matthew's calling especially significant within apostolic identity?",
    choices: [
      "It proves apostleship came only through family ties",
      "It highlights grace reaching a compromised and publicly hated occupation",
      "It shows tax collectors outranked fishermen",
      "It makes Matthew the leader of the twelve"
    ],
    answer: 1,
    reference: "Matthew 9:9-13",
    verseText: "I did not come to call the righteous, but sinners, to repentance."
  },
  {
    id: 11018,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "What does Andrew's immediate witness to Peter primarily reveal about early discipleship?",
    choices: [
      "Apostleship was inherited through bloodline",
      "Encounter with Christ overflows into testimony",
      "Peter was originally called without Jesus' involvement",
      "Only apostles could evangelize"
    ],
    answer: 1,
    reference: "John 1:40-42",
    verseText: "He first found his own brother Simon."
  },

  {
    id: 11019,
    game: "Apostles",
    category: "Lists and Identity",
    difficulty: "Advanced",
    question: "What feature is most consistent across the four New Testament lists of the twelve?",
    choices: [
      "They always appear in exactly the same order",
      "Peter is consistently prominent while names in later positions may vary",
      "John is always listed first",
      "Judas Iscariot is omitted from all pre-resurrection lists"
    ],
    answer: 1,
    reference: "Matthew 10:2-4; Mark 3:16-19; Luke 6:14-16; Acts 1:13",
    verseText: "The first, Simon, who is called Peter..."
  },
  {
    id: 11020,
    game: "Apostles",
    category: "Lists and Identity",
    difficulty: "Advanced",
    question: "What does the variation between 'Thaddaeus' and 'Judas the son of James' in apostolic lists most likely show?",
    choices: [
      "The Gospels disagree on the number of apostles",
      "Some apostles were known by more than one designation",
      "Thaddaeus and Judas Iscariot are the same person",
      "Luke rejected Matthew's list entirely"
    ],
    answer: 1,
    reference: "Matthew 10:3; Mark 3:18; Luke 6:16; Acts 1:13",
    verseText: "Thaddaeus... Judas the son of James."
  },
  {
    id: 11021,
    game: "Apostles",
    category: "Lists and Identity",
    difficulty: "Advanced",
    question: "Why is it significant that Simon the Cananite and Simon the Zealot refer to the same apostle?",
    choices: [
      "It shows two different apostles named Simon were merged accidentally",
      "It reflects differing linguistic forms for the same identifying description",
      "It proves Simon later became Judas",
      "It means he came from Cana of Galilee"
    ],
    answer: 1,
    reference: "Matthew 10:4; Mark 3:18; Luke 6:15",
    verseText: "Simon the Cananite... Simon called the Zealot."
  },
  {
    id: 11022,
    game: "Apostles",
    category: "Lists and Identity",
    difficulty: "Advanced",
    question: "Why does the likely identification of Nathanael with Bartholomew matter for apostolic study?",
    choices: [
      "It eliminates all uncertainty in Gospel harmonization",
      "It helps correlate John's named disciples with the Synoptic lists",
      "It proves John copied Matthew directly",
      "It makes Nathanael the replacement for Judas"
    ],
    answer: 1,
    reference: "John 1:45-49; John 21:2; Matthew 10:3",
    verseText: "Philip and Bartholomew... Philip found Nathanael."
  },

  {
    id: 11023,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "At the feeding of the five thousand, which apostle pointed out the lad with five barley loaves and two small fish?",
    choices: ["Philip", "Andrew", "John", "Thomas"],
    answer: 1,
    reference: "John 6:8-9",
    verseText: "One of His disciples, Andrew... said to Him."
  },
  {
    id: 11024,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle was tested by Jesus with the question, 'Where shall we buy bread, that these may eat'?",
    choices: ["Peter", "Philip", "Bartholomew", "Matthew"],
    answer: 1,
    reference: "John 6:5-7",
    verseText: "He said to Philip... But this He said to test him."
  },
  {
    id: 11025,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which three apostles formed the inner circle present at Jairus's house, the Transfiguration, and Gethsemane?",
    choices: [
      "Peter, James, and John",
      "Peter, Andrew, and John",
      "James, John, and Andrew",
      "Peter, Thomas, and John"
    ],
    answer: 0,
    reference: "Mark 5:37; Mark 9:2; Mark 14:33",
    verseText: "Peter and James and John."
  },
  {
    id: 11026,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle confessed, 'You are the Christ, the Son of the living God'?",
    choices: ["John", "Peter", "Thomas", "James"],
    answer: 1,
    reference: "Matthew 16:16",
    verseText: "Simon Peter answered and said..."
  },
  {
    id: 11027,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle attempted to walk on the water toward Jesus, revealing both faith and instability?",
    choices: ["Andrew", "Peter", "James", "Philip"],
    answer: 1,
    reference: "Matthew 14:28-31",
    verseText: "Lord, if it is You, command me to come to You on the water."
  },
  {
    id: 11028,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle drew a sword and struck the high priest's servant during Jesus' arrest?",
    choices: ["John", "Peter", "Simon the Zealot", "Thomas"],
    answer: 1,
    reference: "John 18:10",
    verseText: "Then Simon Peter, having a sword, drew it."
  },
  {
    id: 11029,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle denied Jesus three times before the rooster crowed?",
    choices: ["Andrew", "Peter", "Thomas", "Matthew"],
    answer: 1,
    reference: "Luke 22:54-62",
    verseText: "Immediately, while he was still speaking, the rooster crowed."
  },
  {
    id: 11030,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle appears especially in John's Gospel as an intermediary figure, bringing others to Jesus or bringing situations to Jesus?",
    choices: ["Andrew", "Matthew", "Thomas", "Judas Iscariot"],
    answer: 0,
    reference: "John 1:41-42; John 6:8-9; John 12:22",
    verseText: "Andrew... brought him to Jesus."
  },
  {
    id: 11031,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "What does Philip's role in John 6 and John 14 most clearly reveal?",
    choices: [
      "He was always spiritually dull and never grew",
      "He often becomes the spokesman for practical limitations before fuller revelation",
      "He was secretly opposed to Jesus' miracles",
      "He replaced Peter as leader of the twelve"
    ],
    answer: 1,
    reference: "John 6:5-7; John 14:8-9",
    verseText: "Have I been with you so long, and yet you have not known Me, Philip?"
  },
  {
    id: 11032,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "What does Peter's trajectory in the Gospels especially demonstrate?",
    choices: [
      "That boldness alone qualifies a man for apostleship",
      "That leadership can coexist with weakness and still be transformed by grace",
      "That failure permanently disqualifies from service",
      "That the apostles were naturally superior to other believers"
    ],
    answer: 1,
    reference: "Matthew 16:16-23; Luke 22:31-34, 54-62; John 21:15-19",
    verseText: "When you have returned to Me, strengthen your brethren."
  },

  {
    id: 11033,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle leaned on Jesus' bosom at supper and then asked who the betrayer would be?",
    choices: ["Peter", "John", "Andrew", "Thomas"],
    answer: 1,
    reference: "John 13:23-25",
    verseText: "Now there was leaning on Jesus' bosom one of His disciples, whom Jesus loved."
  },
  {
    id: 11034,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle signaled to the beloved disciple to ask Jesus who the betrayer was?",
    choices: ["Thomas", "Peter", "Philip", "James"],
    answer: 1,
    reference: "John 13:24",
    verseText: "Simon Peter therefore motioned to him to ask who it was."
  },
  {
    id: 11035,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle is presented as the betrayer who carried the bag and was already morally compromised before the arrest?",
    choices: ["Judas Iscariot", "Thomas", "Matthew", "Simon the Zealot"],
    answer: 0,
    reference: "John 12:4-6; John 13:26-30",
    verseText: "He was a thief, and had the money box."
  },
  {
    id: 11036,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "What makes Judas Iscariot's betrayal especially tragic within apostolic theology?",
    choices: [
      "He never actually followed Jesus outwardly",
      "He fell from intimate proximity to Christ into deliberate treachery",
      "He betrayed Jesus by accident",
      "He was never counted among the twelve"
    ],
    answer: 1,
    reference: "Matthew 10:1-4; Matthew 26:14-16, 47-50; John 17:12",
    verseText: "Did I not choose you, the twelve, and one of you is a devil?"
  },
  {
    id: 11037,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle said, 'Lord, why can I not follow You now? I will lay down my life for Your sake'?",
    choices: ["John", "Peter", "Thomas", "Andrew"],
    answer: 1,
    reference: "John 13:36-38",
    verseText: "I will lay down my life for Your sake."
  },
  {
    id: 11038,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle responded to Jesus' announcement of departure with the words, 'Lord, we do not know where You are going'?",
    choices: ["Philip", "Thomas", "Matthew", "John"],
    answer: 1,
    reference: "John 14:5",
    verseText: "Thomas said to Him..."
  },
  {
    id: 11039,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle was known to the high priest and entered the palace courtyard after Jesus' arrest?",
    choices: ["John", "James", "Philip", "Thomas"],
    answer: 0,
    reference: "John 18:15-16",
    verseText: "Now that disciple was known to the high priest."
  },
  {
    id: 11040,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Why is Peter's denial followed later by a threefold restoration in John 21?",
    choices: [
      "To erase all memory of his sin",
      "To show Christ restoring and recommissioning a fallen leader in measured correspondence to his failure",
      "To prove Peter never truly denied Christ",
      "To replace Peter with John"
    ],
    answer: 1,
    reference: "Luke 22:61-62; John 21:15-17",
    verseText: "Do you love Me?... Feed My sheep."
  },

  {
    id: 11041,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which apostle said, 'Unless I see in His hands the print of the nails... I will not believe'?",
    choices: ["Peter", "Thomas", "Matthew", "Bartholomew"],
    answer: 1,
    reference: "John 20:25",
    verseText: "Unless I see... I will not believe."
  },
  {
    id: 11042,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which apostle answered the risen Christ, 'My Lord and my God'?",
    choices: ["John", "Thomas", "Peter", "Philip"],
    answer: 1,
    reference: "John 20:28",
    verseText: "Thomas answered and said to Him, 'My Lord and my God!'"
  },
  {
    id: 11043,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which two apostles ran to the empty tomb, with one arriving before the other?",
    choices: ["Peter and Andrew", "Peter and John", "James and John", "Thomas and Matthew"],
    answer: 1,
    reference: "John 20:2-8",
    verseText: "Peter therefore went out, and the other disciple."
  },
  {
    id: 11044,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Which apostle first entered the empty tomb after the race to the sepulchre?",
    choices: ["John", "Peter", "Andrew", "Thomas"],
    answer: 1,
    reference: "John 20:6",
    verseText: "Then Simon Peter came, following him, and went into the tomb."
  },
  {
    id: 11045,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "What is the theological force of Thomas's confession, 'My Lord and my God'?",
    choices: [
      "It is merely an emotional outburst with no doctrinal weight",
      "It serves as one of the clearest apostolic confessions of Christ's deity",
      "It proves Thomas doubted permanently",
      "It shows Thomas worshiped two different beings"
    ],
    answer: 1,
    reference: "John 20:27-29",
    verseText: "Thomas answered and said to Him, 'My Lord and my God!'"
  },
  {
    id: 11046,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "What does the contrast between Peter and John at the empty tomb most naturally emphasize?",
    choices: [
      "Competition as the heart of discipleship",
      "Different temperaments arriving at the same resurrection witness",
      "John outranking Peter in authority",
      "Peter's permanent exclusion from leadership"
    ],
    answer: 1,
    reference: "John 20:3-8",
    verseText: "He saw and believed."
  },
  {
    id: 11047,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "Why is Peter's restoration in John 21 especially significant for apostolic ministry?",
    choices: [
      "It shows ministry belongs only to the sinless",
      "It reconnects love for Christ with shepherding responsibility",
      "It proves Peter became superior to the other apostles",
      "It removes the need for repentance"
    ],
    answer: 1,
    reference: "John 21:15-19",
    verseText: "Feed My lambs... Feed My sheep."
  },

  {
    id: 11048,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Who stood up among the disciples and led the process of replacing Judas Iscariot before Pentecost?",
    choices: ["John", "Peter", "James", "Andrew"],
    answer: 1,
    reference: "Acts 1:15-22",
    verseText: "Peter stood up in the midst of the disciples."
  },
  {
    id: 11049,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Who was chosen by lot to take the place of Judas among the twelve?",
    choices: ["Joseph called Barsabas", "Matthias", "Barnabas", "Silas"],
    answer: 1,
    reference: "Acts 1:26",
    verseText: "And the lot fell on Matthias."
  },
  {
    id: 11050,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle preached the Pentecost sermon recorded in Acts 2?",
    choices: ["John", "Peter", "James the son of Alphaeus", "Thomas"],
    answer: 1,
    reference: "Acts 2:14-40",
    verseText: "But Peter, standing up with the eleven, raised his voice."
  },
  {
    id: 11051,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which two apostles went up together into the temple at the hour of prayer when the lame man was healed?",
    choices: ["Peter and John", "Peter and Andrew", "John and James", "Philip and Thomas"],
    answer: 0,
    reference: "Acts 3:1-8",
    verseText: "Now Peter and John went up together to the temple."
  },
  {
    id: 11052,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle told the lame man at the Beautiful Gate, 'Silver and gold I do not have'?",
    choices: ["John", "Peter", "James", "Thomas"],
    answer: 1,
    reference: "Acts 3:6",
    verseText: "Silver and gold I do not have."
  },
  {
    id: 11053,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostles stood before the Sanhedrin and answered, 'We ought to obey God rather than men'?",
    choices: ["Peter and John", "Peter and the apostles", "James and John", "Paul and Barnabas"],
    answer: 1,
    reference: "Acts 5:27-29",
    verseText: "But Peter and the other apostles answered and said."
  },
  {
    id: 11054,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle was killed by Herod with the sword, becoming the first of the twelve recorded as martyred?",
    choices: ["Peter", "James the brother of John", "Andrew", "Thomas"],
    answer: 1,
    reference: "Acts 12:1-2",
    verseText: "Then he killed James the brother of John with the sword."
  },
  {
    id: 11055,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle was imprisoned by Herod and then delivered by an angel?",
    choices: ["John", "Peter", "James son of Alphaeus", "Matthew"],
    answer: 1,
    reference: "Acts 12:3-11",
    verseText: "Now behold, an angel of the Lord stood by him."
  },
  {
    id: 11056,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle opened the door of the kingdom to the Gentiles in the house of Cornelius?",
    choices: ["John", "Peter", "Thomas", "Matthias"],
    answer: 1,
    reference: "Acts 10:1-48; Acts 15:7",
    verseText: "God chose among us, that by my mouth the Gentiles should hear the word of the gospel."
  },
  {
    id: 11057,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "What does Peter's vision of the sheet in Acts 10 primarily prepare him to understand?",
    choices: [
      "That food laws alone were the main issue in redemption",
      "That God was cleansing and receiving Gentiles as well as Jews",
      "That the temple would be rebuilt immediately",
      "That John's Gospel should be written next"
    ],
    answer: 1,
    reference: "Acts 10:9-35",
    verseText: "God has shown me that I should not call any man common or unclean."
  },
  {
    id: 11058,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which apostle spoke decisively at the Jerusalem council by recalling God's acceptance of the Gentiles?",
    choices: ["John", "Peter", "James son of Zebedee", "Andrew"],
    answer: 1,
    reference: "Acts 15:7-11",
    verseText: "Now therefore, why do you test God by putting a yoke on the neck of the disciples?"
  },
  {
    id: 11059,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which James gave the concluding judgment at the Jerusalem council, indicating his leading role in Jerusalem?",
    choices: ["James son of Zebedee", "James the Lord's brother", "James son of Alphaeus", "James the father of Judas"],
    answer: 1,
    reference: "Acts 15:13-21",
    verseText: "And after they had become silent, James answered."
  },
  {
    id: 11060,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Why is the emergence of James the Lord's brother in Acts and Galatians significant for apostolic structure?",
    choices: [
      "It proves the twelve ceased to matter immediately",
      "It shows leadership in the early church included both the twelve and other risen-Christ witnesses of recognized authority",
      "It means James replaced Peter permanently in every region",
      "It abolishes the category of apostle"
    ],
    answer: 1,
    reference: "Acts 15:13-21; Galatians 1:19; 2:9",
    verseText: "James, Cephas, and John, who seemed to be pillars."
  },

  {
    id: 11061,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What is Paul's own stated basis for insisting on his apostleship?",
    choices: [
      "He studied longer than the twelve",
      "He had seen the risen Lord and was called by Him",
      "He inherited authority from Gamaliel",
      "He was elected by the churches before conversion"
    ],
    answer: 1,
    reference: "1 Corinthians 9:1; Galatians 1:1, 11-17",
    verseText: "Have I not seen Jesus Christ our Lord?"
  },
  {
    id: 11062,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What makes Paul's apostleship unusual in relation to the twelve?",
    choices: [
      "He never had any divine commission",
      "He was called by the risen Christ after the resurrection and ascension",
      "He denied Christ more than Peter",
      "He replaced John in Ephesus"
    ],
    answer: 1,
    reference: "Acts 9:3-16; 1 Corinthians 15:8-10",
    verseText: "Then last of all He was seen by me also, as by one born out of due time."
  },
  {
    id: 11063,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Which apostle did Paul publicly rebuke at Antioch over withdrawing from Gentile believers?",
    choices: ["James", "Peter", "John", "Matthew"],
    answer: 1,
    reference: "Galatians 2:11-14",
    verseText: "I withstood him to his face."
  },
  {
    id: 11064,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What does the Antioch confrontation between Paul and Peter chiefly demonstrate?",
    choices: [
      "That apostles were above correction",
      "That apostolic authority did not eliminate the need for doctrinal consistency in conduct",
      "That Paul rejected Peter's gospel entirely",
      "That the church had no unity at all"
    ],
    answer: 1,
    reference: "Galatians 2:11-14",
    verseText: "They were not straightforward about the truth of the gospel."
  },
  {
    id: 11065,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "How does Paul describe James, Cephas, and John in Galatians 2?",
    choices: [
      "As false brethren",
      "As pillars",
      "As his disciples",
      "As rivals without authority"
    ],
    answer: 1,
    reference: "Galatians 2:9",
    verseText: "James, Cephas, and John, who seemed to be pillars."
  },
  {
    id: 11066,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "According to Galatians 2, what distinction in mission was recognized between Peter and Paul?",
    choices: [
      "Peter was assigned to Rome and Paul to Jerusalem",
      "Peter's ministry especially focused on the circumcision and Paul's on the Gentiles",
      "Peter preached law and Paul preached grace",
      "Peter served churches and Paul served only unbelievers"
    ],
    answer: 1,
    reference: "Galatians 2:7-9",
    verseText: "The gospel for the uncircumcised had been committed to me... for the circumcised to Peter."
  },
  {
    id: 11067,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Why is Paul's self-defense of apostleship in letters such as Galatians and 2 Corinthians important?",
    choices: [
      "It is merely personal ego",
      "It safeguards the divine authority of the gospel he preached",
      "It replaces the resurrection as evidence",
      "It proves all apostles wrote Scripture"
    ],
    answer: 1,
    reference: "Galatians 1:1, 11-12; 2 Corinthians 10-12",
    verseText: "Not from men nor through man, but through Jesus Christ."
  },
  {
    id: 11068,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What does Paul's statement that he was 'one born out of due time' emphasize about his apostleship?",
    choices: [
      "It was false and incomplete",
      "It was exceptional and late, yet still grounded in resurrection appearance and grace",
      "It was inferior to all other ministry",
      "It came from the Jerusalem council rather than Christ"
    ],
    answer: 1,
    reference: "1 Corinthians 15:8-10",
    verseText: "As by one born out of due time."
  },
  {
    id: 11069,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Which apostolic sign does Paul explicitly appeal to before the Corinthians?",
    choices: [
      "Temple service",
      "Signs, wonders, and mighty deeds",
      "Levitical descent",
      "Personal perfection"
    ],
    answer: 1,
    reference: "2 Corinthians 12:12",
    verseText: "Truly the signs of an apostle were accomplished among you."
  },
  {
    id: 11070,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What is the strongest New Testament reason for counting Paul among the apostles in a real, though distinct, sense?",
    choices: [
      "He wanted the title for influence",
      "He was directly commissioned by the risen Christ and recognized in the early church as such",
      "He replaced Judas in Acts 1",
      "He was the oldest disciple"
    ],
    answer: 1,
    reference: "Acts 9:15; Galatians 1:1; 2:7-9; 1 Corinthians 9:1-2",
    verseText: "He is a chosen vessel of Mine."
  },

  {
    id: 11071,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "Which James is most clearly presented in Acts 15 and Galatians as the leading figure in the Jerusalem church?",
    choices: ["James son of Zebedee", "James the Lord's brother", "James son of Alphaeus", "James the father of Judas"],
    answer: 1,
    reference: "Acts 15:13; Galatians 1:19",
    verseText: "But I saw none of the other apostles except James, the Lord's brother."
  },
  {
    id: 11072,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "Why is James the Lord's brother a significant figure in apostolic discussions?",
    choices: [
      "He belonged to the twelve from the beginning of Jesus' ministry",
      "He appears as a resurrection witness and recognized Jerusalem pillar despite not being one of the original twelve",
      "He wrote no authoritative material",
      "He opposed Gentile conversion"
    ],
    answer: 1,
    reference: "1 Corinthians 15:7; Galatians 1:19; 2:9",
    verseText: "After that He was seen by James."
  },
  {
    id: 11073,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "Which New Testament writer introduces himself as 'a bondservant of God and of the Lord Jesus Christ' and is traditionally linked with James the Lord's brother?",
    choices: ["Peter", "James", "Jude", "John"],
    answer: 1,
    reference: "James 1:1",
    verseText: "James, a bondservant of God and of the Lord Jesus Christ."
  },
  {
    id: 11074,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "Which New Testament writer identifies himself as 'the brother of James,' pointing away from self-promotion and toward recognized family connection?",
    choices: ["John", "Jude", "Peter", "Thomas"],
    answer: 1,
    reference: "Jude 1:1",
    verseText: "Jude... and brother of James."
  },
  {
    id: 11075,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "What does the self-description of James and Jude as bondservants of Jesus rather than simply as His natural brothers especially suggest?",
    choices: [
      "They denied family relation entirely",
      "They foreground submission to Christ's lordship over natural privilege",
      "They were unsure who Jesus was",
      "They rejected the resurrection"
    ],
    answer: 1,
    reference: "James 1:1; Jude 1:1",
    verseText: "A bondservant... of the Lord Jesus Christ."
  },

  {
    id: 11076,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle wrote of believers as 'living stones' built up a spiritual house?",
    choices: ["John", "Peter", "James", "Jude"],
    answer: 1,
    reference: "1 Peter 2:5",
    verseText: "You also, as living stones..."
  },
  {
    id: 11077,
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
    id: 11078,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle referred to himself indirectly as 'the disciple whom Jesus loved' in the Gospel traditionally attributed to him?",
    choices: ["Peter", "John", "Andrew", "James"],
    answer: 1,
    reference: "John 13:23; John 21:20-24",
    verseText: "The disciple whom Jesus loved."
  },
  {
    id: 11079,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Which apostle wrote the book of Revelation while on the island called Patmos?",
    choices: ["Peter", "John", "Paul", "Thomas"],
    answer: 1,
    reference: "Revelation 1:9",
    verseText: "I, John... was on the island that is called Patmos."
  },
  {
    id: 11080,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "What dominant emphasis especially marks John's apostolic writings?",
    choices: [
      "Temple ritual detail above all else",
      "Christ's identity, love, light, truth, and abiding life",
      "Roman law and citizenship",
      "Genealogical disputes"
    ],
    answer: 1,
    reference: "John 1:1-18; 1 John 1:1-7; 4:7-16; Revelation 1:1-8",
    verseText: "In Him was life... God is love."
  },
  {
    id: 11081,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "What dominant pastoral emphasis especially marks Peter's apostolic letters?",
    choices: [
      "Speculation about angels only",
      "Suffering, holiness, shepherding, and steadfast hope",
      "Civil rebellion as a Christian duty",
      "Detachment from Christ's resurrection"
    ],
    answer: 1,
    reference: "1 Peter 1:3-7, 13-16; 5:1-4; 2 Peter 1:12-21",
    verseText: "In this you greatly rejoice, though now for a little while, you have been grieved by various trials."
  },
  {
    id: 11082,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "How does 2 Peter 1 strengthen apostolic authority?",
    choices: [
      "By shifting authority away from eyewitness testimony",
      "By combining eyewitness experience of Christ's majesty with the sure word of prophecy",
      "By denying the Transfiguration happened",
      "By making Peter's opinions equal to pagan wisdom"
    ],
    answer: 1,
    reference: "2 Peter 1:16-21",
    verseText: "For we did not follow cunningly devised fables."
  },
  {
    id: 11083,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "Why is John's eyewitness emphasis in 1 John 1 important for apostolic doctrine?",
    choices: [
      "It bases faith on mystical feeling alone",
      "It roots Christian proclamation in real historical encounter with the incarnate Word",
      "It replaces the need for Christ's death",
      "It denies spiritual fellowship"
    ],
    answer: 1,
    reference: "1 John 1:1-3",
    verseText: "That which we have heard, which we have seen with our eyes."
  },

  {
    id: 11084,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "According to Luke 6, what preceded Jesus' formal naming of the twelve apostles?",
    choices: [
      "A public debate with the Sadducees",
      "A night of prayer to God",
      "A synagogue vote",
      "John the Baptist's approval"
    ],
    answer: 1,
    reference: "Luke 6:12-13",
    verseText: "He went out to the mountain to pray, and continued all night in prayer to God."
  },
  {
    id: 11085,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What is the core significance of the fact that Jesus 'named' the twelve apostles?",
    choices: [
      "They merely adopted a later church title",
      "Their role was constituted by Christ's own appointment and authority",
      "They were self-appointed evangelists",
      "They outranked all prophets in every age automatically"
    ],
    answer: 1,
    reference: "Luke 6:13; Mark 3:14",
    verseText: "He chose twelve, whom He also named apostles."
  },
  {
    id: 11086,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "Why is the number twelve itself symbolically important in apostolic theology?",
    choices: [
      "It corresponds to the number of Roman provinces",
      "It signals a foundational relation to the twelve tribes of Israel and covenant restoration themes",
      "It was chosen at random",
      "It was based on the number of disciples from Bethsaida"
    ],
    answer: 1,
    reference: "Matthew 19:28; Luke 22:29-30; Revelation 21:12-14",
    verseText: "You who have followed Me will also sit on twelve thrones, judging the twelve tribes of Israel."
  },
  {
    id: 11087,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What best explains why Judas had to be replaced before Pentecost in Acts 1?",
    choices: [
      "To keep a convenient round number only",
      "To restore the full apostolic witness attached to the twelve in the church's foundational moment",
      "To make room for Paul later",
      "To satisfy Roman law"
    ],
    answer: 1,
    reference: "Acts 1:15-26",
    verseText: "Let another take his office."
  },
  {
    id: 11088,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "According to Acts 1, which qualification was required for Judas's replacement?",
    choices: [
      "He had to be a Levite",
      "He had to have accompanied the disciples from John's baptism to the ascension and be a witness of the resurrection",
      "He had to be related to Jesus by blood",
      "He had to write a Gospel"
    ],
    answer: 1,
    reference: "Acts 1:21-22",
    verseText: "One of these must become a witness with us of His resurrection."
  },
  {
    id: 11089,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Acts 1 imply is central to apostolic office?",
    choices: [
      "Political influence in Jerusalem",
      "Witness to the resurrection of Christ",
      "Skill in Greek rhetoric only",
      "Temple ancestry"
    ],
    answer: 1,
    reference: "Acts 1:21-22",
    verseText: "A witness with us of His resurrection."
  },
  {
    id: 11090,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Ephesians 2 suggest about apostles in relation to the church?",
    choices: [
      "They were temporary entertainers for the early church",
      "They belong to the church's foundational stage, with Christ Himself as chief cornerstone",
      "They replaced Christ as cornerstone",
      "They mattered only to Jewish believers"
    ],
    answer: 1,
    reference: "Ephesians 2:19-20",
    verseText: "Having been built on the foundation of the apostles and prophets."
  },
  {
    id: 11091,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "According to Revelation 21, what symbolizes the foundational role of the apostles in the consummated city?",
    choices: [
      "Twelve gates named for them",
      "Twelve foundations bearing the names of the twelve apostles of the Lamb",
      "A throne for each apostle in Rome",
      "Twelve ships representing missionary journeys"
    ],
    answer: 1,
    reference: "Revelation 21:14",
    verseText: "Now the wall of the city had twelve foundations."
  },
  {
    id: 11092,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Matthew 28 assign to the apostolic band after the resurrection?",
    choices: [
      "Private contemplation only",
      "A teaching and discipling mission to all nations under Christ's universal authority",
      "Withdrawal from the nations until Israel repents",
      "Rule over Rome by force"
    ],
    answer: 1,
    reference: "Matthew 28:18-20",
    verseText: "Go therefore and make disciples of all the nations."
  },
  {
    id: 11093,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Acts 1:8 add to apostolic mission beyond Matthew 28?",
    choices: [
      "It narrows witness to Judea alone",
      "It outlines a Spirit-empowered geographic expansion from Jerusalem outward",
      "It replaces teaching with miracles only",
      "It cancels the resurrection commission"
    ],
    answer: 1,
    reference: "Acts 1:8",
    verseText: "You shall be witnesses to Me... to the end of the earth."
  },

  {
    id: 11094,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "What contrast between Peter and Judas most sharply emerges in the Passion narratives?",
    choices: [
      "One sinned and the other remained flawless",
      "Both failed seriously, but one was restored through repentance while the other went into destruction",
      "Judas repented more deeply than Peter",
      "Peter betrayed Jesus for money while Judas denied Him out of fear"
    ],
    answer: 1,
    reference: "Matthew 26:69-75; 27:3-5; Luke 22:31-32; John 21:15-19",
    verseText: "I have prayed for you, that your faith should not fail."
  },
  {
    id: 11095,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "What does John's repeated prominence at decisive moments suggest about his apostolic role?",
    choices: [
      "He was irrelevant to the Gospel story",
      "He serves as a particularly intimate eyewitness to Christ's glory, suffering, and resurrection signs",
      "He replaced Peter in every scene",
      "He was chosen because he never misunderstood Jesus"
    ],
    answer: 1,
    reference: "John 13:23; 19:26-27; 20:2-8; 21:20-24",
    verseText: "This is the disciple who testifies of these things."
  },
  {
    id: 11096,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "Why are the misunderstandings of Thomas, Philip, and Peter important in the Gospel narratives?",
    choices: [
      "They discredit the apostles completely",
      "They provide occasions for Jesus to disclose deeper truth through correction and revelation",
      "They show only John could understand Jesus",
      "They prove the apostles opposed Christ's mission from the start"
    ],
    answer: 1,
    reference: "John 14:5-9; Matthew 16:22-23; John 20:24-29",
    verseText: "Have I been with you so long, and yet you have not known Me, Philip?"
  },
  {
    id: 11097,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "What does the presence of fishermen, a tax collector, and a zeal-associated disciple among the twelve most clearly display?",
    choices: [
      "The apostles were socially uniform",
      "Christ formed His witness band from diverse and unlikely backgrounds",
      "Only political activists were useful to Christ",
      "Education had no value at all"
    ],
    answer: 1,
    reference: "Matthew 4:18-22; 9:9; Luke 6:15",
    verseText: "Whom He also named apostles."
  },
  {
    id: 11098,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "What is the best theological summary of apostolic witness in the New Testament?",
    choices: [
      "It is a later church invention detached from Jesus",
      "It is Christ-authorized, resurrection-centered, Spirit-empowered testimony foundational to the church",
      "It is mainly about preserving Jewish customs",
      "It is identical to every later ministry office in all respects"
    ],
    answer: 1,
    reference: "Acts 1:21-22; 2:32; Ephesians 2:20; Revelation 21:14",
    verseText: "This Jesus God has raised up, of which we are all witnesses."
  },
  {
    id: 11099,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "Why is the apostolic band central to the New Testament storyline rather than merely incidental?",
    choices: [
      "Because they replace Christ as saviors",
      "Because they serve as chosen witnesses through whom Christ's teaching, resurrection testimony, and church foundation are transmitted",
      "Because they all wrote equal portions of Scripture",
      "Because they never made mistakes"
    ],
    answer: 1,
    reference: "Luke 24:46-49; Acts 1:8; John 14:26; Ephesians 2:20",
    verseText: "You are witnesses of these things."
  },
  {
    id: 11100,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "Which statement best captures the New Testament portrait of the apostles?",
    choices: [
      "Naturally superior men needing little correction",
      "Weak and varied men chosen, taught, corrected, and empowered by Christ for foundational witness",
      "Political revolutionaries who misunderstood grace completely",
      "Anonymous followers with no lasting role in revelation"
    ],
    answer: 1,
    reference: "Mark 3:13-15; Luke 22:31-32; John 20:21-29; Acts 2:1-14",
    verseText: "That they might be with Him and that He might send them out."
  },

  {
    id: 11101,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is most directly associated with the statement, 'We have found Him of whom Moses in the law, and also the prophets, wrote'?",
    choices: ["Andrew", "Philip", "Thomas", "John"],
    answer: 1,
    reference: "John 1:45",
    verseText: "Philip found Nathanael."
  },
  {
    id: 11102,
    game: "Apostles",
    category: "Identity",
    difficulty: "Advanced",
    question: "Which apostle is linked with the question, 'Can anything good come out of Nazareth?' before making a strong confession of Jesus?",
    choices: ["Bartholomew/Nathanael", "Thomas", "Andrew", "Matthew"],
    answer: 0,
    reference: "John 1:46-49",
    verseText: "Can anything good come out of Nazareth?"
  },
  {
    id: 11103,
    game: "Apostles",
    category: "Calling",
    difficulty: "Advanced",
    question: "What does Jesus' call of fishermen most clearly signal about apostleship?",
    choices: [
      "Apostles must remain in prior occupations",
      "Christ transforms existing skills and contexts toward kingdom mission",
      "Only manual laborers are eligible",
      "Their trade itself made them holy"
    ],
    answer: 1,
    reference: "Matthew 4:19",
    verseText: "I will make you fishers of men."
  },
  {
    id: 11104,
    game: "Apostles",
    category: "Lists and Identity",
    difficulty: "Advanced",
    question: "What is the most careful conclusion from the order variations in apostolic lists?",
    choices: [
      "The lists are historically unreliable",
      "The identity core is stable even when arrangement details vary",
      "Different churches invented different apostles",
      "Acts rejects the Gospel traditions"
    ],
    answer: 1,
    reference: "Matthew 10:2-4; Mark 3:16-19; Luke 6:14-16; Acts 1:13",
    verseText: "Whom He also named apostles."
  },
  {
    id: 11105,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostolic pattern is especially visible in Andrew's appearances in John's Gospel?",
    choices: [
      "Doctrinal controversy only",
      "Quiet but strategic introduction of people and needs to Jesus",
      "Miracle-working leadership over the twelve",
      "Withdrawal from public ministry"
    ],
    answer: 1,
    reference: "John 1:41-42; John 6:8-9; John 12:22",
    verseText: "Andrew... brought him to Jesus."
  },
  {
    id: 11106,
    game: "Apostles",
    category: "Ministry",
    difficulty: "Advanced",
    question: "Which apostle's question at the Last Supper leads directly to Jesus' self-identification as 'the way, the truth, and the life'?",
    choices: ["Thomas", "Philip", "Peter", "John"],
    answer: 0,
    reference: "John 14:5-6",
    verseText: "Thomas said to Him... Jesus said to him, 'I am the way.'"
  },
  {
    id: 11107,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "What does the beloved disciple's nearness to Jesus at supper most strongly underscore in John's narrative?",
    choices: [
      "Institutional superiority over Peter",
      "Intimacy of witness to decisive revelation",
      "Replacement of the other apostles",
      "Secret knowledge unavailable to the church"
    ],
    answer: 1,
    reference: "John 13:23-26",
    verseText: "Leaning on Jesus' bosom."
  },
  {
    id: 11108,
    game: "Apostles",
    category: "Last Supper and Passion",
    difficulty: "Advanced",
    question: "Which apostle's overconfident promise is explicitly juxtaposed with Christ's prediction of imminent denial?",
    choices: ["Peter", "Thomas", "Philip", "Andrew"],
    answer: 0,
    reference: "John 13:36-38",
    verseText: "Will you lay down your life for My sake?"
  },
  {
    id: 11109,
    game: "Apostles",
    category: "Post-Resurrection",
    difficulty: "Advanced",
    question: "What does the requirement of resurrection witness in Acts 1 imply about apostolic foundation?",
    choices: [
      "Apostleship is mainly administrative",
      "Apostolic office is inseparable from testimony to the risen Christ",
      "Any sincere believer could replace Judas without qualification",
      "Miracles alone define apostleship"
    ],
    answer: 1,
    reference: "Acts 1:21-22",
    verseText: "A witness with us of His resurrection."
  },
  {
    id: 11110,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Which two apostles are especially paired in the early Jerusalem chapters as public witnesses before temple and council?",
    choices: ["Peter and John", "Andrew and Philip", "James and Matthew", "Thomas and Bartholomew"],
    answer: 0,
    reference: "Acts 3:1; Acts 4:13; Acts 8:14",
    verseText: "Peter and John."
  },
  {
    id: 11111,
    game: "Apostles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Why is Peter's role in Acts 10 and Acts 15 especially significant?",
    choices: [
      "He abolishes all prior revelation",
      "He becomes the key bridge in recognizing Gentile inclusion without circumcision",
      "He withdraws from mission entirely",
      "He replaces Paul among the Gentiles"
    ],
    answer: 1,
    reference: "Acts 10:34-48; Acts 15:7-11",
    verseText: "God made no distinction between us and them."
  },
  {
    id: 11112,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "Which phrase best captures Paul's own view of the source of his apostleship?",
    choices: [
      "By church consensus alone",
      "Not from men nor through man, but through Jesus Christ",
      "Through inherited rabbinic authority",
      "By appointment from Peter"
    ],
    answer: 1,
    reference: "Galatians 1:1",
    verseText: "Not from men nor through man, but through Jesus Christ."
  },
  {
    id: 11113,
    game: "Apostles",
    category: "Paul",
    difficulty: "Advanced",
    question: "What does Paul's reception by recognized pillars in Galatians 2 chiefly indicate?",
    choices: [
      "His gospel required later correction",
      "His apostleship and mission were acknowledged within early church leadership",
      "He submitted his message as uncertain speculation",
      "He became subordinate to Barnabas"
    ],
    answer: 1,
    reference: "Galatians 2:7-9",
    verseText: "They gave me and Barnabas the right hand of fellowship."
  },
  {
    id: 11114,
    game: "Apostles",
    category: "James and Jude",
    difficulty: "Advanced",
    question: "What is the strongest inference from 1 Corinthians 15:7 regarding James the Lord's brother?",
    choices: [
      "He remained an unbeliever after the resurrection",
      "A resurrection appearance to James likely helped ground his later authority",
      "He replaced Peter immediately",
      "He wrote before conversion"
    ],
    answer: 1,
    reference: "1 Corinthians 15:7",
    verseText: "After that He was seen by James."
  },
  {
    id: 11115,
    game: "Apostles",
    category: "Writings",
    difficulty: "Advanced",
    question: "What especially distinguishes John's apostolic contribution from Peter's?",
    choices: [
      "John ignores Christ's identity while Peter emphasizes it",
      "John often develops deeper reflective theology of Christ's person, while Peter strongly stresses suffering and shepherding",
      "John rejects eyewitness grounding",
      "Peter writes only narrative and not exhortation"
    ],
    answer: 1,
    reference: "John 1:1-18; 1 Peter 1:3-7; 5:1-4",
    verseText: "In the beginning was the Word... Shepherd the flock of God."
  },
  {
    id: 11116,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Revelation 21 imply by naming twelve apostolic foundations and twelve tribal gates together?",
    choices: [
      "The New Jerusalem ignores Israel entirely",
      "Apostolic witness stands in covenant continuity with Israel's restored people",
      "The apostles replace all Old Testament revelation",
      "The city is symbolic only of Rome"
    ],
    answer: 1,
    reference: "Revelation 21:12-14",
    verseText: "The names of the twelve apostles of the Lamb."
  },
  {
    id: 11117,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "What is the most balanced reading of apostolic weakness in the Gospels?",
    choices: [
      "Weakness nullifies all authority",
      "Weakness becomes the context in which Christ teaches, corrects, and later empowers them",
      "Weakness is irrelevant to discipleship",
      "Only Judas was weak"
    ],
    answer: 1,
    reference: "Matthew 16:22-23; John 14:5-9; John 20:24-29; Acts 2:1-14",
    verseText: "That they might be with Him and that He might send them out."
  },
  {
    id: 11118,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "Why is it significant that the apostles are both chosen and sent?",
    choices: [
      "It separates discipleship from mission",
      "It unites communion with Christ and commission from Christ",
      "It means they acted independently of Jesus",
      "It limits them to local ministry only"
    ],
    answer: 1,
    reference: "Mark 3:14",
    verseText: "That they might be with Him and that He might send them out."
  },
  {
    id: 11119,
    game: "Apostles",
    category: "Authority and Mission",
    difficulty: "Advanced",
    question: "What does Luke 24 most strongly connect to apostolic mission before Acts begins?",
    choices: [
      "Political restoration of Israel only",
      "Repentance and remission of sins preached in Christ's name beginning at Jerusalem",
      "Withdrawal until persecution ends",
      "Temple rituals as the church's primary task"
    ],
    answer: 1,
    reference: "Luke 24:46-49",
    verseText: "Repentance and remission of sins should be preached in His name."
  },
  {
    id: 11120,
    game: "Apostles",
    category: "Character and Theology",
    difficulty: "Advanced",
    question: "Which statement best completes the New Testament picture of the apostles: they are not merely followers, but...",
    choices: [
      "private mystics detached from history",
      "public, commissioned witnesses through whom Christ's foundational testimony reaches the church",
      "temporary helpers without theological importance",
      "leaders whose authority replaces Scripture"
    ],
    answer: 1,
    reference: "Acts 1:8; Acts 2:32; Ephesians 2:20",
    verseText: "Of which we are all witnesses."
  }

];

if (typeof window !== "undefined") {
  window.apostlesQuestions = apostlesQuestions;
}
