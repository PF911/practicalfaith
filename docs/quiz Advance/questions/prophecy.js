const prophecyQuestions = [
  {
    id: 13001,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "What is the central meaning of the 'new covenant' promised in Jeremiah 31?",
    choices: [
      "A new temple system only",
      "The law written internally with true covenant knowledge and forgiveness",
      "A rejection of Israel's history",
      "A merely political alliance"
    ],
    answer: 1,
    reference: "Jeremiah 31:31-34",
    verseText: "I will put my law in their inward parts, and write it in their hearts."
  },
  {
    id: 13002,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What is the force of Isaiah's vision of the Lord in Isaiah 6 for his prophetic mission?",
    choices: [
      "It makes Isaiah confident in his own purity",
      "It reveals divine holiness, exposes human uncleanness, and commissions him for a hard ministry",
      "It teaches that temple worship has ended",
      "It announces immediate national restoration"
    ],
    answer: 1,
    reference: "Isaiah 6:1-13",
    verseText: "Woe is me! for I am undone; because I am a man of unclean lips."
  },
  {
    id: 13003,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "In its original context, what does the Immanuel sign in Isaiah 7 chiefly signal?",
    choices: [
      "God's presence with the house of David amid political threat",
      "The immediate fall of Rome",
      "The abolition of prophecy",
      "The superiority of Assyria"
    ],
    answer: 0,
    reference: "Isaiah 7:10-17",
    verseText: "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel."
  },
  {
    id: 13004,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "Why is the child in Isaiah 9 described with exalted titles like 'Mighty God' and 'Prince of Peace'?",
    choices: [
      "To reduce the promise to poetic exaggeration only",
      "To portray a royal figure whose reign embodies divine authority and lasting peace",
      "To refer only to Hezekiah's tax policy",
      "To deny Davidic kingship"
    ],
    answer: 1,
    reference: "Isaiah 9:6-7",
    verseText: "His name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace."
  },
  {
    id: 13005,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What does the 'Branch' from Jesse in Isaiah 11 signify?",
    choices: [
      "The end of Davidic expectation",
      "Renewed Davidic hope arising after judgment and apparent ruin",
      "A Levitical priest replacing all kingship",
      "Agricultural prosperity only"
    ],
    answer: 1,
    reference: "Isaiah 11:1-5",
    verseText: "There shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of his roots."
  },
  {
    id: 13006,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "Why is Isaiah 40's call to 'comfort' so theologically important?",
    choices: [
      "It cancels God's holiness",
      "It announces that judgment is not God's final word for His people",
      "It denies exile ever happened",
      "It abolishes repentance"
    ],
    answer: 1,
    reference: "Isaiah 40:1-5",
    verseText: "Comfort ye, comfort ye my people, saith your God."
  },
  {
    id: 13007,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What is central to the Servant's work in Isaiah 53?",
    choices: [
      "Political revolt against Babylon",
      "Substitutionary suffering connected with bearing the sins of others",
      "Temple construction",
      "Military triumph without suffering"
    ],
    answer: 1,
    reference: "Isaiah 52:13-53:12",
    verseText: "He was wounded for our transgressions, he was bruised for our iniquities."
  },
  {
    id: 13008,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "Why is Jeremiah's temple sermon such a major prophetic confrontation?",
    choices: [
      "It teaches the temple guarantees safety regardless of conduct",
      "It declares that sacred institutions cannot protect a rebellious people from judgment",
      "It opposes prayer itself",
      "It denies Jerusalem's significance"
    ],
    answer: 1,
    reference: "Jeremiah 7:1-15",
    verseText: "Trust ye not in lying words, saying, The temple of the LORD."
  },
  {
    id: 13009,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "What does Jeremiah's purchase of a field during siege symbolize?",
    choices: [
      "Confidence in Babylonian economics",
      "Future restoration beyond present judgment",
      "The irrelevance of land promises",
      "His desire for personal wealth"
    ],
    answer: 1,
    reference: "Jeremiah 32:6-15",
    verseText: "Houses and fields and vineyards shall be possessed again in this land."
  },
  {
    id: 13010,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "Why are false prophets so strongly denounced in Jeremiah?",
    choices: [
      "Because they were poor speakers",
      "Because they proclaimed peace while ignoring sin, judgment, and the true word of the LORD",
      "Because prophecy had ended",
      "Because they served in the temple"
    ],
    answer: 1,
    reference: "Jeremiah 6:13-14; Jeremiah 23:16-22",
    verseText: "They have healed also the hurt of the daughter of my people slightly, saying, Peace, peace; when there is no peace."
  },
  {
    id: 13011,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "What is the significance of Ezekiel eating the scroll?",
    choices: [
      "Prophetic word must be internalized before it is proclaimed",
      "The prophet needed food in exile",
      "Prophecy is mostly symbolic and nonverbal",
      "The scroll replaced covenant law"
    ],
    answer: 0,
    reference: "Ezekiel 2:8-3:3",
    verseText: "Son of man, eat that thou findest; eat this roll, and go speak unto the house of Israel."
  },
  {
    id: 13012,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "Why is Ezekiel called a watchman?",
    choices: [
      "He controls the timing of judgment",
      "He is responsible to warn, while hearers remain responsible for their response",
      "He replaces the priesthood permanently",
      "He predicts weather patterns"
    ],
    answer: 1,
    reference: "Ezekiel 3:16-21; Ezekiel 33:1-9",
    verseText: "I have made thee a watchman unto the house of Israel."
  },
  {
    id: 13013,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "What does the departure of God's glory from the temple in Ezekiel signify?",
    choices: [
      "God was defeated by foreign gods",
      "Judgment had reached the point that the defiled sanctuary no longer hosted His presence",
      "The temple had never mattered",
      "Exile would be brief and harmless"
    ],
    answer: 1,
    reference: "Ezekiel 10-11",
    verseText: "Then the glory of the LORD departed from off the threshold of the house."
  },
  {
    id: 13014,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "Why is the valley of dry bones prophecy so powerful in context?",
    choices: [
      "It is merely about physical anatomy",
      "It portrays Israel's hopeless condition reversed by God's life-giving word and Spirit",
      "It predicts military reform only",
      "It denies exile ever occurred"
    ],
    answer: 1,
    reference: "Ezekiel 37:1-14",
    verseText: "These bones are the whole house of Israel."
  },
  {
    id: 13015,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "What is the main significance of the promise of a new heart and spirit in Ezekiel 36?",
    choices: [
      "External law was always enough",
      "True covenant renewal requires inward transformation granted by God",
      "Repentance is unnecessary",
      "Only prophets receive spiritual renewal"
    ],
    answer: 1,
    reference: "Ezekiel 36:25-27",
    verseText: "A new heart also will I give you, and a new spirit will I put within you."
  },
  {
    id: 13016,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What is the message of Nebuchadnezzar's dream in Daniel 2?",
    choices: [
      "Babylon will reign forever",
      "Human empires are temporary, but God's kingdom will ultimately prevail",
      "Israel should trust political alliances",
      "Prophecy concerns economics only"
    ],
    answer: 1,
    reference: "Daniel 2:31-45",
    verseText: "The God of heaven shall set up a kingdom, which shall never be destroyed."
  },
  {
    id: 13017,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "Why is Daniel's prayer in chapter 9 so important?",
    choices: [
      "He denies Israel's guilt",
      "He reads prior prophecy, confesses covenant sin, and pleads for mercy",
      "He seeks personal advancement in Babylon",
      "He asks for a new temple religion"
    ],
    answer: 1,
    reference: "Daniel 9:2-19",
    verseText: "We have sinned, and have committed iniquity."
  },
  {
    id: 13018,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "In Daniel 7, what is the significance of 'one like the Son of man' receiving dominion?",
    choices: [
      "A beastly kingdom wins in the end",
      "Human-looking kingdom authority is vindicated and granted everlasting rule by God",
      "Daniel becomes king of Babylon",
      "The vision denies resurrection hope"
    ],
    answer: 1,
    reference: "Daniel 7:13-14",
    verseText: "There was given him dominion, and glory, and a kingdom."
  },
  {
    id: 13019,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Hosea",
    difficulty: "Advanced",
    question: "What does Hosea's marriage primarily symbolize?",
    choices: [
      "Domestic life detached from theology",
      "The LORD's covenant love toward an unfaithful people",
      "The superiority of the northern kingdom",
      "The end of prophetic ministry"
    ],
    answer: 1,
    reference: "Hosea 1-3",
    verseText: "The land hath committed great whoredom, departing from the LORD."
  },
  {
    id: 13020,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Joel",
    difficulty: "Advanced",
    question: "What is the significance of the Spirit promise in Joel 2?",
    choices: [
      "It limits divine activity to kings",
      "It anticipates a broad outpouring beyond traditional status boundaries",
      "It abolishes repentance",
      "It refers only to agriculture"
    ],
    answer: 1,
    reference: "Joel 2:28-32",
    verseText: "I will pour out my spirit upon all flesh."
  },
  {
    id: 13021,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Amos",
    difficulty: "Advanced",
    question: "What is Amos condemning when he denounces empty worship?",
    choices: [
      "Music as such",
      "Religious ritual divorced from justice and righteousness",
      "All feast days in themselves",
      "The reading of Moses"
    ],
    answer: 1,
    reference: "Amos 5:21-24",
    verseText: "Let judgment run down as waters, and righteousness as a mighty stream."
  },
  {
    id: 13022,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Obadiah",
    difficulty: "Advanced",
    question: "What is the central sin condemned in Obadiah?",
    choices: [
      "Weak architecture",
      "Proud betrayal and violence against brother Jacob",
      "Improper sacrifice",
      "Neglect of Sabbath only"
    ],
    answer: 1,
    reference: "Obadiah 10-14",
    verseText: "For thy violence against thy brother Jacob shame shall cover thee."
  },
  {
    id: 13023,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jonah",
    difficulty: "Advanced",
    question: "Why is Jonah angry after Nineveh repents?",
    choices: [
      "He wanted clearer instructions",
      "He resents God's mercy toward enemies despite having received mercy himself",
      "He doubted Nineveh existed",
      "He feared the fish would return"
    ],
    answer: 1,
    reference: "Jonah 4:1-4",
    verseText: "I knew that thou art a gracious God, and merciful."
  },
  {
    id: 13024,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Micah",
    difficulty: "Advanced",
    question: "What does Micah 6:8 summarize?",
    choices: [
      "A replacement of covenant obedience with philosophy",
      "God's demand for justice, mercy, and humble walking with Him rather than empty ritualism",
      "The end of all sacrifice immediately",
      "The law condensed into political reform"
    ],
    answer: 1,
    reference: "Micah 6:6-8",
    verseText: "What doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"
  },
  {
    id: 13025,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Micah",
    difficulty: "Advanced",
    question: "Why is Bethlehem named in Micah 5 significant?",
    choices: [
      "It denies Jerusalem's history",
      "It signals that a ruler of Davidic significance will arise from humble origins",
      "It identifies the future temple site",
      "It concerns census records only"
    ],
    answer: 1,
    reference: "Micah 5:2",
    verseText: "Out of thee shall he come forth unto me that is to be ruler in Israel."
  },
  {
    id: 13026,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Nahum",
    difficulty: "Advanced",
    question: "Why is Nineveh's fall in Nahum more than national revenge literature?",
    choices: [
      "It displays the LORD's justice against violent imperial arrogance",
      "It proves Judah was sinless",
      "It removes all mercy from God's character",
      "It is only poetry with no theology"
    ],
    answer: 0,
    reference: "Nahum 1:2-8; Nahum 3:1-7",
    verseText: "The LORD is slow to anger, and great in power, and will not at all acquit the wicked."
  },
  {
    id: 13027,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Habakkuk",
    difficulty: "Advanced",
    question: "What truth anchors Habakkuk's faith amid confusion?",
    choices: [
      "Judgment never comes",
      "The just shall live by faith while waiting for God's appointed justice",
      "Babylon will repent immediately",
      "Questions are forbidden in prayer"
    ],
    answer: 1,
    reference: "Habakkuk 2:4; Habakkuk 3:17-19",
    verseText: "The just shall live by his faith."
  },
  {
    id: 13028,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zephaniah",
    difficulty: "Advanced",
    question: "What is the Day of the LORD in Zephaniah primarily portrayed as?",
    choices: [
      "A purely joyful national festival",
      "A day of sweeping judgment that also opens hope for the humble remnant",
      "A Roman political reform",
      "The annual Day of Atonement"
    ],
    answer: 1,
    reference: "Zephaniah 1:14-18; Zephaniah 3:12-17",
    verseText: "The great day of the LORD is near."
  },
  {
    id: 13029,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Haggai",
    difficulty: "Advanced",
    question: "What does Haggai confront when he says, 'Consider your ways'?",
    choices: [
      "They had rebuilt the temple too quickly",
      "The returned exiles prioritized personal comfort while neglecting the house of the LORD",
      "They prayed too much",
      "They had become militaristic"
    ],
    answer: 1,
    reference: "Haggai 1:2-11",
    verseText: "Is it time for you, O ye, to dwell in your cieled houses, and this house lie waste?"
  },
  {
    id: 13030,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Haggai",
    difficulty: "Advanced",
    question: "Why is the promise 'I am with you' central in Haggai?",
    choices: [
      "It makes labor unnecessary",
      "It grounds weak post-exilic obedience in divine presence rather than visible splendor",
      "It abolishes the temple project",
      "It proves Zerubbabel is king already"
    ],
    answer: 1,
    reference: "Haggai 1:13; Haggai 2:3-5",
    verseText: "I am with you, saith the LORD."
  },
  {
    id: 13031,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zechariah",
    difficulty: "Advanced",
    question: "What does the vision of Joshua the high priest in Zechariah 3 primarily proclaim?",
    choices: [
      "Priestly guilt is permanent",
      "God can remove defilement and restore His servant by grace",
      "Satan's accusations are always final",
      "Temple worship is useless"
    ],
    answer: 1,
    reference: "Zechariah 3:1-10",
    verseText: "I have caused thine iniquity to pass from thee."
  },
  {
    id: 13032,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zechariah",
    difficulty: "Advanced",
    question: "What does 'Not by might, nor by power, but by my spirit' emphasize in Zechariah 4?",
    choices: [
      "Human effort is worthless in every sense",
      "God's restoration advances by divine empowerment rather than mere human strength",
      "Military conquest is forbidden in Israel's past",
      "Only prophets matter"
    ],
    answer: 1,
    reference: "Zechariah 4:6-10",
    verseText: "Not by might, nor by power, but by my spirit, saith the LORD of hosts."
  },
  {
    id: 13033,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zechariah",
    difficulty: "Advanced",
    question: "Why is the king entering Jerusalem 'lowly, and riding upon an ass' significant?",
    choices: [
      "It shows weakness without authority",
      "It portrays a humble yet righteous king unlike worldly conquerors",
      "It rejects kingship entirely",
      "It identifies the ruler as a priest only"
    ],
    answer: 1,
    reference: "Zechariah 9:9",
    verseText: "Thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass."
  },
  {
    id: 13034,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zechariah",
    difficulty: "Advanced",
    question: "What is the force of Zechariah's statement, 'they shall look upon me whom they have pierced'?",
    choices: [
      "It merges divine identity, rejection, and mourning in a striking prophetic image",
      "It concerns military armor only",
      "It denies covenant hope",
      "It predicts temple demolition only"
    ],
    answer: 0,
    reference: "Zechariah 12:10",
    verseText: "They shall look upon me whom they have pierced, and they shall mourn for him."
  },
  {
    id: 13035,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Malachi",
    difficulty: "Advanced",
    question: "What is Malachi's core accusation against the priests?",
    choices: [
      "They were too faithful to the covenant",
      "They despised God's name through corrupt worship and covenant negligence",
      "They preached too little about nations",
      "They opposed temple sacrifice entirely"
    ],
    answer: 1,
    reference: "Malachi 1:6-14; Malachi 2:1-9",
    verseText: "Ye offer polluted bread upon mine altar."
  },
  {
    id: 13036,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Malachi",
    difficulty: "Advanced",
    question: "What is the significance of the messenger promise in Malachi 3:1?",
    choices: [
      "It predicts a random temple attendant",
      "It announces preparatory ministry before the Lord's decisive coming in judgment and purification",
      "It cancels earlier prophecy",
      "It concerns only postal delivery"
    ],
    answer: 1,
    reference: "Malachi 3:1-3",
    verseText: "Behold, I will send my messenger, and he shall prepare the way before me."
  },
  {
    id: 13037,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Malachi",
    difficulty: "Advanced",
    question: "Why is Elijah mentioned at the end of Malachi?",
    choices: [
      "To announce literal reincarnation",
      "To anticipate a prophetic forerunner who calls for covenant turning before the Day of the LORD",
      "To restore northern monarchy",
      "To identify the next temple builder"
    ],
    answer: 1,
    reference: "Malachi 4:5-6",
    verseText: "Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD."
  },
  {
    id: 13038,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is the primary covenant lawsuit pattern often found in the prophets?",
    choices: [
      "God flatters Israel without confronting sin",
      "God brings charges, exposes breach, warns of judgment, and often holds out hope",
      "Prophets speak only in riddles",
      "History is irrelevant to prophecy"
    ],
    answer: 1,
    reference: "Isaiah 1:2-20; Micah 6:1-8; Hosea 4:1-3",
    verseText: "The LORD hath a controversy with his people."
  },
  {
    id: 13039,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why do the prophets repeatedly denounce idolatry?",
    choices: [
      "Because art is evil",
      "Because idolatry is covenant treason that exchanges the living God for powerless substitutes",
      "Because nations should have no symbols",
      "Because temple worship was optional"
    ],
    answer: 1,
    reference: "Isaiah 44:9-20; Jeremiah 10:1-16; Hosea 8:4-6",
    verseText: "They have made them idols, that they may be cut off."
  },
  {
    id: 13040,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What does 'the Day of the LORD' often combine in prophetic literature?",
    choices: [
      "Only comfort with no accountability",
      "Divine intervention in judgment against pride and in salvation for the faithful remnant",
      "A weekly Sabbath celebration",
      "A single battle in Israel's early monarchy"
    ],
    answer: 1,
    reference: "Joel 2; Amos 5:18-20; Zephaniah 1; Malachi 4",
    verseText: "The day of the LORD is darkness, and not light."
  },
  {
    id: 13041,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why is the remnant theme so important in the prophets?",
    choices: [
      "It means only a few ethnic survivors matter politically",
      "It preserves hope that God's purposes continue through a purified people despite widespread judgment",
      "It denies national sin",
      "It abolishes covenant promises"
    ],
    answer: 1,
    reference: "Isaiah 10:20-22; Micah 2:12; Zephaniah 3:12-13",
    verseText: "The remnant shall return."
  },
  {
    id: 13042,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is one major difference between a true prophet and false prophet in the Old Testament?",
    choices: [
      "True prophets always speak pleasant words",
      "True prophets speak in fidelity to God's revealed word even when unwelcome",
      "False prophets never mention peace",
      "True prophets avoid kings"
    ],
    answer: 1,
    reference: "Deuteronomy 18:18-22; Jeremiah 23:16-22; 1 Kings 22:13-28",
    verseText: "What the LORD saith unto me, that will I speak."
  },
  {
    id: 13043,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why do prophetic books often move from judgment to restoration?",
    choices: [
      "Because the prophets were inconsistent",
      "Because God's holiness judges sin, yet His covenant mercy preserves future hope",
      "Because editors merged unrelated books",
      "Because judgment never really mattered"
    ],
    answer: 1,
    reference: "Isaiah 1-2; Jeremiah 30-33; Hosea 11; Amos 9",
    verseText: "I will not execute the fierceness of mine anger... for I am God, and not man."
  },
  {
    id: 13044,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "Why is the promise of an everlasting throne to David crucial for prophecy?",
    choices: [
      "It makes every Davidic king sinless",
      "It fuels later expectation of a coming righteous ruler from David's line",
      "It replaces covenant with Abraham",
      "It concerns temple architecture only"
    ],
    answer: 1,
    reference: "2 Samuel 7:12-16; Isaiah 9:7; Jeremiah 23:5",
    verseText: "Thine house and thy kingdom shall be established for ever before thee."
  },
  {
    id: 13045,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "What does Jeremiah's 'righteous Branch' image communicate?",
    choices: [
      "A random priest from Benjamin",
      "A future Davidic ruler who will embody justice and righteousness",
      "The return of Solomon's temple furniture",
      "Agricultural recovery only"
    ],
    answer: 1,
    reference: "Jeremiah 23:5-6",
    verseText: "I will raise unto David a righteous Branch."
  },
  {
    id: 13046,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "Why is Psalm 110 important in prophetic-messianic interpretation?",
    choices: [
      "It presents a royal-priestly figure exalted at God's right hand",
      "It abolishes kingship",
      "It concerns only David's personal enemies",
      "It denies temple worship"
    ],
    answer: 0,
    reference: "Psalm 110:1-4",
    verseText: "Sit thou at my right hand."
  },
  {
    id: 13047,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "What is striking about Psalm 22 in relation to prophetic suffering themes?",
    choices: [
      "It contains only private complaint with no wider resonance",
      "It moves from forsakenness to vindication in language later seen as deeply messianic",
      "It rejects trust in God completely",
      "It denies public worship"
    ],
    answer: 1,
    reference: "Psalm 22:1-31",
    verseText: "My God, my God, why hast thou forsaken me?"
  },
  {
    id: 13048,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "Why is the suffering servant not easily reduced to a purely national symbol?",
    choices: [
      "Because the servant is explicitly called sinful",
      "Because the text presents a figure who suffers vicariously and brings many to righteousness",
      "Because Israel is never called servant anywhere else",
      "Because the chapter forbids symbolic language"
    ],
    answer: 1,
    reference: "Isaiah 49:5-6; Isaiah 52:13-53:12",
    verseText: "By his knowledge shall my righteous servant justify many; for he shall bear their iniquities."
  },
  {
    id: 13049,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Nations",
    difficulty: "Advanced",
    question: "Why do the prophets speak so often about foreign nations?",
    choices: [
      "Because Israel's covenant God rules only locally",
      "Because the LORD judges all nations and history, not Israel alone",
      "Because the prophets were diplomats",
      "Because Israel had no internal sin"
    ],
    answer: 1,
    reference: "Isaiah 13-23; Jeremiah 46-51; Amos 1-2; Obadiah",
    verseText: "The LORD hath a controversy with the nations."
  },
  {
    id: 13050,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Nations",
    difficulty: "Advanced",
    question: "What is remarkable about prophetic visions of the nations coming to Zion?",
    choices: [
      "They teach Gentiles must remain forever excluded",
      "They anticipate worldwide acknowledgment of the LORD beyond Israel",
      "They deny judgment on the nations",
      "They abolish Israel's calling"
    ],
    answer: 1,
    reference: "Isaiah 2:2-4; Isaiah 49:6; Zechariah 8:20-23",
    verseText: "All nations shall flow unto it."
  },
  {
    id: 13051,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What is the theological force of Isaiah's critique of idol-making in chapter 44?",
    choices: [
      "It mocks the irrationality of worshiping what human hands manufacture",
      "It teaches craftsmanship is sinful",
      "It argues wood is spiritually evil",
      "It forbids all images in civic life"
    ],
    answer: 0,
    reference: "Isaiah 44:9-20",
    verseText: "He feedeth on ashes: a deceived heart hath turned him aside."
  },
  {
    id: 13052,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "Why is Jeremiah called the weeping prophet in spirit, if not by title?",
    choices: [
      "Because prophetic faithfulness includes grief over sin and judgment",
      "Because he doubted the truth of his message",
      "Because he wanted exile to fail",
      "Because tears validated prophecy automatically"
    ],
    answer: 0,
    reference: "Jeremiah 9:1; Jeremiah 13:17",
    verseText: "Mine eye shall weep sore, and run down with tears."
  },
  {
    id: 13053,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "What is symbolized by the broken potter's vessel in Jeremiah 19?",
    choices: [
      "Flexible restoration without consequence",
      "Irreversible judgment on persistent covenant rebellion",
      "The beauty of temple pottery",
      "Babylon's weakness"
    ],
    answer: 1,
    reference: "Jeremiah 19:1-11",
    verseText: "Even so will I break this people and this city, as one breaketh a potter's vessel."
  },
  {
    id: 13054,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "Why is Ezekiel repeatedly called 'son of man'?",
    choices: [
      "To stress his human frailty and creaturely status before the sovereign God",
      "To identify him as a king",
      "To deny his prophetic office",
      "To connect him only with Adamic genealogy"
    ],
    answer: 0,
    reference: "Ezekiel 2:1; Ezekiel 3:1; Ezekiel 37:3",
    verseText: "Son of man, stand upon thy feet."
  },
  {
    id: 13055,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What does the little horn imagery in Daniel emphasize broadly?",
    choices: [
      "A harmless local king",
      "Arrogant, blasphemous power that opposes God's people yet remains under divine limit",
      "The certainty of human progress",
      "The end of all kingdoms immediately"
    ],
    answer: 1,
    reference: "Daniel 7:8, 20-27; Daniel 8:9-14, 23-25",
    verseText: "He shall speak great words against the most High."
  },
  {
    id: 13056,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "Why do apocalyptic sections of Daniel use symbolic beasts?",
    choices: [
      "To entertain readers with fantasy",
      "To portray the brutal, dehumanizing nature of godless empire under divine interpretation",
      "To deny real history",
      "To replace covenant theology"
    ],
    answer: 1,
    reference: "Daniel 7:1-8, 17",
    verseText: "These great beasts, which are four, are four kings."
  },
  {
    id: 13057,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is the prophetic significance of the repeated call, 'Return unto me'?",
    choices: [
      "It offers sentimental religion without moral change",
      "It summons covenant repentance as the proper response to divine warning and mercy",
      "It addresses geography only",
      "It cancels earlier sin"
    ],
    answer: 1,
    reference: "Zechariah 1:3; Malachi 3:7; Joel 2:12-13",
    verseText: "Turn ye even to me with all your heart."
  },
  {
    id: 13058,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why do prophets so often use symbolic actions as part of their ministry?",
    choices: [
      "Because words are unnecessary in prophecy",
      "Because enacted signs dramatize the message and confront hearers more forcefully",
      "Because prophets were mainly performers",
      "Because the law required theater"
    ],
    answer: 1,
    reference: "Isaiah 20:2-4; Jeremiah 13:1-11; Ezekiel 4-5; Hosea 1",
    verseText: "This evil people... shall even be as this girdle, which is good for nothing."
  },
  {
    id: 13059,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is the relationship between prophecy and covenant in the Old Testament?",
    choices: [
      "Prophecy replaces covenant completely",
      "Prophecy regularly interprets history according to covenant blessings, curses, promises, and obligations",
      "Covenant appears only in the Torah",
      "Prophets invent a new God"
    ],
    answer: 1,
    reference: "Deuteronomy 28-30; Jeremiah 11; Daniel 9; Hosea 8",
    verseText: "They have transgressed my covenant."
  },
  {
    id: 13060,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why is repentance often presented as more than ritual sorrow in the prophets?",
    choices: [
      "Because God seeks heart-level return expressed in real covenant obedience",
      "Because rituals are always evil",
      "Because prophets reject worship entirely",
      "Because emotion is the only thing that matters"
    ],
    answer: 0,
    reference: "Joel 2:12-13; Isaiah 1:16-20; Hosea 6:1-6",
    verseText: "Rend your heart, and not your garments."
  },
  {
    id: 13061,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What is the significance of calling Cyrus the LORD's anointed in Isaiah 45?",
    choices: [
      "Cyrus becomes Israel's messiah in the full sense",
      "God sovereignly uses even a pagan ruler to advance His redemptive purposes",
      "Persia replaces Israel as covenant people",
      "Prophecy endorses all imperial power"
    ],
    answer: 1,
    reference: "Isaiah 44:28-45:4",
    verseText: "Thus saith the LORD to his anointed, to Cyrus."
  },
  {
    id: 13062,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "Why is the phrase 'Holy One of Israel' so significant in Isaiah?",
    choices: [
      "It ties God's transcendent holiness to His covenant relationship with His people",
      "It refers to temple furniture",
      "It is a title for Isaiah himself",
      "It minimizes divine mercy"
    ],
    answer: 0,
    reference: "Isaiah 1:4; Isaiah 12:6; Isaiah 41:14",
    verseText: "The Holy One of Israel."
  },
  {
    id: 13063,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "What does the potter image in Jeremiah 18 chiefly teach?",
    choices: [
      "God is arbitrary and unresponsive",
      "God has sovereign rights over nations while still calling for repentance",
      "Israel has no responsibility",
      "Clay can shape the potter"
    ],
    answer: 1,
    reference: "Jeremiah 18:1-10",
    verseText: "As the clay is in the potter's hand, so are ye in mine hand."
  },
  {
    id: 13064,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "Why is the promise that God acts 'for my holy name's sake' so important in Ezekiel?",
    choices: [
      "It makes Israel's response irrelevant",
      "It roots restoration in God's own reputation and covenant faithfulness, not Israel's merit",
      "It removes the need for cleansing",
      "It denies the nations matter"
    ],
    answer: 1,
    reference: "Ezekiel 36:22-23",
    verseText: "I do not this for your sakes, O house of Israel, but for mine holy name's sake."
  },
  {
    id: 13065,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What does Daniel 12 contribute to prophecy in a particularly striking way?",
    choices: [
      "It rejects all hope after exile",
      "It includes one of the clearest Old Testament statements of resurrection and final reward or shame",
      "It teaches only political restoration",
      "It abolishes wisdom literature"
    ],
    answer: 1,
    reference: "Daniel 12:1-3",
    verseText: "Many of them that sleep in the dust of the earth shall awake."
  },
  {
    id: 13066,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Hosea",
    difficulty: "Advanced",
    question: "What is the force of Hosea 6:6, 'I desired mercy, and not sacrifice'?",
    choices: [
      "Sacrifice was always unlawful",
      "Covenant loyalty and true knowledge of God outweigh empty ritual performance",
      "Mercy abolishes holiness",
      "The priesthood should end immediately"
    ],
    answer: 1,
    reference: "Hosea 6:6",
    verseText: "I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings."
  },
  {
    id: 13067,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Amos",
    difficulty: "Advanced",
    question: "Why is Israel's election not a shield in Amos?",
    choices: [
      "Because privilege increases accountability under God's justice",
      "Because election is denied altogether",
      "Because only Judah matters",
      "Because prophecy opposes covenant"
    ],
    answer: 0,
    reference: "Amos 3:1-2",
    verseText: "You only have I known of all the families of the earth: therefore I will punish you."
  },
  {
    id: 13068,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Habakkuk",
    difficulty: "Advanced",
    question: "What is the role of the 'woes' in Habakkuk 2?",
    choices: [
      "They excuse Babylon's violence",
      "They pronounce divine judgment on arrogant injustice despite Babylon's temporary rise",
      "They cancel Habakkuk's earlier prayer",
      "They concern Israel's agriculture only"
    ],
    answer: 1,
    reference: "Habakkuk 2:6-20",
    verseText: "Woe to him that increaseth that which is not his!"
  },
  {
    id: 13069,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Zechariah",
    difficulty: "Advanced",
    question: "Why are the night visions in Zechariah important for the post-exilic community?",
    choices: [
      "They provide symbolic assurance that God still sees, rules, and will restore",
      "They replace Torah instruction",
      "They eliminate the temple's importance",
      "They predict only economic growth"
    ],
    answer: 0,
    reference: "Zechariah 1-6",
    verseText: "My words and my statutes... did they not take hold of your fathers?"
  },
  {
    id: 13070,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Malachi",
    difficulty: "Advanced",
    question: "What does the 'sun of righteousness' image in Malachi 4 convey?",
    choices: [
      "Astronomical prediction only",
      "Healing and vindication for those who fear the LORD after judgment on the arrogant",
      "The end of covenant obedience",
      "Temple fire symbolism only"
    ],
    answer: 1,
    reference: "Malachi 4:1-3",
    verseText: "Unto you that fear my name shall the Sun of righteousness arise with healing in his wings."
  },
  {
    id: 13071,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why are prophets often rejected by the very people they address?",
    choices: [
      "Because they speak foreign languages only",
      "Because the true prophetic word confronts sin, false security, and hardened hearts",
      "Because prophecy lacks moral content",
      "Because kings always preferred silence"
    ],
    answer: 1,
    reference: "Jeremiah 20:7-10; Amos 7:10-17; 2 Chronicles 36:15-16",
    verseText: "They mocked the messengers of God, and despised his words."
  },
  {
    id: 13072,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What recurring prophetic error is exposed when people say, 'The day of the LORD' as if it guarantees their safety?",
    choices: [
      "They assume covenant privilege without covenant fidelity",
      "They misunderstand the calendar",
      "They reject Jerusalem entirely",
      "They oppose the temple tax"
    ],
    answer: 0,
    reference: "Amos 5:18-20; Jeremiah 7:4-10",
    verseText: "Woe unto you that desire the day of the LORD!"
  },
  {
    id: 13073,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is the significance of the prophetic promise of a cleansed people?",
    choices: [
      "Only national success matters",
      "Restoration involves moral and spiritual renewal, not mere territorial return",
      "Purity is ceremonial only",
      "Forgiveness eliminates transformation"
    ],
    answer: 1,
    reference: "Ezekiel 36:25-27; Zechariah 13:1; Jeremiah 33:8",
    verseText: "Then will I sprinkle clean water upon you, and ye shall be clean."
  },
  {
    id: 13074,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why do prophets repeatedly link social injustice with false worship?",
    choices: [
      "Because ethics and worship are covenantally inseparable before God",
      "Because temple ritual caused poverty",
      "Because justice matters more than God",
      "Because only kings could sin socially"
    ],
    answer: 0,
    reference: "Isaiah 1:11-17; Amos 5:21-24; Micah 3:9-12",
    verseText: "Cease to do evil; Learn to do well; seek judgment."
  },
  {
    id: 13075,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is a major difference between prophetic prediction and pagan divination in Scripture?",
    choices: [
      "Prediction is the only goal of prophecy",
      "Biblical prophecy is rooted in God's covenantal self-revelation and moral demand, not manipulation of hidden forces",
      "They are functionally identical",
      "Prophets rely on omens"
    ],
    answer: 1,
    reference: "Deuteronomy 18:9-22; Isaiah 41:21-29; Jeremiah 27:9-10",
    verseText: "The prophet, which shall presume to speak a word in my name... even that prophet shall die."
  },
  {
    id: 13076,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "Why is the combination of kingship and priesthood noteworthy in prophetic expectation?",
    choices: [
      "It is impossible in biblical theology",
      "It anticipates an extraordinary ruler who mediates and reigns under divine appointment",
      "It erases David's line",
      "It belongs only to Aaron's sons"
    ],
    answer: 1,
    reference: "Psalm 110:4; Zechariah 6:12-13",
    verseText: "He shall be a priest upon his throne."
  },
  {
    id: 13077,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Messianic",
    difficulty: "Advanced",
    question: "What is the significance of the shepherd imagery in prophetic books?",
    choices: [
      "It concerns farming technique only",
      "It contrasts failed leaders with God's promise of faithful, Davidic care for His people",
      "It rejects monarchy altogether",
      "It abolishes temple worship"
    ],
    answer: 1,
    reference: "Ezekiel 34:1-24; Micah 5:4; Zechariah 11",
    verseText: "I will set up one shepherd over them, and he shall feed them, even my servant David."
  },
  {
    id: 13078,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Nations",
    difficulty: "Advanced",
    question: "Why are Egypt, Assyria, Babylon, and Edom frequent prophetic targets?",
    choices: [
      "Because prophecy ignores Israel",
      "Because imperial pride, violence, and hostility toward God's purposes invite judgment",
      "Because their geography is symbolic only",
      "Because they had no religion"
    ],
    answer: 1,
    reference: "Isaiah 19; Jeremiah 46-51; Ezekiel 29-32; Obadiah",
    verseText: "The lofty looks of man shall be humbled."
  },
  {
    id: 13079,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is the prophetic significance of naming sin concretely rather than generally?",
    choices: [
      "Specific sins are easier to ignore",
      "Prophets expose actual covenant breaches, not vague spirituality",
      "General language is forbidden",
      "Only priests may identify sin"
    ],
    answer: 1,
    reference: "Isaiah 1:21-23; Jeremiah 22:13-17; Amos 2:6-8",
    verseText: "They sell the righteous for silver, and the poor for a pair of shoes."
  },
  {
    id: 13080,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why is prophetic hope never mere optimism?",
    choices: [
      "Because it is rooted in God's character, covenant faithfulness, and sovereign action after honest judgment",
      "Because prophets avoid future language",
      "Because hope means ignoring sin",
      "Because prophecy is mostly poetry"
    ],
    answer: 0,
    reference: "Isaiah 40-66; Jeremiah 30-33; Ezekiel 36-37; Zechariah 8-14",
    verseText: "The zeal of the LORD of hosts will perform this."
  },
  {
    id: 13081,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "How does the New Testament often use Old Testament prophecy responsibly?",
    choices: [
      "By ignoring original context entirely",
      "By reading promises through the unfolding pattern of fulfillment centered in Christ",
      "By rejecting Israel's Scriptures",
      "By treating all prophecy as accidental"
    ],
    answer: 1,
    reference: "Luke 24:27, 44-47; Matthew 1:22-23; Acts 2:16-21",
    verseText: "Beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself."
  },
  {
    id: 13082,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "Why is John the Baptist associated with Elijah-like prophecy?",
    choices: [
      "He claimed literal reincarnation",
      "He came in prophetic power and function as the forerunner preparing the way",
      "He replaced the Messiah",
      "He restored the northern kingdom politically"
    ],
    answer: 1,
    reference: "Malachi 4:5-6; Luke 1:16-17; Matthew 11:13-14",
    verseText: "He shall go before him in the spirit and power of Elias."
  },
  {
    id: 13083,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "What does Jesus' reading of Isaiah 61 in Nazareth emphasize?",
    choices: [
      "He is announcing that the prophetic hope is arriving in His own ministry",
      "He denies judgment entirely",
      "He claims only to be another prophet among many",
      "He postpones all fulfillment"
    ],
    answer: 0,
    reference: "Luke 4:16-21",
    verseText: "This day is this scripture fulfilled in your ears."
  },
  {
    id: 13084,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "Why is the triumphal entry often read in light of Zechariah 9:9?",
    choices: [
      "Because it intentionally enacts prophetic kingship through humility",
      "Because crowds misunderstood every royal symbol",
      "Because the donkey erased political meaning",
      "Because Jesus denied all messianic claims"
    ],
    answer: 0,
    reference: "Zechariah 9:9; Matthew 21:4-5; John 12:14-15",
    verseText: "Behold, thy King cometh unto thee."
  },
  {
    id: 13085,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "How does Acts 2 interpret Joel's Spirit prophecy?",
    choices: [
      "As a failed expectation",
      "As finding dramatic fulfillment in the outpoured Spirit upon the gathered believers",
      "As applying only to Israel's monarchy",
      "As unrelated to Pentecost"
    ],
    answer: 1,
    reference: "Joel 2:28-32; Acts 2:16-21",
    verseText: "This is that which was spoken by the prophet Joel."
  },
  {
    id: 13086,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "Why does the New Testament return so often to Isaiah 53?",
    choices: [
      "Because it provides a profound framework for understanding the suffering and atoning mission of Christ",
      "Because it is the only prophetic chapter",
      "Because it denies resurrection",
      "Because it cancels Isaiah 1-52"
    ],
    answer: 0,
    reference: "Isaiah 53; Acts 8:32-35; 1 Peter 2:21-25",
    verseText: "He bare our sins in his own body on the tree."
  },
  {
    id: 13087,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "What is significant about Jesus' reference to Jonah?",
    choices: [
      "He treats Jonah purely as folklore",
      "He uses Jonah as a sign connected with death, burial, and vindication",
      "He rejects Nineveh's repentance",
      "He denies prophetic patterns"
    ],
    answer: 1,
    reference: "Jonah 1:17; Matthew 12:39-41",
    verseText: "So shall the Son of man be three days and three nights in the heart of the earth."
  },
  {
    id: 13088,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "Why is Psalm 110 so foundational in apostolic preaching?",
    choices: [
      "It supports the exaltation and royal-priestly identity of the risen Christ",
      "It denies resurrection",
      "It refers only to David's military career",
      "It eliminates all future hope"
    ],
    answer: 0,
    reference: "Psalm 110:1-4; Acts 2:34-36; Hebrews 5:5-10",
    verseText: "The LORD said unto my Lord, Sit thou on my right hand."
  },
  {
    id: 13089,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "How does the New Testament treat the promise of the new covenant?",
    choices: [
      "As obsolete and irrelevant",
      "As fulfilled through Christ's mediating work, forgiveness, and internal renewal by the Spirit",
      "As a merely political arrangement",
      "As future only with no present relevance"
    ],
    answer: 1,
    reference: "Jeremiah 31:31-34; Luke 22:20; Hebrews 8:6-13",
    verseText: "This cup is the new testament in my blood."
  },
  {
    id: 13090,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "Why is Bethlehem's mention in Matthew 2 more than geography?",
    choices: [
      "It links Jesus' birth to Davidic prophetic expectation",
      "It proves census records are theological proof by themselves",
      "It denies Nazareth's importance",
      "It cancels the exodus pattern"
    ],
    answer: 0,
    reference: "Micah 5:2; Matthew 2:1-6",
    verseText: "For thus it is written by the prophet."
  },
  {
    id: 13091,
    game: "Prophecy",
    testament: "New Testament",
    category: "Fulfillment",
    difficulty: "Advanced",
    question: "What is the significance of Revelation's use of prophetic imagery from Daniel, Ezekiel, and Zechariah?",
    choices: [
      "It abandons the Old Testament framework",
      "It shows later revelation drawing on earlier prophetic patterns to portray final conflict and victory",
      "It makes symbols meaningless",
      "It rejects apocalyptic hope"
    ],
    answer: 1,
    reference: "Daniel 7; Ezekiel 38-39; Zechariah 12-14; Revelation 1, 13, 19-22",
    verseText: "The testimony of Jesus is the spirit of prophecy."
  },
  {
    id: 13092,
    game: "Prophecy",
    testament: "New Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is one danger in reading prophecy only as a chart of future events?",
    choices: [
      "It can ignore prophecy's ethical, covenantal, and theological demands on present hearers",
      "It makes the text easier to obey",
      "It emphasizes repentance too much",
      "It keeps Christ central"
    ],
    answer: 0,
    reference: "Isaiah 1; Jeremiah 7; Amos 5; Matthew 24:42-51",
    verseText: "Watch therefore."
  },
  {
    id: 13093,
    game: "Prophecy",
    testament: "New Testament",
    category: "General",
    difficulty: "Advanced",
    question: "How should fulfilled prophecy function for believers according to Scripture?",
    choices: [
      "As ammunition for speculation only",
      "As confirmation of God's faithfulness and a summons to faith, worship, and obedience",
      "As a replacement for the gospel",
      "As proof that history no longer matters"
    ],
    answer: 1,
    reference: "John 13:19; John 20:30-31; 2 Peter 1:19-21",
    verseText: "We have also a more sure word of prophecy."
  },
  {
    id: 13094,
    game: "Prophecy",
    testament: "New Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What is the relationship between prophecy and Christ according to Luke 24?",
    choices: [
      "Christ is peripheral to the prophetic Scriptures",
      "The Law, Prophets, and Psalms ultimately point toward Christ's suffering, resurrection, and proclaimed repentance",
      "Only Daniel predicted Christ",
      "Prophecy ends before the Gospel accounts"
    ],
    answer: 1,
    reference: "Luke 24:25-27, 44-47",
    verseText: "All things must be fulfilled, which were written... concerning me."
  },
  {
    id: 13095,
    game: "Prophecy",
    testament: "New Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why is prophetic literature often both near and far in its horizon?",
    choices: [
      "Because prophets were confused",
      "Because immediate historical events can also participate in larger redemptive patterns and future fulfillment",
      "Because dates do not matter at all",
      "Because all fulfillment is symbolic only"
    ],
    answer: 1,
    reference: "Isaiah 7; Joel 2; Daniel 7; Matthew 24",
    verseText: "The testimony of Jesus is the spirit of prophecy."
  },
  {
    id: 13096,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Apocalyptic",
    difficulty: "Advanced",
    question: "What is a key function of apocalyptic prophecy during oppression?",
    choices: [
      "To encourage compromise with empire",
      "To unveil heavenly reality and strengthen faithful endurance under earthly pressure",
      "To remove moral responsibility",
      "To hide God from His people"
    ],
    answer: 1,
    reference: "Daniel 7-12; Zechariah 1-6",
    verseText: "The saints of the most High shall take the kingdom."
  },
  {
    id: 13097,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why is prophecy inseparable from the character of God?",
    choices: [
      "Because prophecy is mainly about human genius",
      "Because prophetic words reflect God's holiness, justice, mercy, sovereignty, and faithfulness",
      "Because prophets create doctrine independently",
      "Because narrative and law are unrelated"
    ],
    answer: 1,
    reference: "Exodus 34:6-7; Isaiah 6; Jeremiah 9:23-24; Hosea 11",
    verseText: "The LORD, The LORD God, merciful and gracious."
  },
  {
    id: 13098,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "What recurring misuse of prophecy is corrected by the prophets themselves?",
    choices: [
      "Treating divine promises as guarantees apart from repentance and covenant faithfulness",
      "Reading aloud in public",
      "Praying for mercy",
      "Expecting nations to matter"
    ],
    answer: 0,
    reference: "Jeremiah 7:4-10; Amos 5:18-24; Micah 3:9-12",
    verseText: "Trust ye not in lying words."
  },
  {
    id: 13099,
    game: "Prophecy",
    testament: "Old Testament",
    category: "General",
    difficulty: "Advanced",
    question: "Why does prophetic hope often emerge most clearly after severe judgment or exile?",
    choices: [
      "Because judgment proves God has abandoned history",
      "Because God's restorative mercy shines most clearly when human security has collapsed",
      "Because prophets preferred pessimism first",
      "Because exile solved Israel's sin permanently"
    ],
    answer: 1,
    reference: "Isaiah 40; Jeremiah 30-33; Ezekiel 36-37; Zechariah 8",
    verseText: "I know the thoughts that I think toward you... thoughts of peace, and not of evil."
  },
  {
    id: 13100,
    game: "Prophecy",
    testament: "Old Testament",
    category: "Canon",
    difficulty: "Advanced",
    question: "Across the prophetic books as a whole, what unifying pattern appears most consistently?",
    choices: [
      "Human strength secures the future",
      "The holy covenant God confronts sin, judges pride, preserves a remnant, and promises ultimate restoration centered in His own redemptive purpose",
      "Israel's story ends in exile only",
      "Prophecy is mostly symbolic without moral demand"
    ],
    answer: 1,
    reference: "Isaiah 1-66; Jeremiah 1-52; Ezekiel 1-48; Daniel 1-12; Hosea-Malachi",
    verseText: "The zeal of the LORD of hosts will perform this."
  }
];