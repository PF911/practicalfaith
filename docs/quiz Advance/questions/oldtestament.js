const oldTestamentQuestions = [
  {
    id: 7001,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "Why was Abram's faith in Genesis 15 especially significant in the flow of the covenant narrative?",
    choices: [
      "It replaced circumcision as the covenant sign",
      "It was counted as righteousness before the covenant sign was later given",
      "It proved Abram had never doubted before",
      "It ended all future covenant testing"
    ],
    answer: 1,
    reference: "Genesis 15:6; Genesis 17:10-11; Romans 4:9-12",
    verseText: "He believed in the LORD; and he counted it to him for righteousness."
  },
  {
    id: 7002,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "What is the theological force of God's self-identification as 'I AM THAT I AM' in Exodus 3?",
    choices: [
      "It reveals God as one tribal deity among many",
      "It emphasizes God's self-existence and unbounded being",
      "It gives Moses a secret magical formula",
      "It limits God's work to the Sinai region"
    ],
    answer: 1,
    reference: "Exodus 3:13-15",
    verseText: "I AM THAT I AM."
  },
  {
    id: 7003,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "Why is the hardening of Pharaoh's heart presented in multiple ways across Exodus?",
    choices: [
      "To show that Pharaoh was innocent",
      "To show both Pharaoh's culpability and God's sovereign judgment",
      "To prove Moses manipulated the narrative",
      "To deny the reality of Pharaoh's choices"
    ],
    answer: 1,
    reference: "Exodus 7:13; Exodus 8:15; Exodus 9:12; Exodus 10:1",
    verseText: "Pharaoh hardened his heart... and the LORD hardened the heart of Pharaoh."
  },
  {
    id: 7004,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "What is the primary significance of the Passover blood on the doorposts?",
    choices: [
      "It was merely decorative Hebrew custom",
      "It marked trusting households under divinely provided protection from judgment",
      "It signified military readiness only",
      "It replaced all future sacrifices forever in Exodus itself"
    ],
    answer: 1,
    reference: "Exodus 12:7, 13, 23",
    verseText: "When I see the blood, I will pass over you."
  },
  {
    id: 7005,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "In the covenant structure of Exodus 19-24, Israel's calling as a 'kingdom of priests' implies what?",
    choices: [
      "Every Israelite could ignore the tabernacle system",
      "Israel was to mediate God's witness among the nations under covenant obedience",
      "Israel no longer needed Moses",
      "Gentiles were forbidden from any knowledge of God"
    ],
    answer: 1,
    reference: "Exodus 19:5-6",
    verseText: "Ye shall be unto me a kingdom of priests, and an holy nation."
  },
  {
    id: 7006,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "What does the golden calf episode most clearly reveal about Israel's sin?",
    choices: [
      "They were trying to reject the LORD entirely for an unknown god only",
      "They attempted to worship the LORD through an image in violation of covenant terms",
      "They merely broke a minor ceremonial custom",
      "They only wanted a national monument"
    ],
    answer: 1,
    reference: "Exodus 32:1-8",
    verseText: "These be thy gods, O Israel, which brought thee up out of the land of Egypt."
  },
  {
    id: 7007,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "Why is Leviticus so concerned with distinctions between holy and common, clean and unclean?",
    choices: [
      "Because hygiene is the sole theme of the book",
      "Because Israel had to learn that God's presence required ordered holiness",
      "Because ritual law had no spiritual meaning",
      "Because only priests were expected to understand holiness"
    ],
    answer: 1,
    reference: "Leviticus 10:10-11; Leviticus 11:44-45",
    verseText: "Put difference between holy and unholy, and between unclean and clean."
  },
  {
    id: 7008,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "What is the central purpose of the Day of Atonement ritual in Leviticus 16?",
    choices: [
      "To celebrate harvest abundance",
      "To cleanse sanctuary and people from accumulated impurity and sin",
      "To appoint a new high priest each year",
      "To replace all daily offerings with one annual feast"
    ],
    answer: 1,
    reference: "Leviticus 16:16, 30, 34",
    verseText: "To make an atonement for the children of Israel for all their sins once a year."
  },
  {
    id: 7009,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "Why was Moses forbidden to enter the land after striking the rock at Meribah?",
    choices: [
      "Because he failed to perform a miracle",
      "Because he misrepresented God's holiness before the people",
      "Because Joshua accused him falsely",
      "Because he had secretly worshiped idols"
    ],
    answer: 1,
    reference: "Numbers 20:7-12",
    verseText: "Ye believed me not, to sanctify me in the eyes of the children of Israel."
  },
  {
    id: 7010,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "What is the theological emphasis of the Shema in Deuteronomy 6?",
    choices: [
      "Israel may divide loyalty among several divine beings",
      "Israel must respond to the one LORD with total covenant love",
      "Only Levites are required to love God fully",
      "Obedience matters less than sacrifice"
    ],
    answer: 1,
    reference: "Deuteronomy 6:4-9",
    verseText: "Hear, O Israel: The LORD our God is one LORD."
  },
  {
    id: 7011,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Torah",
    difficulty: "Advanced",
    question: "Why does Deuteronomy repeatedly join covenant obedience with memory?",
    choices: [
      "Because Israel had no written law",
      "Because forgetfulness of redemption leads to covenant unfaithfulness",
      "Because memory replaced sacrifice",
      "Because only elders were responsible to remember"
    ],
    answer: 1,
    reference: "Deuteronomy 5:15; Deuteronomy 8:11-20",
    verseText: "Beware that thou forget not the LORD thy God."
  },
  {
    id: 7012,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Conquest",
    difficulty: "Advanced",
    question: "What does the fall of Jericho most clearly highlight in Joshua's narrative?",
    choices: [
      "Superior Israelite siege engineering",
      "Victory granted by divine power rather than conventional military strength",
      "Rahab's political manipulation alone",
      "The irrelevance of obedience in warfare"
    ],
    answer: 1,
    reference: "Joshua 6:2-5, 20",
    verseText: "The LORD said unto Joshua, See, I have given into thine hand Jericho."
  },
  {
    id: 7013,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Conquest",
    difficulty: "Advanced",
    question: "Why is Achan's sin treated as corporate danger rather than merely private wrongdoing?",
    choices: [
      "Because Israel had no concept of individual guilt",
      "Because covenant community shares consequences when devoted things are violated",
      "Because Joshua needed a political example",
      "Because Achan stole from another tribe only"
    ],
    answer: 1,
    reference: "Joshua 7:1, 11-12, 20-26",
    verseText: "Israel hath sinned."
  },
  {
    id: 7014,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Conquest",
    difficulty: "Advanced",
    question: "What is the point of Joshua's statement, 'choose you this day whom ye will serve'?",
    choices: [
      "Israel was free to combine Yahweh worship with local gods",
      "Covenant loyalty required decisive exclusive allegiance",
      "Joshua doubted whether the LORD existed",
      "The law had already become irrelevant"
    ],
    answer: 1,
    reference: "Joshua 24:14-24",
    verseText: "Choose you this day whom ye will serve."
  },
  {
    id: 7015,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Judges",
    difficulty: "Advanced",
    question: "What refrain interprets the moral chaos of the book of Judges?",
    choices: [
      "There was no prophet in the land",
      "Every man did that which was right in his own eyes",
      "The nations were stronger than God",
      "Israel had become permanently pagan"
    ],
    answer: 1,
    reference: "Judges 17:6; Judges 21:25",
    verseText: "Every man did that which was right in his own eyes."
  },
  {
    id: 7016,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Judges",
    difficulty: "Advanced",
    question: "Why is Gideon's request for repeated signs not presented as ideal mature faith?",
    choices: [
      "Because signs are always forbidden in Scripture",
      "Because the narrative shows divine patience toward human weakness, not a norm to imitate",
      "Because Gideon was an unbeliever from start to finish",
      "Because fleece imagery is condemned in the law"
    ],
    answer: 1,
    reference: "Judges 6:36-40",
    verseText: "Let not thine anger be hot against me, and I will speak but this once."
  },
  {
    id: 7017,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Judges",
    difficulty: "Advanced",
    question: "What makes Jephthah's vow in Judges 11 so tragic?",
    choices: [
      "It fulfilled a command God had required",
      "It arose from rash zeal and collided with the broader moral logic of God's law",
      "It was actually a wise priestly act",
      "It was celebrated later as ideal worship"
    ],
    answer: 1,
    reference: "Judges 11:30-40; Deuteronomy 12:31",
    verseText: "Jephthah uttered all his words before the LORD."
  },
  {
    id: 7018,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ruth",
    difficulty: "Advanced",
    question: "Why is Ruth's appeal to Boaz at the threshing floor significant?",
    choices: [
      "It was a random romantic gesture with no covenant meaning",
      "It invoked Boaz's duty as kinsman-redeemer within a framework of loyal covenant kindness",
      "It was designed to embarrass Naomi",
      "It bypassed all legal custom"
    ],
    answer: 1,
    reference: "Ruth 3:9-13",
    verseText: "Spread therefore thy skirt over thine handmaid; for thou art a near kinsman."
  },
  {
    id: 7019,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ruth",
    difficulty: "Advanced",
    question: "What larger biblical function does the genealogy at the end of Ruth serve?",
    choices: [
      "It interrupts the story with unrelated material",
      "It connects Ruth's faithfulness to Davidic royal history",
      "It proves Naomi wrote the book",
      "It removes the Moabite theme entirely"
    ],
    answer: 1,
    reference: "Ruth 4:17-22",
    verseText: "Obed... begat Jesse, and Jesse begat David."
  },
  {
    id: 7020,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "Why is Hannah's prayer in 1 Samuel 2 important beyond her personal experience?",
    choices: [
      "It denies God's involvement in national history",
      "It establishes a theology of reversal that anticipates later kingdom themes",
      "It proves priesthood is unnecessary",
      "It teaches barrenness is always punishment"
    ],
    answer: 1,
    reference: "1 Samuel 2:1-10",
    verseText: "The LORD maketh poor, and maketh rich: he bringeth low, and lifteth up."
  },
  {
    id: 7021,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "What was fundamentally wrong with Israel's request for a king in 1 Samuel 8?",
    choices: [
      "Kingship itself was forbidden in the Torah",
      "They sought a king in order to be like the nations and displaced trust in God's rule",
      "Samuel had no sons at all",
      "The people wanted too much justice"
    ],
    answer: 1,
    reference: "1 Samuel 8:4-20; Deuteronomy 17:14-20",
    verseText: "They have rejected me, that I should not reign over them."
  },
  {
    id: 7022,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "Why is Saul's incomplete obedience against Amalek condemned so severely?",
    choices: [
      "Because partial obedience is treated as rebellion against explicit divine command",
      "Because Samuel preferred David politically",
      "Because spoil-taking was always illegal in warfare",
      "Because Saul fought on the wrong day of the week"
    ],
    answer: 0,
    reference: "1 Samuel 15:1-23",
    verseText: "To obey is better than sacrifice."
  },
  {
    id: 7023,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "What is the key contrast in David's anointing in 1 Samuel 16?",
    choices: [
      "External stature versus divine choice centered on the heart",
      "Age versus education",
      "Priestly lineage versus military lineage",
      "Bethlehem versus Jerusalem"
    ],
    answer: 0,
    reference: "1 Samuel 16:6-13",
    verseText: "Man looketh on the outward appearance, but the LORD looketh on the heart."
  },
  {
    id: 7024,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "How does David's refusal to kill Saul in the cave function theologically?",
    choices: [
      "It shows David feared battle",
      "It shows David would not seize the kingdom by violating reverence for the LORD's anointed",
      "It proves Saul had become righteous again",
      "It means David never used force at all"
    ],
    answer: 1,
    reference: "1 Samuel 24:3-12",
    verseText: "I will not put forth mine hand against my lord; for he is the LORD'S anointed."
  },
  {
    id: 7025,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What is the covenantal importance of the promise in 2 Samuel 7?",
    choices: [
      "David is promised sinless descendants",
      "God establishes a lasting royal house that becomes central to messianic expectation",
      "The temple is declared unnecessary forever",
      "Israel's exile is made impossible"
    ],
    answer: 1,
    reference: "2 Samuel 7:12-16",
    verseText: "Thine house and thy kingdom shall be established for ever before thee."
  },
  {
    id: 7026,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "Why is Nathan's confrontation of David after the Bathsheba incident so important?",
    choices: [
      "It proves prophets only support kings",
      "It shows the king remains accountable to God's word",
      "It cancels the Davidic covenant immediately",
      "It means David lost all standing as king that same day"
    ],
    answer: 1,
    reference: "2 Samuel 12:1-14",
    verseText: "Thou art the man."
  },
  {
    id: 7027,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What makes Solomon's request for wisdom exemplary at the start of his reign?",
    choices: [
      "He asked for discernment to govern God's people rather than self-exalting gain",
      "He rejected all material blessing as evil",
      "He asked to become a priest instead of king",
      "He sought victory over Egypt first"
    ],
    answer: 0,
    reference: "1 Kings 3:5-14",
    verseText: "Give therefore thy servant an understanding heart to judge thy people."
  },
  {
    id: 7028,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What is the primary warning embedded in Solomon's later apostasy?",
    choices: [
      "Wisdom guarantees lifelong faithfulness automatically",
      "Even extraordinary privilege does not remove the danger of covenant compromise",
      "Foreign policy is always sinful",
      "Temple building itself leads to idolatry"
    ],
    answer: 1,
    reference: "1 Kings 11:1-13",
    verseText: "His wives turned away his heart after other gods."
  },
  {
    id: 7029,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "Why does Elijah's Mount Carmel contest strike at the heart of Baal worship?",
    choices: [
      "It proves the LORD can be worshiped alongside Baal",
      "It demonstrates that the LORD alone answers and rules over storm, fire, and covenant fidelity",
      "It was only about humiliating Ahab personally",
      "It settled a minor agricultural dispute"
    ],
    answer: 1,
    reference: "1 Kings 18:20-39",
    verseText: "The LORD, he is the God; the LORD, he is the God."
  },
  {
    id: 7030,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What is the force of God's 'still small voice' to Elijah at Horeb?",
    choices: [
      "God is absent from mighty acts",
      "God is not limited to dramatic displays and still directs history by sovereign word",
      "Prophecy ended at Horeb",
      "Elijah was forbidden ever to confront kings again"
    ],
    answer: 1,
    reference: "1 Kings 19:11-18",
    verseText: "After the fire a still small voice."
  },
  {
    id: 7031,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "Why is Jeroboam's creation of alternative worship centers such a major sin in Kings?",
    choices: [
      "He merely improved travel convenience",
      "He institutionalized political religion that redirected covenant worship away from God's command",
      "He promoted literacy too quickly",
      "He opposed all sacrifices altogether"
    ],
    answer: 1,
    reference: "1 Kings 12:26-33",
    verseText: "Behold thy gods, O Israel."
  },
  {
    id: 7032,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What does Hezekiah's response to Assyrian threats reveal?",
    choices: [
      "That diplomacy alone saves Judah",
      "That trust in the LORD, not imperial power, is Judah's true security",
      "That Isaiah replaced the king",
      "That Jerusalem was militarily invincible in itself"
    ],
    answer: 1,
    reference: "2 Kings 19:14-19, 32-37",
    verseText: "O LORD God of Israel... thou art the God, even thou alone."
  },
  {
    id: 7033,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "Why is Josiah's reaction to the rediscovered book of the law so central to his reform?",
    choices: [
      "He used the law only for symbolism",
      "He recognized Judah stood under covenant judgment and needed real repentance",
      "He wanted to abolish sacrifice entirely",
      "He replaced Moses with royal decrees"
    ],
    answer: 1,
    reference: "2 Kings 22:8-13; 23:1-3",
    verseText: "Great is the wrath of the LORD that is kindled against us."
  },
  {
    id: 7034,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Chronicles",
    difficulty: "Advanced",
    question: "What is one major literary emphasis of Chronicles compared with Kings?",
    choices: [
      "It ignores temple worship entirely",
      "It gives heightened attention to temple, priestly order, and Davidic hope",
      "It rejects David as a model figure",
      "It focuses almost entirely on the northern kingdom"
    ],
    answer: 1,
    reference: "1 Chronicles 22; 2 Chronicles 7; 2 Chronicles 29",
    verseText: "The house that is to be builded for the LORD must be exceeding magnifical."
  },
  {
    id: 7035,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Chronicles",
    difficulty: "Advanced",
    question: "Why is Uzzah struck when he touches the ark?",
    choices: [
      "Because good intentions nullify holy regulations",
      "Because God's holiness was not to be handled contrary to revealed command",
      "Because David was jealous of him",
      "Because the oxen stumbled on a feast day"
    ],
    answer: 1,
    reference: "1 Chronicles 13:7-10; 15:13-15",
    verseText: "The LORD our God made a breach upon us, for that we sought him not after the due order."
  },
  {
    id: 7036,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ezra-Nehemiah",
    difficulty: "Advanced",
    question: "What is the theological importance of Cyrus's decree in Ezra 1?",
    choices: [
      "It proves Persian kings authored Israel's faith",
      "It shows the LORD sovereignly stirred a foreign ruler to fulfill prophetic word",
      "It means exile had not really occurred",
      "It marks the end of covenant identity"
    ],
    answer: 1,
    reference: "Ezra 1:1-4; Isaiah 44:28-45:1",
    verseText: "The LORD stirred up the spirit of Cyrus king of Persia."
  },
  {
    id: 7037,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ezra-Nehemiah",
    difficulty: "Advanced",
    question: "Why does Ezra react so strongly to intermarriage in Ezra 9-10?",
    choices: [
      "Because Scripture condemns all ethnic mixing everywhere",
      "Because the issue is covenant compromise through alliance with idolatrous practices",
      "Because Persian law required it",
      "Because genealogy was more important than holiness"
    ],
    answer: 1,
    reference: "Ezra 9:1-4, 10-14",
    verseText: "The holy seed have mingled themselves with the people of those lands."
  },
  {
    id: 7038,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ezra-Nehemiah",
    difficulty: "Advanced",
    question: "What is the significance of the public reading of the law in Nehemiah 8?",
    choices: [
      "It was a civil entertainment event",
      "It reconstituted the community around God's word with repentance and renewed understanding",
      "It replaced temple worship permanently",
      "It was only for Levites and nobles"
    ],
    answer: 1,
    reference: "Nehemiah 8:1-12",
    verseText: "They read in the book in the law of God distinctly, and gave the sense."
  },
  {
    id: 7039,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "In biblical wisdom literature, 'the fear of the LORD' means chiefly what?",
    choices: [
      "Crippling terror with no relational trust",
      "Reverent submission that is the beginning of true knowledge and wisdom",
      "Avoiding all questions about life",
      "A mood experienced only in temple rituals"
    ],
    answer: 1,
    reference: "Proverbs 1:7; Proverbs 9:10; Job 28:28",
    verseText: "The fear of the LORD is the beginning of knowledge."
  },
  {
    id: 7040,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "What is the central error of Job's friends?",
    choices: [
      "They believed God never judges anyone",
      "They forced a rigid retribution formula onto a case that required humility before mystery",
      "They denied that Job suffered",
      "They rejected wisdom altogether"
    ],
    answer: 1,
    reference: "Job 4:7-8; Job 8:3-6; Job 42:7",
    verseText: "Ye have not spoken of me the thing that is right, as my servant Job hath."
  },
  {
    id: 7041,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "Why does God speak from the whirlwind in Job without directly explaining every detail of Job's suffering?",
    choices: [
      "Because God does not know the answer",
      "Because Job needs to see the Creator-creature distinction and trust divine wisdom beyond his grasp",
      "Because Satan won the argument",
      "Because suffering has no meaning at all"
    ],
    answer: 1,
    reference: "Job 38-42",
    verseText: "Where wast thou when I laid the foundations of the earth?"
  },
  {
    id: 7042,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "What is the main tension Ecclesiastes explores with the repeated term 'vanity'?",
    choices: [
      "That God never acts in the world",
      "That life under the sun appears elusive and frustrating when viewed apart from final divine reckoning",
      "That wisdom is always useless",
      "That pleasure is the highest good"
    ],
    answer: 1,
    reference: "Ecclesiastes 1:2-3; 12:13-14",
    verseText: "Vanity of vanities... all is vanity."
  },
  {
    id: 7043,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "What makes Psalm 2 important for later messianic reading?",
    choices: [
      "It denies the Davidic king any divine role",
      "It presents the LORD's anointed son ruling the nations under divine decree",
      "It rejects Zion entirely",
      "It concerns only Solomon's temple taxes"
    ],
    answer: 1,
    reference: "Psalm 2:6-12",
    verseText: "Thou art my Son; this day have I begotten thee."
  },
  {
    id: 7044,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "Why is Psalm 22 so striking in biblical theology?",
    choices: [
      "It is only private despair with no larger significance",
      "It moves from forsakenness to vindication in language later echoed in messianic interpretation",
      "It rejects trust in God",
      "It teaches suffering cancels worship"
    ],
    answer: 1,
    reference: "Psalm 22:1-31",
    verseText: "My God, my God, why hast thou forsaken me?"
  },
  {
    id: 7045,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "What is the covenant significance of Psalm 110's figure seated at God's right hand?",
    choices: [
      "He is merely a temple musician",
      "He is a royal-priestly ruler whose status exceeds ordinary kingship",
      "He abolishes all Davidic hope",
      "He represents Israel's enemies"
    ],
    answer: 1,
    reference: "Psalm 110:1-4",
    verseText: "Sit thou at my right hand."
  },
  {
    id: 7046,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is Isaiah's response to the vision of the LORD in chapter 6 primarily meant to show?",
    choices: [
      "Prophets are naturally fearless in God's presence",
      "True vision of divine holiness exposes human uncleanness and need for atonement",
      "Temple ritual is enough without repentance",
      "Seraphim replace all human messengers"
    ],
    answer: 1,
    reference: "Isaiah 6:1-8",
    verseText: "Woe is me! for I am undone."
  },
  {
    id: 7047,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is the point of the Immanuel sign in Isaiah 7 in its original context?",
    choices: [
      "It had no relevance to Ahaz's crisis at all",
      "It signified God's presence and faithfulness amid a dynastic threat to the house of David",
      "It promised Assyria would save Judah spiritually",
      "It ended all future prophecy"
    ],
    answer: 1,
    reference: "Isaiah 7:10-17",
    verseText: "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel."
  },
  {
    id: 7048,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "Why is Isaiah 40's opening comfort so powerful after earlier judgment themes?",
    choices: [
      "It cancels all prior sin without basis",
      "It announces that divine judgment is not God's final word for his covenant people",
      "It proves exile can never happen",
      "It replaces holiness with sentimentality"
    ],
    answer: 1,
    reference: "Isaiah 40:1-5",
    verseText: "Comfort ye, comfort ye my people."
  },
  {
    id: 7049,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is central to the Servant's work in Isaiah 53?",
    choices: [
      "Military conquest over Rome",
      "Substitutionary suffering connected with bearing the sins of others",
      "Temple reconstruction funding",
      "Only the vindication of one prophet's reputation"
    ],
    answer: 1,
    reference: "Isaiah 52:13-53:12",
    verseText: "He was wounded for our transgressions."
  },
  {
    id: 7050,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is the significance of Jeremiah's temple sermon?",
    choices: [
      "The temple guaranteed safety regardless of conduct",
      "Religious symbols without covenant obedience could not shield Judah from judgment",
      "Jeremiah opposed worship itself",
      "Babylon had already destroyed the city"
    ],
    answer: 1,
    reference: "Jeremiah 7:1-15",
    verseText: "Trust ye not in lying words, saying, The temple of the LORD."
  },
  {
    id: 7051,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "Why is Jeremiah's 'new covenant' promise theologically crucial?",
    choices: [
      "It abolishes forgiveness",
      "It speaks of internalized law, restored relationship, and forgiven sin",
      "It denies continuity with Israel's story",
      "It eliminates the knowledge of God"
    ],
    answer: 1,
    reference: "Jeremiah 31:31-34",
    verseText: "I will put my law in their inward parts, and write it in their hearts."
  },
  {
    id: 7052,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is the meaning of Ezekiel's sign-act of the departing glory?",
    choices: [
      "God had become weaker than Babylonian gods",
      "Judgment had reached the point that God's glory abandoned the defiled temple",
      "Temple rituals were never meaningful",
      "Exile was only imaginary"
    ],
    answer: 1,
    reference: "Ezekiel 10-11",
    verseText: "The glory of the LORD departed from off the threshold of the house."
  },
  {
    id: 7053,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "In Ezekiel 37, the valley of dry bones chiefly signifies what in context?",
    choices: [
      "A lesson about medical resurrection only",
      "Israel's seemingly hopeless national death reversed by God's life-giving word and Spirit",
      "The end of prophecy",
      "A vision unrelated to exile"
    ],
    answer: 1,
    reference: "Ezekiel 37:1-14",
    verseText: "These bones are the whole house of Israel."
  },
  {
    id: 7054,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is the purpose of Daniel 2's statue dream?",
    choices: [
      "To glorify Babylon as eternal",
      "To show successive earthly kingdoms will be surpassed by God's everlasting kingdom",
      "To deny any future for Israel",
      "To predict only economic changes"
    ],
    answer: 1,
    reference: "Daniel 2:31-45",
    verseText: "The God of heaven shall set up a kingdom, which shall never be destroyed."
  },
  {
    id: 7055,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "Why is Daniel's prayer in chapter 9 significant?",
    choices: [
      "He blamed God and excused Israel",
      "He read Jeremiah, confessed covenant sin, and appealed to divine mercy",
      "He asked to remain in Babylon forever",
      "He denied Jerusalem's importance"
    ],
    answer: 1,
    reference: "Daniel 9:2-19",
    verseText: "We have sinned, and have committed iniquity."
  },
  {
    id: 7056,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is the chief scandal of Jonah's anger at Nineveh's repentance?",
    choices: [
      "He misunderstood geography",
      "He resented God's compassion toward enemies despite having received mercy himself",
      "He denied Nineveh existed",
      "He forgot the Hebrew language"
    ],
    answer: 1,
    reference: "Jonah 3:10-4:11",
    verseText: "I knew that thou art a gracious God, and merciful."
  },
  {
    id: 7057,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What does Habakkuk learn through his dialogue with God?",
    choices: [
      "That Babylon is morally innocent",
      "That the righteous must live by faith while awaiting God's justice",
      "That questioning God is always forbidden",
      "That judgment will never come"
    ],
    answer: 1,
    reference: "Habakkuk 2:4; Habakkuk 3:17-19",
    verseText: "The just shall live by his faith."
  },
  {
    id: 7058,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is Malachi's charge against the priests fundamentally about?",
    choices: [
      "They were too strict about sacrifice",
      "They despised God's name through corrupt worship and covenant negligence",
      "They preached too long",
      "They used too much incense"
    ],
    answer: 1,
    reference: "Malachi 1:6-14; 2:1-9",
    verseText: "Ye offer polluted bread upon mine altar."
  },
  {
    id: 7059,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Creation",
    difficulty: "Advanced",
    question: "What is the literary and theological effect of humanity being made in God's image in Genesis 1?",
    choices: [
      "Humans become divine beings by nature",
      "Humans are appointed to represent God's rule and reflect his dignity in creation",
      "Only kings bear God's image",
      "Image means physical resemblance alone"
    ],
    answer: 1,
    reference: "Genesis 1:26-28",
    verseText: "Let us make man in our image, after our likeness."
  },
  {
    id: 7060,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Creation",
    difficulty: "Advanced",
    question: "What is most significant about the serpent's strategy in Genesis 3?",
    choices: [
      "He begins by undermining God's word and character",
      "He first attacks Adam physically",
      "He denies the existence of the garden",
      "He appeals to Israel's monarchy"
    ],
    answer: 0,
    reference: "Genesis 3:1-5",
    verseText: "Yea, hath God said...?"
  },
  {
    id: 7061,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Genesis",
    difficulty: "Advanced",
    question: "Why is Genesis 3:15 often called the protoevangelium?",
    choices: [
      "It contains the first hint of good news through the promised defeat of the serpent",
      "It explains Noah's flood in full",
      "It abolishes childbirth pain instantly",
      "It names the Messiah explicitly as David"
    ],
    answer: 0,
    reference: "Genesis 3:15",
    verseText: "He shall bruise thy head, and thou shalt bruise his heel."
  },
  {
    id: 7062,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Genesis",
    difficulty: "Advanced",
    question: "What does Babel chiefly represent in Genesis 11?",
    choices: [
      "A harmless architectural project",
      "Human self-exaltation resisting God's commission and seeking autonomous fame",
      "The beginning of priestly worship",
      "The origin of Israel's monarchy"
    ],
    answer: 1,
    reference: "Genesis 11:1-9",
    verseText: "Let us make us a name."
  },
  {
    id: 7063,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Patriarchs",
    difficulty: "Advanced",
    question: "Why is the binding of Isaac in Genesis 22 so pivotal?",
    choices: [
      "It reveals Abraham's faith under severe testing and God's provision of a substitute",
      "It cancels the covenant promises",
      "It proves child sacrifice was approved",
      "It shows Isaac was not the promised son"
    ],
    answer: 0,
    reference: "Genesis 22:1-14; Hebrews 11:17-19",
    verseText: "God will provide himself a lamb."
  },
  {
    id: 7064,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Patriarchs",
    difficulty: "Advanced",
    question: "What is the deeper significance of Jacob's new name, Israel?",
    choices: [
      "He no longer needed grace",
      "His transformed identity is tied to divine encounter and covenant continuity",
      "He became king over Egypt",
      "He ceased to fear Esau because of his own power"
    ],
    answer: 1,
    reference: "Genesis 32:24-30",
    verseText: "Thy name shall be called no more Jacob, but Israel."
  },
  {
    id: 7065,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Joseph",
    difficulty: "Advanced",
    question: "How does Joseph interpret his suffering at the end of Genesis?",
    choices: [
      "As meaningless tragedy only",
      "As human evil overruled by divine providence for preservation of life",
      "As proof dreams are unreliable",
      "As his brothers' righteousness"
    ],
    answer: 1,
    reference: "Genesis 50:19-21",
    verseText: "Ye thought evil against me; but God meant it unto good."
  },
  {
    id: 7066,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "What is the purpose of the manna test in the wilderness?",
    choices: [
      "To teach agricultural technique",
      "To teach dependence on God's daily provision and obedient trust",
      "To eliminate Sabbath observance",
      "To reward private hoarding"
    ],
    answer: 1,
    reference: "Exodus 16:4, 16-30; Deuteronomy 8:2-3",
    verseText: "That I may prove them, whether they will walk in my law, or no."
  },
  {
    id: 7067,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "Why is Nadab and Abihu's judgment so severe?",
    choices: [
      "Because God opposes all incense",
      "Because unauthorized worship before a holy God is treated as deadly presumption",
      "Because Aaron envied them",
      "Because they forgot a festival date only"
    ],
    answer: 1,
    reference: "Leviticus 10:1-3",
    verseText: "I will be sanctified in them that come nigh me."
  },
  {
    id: 7068,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wilderness",
    difficulty: "Advanced",
    question: "Why does the rebellion of Korah matter so much in Numbers?",
    choices: [
      "It is a minor personality conflict only",
      "It challenges God's appointed order and therefore becomes rebellion against the LORD himself",
      "It proves Moses invented the priesthood",
      "It establishes democracy in Israel"
    ],
    answer: 1,
    reference: "Numbers 16:1-35",
    verseText: "Ye take too much upon you."
  },
  {
    id: 7069,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "What is the significance of the bronze serpent in Numbers 21?",
    choices: [
      "Healing came through trusting God's appointed means in the midst of judgment",
      "The serpent later became a permanent idol by command",
      "It replaced all priestly mediation forever",
      "It taught Israel to worship images"
    ],
    answer: 0,
    reference: "Numbers 21:4-9; 2 Kings 18:4",
    verseText: "When he looked upon the serpent of brass, he lived."
  },
  {
    id: 7070,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Law",
    difficulty: "Advanced",
    question: "Why is Deuteronomy structured with extensive covenant blessings and curses?",
    choices: [
      "To make Israel fear random fate",
      "To frame life in the land under covenant accountability before the LORD",
      "To remove the need for repentance",
      "To emphasize politics over theology"
    ],
    answer: 1,
    reference: "Deuteronomy 27-30",
    verseText: "I have set before thee life and death, blessing and cursing."
  },
  {
    id: 7071,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Joshua",
    difficulty: "Advanced",
    question: "What does the memorial of twelve stones at the Jordan emphasize?",
    choices: [
      "Israel should worship rivers",
      "Future generations must remember God's mighty act of bringing Israel into the land",
      "Joshua wanted to display engineering skill",
      "It marked a border treaty with Moab"
    ],
    answer: 1,
    reference: "Joshua 4:1-24",
    verseText: "That this may be a sign among you."
  },
  {
    id: 7072,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Judges",
    difficulty: "Advanced",
    question: "What is especially ironic about Samson's life in Judges?",
    choices: [
      "His physical blindness mirrors long-standing spiritual blindness and compromised consecration",
      "He never had unusual strength",
      "He was a faithful Nazarite in every respect",
      "He defeated the Philistines without divine empowerment"
    ],
    answer: 0,
    reference: "Judges 13-16",
    verseText: "He wist not that the LORD was departed from him."
  },
  {
    id: 7073,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Samuel",
    difficulty: "Advanced",
    question: "Why is the capture of the ark in 1 Samuel 4 such a devastating event?",
    choices: [
      "Because God was permanently defeated by Philistines",
      "Because Israel treated the ark as a talisman rather than honoring the holy God whose presence it signified",
      "Because the law forbade battle near Shiloh",
      "Because Eli had no sons"
    ],
    answer: 1,
    reference: "1 Samuel 4:1-11",
    verseText: "Let us fetch the ark... that, when it cometh among us, it may save us."
  },
  {
    id: 7074,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What does the dedication prayer of Solomon's temple repeatedly assume?",
    choices: [
      "The temple can contain God absolutely",
      "The temple is the ordained place of prayer, yet God still transcends heaven and earth",
      "God will never judge his people again",
      "Only kings may pray there"
    ],
    answer: 1,
    reference: "1 Kings 8:22-53",
    verseText: "Behold, the heaven and heaven of heavens cannot contain thee."
  },
  {
    id: 7075,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "Why is the contest between Micaiah and Ahab's prophets in 1 Kings 22 so important?",
    choices: [
      "It shows numerical majority guarantees truth",
      "It contrasts flattering false prophecy with costly fidelity to God's true word",
      "It proves prophets must support war",
      "It ends prophecy in Israel"
    ],
    answer: 1,
    reference: "1 Kings 22:5-28",
    verseText: "What the LORD saith unto me, that will I speak."
  },
  {
    id: 7076,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Kings",
    difficulty: "Advanced",
    question: "What theological point is made by Naaman's healing in 2 Kings 5?",
    choices: [
      "The God of Israel is powerless outside the land",
      "The LORD's grace reaches beyond Israel and humbles human pride",
      "Leprosy is healed only through payment",
      "Elisha wanted political fame"
    ],
    answer: 1,
    reference: "2 Kings 5:1-19",
    verseText: "Now I know that there is no God in all the earth, but in Israel."
  },
  {
    id: 7077,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Chronicles",
    difficulty: "Advanced",
    question: "Why does Asa's later reliance on physicians without seeking the LORD carry symbolic weight in Chronicles?",
    choices: [
      "Medicine is condemned absolutely",
      "The issue is misplaced trust that mirrors broader spiritual decline",
      "Asa never sought God at any point in life",
      "Disease always proves apostasy"
    ],
    answer: 1,
    reference: "2 Chronicles 16:7-12",
    verseText: "Yet in his disease he sought not to the LORD, but to the physicians."
  },
  {
    id: 7078,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "What tension drives many laments in the Psalms?",
    choices: [
      "Believers abandon prayer whenever suffering comes",
      "The psalmist brings unresolved pain honestly to God while still appealing to covenant faithfulness",
      "Lament denies worship",
      "Complaint replaces trust entirely"
    ],
    answer: 1,
    reference: "Psalm 13; Psalm 42; Psalm 77",
    verseText: "How long, O LORD?"
  },
  {
    id: 7079,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "What is the role of personified Wisdom in Proverbs 8?",
    choices: [
      "A denial that God created the world",
      "A poetic portrayal of wisdom as fundamental to ordered creation and righteous living",
      "A rival goddess to the LORD",
      "A replacement for the law"
    ],
    answer: 1,
    reference: "Proverbs 8:22-36",
    verseText: "When he prepared the heavens, I was there."
  },
  {
    id: 7080,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What does Hosea's marriage chiefly symbolize?",
    choices: [
      "Only domestic advice",
      "The LORD's covenant love toward an unfaithful people",
      "That sin has no consequences",
      "That prophets should avoid public preaching"
    ],
    answer: 1,
    reference: "Hosea 1-3",
    verseText: "The land hath committed great whoredom, departing from the LORD."
  },
  {
    id: 7081,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "Why is Joel's promise of the Spirit important?",
    choices: [
      "It limits God's work to kings only",
      "It anticipates a broad outpouring beyond older status boundaries",
      "It denies prophecy to women",
      "It belongs only to agricultural blessing"
    ],
    answer: 1,
    reference: "Joel 2:28-32",
    verseText: "I will pour out my spirit upon all flesh."
  },
  {
    id: 7082,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is Amos condemning when he denounces empty worship?",
    choices: [
      "Music itself",
      "Ritual divorced from justice and covenant righteousness",
      "Pilgrimage feasts as such",
      "The reading of the law"
    ],
    answer: 1,
    reference: "Amos 5:21-24",
    verseText: "Let judgment run down as waters, and righteousness as a mighty stream."
  },
  {
    id: 7083,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is the point of Micah 6:6-8?",
    choices: [
      "Sacrifice is evil in every context",
      "God requires covenantal justice, mercy, and humble walking with him rather than mere ritualism",
      "Only prophets must act justly",
      "The law is reduced to one verse only"
    ],
    answer: 1,
    reference: "Micah 6:6-8",
    verseText: "What doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"
  },
  {
    id: 7084,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "Why is Nahum's oracle against Nineveh not merely nationalistic revenge?",
    choices: [
      "Because it declares the LORD's just rule over violent imperial arrogance",
      "Because Assyria had become righteous",
      "Because Judah was sinless",
      "Because prophecy concerns only one city"
    ],
    answer: 0,
    reference: "Nahum 1:2-8; Nahum 3:1-7",
    verseText: "The LORD is slow to anger, and great in power, and will not at all acquit the wicked."
  },
  {
    id: 7085,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Prophets",
    difficulty: "Advanced",
    question: "What is the significance of the watchman imagery in Ezekiel?",
    choices: [
      "The prophet controls divine judgment",
      "The prophet bears responsibility to warn, while hearers remain responsible for response",
      "Judgment can be cancelled by silence",
      "Only kings can hear God's word"
    ],
    answer: 1,
    reference: "Ezekiel 3:16-21; Ezekiel 33:1-9",
    verseText: "I have made thee a watchman."
  },
  {
    id: 7086,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "What is emphasized when Shadrach, Meshach, and Abednego say God can deliver them, 'but if not'?",
    choices: [
      "Faith is certainty of rescue in every case",
      "Faithful loyalty to God does not depend on guaranteed earthly deliverance",
      "They doubted God's existence",
      "They expected Babylon to convert immediately"
    ],
    answer: 1,
    reference: "Daniel 3:16-18",
    verseText: "But if not, be it known unto thee, O king, that we will not serve thy gods."
  },
  {
    id: 7087,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Daniel",
    difficulty: "Advanced",
    question: "Why is Nebuchadnezzar's humiliation in Daniel 4 theologically important?",
    choices: [
      "It shows kings are accountable to the Most High, who rules over human kingdoms",
      "It proves Babylonian astrology was correct",
      "It means repentance is impossible for pagans",
      "It turns Daniel into king"
    ],
    answer: 0,
    reference: "Daniel 4:28-37",
    verseText: "The most High ruleth in the kingdom of men."
  },
  {
    id: 7088,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ezra-Nehemiah",
    difficulty: "Advanced",
    question: "What is the significance of opposition in rebuilding narratives like Ezra and Nehemiah?",
    choices: [
      "Opposition proves the work is illegitimate",
      "Restoration advances through resistance, requiring perseverance under God's providence",
      "Walls and temple were optional symbols only",
      "Prayer replaces all labor"
    ],
    answer: 1,
    reference: "Ezra 4-6; Nehemiah 4",
    verseText: "The people had a mind to work."
  },
  {
    id: 7089,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Esther",
    difficulty: "Advanced",
    question: "Why is God's hiddenness in Esther so thematically powerful?",
    choices: [
      "Because God is absent from history",
      "Because divine providence works through apparently ordinary events without explicit naming",
      "Because Mordecai replaces God",
      "Because prayer is mocked throughout the book"
    ],
    answer: 1,
    reference: "Esther 4:14; Esther 6:1-13",
    verseText: "Who knoweth whether thou art come to the kingdom for such a time as this?"
  },
  {
    id: 7090,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Esther",
    difficulty: "Advanced",
    question: "What is the irony at the center of Haman's downfall?",
    choices: [
      "He is honored above Mordecai forever",
      "The instruments of his self-exaltation become the means of his humiliation",
      "Esther never reveals her identity",
      "The king loses all authority"
    ],
    answer: 1,
    reference: "Esther 5-7",
    verseText: "Hang him thereon."
  },
  {
    id: 7091,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "What does Psalm 51 teach about true repentance?",
    choices: [
      "External ritual alone restores fellowship",
      "God desires truth in the inward parts and a broken, contrite heart",
      "David denies his guilt",
      "Sin has no lasting consequences"
    ],
    answer: 1,
    reference: "Psalm 51:1-17",
    verseText: "The sacrifices of God are a broken spirit."
  },
  {
    id: 7092,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Psalms",
    difficulty: "Advanced",
    question: "Why is Psalm 73 pivotal for wisdom and worship?",
    choices: [
      "It concludes the wicked always prosper forever",
      "It resolves envy through renewed perspective in God's presence and final judgment",
      "It rejects the sanctuary",
      "It says suffering proves unbelief"
    ],
    answer: 1,
    reference: "Psalm 73:1-28",
    verseText: "Until I went into the sanctuary of God; then understood I their end."
  },
  {
    id: 7093,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "What is the role of the excellent woman in Proverbs 31 within wisdom literature?",
    choices: [
      "A narrow checklist detached from wisdom theology",
      "A culminating portrait of wisdom embodied in covenantal diligence, strength, and fear of the LORD",
      "A rejection of domestic labor",
      "An argument that wealth alone defines virtue"
    ],
    answer: 1,
    reference: "Proverbs 31:10-31",
    verseText: "A woman that feareth the LORD, she shall be praised."
  },
  {
    id: 7094,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Isaiah",
    difficulty: "Advanced",
    question: "What does the image of the Branch in prophetic literature often signal?",
    choices: [
      "The end of Davidic promises",
      "Renewed Davidic hope arising after judgment and apparent ruin",
      "Agricultural abundance only",
      "Priestly replacement of kingship forever"
    ],
    answer: 1,
    reference: "Isaiah 11:1-5; Jeremiah 23:5; Zechariah 3:8",
    verseText: "There shall come forth a rod out of the stem of Jesse."
  },
  {
    id: 7095,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "Why does Jeremiah buy a field while Jerusalem is under siege?",
    choices: [
      "He misunderstands the military situation",
      "It becomes a sign-act of future restoration beyond present judgment",
      "He plans to profit from Babylon",
      "It proves exile will not occur"
    ],
    answer: 1,
    reference: "Jeremiah 32:6-15",
    verseText: "Houses and fields and vineyards shall be possessed again in this land."
  },
  {
    id: 7096,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "What is the significance of God's promise to give Israel a new heart and new spirit?",
    choices: [
      "External law was always enough",
      "Real covenant renewal requires inner transformation granted by God",
      "Repentance is unnecessary",
      "Only priests receive spiritual renewal"
    ],
    answer: 1,
    reference: "Ezekiel 36:25-27",
    verseText: "A new heart also will I give you, and a new spirit will I put within you."
  },
  {
    id: 7097,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What is Haggai confronting when he asks the returned exiles to 'consider your ways'?",
    choices: [
      "They were rebuilding the temple too quickly",
      "They prioritized personal security while neglecting the house of the LORD",
      "They had become wealthy through obedience",
      "They refused all agriculture"
    ],
    answer: 1,
    reference: "Haggai 1:2-11",
    verseText: "Is it time for you, O ye, to dwell in your cieled houses, and this house lie waste?"
  },
  {
    id: 7098,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "What does Zechariah's vision of Joshua the high priest chiefly proclaim?",
    choices: [
      "Priestly guilt is permanent and uncleansable",
      "God can remove defilement and restore a representative leader by grace",
      "Satan has final authority in the court",
      "Temple service is unnecessary"
    ],
    answer: 1,
    reference: "Zechariah 3:1-10",
    verseText: "I have caused thine iniquity to pass from thee."
  },
  {
    id: 7099,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Minor Prophets",
    difficulty: "Advanced",
    question: "Why is the promise 'not by might, nor by power, but by my spirit' so important in Zechariah?",
    choices: [
      "It denies the value of all human effort",
      "It grounds post-exilic restoration in divine empowerment rather than human strength",
      "It abolishes leadership roles",
      "It applies only to warfare"
    ],
    answer: 1,
    reference: "Zechariah 4:6-10",
    verseText: "Not by might, nor by power, but by my spirit, saith the LORD of hosts."
  },
  {
    id: 7100,
    game: "Old Testament",
    testament: "Old Testament",
    category: "Canon",
    difficulty: "Advanced",
    question: "Across the Old Testament as a whole, which theme most consistently ties narrative, law, worship, wisdom, and prophecy together?",
    choices: [
      "Human self-sufficiency as the path to blessing",
      "The holy, covenant-keeping God seeking a faithful people while advancing redemptive purpose through judgment and mercy",
      "Israel's military expansion as the final goal",
      "Temple ritual with no ethical demands"
    ],
    answer: 1,
    reference: "Exodus 34:6-7; Deuteronomy 7:9; Psalm 103:8-18; Isaiah 1:16-20; Jeremiah 31:31-34",
    verseText: "The LORD, The LORD God, merciful and gracious... keeping mercy for thousands."
  }
];