const timelineQuestions = [

  {
    id: 15001,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "What overarching sequence best describes the Bible's redemptive timeline?",
    choices: [
      "Creation → Fall → Redemption → Restoration",
      "Law → Kingdom → Exile → Creation",
      "Flood → Israel → Church → Creation",
      "Patriarchs → Kings → Prophets → Creation"
    ],
    answer: 0,
    reference: "Genesis 1–3; Revelation 21–22",
    verseText: "Creation to restoration."
  },

  {
    id: 15002,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does Abraham come after Babel in the biblical storyline?",
    choices: [
      "Monarchy begins there",
      "Covenant answer to rebellion",
      "Egypt becomes dominant",
      "Temple worship is established"
    ],
    answer: 1,
    reference: "Genesis 11–12",
    verseText: "God calls Abram after the scattering."
  },

  {
    id: 15003,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does Exodus come before Sinai law in the timeline?",
    choices: [
      "Travel comes first",
      "Redemption before law",
      "Moses had not yet matured",
      "Pharaoh required a sign"
    ],
    answer: 1,
    reference: "Exodus 12–20",
    verseText: "Deliverance precedes covenant instruction."
  },

  {
    id: 15004,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the sequence wilderness → conquest → judges primarily show?",
    choices: [
      "Immediate covenant perfection",
      "Instability and repeated failure",
      "Temple-centered faithfulness",
      "Permanent peace in the land"
    ],
    answer: 1,
    reference: "Numbers; Joshua; Judges",
    verseText: "A repeated cycle of failure and rescue."
  },

  {
    id: 15005,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does the period of the judges come before the monarchy?",
    choices: [
      "There was no covenant yet",
      "The narrative exposes the need for a king",
      "Prophets had not appeared yet",
      "The temple had already fallen"
    ],
    answer: 1,
    reference: "Judges 21:25; 1 Samuel 8",
    verseText: "The disorder of Judges sets up the monarchy."
  },

  {
    id: 15006,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is David's central role in the Bible's timeline?",
    choices: [
      "He ends prophecy",
      "He anchors the messianic royal line",
      "He replaces Abraham",
      "He begins the exile"
    ],
    answer: 1,
    reference: "2 Samuel 7",
    verseText: "The throne promise shapes later hope."
  },

  {
    id: 15007,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the kingdom's division after Solomon mainly signal?",
    choices: [
      "Covenant fracture and decline",
      "The end of temple worship",
      "A return to Eden",
      "The rise of Rome"
    ],
    answer: 0,
    reference: "1 Kings 11–12",
    verseText: "The kingdom is torn because of unfaithfulness."
  },

  {
    id: 15008,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why do the prophets intensify in the monarchy period?",
    choices: [
      "Israel enters a golden age",
      "Judgment is drawing near",
      "There are no kings left",
      "The temple has already vanished"
    ],
    answer: 1,
    reference: "2 Kings 17; Jeremiah 25",
    verseText: "The prophetic voice rises as judgment nears."
  },

  {
    id: 15009,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Within the timeline, exile primarily represents what?",
    choices: [
      "A random geopolitical setback",
      "Covenant judgment",
      "The total end of Israel's story",
      "The abolition of all hope"
    ],
    answer: 1,
    reference: "2 Kings 24–25",
    verseText: "Exile is the covenant curse made visible."
  },

  {
    id: 15010,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the return from exile represent in the timeline?",
    choices: [
      "The end of prophecy",
      "A partial restoration",
      "A replacement of the law",
      "The final kingdom in fullness"
    ],
    answer: 1,
    reference: "Ezra; Nehemiah; Haggai",
    verseText: "Return happens, but the story still waits for more."
  },

  {
    id: 15011,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is creation the opening event of the biblical timeline?",
    choices: [
      "To begin with Israel's monarchy",
      "To establish God as origin and ruler of all",
      "To skip directly to sin",
      "To introduce the temple first"
    ],
    answer: 1,
    reference: "Genesis 1",
    verseText: "God creates all things before all later history."
  },

  {
    id: 15012,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is the chief timeline effect of the fall in Genesis 3?",
    choices: [
      "It begins the need for redemption",
      "It ends divine rule",
      "It creates the tribes of Israel",
      "It starts the exile from Babylon"
    ],
    answer: 0,
    reference: "Genesis 3",
    verseText: "The fall introduces sin, death, and promise."
  },

  {
    id: 15013,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the flood a major point in the biblical timeline?",
    choices: [
      "It ends covenant history",
      "It shows judgment on worldwide corruption",
      "It introduces the monarchy",
      "It replaces Eden with Sinai"
    ],
    answer: 1,
    reference: "Genesis 6–9",
    verseText: "The flood is judgment and preservation."
  },

  {
    id: 15014,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is the function of Babel in the timeline?",
    choices: [
      "It reveals unified obedience",
      "It shows human rebellion and scattering",
      "It creates the priesthood",
      "It begins the exodus"
    ],
    answer: 1,
    reference: "Genesis 11:1-9",
    verseText: "Babel displays pride, judgment, and dispersion."
  },

  {
    id: 15015,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why do the patriarchs matter in the timeline before Exodus?",
    choices: [
      "They complete the kingdom",
      "They carry promise before national formation",
      "They replace creation",
      "They end the problem of sin"
    ],
    answer: 1,
    reference: "Genesis 12–50",
    verseText: "Promise is established before Israel becomes a nation."
  },

  {
    id: 15016,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Joseph's descent into Egypt important for the timeline?",
    choices: [
      "It begins the judges",
      "It sets up Israel's preservation and later Exodus",
      "It establishes the temple",
      "It ends the patriarchal era with exile"
    ],
    answer: 1,
    reference: "Genesis 37–50",
    verseText: "Egypt becomes both refuge and future bondage."
  },

  {
    id: 15017,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Sinai chiefly establish in the storyline?",
    choices: [
      "Israel's covenant identity",
      "The Davidic throne",
      "Roman citizenship",
      "The final resurrection"
    ],
    answer: 0,
    reference: "Exodus 19–24",
    verseText: "Sinai forms Israel as covenant people."
  },

  {
    id: 15018,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "What broad pattern characterizes Scripture's unfolding timeline?",
    choices: [
      "Political accident",
      "Progressive revelation",
      "Random anthology",
      "Disconnected theology"
    ],
    answer: 1,
    reference: "Luke 24:27, 44",
    verseText: "The storyline unfolds toward fulfillment."
  },

  {
    id: 15019,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does Babel come before Abraham in theological sequence?",
    choices: [
      "To highlight architecture",
      "To show rebellion answered by covenant calling",
      "To establish Israel first",
      "To end prophecy"
    ],
    answer: 1,
    reference: "Genesis 11–12",
    verseText: "Scattering is followed by covenant promise."
  },

  {
    id: 15020,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the move from patriarchs to Exodus demonstrate?",
    choices: [
      "Promise preserved through generations",
      "Politics replacing faith",
      "Failure of covenant speech",
      "The end of divine action"
    ],
    answer: 0,
    reference: "Genesis 50; Exodus 1–3",
    verseText: "God remembers and acts on promise."
  },

  {
    id: 15021,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Sinai placed before conquest in the timeline?",
    choices: [
      "Geography demanded it",
      "Identity is formed before inheritance is received",
      "The judges delayed entry",
      "Pharaoh blocked Canaan"
    ],
    answer: 1,
    reference: "Exodus 19; Joshua 1",
    verseText: "God forms a people before settling them in the land."
  },

  {
    id: 15022,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why do kings follow judges in the storyline?",
    choices: [
      "Israel had matured spiritually",
      "The people desired a king and rejected God's direct rule",
      "Prophecy had ceased",
      "The covenant was abolished"
    ],
    answer: 1,
    reference: "1 Samuel 8",
    verseText: "The monarchy begins amid covenant tension."
  },

  {
    id: 15023,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is the prophets' main timeline role during the monarchy?",
    choices: [
      "Replace the kings as rulers",
      "Call covenant people back to repentance",
      "Write neutral history",
      "Create a new law"
    ],
    answer: 1,
    reference: "2 Kings 17:13",
    verseText: "The prophets warn, call back, and interpret history."
  },

  {
    id: 15024,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "In timeline terms, what does Jerusalem's fall represent?",
    choices: [
      "End of prophecy",
      "Judgment climax on covenant unfaithfulness",
      "Loss of all Scripture",
      "End of Israel's identity forever"
    ],
    answer: 1,
    reference: "2 Kings 25",
    verseText: "The fall of Jerusalem climaxes covenant judgment."
  },

  {
    id: 15025,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "How should the second temple period be viewed in the timeline?",
    choices: [
      "No prophetic significance",
      "An age of expectation and incompleteness",
      "The final glory in full form",
      "The end of messianic hope"
    ],
    answer: 1,
    reference: "Haggai 2; Malachi 3–4",
    verseText: "Return did not exhaust the promises."
  },

  {
    id: 15026,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Within the timeline, Jesus is presented as fulfilling what?",
    choices: [
      "A new unrelated religion",
      "The Law and the Prophets",
      "Only the monarchy",
      "Only wisdom literature"
    ],
    answer: 1,
    reference: "Matthew 5:17; Luke 24:27",
    verseText: "The storyline converges in Christ."
  },

  {
    id: 15027,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does Acts chiefly show in the Bible's timeline?",
    choices: [
      "Apostolic decline",
      "Expansion of witness to the nations",
      "End of covenant history",
      "Replacement of the apostles"
    ],
    answer: 1,
    reference: "Acts 1:8",
    verseText: "The gospel moves outward from Jerusalem."
  },

  {
    id: 15028,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why does the Bible end with Revelation?",
    choices: [
      "To remain incomplete",
      "To show final fulfillment and restoration",
      "To tell only Paul's story",
      "To stop abruptly after exile"
    ],
    answer: 1,
    reference: "Revelation 21–22",
    verseText: "The end answers the beginning."
  },

  {
    id: 15029,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the conquest period chiefly emphasize in the timeline?",
    choices: [
      "Promise beginning to take land form",
      "Israel's permanent perfection",
      "The end of warfare",
      "The arrival of the Messiah"
    ],
    answer: 0,
    reference: "Joshua 21:43-45",
    verseText: "The land promise begins to be realized."
  },

  {
    id: 15030,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the judges period intentionally repetitive in the storyline?",
    choices: [
      "To avoid chronology",
      "To display Israel's cycle of sin, oppression, and deliverance",
      "To show uninterrupted peace",
      "To introduce the exile early"
    ],
    answer: 1,
    reference: "Judges 2:11-19",
    verseText: "The cycle interprets the era."
  },

  {
    id: 15031,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Saul's place in the timeline mainly show?",
    choices: [
      "The ideal king has arrived",
      "The insufficiency of merely human kingship",
      "The end of prophetic ministry",
      "The beginning of exile"
    ],
    answer: 1,
    reference: "1 Samuel 9–15",
    verseText: "Saul's failure prepares for David."
  },

  {
    id: 15032,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Solomon important in the timeline?",
    choices: [
      "He fulfills every kingdom promise permanently",
      "He represents kingdom splendor before decline",
      "He ends temple worship",
      "He begins the prophetic office"
    ],
    answer: 1,
    reference: "1 Kings 4–11",
    verseText: "Glory and failure meet in Solomon."
  },

  {
    id: 15033,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "How do Elijah and Elisha function in the timeline?",
    choices: [
      "As royal successors",
      "As prophetic confrontations against apostasy",
      "As temple builders",
      "As exile return leaders"
    ],
    answer: 1,
    reference: "1 Kings 17–2 Kings 13",
    verseText: "They confront idolatry in a dark royal age."
  },

  {
    id: 15034,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is the significance of the Assyrian conquest in the timeline?",
    choices: [
      "It ends all covenant hope",
      "It foreshadows broader covenant judgment",
      "It restores David's throne",
      "It begins the second temple"
    ],
    answer: 1,
    reference: "2 Kings 17",
    verseText: "The northern kingdom falls first."
  },

  {
    id: 15035,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the Babylonian exile especially intensify in the storyline?",
    choices: [
      "Confidence in human kings",
      "Hope for restoration and a coming king",
      "The abolition of temple theology",
      "The end of prophecy"
    ],
    answer: 1,
    reference: "Jeremiah 29; Ezekiel 36–37; Daniel 9",
    verseText: "Judgment sharpens hope."
  },

  {
    id: 15036,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why are Ezra and Nehemiah placed after exile in the timeline?",
    choices: [
      "To narrate immediate final glory",
      "To show rebuilding without full consummation",
      "To replace Moses",
      "To begin Roman rule"
    ],
    answer: 1,
    reference: "Ezra; Nehemiah",
    verseText: "Restoration is real but incomplete."
  },

  {
    id: 15037,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Malachi's placement near the close of the Old Testament highlight?",
    choices: [
      "Final fulfillment has arrived",
      "Expectation remains open",
      "Temple worship has ceased forever",
      "The covenant has ended"
    ],
    answer: 1,
    reference: "Malachi 3–4",
    verseText: "The Old Testament closes in expectation."
  },

  {
    id: 15038,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why do the Gospels stand before Acts in the timeline?",
    choices: [
      "Biography is more important than theology",
      "Christ's person and work ground the church's mission",
      "Acts retells the Old Testament first",
      "The apostles existed before Jesus"
    ],
    answer: 1,
    reference: "Luke 24; Acts 1",
    verseText: "Mission follows the finished work of Christ."
  },

  {
    id: 15039,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What is Pentecost's place in the timeline?",
    choices: [
      "A replacement for creation",
      "The outpouring of the Spirit in the messianic age",
      "The end of resurrection hope",
      "The abolition of all covenant continuity"
    ],
    answer: 1,
    reference: "Acts 2; Joel 2",
    verseText: "Pentecost signals the age of the Spirit."
  },

  {
    id: 15040,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does the inclusion of Gentiles in Acts demonstrate in the timeline?",
    choices: [
      "A sudden divine change of mind",
      "The widening of promise to the nations",
      "The end of Abrahamic themes",
      "The failure of resurrection preaching"
    ],
    answer: 1,
    reference: "Acts 10–11; Genesis 12:3",
    verseText: "The nations are brought into the promised blessing."
  },

  {
    id: 15041,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "How do the epistles function in the timeline?",
    choices: [
      "As random private notes",
      "As apostolic interpretation of Christ and church life",
      "As replacements for the Gospels",
      "As pre-exilic documents"
    ],
    answer: 1,
    reference: "Romans; Ephesians; Hebrews",
    verseText: "The epistles interpret the meaning of redemptive events."
  },

  {
    id: 15042,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "Why does Revelation echo Genesis so strongly?",
    choices: [
      "Because both are merely symbolic",
      "Because the Bible ends where its themes began",
      "Because history restarts from zero",
      "Because Eden replaces redemption"
    ],
    answer: 1,
    reference: "Genesis 1–3; Revelation 21–22",
    verseText: "The end restores and surpasses the beginning."
  },

  {
    id: 15043,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "What timeline movement best describes the path from Eden to New Jerusalem?",
    choices: [
      "Garden → city-temple glory",
      "Temple → flood → exile",
      "Law → judges → Babel",
      "Kingship → creation → cross"
    ],
    answer: 0,
    reference: "Genesis 2; Revelation 21–22",
    verseText: "The storyline moves from creation to consummated presence."
  },

  {
    id: 15044,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "What recurring pattern links many major timeline moments from Exodus to exile to Christ?",
    choices: [
      "Human progress upward",
      "Death and resurrection-shaped deliverance",
      "Temple replacement only",
      "Prophetic silence"
    ],
    answer: 1,
    reference: "Exodus 12–14; Ezekiel 37; Romans 6",
    verseText: "God repeatedly brings life through judgment and deliverance."
  },

  {
    id: 15045,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does Deuteronomy matter so much in the timeline before Joshua?",
    choices: [
      "It erases Sinai",
      "It renews covenant on the threshold of inheritance",
      "It ends Moses' role before Egypt",
      "It starts the monarchy"
    ],
    answer: 1,
    reference: "Deuteronomy 29–34",
    verseText: "The covenant is renewed before entry into the land."
  },

  {
    id: 15046,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the ark's prominence in early Israel's story emphasize in the timeline?",
    choices: [
      "Military technology",
      "God's presence among His covenant people",
      "Political centralization only",
      "The end of priesthood"
    ],
    answer: 1,
    reference: "Joshua 3; 1 Samuel 4–6",
    verseText: "The ark signifies the holy presence of God."
  },

  {
    id: 15047,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the temple's construction under Solomon add to the timeline?",
    choices: [
      "A settled center for divine name and worship",
      "A replacement for covenant",
      "The end of sacrifice",
      "The exile of Judah"
    ],
    answer: 0,
    reference: "1 Kings 8",
    verseText: "Temple centrality marks the kingdom era."
  },

  {
    id: 15048,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the destruction of the temple such a major timeline shock?",
    choices: [
      "It proves God has no plan",
      "It dramatizes judgment at the heart of Israel's worship life",
      "It ends all prayer forever",
      "It abolishes prophecy"
    ],
    answer: 1,
    reference: "2 Kings 25; Lamentations",
    verseText: "The fall reaches the center of covenant life."
  },

  {
    id: 15049,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "How does the resurrection function in the Bible's timeline?",
    choices: [
      "As a private miracle only",
      "As the decisive turning point of new creation",
      "As a symbol with no historical weight",
      "As the end of kingdom hope"
    ],
    answer: 1,
    reference: "1 Corinthians 15; Revelation 1:5",
    verseText: "The resurrection is the hinge of redemptive history."
  },

  {
    id: 15050,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What final timeline hope is emphasized at the end of Scripture?",
    choices: [
      "Endless exile",
      "God dwelling with His people in perfected restoration",
      "A return to judges",
      "A second Babel"
    ],
    answer: 1,
    reference: "Revelation 21:3-5",
    verseText: "The end is the restoration of God's dwelling with His people."
  },

  {
    id: 15051,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Isaac significant in the biblical timeline?",
    choices: [
      "He begins the monarchy",
      "He continues the covenant line",
      "He leads the exodus",
      "He rebuilds the temple"
    ],
    answer: 1,
    reference: "Genesis 17:19; Genesis 26:3-4",
    verseText: "The covenant promise continues through Isaac."
  },

  {
    id: 15052,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Jacob's place in the timeline emphasize?",
    choices: [
      "The rise of judges",
      "The formation of Israel's tribal identity",
      "The beginning of exile",
      "The end of sacrifice"
    ],
    answer: 1,
    reference: "Genesis 32:28; Genesis 35:22-26",
    verseText: "Israel's twelve-tribe identity emerges through Jacob."
  },

  {
    id: 15053,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the Joseph narrative crucial before Exodus?",
    choices: [
      "It explains Israel's move into Egypt",
      "It ends the covenant promises",
      "It establishes Jerusalem",
      "It begins the divided kingdom"
    ],
    answer: 0,
    reference: "Genesis 46:1-7; Exodus 1:1-8",
    verseText: "Joseph's story prepares the setting for Israel in Egypt."
  },

  {
    id: 15054,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Passover add to the Bible's timeline theology?",
    choices: [
      "A pattern of redemption through sacrifice",
      "A rejection of covenant identity",
      "A denial of judgment",
      "A move away from worship"
    ],
    answer: 0,
    reference: "Exodus 12:1-14",
    verseText: "Deliverance is marked by sacrificial blood."
  },

  {
    id: 15055,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the crossing of the Red Sea a major timeline moment?",
    choices: [
      "It confirms creation has ended",
      "It dramatizes decisive deliverance from bondage",
      "It begins monarchy",
      "It abolishes the covenant"
    ],
    answer: 1,
    reference: "Exodus 14",
    verseText: "God saves His people through the sea."
  },

  {
    id: 15056,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why does the tabernacle matter in the wilderness timeline?",
    choices: [
      "It replaces God's presence",
      "It locates God's dwelling among His people",
      "It ends sacrifice",
      "It signals exile"
    ],
    answer: 1,
    reference: "Exodus 25:8; Exodus 40:34-38",
    verseText: "God dwells in the midst of Israel."
  },

  {
    id: 15057,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the rebellion at Kadesh-barnea chiefly show in the timeline?",
    choices: [
      "Immediate covenant victory",
      "Unbelief delaying inheritance",
      "The beginning of kingship",
      "The close of prophecy"
    ],
    answer: 1,
    reference: "Numbers 13–14",
    verseText: "Unbelief delays the promise."
  },

  {
    id: 15058,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Deuteronomy positioned before Joshua?",
    choices: [
      "To narrate life after exile",
      "To renew covenant before entering the land",
      "To begin prophetic silence",
      "To replace Sinai"
    ],
    answer: 1,
    reference: "Deuteronomy 29–30; Deuteronomy 34",
    verseText: "Moses renews covenant on the edge of fulfillment."
  },

  {
    id: 15059,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does the Jordan crossing signify in the timeline?",
    choices: [
      "Entry into the promised inheritance",
      "Return from Babylon",
      "Temple destruction",
      "The end of law"
    ],
    answer: 0,
    reference: "Joshua 3–4",
    verseText: "Israel enters the land God promised."
  },

  {
    id: 15060,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is Jericho's fall meant to teach in the storyline?",
    choices: [
      "Victory comes by covenant trust in God",
      "Victory comes by superior weaponry alone",
      "Victory ends the need for obedience",
      "Victory proves Israel is already perfect"
    ],
    answer: 0,
    reference: "Joshua 6",
    verseText: "The Lord gives the city."
  },

  {
    id: 15061,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the covenant renewal at Shechem important after conquest?",
    choices: [
      "It closes the Old Testament canon",
      "It reaffirms covenant loyalty in the land",
      "It begins Roman rule",
      "It replaces temple worship"
    ],
    answer: 1,
    reference: "Joshua 24",
    verseText: "Israel is called to serve the Lord in the land."
  },

  {
    id: 15062,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Ruth contribute to the timeline during the judges era?",
    choices: [
      "A portrait of covenant faithfulness and Davidic ancestry",
      "The end of tribal identity",
      "The beginning of exile",
      "The abolition of sacrifice"
    ],
    answer: 0,
    reference: "Ruth 1:1; Ruth 4:17-22",
    verseText: "Grace and lineage shine during a dark era."
  },

  {
    id: 15063,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Samuel a key transition figure in the timeline?",
    choices: [
      "He moves Israel from judges to monarchy",
      "He builds Solomon's temple",
      "He leads the return from exile",
      "He ends the prophetic office"
    ],
    answer: 0,
    reference: "1 Samuel 3; 1 Samuel 8",
    verseText: "Samuel bridges the age of judges and kings."
  },

  {
    id: 15064,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Saul's rise chiefly reveal in redemptive history?",
    choices: [
      "Human kingship according to outward appearance is insufficient",
      "Kingship itself is the final hope",
      "The prophets are no longer needed",
      "Temple worship has been fulfilled"
    ],
    answer: 0,
    reference: "1 Samuel 9; 1 Samuel 16:7",
    verseText: "Saul exposes the weakness of merely human rule."
  },

  {
    id: 15065,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Jerusalem's capture under David significant?",
    choices: [
      "It establishes a royal center for the kingdom",
      "It begins the exile",
      "It ends covenant promises",
      "It replaces Sinai with Babylon"
    ],
    answer: 0,
    reference: "2 Samuel 5:6-10",
    verseText: "Jerusalem becomes the royal city."
  },

  {
    id: 15066,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does bringing the ark to Jerusalem emphasize?",
    choices: [
      "God's presence is central to Israel's life",
      "Politics is central to Israel's life",
      "Sacrifice is no longer needed",
      "The kingdom is already perfected"
    ],
    answer: 0,
    reference: "2 Samuel 6",
    verseText: "The holy presence of God matters at the center."
  },

  {
    id: 15067,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the Davidic covenant a major turning point?",
    choices: [
      "It promises an enduring royal line",
      "It abolishes the Mosaic covenant",
      "It guarantees immediate national perfection",
      "It ends all future judgment"
    ],
    answer: 0,
    reference: "2 Samuel 7:12-16",
    verseText: "The future hope of kingship is anchored in David."
  },

  {
    id: 15068,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Solomon's reign represent at its height?",
    choices: [
      "A preview of kingdom glory",
      "The end of wisdom",
      "The beginning of exile",
      "The abolition of prophecy"
    ],
    answer: 0,
    reference: "1 Kings 4:20-34; 1 Kings 10",
    verseText: "Glory, wisdom, and peace foreshadow a greater kingdom."
  },

  {
    id: 15069,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the temple dedication under Solomon so significant?",
    choices: [
      "It marks a fixed center for God's name and worship",
      "It ends the need for prayer",
      "It cancels the covenant curses",
      "It begins Gentile mission in Acts"
    ],
    answer: 0,
    reference: "1 Kings 8",
    verseText: "The temple becomes the central place of worship."
  },

  {
    id: 15070,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Solomon's later failure show in the timeline?",
    choices: [
      "Even great kings do not fulfill the kingdom hope",
      "The covenant no longer matters",
      "Israel no longer needs prophets",
      "Idolatry has no consequence"
    ],
    answer: 0,
    reference: "1 Kings 11",
    verseText: "Splendor without faithfulness collapses."
  },

  {
    id: 15071,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What is the timeline significance of the kingdom dividing after Solomon?",
    choices: [
      "The visible unraveling of covenant unity",
      "The final restoration of Israel",
      "The end of prophetic ministry",
      "The beginning of resurrection life"
    ],
    answer: 0,
    reference: "1 Kings 12",
    verseText: "The kingdom fractures under judgment."
  },

  {
    id: 15072,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Jeroboam's alternative worship system so important in the storyline?",
    choices: [
      "It institutionalizes apostasy in the north",
      "It unifies Israel spiritually",
      "It restores the Davidic line",
      "It fulfills the prophets completely"
    ],
    answer: 0,
    reference: "1 Kings 12:26-33",
    verseText: "False worship deepens covenant corruption."
  },

  {
    id: 15073,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What do Elijah's confrontations with Ahab and Baal worship emphasize?",
    choices: [
      "The Lord alone is God amid national apostasy",
      "The monarchy has reached perfection",
      "Prophecy is no longer necessary",
      "Worship is now a private matter only"
    ],
    answer: 0,
    reference: "1 Kings 18",
    verseText: "The prophetic word challenges idolatrous power."
  },

  {
    id: 15074,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Elisha's ministry especially highlight in the timeline?",
    choices: [
      "God's continuing mercy and power in a declining kingdom",
      "The end of miracles",
      "The rise of Babylon over Judah",
      "The close of covenant history"
    ],
    answer: 0,
    reference: "2 Kings 2–8",
    verseText: "Grace and power persist during decline."
  },

  {
    id: 15075,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the fall of the northern kingdom to Assyria so significant?",
    choices: [
      "It shows covenant warnings coming to pass",
      "It proves the prophets were mistaken",
      "It restores Jerusalem",
      "It ends Israel's story in hope"
    ],
    answer: 0,
    reference: "2 Kings 17:6-23",
    verseText: "Judgment falls on persistent covenant unfaithfulness."
  },

  {
    id: 15076,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Hezekiah's reform show in the larger timeline?",
    choices: [
      "Moments of renewal can occur before final judgment",
      "Judgment has been permanently canceled",
      "Kings no longer matter",
      "The exile is already over"
    ],
    answer: 0,
    reference: "2 Kings 18; 2 Chronicles 29–31",
    verseText: "Renewal appears, but the deeper problem remains."
  },

  {
    id: 15077,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Josiah's reform important in the timeline?",
    choices: [
      "It shows the power and limits of late covenant renewal",
      "It ends the monarchy forever in triumph",
      "It makes exile impossible",
      "It replaces the prophets with scribes"
    ],
    answer: 0,
    reference: "2 Kings 22–23",
    verseText: "The law is rediscovered, but judgment still looms."
  },

  {
    id: 15078,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Jerusalem's destruction by Babylon chiefly represent?",
    choices: [
      "Covenant judgment reaching temple, throne, and land",
      "A minor political setback only",
      "The elimination of all future hope",
      "The end of God's promises"
    ],
    answer: 0,
    reference: "2 Kings 25; 2 Chronicles 36",
    verseText: "The covenant curses fall with devastating force."
  },

  {
    id: 15079,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why do books like Lamentations matter in the exile timeline?",
    choices: [
      "They give voice to grief under divine judgment",
      "They celebrate final restoration",
      "They begin the church age",
      "They end prayer and lament"
    ],
    answer: 0,
    reference: "Lamentations 1; Lamentations 3",
    verseText: "Sorrow and hope coexist under judgment."
  },

  {
    id: 15080,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What do Ezekiel's restoration visions contribute to the storyline?",
    choices: [
      "Hope of renewed life, cleansing, and future restoration",
      "The canceling of all former covenants",
      "The certainty that no future temple imagery matters",
      "The ending of messianic expectation"
    ],
    answer: 0,
    reference: "Ezekiel 36–37",
    verseText: "Judgment does not extinguish future hope."
  },

  {
    id: 15081,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is Daniel important within the exile period?",
    choices: [
      "He shows God's sovereignty over pagan empires",
      "He ends the prophetic tradition",
      "He builds the second temple himself",
      "He abolishes covenant identity"
    ],
    answer: 0,
    reference: "Daniel 2; Daniel 7",
    verseText: "The Most High rules over earthly kingdoms."
  },

  {
    id: 15082,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Cyrus's decree represent in the timeline?",
    choices: [
      "The beginning of return from exile",
      "The end of prophecy forever",
      "The start of the monarchy",
      "The abolition of temple worship"
    ],
    answer: 0,
    reference: "Ezra 1:1-4",
    verseText: "God opens the way for return."
  },

  {
    id: 15083,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why is the rebuilding of the altar and temple in Ezra significant?",
    choices: [
      "Worship is being restored, though not in final fullness",
      "The kingdom has fully arrived",
      "Sacrifice is permanently ended",
      "The covenant has been replaced"
    ],
    answer: 0,
    reference: "Ezra 3; Ezra 6",
    verseText: "Restoration begins, but completion still awaits."
  },

  {
    id: 15084,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Nehemiah's rebuilding of Jerusalem's walls emphasize?",
    choices: [
      "Partial restoration of community life and identity",
      "The final end of all opposition",
      "The return of the Davidic throne in fullness",
      "The end of covenant struggle"
    ],
    answer: 0,
    reference: "Nehemiah 1–6",
    verseText: "The people are reestablished, yet still incomplete."
  },

  {
    id: 15085,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "Why do Haggai and Zechariah matter in the post-exilic timeline?",
    choices: [
      "They encourage rebuilding while pointing beyond it",
      "They deny the importance of the temple",
      "They close off messianic hope",
      "They replace Moses as lawgiver"
    ],
    answer: 0,
    reference: "Haggai 1–2; Zechariah 9",
    verseText: "Present obedience is linked to future hope."
  },

  {
    id: 15086,
    game: "Bible Timeline",
    testament: "Old Testament",
    difficulty: "Advanced",
    question: "What does Malachi reveal about the end of the Old Testament timeline?",
    choices: [
      "The story closes with unresolved expectation",
      "Everything promised has already fully arrived",
      "Temple worship is irrelevant forever",
      "Prophetic hope has been canceled"
    ],
    answer: 0,
    reference: "Malachi 3–4",
    verseText: "The Old Testament ends looking ahead."
  },

  {
    id: 15087,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why do the Gospels begin with expectation and fulfillment themes?",
    choices: [
      "They present Jesus as the long-awaited fulfillment",
      "They reject the Old Testament storyline",
      "They begin an unrelated religion",
      "They end covenant history at once"
    ],
    answer: 0,
    reference: "Matthew 1:1-23; Luke 1–2",
    verseText: "The promised one has arrived in history."
  },

  {
    id: 15088,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does the incarnation add to the Bible's timeline?",
    choices: [
      "God enters history in the person of the Son",
      "God withdraws from covenant history",
      "The temple becomes unnecessary because history ends immediately",
      "Israel's story is abandoned"
    ],
    answer: 0,
    reference: "John 1:14; Galatians 4:4-5",
    verseText: "The Word becomes flesh in the fullness of time."
  },

  {
    id: 15089,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why is Jesus' baptism significant in the unfolding timeline?",
    choices: [
      "It marks the public inauguration of His messianic mission",
      "It ends the need for obedience",
      "It begins the exile of Judah",
      "It replaces the resurrection"
    ],
    answer: 0,
    reference: "Matthew 3:13-17",
    verseText: "The Son is publicly identified and anointed for mission."
  },

  {
    id: 15090,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does Jesus' proclamation of the kingdom signify in the timeline?",
    choices: [
      "The promised reign of God is arriving in Him",
      "The kingdom has been canceled",
      "Only political revolt matters now",
      "The prophets were mistaken"
    ],
    answer: 0,
    reference: "Mark 1:14-15",
    verseText: "The kingdom of God draws near in Christ."
  },

  {
    id: 15091,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why are Jesus' miracles significant in redemptive history?",
    choices: [
      "They are signs of the inbreaking kingdom",
      "They replace His teaching entirely",
      "They deny Old Testament hope",
      "They only entertain the crowds"
    ],
    answer: 0,
    reference: "Matthew 11:2-6; John 20:30-31",
    verseText: "The kingdom is seen in acts of restoration."
  },

  {
    id: 15092,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does the transfiguration contribute to the timeline?",
    choices: [
      "It reveals Jesus in glory as the climactic Son",
      "It ends the need for Scripture",
      "It begins Pentecost",
      "It replaces the resurrection"
    ],
    answer: 0,
    reference: "Matthew 17:1-8",
    verseText: "The glory of the Son is unveiled."
  },

  {
    id: 15093,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why is the cross the central turning point in the timeline?",
    choices: [
      "It accomplishes atonement and covenant fulfillment",
      "It is only a political tragedy",
      "It ends God's purposes",
      "It replaces resurrection hope"
    ],
    answer: 0,
    reference: "Romans 3:21-26; Luke 22:20",
    verseText: "Redemption is accomplished through Christ's death."
  },

  {
    id: 15094,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What does the resurrection inaugurate in the storyline?",
    choices: [
      "The dawn of new creation",
      "The end of messianic hope",
      "The cancellation of bodily redemption",
      "The close of divine action"
    ],
    answer: 0,
    reference: "1 Corinthians 15:20-23",
    verseText: "The risen Christ is the firstfruits."
  },

  {
    id: 15095,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why is the ascension crucial in the biblical timeline?",
    choices: [
      "It marks Christ's exaltation and reign",
      "It means Christ abandons His people",
      "It ends the church's mission",
      "It cancels Pentecost"
    ],
    answer: 0,
    reference: "Acts 1:9-11; Ephesians 1:20-23",
    verseText: "The risen Christ is enthroned above all."
  },

  {
    id: 15096,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What is Pentecost's major timeline significance?",
    choices: [
      "The Spirit is poured out for the messianic age",
      "The church replaces all Scripture",
      "The kingdom is postponed indefinitely",
      "Israel's promises are erased"
    ],
    answer: 0,
    reference: "Acts 2; Joel 2:28-32",
    verseText: "The promised Spirit is given."
  },

  {
    id: 15097,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "Why is the mission to the Gentiles in Acts so significant?",
    choices: [
      "It shows the Abrahamic promise reaching the nations",
      "It proves Israel never mattered",
      "It begins a second exile",
      "It ends the role of the apostles"
    ],
    answer: 0,
    reference: "Acts 10–11; Acts 13:46-48",
    verseText: "The nations are drawn into the promised blessing."
  },

  {
    id: 15098,
    game: "Bible Timeline",
    testament: "New Testament",
    difficulty: "Advanced",
    question: "What do the epistles add to the Bible's timeline?",
    choices: [
      "Apostolic interpretation of Christ's work for the church age",
      "A replacement for the Gospels' witness",
      "A return to pre-covenant religion",
      "A denial of future hope"
    ],
    answer: 0,
    reference: "Romans 5; Ephesians 2; Hebrews 10",
    verseText: "The meaning of Christ's work is explained for the church."
  },

  {
    id: 15099,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "Why does Revelation return so strongly to creation themes?",
    choices: [
      "To show that redemption leads to consummated restoration",
      "To suggest history simply repeats itself",
      "To deny the cross and resurrection",
      "To replace the New Testament with Genesis"
    ],
    answer: 0,
    reference: "Revelation 21–22; Genesis 1–3",
    verseText: "The end restores and surpasses the beginning."
  },

  {
    id: 15100,
    game: "Bible Timeline",
    testament: "Both",
    difficulty: "Advanced",
    question: "What final reality does the Bible's timeline ultimately move toward?",
    choices: [
      "God dwelling with His people in renewed creation",
      "An endless cycle of exile",
      "A return to Babel's confusion",
      "A merely political kingdom"
    ],
    answer: 0,
    reference: "Revelation 21:1-5; Revelation 22:1-5",
    verseText: "The story ends with perfected communion and restoration."
  }

];

if (typeof window !== "undefined") {
  window.timelineQuestions = timelineQuestions;
}