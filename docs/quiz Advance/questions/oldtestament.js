const oldTestamentQuestions = [
  {
    id: "ot001",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did God create on the first day?",
    choices: ["Light", "Sky", "Land", "Sun"],
    answer: 0,
    reference: "Genesis 1:3",
    verseText: ""
  },
  {
    id: "ot002",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What separated the waters on the second day?",
    choices: ["Firmament", "Land", "Clouds", "Wind"],
    answer: 0,
    reference: "Genesis 1:6",
    verseText: ""
  },
  {
    id: "ot003",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "On what day were the sun, moon, and stars created?",
    choices: ["Second", "Third", "Fourth", "Fifth"],
    answer: 2,
    reference: "Genesis 1:16-19",
    verseText: ""
  },
  {
    id: "ot004",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What tree was forbidden in Eden?",
    choices: ["Tree of life", "Tree of knowledge of good and evil", "Olive tree", "Fig tree"],
    answer: 1,
    reference: "Genesis 2:17",
    verseText: ""
  },
  {
    id: "ot005",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was the first murderer?",
    choices: ["Adam", "Cain", "Abel", "Lamech"],
    answer: 1,
    reference: "Genesis 4:8",
    verseText: ""
  },
  {
    id: "ot006",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who built the ark?",
    choices: ["Abraham", "Moses", "Noah", "Enoch"],
    answer: 2,
    reference: "Genesis 6",
    verseText: ""
  },
  {
    id: "ot007",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "How many days did it rain during the flood?",
    choices: ["7", "30", "40", "100"],
    answer: 2,
    reference: "Genesis 7:12",
    verseText: ""
  },
  {
    id: "ot008",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What sign did God give after the flood?",
    choices: ["Star", "Rainbow", "Cloud", "Fire"],
    answer: 1,
    reference: "Genesis 9:13",
    verseText: ""
  },
  {
    id: "ot009",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What city was destroyed along with Sodom?",
    choices: ["Gomorrah", "Nineveh", "Jericho", "Babel"],
    answer: 0,
    reference: "Genesis 19",
    verseText: ""
  },
  {
    id: "ot010",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened to Lot’s wife?",
    choices: ["Died", "Turned to salt", "Escaped", "Was taken"],
    answer: 1,
    reference: "Genesis 19:26",
    verseText: ""
  },
  {
    id: "ot011",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did God ask Abraham to sacrifice?",
    choices: ["Lamb", "Isaac", "Ram", "Ox"],
    answer: 1,
    reference: "Genesis 22",
    verseText: ""
  },
  {
    id: "ot012",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What replaced Isaac on the altar?",
    choices: ["Goat", "Ram", "Lamb", "Bull"],
    answer: 1,
    reference: "Genesis 22:13",
    verseText: ""
  },
  {
    id: "ot013",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Where did Joseph end up after being sold?",
    choices: ["Babylon", "Egypt", "Canaan", "Assyria"],
    answer: 1,
    reference: "Genesis 37",
    verseText: ""
  },
  {
    id: "ot014",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What position did Joseph rise to in Egypt?",
    choices: ["Priest", "Governor", "King", "Servant"],
    answer: 1,
    reference: "Genesis 41:41",
    verseText: ""
  },
  {
    id: "ot015",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What river was Moses placed in as a baby?",
    choices: ["Jordan", "Euphrates", "Nile", "Tigris"],
    answer: 2,
    reference: "Exodus 2:3",
    verseText: ""
  },
  {
    id: "ot016",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What appeared to Moses in the wilderness?",
    choices: ["Angel", "Burning bush", "Cloud", "Fire"],
    answer: 1,
    reference: "Exodus 3",
    verseText: ""
  },
  {
    id: "ot017",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "How many plagues struck Egypt?",
    choices: ["7", "10", "12", "14"],
    answer: 1,
    reference: "Exodus",
    verseText: ""
  },
  {
    id: "ot018",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What sea did Israel cross?",
    choices: ["Dead Sea", "Red Sea", "Mediterranean", "Jordan"],
    answer: 1,
    reference: "Exodus 14",
    verseText: ""
  },
  {
    id: "ot019",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What fell from heaven to feed Israel?",
    choices: ["Bread", "Manna", "Fruit", "Meat"],
    answer: 1,
    reference: "Exodus 16",
    verseText: ""
  },
  {
    id: "ot020",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did Moses strike to bring water?",
    choices: ["Tree", "Rock", "Ground", "Well"],
    answer: 1,
    reference: "Exodus 17",
    verseText: ""
  },
  {
    id: "ot021",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What idol did Israel make at Sinai?",
    choices: ["Golden calf", "Statue", "Serpent", "Bull"],
    answer: 0,
    reference: "Exodus 32",
    verseText: ""
  },
  {
    id: "ot022",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "How long did Israel wander in the wilderness?",
    choices: ["20 years", "30 years", "40 years", "50 years"],
    answer: 2,
    reference: "Numbers 14:33",
    verseText: ""
  },
  {
    id: "ot023",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who led Israel into the Promised Land?",
    choices: ["Moses", "Aaron", "Joshua", "Caleb"],
    answer: 2,
    reference: "Joshua 1",
    verseText: ""
  },
  {
    id: "ot024",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What fell after Israel marched around it?",
    choices: ["Jericho", "Ai", "Babylon", "Nineveh"],
    answer: 0,
    reference: "Joshua 6",
    verseText: ""
  },
  {
    id: "ot025",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who stopped the sun from moving?",
    choices: ["Moses", "Joshua", "Elijah", "Samuel"],
    answer: 1,
    reference: "Joshua 10:13",
    verseText: ""
  },
  {
    id: "ot026",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who defeated Midian with 300 men?",
    choices: ["Samson", "Gideon", "David", "Saul"],
    answer: 1,
    reference: "Judges 7",
    verseText: ""
  },
  {
    id: "ot027",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who killed Sisera with a tent peg?",
    choices: ["Deborah", "Jael", "Ruth", "Esther"],
    answer: 1,
    reference: "Judges 4:21",
    verseText: ""
  },
  {
    id: "ot028",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What gave Samson his strength?",
    choices: ["Prayer", "Hair", "Armor", "Staff"],
    answer: 1,
    reference: "Judges 16",
    verseText: ""
  },
  {
    id: "ot029",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who anointed David as king?",
    choices: ["Nathan", "Samuel", "Elijah", "Zadok"],
    answer: 1,
    reference: "1 Samuel 16",
    verseText: ""
  },
  {
    id: "ot030",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What giant did David defeat?",
    choices: ["Og", "Goliath", "Anak", "Nimrod"],
    answer: 1,
    reference: "1 Samuel 17",
    verseText: ""
  },
  {
    id: "ot031",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who became king after David?",
    choices: ["Saul", "Solomon", "Rehoboam", "Hezekiah"],
    answer: 1,
    reference: "1 Kings 1",
    verseText: ""
  },
  {
    id: "ot032",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did Solomon build?",
    choices: ["City", "Temple", "Wall", "Palace"],
    answer: 1,
    reference: "1 Kings 6",
    verseText: ""
  },
  {
    id: "ot033",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who challenged the prophets of Baal?",
    choices: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    answer: 1,
    reference: "1 Kings 18",
    verseText: ""
  },
  {
    id: "ot034",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What came down from heaven on Elijah’s altar?",
    choices: ["Rain", "Fire", "Lightning", "Wind"],
    answer: 1,
    reference: "1 Kings 18:38",
    verseText: ""
  },
  {
    id: "ot035",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was taken to heaven in a whirlwind?",
    choices: ["Moses", "Elijah", "Enoch", "Isaiah"],
    answer: 1,
    reference: "2 Kings 2:11",
    verseText: ""
  },
  {
    id: "ot036",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who healed Naaman of leprosy?",
    choices: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: 1,
    reference: "2 Kings 5",
    verseText: ""
  },
  {
    id: "ot037",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "How many times did Naaman wash in the Jordan?",
    choices: ["3", "5", "7", "10"],
    answer: 2,
    reference: "2 Kings 5:10",
    verseText: ""
  },
  {
    id: "ot038",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was swallowed by a great fish?",
    choices: ["Elijah", "Jonah", "Daniel", "Ezekiel"],
    answer: 1,
    reference: "Jonah 1",
    verseText: ""
  },
  {
    id: "ot039",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What city did Jonah preach to?",
    choices: ["Babylon", "Nineveh", "Jericho", "Tyre"],
    answer: 1,
    reference: "Jonah 3",
    verseText: ""
  },
  {
    id: "ot040",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was thrown into a den of lions?",
    choices: ["Joseph", "Daniel", "David", "Nehemiah"],
    answer: 1,
    reference: "Daniel 6",
    verseText: ""
  },
  {
    id: "ot041",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who survived the fiery furnace?",
    choices: ["Daniel", "Shadrach, Meshach, Abednego", "Isaiah", "Ezekiel"],
    answer: 1,
    reference: "Daniel 3",
    verseText: ""
  },
  {
    id: "ot042",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What king had a dream of a great statue?",
    choices: ["Darius", "Nebuchadnezzar", "Cyrus", "Belshazzar"],
    answer: 1,
    reference: "Daniel 2",
    verseText: ""
  },
  {
    id: "ot043",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who wrote on the wall in Babylon?",
    choices: ["Daniel", "Angel", "God", "Hand"],
    answer: 3,
    reference: "Daniel 5:5",
    verseText: ""
  },
  {
    id: "ot044",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who became queen and saved the Jews?",
    choices: ["Ruth", "Esther", "Deborah", "Hannah"],
    answer: 1,
    reference: "Esther",
    verseText: ""
  },
  {
    id: "ot045",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who rebuilt Jerusalem’s walls?",
    choices: ["Ezra", "Nehemiah", "Zerubbabel", "Joshua"],
    answer: 1,
    reference: "Nehemiah",
    verseText: ""
  },
  {
    id: "ot046",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who restored the Law to Israel?",
    choices: ["Nehemiah", "Ezra", "Daniel", "Jeremiah"],
    answer: 1,
    reference: "Ezra 7",
    verseText: ""
  },
  {
    id: "ot047",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What prophet saw dry bones come to life?",
    choices: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: 2,
    reference: "Ezekiel 37",
    verseText: ""
  },
  {
    id: "ot048",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What prophet confronted King Ahab?",
    choices: ["Elijah", "Elisha", "Isaiah", "Hosea"],
    answer: 0,
    reference: "1 Kings 18",
    verseText: ""
  },
  {
    id: "ot049",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who saw the Lord high and lifted up?",
    choices: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    answer: 1,
    reference: "Isaiah 6",
    verseText: ""
  },
  {
    id: "ot050",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who wept over Jerusalem’s fall?",
    choices: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: 1,
    reference: "Lamentations",
    verseText: ""
  },
  {
    id: "ot051",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What name did God give Abram after establishing His covenant with him?",
    choices: ["Israel", "Abraham", "Jared", "Eber"],
    answer: 1,
    reference: "Genesis 17:5",
    verseText: ""
  },
  {
    id: "ot052",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What was Jacob’s name changed to after wrestling with the angel?",
    choices: ["Judah", "Israel", "Jeshurun", "Benjamin"],
    answer: 1,
    reference: "Genesis 32:28",
    verseText: ""
  },
  {
    id: "ot053",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who interpreted Pharaoh’s dreams of plenty and famine?",
    choices: ["Aaron", "Moses", "Joseph", "Daniel"],
    answer: 2,
    reference: "Genesis 41",
    verseText: ""
  },
  {
    id: "ot054",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did the Israelites place on their doorposts at the first Passover?",
    choices: ["Oil", "Water", "Ash", "Blood"],
    answer: 3,
    reference: "Exodus 12:7",
    verseText: ""
  },
  {
    id: "ot055",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What stood between Israel and the Egyptians during the night before the sea crossing?",
    choices: ["A wall of fire", "The angel and pillar of cloud", "A sandstorm", "Darkness only"],
    answer: 1,
    reference: "Exodus 14:19-20",
    verseText: ""
  },
  {
    id: "ot056",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was struck with leprosy after speaking against Moses?",
    choices: ["Zipporah", "Miriam", "Deborah", "Rahab"],
    answer: 1,
    reference: "Numbers 12:10",
    verseText: ""
  },
  {
    id: "ot057",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What unusual means did God use to speak rebuke to Balaam?",
    choices: ["A raven", "A burning bush", "A donkey", "Thunder"],
    answer: 2,
    reference: "Numbers 22:28",
    verseText: ""
  },
  {
    id: "ot058",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened to Korah and his company when they rebelled against Moses and Aaron?",
    choices: ["They were exiled", "They were blinded", "The earth swallowed them", "They fled to Egypt"],
    answer: 2,
    reference: "Numbers 16:31-33",
    verseText: ""
  },
  {
    id: "ot059",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What object was lifted up in the wilderness so that the bitten Israelites might live?",
    choices: ["A bronze serpent", "A golden calf", "Aaron’s rod", "A silver shield"],
    answer: 0,
    reference: "Numbers 21:8-9",
    verseText: ""
  },
  {
    id: "ot060",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Why was Moses not permitted to bring Israel into the Promised Land?",
    choices: ["He doubted the manna", "He feared the Canaanites", "He struck the rock in unbelief", "He left Sinai too soon"],
    answer: 2,
    reference: "Numbers 20:10-12",
    verseText: ""
  },
  {
    id: "ot061",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What miracle occurred when the priests carrying the ark stepped into the Jordan?",
    choices: ["The river turned to blood", "The waters parted", "Fire came down", "Fish died"],
    answer: 1,
    reference: "Joshua 3:15-17",
    verseText: ""
  },
  {
    id: "ot062",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who hid the Israelite spies in Jericho?",
    choices: ["Jael", "Rahab", "Deborah", "Miriam"],
    answer: 1,
    reference: "Joshua 2",
    verseText: ""
  },
  {
    id: "ot063",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did Achan secretly take from Jericho that brought trouble on Israel?",
    choices: ["Only silver", "A Babylonish garment, silver, and gold", "Food and wine", "Weapons and livestock"],
    answer: 1,
    reference: "Joshua 7:21",
    verseText: ""
  },
  {
    id: "ot064",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Which judge made a rash vow involving whoever first came from his house to meet him?",
    choices: ["Gideon", "Samson", "Jephthah", "Ehud"],
    answer: 2,
    reference: "Judges 11:30-31",
    verseText: ""
  },
  {
    id: "ot065",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who was the Moabite widow who became the great-grandmother of David?",
    choices: ["Rahab", "Esther", "Ruth", "Naomi"],
    answer: 2,
    reference: "Ruth 4:17",
    verseText: ""
  },
  {
    id: "ot066",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What did Hannah dedicate to the LORD before he was born?",
    choices: ["Her first harvest", "Her son", "Her flock", "Her inheritance"],
    answer: 1,
    reference: "1 Samuel 1:11",
    verseText: ""
  },
  {
    id: "ot067",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened when Uzzah put out his hand to steady the ark?",
    choices: ["He was blessed", "He was struck dead", "He became a priest", "Nothing happened"],
    answer: 1,
    reference: "2 Samuel 6:6-7",
    verseText: ""
  },
  {
    id: "ot068",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Which king saw the shadow go backward as a sign from the LORD?",
    choices: ["Josiah", "Hezekiah", "Uzziah", "Jehoshaphat"],
    answer: 1,
    reference: "2 Kings 20:9-11",
    verseText: ""
  },
  {
    id: "ot069",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who found the Book of the Law during temple repairs in the days of Josiah?",
    choices: ["Abiathar", "Hilkiah", "Nathan", "Azariah"],
    answer: 1,
    reference: "2 Kings 22:8",
    verseText: ""
  },
  {
    id: "ot070",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened to King Uzziah when he presumptuously entered the temple to burn incense?",
    choices: ["He fell dead", "He became blind", "He was struck with leprosy", "He lost his throne that day"],
    answer: 2,
    reference: "2 Chronicles 26:16-21",
    verseText: ""
  },
  {
    id: "ot071",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened to the Assyrian army besieging Jerusalem in the days of Hezekiah?",
    choices: ["They conquered the city", "They withdrew after tribute", "An angel smote them by night", "They joined Judah"],
    answer: 2,
    reference: "2 Kings 19:35",
    verseText: ""
  },
  {
    id: "ot072",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What object did Jeremiah wear and then mar to illustrate Judah’s corruption?",
    choices: ["A leather belt", "A linen girdle", "A priestly robe", "A crown"],
    answer: 1,
    reference: "Jeremiah 13:1-11",
    verseText: ""
  },
  {
    id: "ot073",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What happened to Ezekiel’s wife as a sign to the house of Israel?",
    choices: ["She was healed", "She died suddenly", "She was taken captive", "She became barren"],
    answer: 1,
    reference: "Ezekiel 24:15-18",
    verseText: ""
  },
  {
    id: "ot074",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "Who issued the decree allowing the Jews to return and rebuild the house of the LORD in Jerusalem?",
    choices: ["Nebuchadnezzar", "Darius", "Cyrus", "Artaxerxes"],
    answer: 2,
    reference: "Ezra 1:1-3",
    verseText: ""
  },
  {
    id: "ot075",
    game: "Old Testament Events",
    difficulty: "Advanced",
    question: "What feast was instituted in the book of Esther to commemorate the Jews’ deliverance from Haman’s plot?",
    choices: ["Passover", "Tabernacles", "Purim", "Weeks"],
    answer: 2,
    reference: "Esther 9:26-28",
    verseText: ""
  }
];

if (typeof window !== "undefined") {
  window.oldTestamentQuestions = oldTestamentQuestions;
}