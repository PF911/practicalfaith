const namesQuestions = [
  {
    "id": 22001,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does the name 'Jesus' mean, and how does Matthew 1:21 explicitly connect the name to his mission?",
    "choices": [
      "'The LORD saves' — Matthew says 'He shall save His people from their sins,' making the name a direct mission statement",
      "'Anointed One' — connecting to the title Messiah and his role as king",
      "'Son of man' — declaring his identification with humanity in suffering",
      "'God with us' — emphasizing his divine presence among Israel"
    ],
    "answer": 0,
    "reference": "Matthew 1:21; Luke 1:31",
    "verseText": "You shall call His name JESUS, for He will save His people from their sins.",
    "explanation": "'Jesus' is the Greek form of the Hebrew 'Yeshua' (Joshua), meaning 'Yahweh saves' or 'the LORD is salvation.' Matthew's interpretive comment makes the name's meaning explicit — it is a mission declaration embedded in the incarnation."
  },
  {
    "id": 22002,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Immanuel' mean, and where in Matthew does the angel explicitly interpret it?",
    "choices": [
      "'Son of God' — interpreted by Peter at Caesarea Philippi in Matthew 16",
      "'God with us' — interpreted in Matthew 1:23, applied to Jesus as the fulfillment of Isaiah 7:14",
      "'The Promised One' — interpreted by Simeon at the temple in Luke 2",
      "'Savior' — interpreted at Jesus' baptism in Matthew 3:17"
    ],
    "answer": 1,
    "reference": "Matthew 1:23; Isaiah 7:14",
    "verseText": "They shall call His name Immanuel, which is translated, 'God with us.'",
    "explanation": "Matthew quotes Isaiah 7:14 and then provides the translation ('God with us') — one of the rare cases where the Gospel writer glosses a Hebrew/Aramaic term in Greek. The name declares the theological meaning of the incarnation: God has come to dwell among his people."
  },
  {
    "id": 22003,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does God change Abram's name to in Genesis 17, and what does the new name declare about the covenant promise?",
    "choices": [
      "Isaac — 'laughter' — because Sarah laughed at the announcement",
      "Israel — 'he who strives with God' — after the encounter at Peniel",
      "Abraham — 'father of a multitude' — naming him as what God was making him before the promise was fulfilled",
      "Melchizedek — 'king of righteousness' — as a priestly title"
    ],
    "answer": 2,
    "reference": "Genesis 17:5",
    "verseText": "No longer shall your name be called Abram, but your name shall be Abraham; for I have made you a father of many nations.",
    "explanation": "'Abram' means 'exalted father'; 'Abraham' means 'father of a multitude.' The name change is a covenant speech act — God names Abraham as what he is making him. The new name carries the promise within it every time it is spoken."
  },
  {
    "id": 22004,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does 'Israel' mean, and what night encounter gives rise to Jacob's new name in Genesis 32?",
    "choices": [
      "'Father of twelve' — given when all twelve sons were born",
      "'Blessed of God' — given after the encounter with Esau",
      "'Man of faith' — given to honor his grandfather Abraham's legacy",
      "'He strives with God' or 'God strives' — given after Jacob wrestles all night with a divine figure and prevails"
    ],
    "answer": 3,
    "reference": "Genesis 32:28",
    "verseText": "Your name shall no longer be called Jacob, but Israel; for you have struggled with God and with men, and have prevailed.",
    "explanation": "The name 'Israel' (Yisra'el) combines the root meaning 'to strive' with El (God). Jacob's night of wrestling — culminating in blessing and a limp — becomes the founding moment for an entire people's identity. Israel's vocation of wrestling with God is encoded in the name."
  },
  {
    "id": 22005,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does the name 'Moses' mean, and who provides the explanation in Exodus 2?",
    "choices": [
      "'Drawn out' — explained by Pharaoh's daughter who drew him from the water and named him accordingly",
      "'Deliverer' — explained by God at the burning bush as a declaration of mission",
      "'Shepherd' — explained by Jethro when Moses tended his flocks",
      "'Servant of God' — explained by Moses' mother when she returned him to Pharaoh's household"
    ],
    "answer": 0,
    "reference": "Exodus 2:10",
    "verseText": "She called his name Moses, saying, 'Because I drew him out of the water.'",
    "explanation": "The Egyptian princess provides an explanation based on the Hebrew root mashah (to draw out). Whether she spoke in Hebrew or the Egyptian name Mose is also embedded in the account, the narrative plants the etymology: drawn from water to draw a people through water."
  },
  {
    "id": 22006,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does 'Peter' (Petros) mean, and what does Jesus declare when giving Simon this name in Matthew 16?",
    "choices": [
      "'Strong' — 'You will be the strength of the twelve'",
      "'Rock' — 'On this rock I will build My church' — connecting the name to the foundation of the community built on confessing Christ",
      "'Leader' — 'You will lead my people Israel as their shepherd'",
      "'Shepherd' — 'You will feed my sheep after I have departed'"
    ],
    "answer": 1,
    "reference": "Matthew 16:18",
    "verseText": "You are Peter, and on this rock I will build My church.",
    "explanation": "The Greek Petros (Peter) and petra (rock) are related — Jesus plays on the connection. The name is a re-creation: Simon was unstable and impulsive, but Jesus names him as what he is being made into through the confession of faith that Peter has just uttered."
  },
  {
    "id": 22007,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Barnabas' mean according to Acts 4:36, and what does it reveal about the character this name was earned for?",
    "choices": [
      "'Son of Thunder' — the name Jesus gave to the sons of Zebedee for their fiery temperament",
      "'Son of God' — a messianic title applied to him by the Jerusalem apostles",
      "'Son of Encouragement' — Acts explains the name when introducing him as a model of generous giving to the community",
      "'Son of Consolation' only — the fuller range of meaning (encouragement) is unique to the NKJV translation"
    ],
    "answer": 2,
    "reference": "Acts 4:36",
    "verseText": "Barnabas (which is translated Son of Encouragement), a Levite of the country of Cyprus.",
    "explanation": "Barnabas was the apostles' nickname for Joseph of Cyprus — they named him for what he was. His subsequent actions (selling property, advocating for Paul, encouraging Mark) demonstrate the name was not wishful thinking but an accurate description."
  },
  {
    "id": 22008,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does 'Samuel' mean, and how does Hannah's explanation connect to her prayer in 1 Samuel 1?",
    "choices": [
      "'Gift of God' — because she had given up hope before conceiving",
      "'Servant of the temple' — because she dedicated him to serve at Shiloh",
      "'God has remembered' — because God opened her womb after years of barrenness",
      "'Heard by God' or 'asked of God' — Hannah says 'I have asked him of the LORD' (sha'al = ask, shama = hear)"
    ],
    "answer": 3,
    "reference": "1 Samuel 1:20",
    "verseText": "She called his name Samuel, saying, 'Because I have asked for him from the LORD.'",
    "explanation": "The Hebrew root sha'al (to ask/request) is embedded in Samuel's name. Hannah's explanation is theological: the child who came in answer to desperate prayer carries that prayer in his name every time it is spoken. The name is a walking testimony to answered prayer."
  },
  {
    "id": 22009,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does 'Isaac' mean, and which two people are recorded laughing in connection with his birth promise?",
    "choices": [
      "'Laughter' — Abraham laughs in Genesis 17 when told he will have a son at 100; Sarah laughs in Genesis 18 when overhearing the promise",
      "'Joy' — Abraham and Sarah both express joy at the announcement",
      "'Promise' — Hagar and Abraham laugh together at the marvel of divine faithfulness",
      "'Wonder' — the attending angels and Sarah laugh at the unprecedented announcement"
    ],
    "answer": 0,
    "reference": "Genesis 17:17; Genesis 18:12",
    "verseText": "And Abraham... fell on his face and laughed.",
    "explanation": "The name Yitzhak means 'he laughs.' Abraham's laughter in 17:17 is ambiguous (disbelief? joy?), Sarah's in 18:12 is disbelieving. God himself picks the name (17:19), sealing the laughter into the covenant child's identity — God has the last laugh."
  },
  {
    "id": 22010,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does 'Solomon' mean, and how does the name connect to David's prayer for his son's reign?",
    "choices": [
      "'Builder' — because Solomon's primary achievement was constructing the temple",
      "'Peace' (shalom) — David prayed for a son who would build the temple in peace; the name anticipated and declared the character of his son's kingdom",
      "'Wise' — because God granted wisdom above all others",
      "'Beloved' — because he was the favored son of Bathsheba whom David loved"
    ],
    "answer": 1,
    "reference": "1 Chronicles 22:9",
    "verseText": "His name shall be Solomon, for I will give peace and quietness to Israel in his days.",
    "explanation": "Shlomo comes from shalom (peace). God himself names the child before birth and explains why: 'I will give peace' — the name is prophetic, encoding the character of his reign. The name was appropriate before Solomon's first act; it was the reign's promise, not summary."
  },
  {
    "id": 22011,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Bethlehem' mean, and what theological resonance does this meaning carry in the New Testament nativity accounts?",
    "choices": [
      "'House of David' — pointing to the royal dynasty through which Messiah would come",
      "'House of peace' — anticipating the ministry of the Prince of Peace",
      "'House of bread' — Jesus, the Bread of Life who feeds the world, is born in the town whose name means bread",
      "'House of the LORD' — because it was a sacred city long before the temple"
    ],
    "answer": 2,
    "reference": "John 6:35; Micah 5:2",
    "verseText": "But you, Bethlehem Ephrathah... yet out of you shall come forth to Me the One to be Ruler in Israel.",
    "explanation": "'Beth-lechem' literally means 'house of bread.' The theological symmetry is striking: the Bread of Life (John 6:35) comes from the house of bread. This may be symbolic rather than a deliberate biblical word-play, but the convergence of meaning and fulfillment is profound."
  },
  {
    "id": 22012,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Gethsemane' mean, and what symbolic resonance do many commentators note regarding Jesus' passion there?",
    "choices": [
      "'Garden of prayer' — describing Jesus' established habit of praying there with his disciples",
      "'Place of peace' — marking the last moment of calm before the violent arrest",
      "'Garden of sorrow' — a descriptive title given by early Christian tradition to the site",
      "'Oil press' — derived from the Aramaic gat shemanim; the pressing of the Son in anguish anticipates the cross, as olives are crushed to yield oil"
    ],
    "answer": 3,
    "reference": "Matthew 26:36",
    "verseText": "Then Jesus came with them to a place called Gethsemane.",
    "explanation": "'Gethsemane' comes from the Aramaic for oil press (gat = press, shemanim = oils). Commentators note the resonance: the one who would pour himself out was first pressed to his limits in anguish at the very place named for pressing. Whether intentional symbolism or providential convergence, the meaning is evocative."
  },
  {
    "id": 22013,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Golgotha' mean, and what narrative significance does the meaning carry in the crucifixion account?",
    "choices": [
      "'Place of the skull' — the site of death becomes the place where the One who conquered death died, reversing what the name represents",
      "'Place of sacrifice' — directly aligning with temple imagery about offering",
      "'Holy hill' — connecting the crucifixion to the sacred geography of Zion",
      "'Place of judgment' — where Rome executed those condemned under Roman law"
    ],
    "answer": 0,
    "reference": "Matthew 27:33; John 19:17",
    "verseText": "And when they had come to a place called Golgotha, that is to say, Place of a Skull.",
    "explanation": "Golgotha (Aramaic)/Calvary (Latin) means 'skull.' The traditional identification with a skull-shaped hill or a place of executed criminals carries theological weight: the place named for death became the place where death was defeated. The name and the event form a profound contrast."
  },
  {
    "id": 22014,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does the renaming of Saul to Paul in Acts represent in terms of identity and mission?",
    "choices": [
      "A divine renaming equivalent to Abram-Abraham, symbolizing a completely new identity",
      "The shift from his Jewish name to his Roman name as he moves into Gentile mission — not a conversion renaming but a cultural adaptation for the world he was called to reach",
      "A sign of his apostolic authority surpassing the twelve",
      "A judgment on his former life as a persecutor, replacing the name of the first king who failed"
    ],
    "answer": 1,
    "reference": "Acts 13:9",
    "verseText": "Then Saul, who also is called Paul, filled with the Holy Spirit.",
    "explanation": "Unlike Abraham and Jacob, Paul's name change is not presented as a divine renaming event — Luke simply begins using his Roman name (Paulus) as he enters Gentile territory. Jewish people in the first century commonly had both a Hebrew and a Greco-Roman name."
  },
  {
    "id": 22015,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does the compound divine name 'Yahweh-Jireh' mean, and what event in Genesis 22 gives rise to it?",
    "choices": [
      "'The LORD fights for us' — named at the crossing of the Red Sea",
      "'The LORD is my shepherd' — given by Moses at the burning bush",
      "'The LORD will provide' — Abraham names the location where God provided the ram as substitute for Isaac, declaring God's provision for all who trust him",
      "'The LORD our peace' — named at Gideon's altar after the angel appeared"
    ],
    "answer": 2,
    "reference": "Genesis 22:14",
    "verseText": "And Abraham called the name of the place, The-LORD-Will-Provide.",
    "explanation": "Yahweh-Jireh (also spelled Jehovah-Jireh) means 'the LORD sees/provides.' The Hebrew ra'ah (to see) is the root — God saw the need and provided. Abraham's naming of the place becomes a declaration of theological truth: 'On the mountain of the LORD it shall be provided' (22:14)."
  },
  {
    "id": 22016,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'El Shaddai' most likely mean, and where is this name especially prominent in the patriarchal narratives?",
    "choices": [
      "'God Most High' — used primarily in the Psalms for general divine sovereignty",
      "'God the Creator' — used in Genesis 1 alone as a creation title",
      "'God of the armies' — used in Samuel and Kings for divine warrior imagery",
      "'God Almighty' or 'God of the mountain' — used in the covenant promises to Abraham, Isaac, and Jacob in Genesis, especially in connection with fruitfulness and multiplication"
    ],
    "answer": 3,
    "reference": "Genesis 17:1; Exodus 6:3",
    "verseText": "I am God Almighty; walk before Me and be blameless.",
    "explanation": "El Shaddai appears 7 times in Genesis (to Abraham in 17:1, to Jacob in 28:3, 35:11, 43:14, 48:3) and is the dominant patriarchal name for God. Its meaning is debated (Almighty, Mountain, Breast — associated with fruitfulness), but its usage connects to covenant blessing and multiplication promises."
  },
  {
    "id": 22017,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Yahweh-Nissi' mean, and what battle in Exodus 17 gives rise to Moses erecting an altar with this name?",
    "choices": [
      "'The LORD is my banner' — Moses erects an altar after Israel's victory over Amalek, attributing the victory to the LORD's standard lifted over them",
      "'The LORD is my shepherd' — named when Israel camped in the wilderness after manna was given",
      "'The LORD provides' — the water from the rock event in Exodus 17",
      "'The LORD is my peace' — when Israel first worshipped corporately at Sinai"
    ],
    "answer": 0,
    "reference": "Exodus 17:15",
    "verseText": "And Moses built an altar and called its name, The-LORD-Is-My-Banner.",
    "explanation": "Yahweh-Nissi commemorates the battle against Amalek where Moses held up the staff and Israel prevailed. The 'banner' (nes) was a military standard — the LORD's name becomes the rallying point, the declaration that victory belongs to him. 'My hands are on the throne of the LORD' (17:16) explains the altar's meaning."
  },
  {
    "id": 22018,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Yahweh-Shalom' mean, and who names an altar this and why in Judges 6?",
    "choices": [
      "'The LORD our righteousness' — Jeremiah names a Davidic king this in prophecy",
      "'The LORD is peace' — Gideon, after the angel of the LORD tells him not to fear despite having seen the divine face to face",
      "'The LORD is mighty' — Joshua erects the altar after the conquest of Jericho",
      "'The LORD heals' — Moses after God made the bitter water sweet at Marah"
    ],
    "answer": 1,
    "reference": "Judges 6:24",
    "verseText": "So Gideon built an altar there to the LORD, and called it The-LORD-Is-Peace.",
    "explanation": "Gideon saw the angel of the LORD face to face and feared he would die (6:22). God's 'Peace to you; do not fear' (6:23) becomes the name of the altar — a permanent declaration that encountering the LORD need not be lethal if he speaks peace. The altar encodes the experience."
  },
  {
    "id": 22019,
    "game": "Names and Meanings",
    "category": "Prophetic Names",
    "difficulty": "Advanced",
    "question": "What does 'Maher-Shalal-Hash-Baz' mean, and why does God command Isaiah to name his son this in Isaiah 8?",
    "choices": [
      "'God saves quickly' — a promise of rapid deliverance to Hezekiah during Assyrian siege",
      "'God is near' — a word of comfort during military threat from the north",
      "'Swift to spoil, quick to plunder' — a prophetic sign that Assyria would plunder Damascus and Samaria before the child could say 'father' or 'mother'",
      "'The remnant shall return' — matching the name of Isaiah's other son Shear-Jashub"
    ],
    "answer": 2,
    "reference": "Isaiah 8:1-4",
    "verseText": "Call his name Maher-Shalal-Hash-Baz.",
    "explanation": "This is the longest personal name in the Bible. Its meaning is a two-word prophecy: Damascus and Samaria would be looted before the child matures to speak his first words. The child's name was itself a walking prophetic oracle against Israel and Syria."
  },
  {
    "id": 22020,
    "game": "Names and Meanings",
    "category": "Prophetic Names",
    "difficulty": "Advanced",
    "question": "What does 'Shear-Jashub' mean, and why does God have Isaiah bring this son when meeting King Ahaz in Isaiah 7?",
    "choices": [
      "'God is mighty' — emphasizing divine power over the Assyrian threat",
      "'Peace is coming' — contradicting the perceived threat from Syria and Israel",
      "'The LORD fights' — promising military deliverance for Jerusalem",
      "'A remnant shall return' — the son's name is itself a prophetic message to the king, carrying both warning (most will not return) and hope (a remnant will)"
    ],
    "answer": 3,
    "reference": "Isaiah 7:3",
    "verseText": "Go out now to meet Ahaz, you and your son Shear-Jashub.",
    "explanation": "Bringing Shear-Jashub to the meeting was itself a sermon. The name means 'a remnant shall return' — the 'shall' points to judgment (most go into exile) and hope (some come back). Without a word being said, the child's name addressed both the crisis and the covenant's future."
  },
  {
    "id": 22021,
    "game": "Names and Meanings",
    "category": "Prophetic Names",
    "difficulty": "Advanced",
    "question": "What does 'Lo-Ammi' mean in Hosea 1, and what is its theological force as a name given to Hosea's child?",
    "choices": [
      "'Not my people' — it reverses the covenant formula ('you are my people / I am your God'), declaring that Israel's unfaithfulness has broken the covenant relationship",
      "'Not my servant' — a judgment on Hosea for marrying Gomer against convention",
      "'Not my son' — rejecting the royal line of the northern kingdom",
      "'Not my land' — promising the imminent removal of Israel from Canaan"
    ],
    "answer": 0,
    "reference": "Hosea 1:9",
    "verseText": "Call his name Lo-Ammi; for you are not My people, and I will not be your God.",
    "explanation": "The covenant formula is 'I will be your God and you will be my people' (Ex 6:7, Lev 26:12). Lo-Ammi ('not my people') is the formal covenant reversal — the child's name declares the covenant broken. But Hosea 2:23 reverses it: 'I will say to Lo-Ammi, You are My people.'"
  },
  {
    "id": 22022,
    "game": "Names and Meanings",
    "category": "Prophetic Names",
    "difficulty": "Advanced",
    "question": "What does 'Lo-Ruhamah' mean in Hosea 1, and how does it reverse a key covenant quality?",
    "choices": [
      "'No comfort' — Israel would find no comfort in the Assyrian exile",
      "'No mercy' or 'not pitied' — it reverses the steadfast covenant mercy (rahamim) God had shown Israel, signaling that judgment has suspended his compassionate response",
      "'No hope' — a total rejection without any remaining future",
      "'Not remembered' — God would forget Israel's history and covenant with them"
    ],
    "answer": 1,
    "reference": "Hosea 1:6",
    "verseText": "Call her name Lo-Ruhamah, for I will no longer have mercy on the house of Israel.",
    "explanation": "Ruhamah comes from raham (womb/compassion) — it is the same root as the Hebrew word for God's compassionate mercy. 'Lo-Ruhamah' names the suspension of that mercy. Like Lo-Ammi, it is eventually reversed: Hosea 2:23, 'I will have mercy on her who had not obtained mercy.'"
  },
  {
    "id": 22023,
    "game": "Names and Meanings",
    "category": "Prophetic Names",
    "difficulty": "Advanced",
    "question": "What does 'Ichabod' mean, and why is this name given in 1 Samuel 4?",
    "choices": [
      "'God is with us' — a cry of desperate hope at the moment of military defeat",
      "'God is great' — an expression of faith that God would reclaim his glory",
      "'The glory has departed' — given at the birth of Phinehas's son when the ark was captured, Eli died, and Phinehas's wife died in childbirth",
      "'Son of sorrow' — connecting to Rachel's death naming her son Ben-oni"
    ],
    "answer": 2,
    "reference": "1 Samuel 4:21",
    "verseText": "She named the child Ichabod, saying, 'The glory has departed from Israel!'",
    "explanation": "'Ichabod' (I-kavod) means 'where is the glory?' or 'no glory.' The dying woman refuses to name the birth as good news — the ark (the symbol of God's presence) has been captured. The child is named after the catastrophe. Ichabod's birth is simultaneously a death announcement."
  },
  {
    "id": 22024,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Peniel' (also Penuel) mean, and what is the theological weight of Jacob's declaration about seeing God face to face?",
    "choices": [
      "'God has blessed me' — emphasizing the blessing received through the struggle",
      "'God has wrestled with me' — naming the experience from the divine side",
      "'God has prevailed' — since Jacob limped away, God 'won' the encounter",
      "'Face of God' — Jacob names it because he saw God face to face and his life was preserved, declaring that encounter with the living God is both possible and survival-worthy"
    ],
    "answer": 3,
    "reference": "Genesis 32:30",
    "verseText": "So Jacob called the name of the place Peniel: 'For I have seen God face to face, and my life is preserved.'",
    "explanation": "'Peniel' (face of God) names the encounter's defining characteristic. The astonishment in the declaration is that seeing God face to face — normally considered fatal (Ex 33:20) — resulted in preservation. The place name encodes this theological paradox: dangerous proximity to God that became blessing."
  },
  {
    "id": 22025,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Elijah' mean, and how does the meaning connect to his entire ministry against Baal worship?",
    "choices": [
      "'My God is Yahweh' (El = God, ijah = Yahweh) — his very name was a declaration of exclusive monotheism against Baal and the Baal cult",
      "'God is creator' — a theological title against nature religions claiming creation sovereignty",
      "'God is strong' — a name given after his demonstration of power at Carmel",
      "'God's prophet' — a descriptive occupational title rather than a personal name"
    ],
    "answer": 0,
    "reference": "1 Kings 18:36-39",
    "verseText": "LORD God of Abraham, Isaac, and Israel, let it be known this day that You are God in Israel.",
    "explanation": "Before Elijah opened his mouth at Carmel, his name already preached: 'my God is Yahweh.' In a culture where the divine name was contested, Elijah's identity was a standing confession. His ministry was simply living up to his name — demonstrating its truth publicly and at cost."
  },
  {
    "id": 22026,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Gilgal' mean, and what covenant ceremony there gives the name theological significance in Joshua 5?",
    "choices": [
      "'Holy ground' — connecting to the burning bush where Moses removed his sandals",
      "'Rolling away' — God 'rolls away the reproach of Egypt' through circumcision there, marking Israel's covenant identity restored before entering the land",
      "'Place of rest' — anticipating the Sabbath rest promised in Canaan",
      "'God's provision' — where manna ceased and Israel ate the produce of Canaan"
    ],
    "answer": 1,
    "reference": "Joshua 5:9",
    "verseText": "The LORD said to Joshua, 'This day I have rolled away the reproach of Egypt from you.' Therefore the name of the place is called Gilgal.",
    "explanation": "God himself provides the etymology: Gilgal (from galal, to roll). The wilderness generation had not been circumcised; at Gilgal the covenant sign is restored and God declares the shame of slavery 'rolled away.' The name preserves the declaration."
  },
  {
    "id": 22027,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What double meaning does 'Beersheba' carry in Genesis 21, and what covenant gives rise to the name?",
    "choices": [
      "'Well of blessing' — where Abraham was blessed after the Akedah",
      "'Well of peace' — where Abraham and Abimelech made peace permanently",
      "'Well of the oath' and 'well of seven' — seven ewe lambs ratify the oath between Abraham and Abimelech; both the oath and the number are preserved in the name",
      "'Living water' — anticipating Ezekiel's river of life flowing from the temple"
    ],
    "answer": 2,
    "reference": "Genesis 21:31",
    "verseText": "Therefore he called that place Beersheba, because the two of them swore an oath there.",
    "explanation": "Be'er-sheva combines be'er (well) with either sheva' (seven) or shvu'a (oath) — and the text plays on both. Abraham sets apart seven (sheva) lambs and swears an oath (sheva') there. The name memorializes both the number of lambs and the covenant sworn over them."
  },
  {
    "id": 22028,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Bethel' mean, and what divine encounter leads Jacob to give this name in Genesis 28?",
    "choices": [
      "'House of prayer' — after Jacob's vow to tithe and return safely",
      "'Gate of heaven' — the primary meaning Jacob himself uses in his declaration",
      "'God's gate' — pointing to Bethel as an entry point into Canaan from the east",
      "'House of God' — Jacob names the stone pillar 'Beth-El' because God was in that place, revealed in the dream of the staircase with angels ascending and descending"
    ],
    "answer": 3,
    "reference": "Genesis 28:19",
    "verseText": "He called the name of that place Bethel; but the name of that city had been Luz previously.",
    "explanation": "Jacob renames Luz to Beth-El (house of God). His declaration is actually 'this is the gate of heaven' (28:17), but the name he gives the place is Beth-El. What had been a Canaanite cult site ('Luz' has no clear meaning) is renamed with the encounter's theological content."
  },
  {
    "id": 22029,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Ebenezer' mean, and what occasion in 1 Samuel 7 leads Samuel to erect a stone with this name?",
    "choices": [
      "'Stone of help' — Samuel erects it saying 'Thus far the LORD has helped us' after God throws the Philistines into confusion at Israel's prayer-meeting",
      "'God is strong' — after Israel's armies defeated Philistia in open battle",
      "'Stone of remembrance' — after the covenant was renewed at Mizpah",
      "'God remembers' — after the ark was returned and Israel praised at Kiriath Jearim"
    ],
    "answer": 0,
    "reference": "1 Samuel 7:12",
    "verseText": "Then Samuel took a stone and set it up between Mizpah and Shen, and called its name Ebenezer, saying, 'Thus far the LORD has helped us.'",
    "explanation": "'Eben-ezer' means 'stone of help.' The irony is that 'Ebenezer' also appears in 1 Samuel 4 as the site where the ark was captured — Israel's great defeat. Samuel's stone redeems the name: the same location that witnessed God's withdrawal now witnesses divine rescue."
  },
  {
    "id": 22030,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Mizpah' mean, and what covenant memorial does it mark in Genesis 31?",
    "choices": [
      "'Place of prayer' — where they prayed together at their parting",
      "'Watchtower' or 'lookout' — Laban and Jacob erect a stone heap as a witness and invoke the LORD to watch between them when they are absent from each other",
      "'City of refuge' — where Jacob sought safety from Laban's pursuit",
      "'Place of blessing' — where Laban pronounced a blessing over Jacob's departure"
    ],
    "answer": 1,
    "reference": "Genesis 31:49",
    "verseText": "Mizpah, because he said, 'May the LORD watch between you and me when we are absent one from another.'",
    "explanation": "'Mizpah' (from tsapah, to watch) is named for the invocation: 'the LORD watch between us.' The Mizpah benediction ('may the LORD watch between me and thee') is often used as a blessing, though in context it was more a treaty warning — God as the enforcer of their agreement."
  },
  {
    "id": 22031,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Yahweh-Tsidkenu' mean, and to whom does Jeremiah apply this name in chapter 23?",
    "choices": [
      "Applied to the temple — where righteousness was administered through the sacrificial system",
      "Applied to Israel as a people — because God had declared them righteous through covenant",
      "'The LORD our Righteousness' — applied to a coming Davidic king, a branch from David's line, whose reign would be characterized by justice and righteousness",
      "Applied to the high priest — as the representative of God's righteousness before the people"
    ],
    "answer": 2,
    "reference": "Jeremiah 23:6",
    "verseText": "In His days Judah will be saved, and Israel will dwell safely; now this is His name by which He will be called: THE LORD OUR RIGHTEOUSNESS.",
    "explanation": "'Yahweh-Tsidkenu' (the LORD our righteousness) is applied to a coming Davidic branch who would reign wisely and execute judgment. The name is the program of his reign — he will not merely promise righteousness but be the ground of his people's righteousness before God."
  },
  {
    "id": 22032,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does the divine name 'El Elyon' (God Most High) mean, and who first uses this title in Genesis 14?",
    "choices": [
      "Moses uses it at Sinai, connecting it to the covenant-giving event",
      "Abraham uses it when swearing to Abimelech at Beersheba",
      "The angels use it when announcing Isaac's birth to Sarah",
      "Melchizedek, priest-king of Salem, uses it when blessing Abram — and Abram recognizes Melchizedek's El Elyon as the same God he himself serves"
    ],
    "answer": 3,
    "reference": "Genesis 14:18-20",
    "verseText": "He was the priest of God Most High.",
    "explanation": "El Elyon appears first in Melchizedek's blessing (14:19-20) and then in Abram's oath to the king of Sodom (14:22). Abram's use of El Elyon for 'the LORD' signals that he identifies Melchizedek's Most High God with Yahweh — a significant theological equation."
  },
  {
    "id": 22033,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Maranatha' mean in 1 Corinthians 16:22, and why is it significant that Paul preserves this Aramaic phrase in a Greek letter?",
    "choices": [
      "'Our Lord, come!' — an early liturgical prayer for Christ's return preserved in Aramaic even in Greek churches, showing the prayer predates Paul and was universal in early Christianity",
      "'God is here' — a declaration of divine presence used at the Lord's Supper",
      "'Lord, have mercy' — the earliest recorded penitential prayer of the church",
      "'Blessed is He who comes' — the Passover formula transferred to Christian eucharistic use"
    ],
    "answer": 0,
    "reference": "1 Corinthians 16:22",
    "verseText": "O Lord, come!",
    "explanation": "'Maranatha' is either Maran atha ('Our Lord has come' — past) or Marana tha ('Our Lord, come!' — future petition). Most scholars prefer the latter. Its preservation in Aramaic in a Greek letter to Corinth suggests it was a formula so established it transcended translation."
  },
  {
    "id": 22034,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Jordan' (Yarden) mean, and why is crossing the Jordan a theologically loaded act in Joshua 3?",
    "choices": [
      "'Living water' — because it was the primary water source sustaining life in the dry land",
      "'Descender' (it flows downward) — crossing it marked entry into the promised inheritance, deliberately echoing the Exodus crossing through the sea",
      "'River of life' — anticipating the river flowing from the throne in Revelation 22",
      "'Boundary of promise' — simply noting its function as the edge of the promised land"
    ],
    "answer": 1,
    "reference": "Joshua 3:14-17",
    "verseText": "The priests who bore the ark of the covenant of the LORD stood firm on dry ground in the midst of the Jordan.",
    "explanation": "Yarden comes from yarad (to descend). The crossing pattern deliberately recalls the Red Sea: God stops flowing water, the priests lead carrying the ark, the people cross on dry ground, memorial stones are set up. The Jordan crossing is a second exodus, completing the redemption the first began."
  },
  {
    "id": 22035,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does God's declaration 'I AM WHO I AM' (Ehyeh asher Ehyeh) in Exodus 3 reveal, and how does it relate to the covenant name YHWH?",
    "choices": [
      "It is a refusal to give any name at all, preserving divine mystery",
      "It is a temporary provisional name for the exodus period only, replaced by other names later",
      "It declares God's eternal self-existence and independence — He is not defined by anything outside Himself; the name YHWH likely derives from the same root 'to be'",
      "It reveals a name entirely unknown to the patriarchs who had called God El Shaddai"
    ],
    "answer": 2,
    "reference": "Exodus 3:14-15",
    "verseText": "God said to Moses, 'I AM WHO I AM.' And He said, 'Thus you shall say to the children of Israel, I AM has sent me to you.'",
    "explanation": "The tetragrammaton YHWH is likely a third-person form of the same root hayah (to be): 'He is' or 'He causes to be.' The name says: God's existence is self-derived, self-sustaining, and not conditioned on anything external. He is not God-in-relation-to-X but simply and absolutely IS."
  },
  {
    "id": 22036,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Siloam' mean, and what does John 9:7 explicitly note about this meaning in the healing account?",
    "choices": [
      "'Holy water' — connecting to Levitical ceremonial washing requirements",
      "'Pool of David' — noting its connection to the Davidic city of Jerusalem",
      "'Water of life' — anticipating the river flowing from the throne in Revelation 22",
      "'Sent' — John explicitly translates the name, connecting the blind man's washing in Siloam to Jesus as the One sent by the Father"
    ],
    "answer": 3,
    "reference": "John 9:7",
    "verseText": "Go, wash in the pool of Siloam (which is translated, Sent).",
    "explanation": "John rarely glosses place names, so his note about Siloam meaning 'Sent' is deliberate. The man is sent by the one who is himself sent (John 7:29, 8:42). The pool's name becomes part of the miracle's theology: washing in 'Sent' at the command of the Sent One."
  },
  {
    "id": 22037,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Armageddon' mean, and what Old Testament geography does it connect to in Revelation 16?",
    "choices": [
      "'Mountain of Megiddo' (Har Megiddo) — the site of major ancient battles, used symbolically in Revelation for the final gathering of rebellious forces against God",
      "'Place of final battle' — a location created symbolically with no actual geographical referent",
      "'Mountain of judgment' — from Joel 3's valley of decision",
      "'Mountain of the LORD' — connecting to Zion as the site of divine victory"
    ],
    "answer": 0,
    "reference": "Revelation 16:16",
    "verseText": "And they gathered them together to the place called in Hebrew, Armageddon.",
    "explanation": "'Armageddon' is the Greek transliteration of the Hebrew Har-Megiddo (Mount Megiddo). Megiddo was a strategic valley where decisive battles had been fought (Deborah/Barak against Sisera, Josiah's fatal battle). John uses it symbolically for the final mobilization of cosmic rebellion."
  },
  {
    "id": 22038,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does the name 'Lazarus' (from Hebrew Eleazar) mean, and what theological irony is present in John 11?",
    "choices": [
      "'God is my strength' — yet Lazarus demonstrated utter human weakness",
      "'God has helped' or 'God is my help' — yet Lazarus was utterly helpless in death; the name and the event together declare that God's help comes even through and beyond death",
      "'God's beloved' — connecting to Jesus' love for him which drove the resurrection",
      "'God remembers' — Jesus came after four days, proving God remembered his friend"
    ],
    "answer": 1,
    "reference": "John 11:11",
    "verseText": "Our friend Lazarus sleeps.",
    "explanation": "'Eleazar' means 'God has helped.' The irony: the man named 'God has helped' needs the most dramatic help possible — resurrection from four-day-old death. The name's promise is fulfilled at the extremity of its challenge. The family of the man God helps is the family death visited hardest."
  },
  {
    "id": 22039,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Hosanna' mean, and how does its use in Matthew 21's triumphal entry reveal both praise and petition?",
    "choices": [
      "'Praise the LORD' — a pure doxology similar to Hallelujah",
      "'Blessed is God' — an acknowledgment of divine presence rather than a personal address",
      "'Save now!' or 'save, please!' — from Psalm 118:25; the crowd's shout is both messianic acclaim and a plea for the entering king to bring the deliverance they need",
      "'The LORD reigns' — a coronation declaration without petitionary element"
    ],
    "answer": 2,
    "reference": "Matthew 21:9; Psalm 118:25",
    "verseText": "Hosanna to the Son of David! Blessed is He who comes in the name of the LORD!",
    "explanation": "'Hosanna' is from the Hebrew hosha na (save now/save please). By the first century it had become a liturgical acclamation, but the petitionary meaning was still present. Applied to the Son of David entering Jerusalem, it cries for royal salvation. Both meanings coexist."
  },
  {
    "id": 22040,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Melchizedek' mean, and how does Hebrews 7:2 specifically use both components of the name in its argument?",
    "choices": [
      "'King of peace' — only the second component is explained in Hebrews",
      "'Priest of God Most High' — his office rather than his name is what Hebrews develops",
      "'Eternal priest' — derived from the absence of recorded genealogy rather than from the name itself",
      "'King of righteousness' (melek + tsedek) — Hebrews explicitly interprets both components: 'first being translated king of righteousness, and after that also king of Salem, meaning king of peace'"
    ],
    "answer": 3,
    "reference": "Hebrews 7:2",
    "verseText": "First being translated 'king of righteousness,' and then also king of Salem, meaning 'king of peace.'",
    "explanation": "The author of Hebrews is a careful reader of names: melek (king) + tsedek (righteousness) = king of righteousness. Then Salem (from shalom) = peace. The double name-meaning establishes Melchizedek's character: righteousness before peace — the order Paul also uses in Romans 5."
  },
  {
    "id": 22041,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Theophilus' mean in Luke 1:3 and Acts 1:1, and what range of interpretation does the name's meaning suggest?",
    "choices": [
      "'Lover of God' or 'friend of God' — whether a specific individual or a representative name, Luke addresses someone who is already disposed toward God and wants accurate information",
      "'Most excellent' — a Roman political title indicating Theophilus was a government official",
      "'Greek philosopher' — showing Luke's primary audience was Hellenistic intellectuals",
      "'Benefactor' — indicating Theophilus financially supported Luke's research and writing"
    ],
    "answer": 0,
    "reference": "Luke 1:3-4",
    "verseText": "To write to you an orderly account, most excellent Theophilus.",
    "explanation": "Theo (God) + philos (friend/lover) = 'friend of God.' Whether Theophilus was a real person or a literary device addressing any 'God-lover,' the name positions the reader as already oriented toward the divine — Luke is not evangelizing from scratch but confirming what has been taught."
  },
  {
    "id": 22042,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does Joshua's name mean, and what is significant about the fact that Moses changes Hoshea's name to Joshua in Numbers 13?",
    "choices": [
      "'God is strong' — changed to declare that human strength was insufficient for the task",
      "'The LORD saves' — Moses changes Hoshea ('salvation') to Yehoshua ('Yahweh saves'), adding the divine name, before the spy mission — the one entering the promised land will need exactly this name",
      "'God is with us' — adding the covenantal presence dimension to a generic faith name",
      "'God fights' — changed to a warrior name in preparation for the conquest"
    ],
    "answer": 1,
    "reference": "Numbers 13:16",
    "verseText": "Moses called Hoshea the son of Nun, Joshua.",
    "explanation": "Hoshea means 'salvation'; Yehoshua adds the divine name Yahweh — 'the LORD is salvation' or 'the LORD saves.' The change made before the spy mission is prophetic: the one who would lead Israel into the promised land required a name that declared who would actually accomplish it."
  },
  {
    "id": 22043,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Capernaum' likely mean, and what terrible irony does Jesus note about this city in Matthew 11:23?",
    "choices": [
      "'City of the sea' — simply noting its location on the Sea of Galilee",
      "'City of the Gentiles' — because of its mixed Jewish-Gentile population",
      "'Village of Nahum' or 'village of consolation/compassion' — yet Jesus pronounces woe on it for rejecting the miracles done there, making it the most-privileged and most-condemned",
      "'City of the sun' — named for a pagan solar deity the Canaanites worshipped there"
    ],
    "answer": 2,
    "reference": "Matthew 11:23",
    "verseText": "And you, Capernaum, who are exalted to heaven, will be brought down to Hades.",
    "explanation": "'Capernaum' likely derives from Kfar-Nahum (village of Nahum/consolation). Jesus had made it his ministry headquarters; it received more miracles than anywhere else. Yet its rejection was more culpable precisely because of that privilege. The consolation-village received no comfort from what it saw."
  },
  {
    "id": 22044,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Yahweh Sabaoth' (the LORD of hosts) declare, and in what contexts is it especially prominent?",
    "choices": [
      "'God of creation' — used primarily in Genesis for the Lord of the created order",
      "'God of the covenant' — a title exclusive to Moses in the Sinai period",
      "'God of the temple' — used only in cultic contexts and priestly literature",
      "'LORD of armies' (heavenly and earthly) — deployed especially in prophetic literature when Israel faces crises, declaring God as commander of forces beyond human sight"
    ],
    "answer": 3,
    "reference": "Isaiah 6:3; 1 Samuel 17:45",
    "verseText": "Holy, holy, holy is the LORD of hosts; the whole earth is full of His glory!",
    "explanation": "Yahweh Sabaoth (LORD of hosts/armies) appears over 260 times in the OT, concentrated in the Prophets (Isaiah 56x, Jeremiah 82x, Zechariah 53x). The 'hosts' are the heavenly armies and potentially the stars. The name asserts God's command over all powers, visible and invisible."
  },
  {
    "id": 22045,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Alpha and Omega' mean in Revelation, and why does Christ apply this self-designation to himself?",
    "choices": [
      "The first and last letters of the Greek alphabet — declaring that Christ encompasses the entire range of existence and history, from beginning to end",
      "The first and last letters of the Latin alphabet — demonstrating universal knowledge through linguistic mastery",
      "A coded reference to Roman emperors whose titles were being subverted",
      "A symbol of wisdom derived from ancient Greek mathematical theory"
    ],
    "answer": 0,
    "reference": "Revelation 1:8; 22:13",
    "verseText": "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.",
    "explanation": "Alpha and Omega (first and last letters of the Greek alphabet) translate the Hebrew idiom 'from aleph to tav' (first and last Hebrew letters) meaning totality. Applied to Christ, it claims what Isaiah 44:6 applies to YHWH: 'I am the first and I am the last; apart from me there is no God.'"
  },
  {
    "id": 22046,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does 'Ishmael' mean, and how is the meaning connected to Hagar's experience in Genesis 16?",
    "choices": [
      "'God has forgotten' — a name of divine abandonment reflecting Hagar's experience",
      "'God hears' — the angel tells Hagar 'the LORD has heard your affliction' and the child is named accordingly; his life began in a moment when God heard the cry of an outcast",
      "'God sees' — the name Hagar herself gives to God as El Roi (the God who sees)",
      "'God provides' — connecting to Abraham's provision of bread and water for them at their expulsion"
    ],
    "answer": 1,
    "reference": "Genesis 16:11",
    "verseText": "You shall call his name Ishmael, because the LORD has heard your affliction.",
    "explanation": "'Ishmael' (Yishma'el) = God (El) hears (yishma). The angel tells Hagar the name and the reason: her cry reached God in the wilderness. Hagar separately names God 'El-Roi' (the God who sees — 16:13). Together the names declare that God both hears and sees the abandoned."
  },
  {
    "id": 22047,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Zacchaeus' likely mean, and what irony exists between the name and his life in Luke 19?",
    "choices": [
      "'Beloved' — ironic since he was despised and isolated by the community",
      "'Short' — a later interpretation read from the narrative description",
      "'Pure' or 'innocent' (from the Hebrew Zakkai) — deeply ironic since he was a chief tax collector enriched through dishonest means, until his restoration fulfilled the name's meaning",
      "'Wealthy' — connecting his identity entirely to his financial success"
    ],
    "answer": 2,
    "reference": "Luke 19:2-8",
    "verseText": "He was a chief tax collector, and he was rich.",
    "explanation": "Zacchaeus derives from the Hebrew Zakkai, related to zakah (to be pure, clean). The irony: the man named 'pure' was publicly corrupt. The resolution: when Jesus enters his house, Zacchaeus announces restitution and generosity — the encounter restores what the name had promised."
  },
  {
    "id": 22048,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Areopagus' mean, and why is it significant that Paul addresses the Athenians there in Acts 17?",
    "choices": [
      "'Hill of wisdom' — the location where the great Athenian philosophers traditionally gathered to teach",
      "'Hill of judgment' — where Paul was formally tried before being acquitted",
      "'Sacred hill' — adjacent to the Acropolis and associated with the Parthenon",
      "'Hill of Ares' (Mars' Hill) — the traditional site of Athenian intellectual and legal deliberation; Paul plants his argument about the unknown God at the very center of Greek philosophical culture"
    ],
    "answer": 3,
    "reference": "Acts 17:19-22",
    "verseText": "They took him and brought him to the Areopagus, saying, 'May we know what this new doctrine is?'",
    "explanation": "Areopagus = Ares (god of war) + pagos (hill). The council that met there was Athens' most august deliberative body. Paul is not on trial (he's invited to speak) but he is in the precise location where Athens determined matters of religion, philosophy, and public morality — maximum cultural engagement."
  },
  {
    "id": 22049,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does the Greek name 'Philip' mean, and what does its presence among Jewish disciples reveal about first-century culture?",
    "choices": [
      "'Lover of horses' — a thoroughly Greek name carried by both an apostle and a deacon/evangelist, revealing the Hellenized cultural world of first-century Judaism",
      "'Friend of God' — a Hebrew theological name in Greek translation",
      "'Son of grace' — a Christian adaptation of a Jewish name",
      "'Servant of wisdom' — derived from Greek philosophical tradition"
    ],
    "answer": 0,
    "reference": "John 1:43-44; Acts 8:5",
    "verseText": "He first found his own brother Simon... Philip found Nathanael.",
    "explanation": "Philippos means 'horse-lover' (philos = lover, hippos = horse) — a distinctly Greek name with no Jewish religious content. That it was borne by Jewish followers of Jesus in Galilee and Caesarea reflects how thoroughly Greek culture had penetrated Jewish life in the Hellenistic period."
  },
  {
    "id": 22050,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Eden' mean, and how does the meaning connect to the garden's theological function in Genesis 2?",
    "choices": [
      "'Paradise' — a Persian word for a walled garden, used as a general term for beauty",
      "'Delight' or 'pleasure' — the garden was the place of God's pleasurable communion with humanity; its loss was simultaneously the loss of that delightful fellowship",
      "'Life' — because the tree of life was located there",
      "'Beginning' — the Hebrew word for 'first' applied to the primordial place"
    ],
    "answer": 1,
    "reference": "Genesis 2:8-15",
    "verseText": "The LORD God planted a garden eastward in Eden.",
    "explanation": "Eden likely derives from a Semitic root meaning 'luxury, delight, pleasure.' The garden was the place where God's presence and human flourishing coincided — the place of delight shared between Creator and creature. The fall's consequence is expulsion from that delight."
  },
  {
    "id": 22051,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What is the significance of God telling Moses in Exodus 6:3 that the patriarchs knew Him as El Shaddai but not by His name YHWH?",
    "choices": [
      "That the patriarchs served a lesser or different God than Moses encountered",
      "That the name was a secret deliberately hidden from the patriarchs until revealed at Sinai",
      "The name YHWH reaches its full covenantal depth in the exodus — God had been El Shaddai in the age of promise; He becomes YHWH-who-acts in the age of deliverance",
      "That El Shaddai and YHWH are entirely separate divine beings who merged at Sinai"
    ],
    "answer": 2,
    "reference": "Exodus 6:2-3",
    "verseText": "I appeared to Abraham, to Isaac, and to Jacob, as God Almighty, but by My name LORD I was not known to them.",
    "explanation": "The patriarchs did use 'LORD' (YHWH), so the verse likely means the name's full covenantal significance was not yet disclosed. The exodus event becomes the definitive self-disclosure: God is not just the mighty El Shaddai who promises — he is the LORD who delivers. The name's full meaning is historical, not merely linguistic."
  },
  {
    "id": 22052,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Amen' mean as both a liturgical response and as Jesus' unique self-designation in John's Gospel?",
    "choices": [
      "'So be it' — a formal agreement implying conditional acceptance of what was stated",
      "'I agree' — a consensus statement aligning one's will with the speaker's word",
      "'It is written' — an appeal to scriptural authority as the basis for the affirmation",
      "'Truly' or 'so it is' — in liturgy it affirms what was said; Jesus' 'Amen, amen I say to you' inverts the formula, making himself the source of truth rather than the responder, claiming divine authority"
    ],
    "answer": 3,
    "reference": "John 1:51; 3:3; 5:19",
    "verseText": "Most assuredly, I say to you...",
    "explanation": "In Jewish liturgy 'Amen' came at the END to ratify what was prayed. Jesus always places it at the BEGINNING of his own statements ('Amen, amen I say to you'). This is unprecedented — no prophet or rabbi prefaced their own words with 'Amen.' It is a claim to be himself the source of authoritative truth."
  },
  {
    "id": 22053,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Bethesda' mean, and how does the pool's name resonate with the healing Jesus performs in John 5?",
    "choices": [
      "'House of mercy' or 'house of grace' — Jesus provides the true mercy the pool's name promised but could never actually deliver",
      "'Pool of healing' — named for its supposed therapeutic properties",
      "'House of grace' — naming God's benevolence in providing a healing site for the sick",
      "'House of compassion' — reflecting the community care that gathered the sick there"
    ],
    "answer": 0,
    "reference": "John 5:2-9",
    "verseText": "There is in Jerusalem by the Sheep Gate a pool, which is called in Hebrew, Bethesda.",
    "explanation": "Beth-esda likely means 'house of grace/mercy' (from hesed). The crowd of sick lay near the pool named for mercy, waiting. Jesus provides the mercy the pool's name promised — not through stirred water and competitive scrambling, but through a direct word of healing to one man who had no one to help him."
  },
  {
    "id": 22054,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Kadesh-Barnea' mean, and what moment in the wilderness narrative makes it a turning-point name?",
    "choices": [
      "'Holy city' — where the law was given a second time before entry",
      "'Holy wilderness of wandering' — the site where Israel's unbelief at the spies' report prevented entry into the land, making it the pivot between promise and 40 years of delay",
      "'God's purification site' — where Israel was ceremonially cleansed before entering Canaan",
      "'God's boundary' — marking the precise edge of the territory God promised Abraham"
    ],
    "answer": 1,
    "reference": "Numbers 13:26; 14:1-4",
    "verseText": "They came back to Moses and Aaron and all the congregation... at Kadesh.",
    "explanation": "Kadesh-Barnea combines Kadesh (holy/set apart, from the root for holiness) with Barnea (a desert region). The name's holiness makes the failure there all the more stark: a holy place became the location of the most costly failure in Israel's wilderness experience — refusing to enter the holy land."
  },
  {
    "id": 22055,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Bethlehem Ephrathah' add by combining both names in Micah 5:2?",
    "choices": [
      "'Ephrathah' means 'fruitful,' emphasizing the abundance of the messianic age to come",
      "'Ephrathah' is where Rachel was buried, adding a note of sorrow to the messianic birth",
      "'Ephrathah' is the ancient clan name, distinguishing this Bethlehem (in Judah) from another Bethlehem in Zebulun, and connecting the prophecy to David's own ancestral roots",
      "'Ephrathah' was a name meaning 'Ruth's homeland,' connecting Micah's prophecy to her ancestry"
    ],
    "answer": 2,
    "reference": "Micah 5:2",
    "verseText": "But you, Bethlehem Ephrathah, though you are little among the thousands of Judah.",
    "explanation": "Ephrathah was the ancient name of the district or clan associated with Bethlehem in Judah. The double name specification in Micah served a practical purpose (there were two Bethlehems) and a theological one: it connects explicitly to the Judahite Bethlehem where David's clan originated."
  },
  {
    "id": 22056,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Nathanael' likely mean, and how might the meaning resonate with Jesus' declaration in John 1:47?",
    "choices": [
      "'Beloved of God' — connecting to Israel as the people God loves",
      "'Son of promise' — like Isaac, whose life was also divinely promised",
      "'Man of faith' — a theological title given at his calling as a disciple",
      "'Gift of God' — Jesus' declaration that Nathanael is 'a true Israelite in whom there is no guile' may echo the integrity the name implies — he is genuinely what God made him"
    ],
    "answer": 3,
    "reference": "John 1:47-49",
    "verseText": "Behold, an Israelite indeed, in whom is no deceit!",
    "explanation": "Nathanael means 'God has given' — a name declaring him as gift. Jesus' observation that he is a 'true Israelite without guile' (deceit/Jacob-ness) is ironic: Jacob/Israel's defining characteristic was guile, yet a man with the name meaning 'God's gift' is a guileless embodiment of the covenant people."
  },
  {
    "id": 22057,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Jericho' connect to thematically, and why is Jesus' healing of blind Bartimaeus near Jericho in Mark 10 theologically significant?",
    "choices": [
      "The first city conquered in Canaan — Jesus healing blind eyes near Jericho as he approaches Jerusalem echoes the opening of the conquest: new things are being won, spiritual blindness overcome",
      "'City of palms' — noted for agriculture and date palm production",
      "'City of the sun' — named for an ancient Canaanite solar shrine",
      "'City of the moon' — named for lunar worship that the Israelites displaced"
    ],
    "answer": 0,
    "reference": "Mark 10:46-52",
    "verseText": "And they came to Jericho. As He went out of Jericho with His disciples... blind Bartimaeus sat by the road begging.",
    "explanation": "Jericho's symbolic weight is enormous: the first city of conquest (Joshua 6), taken by miracle not military power. Jesus passing through Jericho on his final journey to Jerusalem with a blind man receiving sight recalls Joshua's conquest beginning there. New creation's conquest begins with restoring sight."
  },
  {
    "id": 22058,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Penuel/Peniel' mean and what theological tension does Jacob's declaration identify?",
    "choices": [
      "'God has blessed me' — emphasizing the covenant blessing received despite the struggle",
      "'Face of God' — Jacob names it because he saw God face to face and yet his life was preserved, declaring that encounter with the divine is both terrifyingly possible and survivable",
      "'God has wrestled with me' — naming the experience from the divine action's perspective",
      "'God has prevailed' — noting that Jacob's limp proves he lost the contest"
    ],
    "answer": 1,
    "reference": "Genesis 32:30",
    "verseText": "For I have seen God face to face, and my life is preserved.",
    "explanation": "The theological tension the name preserves: seeing God's face was normally thought fatal (Ex 33:20), yet Jacob survived. The name Peniel/Penuel preserves this paradox: 'face of God' — I was at the place of ultimate danger and came through. The limp alongside the blessing keeps the tension: both wound and blessing belong to the encounter."
  },
  {
    "id": 22059,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does 'Gog and Magog' symbolize in Ezekiel 38–39, and how is this imagery reapplied in Revelation 20?",
    "choices": [
      "Two individual kings whose identities are decoded in Daniel's vision",
      "Specific geographical nations north of Israel, identified by later interpreters as Scythia or Russia",
      "A symbolic designation for all forces gathered against God's people in final eschatological assault — Revelation takes Ezekiel's language and reapplies it to the ultimate gathering of all rebellion before its destruction",
      "Ancient Babylonian mythological figures borrowed without theological reinterpretation"
    ],
    "answer": 2,
    "reference": "Ezekiel 38:2; Revelation 20:8",
    "verseText": "Gog and Magog, to gather them together to battle.",
    "explanation": "In Ezekiel, Gog of the land of Magog is a specific northern enemy. In Revelation 20:8, John uses 'Gog and Magog' as a collective name for all nations — the typological expansion is deliberate. Ezekiel's pattern of the final assault against Jerusalem becomes Revelation's pattern for the last rebellion after the millennium."
  },
  {
    "id": 22060,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What does the name 'Naomi' mean, and how does her request in Ruth 1:20 to be called 'Mara' instead show the power of biblical naming?",
    "choices": [
      "'Naomi' means 'favored' and 'Mara' means 'forgotten' — expressing her sense of divine abandonment",
      "'Naomi' means 'blessed' and 'Mara' means 'cursed' — using covenant terminology for blessing and curse",
      "'Naomi' means 'joyful' and 'Mara' means 'mourning' — connecting to ancient Hebrew mourning customs",
      "'Naomi' means 'pleasant'; 'Mara' means 'bitter' — her self-renaming is a theological protest declaring that God has dealt bitterly with her, with the story's resolution showing her name restored through Ruth and Boaz"
    ],
    "answer": 3,
    "reference": "Ruth 1:20",
    "verseText": "Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me.",
    "explanation": "Na'omi means 'pleasant, lovely'; Mara means 'bitter' (the same root as Marah in Exodus 15). Naomi's self-renaming is an act of honest lament. The book's trajectory reverses her declaration — through Ruth and Boaz, Naomi is restored. The final scene shows her cradling a grandson: the bitter has become pleasant again."
  },
  {
    "id": 22061,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Peninnah' mean in 1 Samuel 1, and how does the adversary's name add irony to Hannah's story?",
    "choices": [
      "'Pearl' or 'coral' (precious jewel) — the woman who tormented Hannah bore a name of beauty and value, while Hannah — the barren one — received the son who became the most valued figure of his generation",
      "'Fruitful' — ironic because she was so fertile while Hannah was barren",
      "'Favored' — ironic because she was the less-loved wife despite her fertility",
      "'Firstborn' — connecting to the firstborn blessing that passed to Samuel"
    ],
    "answer": 0,
    "reference": "1 Samuel 1:2",
    "verseText": "Elkanah had two wives: the name of one was Hannah, and the name of the other Peninnah.",
    "explanation": "Peninnah means 'pearl' or 'coral' (a precious stone). Hannah means 'grace' or 'favor.' The woman blessed with children and named for precious jewels spent her blessing tormenting the woman named Grace who was barren. Grace's prayer produced Samuel; the 'pearl' is not mentioned beyond her cruelty."
  },
  {
    "id": 22062,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Mount Moriah' mean, and why does its identification in 2 Chronicles 3:1 as the temple site add theological depth to Genesis 22?",
    "choices": [
      "'Holy mountain' — a generic sacred designation shared across several biblical sites",
      "'The LORD will provide' or 'seen of the LORD' — Abraham's name for the site (Yahweh-Jireh) and Solomon's temple site being the same location weaves together sacrifice, provision, and worship into one location",
      "'Mountain of God' — similar to the name of Sinai in the Pentateuch",
      "'Altar mountain' — because sacrifice was conducted there from Abraham onward"
    ],
    "answer": 1,
    "reference": "Genesis 22:2; 2 Chronicles 3:1",
    "verseText": "Solomon began to build the house of the LORD at Jerusalem on Mount Moriah.",
    "explanation": "If Genesis 22's Moriah and Solomon's temple mount are the same location, the theological connection is staggering: the mountain where God provided a substitute for Isaac became the mountain where Solomon built the temple that housed the daily sacrificial system — and ultimately where the final Substitute was crucified."
  },
  {
    "id": 22063,
    "game": "Names and Meanings",
    "category": "Renaming Events",
    "difficulty": "Advanced",
    "question": "What theological significance does Jesus see in Simon's name at their first meeting in John 1:42?",
    "choices": [
      "He commends him for the strength of faith his name implies",
      "He corrects a mistaken identity, clarifying that his name should have been Andrew",
      "He renames him 'Cephas' (Aramaic for Peter/rock) at the very first meeting — not after a test of faith but prophetically, naming what Simon will become rather than what he currently is",
      "He simply translates his Hebrew name into Greek, noting the equivalence for Gentile hearers"
    ],
    "answer": 2,
    "reference": "John 1:42",
    "verseText": "You are Simon the son of Jonah. You shall be called Cephas (which is translated, A Stone).",
    "explanation": "In John's account, the renaming happens immediately — not at Caesarea Philippi as in Matthew 16. John presents Jesus as one who sees through persons to their destiny. Simon has not yet done anything to merit the name 'rock' — the name is a declaration of what grace will make him, not what nature produced."
  },
  {
    "id": 22064,
    "game": "Names and Meanings",
    "category": "Birth Names",
    "difficulty": "Advanced",
    "question": "What does 'John' (Yohanan) mean, and why is it significant that both John the Baptist and the Apostle John bore this name?",
    "choices": [
      "'Gift of God' — connecting both figures to divine provision",
      "'God's prophet' — a descriptive title given to those in prophetic roles",
      "'God remembers' — connecting to the theme of covenant faithfulness",
      "'The LORD is gracious' — both figures whose ministry concerned divine favor, repentance, and the coming kingdom bore a name declaring God's graciousness"
    ],
    "answer": 3,
    "reference": "Luke 1:13, 63",
    "verseText": "His name is John... his name shall be called John.",
    "explanation": "Yohanan = Yahweh (God) + hanan (to be gracious) = 'the LORD is gracious' or 'God has shown grace.' Both men named John lived at the hinge of redemptive history — one as the final prophet announcing grace, one as the beloved apostle of the God who is love. Both lived the meaning of their shared name."
  },
  {
    "id": 22065,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Nazareth' most likely mean, and what difficulty does Matthew 2:23 present in connecting it to prophecy?",
    "choices": [
      "The exact meaning is uncertain, possibly connected to 'netzer' (branch/shoot) — Matthew may be pointing to a thematic fulfillment of 'branch' prophecies rather than quoting a single text",
      "'Holy city' — Matthew directly quotes this title from the prophet Isaiah",
      "'City of peace' — connecting the town's name to the ministry of the Prince of Peace",
      "'Despised place' — Matthew quotes Psalm 22 to explain the town's low reputation"
    ],
    "answer": 0,
    "reference": "Matthew 2:23",
    "verseText": "And he came and dwelt in a city called Nazareth, that it might be fulfilled which was spoken by the prophets, 'He shall be called a Nazarene.'",
    "explanation": "No OT text says exactly 'He shall be called a Nazarene.' Matthew writes 'spoken by the prophets' (plural, not a single citation) — likely a thematic reference to the 'branch' (netzer) prophecies (Isaiah 11:1, Jer 23:5) and/or the theme of the Messiah coming from a despised, overlooked place."
  },
  {
    "id": 22066,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Kadesh' mean when used by itself in the wilderness narrative, and how does this sacred name contrast with what happens there?",
    "choices": [
      "'Purified' — named for the ceremonial cleansing required at the border",
      "'Holy' or 'set apart' — named for its sacred spring; yet Israel's great act of rebellion (striking the rock instead of speaking to it) and Moses' great failure both occurred at this holy place, creating deep irony",
      "'God's boundary' — marking the limit of the promised land",
      "'Well of holiness' — named for the spring that sustained holiness practices"
    ],
    "answer": 1,
    "reference": "Numbers 20:1-13",
    "verseText": "The congregation came... into the Desert of Zin, and the people stayed in Kadesh.",
    "explanation": "Kadesh shares the root with kadosh (holy). The spring at Kadesh was a notable wilderness oasis and sacred site. The irony is pointed: at the holy place (Kadesh) Moses failed to hallow God ('to sanctify me' — Numbers 20:12). The holy site witnessed the most costly failure of sanctification."
  },
  {
    "id": 22067,
    "game": "Names and Meanings",
    "category": "New Testament Names",
    "difficulty": "Advanced",
    "question": "What does 'Galatia' mean, and how does Paul's letter to the Galatians use their ethnic identity as part of his argument?",
    "choices": [
      "Named for a geographic feature — the plateau region of central Asia Minor",
      "Named for a founding king — carrying no cultural connotations Paul could use",
      "Named for the Celtic/Galatian peoples who settled there — Paul's 'O foolish Galatians!' may carry the cultural connotation of the Galatian reputation for fickleness and impulsiveness, fitting his charge of rapid desertion",
      "Named for a Roman administrative division — purely a political designation without cultural resonance"
    ],
    "answer": 2,
    "reference": "Galatians 3:1",
    "verseText": "O foolish Galatians! Who has bewitched you?",
    "explanation": "The Galatians (Galatai) were Celtic peoples who migrated to Asia Minor in the 3rd century BC. Ancient writers often described Celts/Gauls as brave but impulsive and susceptible to persuasion. Paul's 'who has bewitched you' plays on this susceptibility — they were quickly enchanted by the Judaizers' message."
  },
  {
    "id": 22068,
    "game": "Names and Meanings",
    "category": "Place Names",
    "difficulty": "Advanced",
    "question": "What does 'Zion' originally refer to, and how does the word develop in meaning across biblical usage?",
    "choices": [
      "Only the physical temple mount built by Solomon — all other uses are metaphorical",
      "A tribal territory of Judah, used as a synonym for the southern kingdom",
      "The wilderness of Sinai, where God first dwelt with Israel in the tabernacle",
      "A Canaanite fortress captured by David that becomes the city of David, then the temple mount, then a theological symbol for God's dwelling presence, and finally the eschatological New Jerusalem"
    ],
    "answer": 3,
    "reference": "Psalm 2:6; Isaiah 2:2-3; Hebrews 12:22; Revelation 21:2",
    "verseText": "But you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem.",
    "explanation": "'Zion' begins as a specific Jebusite stronghold (2 Sam 5:7), becomes the 'City of David,' then extends to the whole of Jerusalem, then to the temple mount specifically, then (in the Psalms and Prophets) to the theological symbol of God's dwelling, and in the NT to the heavenly and eschatological city."
  },
  {
    "id": 22069,
    "game": "Names and Meanings",
    "category": "Divine Names",
    "difficulty": "Advanced",
    "question": "What does biblical naming reveal theologically about God's relationship to the names He gives or changes in Scripture?",
    "choices": [
      "God's giving or changing of names is an act of covenant declaration and creation — a name is not merely a label but an announcement of what something truly is or will become by divine purpose",
      "Names in Scripture were primarily practical identifiers borrowed from surrounding cultures without theological significance",
      "Hebrew naming practice was uniquely concerned with aesthetics and cultural tradition rather than meaning",
      "Names carried sacred weight only when administered by priests in an official religious ceremony"
    ],
    "answer": 0,
    "reference": "Genesis 17:5; 32:28; Matthew 1:21; John 1:42",
    "verseText": "No longer shall your name be called Abram, but your name shall be Abraham.",
    "explanation": "Across the canon, divine naming carries ontological weight: God renames Abram as the father of multitudes before he has a son (Gen 17:5), renames Jacob as Israel encoding the nation's vocation (Gen 32:28), names Jesus as the LORD saves (Matt 1:21), renames Simon as rock (John 1:42). In each case, the name declares what God is doing."
  },
  {
    "id": 22070,
    "game": "Names and Meanings",
    "category": "Cross-Category",
    "difficulty": "Advanced",
    "question": "What broader pattern do renaming events in Scripture share that makes them theologically significant beyond mere name-change?",
    "choices": [
      "They are cultural adaptations reflecting the surrounding practice of name changes at major life transitions",
      "They are covenant speech acts — God or his agents rename in moments of covenant formation, mission commissioning, or identity transformation, declaring the future as already established by divine word",
      "They are purely literary devices without historical significance, used by authors to signal narrative turning points",
      "They represent the renaming person's own initiative in self-definition, with God ratifying their choice"
    ],
    "answer": 1,
    "reference": "Genesis 17:5; 32:28; Isaiah 62:2; Matthew 16:18",
    "verseText": "The nations shall see your righteousness... and you shall be called by a new name which the mouth of the LORD will name.",
    "explanation": "The pattern: Abram→Abraham (covenant of circumcision), Jacob→Israel (covenant transformation at Peniel), Simon→Peter (apostolic commission), Saul→Paul (mission to the nations). New names mark new chapters in redemptive history. Isaiah 62:2 extends this: Israel herself will receive a new name in the eschatological age."
  }
];
