const typologyQuestions = [
  {
    id: 17001,
    game: "Typology",
    testament: "Both",
    category: "Adam and Christ",
    difficulty: "Advanced",
    question: "Why is Adam called 'the figure of him that was to come' in Romans 5?",
    choices: [
      "Because Adam and Christ were both merely symbolic",
      "Because Adam functioned as a representative head whose act affected many, anticipating Christ's representative obedience",
      "Because Adam never sinned intentionally",
      "Because Christ repeated Adam's failure in a better way"
    ],
    answer: 1,
    reference: "Romans 5:12-19; 1 Corinthians 15:21-22, 45-49",
    verseText: "Adam... is the figure of him that was to come."
  },
  {
    id: 17002,
    game: "Typology",
    testament: "Both",
    category: "Adam and Christ",
    difficulty: "Advanced",
    question: "What is the key contrast between the first Adam and the last Adam?",
    choices: [
      "The first Adam was spiritual and the last Adam earthly",
      "The first Adam brought sin and death, while the last Adam brings righteousness and life",
      "The first Adam ruled Israel, while the last Adam ruled Judah",
      "The first Adam offered sacrifice, while the last Adam did not"
    ],
    answer: 1,
    reference: "Romans 5:17-19; 1 Corinthians 15:45-49",
    verseText: "The first man Adam was made a living soul; the last Adam was made a quickening spirit."
  },
  {
    id: 17003,
    game: "Typology",
    testament: "Both",
    category: "Adam and Christ",
    difficulty: "Advanced",
    question: "How does Christ reverse the pattern established in Adam?",
    choices: [
      "By replacing creation with law only",
      "By undoing condemnation through obedient righteousness and resurrection life",
      "By returning humanity to Eden without a cross",
      "By removing the need for representation"
    ],
    answer: 1,
    reference: "Romans 5:18-19; 1 Corinthians 15:22",
    verseText: "As in Adam all die, even so in Christ shall all be made alive."
  },
  {
    id: 17004,
    game: "Typology",
    testament: "Both",
    category: "Abel",
    difficulty: "Advanced",
    question: "Why is Abel often seen as a type pointing beyond himself?",
    choices: [
      "Because he founded temple worship",
      "Because his righteous blood cried from the ground, anticipating the theme of innocent blood later fulfilled more fully in Christ",
      "Because he ruled over Cain",
      "Because he escaped death through faith"
    ],
    answer: 1,
    reference: "Genesis 4:8-10; Hebrews 11:4; Hebrews 12:24",
    verseText: "The voice of thy brother's blood crieth unto me from the ground."
  },
  {
    id: 17005,
    game: "Typology",
    testament: "Both",
    category: "Noah",
    difficulty: "Advanced",
    question: "In typological reading, Noah's ark most clearly signifies what?",
    choices: [
      "Human engineering brilliance",
      "God's appointed means of salvation through judgment",
      "The superiority of animal sacrifice to faith",
      "A kingdom of political refuge"
    ],
    answer: 1,
    reference: "Genesis 6:13-18; 1 Peter 3:20-21",
    verseText: "The like figure whereunto even baptism doth also now save us."
  },
  {
    id: 17006,
    game: "Typology",
    testament: "Both",
    category: "Melchizedek",
    difficulty: "Advanced",
    question: "Why is Melchizedek a crucial type of Christ in Hebrews?",
    choices: [
      "Because he replaced Abraham permanently",
      "Because he appears as priest-king in a way that anticipates Christ's superior priesthood",
      "Because he built the tabernacle",
      "Because he came from the tribe of Levi"
    ],
    answer: 1,
    reference: "Genesis 14:18-20; Psalm 110:4; Hebrews 7:1-17",
    verseText: "Thou art a priest for ever after the order of Melchizedek."
  },
  {
    id: 17007,
    game: "Typology",
    testament: "Both",
    category: "Isaac",
    difficulty: "Advanced",
    question: "What makes Isaac a significant type in Genesis 22?",
    choices: [
      "He was a priest offering Abraham",
      "He is the beloved promised son laid on the altar, with substitution provided by God",
      "He died and rose physically in the narrative",
      "He destroyed the serpent directly"
    ],
    answer: 1,
    reference: "Genesis 22:2, 6-14; Hebrews 11:17-19",
    verseText: "Take now thy son, thine only son Isaac, whom thou lovest."
  },
  {
    id: 17008,
    game: "Typology",
    testament: "Both",
    category: "Joseph",
    difficulty: "Advanced",
    question: "Which pattern in Joseph's story most strongly supports typological comparison with Christ?",
    choices: [
      "He was flawless in every recorded act",
      "He was rejected by his own, descended into suffering, and later exalted to save many",
      "He served as high priest in Jerusalem",
      "He was born in Bethlehem and raised in Nazareth"
    ],
    answer: 1,
    reference: "Genesis 37:26-28; Genesis 41:39-45; Genesis 45:4-8; Genesis 50:20",
    verseText: "God did send me before you to preserve life."
  },
  {
    id: 17009,
    game: "Typology",
    testament: "Both",
    category: "Passover",
    difficulty: "Advanced",
    question: "Why is the Passover lamb foundational to biblical typology?",
    choices: [
      "Because Israel worshiped lambs in Egypt",
      "Because deliverance from judgment came through sacrificial blood, prefiguring Christ's redemptive death",
      "Because it ended all sacrifices in Exodus",
      "Because it symbolized political independence only"
    ],
    answer: 1,
    reference: "Exodus 12:3-13; John 1:29; 1 Corinthians 5:7",
    verseText: "Christ our passover is sacrificed for us."
  },
  {
    id: 17010,
    game: "Typology",
    testament: "Both",
    category: "Exodus",
    difficulty: "Advanced",
    question: "The crossing of the Red Sea primarily functions typologically as what?",
    choices: [
      "A random military escape",
      "A salvation-through-judgment event later echoed in baptismal imagery",
      "A symbol of Israel's final perfection",
      "A denial of wilderness testing"
    ],
    answer: 1,
    reference: "Exodus 14:21-31; 1 Corinthians 10:1-2",
    verseText: "All our fathers were under the cloud, and all passed through the sea."
  },
  {
    id: 17011,
    game: "Typology",
    testament: "Both",
    category: "Manna",
    difficulty: "Advanced",
    question: "Why does the manna in the wilderness serve as a type of Christ?",
    choices: [
      "It ended Israel's need for all food",
      "It was bread from heaven pointing beyond itself to the true bread of life",
      "It symbolized temple incense",
      "It represented angel worship"
    ],
    answer: 1,
    reference: "Exodus 16:4, 14-15; John 6:31-35, 48-51",
    verseText: "My Father giveth you the true bread from heaven."
  },
  {
    id: 17012,
    game: "Typology",
    testament: "Both",
    category: "Rock",
    difficulty: "Advanced",
    question: "How does the smitten rock become typologically significant in the New Testament?",
    choices: [
      "It becomes a symbol of Moses' failure only",
      "It points to Christ as the divinely provided source of life for His people",
      "It predicts the rebuilding of the temple",
      "It abolishes the need for water miracles"
    ],
    answer: 1,
    reference: "Exodus 17:5-6; Numbers 20:8-11; 1 Corinthians 10:4",
    verseText: "That Rock was Christ."
  },
  {
    id: 17013,
    game: "Typology",
    testament: "Both",
    category: "Bronze Serpent",
    difficulty: "Advanced",
    question: "Why does Jesus apply the bronze serpent to Himself in John 3?",
    choices: [
      "To endorse image worship",
      "To show that life comes through looking in faith to the divinely lifted means of deliverance",
      "To identify Himself as sinful",
      "To deny the wilderness generation's unbelief"
    ],
    answer: 1,
    reference: "Numbers 21:8-9; John 3:14-15",
    verseText: "As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up."
  },
  {
    id: 17014,
    game: "Typology",
    testament: "Both",
    category: "Tabernacle",
    difficulty: "Advanced",
    question: "The tabernacle chiefly prefigures what greater reality?",
    choices: [
      "Israel's military structure",
      "God dwelling among His people in a mediated way ultimately fulfilled in Christ",
      "The permanence of animal sacrifices",
      "The irrelevance of holiness"
    ],
    answer: 1,
    reference: "Exodus 25:8-9; John 1:14; Hebrews 8:1-5",
    verseText: "Let them make me a sanctuary; that I may dwell among them."
  },
  {
    id: 17015,
    game: "Typology",
    testament: "Both",
    category: "Priesthood",
    difficulty: "Advanced",
    question: "How does the Aaronic priesthood function typologically?",
    choices: [
      "It permanently completes atonement in itself",
      "It anticipates a greater priestly mediation fulfilled perfectly in Christ",
      "It proves tribe is irrelevant to worship",
      "It replaces covenant promises to Abraham"
    ],
    answer: 1,
    reference: "Exodus 28:1; Hebrews 4:14-16; Hebrews 7:23-28",
    verseText: "We have a great high priest, that is passed into the heavens, Jesus the Son of God."
  },
  {
    id: 17016,
    game: "Typology",
    testament: "Both",
    category: "Sacrifice",
    difficulty: "Advanced",
    question: "What is the central typological function of Old Testament sacrifices?",
    choices: [
      "To provide permanent cleansing by repeated offerings",
      "To foreshadow the once-for-all atoning work of Christ",
      "To teach that blood itself has automatic power",
      "To replace repentance with ritual"
    ],
    answer: 1,
    reference: "Leviticus 17:11; Hebrews 9:11-14; Hebrews 10:1-14",
    verseText: "The law having a shadow of good things to come."
  },
  {
    id: 17017,
    game: "Typology",
    testament: "Both",
    category: "Day of Atonement",
    difficulty: "Advanced",
    question: "Why is the Day of Atonement especially important typologically?",
    choices: [
      "It abolished daily sacrifices immediately",
      "It prefigured Christ's priestly entrance with blood to secure true cleansing",
      "It symbolized harvest prosperity",
      "It was primarily a political festival"
    ],
    answer: 1,
    reference: "Leviticus 16:15-22, 30; Hebrews 9:7-12",
    verseText: "By his own blood he entered in once into the holy place."
  },
  {
    id: 17018,
    game: "Typology",
    testament: "Both",
    category: "Scapegoat",
    difficulty: "Advanced",
    question: "The scapegoat most clearly points to which aspect of Christ's work?",
    choices: [
      "His earthly kingship only",
      "The bearing away of sin from the covenant people",
      "His teaching ministry",
      "His role as creator"
    ],
    answer: 1,
    reference: "Leviticus 16:21-22; Isaiah 53:6; John 1:29",
    verseText: "The goat shall bear upon him all their iniquities."
  },
  {
    id: 17019,
    game: "Typology",
    testament: "Both",
    category: "Veil",
    difficulty: "Advanced",
    question: "What does the temple veil most strongly symbolize in typological fulfillment?",
    choices: [
      "The final closure of access to God",
      "Restricted access to God's presence later opened through Christ's flesh and sacrifice",
      "The superiority of Herod's architecture",
      "The replacement of prayer by ritual"
    ],
    answer: 1,
    reference: "Exodus 26:31-33; Matthew 27:51; Hebrews 10:19-20",
    verseText: "The veil of the temple was rent in twain."
  },
  {
    id: 17020,
    game: "Typology",
    testament: "Both",
    category: "Sabbath",
    difficulty: "Advanced",
    question: "How does the Sabbath develop typologically in the New Testament?",
    choices: [
      "It disappears without fulfillment",
      "It points toward God's rest ultimately fulfilled in Christ and consummated in final rest",
      "It becomes merely agricultural",
      "It refers only to national Israel's calendar"
    ],
    answer: 1,
    reference: "Exodus 20:8-11; Matthew 11:28; Hebrews 4:3-11",
    verseText: "There remaineth therefore a rest to the people of God."
  },
  {
    id: 17021,
    game: "Typology",
    testament: "Both",
    category: "Joshua",
    difficulty: "Advanced",
    question: "Why is Joshua often understood typologically alongside Jesus?",
    choices: [
      "Because both were from Nazareth",
      "Because Joshua's name and role in bringing God's people into inheritance foreshadow a greater salvation",
      "Because Joshua offered final atonement",
      "Because Joshua was sinless"
    ],
    answer: 1,
    reference: "Joshua 1:1-9; Matthew 1:21; Hebrews 4:8-9",
    verseText: "If Jesus had given them rest, then would he not afterward have spoken of another day."
  },
  {
    id: 17022,
    game: "Typology",
    testament: "Both",
    category: "Judges",
    difficulty: "Advanced",
    question: "How do the judges function typologically at a broad level?",
    choices: [
      "They eliminate the need for a king",
      "They are partial deliverers whose repeated insufficiency points beyond themselves to a final deliverer",
      "They perfectly establish righteousness",
      "They replace the covenant with charisma"
    ],
    answer: 1,
    reference: "Judges 2:16-19; Acts 13:20-23",
    verseText: "The LORD raised up judges, which delivered them."
  },
  {
    id: 17023,
    game: "Typology",
    testament: "Both",
    category: "Boaz",
    difficulty: "Advanced",
    question: "Why is Boaz often read typologically?",
    choices: [
      "Because he served as high priest at the altar",
      "Because as kinsman-redeemer he anticipates the redemptive pattern of rescue, inheritance, and covenant kindness",
      "Because he conquered Jericho",
      "Because he was a prophet to the nations"
    ],
    answer: 1,
    reference: "Ruth 2:20; Ruth 3:9-13; Ruth 4:9-10",
    verseText: "Thou art a near kinsman."
  },
  {
    id: 17024,
    game: "Typology",
    testament: "Both",
    category: "David",
    difficulty: "Advanced",
    question: "What makes David especially important typologically?",
    choices: [
      "He ended the need for future kings",
      "He embodies the pattern of the chosen shepherd-king fulfilled ultimately in Christ",
      "He was priest, prophet, and sacrifice all in one permanently",
      "He never sinned and therefore completed redemption"
    ],
    answer: 1,
    reference: "1 Samuel 16:11-13; 2 Samuel 7:12-16; Ezekiel 34:23-24; Luke 1:32-33",
    verseText: "I have found David... a man after mine own heart."
  },
  {
    id: 17025,
    game: "Typology",
    testament: "Both",
    category: "David and Goliath",
    difficulty: "Advanced",
    question: "In typological preaching, David's defeat of Goliath is best handled how?",
    choices: [
      "As only a lesson about self-confidence",
      "As a historical victory that can also reflect the pattern of God's anointed champion conquering the enemy on behalf of the people",
      "As proof believers should reject armor",
      "As a denial of covenant warfare"
    ],
    answer: 1,
    reference: "1 Samuel 17:45-50; Colossians 2:15",
    verseText: "The battle is the LORD's."
  },
  {
    id: 17026,
    game: "Typology",
    testament: "Both",
    category: "Solomon",
    difficulty: "Advanced",
    question: "How does Solomon function typologically despite his failures?",
    choices: [
      "He perfectly fulfills all messianic expectation",
      "He presents a shadow of royal wisdom, peace, and temple-building later surpassed in Christ",
      "He removes the need for Davidic hope",
      "He reveals that kingdom glory is always idolatrous"
    ],
    answer: 1,
    reference: "1 Kings 4:29-34; 1 Kings 8:20-21; Matthew 12:42",
    verseText: "A greater than Solomon is here."
  },
  {
    id: 17027,
    game: "Typology",
    testament: "Both",
    category: "Temple",
    difficulty: "Advanced",
    question: "How is the temple fulfilled typologically in the New Testament?",
    choices: [
      "It becomes irrelevant to God's presence",
      "Its themes of divine dwelling are taken up in Christ and then in His people united to Him",
      "It is simply replaced by philosophy",
      "It proves sacred space has no biblical value"
    ],
    answer: 1,
    reference: "1 Kings 8:27; John 2:19-21; Ephesians 2:19-22; 1 Peter 2:5",
    verseText: "He spake of the temple of his body."
  },
  {
    id: 17028,
    game: "Typology",
    testament: "Both",
    category: "Elijah",
    difficulty: "Advanced",
    question: "Elijah's ministry is most strongly echoed typologically in whom?",
    choices: [
      "Judas Iscariot",
      "John the Baptist as the forerunner in Elijah-like power",
      "Pontius Pilate",
      "Nicodemus"
    ],
    answer: 1,
    reference: "Malachi 4:5-6; Luke 1:17; Matthew 11:13-14",
    verseText: "He shall go before him in the spirit and power of Elias."
  },
  {
    id: 17029,
    game: "Typology",
    testament: "Both",
    category: "Elisha",
    difficulty: "Advanced",
    question: "The miracles of Elisha most often prefigure what broad gospel pattern?",
    choices: [
      "Political reform through force",
      "Overflowing provision, cleansing, restoration, and life-giving power later seen in fullness in Christ",
      "The end of prophetic ministry",
      "Judgment without mercy"
    ],
    answer: 1,
    reference: "2 Kings 4-5; Luke 4:27; John 6:1-14",
    verseText: "There were many lepers in Israel... and none of them was cleansed, saving Naaman the Syrian."
  },
  {
    id: 17030,
    game: "Typology",
    testament: "Both",
    category: "Jonah",
    difficulty: "Advanced",
    question: "According to Jesus, Jonah functions typologically in relation to what?",
    choices: [
      "Temple worship only",
      "The death, burial, and vindication pattern of the Son of man",
      "The conquest of Canaan",
      "The giving of the law"
    ],
    answer: 1,
    reference: "Jonah 1:17; Matthew 12:39-41",
    verseText: "As Jonas was three days and three nights in the whale's belly."
  },
  {
    id: 17031,
    game: "Typology",
    testament: "Both",
    category: "Exile and Return",
    difficulty: "Advanced",
    question: "The exile-return pattern ultimately points toward what larger redemptive reality?",
    choices: [
      "Only national relocation",
      "A deeper deliverance from sin, alienation, and judgment into restored covenant life",
      "Agricultural policy reform",
      "The end of the nations"
    ],
    answer: 1,
    reference: "Jeremiah 31:31-34; Ezekiel 36:24-28; Luke 9:31",
    verseText: "Which should accomplish at Jerusalem."
  },
  {
    id: 17032,
    game: "Typology",
    testament: "Both",
    category: "Branch",
    difficulty: "Advanced",
    question: "What does the prophetic 'Branch' motif typologically anticipate?",
    choices: [
      "The extinction of David's line",
      "A future Davidic ruler arising after judgment and apparent ruin",
      "A restored Levitical monopoly",
      "A merely agricultural blessing"
    ],
    answer: 1,
    reference: "Isaiah 11:1; Jeremiah 23:5; Zechariah 3:8; Zechariah 6:12",
    verseText: "Behold the man whose name is The BRANCH."
  },
  {
    id: 17033,
    game: "Typology",
    testament: "Both",
    category: "Servant",
    difficulty: "Advanced",
    question: "The suffering servant in Isaiah most clearly functions typologically in relation to what work of Christ?",
    choices: [
      "His childhood only",
      "His vicarious suffering, sin-bearing, and vindication",
      "His role as political revolutionary",
      "His silence as merely passive resignation"
    ],
    answer: 1,
    reference: "Isaiah 52:13-53:12; Acts 8:32-35; 1 Peter 2:21-25",
    verseText: "He was wounded for our transgressions."
  },
  {
    id: 17034,
    game: "Typology",
    testament: "Both",
    category: "Jeremiah",
    difficulty: "Advanced",
    question: "How does the new covenant function typologically relative to the old?",
    choices: [
      "As a complete rejection of God's prior revelation",
      "As the promised inward and climactic fulfillment toward which the earlier covenantal administration pointed",
      "As a merely Gentile arrangement",
      "As a return to Sinai without change"
    ],
    answer: 1,
    reference: "Jeremiah 31:31-34; Luke 22:20; Hebrews 8:6-13",
    verseText: "This cup is the new testament in my blood."
  },
  {
    id: 17035,
    game: "Typology",
    testament: "Both",
    category: "Ezekiel",
    difficulty: "Advanced",
    question: "Ezekiel's promise of a new heart and spirit typologically anticipates what?",
    choices: [
      "Only national military success",
      "The regenerating, covenant-renewing work of God by the Spirit",
      "The rebuilding of Solomon's palace",
      "The abolition of holiness"
    ],
    answer: 1,
    reference: "Ezekiel 36:25-27; John 3:5-8; Titus 3:5",
    verseText: "A new heart also will I give you, and a new spirit will I put within you."
  },
  {
    id: 17036,
    game: "Typology",
    testament: "Both",
    category: "Daniel",
    difficulty: "Advanced",
    question: "The 'Son of man' in Daniel 7 contributes typologically to New Testament Christology in what way?",
    choices: [
      "It limits messianic hope to priesthood only",
      "It provides the pattern of vindicated human-like rule receiving everlasting dominion from God",
      "It denies suffering in messianic expectation",
      "It rejects resurrection hope"
    ],
    answer: 1,
    reference: "Daniel 7:13-14; Matthew 26:64; Revelation 1:13",
    verseText: "There was given him dominion, and glory, and a kingdom."
  },
  {
    id: 17037,
    game: "Typology",
    testament: "Both",
    category: "Zion",
    difficulty: "Advanced",
    question: "How does earthly Zion function typologically in the broader canon?",
    choices: [
      "As a merely political capital",
      "As the earthly shadow of God's dwelling reign later expanded in heavenly and eschatological fulfillment",
      "As proof that geography saves",
      "As a replacement for covenant"
    ],
    answer: 1,
    reference: "Psalm 2:6; Isaiah 2:2-3; Hebrews 12:22; Revelation 21:2",
    verseText: "Ye are come unto mount Sion, and unto the city of the living God."
  },
  {
    id: 17038,
    game: "Typology",
    testament: "Both",
    category: "Jerusalem",
    difficulty: "Advanced",
    question: "The holy city motif culminates typologically in what New Testament vision?",
    choices: [
      "The rebuilding of Herod's temple",
      "The new Jerusalem as consummated dwelling of God with His people",
      "A permanent earthly monarchy only",
      "The restoration of Babylon"
    ],
    answer: 1,
    reference: "Isaiah 65:17-19; Galatians 4:26; Hebrews 12:22; Revelation 21:2-3",
    verseText: "I John saw the holy city, new Jerusalem."
  },
  {
    id: 17039,
    game: "Typology",
    testament: "Both",
    category: "Marriage",
    difficulty: "Advanced",
    question: "How does marriage function typologically according to Ephesians 5?",
    choices: [
      "As merely a social contract",
      "As a mystery that ultimately speaks of Christ and the church",
      "As a temporary arrangement without covenant meaning",
      "As a direct substitute for salvation"
    ],
    answer: 1,
    reference: "Genesis 2:24; Ephesians 5:31-32",
    verseText: "I speak concerning Christ and the church."
  },
  {
    id: 17040,
    game: "Typology",
    testament: "Both",
    category: "Bride",
    difficulty: "Advanced",
    question: "The bride imagery running from the Old Testament into the New is fulfilled most fully in what?",
    choices: [
      "National prosperity alone",
      "The covenant union of Christ and His redeemed people",
      "Only the rebuilding of Jerusalem walls",
      "The wisdom of Solomon"
    ],
    answer: 1,
    reference: "Hosea 2:19-20; John 3:29; Ephesians 5:25-27; Revelation 19:7-9",
    verseText: "The marriage of the Lamb is come."
  },
  {
    id: 17041,
    game: "Typology",
    testament: "Both",
    category: "Feasts",
    difficulty: "Advanced",
    question: "At a broad level, Israel's feasts function typologically as what?",
    choices: [
      "Agricultural customs only",
      "Recurring covenant signs that anticipate larger redemptive fulfillment in Christ",
      "A replacement for moral obedience",
      "Independent paths to salvation"
    ],
    answer: 1,
    reference: "Leviticus 23; Luke 22:15-20; 1 Corinthians 5:7-8; Colossians 2:16-17",
    verseText: "Which are a shadow of things to come; but the body is of Christ."
  },
  {
    id: 17042,
    game: "Typology",
    testament: "Both",
    category: "Firstfruits",
    difficulty: "Advanced",
    question: "Why is the resurrection of Christ called 'the firstfruits'?",
    choices: [
      "Because He was the first human ever raised",
      "Because His resurrection is the representative beginning and guarantee of the harvest to follow",
      "Because He rose during harvest season only",
      "Because it refers only to Israel's land promises"
    ],
    answer: 1,
    reference: "Leviticus 23:10-11; 1 Corinthians 15:20-23",
    verseText: "Now is Christ risen from the dead, and become the firstfruits of them that slept."
  },
  {
    id: 17043,
    game: "Typology",
    testament: "Both",
    category: "Davidic Covenant",
    difficulty: "Advanced",
    question: "The promise to David in 2 Samuel 7 becomes typologically significant because it points toward what?",
    choices: [
      "The end of all kingship",
      "A greater son whose kingdom and throne endure forever",
      "Only Solomon's immediate reign",
      "The priesthood of Aaron"
    ],
    answer: 1,
    reference: "2 Samuel 7:12-16; Luke 1:32-33; Acts 13:22-23",
    verseText: "Thine house and thy kingdom shall be established for ever."
  },
  {
    id: 17044,
    game: "Typology",
    testament: "Both",
    category: "Temple Building",
    difficulty: "Advanced",
    question: "How does Solomon's temple-building role point beyond itself?",
    choices: [
      "It proves stone structures are final fulfillment",
      "It anticipates the greater son who builds the ultimate dwelling of God",
      "It cancels Davidic hope",
      "It denies God's transcendence"
    ],
    answer: 1,
    reference: "2 Samuel 7:12-13; Zechariah 6:12-13; John 2:19-21",
    verseText: "He shall build an house for my name."
  },
  {
    id: 17045,
    game: "Typology",
    testament: "Both",
    category: "Shepherd",
    difficulty: "Advanced",
    question: "The shepherd motif culminates typologically in whom?",
    choices: [
      "Moses as lawgiver alone",
      "Christ as the true and good shepherd of God's flock",
      "Saul as national unifier",
      "Aaron as liturgical leader"
    ],
    answer: 1,
    reference: "Psalm 23:1; Ezekiel 34:23; John 10:11; 1 Peter 5:4",
    verseText: "I am the good shepherd."
  },
  {
    id: 17046,
    game: "Typology",
    testament: "Both",
    category: "Bridegroom",
    difficulty: "Advanced",
    question: "Why is the bridegroom image typologically important in the Gospels?",
    choices: [
      "It downplays covenant theology",
      "It identifies Jesus with the divine husband/bridegroom themes of Old Testament covenant love",
      "It concerns weddings only",
      "It applies only to John the Baptist"
    ],
    answer: 1,
    reference: "Isaiah 62:5; Hosea 2:19-20; Matthew 9:15; John 3:29",
    verseText: "Can the children of the bridechamber mourn, as long as the bridegroom is with them?"
  },
  {
    id: 17047,
    game: "Typology",
    testament: "Both",
    category: "Light",
    difficulty: "Advanced",
    question: "The Old Testament light motif is fulfilled in Christ chiefly how?",
    choices: [
      "As an angelic symbol only",
      "As the true light who reveals God and overcomes darkness",
      "As a replacement for the sun only",
      "As a metaphor for earthly power"
    ],
    answer: 1,
    reference: "Isaiah 9:2; Isaiah 49:6; John 1:4-9; John 8:12",
    verseText: "I am the light of the world."
  },
  {
    id: 17048,
    game: "Typology",
    testament: "Both",
    category: "Vine",
    difficulty: "Advanced",
    question: "How does Jesus' 'true vine' statement function typologically?",
    choices: [
      "It rejects Israel's Scriptures",
      "It presents Jesus as the faithful embodiment and fulfillment of what Israel failed to be",
      "It denies fruitfulness matters",
      "It replaces discipleship with mysticism"
    ],
    answer: 1,
    reference: "Psalm 80:8-16; Isaiah 5:1-7; John 15:1-5",
    verseText: "I am the true vine."
  },
  {
    id: 17049,
    game: "Typology",
    testament: "Both",
    category: "Wisdom",
    difficulty: "Advanced",
    question: "How is the Old Testament wisdom theme taken up christologically?",
    choices: [
      "It is abandoned in the New Testament",
      "Christ is presented as the embodiment of God's wisdom",
      "It remains only a practical life guide without redemptive significance",
      "It belongs exclusively to Solomon"
    ],
    answer: 1,
    reference: "Proverbs 8:22-31; 1 Corinthians 1:24, 30; Colossians 2:3",
    verseText: "Christ the power of God, and the wisdom of God."
  },
  {
    id: 17050,
    game: "Typology",
    testament: "Both",
    category: "Exodus Pattern",
    difficulty: "Advanced",
    question: "At the broadest level, the exodus becomes a type of what greater redemption?",
    choices: [
      "Israel's military expansion",
      "Deliverance from sin, bondage, and judgment through God's saving act in Christ",
      "Temple taxation reform",
      "A return to Eden without sacrifice"
    ],
    answer: 1,
    reference: "Exodus 6:6-7; Luke 9:31; 1 Corinthians 10:1-6",
    verseText: "Who shall change our vile body... / his decease which he should accomplish at Jerusalem."
  },
  {
    id: 17051,
    game: "Typology",
    testament: "Both",
    category: "Lamb",
    difficulty: "Advanced",
    question: "The lamb motif across Scripture culminates most fully in what identification?",
    choices: [
      "Israel as a pastoral nation",
      "Christ as the Lamb of God who takes away sin and reigns through sacrifice",
      "The tribe of Judah alone",
      "Temple choirs and offerings"
    ],
    answer: 1,
    reference: "Exodus 12:5-13; Isaiah 53:7; John 1:29; Revelation 5:6-13",
    verseText: "Behold the Lamb of God."
  },
  {
    id: 17052,
    game: "Typology",
    testament: "Both",
    category: "King-Priest",
    difficulty: "Advanced",
    question: "Why is the union of kingship and priesthood typologically significant?",
    choices: [
      "Because Israel commonly joined them under Aaron",
      "Because it anticipates the unique mediatorial rule fulfilled in Christ",
      "Because it proves monarchy replaces sacrifice",
      "Because it belongs only to pagan religion"
    ],
    answer: 1,
    reference: "Psalm 110:1-4; Zechariah 6:12-13; Hebrews 7:1-3",
    verseText: "He shall be a priest upon his throne."
  },
  {
    id: 17053,
    game: "Typology",
    testament: "Both",
    category: "Stone",
    difficulty: "Advanced",
    question: "How does the rejected stone motif function typologically?",
    choices: [
      "It predicts failed architecture",
      "It portrays the rejected one becoming foundational in God's redemptive building",
      "It proves Israel has no future",
      "It is only about temple masonry"
    ],
    answer: 1,
    reference: "Psalm 118:22; Isaiah 28:16; Matthew 21:42; 1 Peter 2:6-7",
    verseText: "The stone which the builders refused is become the head stone of the corner."
  },
  {
    id: 17054,
    game: "Typology",
    testament: "Both",
    category: "Seed",
    difficulty: "Advanced",
    question: "The promise of the seed in Genesis unfolds typologically toward what climax?",
    choices: [
      "Only agricultural blessing",
      "The coming of Christ as the decisive promised offspring through whom blessing comes",
      "The rise of monarchy only",
      "The rebuilding of Babel"
    ],
    answer: 1,
    reference: "Genesis 3:15; Genesis 12:7; Galatians 3:16",
    verseText: "He saith not, And to seeds, as of many; but as of one... which is Christ."
  },
  {
    id: 17055,
    game: "Typology",
    testament: "Both",
    category: "Second Exodus",
    difficulty: "Advanced",
    question: "Prophetic promises of a renewed exodus point typologically to what?",
    choices: [
      "A mere repeat of Sinai geography",
      "God's climactic act of redemption, forgiveness, and restoration through the Messiah",
      "Only the rebuilding of roads from Babylon",
      "The end of covenant language"
    ],
    answer: 1,
    reference: "Isaiah 40:3-5; Isaiah 43:16-21; Luke 1:68-79; Luke 9:31",
    verseText: "Behold, I will do a new thing."
  },
  {
    id: 17056,
    game: "Typology",
    testament: "Both",
    category: "Temple Furniture",
    difficulty: "Advanced",
    question: "The lampstand, bread, incense, and ark together teach what typological lesson?",
    choices: [
      "God prefers ornate ritual to obedience",
      "The sanctuary's ordered symbols anticipate fuller access, provision, mediation, and presence in Christ",
      "Only priests may know God",
      "The tabernacle is independent of redemption"
    ],
    answer: 1,
    reference: "Exodus 25-30; Hebrews 9:1-11; John 6:35; John 8:12",
    verseText: "The Holy Ghost this signifying."
  },
  {
    id: 17057,
    game: "Typology",
    testament: "Both",
    category: "Ark of Covenant",
    difficulty: "Advanced",
    question: "At the center of the ark's typological significance is what reality?",
    choices: [
      "Military invincibility in itself",
      "God's holy presence meeting His people on the basis of atonement",
      "National nostalgia only",
      "The replacement of the law"
    ],
    answer: 1,
    reference: "Exodus 25:21-22; Leviticus 16:14-15; Hebrews 9:3-5",
    verseText: "There I will meet with thee."
  },
  {
    id: 17058,
    game: "Typology",
    testament: "Both",
    category: "Mercy Seat",
    difficulty: "Advanced",
    question: "The mercy seat most directly anticipates what New Testament truth?",
    choices: [
      "That law no longer matters",
      "That atoning blood is the basis on which holy God meets sinners in mercy",
      "That angels mediate salvation",
      "That sacrifice is symbolic only"
    ],
    answer: 1,
    reference: "Exodus 25:17-22; Leviticus 16:14-15; Romans 3:25; Hebrews 9:5",
    verseText: "Whom God hath set forth to be a propitiation through faith in his blood."
  },
  {
    id: 17059,
    game: "Typology",
    testament: "Both",
    category: "Cities of Refuge",
    difficulty: "Advanced",
    question: "How do the cities of refuge function typologically?",
    choices: [
      "As a substitute for repentance",
      "As a pattern of appointed shelter from judgment under God's provision",
      "As proof that justice does not matter",
      "As an image of Israel's monarchy"
    ],
    answer: 1,
    reference: "Numbers 35:9-15; Hebrews 6:18",
    verseText: "Who have fled for refuge to lay hold upon the hope set before us."
  },
  {
    id: 17060,
    game: "Typology",
    testament: "Both",
    category: "Kingdom",
    difficulty: "Advanced",
    question: "Why is typology essential to reading kingdom themes across the canon?",
    choices: [
      "Because it lets the reader invent meanings freely",
      "Because earlier persons, offices, events, and institutions become God-given patterns fulfilled more fully in Christ's reign",
      "Because it removes historical context",
      "Because it denies literal meaning"
    ],
    answer: 1,
    reference: "2 Samuel 7:12-16; Psalm 2; Daniel 7:13-14; Luke 1:32-33",
    verseText: "He shall reign over the house of Jacob for ever."
  },
  {
    id: 17061,
    game: "Typology",
    testament: "Both",
    category: "Prophet Like Moses",
    difficulty: "Advanced",
    question: "Why is the promise of a prophet like Moses typologically significant?",
    choices: [
      "Because Moses would literally return as a new covenant priest",
      "Because it anticipates a climactic revelatory mediator fulfilled in Christ",
      "Because prophecy ends with Joshua",
      "Because it applies only to Jeremiah"
    ],
    answer: 1,
    reference: "Deuteronomy 18:15-19; Acts 3:22-23; John 6:14",
    verseText: "The LORD thy God will raise up unto thee a Prophet."
  },
  {
    id: 17062,
    game: "Typology",
    testament: "Both",
    category: "Moses",
    difficulty: "Advanced",
    question: "Moses typologically anticipates Christ especially in what role?",
    choices: [
      "Temple builder from Judah",
      "Mediator, deliverer, and law-giver who stands between God and the people",
      "Final atoning sacrifice in himself",
      "King over Jerusalem"
    ],
    answer: 1,
    reference: "Exodus 32:30-32; Deuteronomy 5:5; Hebrews 3:1-6",
    verseText: "Moses verily was faithful... but Christ as a son over his own house."
  },
  {
    id: 17063,
    game: "Typology",
    testament: "Both",
    category: "Priestly Garments",
    difficulty: "Advanced",
    question: "The high priest's garments and representative role chiefly foreshadow what?",
    choices: [
      "The importance of ancient fashion",
      "A holy representative who bears the people before God",
      "The independence of worship from sacrifice",
      "The end of mediation"
    ],
    answer: 1,
    reference: "Exodus 28:29-30; Hebrews 9:11-14",
    verseText: "Aaron shall bear the names of the children of Israel in the breastplate of judgment upon his heart."
  },
  {
    id: 17064,
    game: "Typology",
    testament: "Both",
    category: "Wilderness",
    difficulty: "Advanced",
    question: "The wilderness generation serves typologically in the New Testament as what kind of example?",
    choices: [
      "A model of mature perseverance",
      "A warning against unbelief, lust, presumption, and apostasy",
      "A rejection of Israel's place in redemption history",
      "A proof that miracles guarantee faithfulness"
    ],
    answer: 1,
    reference: "Numbers 14:22-23; 1 Corinthians 10:1-11; Hebrews 3:16-19",
    verseText: "These things were our examples."
  },
  {
    id: 17065,
    game: "Typology",
    testament: "Both",
    category: "Marriage of Adam and Eve",
    difficulty: "Advanced",
    question: "The formation of Eve from Adam and the union of the two are taken up typologically in what direction?",
    choices: [
      "Toward temple architecture",
      "Toward Christ and the church as the ultimate marriage mystery",
      "Toward Israel's monarchy only",
      "Toward Levitical inheritance"
    ],
    answer: 1,
    reference: "Genesis 2:21-24; Ephesians 5:30-32",
    verseText: "This is a great mystery: but I speak concerning Christ and the church."
  },
  {
    id: 17066,
    game: "Typology",
    testament: "Both",
    category: "Firstborn",
    difficulty: "Advanced",
    question: "The firstborn theme reaches fulfillment in Christ chiefly how?",
    choices: [
      "As mere chronology of birth order",
      "As preeminence, inheritance, and representative sonship",
      "As priesthood restricted to Levi",
      "As political seniority among tribes"
    ],
    answer: 1,
    reference: "Exodus 4:22; Psalm 89:27; Colossians 1:15, 18; Hebrews 1:6",
    verseText: "That in all things he might have the preeminence."
  },
  {
    id: 17067,
    game: "Typology",
    testament: "Both",
    category: "Israel and Christ",
    difficulty: "Advanced",
    question: "One major typological pattern in Matthew's Gospel is that Jesus does what in relation to Israel?",
    choices: [
      "Rejects Israel's Scriptures entirely",
      "Recapitulates and fulfills Israel's calling as the faithful Son",
      "Returns Israel to Egypt permanently",
      "Repeats Israel's failures without reversal"
    ],
    answer: 1,
    reference: "Exodus 4:22; Hosea 11:1; Matthew 2:15; Matthew 4:1-11",
    verseText: "Out of Egypt have I called my son."
  },
  {
    id: 17068,
    game: "Typology",
    testament: "Both",
    category: "Davidic Shepherd",
    difficulty: "Advanced",
    question: "Why is Jesus' feeding and shepherding ministry typologically rich?",
    choices: [
      "Because crowds replace covenant",
      "Because it combines exodus-bread and shepherd-king expectations in His person",
      "Because food miracles are ends in themselves",
      "Because discipleship is mainly political"
    ],
    answer: 1,
    reference: "Psalm 23; Ezekiel 34:23; Mark 6:34-44; John 6:35",
    verseText: "He was moved with compassion toward them, because they were as sheep not having a shepherd."
  },
  {
    id: 17069,
    game: "Typology",
    testament: "Both",
    category: "Blood",
    difficulty: "Advanced",
    question: "Across biblical typology, blood most centrally signifies what?",
    choices: [
      "Ritual intensity only",
      "Life given up in sacrificial atonement and covenant ratification",
      "Ethnic purity",
      "Judgment without mercy"
    ],
    answer: 1,
    reference: "Exodus 24:8; Leviticus 17:11; Matthew 26:28; Hebrews 9:18-22",
    verseText: "This is my blood of the new testament."
  },
  {
    id: 17070,
    game: "Typology",
    testament: "Both",
    category: "Canon",
    difficulty: "Advanced",
    question: "What principle best governs responsible biblical typology?",
    choices: [
      "Every similarity automatically proves a type",
      "Historical realities ordained by God can form redemptive patterns fulfilled climactically in Christ and the new covenant",
      "Typology replaces the literal sense of Scripture",
      "Only the New Testament may speak symbolically"
    ],
    answer: 1,
    reference: "Luke 24:27, 44-47; Romans 5:14; 1 Corinthians 10:6, 11; Hebrews 10:1",
    verseText: "Beginning at Moses and all the prophets, he expounded unto them... the things concerning himself."
  }
];