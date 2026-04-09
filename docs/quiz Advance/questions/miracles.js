const miraclesQuestions = [
  {
    id: 3001,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "At Cana, what did Jesus turn into wine?",
    choices: ["Oil", "Milk", "Water", "Juice"],
    answer: 2,
    reference: "John 2:1-11",
    verseText: "Jesus saith unto them, Fill the waterpots with water..."
  },
  {
    id: 3002,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "How many waterpots were used at the wedding in Cana?",
    choices: ["Three", "Four", "Six", "Seven"],
    answer: 2,
    reference: "John 2:6",
    verseText: "There were set there six waterpots of stone..."
  },
  {
    id: 3003,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "What did Jesus multiply to feed the five thousand?",
    choices: [
      "Five loaves and two fishes",
      "Seven loaves and a few fishes",
      "Ten loaves and five fishes",
      "Three loaves and two fishes"
    ],
    answer: 0,
    reference: "Matthew 14:17-21",
    verseText: "We have here but five loaves, and two fishes."
  },
  {
    id: 3004,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "After feeding the five thousand, how many baskets of fragments remained?",
    choices: ["Seven", "Ten", "Twelve", "Fourteen"],
    answer: 2,
    reference: "Matthew 14:20",
    verseText: "They took up of the fragments that remained twelve baskets full."
  },
  {
    id: 3005,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "In the feeding of the four thousand, how many loaves were initially available?",
    choices: ["Five", "Six", "Seven", "Eight"],
    answer: 2,
    reference: "Matthew 15:34",
    verseText: "Jesus saith unto them, How many loaves have ye? And they said, Seven..."
  },
  {
    id: 3006,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "After feeding the four thousand, how many baskets remained?",
    choices: ["Five", "Seven", "Ten", "Twelve"],
    answer: 1,
    reference: "Matthew 15:37",
    verseText: "They took up of the broken meat that was left seven baskets full."
  },
  {
    id: 3007,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "What natural force did Jesus rebuke, saying, 'Peace, be still'?",
    choices: ["Earthquake", "Storm", "Fire", "Flood"],
    answer: 1,
    reference: "Mark 4:39",
    verseText: "He arose, and rebuked the wind..."
  },
  {
    id: 3008,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "On what did Jesus walk when He came to the disciples during the storm?",
    choices: ["Sand", "Clouds", "Water", "Waves of fire"],
    answer: 2,
    reference: "Matthew 14:25",
    verseText: "Jesus went unto them, walking on the sea."
  },
  {
    id: 3009,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "Which disciple also walked on the water briefly?",
    choices: ["John", "Peter", "James", "Andrew"],
    answer: 1,
    reference: "Matthew 14:28-29",
    verseText: "And Peter answered him..."
  },
  {
    id: 3010,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "What happened to the fig tree that Jesus cursed?",
    choices: [
      "It bore fruit immediately",
      "It withered away",
      "It grew larger",
      "It was struck by lightning"
    ],
    answer: 1,
    reference: "Matthew 21:19",
    verseText: "Presently the fig tree withered away."
  },
  {
    id: 3011,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What was the condition of the man lowered through the roof to Jesus?",
    choices: ["Blind", "Lame", "Paralyzed", "Deaf"],
    answer: 2,
    reference: "Mark 2:3-12",
    verseText: "They come unto him, bringing one sick of the palsy..."
  },
  {
    id: 3012,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Jesus say to the paralyzed man before healing him?",
    choices: [
      "Rise and walk",
      "Take up thy bed",
      "Thy sins be forgiven thee",
      "Be thou clean"
    ],
    answer: 2,
    reference: "Mark 2:5",
    verseText: "Son, thy sins be forgiven thee."
  },
  {
    id: 3013,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What condition did the woman have who touched Jesus' garment and was healed?",
    choices: ["Blindness", "Issue of blood", "Leprosy", "Deafness"],
    answer: 1,
    reference: "Mark 5:25-29",
    verseText: "A certain woman, which had an issue of blood twelve years..."
  },
  {
    id: 3014,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "How long had the woman with the issue of blood suffered?",
    choices: ["Seven years", "Ten years", "Twelve years", "Fifteen years"],
    answer: 2,
    reference: "Mark 5:25",
    verseText: "Twelve years..."
  },
  {
    id: 3015,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Jesus perceive had gone out from Him when the woman touched Him?",
    choices: ["Light", "Virtue", "Spirit", "Heat"],
    answer: 1,
    reference: "Mark 5:30",
    verseText: "Jesus... perceived that virtue had gone out of him..."
  },
  {
    id: 3016,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Jesus put on the blind man's eyes in one instance of healing?",
    choices: ["Oil", "Clay made with spittle", "Water only", "Dust"],
    answer: 1,
    reference: "John 9:6",
    verseText: "He spat on the ground, and made clay..."
  },
  {
    id: 3017,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "Where was the blind man told to wash after Jesus applied clay?",
    choices: ["Bethesda", "Jordan", "Siloam", "Kidron"],
    answer: 2,
    reference: "John 9:7",
    verseText: "Go, wash in the pool of Siloam..."
  },
  {
    id: 3018,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "How many lepers were cleansed by Jesus, yet only one returned to give thanks?",
    choices: ["Five", "Ten", "Twelve", "Seven"],
    answer: 1,
    reference: "Luke 17:12-17",
    verseText: "Ten men that were lepers..."
  },
  {
    id: 3019,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "From what region was the thankful leper who returned?",
    choices: ["Galilee", "Judea", "Samaria", "Decapolis"],
    answer: 2,
    reference: "Luke 17:16",
    verseText: "And he was a Samaritan."
  },
  {
    id: 3020,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What was restored by Jesus after Peter cut it off in Gethsemane?",
    choices: ["Finger", "Ear", "Hand", "Eye"],
    answer: 1,
    reference: "Luke 22:50-51",
    verseText: "He touched his ear, and healed him."
  },
  {
    id: 3021,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What type of spirit did Jesus cast out of the man in the synagogue at Capernaum?",
    choices: ["Mute spirit", "Unclean spirit", "Blind spirit", "Deaf spirit"],
    answer: 1,
    reference: "Mark 1:23-26",
    verseText: "There was in their synagogue a man with an unclean spirit..."
  },
  {
    id: 3022,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "How many demons identified themselves as 'Legion' when Jesus confronted them?",
    choices: ["About 100", "About 1,000", "Many", "Exactly 12"],
    answer: 2,
    reference: "Mark 5:9",
    verseText: "My name is Legion: for we are many."
  },
  {
    id: 3023,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "Into what did the demons enter after being cast out of the possessed man?",
    choices: ["Goats", "Sheep", "Swine", "Cattle"],
    answer: 2,
    reference: "Mark 5:12-13",
    verseText: "Send us into the swine..."
  },
  {
    id: 3024,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What happened to the herd of swine after the demons entered them?",
    choices: [
      "They scattered",
      "They lay down",
      "They ran into the sea",
      "They returned to the owners"
    ],
    answer: 2,
    reference: "Mark 5:13",
    verseText: "The herd ran violently down a steep place into the sea..."
  },
  {
    id: 3025,
    game: "Miracles",
    category: "Raising the Dead",
    difficulty: "Advanced",
    question: "Whose daughter did Jesus raise from the dead saying, 'Talitha cumi'?",
    choices: ["Widow of Nain", "Jairus", "Martha", "Mary"],
    answer: 1,
    reference: "Mark 5:41",
    verseText: "Talitha cumi..."
  },
  {
    id: 3026,
    game: "Miracles",
    category: "Raising the Dead",
    difficulty: "Advanced",
    question: "How old was Jairus's daughter when she was raised?",
    choices: ["10", "12", "14", "16"],
    answer: 1,
    reference: "Mark 5:42",
    verseText: "The damsel was of the age of twelve years."
  },
  {
    id: 3027,
    game: "Miracles",
    category: "Raising the Dead",
    difficulty: "Advanced",
    question: "Whose son did Jesus raise at Nain?",
    choices: ["Centurion", "Widow", "Pharisee", "Samaritan"],
    answer: 1,
    reference: "Luke 7:12-15",
    verseText: "A dead man was carried out, the only son of his mother, and she was a widow..."
  },
  {
    id: 3028,
    game: "Miracles",
    category: "Raising the Dead",
    difficulty: "Advanced",
    question: "How long had Lazarus been in the grave before Jesus raised him?",
    choices: ["Two days", "Three days", "Four days", "Seven days"],
    answer: 2,
    reference: "John 11:17",
    verseText: "He had lain in the grave four days already."
  },
  {
    id: 3029,
    game: "Miracles",
    category: "Raising the Dead",
    difficulty: "Advanced",
    question: "What did Jesus cry with a loud voice before Lazarus came forth?",
    choices: [
      "Rise up",
      "Come forth",
      "Awake",
      "Be healed"
    ],
    answer: 1,
    reference: "John 11:43",
    verseText: "Lazarus, come forth."
  },
  {
    id: 3030,
    game: "Miracles",
    category: "Provision",
    difficulty: "Advanced",
    question: "Where did Peter find the coin to pay the temple tax?",
    choices: ["In a bag", "In a tree", "In a fish's mouth", "In the boat"],
    answer: 2,
    reference: "Matthew 17:27",
    verseText: "Take up the fish... thou shalt find a piece of money..."
  },
  {
    id: 3031,
    game: "Miracles",
    category: "Provision",
    difficulty: "Advanced",
    question: "What happened when Peter cast his net after Jesus instructed him following a fruitless night?",
    choices: [
      "Nothing",
      "The net broke with many fish",
      "Few fish were caught",
      "The boat sank immediately"
    ],
    answer: 1,
    reference: "Luke 5:6",
    verseText: "They inclosed a great multitude of fishes: and their net brake."
  },
  {
    id: 3032,
    game: "Miracles",
    category: "Provision",
    difficulty: "Advanced",
    question: "After the resurrection, how many fish were caught in the miraculous catch recorded in John 21?",
    choices: ["120", "144", "153", "200"],
    answer: 2,
    reference: "John 21:11",
    verseText: "An hundred and fifty and three..."
  },
  {
    id: 3033,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What condition did Bartimaeus have before Jesus healed him?",
    choices: ["Deaf", "Blind", "Lame", "Mute"],
    answer: 1,
    reference: "Mark 10:46-52",
    verseText: "Blind Bartimaeus..."
  },
  {
    id: 3034,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Bartimaeus cry out to Jesus?",
    choices: [
      "Lord, help me",
      "Jesus, thou Son of David, have mercy on me",
      "Heal me, Lord",
      "Save me now"
    ],
    answer: 1,
    reference: "Mark 10:47",
    verseText: "Jesus, thou Son of David, have mercy on me."
  },
  {
    id: 3035,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What was unusual about the healing of the blind man at Bethsaida?",
    choices: [
      "It required two stages",
      "It involved oil",
      "It required prayer",
      "It was done at night"
    ],
    answer: 0,
    reference: "Mark 8:22-25",
    verseText: "He looked up, and said, I see men as trees..."
  },
  {
    id: 3036,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Jesus say made the woman whole who touched His garment?",
    choices: ["Her persistence", "Her faith", "Her sacrifice", "Her humility"],
    answer: 1,
    reference: "Mark 5:34",
    verseText: "Daughter, thy faith hath made thee whole..."
  },
  {
    id: 3037,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What did Jesus command the unclean spirit in the boy with seizures to do?",
    choices: [
      "Be silent and depart",
      "Come out and enter no more",
      "Leave immediately",
      "Be gone forever"
    ],
    answer: 1,
    reference: "Mark 9:25",
    verseText: "Come out of him, and enter no more into him."
  },
  {
    id: 3038,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What phrase did Jesus say often when casting out demons that emphasized His authority?",
    choices: [
      "Depart from him",
      "Hold thy peace",
      "Be thou clean",
      "Go thy way"
    ],
    answer: 1,
    reference: "Mark 1:25",
    verseText: "Hold thy peace, and come out of him."
  },
  {
    id: 3039,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "What happened immediately when Jesus entered the boat after walking on water?",
    choices: [
      "The boat sank",
      "The wind ceased",
      "The disciples fled",
      "Rain began"
    ],
    answer: 1,
    reference: "Matthew 14:32",
    verseText: "The wind ceased."
  },
  {
    id: 3040,
    game: "Miracles",
    category: "Nature",
    difficulty: "Advanced",
    question: "What did the disciples say after Jesus calmed the storm, showing their astonishment?",
    choices: [
      "This is a prophet",
      "Truly this is the Son of God",
      "What manner of man is this",
      "Surely he is king"
    ],
    answer: 2,
    reference: "Mark 4:41",
    verseText: "What manner of man is this..."
  },
  {
    id: 3041,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What ailment did the centurion's servant suffer from before being healed?",
    choices: ["Blindness", "Paralysis", "Fever", "Leprosy"],
    answer: 1,
    reference: "Matthew 8:6",
    verseText: "My servant lieth at home sick of the palsy..."
  },
  {
    id: 3042,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What did Jesus marvel at in relation to the centurion?",
    choices: ["His wealth", "His authority", "His faith", "His humility"],
    answer: 2,
    reference: "Matthew 8:10",
    verseText: "I have not found so great faith..."
  },
  {
    id: 3043,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "Who was raised from the dead by Peter in Acts?",
    choices: ["Lydia", "Tabitha (Dorcas)", "Priscilla", "Phoebe"],
    answer: 1,
    reference: "Acts 9:36-41",
    verseText: "Tabitha... was full of good works..."
  },
  {
    id: 3044,
    game: "Miracles",
    category: "Healing",
    difficulty: "Advanced",
    question: "What happened to Eutychus after falling from the window during Paul's preaching?",
    choices: [
      "He was injured",
      "He died and was raised",
      "He recovered immediately",
      "He fled"
    ],
    answer: 1,
    reference: "Acts 20:9-12",
    verseText: "Taken up dead... Paul went down... and said... his life is in him."
  },
  {
    id: 3045,
    game: "Miracles",
    category: "Acts",
    difficulty: "Advanced",
    question: "What unusual items were used to heal the sick through Paul's ministry?",
    choices: [
      "Oil and water",
      "Handkerchiefs and aprons",
      "Staffs",
      "Sandals"
    ],
    answer: 1,
    reference: "Acts 19:11-12",
    verseText: "From his body were brought unto the sick handkerchiefs or aprons..."
  },
  {
    id: 3046,
    game: "Miracles",
    category: "Acts",
    difficulty: "Advanced",
    question: "What happened to the viper that fastened on Paul's hand on Malta?",
    choices: [
      "It killed him",
      "He shook it off unharmed",
      "He fainted",
      "He was paralyzed"
    ],
    answer: 1,
    reference: "Acts 28:3-5",
    verseText: "He shook off the beast into the fire, and felt no harm."
  },
  {
    id: 3047,
    game: "Miracles",
    category: "Acts",
    difficulty: "Advanced",
    question: "Whose father did Paul heal of fever and dysentery on Malta?",
    choices: ["Publius", "Julius", "Felix", "Festus"],
    answer: 0,
    reference: "Acts 28:7-8",
    verseText: "The father of Publius lay sick of a fever..."
  },
  {
    id: 3048,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What did Jesus command the leper after healing him?",
    choices: [
      "Tell everyone",
      "Show thyself to the priest",
      "Return home immediately",
      "Follow me"
    ],
    answer: 1,
    reference: "Matthew 8:4",
    verseText: "Go thy way, shew thyself to the priest..."
  },
  {
    id: 3049,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What did Jesus say to the man with the withered hand before healing him?",
    choices: [
      "Stretch forth thine hand",
      "Be thou whole",
      "Rise up",
      "Come forward"
    ],
    answer: 0,
    reference: "Matthew 12:13",
    verseText: "Stretch forth thine hand..."
  },
  {
    id: 3050,
    game: "Miracles",
    category: "Authority",
    difficulty: "Advanced",
    question: "What phrase did Jesus use when raising Jairus's daughter?",
    choices: [
      "Talitha cumi",
      "Ephphatha",
      "Eloi, Eloi",
      "Hosanna"
    ],
    answer: 0,
    reference: "Mark 5:41",
    verseText: "Talitha cumi..."
  }
];

if (typeof window !== "undefined") {
  window.miraclesQuestions = miraclesQuestions;
}