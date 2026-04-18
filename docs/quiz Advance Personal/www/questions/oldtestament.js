const oldTestamentQuestions = [
  {
    "id": 7001,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "Why was Abram's faith in Genesis 15 especially significant in the flow of the covenant narrative?",
    "choices": [
      "It was counted as righteousness before the covenant sign was later given",
      "It replaced circumcision as the covenant sign",
      "It proved Abram had never doubted before",
      "It ended all future covenant testing"
    ],
    "answer": 0,
    "reference": "Genesis 15:6; Genesis 17:10-11; Romans 4:9-12",
    "verseText": "And he believed in the LORD, and He accounted it to him for righteousness.",
    "explanation": "Romans 4:9-12 develops this point directly: Abraham was counted righteous (Genesis 15:6) before he received circumcision (Genesis 17). Paul argues that this sequence proves justification by faith is not tied to the covenant sign — it precedes and grounds it. Abram believed the promise of an heir despite his age and Sarah's barrenness; God credited that trust as righteousness."
  },
  {
    "id": 7002,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "What is the theological force of God's self-identification as 'I AM WHO I AM' in Exodus 3?",
    "choices": [
      "It reveals God as one tribal deity among many",
      "It emphasizes God's self-existence and unbounded being",
      "It gives Moses a secret magical formula",
      "It limits God's work to the Sinai region"
    ],
    "answer": 1,
    "reference": "Exodus 3:13-15",
    "verseText": "I AM WHO I AM.",
    "explanation": "Exodus 3:14 records 'ehyeh asher ehyeh' — 'I AM WHO I AM.' The name derives from the verb 'to be' (hayah). God's existence is self-grounded, not derived from anything outside himself. Unlike creatures who exist contingently, God simply IS — eternally, necessarily, independently. The covenant name YHWH likely derives from the same root, meaning 'He Is' or 'He Causes to Be.'"
  },
  {
    "id": 7003,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "Why is the hardening of Pharaoh's heart presented in multiple ways across Exodus?",
    "choices": [
      "To show that Pharaoh was innocent",
      "To prove Moses manipulated the narrative",
      "To show both Pharaoh's culpability and God's sovereign judgment",
      "To deny the reality of Pharaoh's choices"
    ],
    "answer": 2,
    "reference": "Exodus 7:13; Exodus 8:15; Exodus 9:12; Exodus 10:1",
    "verseText": "Pharaoh's heart grew hard... and the LORD hardened the heart of Pharaoh.",
    "explanation": "Exodus 4:21 says God will harden Pharaoh's heart; Exodus 8:15 says Pharaoh hardened his own heart. The Hebrew text uses both. This is not a contradiction but a theological double-causation: Pharaoh's self-hardening is real and culpable; God's judicial hardening confirms and deepens what Pharaoh chose. Romans 9:17-18 treats this as a display of divine sovereignty operating through human moral agency."
  },
  {
    "id": 7004,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "What is the primary significance of the Passover blood on the doorposts?",
    "choices": [
      "It was merely decorative Hebrew custom",
      "It signified military readiness only",
      "It replaced all future sacrifices forever in Exodus itself",
      "It marked trusting households under divinely provided protection from judgment"
    ],
    "answer": 3,
    "reference": "Exodus 12:7, 13, 23",
    "verseText": "When I see the blood, I will pass over you.",
    "explanation": "Exodus 12:13 records God saying 'when I see the blood, I will pass over you.' The blood was not magic — it was a sign of trust in God's appointed means of protection. Families who applied the blood were exercising covenant faith; those who did not were not protected regardless of their nationality. The Passover established the foundational pattern: God's judgment is averted through shed blood applied in faith."
  },
  {
    "id": 7005,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "In the covenant structure of Exodus 19-24, Israel's calling as a 'kingdom of priests' implies what?",
    "choices": [
      "Israel was to mediate God's witness among the nations under covenant obedience",
      "Every Israelite could ignore the tabernacle system",
      "Israel no longer needed Moses",
      "Gentiles were forbidden from any knowledge of God"
    ],
    "answer": 0,
    "reference": "Exodus 19:5-6",
    "verseText": "You shall be to Me a kingdom of priests and a holy nation.",
    "explanation": "Exodus 19:5-6 frames the Sinai covenant in priestly terms: Israel would be 'a kingdom of priests and a holy nation' — a nation whose entire corporate existence would mediate the knowledge of God to surrounding nations. This is not a privilege but a vocation. 1 Peter 2:9 applies the same language to the church: 'a chosen generation, a royal priesthood, a holy nation,' with the identical purpose of declaring God's praises."
  },
  {
    "id": 7006,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "What does the golden calf episode most clearly reveal about Israel's sin?",
    "choices": [
      "They were trying to reject the LORD entirely for an unknown god only",
      "They attempted to worship the LORD through an image in violation of covenant terms",
      "They merely broke a minor ceremonial custom",
      "They only wanted a national monument"
    ],
    "answer": 1,
    "reference": "Exodus 32:1-8",
    "verseText": "This is your god, O Israel, that brought you out of the land of Egypt!",
    "explanation": "Exodus 32:4-5 records Aaron making the calf and saying 'These are your gods, O Israel, who brought you out of Egypt!' — and then calling a feast 'to the LORD.' The sin was not simple paganism but attempting to worship YHWH through an image, in direct violation of the second commandment (Exodus 20:4-6). The people did not abandon the covenant God's name — they violated the covenant terms for approaching him."
  },
  {
    "id": 7007,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "Why is Leviticus so concerned with distinctions between holy and common, clean and unclean?",
    "choices": [
      "Because hygiene is the sole theme of the book",
      "Because ritual law had no spiritual meaning",
      "Because Israel had to learn that God's presence required ordered holiness",
      "Because only priests were expected to understand holiness"
    ],
    "answer": 2,
    "reference": "Leviticus 10:10-11; Leviticus 11:44-45",
    "verseText": "That you may distinguish between holy and unholy, and between unclean and clean.",
    "explanation": "Leviticus operates on the premise that the holy God has come to dwell among his people, and this dwelling creates an absolute requirement of ordered holiness. The distinctions (holy/common, clean/unclean) were not arbitrary hygiene regulations — they were the pedagogical vocabulary of a community learning to live in proximity to divine holiness. Their collapse in the NT is not because holiness ceased to matter but because Christ became the holiness of his people."
  },
  {
    "id": 7008,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "What is the central purpose of the Day of Atonement ritual in Leviticus 16?",
    "choices": [
      "To celebrate harvest abundance",
      "To appoint a new high priest each year",
      "To replace all daily offerings with one annual feast",
      "To cleanse sanctuary and people from accumulated impurity and sin"
    ],
    "answer": 3,
    "reference": "Leviticus 16:16, 30, 34",
    "verseText": "To make atonement for the children of Israel, for all their sins, once a year.",
    "explanation": "Leviticus 16 describes two aspects of atonement: the high priest brings blood into the Holy of Holies to make atonement for the sanctuary itself, the tent, and the altar (contaminated by Israel's sins and uncleanness), and the scapegoat carries the people's confessed sins into the wilderness. The Day of Atonement was the annual act of comprehensive cleansing that made continued dwelling with the holy God possible for another year."
  },
  {
    "id": 7009,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "Why was Moses forbidden to enter the land after striking the rock at Meribah?",
    "choices": [
      "Because he misrepresented God's holiness before the people",
      "Because he failed to perform a miracle",
      "Because Joshua accused him falsely",
      "Because he had secretly worshiped idols"
    ],
    "answer": 0,
    "reference": "Numbers 20:7-12",
    "verseText": "Because you did not believe Me, to hallow Me in the eyes of the children of Israel.",
    "explanation": "Numbers 20:10-12 records Moses striking the rock while saying 'Must we bring water for you out of this rock?' — implying he and Aaron were the source of the miracle. God's charge: 'you did not believe Me, to hallow Me in the eyes of the children of Israel.' Moses misrepresented God's character before the community. The severity of the consequence is proportional to the visibility and seriousness of the failure to sanctify God publicly."
  },
  {
    "id": 7010,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "What is the theological emphasis of the Shema in Deuteronomy 6?",
    "choices": [
      "Israel may divide loyalty among several divine beings",
      "Israel must respond to the one LORD with total covenant love",
      "Only Levites are required to love God fully",
      "Obedience matters less than sacrifice"
    ],
    "answer": 1,
    "reference": "Deuteronomy 6:4-9",
    "verseText": "Hear, O Israel: The LORD our God, the LORD is one!",
    "explanation": "Deuteronomy 6:4-5 — 'Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart, with all your soul, and with all your strength.' Jesus called this the greatest commandment (Matthew 22:37-38). The Shema was not merely a theological statement about monotheism — it was a relational demand for total covenant allegiance to the God who is uniquely one."
  },
  {
    "id": 7011,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Torah",
    "difficulty": "Advanced",
    "question": "Why does Deuteronomy repeatedly join covenant obedience with memory?",
    "choices": [
      "Because Israel had no written law",
      "Because memory replaced sacrifice",
      "Because forgetfulness of redemption leads to covenant unfaithfulness",
      "Because only elders were responsible to remember"
    ],
    "answer": 2,
    "reference": "Deuteronomy 5:15; Deuteronomy 8:11-20",
    "verseText": "Beware that you do not forget the LORD your God.",
    "explanation": "Deuteronomy uses 'remember' (zakar) over a dozen times: remember you were slaves in Egypt (5:15), remember the LORD your God who brought you out (8:14), remember what Amalek did (25:17). The repetition is pastorally driven: prosperity produces forgetfulness, forgetfulness produces independence, independence produces covenant violation. Memory is the mechanism that keeps redemption's implications active in the present."
  },
  {
    "id": 7012,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Conquest",
    "difficulty": "Advanced",
    "question": "What does the fall of Jericho most clearly highlight in Joshua's narrative?",
    "choices": [
      "Superior Israelite siege engineering",
      "Rahab's political manipulation alone",
      "The irrelevance of obedience in warfare",
      "Victory granted by divine power rather than conventional military strength"
    ],
    "answer": 3,
    "reference": "Joshua 6:2-5, 20",
    "verseText": "See! I have given Jericho into your hand.",
    "explanation": "Joshua 6 describes the fall of Jericho through seven days of marching, seven priests carrying seven trumpets, and seven circuits on the seventh day — no battering rams, no siege works, no assault tactics. The city walls fell through obedient faith in God's instruction. Hebrews 11:30 summarizes: 'By faith the walls of Jericho fell down after they were encircled for seven days.' Military logistics played no role in the victory."
  },
  {
    "id": 7013,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Conquest",
    "difficulty": "Advanced",
    "question": "Why is Achan's sin treated as corporate danger rather than merely private wrongdoing?",
    "choices": [
      "Because covenant community shares consequences when devoted things are violated",
      "Because Israel had no concept of individual guilt",
      "Because Joshua needed a political example",
      "Because Achan stole from another tribe only"
    ],
    "answer": 0,
    "reference": "Joshua 7:1, 11-12, 20-26",
    "verseText": "Israel has sinned.",
    "explanation": "Joshua 7:1 says 'the children of Israel committed a trespass regarding the accursed things, for Achan... took of the accursed things; so the anger of the LORD burned against the children of Israel.' One man's sin affected the whole community — Israel was routed at Ai (7:4-5). The covenant structure was corporate: Israel functioned as a unified entity before God, not merely a collection of individuals each personally accountable only for their own acts."
  },
  {
    "id": 7014,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Conquest",
    "difficulty": "Advanced",
    "question": "What is the point of Joshua's statement, 'Choose for yourselves this day whom you will serve'?",
    "choices": [
      "Israel was free to combine Yahweh worship with local gods",
      "Covenant loyalty required decisive exclusive allegiance",
      "Joshua doubted whether the LORD existed",
      "The law had already become irrelevant"
    ],
    "answer": 1,
    "reference": "Joshua 24:14-24",
    "verseText": "Choose for yourselves this day whom you will serve.",
    "explanation": "Joshua 24:14-15 calls Israel to choose whom they will serve — the gods of the fathers, the gods of the Amorites, or the LORD. Joshua declares his own household's commitment: 'as for me and my house, we will serve the LORD.' The choice is not presented as equally valid options — Joshua's declaration models the only appropriate response — but as a real decision requiring explicit, public, exclusive commitment."
  },
  {
    "id": 7015,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Judges",
    "difficulty": "Advanced",
    "question": "What refrain interprets the moral chaos of the book of Judges?",
    "choices": [
      "There was no prophet in the land",
      "The nations were stronger than God",
      "Everyone did what was right in his own eyes",
      "Israel had become permanently pagan"
    ],
    "answer": 2,
    "reference": "Judges 17:6; Judges 21:25",
    "verseText": "Everyone did what was right in his own eyes.",
    "explanation": "Judges 17:6 and 21:25 both state 'everyone did what was right in his own eyes.' The phrase is not merely descriptive of moral chaos — it is diagnostic of the theological problem: the absence of authoritative divine governance leads to self-referential morality where each individual becomes his own standard. The book of Judges is the extended narrative demonstration of what this produces."
  },
  {
    "id": 7016,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Judges",
    "difficulty": "Advanced",
    "question": "Why is Gideon's request for repeated signs not presented as ideal mature faith?",
    "choices": [
      "Because signs are always forbidden in Scripture",
      "Because Gideon was an unbeliever from start to finish",
      "Because fleece imagery is condemned in the law",
      "Because the narrative shows divine patience toward human weakness, not a norm to imitate"
    ],
    "answer": 3,
    "reference": "Judges 6:36-40",
    "verseText": "Do not be angry with me, and I will speak but this once.",
    "explanation": "Judges 6:36-40 records Gideon asking for two signs with the fleece, after God has already spoken clearly. The text does not endorse this as the model of mature faith — it shows God's patience in accommodating Gideon's weakness. Gideon's subsequent willingness to lead (and his song in 8:23, 'the LORD shall rule over you') is admirable, but the narrative presents the fleece episode as weakness that God graciously worked through, not a method to replicate."
  },
  {
    "id": 7017,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Judges",
    "difficulty": "Advanced",
    "question": "What makes Jephthah's vow in Judges 11 so tragic?",
    "choices": [
      "It arose from rash zeal and collided with the broader moral logic of God's law",
      "It fulfilled a command God had required",
      "It was actually a wise priestly act",
      "It was celebrated later as ideal worship"
    ],
    "answer": 0,
    "reference": "Judges 11:30-40; Deuteronomy 12:31",
    "verseText": "Jephthah spoke all his words before the LORD.",
    "explanation": "Judges 11:30-35 records Jephthah vowing to sacrifice whatever comes out of his door if he returns victorious. His daughter came out first. The vow placed an unnecessary burden on God's grace and violated the principle that God does not desire human sacrifice. Deuteronomy 23:21-22 permits vows but does not require them. Jephthah's rash vow — made to secure divine favor — reflected an inadequate understanding of how the LORD works."
  },
  {
    "id": 7018,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ruth",
    "difficulty": "Advanced",
    "question": "Why is Ruth's appeal to Boaz at the threshing floor significant?",
    "choices": [
      "It was a random romantic gesture with no covenant meaning",
      "It invoked Boaz's duty as kinsman-redeemer within a framework of loyal covenant kindness",
      "It was designed to embarrass Naomi",
      "It bypassed all legal custom"
    ],
    "answer": 1,
    "reference": "Ruth 3:9-13",
    "verseText": "Take your maidservant under your wing, for you are a close relative.",
    "explanation": "Ruth 3:9 records Ruth asking Boaz to 'spread your wings over your maidservant, for you are a near kinsman' — the same language Boaz used of God's wings covering Ruth (2:12). She was invoking the go'el institution: a kinsman with the right, resources, and duty to redeem a family member in crisis. The scene at the threshing floor is not morally compromised — it is a formal covenant appeal, recognized immediately by Boaz."
  },
  {
    "id": 7019,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ruth",
    "difficulty": "Advanced",
    "question": "What larger biblical function does the genealogy at the end of Ruth serve?",
    "choices": [
      "It interrupts the story with unrelated material",
      "It proves Naomi wrote the book",
      "It connects Ruth's faithfulness to Davidic royal history",
      "It removes the Moabite theme entirely"
    ],
    "answer": 2,
    "reference": "Ruth 4:17-22",
    "verseText": "Obed begot Jesse, and Jesse begot David.",
    "explanation": "Ruth 4:17-22 concludes with the genealogy: Boaz was the father of Obed, Obed of Jesse, Jesse of David. The entire book of Ruth — a story of Moabite faithfulness, kinsman redemption, and covenant loyalty — was the means through which the Davidic royal line was preserved and continued. The local story of grain fields and threshing floors was simultaneously a strand in the thread leading to the Messiah."
  },
  {
    "id": 7020,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "Why is Hannah's prayer in 1 Samuel 2 important beyond her personal experience?",
    "choices": [
      "It denies God's involvement in national history",
      "It proves priesthood is unnecessary",
      "It teaches barrenness is always punishment",
      "It establishes a theology of reversal that anticipates later kingdom themes"
    ],
    "answer": 3,
    "reference": "1 Samuel 2:1-10",
    "verseText": "The LORD makes poor and makes rich; He brings low and lifts up.",
    "explanation": "1 Samuel 2:1-10 records Hannah's prayer praising God who raises the poor from the dust and seats them with princes, who brings down the mighty and exalts the humble. The themes — reversal of status, God's sovereign rule, the anointed king — anticipate the entire Samuel narrative and connect forward to Mary's Magnificat (Luke 1:46-55), which Hannah's prayer directly shaped."
  },
  {
    "id": 7021,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "What was fundamentally wrong with Israel's request for a king in 1 Samuel 8?",
    "choices": [
      "They sought a king in order to be like the nations and displaced trust in God's rule",
      "Kingship itself was forbidden in the Torah",
      "Samuel had no sons at all",
      "The people wanted too much justice"
    ],
    "answer": 0,
    "reference": "1 Samuel 8:4-20; Deuteronomy 17:14-20",
    "verseText": "They have rejected Me, that I should not reign over them.",
    "explanation": "1 Samuel 8:5-7 records Israel saying 'make us a king to judge us like all the nations.' God's word to Samuel: 'they have not rejected you, but they have rejected Me, that I should not reign over them.' The problem was not desiring a king — God had anticipated and regulated kingship in Deuteronomy 17:14-20. The problem was the motive: to be like the nations and to have a visible military leader replace trust in the invisible divine king."
  },
  {
    "id": 7022,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "Why is Saul's incomplete obedience against Amalek condemned so severely?",
    "choices": [
      "Because Samuel preferred David politically",
      "Because partial obedience is treated as rebellion against explicit divine command",
      "Because spoil-taking was always illegal in warfare",
      "Because Saul fought on the wrong day of the week"
    ],
    "answer": 1,
    "reference": "1 Samuel 15:1-23",
    "verseText": "To obey is better than sacrifice.",
    "explanation": "1 Samuel 15:22-23 records Samuel's verdict: 'to obey is better than sacrifice, and to heed than the fat of rams. For rebellion is as the sin of witchcraft, and stubbornness is as iniquity and idolatry.' Saul had not disobeyed entirely — he had kept the best animals for sacrifice. But selective obedience that retains what the self wants while performing what God commanded is not obedience at all. Samuel equates it with divination and idolatry."
  },
  {
    "id": 7023,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "What is the key contrast in David's anointing in 1 Samuel 16?",
    "choices": [
      "Age versus education",
      "Priestly lineage versus military lineage",
      "External stature versus divine choice centered on the heart",
      "Bethlehem versus Jerusalem"
    ],
    "answer": 2,
    "reference": "1 Samuel 16:6-13",
    "verseText": "Man looks at the outward appearance, but the LORD looks at the heart.",
    "explanation": "1 Samuel 16:7 records God telling Samuel: 'man looks at the outward appearance, but the LORD looks at the heart.' David was the youngest, kept with the sheep — the one not even summoned initially. His seven older brothers had the stature Israel associated with kingship (Eliab in v.6 looked like Saul). The anointing overturns every human metric and establishes the principle that governs all of David's kingship."
  },
  {
    "id": 7024,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "How does David's refusal to kill Saul in the cave function theologically?",
    "choices": [
      "It shows David feared battle",
      "It proves Saul had become righteous again",
      "It means David never used force at all",
      "It shows David would not seize the kingdom by violating reverence for the LORD's anointed"
    ],
    "answer": 3,
    "reference": "1 Samuel 24:3-12",
    "verseText": "I will not stretch out my hand against my lord, for he is the LORD's anointed.",
    "explanation": "1 Samuel 24:6 records David saying 'the LORD forbid that I should do this thing to my master, the LORD's anointed, to stretch out my hand against him, seeing he is the anointed of the LORD.' David had the opportunity, the army's support, and arguably the moral justification — Saul had been hunting him. But he would not take the kingdom by killing God's appointed king, even a rejected one. He waited for God to act."
  },
  {
    "id": 7025,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What is the covenantal importance of the promise in 2 Samuel 7?",
    "choices": [
      "God establishes a lasting royal house that becomes central to messianic expectation",
      "David is promised sinless descendants",
      "The temple is declared unnecessary forever",
      "Israel's exile is made impossible"
    ],
    "answer": 0,
    "reference": "2 Samuel 7:12-16",
    "verseText": "Your house and your kingdom shall be established forever before you.",
    "explanation": "2 Samuel 7:12-16 contains the Davidic covenant: God promises David a son who will build the temple, whose kingdom God will establish forever, whom God will treat as a son — 'and I will be his Father.' The 'forever' qualifier generated all subsequent messianic expectation. No Davidic king who died permanently could fulfill it. Paul in Acts 13:34, the author of Hebrews in 1:5, and Luke in 1:32-33 all identify Jesus as its ultimate fulfillment."
  },
  {
    "id": 7026,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "Why is Nathan's confrontation of David after the Bathsheba incident so important?",
    "choices": [
      "It proves prophets only support kings",
      "It shows the king remains accountable to God's word",
      "It cancels the Davidic covenant immediately",
      "It means David lost all standing as king that same day"
    ],
    "answer": 1,
    "reference": "2 Samuel 12:1-14",
    "verseText": "You are the man!",
    "explanation": "2 Samuel 12:1-14 records Nathan's parable of the rich man stealing the poor man's lamb — and David's furious verdict against the rich man, followed by Nathan's 'You are the man.' The king who wielded absolute power over his subjects was himself under God's law. The prophet who could confront the king represented a structural check on royal power unique to Israel. No one in Israel was above the word of the LORD."
  },
  {
    "id": 7027,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What makes Solomon's request for wisdom exemplary at the start of his reign?",
    "choices": [
      "He rejected all material blessing as evil",
      "He asked to become a priest instead of king",
      "He asked for discernment to govern God's people rather than self-exalting gain",
      "He sought victory over Egypt first"
    ],
    "answer": 2,
    "reference": "1 Kings 3:5-14",
    "verseText": "Give to Your servant an understanding heart to judge Your people.",
    "explanation": "1 Kings 3:5-9 records God offering Solomon whatever he asks. Solomon's request: 'an understanding heart to judge Your people, that I may discern between good and evil.' He does not ask for long life, riches, or the death of his enemies. God's response: 'because you have asked this thing... I have given you a wise and understanding heart.' The virtue of the request is its orientation — toward serving the people entrusted to him rather than securing personal advantage."
  },
  {
    "id": 7028,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What is the primary warning embedded in Solomon's later apostasy?",
    "choices": [
      "Wisdom guarantees lifelong faithfulness automatically",
      "Foreign policy is always sinful",
      "Temple building itself leads to idolatry",
      "Even extraordinary privilege does not remove the danger of covenant compromise"
    ],
    "answer": 3,
    "reference": "1 Kings 11:1-13",
    "verseText": "His wives turned his heart after other gods.",
    "explanation": "1 Kings 11:4-6 records Solomon's wives turning his heart after other gods in his old age — 'his heart was not loyal to the LORD his God, as was the heart of his father David.' The covenant-breaker at the end of 1 Kings 11 is the same man who built the temple and dedicated it with magnificent prayer in 1 Kings 8. Spiritual achievement in one generation does not immunize against spiritual failure in the next."
  },
  {
    "id": 7029,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "Why does Elijah's Mount Carmel contest strike at the heart of Baal worship?",
    "choices": [
      "It demonstrates that the LORD alone answers and rules over storm, fire, and covenant fidelity",
      "It proves the LORD can be worshiped alongside Baal",
      "It was only about humiliating Ahab personally",
      "It settled a minor agricultural dispute"
    ],
    "answer": 0,
    "reference": "1 Kings 18:20-39",
    "verseText": "The LORD, He is God! The LORD, He is God!",
    "explanation": "1 Kings 18:38-39 records fire falling from heaven and consuming Elijah's altar, sacrifice, and the water poured around it — and the people falling on their faces crying 'The LORD, He is God!' Baal was the Canaanite storm deity supposed to control rain and fire. The contest was therefore on Baal's supposed home turf. The LORD answered; Baal did not. The silence of Baal despite Ahab's priests' frenzied prophesying demonstrated his non-existence."
  },
  {
    "id": 7030,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What is the force of God's 'still small voice' to Elijah at Horeb?",
    "choices": [
      "God is absent from mighty acts",
      "God is not limited to dramatic displays and still directs history by sovereign word",
      "Prophecy ended at Horeb",
      "Elijah was forbidden ever to confront kings again"
    ],
    "answer": 1,
    "reference": "1 Kings 19:11-18",
    "verseText": "And after the fire a still small voice.",
    "explanation": "1 Kings 19:11-13 records God saying 'go out and stand on the mountain before the LORD.' A great wind, earthquake, and fire came — but 'the LORD was not in the wind... not in the earthquake... not in the fire.' After the fire, a still small voice. Elijah had just witnessed spectacular divine power at Carmel (fire, rain, slaughter of prophets). The Horeb theophany taught him that God's effective government of history is not limited to or measured by dramatic supernatural display."
  },
  {
    "id": 7031,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "Why is Jeroboam's creation of alternative worship centers such a major sin in Kings?",
    "choices": [
      "He merely improved travel convenience",
      "He promoted literacy too quickly",
      "He institutionalized political religion that redirected covenant worship away from God's command",
      "He opposed all sacrifices altogether"
    ],
    "answer": 2,
    "reference": "1 Kings 12:26-33",
    "verseText": "Behold your gods, O Israel!",
    "explanation": "1 Kings 12:28-32 records Jeroboam making two golden calves, placing them in Bethel and Dan, and saying 'Here are your gods, O Israel, who brought you up from the land of Egypt!' He also installed non-Levitical priests and created his own feast calendar. The sin pattern echoes the golden calf of Exodus 32 — not simple paganism but politically-motivated alternative worship centers designed to prevent his northern kingdom's people from returning to Jerusalem."
  },
  {
    "id": 7032,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What does Hezekiah's response to Assyrian threats reveal?",
    "choices": [
      "That diplomacy alone saves Judah",
      "That Isaiah replaced the king",
      "That Jerusalem was militarily invincible in itself",
      "That trust in the LORD, not imperial power, is Judah's true security"
    ],
    "answer": 3,
    "reference": "2 Kings 19:14-19, 32-37",
    "verseText": "O LORD God of Israel... You are God, You alone.",
    "explanation": "2 Kings 19:14-19 records Hezekiah spreading the Assyrian letter before the LORD in the temple and praying for deliverance — 'so that all kingdoms of the earth may know that You are the LORD God, You alone.' Isaiah delivered the divine response: Sennacherib would not enter Jerusalem. 2 Kings 19:35 records the angel of the LORD striking 185,000 Assyrians overnight. Hezekiah's prayer was answered; Sennacherib withdrew and was later killed by his own sons."
  },
  {
    "id": 7033,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "Why is Josiah's reaction to the rediscovered book of the law so central to his reform?",
    "choices": [
      "He recognized Judah stood under covenant judgment and needed real repentance",
      "He used the law only for symbolism",
      "He wanted to abolish sacrifice entirely",
      "He replaced Moses with royal decrees"
    ],
    "answer": 0,
    "reference": "2 Kings 22:8-13; 23:1-3",
    "verseText": "Great is the wrath of the LORD that is aroused against us.",
    "explanation": "2 Kings 22:11-13 records Josiah tearing his clothes on hearing the book of the law read: 'great is the wrath of the LORD that is aroused against us, because our fathers have not obeyed the words of this book.' He immediately sends to inquire of the prophetess Huldah. His reaction is remarkable: rather than minimizing the judgment or bargaining, he takes the covenantal diagnosis seriously and initiates the most comprehensive reform in Judah's history (2 Kings 23)."
  },
  {
    "id": 7034,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Chronicles",
    "difficulty": "Advanced",
    "question": "What is one major literary emphasis of Chronicles compared with Kings?",
    "choices": [
      "It ignores temple worship entirely",
      "It gives heightened attention to temple, priestly order, and Davidic hope",
      "It rejects David as a model figure",
      "It focuses almost entirely on the northern kingdom"
    ],
    "answer": 1,
    "reference": "1 Chronicles 22; 2 Chronicles 7; 2 Chronicles 29",
    "verseText": "The house to be built for the LORD must be exceedingly magnificent.",
    "explanation": "The Chronicler omits much of Kings' material about the northern kingdom and Judah's failures, while adding substantial material about David's preparations for the temple, the Levitical musicians, and priestly organization. The perspective is deliberately focused on the worship community centered on David and the temple — not as denial of failure but as hope for the post-exilic community reconstituting itself around those institutions."
  },
  {
    "id": 7035,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Chronicles",
    "difficulty": "Advanced",
    "question": "Why is Uzzah struck when he touches the ark?",
    "choices": [
      "Because good intentions nullify holy regulations",
      "Because David was jealous of him",
      "Because God's holiness was not to be handled contrary to revealed command",
      "Because the oxen stumbled on a feast day"
    ],
    "answer": 2,
    "reference": "1 Chronicles 13:7-10; 15:13-15",
    "verseText": "Because we did not consult Him about the proper order.",
    "explanation": "2 Samuel 6:6-7 records Uzzah reaching out to steady the ark when the oxen stumbled — and God striking him dead. The ark was being transported on a cart rather than on the Levites' shoulders as specified in Numbers 4. Even well-intentioned handling of the holy that violates God's revealed instructions is not acceptable. The severity of the judgment is proportional to the proximity of the holy — the ark represented God's immediate presence."
  },
  {
    "id": 7036,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ezra-Nehemiah",
    "difficulty": "Advanced",
    "question": "What is the theological importance of Cyrus's decree in Ezra 1?",
    "choices": [
      "It proves Persian kings authored Israel's faith",
      "It means exile had not really occurred",
      "It marks the end of covenant identity",
      "It shows the LORD sovereignly stirred a foreign ruler to fulfill prophetic word"
    ],
    "answer": 3,
    "reference": "Ezra 1:1-4; Isaiah 44:28-45:1",
    "verseText": "The LORD stirred up the spirit of Cyrus king of Persia.",
    "explanation": "Ezra 1:1-3 records Cyrus's decree, introduced by 'the LORD stirred up the spirit of Cyrus.' Isaiah had named Cyrus over a century earlier (Isaiah 44:28; 45:1) as the one who would say of Jerusalem 'let it be built' and of the temple 'let its foundations be laid.' The fulfillment demonstrated that divine sovereignty over pagan rulers is not a theological abstraction but an observable historical reality."
  },
  {
    "id": 7037,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ezra-Nehemiah",
    "difficulty": "Advanced",
    "question": "Why does Ezra react so strongly to intermarriage in Ezra 9-10?",
    "choices": [
      "Because the issue is covenant compromise through alliance with idolatrous practices",
      "Because Scripture condemns all ethnic mixing everywhere",
      "Because Persian law required it",
      "Because genealogy was more important than holiness"
    ],
    "answer": 0,
    "reference": "Ezra 9:1-4, 10-14",
    "verseText": "The holy seed has mixed with the peoples of those lands.",
    "explanation": "Ezra 9:1-4 records Ezra's horror on learning that the returned community had intermarried with the surrounding peoples. The issue was not ethnic purity but covenant integrity — the prohibition in Deuteronomy 7:3-4 explicitly explained its rationale: 'for they will turn your sons away from following Me, to serve other gods.' Mixed marriage brought the idolatrous practices that had already destroyed the first return."
  },
  {
    "id": 7038,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ezra-Nehemiah",
    "difficulty": "Advanced",
    "question": "What is the significance of the public reading of the law in Nehemiah 8?",
    "choices": [
      "It was a civil entertainment event",
      "It reconstituted the community around God's word with repentance and renewed understanding",
      "It replaced temple worship permanently",
      "It was only for Levites and nobles"
    ],
    "answer": 1,
    "reference": "Nehemiah 8:1-12",
    "verseText": "So they read distinctly from the book, in the Law of God; and they gave the sense.",
    "explanation": "Nehemiah 8:1-8 records Ezra reading the law from early morning until midday to the assembled community, while Levites helped the people understand the meaning. 'They read from the Book of the Law of God, making it clear and giving the meaning so that the people understood what was being read.' The covenant people were being reconstituted by God's word — not temple ritual, not political charter, but public, understood reading of Scripture."
  },
  {
    "id": 7039,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "In biblical wisdom literature, 'the fear of the LORD' means chiefly what?",
    "choices": [
      "Crippling terror with no relational trust",
      "Avoiding all questions about life",
      "Reverent submission that is the beginning of true knowledge and wisdom",
      "A mood experienced only in temple rituals"
    ],
    "answer": 2,
    "reference": "Proverbs 1:7; Proverbs 9:10; Job 28:28",
    "verseText": "The fear of the LORD is the beginning of knowledge.",
    "explanation": "Proverbs 1:7, 9:10, and Psalm 111:10 all establish the same foundation: 'the fear of the LORD is the beginning of wisdom.' Fear here is not terror but reverential awe — the recognition that God is holy, sovereign, and the ultimate reference point for all reality. Without this orientation, knowledge becomes clever but not wise. Biblical wisdom is not technique for successful living but living in right relationship to the God who made and governs all things."
  },
  {
    "id": 7040,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "What is the central error of Job's friends?",
    "choices": [
      "They believed God never judges anyone",
      "They denied that Job suffered",
      "They rejected wisdom altogether",
      "They forced a rigid retribution formula onto a case that required humility before mystery"
    ],
    "answer": 3,
    "reference": "Job 4:7-8; Job 8:3-6; Job 42:7",
    "verseText": "You have not spoken of Me what is right, as My servant Job has.",
    "explanation": "Job 4:7-8; 8:4-6; 11:13-15 record Eliphaz, Bildad, and Zophar applying retribution theology: suffering = sin; therefore Job's suffering proves his sin. The formula was drawn from real wisdom — Proverbs does establish general patterns of consequence — but they applied it mechanically to a case that required a different response. Job 42:7-8 records God saying to Eliphaz: 'you have not spoken of Me what is right, as My servant Job has.'"
  },
  {
    "id": 7041,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "Why does God speak from the whirlwind in Job without directly explaining every detail of Job's suffering?",
    "choices": [
      "Because Job needs to see the Creator-creature distinction and trust divine wisdom beyond his grasp",
      "Because God does not know the answer",
      "Because Satan won the argument",
      "Because suffering has no meaning at all"
    ],
    "answer": 0,
    "reference": "Job 38-42",
    "verseText": "Where were you when I laid the foundations of the earth?",
    "explanation": "Job 38-41 records God's answer from the whirlwind — entirely in questions: 'Where were you when I laid the foundations of the earth?' The divine speech does not explain the theodicy; it relocates Job in relation to the Creator. Job gets not an answer to his suffering but an encounter with the one who governs what he cannot see, understand, or manage. Job's response (42:5) — 'I have heard of You by the hearing of the ear, but now my eye sees You' — is the resolution: vision, not explanation."
  },
  {
    "id": 7042,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "What is the main tension Ecclesiastes explores with the repeated term 'vanity'?",
    "choices": [
      "That God never acts in the world",
      "That life under the sun appears elusive and frustrating when viewed apart from final divine reckoning",
      "That wisdom is always useless",
      "That pleasure is the highest good"
    ],
    "answer": 1,
    "reference": "Ecclesiastes 1:2-3; 12:13-14",
    "verseText": "Vanity of vanities... All is vanity.",
    "explanation": "Ecclesiastes uses 'hebel' (vapor, breath, vanity) 38 times — more than any other biblical book. The Preacher tests every avenue of meaning 'under the sun' (a phrase appearing 29 times): wisdom, pleasure, work, wealth, social order. Each is real but fleeting — like vapor that cannot be grasped. The book's conclusion (12:13-14) provides the frame: 'Fear God and keep his commandments... for God will bring every work into judgment.'"
  },
  {
    "id": 7043,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "What makes Psalm 2 important for later messianic reading?",
    "choices": [
      "It denies the Davidic king any divine role",
      "It rejects Zion entirely",
      "It presents the LORD's anointed son ruling the nations under divine decree",
      "It concerns only Solomon's temple taxes"
    ],
    "answer": 2,
    "reference": "Psalm 2:6-12",
    "verseText": "You are My Son, today I have begotten You.",
    "explanation": "Psalm 2 presents the nations raging against the LORD and his anointed, and God responding with laughter and the declaration 'I have set My King on My holy hill of Zion.' The Son receives the nations as inheritance and rules with a rod of iron. Acts 4:25-28 quotes Psalm 2 to interpret Herod, Pontius Pilate, the Gentiles, and the people of Israel conspiring against Jesus. Hebrews 1:5 quotes it as applying to the Son."
  },
  {
    "id": 7044,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "Why is Psalm 22 so striking in biblical theology?",
    "choices": [
      "It is only private despair with no larger significance",
      "It rejects trust in God",
      "It teaches suffering cancels worship",
      "It moves from forsakenness to vindication in language later echoed in messianic interpretation"
    ],
    "answer": 3,
    "reference": "Psalm 22:1-31",
    "verseText": "My God, My God, why have You forsaken Me?",
    "explanation": "Psalm 22 begins with 'My God, my God, why have You forsaken Me?' and ends with a universal declaration of praise. It was not written as a prediction — it was David's experience of abandonment and vindication. But its language was so precise that the NT authors found it the most natural framework for the passion: the mocking (v.7-8), the thirst (v.15), the piercing of hands and feet (v.16), the dividing of garments (v.18), and the universal proclamation (v.27-28)."
  },
  {
    "id": 7045,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "What is the covenant significance of Psalm 110's figure seated at God's right hand?",
    "choices": [
      "He is a royal-priestly ruler whose status exceeds ordinary kingship",
      "He is merely a temple musician",
      "He abolishes all Davidic hope",
      "He represents Israel's enemies"
    ],
    "answer": 0,
    "reference": "Psalm 110:1-4",
    "verseText": "Sit at My right hand.",
    "explanation": "Psalm 110:1-4 combines two oracles: the royal ('sit at My right hand') and the priestly ('a priest forever according to the order of Melchizedek'). In Israel's constitution, priesthood and kingship were separate offices — combining them permanently required someone who transcended both. Jesus in Matthew 22:41-46 used Psalm 110:1 to challenge the assumption that the Messiah was merely David's human son. The NT treats this psalm as the highest Christological text in the OT."
  },
  {
    "id": 7046,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is Isaiah's response to the vision of the LORD in chapter 6 primarily meant to show?",
    "choices": [
      "Prophets are naturally fearless in God's presence",
      "True vision of divine holiness exposes human uncleanness and need for atonement",
      "Temple ritual is enough without repentance",
      "Seraphim replace all human messengers"
    ],
    "answer": 1,
    "reference": "Isaiah 6:1-8",
    "verseText": "Woe is me, for I am undone!",
    "explanation": "Isaiah 6:1-5 records the prophet seeing the LORD high and lifted up, the seraphim declaring his holiness, and the doorposts shaking. Isaiah's immediate response: 'Woe is me, for I am undone! Because I am a man of unclean lips.' True vision of divine holiness is not primarily inspiring — it is devastating to human self-assessment. The cleansing (the coal from the altar applied to his lips, v.6-7) prepares him for the commission he could not have received otherwise."
  },
  {
    "id": 7047,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is the point of the Immanuel sign in Isaiah 7 in its original context?",
    "choices": [
      "It had no relevance to Ahaz's crisis at all",
      "It promised Assyria would save Judah spiritually",
      "It signified God's presence and faithfulness amid a dynastic threat to the house of David",
      "It ended all future prophecy"
    ],
    "answer": 2,
    "reference": "Isaiah 7:10-17",
    "verseText": "Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.",
    "explanation": "Isaiah 7:10-17 addressed Ahaz's crisis with Syria and Israel threatening Jerusalem. The sign of Immanuel ('God with us') — a young woman bearing a son — was a near-term assurance: before the child knew right from wrong, the threatening kingdoms would be devastated. Matthew 1:23 reads it as finding ultimate fulfillment in Jesus. The near fulfillment and the far fulfillment are not in competition — the original text carried both horizons."
  },
  {
    "id": 7048,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "Why is Isaiah 40's opening comfort so powerful after earlier judgment themes?",
    "choices": [
      "It cancels all prior sin without basis",
      "It proves exile can never happen",
      "It replaces holiness with sentimentality",
      "It announces that divine judgment is not God's final word for his covenant people"
    ],
    "answer": 3,
    "reference": "Isaiah 40:1-5",
    "verseText": "Comfort, yes, comfort My people!",
    "explanation": "Isaiah 39 ends with the announcement that Babylon will carry off all of Jerusalem's treasures and descendants. The very next verse — Isaiah 40:1 — opens with 'Comfort, comfort my people, says your God.' The dramatic pivot from judgment (chapters 1-39) to consolation (40-66) announces that the God who judges is the same God who redeems. Judgment is real and full; but it is not the final word for the covenant people."
  },
  {
    "id": 7049,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is central to the Servant's work in Isaiah 53?",
    "choices": [
      "Substitutionary suffering connected with bearing the sins of others",
      "Military conquest over Rome",
      "Temple reconstruction funding",
      "Only the vindication of one prophet's reputation"
    ],
    "answer": 0,
    "reference": "Isaiah 52:13-53:12",
    "verseText": "But He was wounded for our transgressions.",
    "explanation": "Isaiah 53:4-6 uses substitutionary language precisely: 'he has borne our griefs,' 'the punishment that brought us peace was on him,' 'by his wounds we are healed,' 'the LORD has laid on him the iniquity of us all.' The servant takes what belongs to 'us' — and the transfer is explicitly divine initiative: 'the LORD has laid on him.' Peter quotes v.24 in 1 Peter 2:24 with direct application to the cross: 'who himself bore our sins in his body on the tree.'"
  },
  {
    "id": 7050,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is the significance of Jeremiah's temple sermon?",
    "choices": [
      "The temple guaranteed safety regardless of conduct",
      "Religious symbols without covenant obedience could not shield Judah from judgment",
      "Jeremiah opposed worship itself",
      "Babylon had already destroyed the city"
    ],
    "answer": 1,
    "reference": "Jeremiah 7:1-15",
    "verseText": "Do not trust in these lying words, saying, 'The temple of the LORD.'",
    "explanation": "Jeremiah 7:4-11 records God warning those who trust in the repeated cry 'the temple of the LORD': 'Do not trust in these lying words.' The people had concluded that the temple's presence meant God's protection was unconditional. Jeremiah pointed to Shiloh — another of God's houses that he had destroyed when the people sinned (v.12-14). Sacred geography without covenant obedience is no shelter from judgment."
  },
  {
    "id": 7051,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "Why is Jeremiah's 'new covenant' promise theologically crucial?",
    "choices": [
      "It abolishes forgiveness",
      "It denies continuity with Israel's story",
      "It speaks of internalized law, restored relationship, and forgiven sin",
      "It eliminates the knowledge of God"
    ],
    "answer": 2,
    "reference": "Jeremiah 31:31-34",
    "verseText": "I will put My law in their minds, and write it on their hearts.",
    "explanation": "Jeremiah 31:31-34 contains four specific features of the new covenant: (1) unlike the Mosaic covenant that Israel broke (v.32), (2) the law written on hearts and minds rather than stone (v.33), (3) all knowing the LORD directly from least to greatest (v.34a), (4) sins forgiven and remembered no more (v.34b). Hebrews 8 quotes the full passage and argues it constitutes a divine announcement that the Mosaic covenant is 'obsolete' (Hebrews 8:13)."
  },
  {
    "id": 7052,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is the meaning of Ezekiel's sign-act of the departing glory?",
    "choices": [
      "God had become weaker than Babylonian gods",
      "Temple rituals were never meaningful",
      "Exile was only imaginary",
      "Judgment had reached the point that God's glory abandoned the defiled temple"
    ],
    "answer": 3,
    "reference": "Ezekiel 10-11",
    "verseText": "Now the glory of the LORD departed from the threshold of the temple.",
    "explanation": "Ezekiel 8 shows the prophet transported to Jerusalem to see the abominations in the temple: the idol of jealousy at the north gate, women weeping for Tammuz, men bowing to the sun with their backs to the LORD's temple. The graduated vision of corruption prepares for the graduated departure: the glory moves from the inner sanctuary (9:3) to the threshold (10:4, 18), to the east gate (10:19), to the mountain east of the city (11:23). The departure was judicial — the temple's defilement made it unfit for the holy God's dwelling."
  },
  {
    "id": 7053,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "In Ezekiel 37, the valley of dry bones chiefly signifies what in context?",
    "choices": [
      "Israel's seemingly hopeless national death reversed by God's life-giving word and Spirit",
      "A lesson about medical resurrection only",
      "The end of prophecy",
      "A vision unrelated to exile"
    ],
    "answer": 0,
    "reference": "Ezekiel 37:1-14",
    "verseText": "These bones are the whole house of Israel.",
    "explanation": "Ezekiel 37:11 provides the interpretation: 'these bones are the whole house of Israel. They say, our bones are dry, our hope is lost, and we ourselves are cut off.' The vision addresses the exiles in Babylon who felt their national existence was finished. God's response was not political strategy but an act of creation: prophetic proclamation followed by the Spirit's breath produced life from death. The pattern anticipates the Spirit's work in regeneration and resurrection."
  },
  {
    "id": 7054,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is the purpose of Daniel 2's statue dream?",
    "choices": [
      "To glorify Babylon as eternal",
      "To show successive earthly kingdoms will be surpassed by God's everlasting kingdom",
      "To deny any future for Israel",
      "To predict only economic changes"
    ],
    "answer": 1,
    "reference": "Daniel 2:31-45",
    "verseText": "The God of heaven will set up a kingdom which shall never be destroyed.",
    "explanation": "Daniel 2:44-45 provides the interpretation: 'in the days of these kings the God of heaven will set up a kingdom which shall never be destroyed... it shall break in pieces and consume all these kingdoms, and it shall stand forever.' The stone not cut with human hands (v.34) that destroys the statue and becomes a great mountain represents a kingdom of divine rather than human origin. The progression of empires demonstrates that all human sovereignty is temporary."
  },
  {
    "id": 7055,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "Why is Daniel's prayer in chapter 9 significant?",
    "choices": [
      "He blamed God and excused Israel",
      "He asked to remain in Babylon forever",
      "He read Jeremiah, confessed covenant sin, and appealed to divine mercy",
      "He denied Jerusalem's importance"
    ],
    "answer": 2,
    "reference": "Daniel 9:2-19",
    "verseText": "We have sinned and committed iniquity.",
    "explanation": "Daniel 9:1-3 records Daniel reading Jeremiah 25:11-12 and 29:10 and calculating the approaching end of the 70 years. He then fasts, wears sackcloth, and prays — not passively waiting but actively interceding. The prayer (vv.4-19) is a model of corporate confession: 'we have sinned and committed iniquity... to the LORD our God belong mercy and forgiveness, though we have rebelled against Him.' God's response was prompt (Gabriel arrives while Daniel was praying, v.21)."
  },
  {
    "id": 7056,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What is the chief scandal of Jonah's anger at Nineveh's repentance?",
    "choices": [
      "He misunderstood geography",
      "He denied Nineveh existed",
      "He forgot the Hebrew language",
      "He resented God's compassion toward enemies despite having received mercy himself"
    ],
    "answer": 3,
    "reference": "Jonah 3:10-4:11",
    "verseText": "I know that You are a gracious and merciful God.",
    "explanation": "Jonah 4:2-3 records Jonah's explicit self-explanation: 'I know that You are a gracious and merciful God, slow to anger and abundant in lovingkindness, One who relents from doing harm. Therefore I fled to Tarshish.' He fled because he knew God would spare Nineveh if they repented — and he did not want them spared. The book's final unanswered question (v.11) confronts the reader: should I not be concerned about 120,000 people? The reader must answer Jonah's question about themselves."
  },
  {
    "id": 7057,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What does Habakkuk learn through his dialogue with God?",
    "choices": [
      "That the righteous must live by faith while awaiting God's justice",
      "That Babylon is morally innocent",
      "That questioning God is always forbidden",
      "That judgment will never come"
    ],
    "answer": 0,
    "reference": "Habakkuk 2:4; Habakkuk 3:17-19",
    "verseText": "The just shall live by his faith.",
    "explanation": "Habakkuk 1 complains about God's inaction against Judah's injustice (1:2-4); God responds by announcing Babylonian judgment (1:5-11); Habakkuk complains that using wicked Babylon seems unjust (1:12-2:1); God responds with the judgment on Babylon and the key verse (2:4): 'the just shall live by his faith.' Chapter 3 records Habakkuk's prayer — awe before God's past acts, honest acknowledgment that disaster is coming, and resolution to rejoice in God regardless (3:17-19)."
  },
  {
    "id": 7058,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What is Malachi's charge against the priests fundamentally about?",
    "choices": [
      "They were too strict about sacrifice",
      "They despised God's name through corrupt worship and covenant negligence",
      "They preached too long",
      "They used too much incense"
    ],
    "answer": 1,
    "reference": "Malachi 1:6-14; 2:1-9",
    "verseText": "You offer defiled food on My altar.",
    "explanation": "Malachi 1:6-14 specifies the priests' failure: offering blind, lame, and sick animals on the altar — violations of Leviticus 22:20-25 that they would not dare to offer to a human governor. They called the table of the LORD contemptible (v.12-13) and sought to close the doors rather than light worthless fires (v.10). God declared he had no pleasure in them (v.10). The priests' despising of worship corrupted the entire community's relationship with God."
  },
  {
    "id": 7059,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Creation",
    "difficulty": "Advanced",
    "question": "What is the literary and theological effect of humanity being made in God's image in Genesis 1?",
    "choices": [
      "Humans become divine beings by nature",
      "Only kings bear God's image",
      "Humans are appointed to represent God's rule and reflect his dignity in creation",
      "Image means physical resemblance alone"
    ],
    "answer": 2,
    "reference": "Genesis 1:26-28",
    "verseText": "Let Us make man in Our image, according to Our likeness.",
    "explanation": "Genesis 1:26-28 records the creation of humanity 'in our image, according to our likeness' with dominion over creation. The image (tselem) in ancient Near Eastern context was the representative of a king — a statue placed in a territory to signal the king's sovereignty there. Humanity as God's image means humans are appointed to represent God's rule throughout creation. This grounds human dignity (every human bears the image) and human responsibility (to govern creation as God's stewards)."
  },
  {
    "id": 7060,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Creation",
    "difficulty": "Advanced",
    "question": "What is most significant about the serpent's strategy in Genesis 3?",
    "choices": [
      "He first attacks Adam physically",
      "He denies the existence of the garden",
      "He appeals to Israel's monarchy",
      "He begins by undermining God's word and character"
    ],
    "answer": 3,
    "reference": "Genesis 3:1-5",
    "verseText": "Has God indeed said...?",
    "explanation": "Genesis 3:1 records the serpent beginning with a question: 'Has God indeed said, You shall not eat of every tree of the garden?' The opening move subtly distorts God's command and character before any overt temptation. Satan's strategy in Eden was not immediate attack but corrosion of trust in God's word and goodness. The same pattern recurs throughout the biblical narrative: the first assault on holiness is always on the credibility and character of God."
  },
  {
    "id": 7061,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Genesis",
    "difficulty": "Advanced",
    "question": "Why is Genesis 3:15 often called the protoevangelium?",
    "choices": [
      "It contains the first hint of good news through the promised defeat of the serpent",
      "It explains Noah's flood in full",
      "It abolishes childbirth pain instantly",
      "It names the Messiah explicitly as David"
    ],
    "answer": 0,
    "reference": "Genesis 3:15",
    "verseText": "He shall bruise your head, and you shall bruise His heel.",
    "explanation": "Genesis 3:15 contains God's curse on the serpent: 'I will put enmity between you and the woman, and between your seed and her seed; he shall bruise your head, and you shall bruise his heel.' The 'seed of the woman' who crushes the serpent's head while receiving a wound is the first hint of a coming one who defeats the serpent at cost to himself. Revelation 12:9 identifies the serpent as Satan; Romans 16:20 anticipates God crushing Satan under the believers' feet, and Colossians 2:15 sees the cross as the decisive defeat."
  },
  {
    "id": 7062,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Genesis",
    "difficulty": "Advanced",
    "question": "What does Babel chiefly represent in Genesis 11?",
    "choices": [
      "A harmless architectural project",
      "Human self-exaltation resisting God's commission and seeking autonomous fame",
      "The beginning of priestly worship",
      "The origin of Israel's monarchy"
    ],
    "answer": 1,
    "reference": "Genesis 11:1-9",
    "verseText": "Let us make a name for ourselves.",
    "explanation": "Genesis 11:4 records Babel's builders saying 'let us make a name for ourselves, lest we be scattered over the face of the whole earth.' Their goal directly resisted God's commission to 'fill the earth' (Genesis 1:28; 9:1). Building a city and tower 'with its top in the heavens' was not engineering ambition but theological assertion — claiming access to the divine realm through human achievement. The reversal at Pentecost (Acts 2) mirrors the Babel judgment: confusion of language reversed by the Spirit's gift of understanding."
  },
  {
    "id": 7063,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Patriarchs",
    "difficulty": "Advanced",
    "question": "Why is the binding of Isaac in Genesis 22 so pivotal?",
    "choices": [
      "It cancels the covenant promises",
      "It proves child sacrifice was approved",
      "It reveals Abraham's faith under severe testing and God's provision of a substitute",
      "It shows Isaac was not the promised son"
    ],
    "answer": 2,
    "reference": "Genesis 22:1-14; Hebrews 11:17-19",
    "verseText": "God will provide for Himself the lamb for a burnt offering.",
    "explanation": "Genesis 22:1-18 presents the most severe test of Abraham's faith: offer Isaac, the promised son through whom all the covenant promises would flow. Abraham's confidence in 22:5 ('we will worship and come back') implies expectation that both would return. Hebrews 11:19 interprets this: 'he considered that God was able to raise him up, even from the dead.' The test pressed Abraham's faith to its ultimate limit; God's provision of the ram declared that he did not ultimately require the death of the beloved son — but one day would provide his own."
  },
  {
    "id": 7064,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Patriarchs",
    "difficulty": "Advanced",
    "question": "What is the deeper significance of Jacob's new name, Israel?",
    "choices": [
      "He no longer needed grace",
      "He became king over Egypt",
      "He ceased to fear Esau because of his own power",
      "His transformed identity is tied to divine encounter and covenant continuity"
    ],
    "answer": 3,
    "reference": "Genesis 32:24-30",
    "verseText": "Your name shall no longer be called Jacob, but Israel.",
    "explanation": "Genesis 32:28 records the divine naming: 'your name shall no longer be called Jacob, but Israel; for you have struggled with God and with men, and have prevailed.' Jacob ('supplanter') is replaced by Israel ('God strives' or 'he who strives with God'). The new name encoded the nation's identity and vocation — a people characterized by wrestling with God rather than smooth religious performance. Jacob received the blessing he sought at Peniel, but also a limp that permanently marked the encounter."
  },
  {
    "id": 7065,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Joseph",
    "difficulty": "Advanced",
    "question": "How does Joseph interpret his suffering at the end of Genesis?",
    "choices": [
      "As human evil overruled by divine providence for preservation of life",
      "As meaningless tragedy only",
      "As proof dreams are unreliable",
      "As his brothers' righteousness"
    ],
    "answer": 0,
    "reference": "Genesis 50:19-21",
    "verseText": "You meant evil against me; but God meant it for good.",
    "explanation": "Genesis 50:20 records Joseph's word to his brothers: 'you meant evil against me; but God meant it for good, in order to bring it about as it is this day, to save many people alive.' The suffering was real, the brothers' evil was real, and the divine purpose was real — all simultaneously. Joseph's interpretation is not denial of the evil done to him but theological comprehension of how divine providence works through and over human sin without being caused by it."
  },
  {
    "id": 7066,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "What is the purpose of the manna test in the wilderness?",
    "choices": [
      "To teach agricultural technique",
      "To teach dependence on God's daily provision and obedient trust",
      "To eliminate Sabbath observance",
      "To reward private hoarding"
    ],
    "answer": 1,
    "reference": "Exodus 16:4, 16-30; Deuteronomy 8:2-3",
    "verseText": "That I may test them, whether they will walk in My law or not.",
    "explanation": "Exodus 16:4 frames the manna as a test: 'I will rain bread from heaven for you. And the people shall go out and gather a certain quota every day, that I may test them, whether they will walk in My law or not.' The daily gathering required daily trust — no stockpiling (except on the sixth day for the Sabbath). Jesus in Matthew 6:11 ('give us this day our daily bread') and John 6:32-35 ('I am the bread of life') both develop the manna pattern as a model of dependent trust."
  },
  {
    "id": 7067,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "Why is Nadab and Abihu's judgment so severe?",
    "choices": [
      "Because God opposes all incense",
      "Because Aaron envied them",
      "Because unauthorized worship before a holy God is treated as deadly presumption",
      "Because they forgot a festival date only"
    ],
    "answer": 2,
    "reference": "Leviticus 10:1-3",
    "verseText": "By those who come near Me I must be regarded as holy.",
    "explanation": "Leviticus 10:1-3 records Nadab and Abihu offering 'unauthorized fire before the LORD, which he had not commanded them.' God's fire consumed them. Moses' interpretation: 'among those who are near Me I must be treated as holy; and before all the people I must be glorified.' The severity is proportional to proximity — those designated to serve in the immediate presence of the holy God carry greater responsibility for exact obedience, not lesser."
  },
  {
    "id": 7068,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wilderness",
    "difficulty": "Advanced",
    "question": "Why does the rebellion of Korah matter so much in Numbers?",
    "choices": [
      "It is a minor personality conflict only",
      "It proves Moses invented the priesthood",
      "It establishes democracy in Israel",
      "It challenges God's appointed order and therefore becomes rebellion against the LORD himself"
    ],
    "answer": 3,
    "reference": "Numbers 16:1-35",
    "verseText": "You take too much upon yourselves!",
    "explanation": "Numbers 16:1-3 records Korah, Dathan, Abiram, and 250 leaders challenging Moses and Aaron: 'the whole congregation is holy, every one of them, and the LORD is among them. Why then do you exalt yourselves above the assembly of the LORD?' The rebellion appeared democratic but was fundamentally theocratic — Moses and Aaron had not appointed themselves; God had. To challenge Moses was to challenge the LORD's ordering of the covenant community. Numbers 16:32-35 records the earth opening and fire consuming the challengers."
  },
  {
    "id": 7069,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "What is the significance of the bronze serpent in Numbers 21?",
    "choices": [
      "Healing came through trusting God's appointed means in the midst of judgment",
      "The serpent later became a permanent idol by command",
      "It replaced all priestly mediation forever",
      "It taught Israel to worship images"
    ],
    "answer": 0,
    "reference": "Numbers 21:4-9; 2 Kings 18:4",
    "verseText": "When he looked at the bronze serpent, he lived.",
    "explanation": "Numbers 21:8-9 records God commanding Moses to make a bronze serpent and lift it on a pole — whoever looked at it would live. The remedy was counterintuitive: the very thing causing death (serpents) became, in its lifted form, the means of life for those who looked. Jesus in John 3:14-15 applies this pattern to himself: 'as Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up, that whoever believes in him may have eternal life.'"
  },
  {
    "id": 7070,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Law",
    "difficulty": "Advanced",
    "question": "Why is Deuteronomy structured with extensive covenant blessings and curses?",
    "choices": [
      "To make Israel fear random fate",
      "To frame life in the land under covenant accountability before the LORD",
      "To remove the need for repentance",
      "To emphasize politics over theology"
    ],
    "answer": 1,
    "reference": "Deuteronomy 27-30",
    "verseText": "I have set before you life and death, blessing and cursing.",
    "explanation": "Deuteronomy 27-28 contains the covenant curse and blessing lists to be proclaimed at Shechem after the people entered the land. Chapter 28's blessings (vv.1-14) are followed by extensive curses (vv.15-68) that trace the consequences of covenant violation from agricultural failure through exile and dispersion. The canonical significance: later events (Assyrian and Babylonian conquests) were not divine abandonment but the working out of covenant terms Israel had agreed to."
  },
  {
    "id": 7071,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Joshua",
    "difficulty": "Advanced",
    "question": "What does the memorial of twelve stones at the Jordan emphasize?",
    "choices": [
      "Israel should worship rivers",
      "Joshua wanted to display engineering skill",
      "Future generations must remember God's mighty act of bringing Israel into the land",
      "It marked a border treaty with Moab"
    ],
    "answer": 2,
    "reference": "Joshua 4:1-24",
    "verseText": "That this may be a sign among you.",
    "explanation": "Joshua 4:6-7 records God instructing: 'when your children ask in time to come, saying, what do these stones mean to you? Then you shall answer them that the waters of the Jordan were cut off before the ark of the covenant of the LORD.' The twelve memorial stones were a pedagogical device — a question-generator for future generations. The covenant community would be sustained not by institutional structures alone but by the living memory of God's acts transmitted through specific, concrete monuments and their explanations."
  },
  {
    "id": 7072,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Judges",
    "difficulty": "Advanced",
    "question": "What is especially ironic about Samson's life in Judges?",
    "choices": [
      "He never had unusual strength",
      "He was a faithful Nazirite in every respect",
      "He defeated the Philistines without divine empowerment",
      "His physical blindness mirrors long-standing spiritual blindness and compromised consecration"
    ],
    "answer": 3,
    "reference": "Judges 13-16",
    "verseText": "He did not know that the LORD had departed from him.",
    "explanation": "Judges 13-16 records Samson set apart as a Nazirite from birth — no razor, no wine, no contact with the dead (13:4-5). He broke all three vows through his Philistine wife, his honey from the lion's carcass, and eventually his haircut at Delilah's hands. His physical eyes were put out by the Philistines (16:21) after years of spiritual blindness to the pattern of his own life. The final act of strength came when Samson cried out to God in desperation — his most spiritually lucid moment."
  },
  {
    "id": 7073,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Samuel",
    "difficulty": "Advanced",
    "question": "Why is the capture of the ark in 1 Samuel 4 such a devastating event?",
    "choices": [
      "Because Israel treated the ark as a talisman rather than honoring the holy God whose presence it signified",
      "Because God was permanently defeated by Philistines",
      "Because the law forbade battle near Shiloh",
      "Because Eli had no sons"
    ],
    "answer": 0,
    "reference": "1 Samuel 4:1-11",
    "verseText": "Let us bring the ark... that when it comes among us it may save us.",
    "explanation": "1 Samuel 4:3-11 records Israel bringing the ark from Shiloh to battle, thinking 'let us bring the ark of the covenant of the LORD from Shiloh to us, that when it comes among us it may save us from the hand of our enemies.' The ark was not a magical object to be deployed at will — it was the symbol of the holy God's presence among his people. Israel treated it as a talisman while violating the covenant the ark represented. The result was catastrophic: the ark was captured and 30,000 Israelites died."
  },
  {
    "id": 7074,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What does the dedication prayer of Solomon's temple repeatedly assume?",
    "choices": [
      "The temple can contain God absolutely",
      "The temple is the ordained place of prayer, yet God still transcends heaven and earth",
      "God will never judge his people again",
      "Only kings may pray there"
    ],
    "answer": 1,
    "reference": "1 Kings 8:22-53",
    "verseText": "Behold, heaven and the heaven of heavens cannot contain You.",
    "explanation": "1 Kings 8:27 records Solomon praying: 'But will God indeed dwell on the earth? Behold, heaven and the heaven of heavens cannot contain You. How much less this temple which I have built!' The prayer held in tension the genuine significance of the temple (God's appointed place of prayer) with God's radical transcendence (no building contains him). Stephen in Acts 7:48-50 quotes Isaiah 66:1-2 to make the same point, and the NT church carries the tension into its understanding of Christ as the true temple."
  },
  {
    "id": 7075,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "Why is the contest between Micaiah and Ahab's prophets in 1 Kings 22 so important?",
    "choices": [
      "It shows numerical majority guarantees truth",
      "It proves prophets must support war",
      "It contrasts flattering false prophecy with costly fidelity to God's true word",
      "It ends prophecy in Israel"
    ],
    "answer": 2,
    "reference": "1 Kings 22:5-28",
    "verseText": "Whatever the LORD says to me, that I will speak.",
    "explanation": "1 Kings 22:14-28 records Micaiah prophesying Ahab's death against 400 prophets who promised victory. Ahab's comment — 'I hate him, because he does not prophesy good concerning me, but evil' (v.8) — reveals the operating assumption: prophets should deliver the message the client wants. Micaiah's fidelity cost him imprisonment. Ahab disguised himself in battle but was killed anyway (v.34-38). The true word was not neutralized by being unwelcome or suppressed."
  },
  {
    "id": 7076,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Kings",
    "difficulty": "Advanced",
    "question": "What theological point is made by Naaman's healing in 2 Kings 5?",
    "choices": [
      "The God of Israel is powerless outside the land",
      "Leprosy is healed only through payment",
      "Elisha wanted political fame",
      "The LORD's grace reaches beyond Israel and humbles human pride"
    ],
    "answer": 3,
    "reference": "2 Kings 5:1-19",
    "verseText": "Indeed, now I know that there is no God in all the earth, except in Israel.",
    "explanation": "2 Kings 5:1-19 records Naaman, the Syrian commander with leprosy, being instructed by Elisha to wash seven times in the Jordan. Naaman was insulted — the Israelite rivers seemed inferior, and the cure seemed beneath his dignity. His servants persuaded him to try. 'His flesh was restored like the flesh of a little child, and he was clean.' Jesus references Naaman in Luke 4:27 — many lepers in Israel were not healed, but Naaman the Syrian was. God's grace regularly bypasses the expected recipients."
  },
  {
    "id": 7077,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Chronicles",
    "difficulty": "Advanced",
    "question": "Why does Asa's later reliance on physicians without seeking the LORD carry symbolic weight in Chronicles?",
    "choices": [
      "The issue is misplaced trust that mirrors broader spiritual decline",
      "Medicine is condemned absolutely",
      "Asa never sought God at any point in life",
      "Disease always proves apostasy"
    ],
    "answer": 0,
    "reference": "2 Chronicles 16:7-12",
    "verseText": "Yet in his disease he did not seek the LORD, but the physicians.",
    "explanation": "2 Chronicles 16:12 records Asa seeking physicians for his diseased feet 'but did not seek the LORD.' The verse does not condemn medicine per se — it contrasts trusting human resources exclusively with seeking the LORD. Asa's earlier spiritual biography (2 Chronicles 14-15) showed a king who trusted God and saw dramatic military deliverance. His late decline — from faith to reliance on Aram (16:7-9) to imprisonment of a prophet (16:10) — makes his end spiritually diagnostic."
  },
  {
    "id": 7078,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "What tension drives many laments in the Psalms?",
    "choices": [
      "Believers abandon prayer whenever suffering comes",
      "The psalmist brings unresolved pain honestly to God while still appealing to covenant faithfulness",
      "Lament denies worship",
      "Complaint replaces trust entirely"
    ],
    "answer": 1,
    "reference": "Psalm 13; Psalm 42; Psalm 77",
    "verseText": "How long, O LORD?",
    "explanation": "The structure of many Psalms (10, 22, 42, 73, 88) shows the psalmist descending into complaint, confusion, or despair — and often not resolving the pain but holding it in tension with trust. Psalm 88 ends in darkness without resolution. Psalm 22 moves from forsakenness to praise. The psalms do not demand spiritual tidiness — they model honest engagement with God's character (his covenant commitments, his past acts, his known character) as the basis for persisting prayer in the midst of unresolved pain."
  },
  {
    "id": 7079,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "What is the role of personified Wisdom in Proverbs 8?",
    "choices": [
      "A denial that God created the world",
      "A rival goddess to the LORD",
      "A poetic portrayal of wisdom as fundamental to ordered creation and righteous living",
      "A replacement for the law"
    ],
    "answer": 2,
    "reference": "Proverbs 8:22-36",
    "verseText": "When He prepared the heavens, I was there.",
    "explanation": "Proverbs 8:22-31 presents Wisdom as present with God 'at the beginning of His work, the first of His acts of old.' Wisdom was 'beside Him like a master workman, and I was daily His delight, rejoicing before Him always.' The passage is the background for the NT's Logos theology: Colossians 1:15-17 (the Son as the one 'in whom all things were created'), John 1:1-3 (the Word through whom all things were made), and Hebrews 1:2-3 all draw on this Wisdom tradition in describing Christ."
  },
  {
    "id": 7080,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What does Hosea's marriage chiefly symbolize?",
    "choices": [
      "Only domestic advice",
      "That sin has no consequences",
      "That prophets should avoid public preaching",
      "The LORD's covenant love toward an unfaithful people"
    ],
    "answer": 3,
    "reference": "Hosea 1-3",
    "verseText": "The land has committed great harlotry by departing from the LORD.",
    "explanation": "Hosea 2:2-20 presents God as Hosea — the wronged husband who pursues rather than divorces his unfaithful wife. God 'will allure her, bring her into the wilderness, and speak comfort to her' (2:14). The pattern is remarkable: the one wronged by covenant violation initiates reconciliation. God declares in 2:19-20: 'I will betroth you to Me forever... in lovingkindness and mercy... in faithfulness, and you shall know the LORD.' The marriage becomes the model for new covenant renewal."
  },
  {
    "id": 7081,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "Why is Joel's promise of the Spirit important?",
    "choices": [
      "It anticipates a broad outpouring beyond older status boundaries",
      "It limits God's work to kings only",
      "It denies prophecy to women",
      "It belongs only to agricultural blessing"
    ],
    "answer": 0,
    "reference": "Joel 2:28-32",
    "verseText": "I will pour out My Spirit on all flesh.",
    "explanation": "Joel 2:28-29 promises: 'I will pour out My Spirit on all flesh; your sons and daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. And also on My menservants and on My maidservants I will pour out My Spirit in those days.' The removal of the boundaries (age, gender, social status) that previously limited prophetic gifting anticipates the new covenant community's universal access to the Spirit. Acts 2:17-18 quotes this as the interpretive framework for Pentecost."
  },
  {
    "id": 7082,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What is Amos condemning when he denounces empty worship?",
    "choices": [
      "Music itself",
      "Ritual divorced from justice and covenant righteousness",
      "Pilgrimage feasts as such",
      "The reading of the law"
    ],
    "answer": 1,
    "reference": "Amos 5:21-24",
    "verseText": "But let justice run down like water, and righteousness like a mighty stream.",
    "explanation": "Amos 5:21-24 records God declaring: 'I hate, I despise your feast days, and I do not savor your sacred assemblies.' Israel was conducting regular, elaborate worship — but simultaneously 'who trample the needy and do away with the poor of the land' (8:4). The prophetic point is not that worship was optional but that worship divorced from justice was an offense rather than an offering. The two are covenantally connected — you cannot honor God whom you do not see while oppressing the neighbor you do see."
  },
  {
    "id": 7083,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What is the point of Micah 6:6-8?",
    "choices": [
      "Sacrifice is evil in every context",
      "Only prophets must act justly",
      "God requires covenantal justice, mercy, and humble walking with him rather than mere ritualism",
      "The law is reduced to one verse only"
    ],
    "answer": 2,
    "reference": "Micah 6:6-8",
    "verseText": "What does the LORD require of you but to do justly, to love mercy, and to walk humbly with your God?",
    "explanation": "Micah 6:6-8 presents an imaginary worshipper escalating their offering: thousands of rams, ten thousand rivers of oil, their firstborn? God's response through Micah cuts through the escalation: 'He has shown you, O man, what is good; and what does the LORD require of you but to do justly, to love mercy, and to walk humbly with your God?' The three requirements — justice, mercy, humility — address the social, relational, and spiritual dimensions of covenant obedience together."
  },
  {
    "id": 7084,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "Why is Nahum's oracle against Nineveh not merely nationalistic revenge?",
    "choices": [
      "Because Assyria had become righteous",
      "Because Judah was sinless",
      "Because prophecy concerns only one city",
      "Because it declares the LORD's just rule over violent imperial arrogance"
    ],
    "answer": 3,
    "reference": "Nahum 1:2-8; Nahum 3:1-7",
    "verseText": "The LORD is slow to anger and great in power, and will not at all acquit the wicked.",
    "explanation": "Nahum 1:2-3 establishes the theological foundation: 'God is jealous, and the LORD avenges; the LORD avenges and is furious... the LORD is slow to anger and great in power, and will not at all acquit the wicked.' The oracle against Nineveh is not ethnic triumphalism — it is the necessary outcome of God's moral character applied to a city known for cruelty (Nahum 3:1-4). The slow anger of the LORD is real patience; but patience exhausted by persistent violence produces inevitable judgment."
  },
  {
    "id": 7085,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Prophets",
    "difficulty": "Advanced",
    "question": "What is the significance of the watchman imagery in Ezekiel?",
    "choices": [
      "The prophet bears responsibility to warn, while hearers remain responsible for response",
      "The prophet controls divine judgment",
      "Judgment can be cancelled by silence",
      "Only kings can hear God's word"
    ],
    "answer": 0,
    "reference": "Ezekiel 3:16-21; Ezekiel 33:1-9",
    "verseText": "Son of man, I have made you a watchman.",
    "explanation": "Ezekiel 3:17-21 and 33:7-9 both use the watchman image. The watchman's job is to see the danger and warn — not to prevent it. If the watchman warns and the wicked person refuses, the blood is on their own head; if the watchman fails to warn, the blood is on the watchman's hands. The distribution of responsibility is precise and fair: the prophet's accountability is for faithful proclamation; the hearer's accountability is for genuine response to what they heard."
  },
  {
    "id": 7086,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Daniel",
    "difficulty": "Advanced",
    "question": "What is emphasized when Shadrach, Meshach, and Abednego say God can deliver them, 'but if not'?",
    "choices": [
      "Faith is certainty of rescue in every case",
      "Faithful loyalty to God does not depend on guaranteed earthly deliverance",
      "They doubted God's existence",
      "They expected Babylon to convert immediately"
    ],
    "answer": 1,
    "reference": "Daniel 3:16-18",
    "verseText": "But if not, let it be known to you, O king, that we do not serve your gods.",
    "explanation": "Daniel 3:17-18 records Shadrach, Meshach, and Abednego's answer to Nebuchadnezzar: 'our God whom we serve is able to deliver us from the burning fiery furnace, and He will deliver us from your hand, O king. But if not, let it be known to you, O king, that we do not serve your gods.' 'But if not' is the hinge — their fidelity was not contingent on receiving the deliverance they hoped for. This distinguishes genuine faith from transactional religion that serves God for outcomes."
  },
  {
    "id": 7087,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Daniel",
    "difficulty": "Advanced",
    "question": "Why is Nebuchadnezzar's humiliation in Daniel 4 theologically important?",
    "choices": [
      "It proves Babylonian astrology was correct",
      "It means repentance is impossible for pagans",
      "It shows kings are accountable to the Most High, who rules over human kingdoms",
      "It turns Daniel into king"
    ],
    "answer": 2,
    "reference": "Daniel 4:28-37",
    "verseText": "The Most High rules in the kingdom of men.",
    "explanation": "Daniel 4:30-33 records Nebuchadnezzar boasting 'Is not this great Babylon, that I have built for a royal dwelling by my mighty power and for the honor of my majesty?' — and immediately being struck with madness, living with animals and eating grass for seven years. Daniel 4:35 records his eventual doxology: 'He does according to His will in the army of heaven and among the inhabitants of the earth. No one can restrain His hand.' The most powerful human of his era learned his lesson through humiliation."
  },
  {
    "id": 7088,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ezra-Nehemiah",
    "difficulty": "Advanced",
    "question": "What is the significance of opposition in rebuilding narratives like Ezra and Nehemiah?",
    "choices": [
      "Opposition proves the work is illegitimate",
      "Walls and temple were optional symbols only",
      "Prayer replaces all labor",
      "Restoration advances through resistance, requiring perseverance under God's providence"
    ],
    "answer": 3,
    "reference": "Ezra 4-6; Nehemiah 4",
    "verseText": "The people had a mind to work.",
    "explanation": "Ezra 4 records opponents writing to Persian kings to stop the work; Nehemiah 4 records the threat of violent attack and internal discouragement. In both cases the work continued — Ezra through the intervention of the Persian court, Nehemiah through armed workers building with a tool in one hand and a weapon in the other (4:17). The pattern affirms that legitimate restoration work under God's purposes encounters opposition proportional to its significance, and that perseverance is the required response."
  },
  {
    "id": 7089,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Esther",
    "difficulty": "Advanced",
    "question": "Why is God's hiddenness in Esther so thematically powerful?",
    "choices": [
      "Because divine providence works through apparently ordinary events without explicit naming",
      "Because God is absent from history",
      "Because Mordecai replaces God",
      "Because prayer is mocked throughout the book"
    ],
    "answer": 0,
    "reference": "Esther 4:14; Esther 6:1-13",
    "verseText": "Yet who knows whether you have come to the kingdom for such a time as this?",
    "explanation": "Esther never mentions God, prayer, or worship. The Persian king's sleeplessness, Haman's lot falling on an inconvenient date, Esther's unplanned favor — each contingency tilts toward the Jews' preservation. The theological point is that providence does not require supernatural interruption to be real. The story's restraint in never naming God makes God's presence more remarkable, not less — the reader can see the hand that the characters cannot."
  },
  {
    "id": 7090,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Esther",
    "difficulty": "Advanced",
    "question": "What is the irony at the center of Haman's downfall?",
    "choices": [
      "He is honored above Mordecai forever",
      "The instruments of his self-exaltation become the means of his humiliation",
      "Esther never reveals her identity",
      "The king loses all authority"
    ],
    "answer": 1,
    "reference": "Esther 5-7",
    "verseText": "Hang him on it!",
    "explanation": "Esther 5:14 records Haman building gallows for Mordecai; Esther 7:9-10 records Haman hanged on his own gallows. Esther 6 records the king asking what honor has been done for Mordecai — on the very night Haman came to request Mordecai's execution — and Haman forced to honor the man he planned to kill. The pride that constructed the machinery of humiliation for another became the pride that was humiliated by its own construction."
  },
  {
    "id": 7091,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "What does Psalm 51 teach about true repentance?",
    "choices": [
      "External ritual alone restores fellowship",
      "David denies his guilt",
      "God desires truth in the inward parts and a broken, contrite heart",
      "Sin has no lasting consequences"
    ],
    "answer": 2,
    "reference": "Psalm 51:1-17",
    "verseText": "The sacrifices of God are a broken spirit.",
    "explanation": "Psalm 51:6, 10, 17 identify the inward dimensions: 'truth in the inward parts' (v.6), 'create in me a clean heart' (v.10), 'the sacrifices of God are a broken spirit, a broken and a contrite heart — these, O God, You will not despise' (v.17). David was not simply asking for ritual cleansing — he was asking for inward transformation. The sacrifice of broken-heartedness is identified as the sacrifice that cannot be replaced by animal offerings (v.16-17)."
  },
  {
    "id": 7092,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Psalms",
    "difficulty": "Advanced",
    "question": "Why is Psalm 73 pivotal for wisdom and worship?",
    "choices": [
      "It concludes the wicked always prosper forever",
      "It rejects the sanctuary",
      "It says suffering proves unbelief",
      "It resolves envy through renewed perspective in God's presence and final judgment"
    ],
    "answer": 3,
    "reference": "Psalm 73:1-28",
    "verseText": "Until I went into the sanctuary of God; then I understood their end.",
    "explanation": "Psalm 73:2-3 records Asaph nearly slipping because he was envious of the wicked's prosperity: 'they are not in trouble as other men; nor are they plagued like other men.' The resolution comes in v.17: 'until I went into the sanctuary of God; then I understood their end.' The sanctuary perspective reframes everything: the prosperity of the wicked is temporary (vv.18-20); the psalmist's nearness to God is his ultimate good (v.28). Worship corrects distorted perspective in a way that no amount of earthly observation can."
  },
  {
    "id": 7093,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Wisdom",
    "difficulty": "Advanced",
    "question": "What is the role of the excellent woman in Proverbs 31 within wisdom literature?",
    "choices": [
      "A culminating portrait of wisdom embodied in covenantal diligence, strength, and fear of the LORD",
      "A narrow checklist detached from wisdom theology",
      "A rejection of domestic labor",
      "An argument that wealth alone defines virtue"
    ],
    "answer": 0,
    "reference": "Proverbs 31:10-31",
    "verseText": "A woman who fears the LORD, she shall be praised.",
    "explanation": "Proverbs 31:10-31 is an acrostic poem (each verse beginning with a successive letter of the Hebrew alphabet) presenting a woman of 'excellence' (hayil — the same word used of military valor). She works before dawn, manages investments, supervises her household, makes and sells goods, cares for the poor, and teaches wisdom. The final verse (v.30) provides the interpretive key: 'charm is deceptive and beauty is fleeting, but a woman who fears the LORD shall be praised.' The portrait is wisdom embodied rather than a job description."
  },
  {
    "id": 7094,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Isaiah",
    "difficulty": "Advanced",
    "question": "What does the image of the Branch in prophetic literature often signal?",
    "choices": [
      "The end of Davidic promises",
      "Renewed Davidic hope arising after judgment and apparent ruin",
      "Agricultural abundance only",
      "Priestly replacement of kingship forever"
    ],
    "answer": 1,
    "reference": "Isaiah 11:1-5; Jeremiah 23:5; Zechariah 3:8",
    "verseText": "There shall come forth a Rod from the stem of Jesse.",
    "explanation": "The Branch imagery appears in Isaiah 11:1 ('a shoot from the stump of Jesse'), Jeremiah 23:5 and 33:15 ('a righteous Branch'), Zechariah 3:8 and 6:12 ('My Servant the Branch'). In each case the image addresses a moment of apparent end to the Davidic line — and promises new growth. The pattern across the prophets forms a strand of messianic expectation that the NT takes up in Jesus: the line that seemed finished producing the definitive King."
  },
  {
    "id": 7095,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Jeremiah",
    "difficulty": "Advanced",
    "question": "Why does Jeremiah buy a field while Jerusalem is under siege?",
    "choices": [
      "He misunderstands the military situation",
      "He plans to profit from Babylon",
      "It becomes a sign-act of future restoration beyond present judgment",
      "It proves exile will not occur"
    ],
    "answer": 2,
    "reference": "Jeremiah 32:6-15",
    "verseText": "Houses and fields and vineyards shall be possessed again in this land.",
    "explanation": "Jeremiah 32:6-15 records God commanding Jeremiah to purchase his cousin's field in Anathoth during the Babylonian siege — 'fields and vineyards shall again be bought in this land' (v.15). The purchase was a prophetic sign of hope deliberately performed at the worst possible moment. Jeremiah prayed afterward in what appears to be bewilderment (v.25) — but the act of purchase embodied trust in the divine word beyond the prophet's own comprehension of current circumstances."
  },
  {
    "id": 7096,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Ezekiel",
    "difficulty": "Advanced",
    "question": "What is the significance of God's promise to give Israel a new heart and new spirit?",
    "choices": [
      "External law was always enough",
      "Repentance is unnecessary",
      "Only priests receive spiritual renewal",
      "Real covenant renewal requires inner transformation granted by God"
    ],
    "answer": 3,
    "reference": "Ezekiel 36:25-27",
    "verseText": "I will give you a new heart and put a new spirit within you.",
    "explanation": "Ezekiel 36:26-27 specifies: 'I will give you a new heart and put a new spirit within you; I will take the heart of stone out of your flesh and give you a heart of flesh. I will put My Spirit within you and cause you to walk in My statutes.' The stone heart — hardened, unresponsive — is replaced by divine surgery, not moral improvement. The Spirit is given to cause obedience, not merely enable it. Jesus in John 3:5-8 identifies this new birth as what Nicodemus should have known from his reading of Ezekiel."
  },
  {
    "id": 7097,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What is Haggai confronting when he asks the returned exiles to 'consider your ways'?",
    "choices": [
      "They prioritized personal security while neglecting the house of the LORD",
      "They were rebuilding the temple too quickly",
      "They prayed too much",
      "They had become militaristic"
    ],
    "answer": 0,
    "reference": "Haggai 1:2-11",
    "verseText": "Is it time for you to dwell in your paneled houses, and this temple to lie in ruins?",
    "explanation": "Haggai 1:4-9 confronts the returned exiles' priorities: 'Is it time for you yourselves to dwell in your paneled houses, and this temple to lie in ruins?' They had returned from exile, built comfortable homes, and left the temple desolate. The agricultural frustrations they experienced (planting much, harvesting little) were directly connected to this misplaced priority. Haggai connected physical circumstances to spiritual unfaithfulness with a specificity that demanded either engagement or denial."
  },
  {
    "id": 7098,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "What does Zechariah's vision of Joshua the high priest chiefly proclaim?",
    "choices": [
      "Priestly guilt is permanent and uncleansable",
      "God can remove defilement and restore a representative leader by grace",
      "Satan has final authority in the court",
      "Temple service is unnecessary"
    ],
    "answer": 1,
    "reference": "Zechariah 3:1-10",
    "verseText": "I have removed your iniquity from you.",
    "explanation": "Zechariah 3:3-5 shows Joshua the high priest in filthy garments before the angel of the LORD, with Satan standing at his right hand to accuse him. God's response: 'I have removed your iniquity from you, and I will clothe you with rich robes.' The cleansing was entirely divine initiative — Joshua did nothing; the charge was real (the filthy garments represented genuine defilement); and the provision came from God's grace rather than Joshua's merit. The scene is a condensed picture of divine justification."
  },
  {
    "id": 7099,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Minor Prophets",
    "difficulty": "Advanced",
    "question": "Why is the promise 'Not by might nor by power, but by My Spirit' so important in Zechariah?",
    "choices": [
      "It denies the value of all human effort",
      "It abolishes leadership roles",
      "It grounds post-exilic restoration in divine empowerment rather than human strength",
      "It applies only to warfare"
    ],
    "answer": 2,
    "reference": "Zechariah 4:6-10",
    "verseText": "Not by might nor by power, but by My Spirit, says the LORD of hosts.",
    "explanation": "Zechariah 4:6 addressed Zerubbabel, who was tasked with rebuilding the temple against severe obstacles: limited resources, small post-exilic community, Persian oversight, and the memory of Solomon's far superior original structure. 'Not by might nor by power' directly addressed the impossibility of achieving the goal by human calculation. The preceding vision (the lampstand fed by olive trees, 4:1-5) pictured the Spirit as inexhaustible fuel — the work would proceed not by human adequacy but divine supply."
  },
  {
    "id": 7100,
    "game": "Old Testament",
    "testament": "Old Testament",
    "category": "Canon",
    "difficulty": "Advanced",
    "question": "Across the Old Testament as a whole, which theme most consistently ties narrative, law, worship, wisdom, and prophecy together?",
    "choices": [
      "Human self-sufficiency as the path to blessing",
      "Israel's military expansion as the final goal",
      "Temple ritual with no ethical demands",
      "The holy, covenant-keeping God seeking a faithful people while advancing redemptive purpose through judgment and mercy"
    ],
    "answer": 3,
    "reference": "Exodus 34:6-7; Deuteronomy 7:9; Psalm 103:8-18; Isaiah 1:16-20; Jeremiah 31:31-34",
    "verseText": "The LORD, the LORD God, merciful and gracious... maintaining mercy for thousands.",
    "explanation": "From Genesis's covenant with creation and the patriarchs through the Law's repeated 'I am the LORD your God who brought you out of Egypt' through the Psalms' trust in the covenant God through the Prophets' 'return to Me and I will return to you' — the Old Testament's unifying thread is a holy God who does not abandon his purposes despite human failure. The covenant endures through rebellion, exile, and return because God's faithfulness is the operative factor, not human performance."
  }
];
