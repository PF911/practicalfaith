const quotesQuestions = [
  {
    "id": 14001,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Am I my brother's keeper?' in a reply that exposed both murder and hardened evasion before God?",
    "choices": [
      "Cain",
      "Lamech",
      "Esau",
      "Saul"
    ],
    "answer": 0,
    "reference": "Genesis 4:9",
    "verseText": "Am I my brother's keeper?",
    "explanation": "Genesis 4:9 records God asking Cain 'Where is Abel your brother?' and Cain's deflection: 'I do not know. Am I my brother's keeper?' The question revealed both the murder (denying knowledge of where Abel was) and the moral posture behind it: dismissal of relational accountability. The rhetorical question assumes the answer is no — and the rest of Scripture answers it yes."
  },
  {
    "id": 14002,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Shall not the Judge of all the earth do right?' while interceding over the fate of Sodom?",
    "choices": [
      "Moses",
      "Abraham",
      "Job",
      "Samuel"
    ],
    "answer": 1,
    "reference": "Genesis 18:25",
    "verseText": "Shall not the Judge of all the earth do right?",
    "explanation": "Genesis 18:25 records Abraham's intercession for Sodom: 'Far be it from You to do such a thing as this, to slay the righteous with the wicked... Shall not the Judge of all the earth do right?' The question is not defiance but covenant argument — Abraham appealed to God's own character of justice. The question became foundational for biblical theodicy: God's governance must be consistent with his moral nature."
  },
  {
    "id": 14003,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'God will provide for Himself the lamb for a burnt offering,' on the way to the mountain of sacrifice?",
    "choices": [
      "Isaac",
      "Jacob",
      "Abraham",
      "Moses"
    ],
    "answer": 2,
    "reference": "Genesis 22:8",
    "verseText": "God will provide for Himself the lamb for a burnt offering.",
    "explanation": "Genesis 22:8 records Abraham's answer to Isaac's question about the sacrifice: 'My son, God will provide for Himself the lamb for a burnt offering.' Hebrews 11:19 interprets Abraham's confidence as resurrection faith — he believed God could raise Isaac if necessary. The statement became prophetically precise: God provided the ram substituted for Isaac, anticipating the ultimate provision of the Lamb of God."
  },
  {
    "id": 14004,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'I will not let You go unless You bless me!' during an all-night struggle that ended with a new name?",
    "choices": [
      "Esau",
      "Moses",
      "Joshua",
      "Jacob"
    ],
    "answer": 3,
    "reference": "Genesis 32:26",
    "verseText": "I will not let You go unless You bless me!",
    "explanation": "Genesis 32:26 records Jacob's declaration during the all-night wrestling: 'I will not let You go unless You bless me!' The wrestling ended with Jacob's hip wrenched out of joint — he was losing physically — yet he persisted in demanding the blessing. God renamed him Israel and blessed him. The demand was not presumption but the desperate covenant-grip of a man who had learned that the divine blessing was worth everything."
  },
  {
    "id": 14005,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'You meant evil against me; but God meant it for good,' interpreting his suffering through providence?",
    "choices": [
      "Joseph",
      "Judah",
      "Benjamin",
      "Moses"
    ],
    "answer": 0,
    "reference": "Genesis 50:20",
    "verseText": "You meant evil against me; but God meant it for good.",
    "explanation": "Genesis 50:20 records Joseph's words to his brothers who feared revenge after their father's death: 'you meant evil against me; but God meant it for good, in order to bring it about as it is this day, to save many people alive.' The statement holds dual causation without collapsing either: the brothers' evil was real; God's overruling purpose was equally real. Neither cancels the other."
  },
  {
    "id": 14006,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who heard the divine declaration, 'I AM WHO I AM,' after asking God's name at the burning bush?",
    "choices": [
      "Aaron",
      "Moses",
      "Joshua",
      "Isaiah"
    ],
    "answer": 1,
    "reference": "Exodus 3:13-14",
    "verseText": "I AM WHO I AM.",
    "explanation": "Exodus 3:14 records God's self-identification: 'I AM WHO I AM.' The name revealed absolute, self-grounded existence — not conditioned on anything outside himself. Jesus' seven 'I AM' statements in John's Gospel deliberately echo this name, claiming the same absolute, self-existent identity."
  },
  {
    "id": 14007,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Whoever is on the LORD's side — come to me!' at the crisis of the golden calf?",
    "choices": [
      "Aaron",
      "Joshua",
      "Moses",
      "Phinehas"
    ],
    "answer": 2,
    "reference": "Exodus 32:26",
    "verseText": "Whoever is on the LORD's side — come to me!",
    "explanation": "Exodus 32:26 records Moses standing at the camp gate crying 'Whoever is on the LORD's side — come to me!' after descending from Sinai to find the golden calf worship. The Levites came; Moses commanded them to execute those responsible. The call demanded explicit alignment when the covenant was being violated — neutrality was itself a position."
  },
  {
    "id": 14008,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Oh, that all the LORD's people were prophets,' showing a vision larger than personal status?",
    "choices": [
      "Joshua",
      "Aaron",
      "Samuel",
      "Moses"
    ],
    "answer": 3,
    "reference": "Numbers 11:29",
    "verseText": "Oh, that all the LORD's people were prophets.",
    "explanation": "Numbers 11:29 records Moses responding to Joshua's alarm that Eldad and Medad were prophesying in the camp: 'Oh, that all the LORD's people were prophets and that the LORD would put His Spirit upon them!' The statement anticipated Joel's promise (2:28-29) of the Spirit poured on all flesh. Moses' longing exceeded his own institutional position — he wished the Spirit's reach would outstrip the appointed structure."
  },
  {
    "id": 14009,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'As for me and my house, we will serve the LORD,' at Shechem in covenant-renewal context?",
    "choices": [
      "Joshua",
      "Caleb",
      "Moses",
      "Samuel"
    ],
    "answer": 0,
    "reference": "Joshua 24:15",
    "verseText": "As for me and my house, we will serve the LORD.",
    "explanation": "Joshua 24:15 records Joshua's declaration at the covenant renewal at Shechem: 'choose for yourselves this day whom you will serve... But as for me and my house, we will serve the LORD.' The declaration was personal and familial, not merely official. Joshua's household commitment preceded and modeled what he called the community to decide."
  },
  {
    "id": 14010,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who was greeted with, 'The LORD is with you, you mighty man of valor!' while hiding from Midianite oppression?",
    "choices": [
      "Barak",
      "Gideon",
      "Jephthah",
      "Samson"
    ],
    "answer": 1,
    "reference": "Judges 6:12",
    "verseText": "The LORD is with you, you mighty man of valor!",
    "explanation": "Judges 6:12 records the angel of the LORD addressing Gideon threshing wheat in a winepress to hide it from Midian: 'The LORD is with you, you mighty man of valor!' Gideon's hiding posture was the opposite of valor. The greeting named what God was making Gideon, not what Gideon currently was — the divine address was constitutive, not merely descriptive."
  },
  {
    "id": 14011,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Wherever you go, I will go,' binding herself to Naomi, Israel, and Israel's God?",
    "choices": [
      "Orpah",
      "Naomi",
      "Ruth",
      "Hannah"
    ],
    "answer": 2,
    "reference": "Ruth 1:16",
    "verseText": "Wherever you go, I will go.",
    "explanation": "Ruth 1:16-17 records Ruth's declaration to Naomi: 'Wherever you go, I will go; and wherever you lodge, I will lodge; your people shall be my people, and your God my God.' The commitment was comprehensive — geographic, communal, theological. A Moabite woman made a covenant commitment to Israel's God and Israel's people that exceeded what was required. The declaration became the book's theological center."
  },
  {
    "id": 14012,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'There is none holy as the LORD,' in a prayer of reversal after long barrenness?",
    "choices": [
      "Deborah",
      "Ruth",
      "Abigail",
      "Hannah"
    ],
    "answer": 3,
    "reference": "1 Samuel 2:1-2",
    "verseText": "There is none holy as the LORD.",
    "explanation": "1 Samuel 2:2 records Hannah's prayer: 'There is none holy as the LORD, for there is none besides You, nor is there any rock like our God.' The prayer came after years of barrenness and Peninnah's provocation — God's unique holiness and incomparability was Hannah's foundation for presenting impossible requests and receiving impossible answers."
  },
  {
    "id": 14013,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Speak, for Your servant hears,' after repeated nighttime calls from the LORD?",
    "choices": [
      "Samuel",
      "Eli",
      "David",
      "Solomon"
    ],
    "answer": 0,
    "reference": "1 Samuel 3:10",
    "verseText": "Speak, for Your servant hears.",
    "explanation": "1 Samuel 3:9-10 records Eli instructing Samuel: 'Speak, LORD, for Your servant hears.' Samuel repeated the words when the LORD called again, and God gave him the vision of Eli's house's judgment. The posture of hearing — positioning oneself as servant rather than director — was the proper response to divine call. Samuel's receptivity contrasted sharply with Eli's sons' contempt for God's word."
  },
  {
    "id": 14014,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who declared, 'To obey is better than sacrifice,' in confrontation with a king who spared what God had condemned?",
    "choices": [
      "Nathan",
      "Samuel",
      "David",
      "Elijah"
    ],
    "answer": 1,
    "reference": "1 Samuel 15:22",
    "verseText": "To obey is better than sacrifice.",
    "explanation": "1 Samuel 15:22-23 records Samuel confronting Saul after his incomplete obedience against Amalek: 'to obey is better than sacrifice, and to heed than the fat of rams.' The statement established the priority ordering for all subsequent covenant theology: relationship and obedience precede and determine the value of religious performance. Sacrifice without obedience is unacceptable regardless of its technical correctness."
  },
  {
    "id": 14015,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The LORD looks at the heart,' when evaluating Jesse's sons and teaching how divine choice differs from human sight?",
    "choices": [
      "David",
      "Nathan",
      "Samuel",
      "Moses"
    ],
    "answer": 2,
    "reference": "1 Samuel 16:7",
    "verseText": "Man looks at the outward appearance, but the LORD looks at the heart.",
    "explanation": "1 Samuel 16:7 records God's instruction to Samuel when he viewed Eliab: 'Do not look at his appearance or at his physical stature... the LORD does not see as man sees; for man looks at the outward appearance, but the LORD looks at the heart.' The declaration governed David's selection and established the principle that divine election operates on criteria invisible to human assessment."
  },
  {
    "id": 14016,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The battle is the LORD's,' before fighting a champion whose defeat would vindicate God's name?",
    "choices": [
      "Jonathan",
      "Samuel",
      "Saul",
      "David"
    ],
    "answer": 3,
    "reference": "1 Samuel 17:47",
    "verseText": "For the battle is the LORD's.",
    "explanation": "1 Samuel 17:47 records David's declaration to Goliath before battle: 'the battle is the LORD's, and He will give you into our hands.' The theological claim preceded the sling shot. David's confidence was not in his skill but in the divine cause — Goliath had defied the armies of the living God (v.36), which transferred the contest from military to theological ground."
  },
  {
    "id": 14017,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who lamented, 'How the mighty have fallen!' in a poem over Saul and Jonathan?",
    "choices": [
      "David",
      "Abner",
      "Samuel",
      "Jonathan"
    ],
    "answer": 0,
    "reference": "2 Samuel 1:19",
    "verseText": "How the mighty have fallen!",
    "explanation": "2 Samuel 1:19-27 records David's lament over Saul and Jonathan, beginning: 'How the mighty have fallen!' The repeated refrain ('How the mighty have fallen!', vv.19, 25, 27) functions as a grief-cry that honored genuine greatness even in a fallen king. David's grief for Saul — who had tried repeatedly to kill him — demonstrated covenant loyalty that transcended personal enmity."
  },
  {
    "id": 14018,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'You are the man!' exposing royal guilt through a parable rather than direct accusation at first?",
    "choices": [
      "Gad",
      "Nathan",
      "Samuel",
      "Ahijah"
    ],
    "answer": 1,
    "reference": "2 Samuel 12:7",
    "verseText": "You are the man!",
    "explanation": "2 Samuel 12:7 records Nathan's devastating pivot after David had judged the rich man in Nathan's parable and declared he deserved death: 'You are the man!' The parable had drawn David into pronouncing his own sentence. Nathan's four words accomplished what direct accusation might not have — they arrived past David's royal defenses, confronting him with himself."
  },
  {
    "id": 14019,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who prayed, 'Give to Your servant an understanding heart,' when invited by God to ask for what he desired?",
    "choices": [
      "David",
      "Hezekiah",
      "Solomon",
      "Josiah"
    ],
    "answer": 2,
    "reference": "1 Kings 3:9",
    "verseText": "Give to Your servant an understanding heart.",
    "explanation": "1 Kings 3:9 records Solomon's request: 'Give to Your servant an understanding heart to judge Your people, that I may discern between good and evil.' God commended the request: he had not asked for personal advantage. Wisdom for governing others rather than wealth for himself revealed Solomon's orientation at the beginning of his reign — before the compromises of his later years."
  },
  {
    "id": 14020,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Heaven and the heaven of heavens cannot contain You,' during temple dedication, affirming that God exceeds sacred space?",
    "choices": [
      "David",
      "Isaiah",
      "Ezra",
      "Solomon"
    ],
    "answer": 3,
    "reference": "1 Kings 8:27",
    "verseText": "Behold, heaven and the heaven of heavens cannot contain You.",
    "explanation": "1 Kings 8:27 records Solomon's prayer at the temple dedication: 'But will God indeed dwell on the earth? Behold, heaven and the heaven of heavens cannot contain You. How much less this temple which I have built!' The statement is theologically careful: the temple was God's appointed dwelling, yet God transcends all spatial limitation. Stephen quotes Isaiah 66:1-2 to make the same point in Acts 7:48-50."
  },
  {
    "id": 14021,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'How long will you falter between two opinions?' on Mount Carmel in a showdown over covenant loyalty?",
    "choices": [
      "Elijah",
      "Elisha",
      "Micaiah",
      "Amos"
    ],
    "answer": 0,
    "reference": "1 Kings 18:21",
    "verseText": "How long will you falter between two opinions?",
    "explanation": "1 Kings 18:21 records Elijah's challenge at Carmel: 'How long will you falter between two opinions? If the LORD is God, follow Him; but if Baal, follow him.' The challenge exposed the people's attempt to maintain both loyalties — covenant membership with Israel and Baal worship. The Hebrew for 'falter between two opinions' (passah — to limp, to hop) has been interpreted as limping between two positions, unable to commit to either."
  },
  {
    "id": 14022,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'I have not troubled Israel, but you and your father's house have,' turning Ahab's accusation back upon him?",
    "choices": [
      "Micaiah",
      "Elijah",
      "Elisha",
      "Jehu"
    ],
    "answer": 1,
    "reference": "1 Kings 18:18",
    "verseText": "I have not troubled Israel, but you and your father's house have.",
    "explanation": "1 Kings 18:18 records Elijah's counter-charge when Ahab called him 'the troubler of Israel': 'I have not troubled Israel, but you and your father's house have, in that you have forsaken the commandments of the LORD.' The charge turned the accusation back on the accuser with precision: the troubler of Israel was not the prophet who spoke truth but the king who violated covenant and introduced Baal worship."
  },
  {
    "id": 14023,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who confessed, 'There is no God in all the earth, except in Israel,' after a humbling cleansing in the Jordan?",
    "choices": [
      "Rahab",
      "Nebuchadnezzar",
      "Naaman",
      "Cyrus"
    ],
    "answer": 2,
    "reference": "2 Kings 5:15",
    "verseText": "Indeed, now I know that there is no God in all the earth, except in Israel.",
    "explanation": "2 Kings 5:15 records Naaman's confession after his healing: 'Indeed, now I know that there is no God in all the earth, except in Israel.' The confession came from a Syrian general who had initially been offended by Elisha's instruction and almost refused to obey (v.11-12). His servants persuaded him to try — and the humbling act of washing in the Jordan produced both healing and theological conviction."
  },
  {
    "id": 14024,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The zeal of the LORD of hosts will perform this,' in a messianic prophecy about the coming ruler?",
    "choices": [
      "Jeremiah",
      "Ezekiel",
      "Micah",
      "Isaiah"
    ],
    "answer": 3,
    "reference": "Isaiah 9:7",
    "verseText": "The zeal of the LORD of hosts will perform this.",
    "explanation": "Isaiah 9:7 closes the messianic prophecy with: 'the zeal of the LORD of hosts will perform this.' The statement grounds the promise in divine initiative rather than human achievement — the kingdom of peace, justice, and righteousness promised through the child of vv.6-7 will be accomplished not by political process but by divine zeal pursuing his own purposes."
  },
  {
    "id": 14025,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who responded, 'Here am I! Send me,' after seeing the LORD high and lifted up and being cleansed at the altar?",
    "choices": [
      "Isaiah",
      "Jeremiah",
      "Samuel",
      "Ezekiel"
    ],
    "answer": 0,
    "reference": "Isaiah 6:8",
    "verseText": "Here am I! Send me.",
    "explanation": "Isaiah 6:8 records: 'Also I heard the voice of the Lord, saying: Whom shall I send, and who will go for Us? Then I said, Here am I! Send me.' The response followed the commission given after cleansing. Isaiah volunteered without knowing what the assignment would entail — the vision of holiness and the experience of cleansing were sufficient to produce complete availability."
  },
  {
    "id": 14026,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who conveyed the divine question, 'Can a woman forget her nursing child?' as part of a promise that Zion had not been forsaken?",
    "choices": [
      "Isaiah",
      "The LORD through Isaiah",
      "Jeremiah",
      "Hosea"
    ],
    "answer": 1,
    "reference": "Isaiah 49:15",
    "verseText": "Can a woman forget her nursing child?",
    "explanation": "Isaiah 49:15 records God's rhetorical question through Isaiah: 'Can a woman forget her nursing child, and not have compassion on the son of her womb? Surely they may forget, yet I will not forget you.' The question argues from the most powerful of human bonds to an even stronger divine bond. The nursing mother's compassion is the closest human analogy to God's covenant love — and God's love exceeds even that."
  },
  {
    "id": 14027,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Is there no balm in Gilead?' in grief over a people whose wound was deeper than political collapse?",
    "choices": [
      "Isaiah",
      "Ezekiel",
      "Jeremiah",
      "Hosea"
    ],
    "answer": 2,
    "reference": "Jeremiah 8:22",
    "verseText": "Is there no balm in Gilead?",
    "explanation": "Jeremiah 8:22 records the prophet's lament: 'Is there no balm in Gilead, is there no physician there? Why then is the health of the daughter of my people not recovered?' Gilead was known for its medicinal resin (balm) — the question was rhetorical. The healing resources existed; the wound went unhealed because of persistent spiritual refusal, not lack of remedy."
  },
  {
    "id": 14028,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The heart is deceitful above all things, and desperately wicked,' diagnosing the inner problem behind covenant failure?",
    "choices": [
      "Isaiah",
      "Ezekiel",
      "Job",
      "Jeremiah"
    ],
    "answer": 3,
    "reference": "Jeremiah 17:9",
    "verseText": "The heart is deceitful above all things, and desperately wicked.",
    "explanation": "Jeremiah 17:9 records: 'The heart is deceitful above all things, and desperately wicked; who can know it?' The Hebrew for 'desperately wicked' (anush) connotes incurable sickness. The verse grounds the new covenant's necessity — an incurably deceitful heart cannot reform itself. Only God giving a new heart (Ezekiel 36:26) can address the diagnostic Jeremiah names."
  },
  {
    "id": 14029,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Through the LORD's mercies we are not consumed,' in the middle of Jerusalem's lament?",
    "choices": [
      "Jeremiah",
      "Baruch",
      "Isaiah",
      "Ezra"
    ],
    "answer": 0,
    "reference": "Lamentations 3:22",
    "verseText": "Through the LORD's mercies we are not consumed.",
    "explanation": "Lamentations 3:22-23 records: 'Through the LORD's mercies we are not consumed, because His compassions fail not. They are new every morning; great is Your faithfulness.' The statement is remarkable in context: Lamentations is a book of grief over Jerusalem's destruction. The affirmation of God's mercies comes from the center of catastrophe, not its aftermath — the faithfulness Jeremiah affirmed was the basis for hope, not its reward."
  },
  {
    "id": 14030,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who was repeatedly addressed as 'son of man' and told, 'I have made you a watchman for the house of Israel'?",
    "choices": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Zechariah"
    ],
    "answer": 1,
    "reference": "Ezekiel 3:17",
    "verseText": "Son of man, I have made you a watchman for the house of Israel.",
    "explanation": "Ezekiel 3:17 records: 'Son of man, I have made you a watchman for the house of Israel.' The title appears twice (3:17; 33:7) and defines Ezekiel's role precisely: he must warn, regardless of response. The watchman imagery distributed responsibility: the prophet's was to speak faithfully; the hearer's was to respond. Failure to warn transferred blood-guilt to the prophet."
  },
  {
    "id": 14031,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'There is a God in heaven who reveals secrets,' before explaining the king's dream of kingdoms?",
    "choices": [
      "Joseph",
      "Ezra",
      "Daniel",
      "Mordecai"
    ],
    "answer": 2,
    "reference": "Daniel 2:28",
    "verseText": "There is a God in heaven who reveals secrets.",
    "explanation": "Daniel 2:28 records Daniel's statement to Nebuchadnezzar before interpreting the dream: 'there is a God in heaven who reveals secrets, and He has made known to King Nebuchadnezzar what will be in the latter days.' The attribution to God before any content was delivered was Daniel's theological habit — he consistently directed credit away from himself to the divine source of revelation."
  },
  {
    "id": 14032,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who boasted, 'Is not this great Babylon, that I have built,' just before divine humiliation struck him?",
    "choices": [
      "Belshazzar",
      "Darius",
      "Sennacherib",
      "Nebuchadnezzar"
    ],
    "answer": 3,
    "reference": "Daniel 4:30",
    "verseText": "Is not this great Babylon, that I have built?",
    "explanation": "Daniel 4:30 records Nebuchadnezzar's boast: 'Is not this great Babylon, that I have built for a royal dwelling by my mighty power and for the honor of my majesty?' The divine response was immediate — the judgment announced in Daniel 4:31 fell while the words were still in his mouth. The boast was both specific and comprehensive: credit, power, and honor all claimed entirely for himself."
  },
  {
    "id": 14033,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who declared, 'But let justice run down like water, and righteousness like a mighty stream,' condemning worship divorced from justice?",
    "choices": [
      "Amos",
      "Micah",
      "Hosea",
      "Isaiah"
    ],
    "answer": 0,
    "reference": "Amos 5:24",
    "verseText": "But let justice run down like water, and righteousness like a mighty stream.",
    "explanation": "Amos 5:24 records: 'let justice run down like water, and righteousness like a mighty stream.' The image is of perennial, irresistible flow — not a periodic trickle but a river in flood. This followed God's rejection of elaborate worship (vv.21-23): the religious performance Israel offered was not what God sought. Justice and righteousness were the covenant requirements beneath all the ritual."
  },
  {
    "id": 14034,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'What does the LORD require of you but to do justly, to love mercy, and to walk humbly with your God?'",
    "choices": [
      "Amos",
      "Micah",
      "Hosea",
      "Zephaniah"
    ],
    "answer": 1,
    "reference": "Micah 6:8",
    "verseText": "What does the LORD require of you?",
    "explanation": "Micah 6:8 records: 'He has shown you, O man, what is good; and what does the LORD require of you but to do justly, to love mercy, and to walk humbly with your God?' The statement answered the imaginary worshipper's escalating question (thousands of rams? rivers of oil? my firstborn?) by pointing to what God had already declared — covenant requirements that were clear, moral, and relational rather than elaborate and ritual."
  },
  {
    "id": 14035,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The just shall live by his faith,' in a book that wrestles with divine justice and delayed judgment?",
    "choices": [
      "Isaiah",
      "Jeremiah",
      "Habakkuk",
      "Daniel"
    ],
    "answer": 2,
    "reference": "Habakkuk 2:4",
    "verseText": "The just shall live by his faith.",
    "explanation": "Habakkuk 2:4 records: 'the just shall live by his faith.' Paul quotes this in Romans 1:17, Galatians 3:11, and Hebrews 10:38 echoes it — making it the most cited OT verse in NT theological argument. In Habakkuk's context it answered the prophet's complaint about divine injustice: the righteous person endures apparent injustice by trusting in God's ultimate justice rather than requiring visible vindication now."
  },
  {
    "id": 14036,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The LORD is in His holy temple. Let all the earth keep silence before Him,' answering human arrogance with divine sovereignty?",
    "choices": [
      "Zephaniah",
      "Isaiah",
      "David",
      "Habakkuk"
    ],
    "answer": 3,
    "reference": "Habakkuk 2:20",
    "verseText": "The LORD is in His holy temple. Let all the earth keep silence before Him.",
    "explanation": "Habakkuk 2:20 records: 'But the LORD is in His holy temple. Let all the earth keep silence before Him.' The verse follows five woes against Babylonian arrogance (2:6-19). The contrast is total: Babylon's gods are voiceless wood and stone (v.19); the LORD is in his temple and his presence requires the silence of awe rather than the noise of self-assertion."
  },
  {
    "id": 14037,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The LORD gave, and the LORD has taken away; Blessed be the name of the LORD,' before any explanation of his suffering was given?",
    "choices": [
      "Job",
      "Eliphaz",
      "David",
      "Jeremiah"
    ],
    "answer": 0,
    "reference": "Job 1:21",
    "verseText": "The LORD gave, and the LORD has taken away; Blessed be the name of the LORD.",
    "explanation": "Job 1:21 records: 'Naked I came from my mother's womb, and naked shall I return there. The LORD gave, and the LORD has taken away; blessed be the name of the LORD.' The confession came after Job heard of the loss of all his children and all his property in one day. He did not deny the loss — he set it in the frame of the LORD's sovereign ownership of all things. The narrative comment: 'In all this Job did not sin nor charge God with wrong' (v.22)."
  },
  {
    "id": 14038,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Though He slay me, yet will I trust Him,' refusing to collapse into a simplistic view of God amid suffering?",
    "choices": [
      "David",
      "Job",
      "Isaiah",
      "Habakkuk"
    ],
    "answer": 1,
    "reference": "Job 13:15",
    "verseText": "Though He slay me, yet will I trust Him.",
    "explanation": "Job 13:15 records: 'Though He slay me, yet will I trust Him.' The statement is one of Scripture's most extraordinary expressions of faith — holding trust in God precisely at the point where God himself appears to be the agent of destruction. Job refused to surrender faith to make sense of his experience; his trust was not contingent on circumstances that made trust reasonable."
  },
  {
    "id": 14039,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'I know that my Redeemer lives,' affirming hope beyond present affliction?",
    "choices": [
      "David",
      "Isaiah",
      "Job",
      "Daniel"
    ],
    "answer": 2,
    "reference": "Job 19:25",
    "verseText": "For I know that my Redeemer lives.",
    "explanation": "Job 19:25-26 records: 'I know that my Redeemer lives, and He shall stand at last on the earth; and after my skin is destroyed, this I know, that in my flesh I shall see God.' The confession of a living Redeemer came at the low point of Job's experience — his friends had become his accusers, his body was failing, and he felt abandoned. Yet he anchored hope in a personal redeemer who would eventually vindicate him."
  },
  {
    "id": 14040,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who identified himself as 'the Preacher' and said, 'Vanity of vanities; all is vanity'?",
    "choices": [
      "Job",
      "David",
      "Asaph",
      "The Preacher"
    ],
    "answer": 3,
    "reference": "Ecclesiastes 1:1-2",
    "verseText": "'Vanity of vanities,' says the Preacher; 'all is vanity.'",
    "explanation": "Ecclesiastes 1:2 records: 'Vanity of vanities, all is vanity.' The Preacher (Qohelet) identifies himself as 'the Preacher, the son of David, king in Jerusalem' — traditionally associated with Solomon. 'Vanity' (hebel — vapor, breath) captures the elusive, transient quality of everything pursued 'under the sun.' The refrain (occurring 38 times) is diagnostic, not hopeless — it frames the book's search for meaning."
  },
  {
    "id": 14041,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who urged, 'Remember your Creator in the days of your youth,' as the close of a meditation on life's vapor?",
    "choices": [
      "The Preacher",
      "David",
      "Asaph",
      "Agur"
    ],
    "answer": 0,
    "reference": "Ecclesiastes 12:1",
    "verseText": "Remember your Creator in the days of your youth.",
    "explanation": "Ecclesiastes 12:1 records: 'Remember now your Creator in the days of your youth, before the difficult days come.' The call to remember came near the book's end as the practical conclusion of all its investigation. Youth is the time of maximum possibility; memory of the Creator orients all of life's choices. The extended metaphor of aging that follows (12:2-7) showed why delay was unwise."
  },
  {
    "id": 14042,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'The LORD is my shepherd; I shall not want,' portraying covenant kingship in pastoral imagery?",
    "choices": [
      "Asaph",
      "David",
      "Solomon",
      "Moses"
    ],
    "answer": 1,
    "reference": "Psalm 23:1",
    "verseText": "The LORD is my shepherd; I shall not want.",
    "explanation": "Psalm 23:1 records: 'The LORD is my shepherd; I shall not want.' The Psalm's authorship is attributed to David — who had been a literal shepherd before becoming a king. The metaphor was not abstract for him: he knew what a shepherd did, at what cost, and with what care. Jesus claimed the same image in John 10:11: 'I am the good shepherd.'"
  },
  {
    "id": 14043,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who prayed, 'Create in me a clean heart, O God,' after prophetic confrontation over adultery and murder?",
    "choices": [
      "Solomon",
      "Hezekiah",
      "David",
      "Ezra"
    ],
    "answer": 2,
    "reference": "Psalm 51:10",
    "verseText": "Create in me a clean heart, O God.",
    "explanation": "Psalm 51:10 records: 'Create in me a clean heart, O God, and renew a steadfast spirit within me.' The Psalm's heading attributes it to David 'when Nathan the prophet came to him, after he had gone in to Bathsheba.' The verb 'create' (bara) is used only of divine action in the OT — the same word as Genesis 1:1. David recognized that the clean heart he needed was not moral improvement but divine creation."
  },
  {
    "id": 14044,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'Whom have I in heaven but You?' after entering the sanctuary and reinterpreting the prosperity of the wicked?",
    "choices": [
      "David",
      "Heman",
      "Ethan",
      "Asaph"
    ],
    "answer": 3,
    "reference": "Psalm 73:25",
    "verseText": "Whom have I in heaven but You?",
    "explanation": "Psalm 73:25 records Asaph's conclusion after resolving his envy of the wicked in the sanctuary: 'Whom have I in heaven but You? And there is none upon earth that I desire besides You.' The declaration came after Asaph's nearly-fatal envy of the wicked (v.2-3) was resolved by the sanctuary perspective (v.17). The sanctuary reframe shifted ultimate desire from visible prosperity to the invisible God himself."
  },
  {
    "id": 14045,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Deep calls unto deep,' in a psalm of thirst, exile, and remembered worship?",
    "choices": [
      "The sons of Korah",
      "David",
      "Asaph",
      "Solomon"
    ],
    "answer": 0,
    "reference": "Psalm 42:7",
    "verseText": "Deep calls unto deep.",
    "explanation": "Psalm 42:7 records: 'Deep calls unto deep at the noise of Your waterfalls; all Your waves and billows have gone over me.' The sons of Korah wrote this and several other psalms (42-49; 84-85; 87-88). The water imagery expressed overwhelming affliction while maintaining address to God — the deep of suffering called to the deep of God's inexhaustible capacity to hear."
  },
  {
    "id": 14046,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Where can I go from Your Spirit?' while reflecting on God's inescapable presence and exhaustive knowledge?",
    "choices": [
      "Asaph",
      "David",
      "Heman",
      "Moses"
    ],
    "answer": 1,
    "reference": "Psalm 139:7",
    "verseText": "Where can I go from Your Spirit?",
    "explanation": "Psalm 139:7 records: 'Where can I go from Your Spirit? Or where can I flee from Your presence?' David's meditation on divine omnipresence moved through heaven, Sheol, sea, and darkness — in every location the divine presence was already there. The psalm is not primarily about the impossibility of escape from God but about the comprehensive nature of the divine awareness of the psalmist."
  },
  {
    "id": 14047,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who prayed, 'Search me, O God, and know my heart,' ending a psalm about divine omniscience with self-surrender?",
    "choices": [
      "Solomon",
      "Asaph",
      "David",
      "Hezekiah"
    ],
    "answer": 2,
    "reference": "Psalm 139:23",
    "verseText": "Search me, O God, and know my heart.",
    "explanation": "Psalm 139:23-24 records: 'Search me, O God, and know my heart; try me, and know my anxieties; and see if there is any wicked way in me, and lead me in the way everlasting.' The invitation came at the close of a psalm celebrating divine omniscience — having declared that God knows everything about him already, David invited the full examination. The prayer was not naive but deliberate: offering consent to the scrutiny God already exercised."
  },
  {
    "id": 14048,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Trust in the LORD with all your heart,' in wisdom literature that opposes self-reliance?",
    "choices": [
      "David",
      "Agur",
      "Job",
      "Solomon"
    ],
    "answer": 3,
    "reference": "Proverbs 3:5",
    "verseText": "Trust in the LORD with all your heart.",
    "explanation": "Proverbs 3:5-6 records: 'Trust in the LORD with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.' The wisdom literature attributed to Solomon placed this early as a governing principle: the alternative to self-directed wisdom is comprehensive trust that orients every domain of life toward God's direction."
  },
  {
    "id": 14049,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'The fear of the LORD is the beginning of wisdom,' in a context where wisdom is ethical as well as intellectual?",
    "choices": [
      "Solomon",
      "David",
      "Moses",
      "Agur"
    ],
    "answer": 0,
    "reference": "Proverbs 9:10",
    "verseText": "The fear of the LORD is the beginning of wisdom.",
    "explanation": "Proverbs 9:10 records: 'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding.' Proverbs 1:7 stated the same principle as the book's opening thesis. Fear is not the whole of wisdom but its starting point — the foundational orientation without which all intelligence becomes mere cleverness rather than genuine wisdom."
  },
  {
    "id": 14050,
    "game": "Quotes",
    "testament": "Old Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'A soft answer turns away wrath,' in a book deeply concerned with speech ethics?",
    "choices": [
      "David",
      "Solomon",
      "Agur",
      "Ethan"
    ],
    "answer": 1,
    "reference": "Proverbs 15:1",
    "verseText": "A soft answer turns away wrath.",
    "explanation": "Proverbs 15:1 records: 'A soft answer turns away wrath, but a harsh word stirs up anger.' The book's extended concern with speech (chapters 12-15 especially) reflects the conviction that words have power proportional to the wisdom or foolishness behind them. The soft answer is a form of wisdom in action — controlling the escalation that harsh response would produce."
  },
  {
    "id": 14052,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who answered temptation with, 'Man shall not live by bread alone,' showing Himself to be the faithful Son where Israel failed?",
    "choices": [
      "John the Baptist",
      "Peter",
      "Jesus",
      "Paul"
    ],
    "answer": 2,
    "reference": "Matthew 4:4",
    "verseText": "Man shall not live by bread alone, but by every word that proceeds from the mouth of God.",
    "explanation": "Matthew 4:4 records Jesus responding to the devil's temptation to turn stones to bread: 'It is written, Man shall not live by bread alone, but by every word that proceeds from the mouth of God.' He quoted Deuteronomy 8:3 — a verse about Israel's manna test. Where Israel failed the wilderness test by grumbling about food, Jesus passed it by subordinating physical need to the word of God."
  },
  {
    "id": 14059,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'You are the Christ, the Son of the living God,' just before Jesus spoke of building His church?",
    "choices": [
      "John",
      "Thomas",
      "Martha",
      "Peter"
    ],
    "answer": 3,
    "reference": "Matthew 16:16",
    "verseText": "You are the Christ, the Son of the living God.",
    "explanation": "Matthew 16:16 records Peter's answer when Jesus asked 'But who do you say that I am?': 'You are the Christ, the Son of the living God.' Jesus' response was immediate: 'Blessed are you, Simon Bar-Jonah, for flesh and blood has not revealed this to you, but My Father who is in heaven.' The confession was received as divinely revealed — Peter said more than he knew, and was credited for what the Father had disclosed through him."
  },
  {
    "id": 14061,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Get behind Me, Satan!' after a disciple attempted to redirect Him away from the cross?",
    "choices": [
      "Jesus",
      "John the Baptist",
      "Paul",
      "James"
    ],
    "answer": 0,
    "reference": "Matthew 16:23",
    "verseText": "Get behind Me, Satan!",
    "explanation": "Matthew 16:23 records Jesus turning to Peter after Peter rebuked him for speaking of his coming death: 'Get behind Me, Satan! You are an offense to Me, for you are not mindful of the things of God, but the things of men.' The same Peter who had just received the keys to the kingdom and apostolic authority became, within seconds, the voice of the adversary. Peter's opposition to the cross, however loving its motive, aligned with Satan's agenda."
  },
  {
    "id": 14062,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'This is My beloved Son, in whom I am well pleased,' identifying Jesus publicly at His baptism?",
    "choices": [
      "John the Baptist",
      "The Father",
      "Gabriel",
      "Peter"
    ],
    "answer": 1,
    "reference": "Matthew 3:17",
    "verseText": "This is My beloved Son, in whom I am well pleased.",
    "explanation": "Matthew 3:17 records the voice from heaven at Jesus' baptism: 'This is My beloved Son, in whom I am well pleased.' The declaration combines Psalm 2:7 ('You are My Son') with Isaiah 42:1 ('My servant in whom My soul delights') — the royal Messiah and the suffering servant identified in one person. The voice was public, addressed to all present, not private confirmation to Jesus alone."
  },
  {
    "id": 14063,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Lord, if it is You, command me to come to You on the water,' revealing both bold faith and unstable fear?",
    "choices": [
      "John",
      "Thomas",
      "Peter",
      "Andrew"
    ],
    "answer": 2,
    "reference": "Matthew 14:28",
    "verseText": "Lord, if it is You, command me to come to You on the water.",
    "explanation": "Matthew 14:28-29 records Peter's request: 'Lord, if it is You, command me to come to You on the water.' And Jesus said 'Come.' Peter walked on water until he saw the wind and began to sink. The request demonstrated genuine faith — he stepped out on Christ's word alone. His subsequent sinking demonstrated that faith's maintenance requires sustained attention to Christ rather than to circumstances."
  },
  {
    "id": 14064,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'What then shall I do with Jesus who is called Christ?' while sitting in judgment yet failing to act justly?",
    "choices": [
      "Herod",
      "Caiaphas",
      "Festus",
      "Pilate"
    ],
    "answer": 3,
    "reference": "Matthew 27:22",
    "verseText": "What then shall I do with Jesus who is called Christ?",
    "explanation": "Matthew 27:22 records Pilate's question to the crowd: 'What then shall I do with Jesus who is called Christ?' Pilate had already declared Jesus innocent three times; the question exposed his political paralysis. Every person who hears the gospel faces a version of this question — and its urgency is that it admits no permanent deferral."
  },
  {
    "id": 14065,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who cried, 'His blood be on us and on our children,' in the crowd scene before Pilate?",
    "choices": [
      "The people before Pilate",
      "The disciples",
      "Roman soldiers",
      "The Sanhedrin alone"
    ],
    "answer": 0,
    "reference": "Matthew 27:25",
    "verseText": "His blood be on us and on our children.",
    "explanation": "Matthew 27:25 records the crowd's response to Pilate's handwashing: 'His blood be on us and on our children.' The declaration was a covenant formula for assuming responsibility for a death. Matthew recorded it without editorial comment. Jesus' prayer from the cross ('Father, forgive them') was addressed to the same crowd and suggests the declaration's consequences were not final."
  },
  {
    "id": 14066,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Truly this Man was the Son of God!' moving from execution detail to startling confession at the cross?",
    "choices": [
      "Pilate",
      "The centurion",
      "Joseph of Arimathaea",
      "Nicodemus"
    ],
    "answer": 1,
    "reference": "Mark 15:39",
    "verseText": "Truly this Man was the Son of God!",
    "explanation": "Matthew 27:54 records the centurion and those with him observing the earthquake and events at Jesus' death: 'Truly this was the Son of God!' A Roman officer at the crucifixion made the confession that the religious leaders refused — recognizing in the manner of the death, not despite it, the identity they had denied. The irony is structural to Matthew's passion narrative."
  },
  {
    "id": 14067,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who sang, 'My soul magnifies the Lord,' placing her personal calling within God's covenant mercy to Israel?",
    "choices": [
      "Elisabeth",
      "Anna",
      "Mary",
      "Martha"
    ],
    "answer": 2,
    "reference": "Luke 1:46-55",
    "verseText": "My soul magnifies the Lord.",
    "explanation": "Luke 1:46-55 records Mary's Magnificat: 'My soul magnifies the Lord, and my spirit has rejoiced in God my Savior.' The song was saturated with OT echoes — particularly Hannah's prayer (1 Samuel 2:1-10). Mary placed her personal calling within the broad sweep of God's covenant faithfulness, naming the reversal of status that characterized God's action: the humble exalted, the powerful brought down."
  },
  {
    "id": 14068,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Blessed are you among women,' recognizing the significance of Mary's child before birth narratives had fully unfolded?",
    "choices": [
      "Anna",
      "Martha",
      "Mary Magdalene",
      "Elisabeth"
    ],
    "answer": 3,
    "reference": "Luke 1:42-45",
    "verseText": "Blessed are you among women.",
    "explanation": "Luke 1:42 records Elisabeth's greeting to Mary: 'Blessed are you among women, and blessed is the fruit of your womb!' Elisabeth was six months pregnant with John the Baptist (v.36) and described as filled with the Holy Spirit (v.41). The greeting preceded Mary's explanation — Elisabeth knew by revelation, not information. The encounter was the first recognition of the incarnate Christ's significance."
  },
  {
    "id": 14069,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Lord, now You are letting Your servant depart in peace,' after seeing the infant Messiah in the temple?",
    "choices": [
      "Simeon",
      "Zacharias",
      "Joseph",
      "Nicodemus"
    ],
    "answer": 0,
    "reference": "Luke 2:29-32",
    "verseText": "Lord, now You are letting Your servant depart in peace.",
    "explanation": "Luke 2:29-32 records Simeon's prayer: 'Lord, now You are letting Your servant depart in peace, according to Your word; for my eyes have seen Your salvation.' Simeon had been told he would not die before seeing the Christ (v.26). The Nunc Dimittis is one of the NT's earliest hymns — identifying the infant Jesus as 'salvation' and 'a light to bring revelation to the Gentiles and the glory of Your people Israel.'"
  },
  {
    "id": 14070,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who proclaimed, 'Prepare the way of the LORD,' as the wilderness herald of fulfillment?",
    "choices": [
      "Jesus",
      "John the Baptist",
      "Peter",
      "Isaiah in person"
    ],
    "answer": 1,
    "reference": "Luke 3:4-6",
    "verseText": "Prepare the way of the LORD.",
    "explanation": "Matthew 3:3 quotes Isaiah 40:3 applied to John the Baptist: 'Prepare the way of the LORD; make His paths straight.' John's own words in John 1:23 echo the same text. John fulfilled the messenger role Malachi 3:1 had promised — the forerunner who prepared the way before the LORD's decisive coming. His message (repentance) and his posture (decreasing before the greater one) embodied the preparatory role."
  },
  {
    "id": 14071,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Today this Scripture is fulfilled in your hearing,' applying Isaiah's promise directly to Himself in Nazareth?",
    "choices": [
      "Peter",
      "Paul",
      "Jesus",
      "Stephen"
    ],
    "answer": 2,
    "reference": "Luke 4:18-21",
    "verseText": "Today this Scripture is fulfilled in your hearing.",
    "explanation": "Luke 4:21 records Jesus reading Isaiah 61:1-2 and then saying: 'Today this Scripture is fulfilled in your hearing.' The word 'today' (sēmeron) is Luke's characteristic word for the arrival of salvation in Jesus (see also 2:11; 19:9; 23:43). The fulfillment was not future or gradual — it was happening in the hearing, in the presence of the one reading."
  },
  {
    "id": 14072,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'I am not worthy that You should enter under my roof,' combining humility with strong faith in Jesus' authority?",
    "choices": [
      "Nicodemus",
      "Jairus",
      "Zacchaeus",
      "The centurion"
    ],
    "answer": 3,
    "reference": "Luke 7:6-9",
    "verseText": "I am not worthy that You should enter under my roof.",
    "explanation": "Matthew 8:8 records the centurion's reply when Jesus offered to come and heal his servant: 'Lord, I am not worthy that You should come under my roof. But only speak a word, and my servant will be healed.' Jesus declared: 'I have not found such great faith, not even in Israel!' The centurion's confidence in Christ's word-authority exceeded what Jesus had encountered among those with the advantage of covenant heritage."
  },
  {
    "id": 14073,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who prayed, 'God, be merciful to me a sinner!' in a parable contrasting repentance with self-righteousness?",
    "choices": [
      "The publican",
      "The rich young ruler",
      "Zacchaeus",
      "Nicodemus"
    ],
    "answer": 0,
    "reference": "Luke 18:13",
    "verseText": "God, be merciful to me a sinner!",
    "explanation": "Luke 18:13 records the publican's prayer: 'God, be merciful to me a sinner!' The Greek for 'be merciful' (hilaskomai) is the same root as propitiation (hilastērion) — the publican was asking for atoning mercy, not merely forgiveness in a general sense. Jesus declared him 'justified' (the forensic term for acquittal) rather than the Pharisee who had offered a spiritual resume."
  },
  {
    "id": 14074,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Lord, remember me when You come into Your kingdom,' showing remarkable faith from a cross beside Jesus?",
    "choices": [
      "Peter",
      "The repentant thief",
      "John",
      "Joseph of Arimathaea"
    ],
    "answer": 1,
    "reference": "Luke 23:42",
    "verseText": "Lord, remember me when You come into Your kingdom.",
    "explanation": "Luke 23:42-43 records the thief's request: 'Lord, remember me when You come into Your kingdom.' The faith expressed was remarkable: Jesus was being crucified as a criminal, visibly dying, apparently defeated — and this man recognized a kingdom. Jesus' response: 'Assuredly, I say to you, today you will be with Me in Paradise.' The promise was immediate and certain."
  },
  {
    "id": 14075,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Father, forgive them, for they do not know what they do,' praying mercy over His executioners?",
    "choices": [
      "Stephen",
      "Peter",
      "Jesus",
      "John"
    ],
    "answer": 2,
    "reference": "Luke 23:34",
    "verseText": "Father, forgive them, for they do not know what they do.",
    "explanation": "Luke 23:34 records Jesus' prayer from the cross: 'Father, forgive them, for they do not know what they do.' The prayer echoed Stephen's prayer at his martyrdom (Acts 7:60) — both deliberately mirrored Christ's own pattern of interceding for his persecutors. The prayer was not resignation but active mercy directed toward those carrying out the crucifixion."
  },
  {
    "id": 14076,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who cried, 'Behold! The Lamb of God,' interpreting Jesus with sacrificial and redemptive language?",
    "choices": [
      "Andrew",
      "Peter",
      "Philip",
      "John the Baptist"
    ],
    "answer": 3,
    "reference": "John 1:29",
    "verseText": "Behold! The Lamb of God.",
    "explanation": "John 1:29 records John the Baptist's declaration when he saw Jesus approaching: 'Behold! The Lamb of God who takes away the sin of the world!' The statement was programmatic — interpreting Jesus through the sacrificial lamb imagery at the very beginning of his public ministry. 'Takes away' (airō) means to lift up and carry away. The world-scope was also unprecedented: not Israel's sin alone but the sin of the world."
  },
  {
    "id": 14077,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Can anything good come out of Nazareth?' before becoming one of the Gospel's earliest clear confessors of Jesus?",
    "choices": [
      "Nathanael",
      "Thomas",
      "Philip",
      "Nicodemus"
    ],
    "answer": 0,
    "reference": "John 1:46-49",
    "verseText": "Can anything good come out of Nazareth?",
    "explanation": "John 1:46 records Nathanael's skeptical question: 'Can anything good come out of Nazareth?' Philip's response was not argument but invitation: 'Come and see.' Nazareth had no prophetic significance in the OT; Galilee of the Gentiles was considered peripheral. Nathanael's skepticism was historically and geographically reasonable — and entirely overturned by his subsequent confession (v.49): 'Rabbi, You are the Son of God! You are the King of Israel!'"
  },
  {
    "id": 14078,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Unless a man is born again, he cannot see the kingdom of God,' reframing entrance into God's kingdom around spiritual rebirth?",
    "choices": [
      "John the Baptist",
      "Jesus",
      "Peter",
      "Paul"
    ],
    "answer": 1,
    "reference": "John 3:3",
    "verseText": "Unless one is born again, he cannot see the kingdom of God.",
    "explanation": "John 3:3 records Jesus' statement to Nicodemus: 'Most assuredly, I say to you, unless one is born again, he cannot see the kingdom of God.' 'Born again' (or 'born from above' — the Greek anōthen carries both meanings) reframed the entire conversation. Nicodemus came at night asking about signs; Jesus redirected to the foundational question of spiritual origin. The new birth is not self-improvement but divine generation."
  },
  {
    "id": 14079,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'He must increase, but I must decrease,' articulating the humility proper to the forerunner's role?",
    "choices": [
      "Peter",
      "Paul",
      "John the Baptist",
      "Andrew"
    ],
    "answer": 2,
    "reference": "John 3:30",
    "verseText": "He must increase, but I must decrease.",
    "explanation": "John 3:30 records John the Baptist's declaration: 'He must increase, but I must decrease.' The statement defined the proper posture of the forerunner once the one he announced had arrived. John's entire ministry was oriented toward another; his self-description as 'friend of the bridegroom' (v.29) was the consummate expression of ministry without self-centering."
  },
  {
    "id": 14080,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Sir, I perceive that You are a prophet,' moving gradually toward fuller understanding at Jacob's well?",
    "choices": [
      "Martha",
      "Mary Magdalene",
      "Elisabeth",
      "The Samaritan woman"
    ],
    "answer": 3,
    "reference": "John 4:19",
    "verseText": "Sir, I perceive that You are a prophet.",
    "explanation": "John 4:19 records the Samaritan woman's comment during her conversation with Jesus: 'Sir, I perceive that You are a prophet.' Her recognition moved progressively: first 'a Jew' (v.9), then 'a prophet' (v.19), then the one who 'told me all things that I ever did' (v.29), then 'the Christ' (v.29). The gradual recognition mirrors many conversion narratives — incomplete perception moving toward fuller confession."
  },
  {
    "id": 14081,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Come, see a Man who told me all things that I ever did,' becoming an unexpected witness to her town?",
    "choices": [
      "The Samaritan woman",
      "Mary Magdalene",
      "Martha",
      "Anna"
    ],
    "answer": 0,
    "reference": "John 4:29",
    "verseText": "Come, see a Man who told me all things that I ever did.",
    "explanation": "John 4:29 records the woman's invitation to her village: 'Come, see a Man who told me all things that I ever did. Could this be the Christ?' Her testimony was personal and self-incriminating — she publicly acknowledged that this stranger knew her history. Her question ('Could this be the Christ?') was open-ended rather than declarative, inviting others to investigate rather than demanding they accept her conclusion."
  },
  {
    "id": 14083,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Lord, to whom shall we go? You have the words of eternal life,' after many disciples withdrew?",
    "choices": [
      "John",
      "Peter",
      "Thomas",
      "Andrew"
    ],
    "answer": 1,
    "reference": "John 6:68-69",
    "verseText": "Lord, to whom shall we go? You have the words of eternal life.",
    "explanation": "John 6:68-69 records Peter's response when Jesus asked if the twelve would also leave: 'Lord, to whom shall we go? You have the words of eternal life. Also we have come to believe and know that You are the Christ, the Son of the living God.' The confession followed mass departure of other disciples — the twelve's loyalty was tested and affirmed. Peter articulated not merely emotional attachment but reasoned conviction: there was nowhere else to go."
  },
  {
    "id": 14084,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Before Abraham was, I AM,' using language that provoked a charge-worthy reaction from His hearers?",
    "choices": [
      "John the Baptist",
      "Peter",
      "Jesus",
      "Paul"
    ],
    "answer": 2,
    "reference": "John 8:58-59",
    "verseText": "Before Abraham was, I AM.",
    "explanation": "John 8:58 records Jesus' declaration: 'Most assuredly, I say to you, before Abraham was, I AM.' The present tense 'I AM' (egō eimi) applied to pre-Abrahamic existence claimed divine self-existence rather than temporal precedence. The crowd's response — picking up stones to throw — demonstrated they understood this as blasphemy: claiming the divine name of Exodus 3:14."
  },
  {
    "id": 14085,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'One thing I know: that though I was blind, now I see,' testifying from experience in the face of hostile interrogation?",
    "choices": [
      "Bartimaeus",
      "Thomas",
      "Peter",
      "The man born blind"
    ],
    "answer": 3,
    "reference": "John 9:25",
    "verseText": "One thing I know: that though I was blind, now I see.",
    "explanation": "John 9:25 records the man born blind's response when the Pharisees pressed him about Jesus: 'Whether He is a sinner or not I do not know. One thing I know: that though I was blind, now I see.' The statement refused to engage their theological category dispute and rested on unassailable personal testimony. The irony of John 9 is complete: the physically blind man came to see; the spiritually sighted Pharisees were blind to what happened before them."
  },
  {
    "id": 14088,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who confessed, 'I believe that You are the Christ, the Son of God,' just before Lazarus was raised?",
    "choices": [
      "Martha",
      "Mary",
      "The Samaritan woman",
      "Joanna"
    ],
    "answer": 0,
    "reference": "John 11:27",
    "verseText": "I believe that You are the Christ, the Son of God.",
    "explanation": "John 11:27 records Martha's confession before the tomb was opened: 'Yes, Lord, I believe that You are the Christ, the Son of God, who is to come into the world.' The confession was elicited by Jesus' question 'Do you believe this?' (v.26) after his declaration that he is 'the resurrection and the life.' Martha's faith preceded the resurrection of Lazarus — she believed without yet seeing the confirming miracle."
  },
  {
    "id": 14089,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who protested, 'Lord, by this time there is a stench,' speaking from realism just before witnessing resurrection power?",
    "choices": [
      "Mary",
      "Martha",
      "Mary Magdalene",
      "Salome"
    ],
    "answer": 1,
    "reference": "John 11:39",
    "verseText": "Lord, by this time there is a stench, for he has been dead four days.",
    "explanation": "John 11:39 records Martha's practical objection when Jesus commanded the stone to be rolled away: 'Lord, by this time there is a stench, for he has been dead four days.' The detail of four days was significant — it ruled out apparent death. Martha's faith (v.27) coexisted with natural realism about physical decomposition. Jesus' response: 'Did I not say to you that if you would believe you would see the glory of God?'"
  },
  {
    "id": 14090,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Lord, not my feet only, but also my hands and my head,' misunderstanding the deeper meaning of cleansing at first?",
    "choices": [
      "John",
      "Thomas",
      "Peter",
      "Andrew"
    ],
    "answer": 2,
    "reference": "John 13:9",
    "verseText": "Lord, not my feet only, but also my hands and my head.",
    "explanation": "John 13:9 records Peter's characteristic over-reaction when Jesus explained the meaning of foot-washing: 'Lord, not my feet only, but also my hands and my head!' Peter misunderstood the sign — he thought more washing meant more cleansing. Jesus redirected: 'He who is bathed needs only to wash his feet, but is completely clean.' The complete bath (representing regeneration) was already given; the foot-washing represented ongoing cleansing in fellowship."
  },
  {
    "id": 14092,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'Woman, why are you weeping?' to Mary Magdalene before she recognized the risen Lord?",
    "choices": [
      "Jesus",
      "Peter",
      "John",
      "An angel"
    ],
    "answer": 3,
    "reference": "John 20:13",
    "verseText": "Woman, why are you weeping?",
    "explanation": "John 20:13 records the angels asking Mary Magdalene at the empty tomb: 'Woman, why are you weeping?' She answered: 'Because they have taken away my Lord, and I do not know where they have laid Him.' The question was immediately followed by the risen Jesus asking the same question (v.15) and then identifying himself by calling her name. The angels prepared but could not provide what only Christ's voice could give."
  },
  {
    "id": 14093,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Rabboni!' when grief turned to recognition at the empty tomb?",
    "choices": [
      "Mary Magdalene",
      "Martha",
      "Salome",
      "Joanna"
    ],
    "answer": 0,
    "reference": "John 20:16",
    "verseText": "Rabboni!",
    "explanation": "John 20:16 records the moment of recognition: 'Jesus said to her, Mary! She turned and said to Him, Rabboni! (which is to say, Teacher).' The recognition came through hearing her name spoken by the familiar voice. The grief that had blinded her to his presence was dissolved by a word. Augustine noted: 'He who laid down his life for the sheep calls his sheep by name' (John 10:3)."
  },
  {
    "id": 14094,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'My Lord and my God!' transforming doubt into one of the Gospel's clearest confessions?",
    "choices": [
      "Peter",
      "Thomas",
      "John",
      "Martha"
    ],
    "answer": 1,
    "reference": "John 20:28",
    "verseText": "My Lord and my God!",
    "explanation": "John 20:28 records Thomas's declaration: 'My Lord and my God!' The Greek uses kyrios (Lord) and theos (God) — the fullest divine title — directly applied to the risen Jesus. John's Gospel opened with 'the Word was God' (1:1) and closes with a human disciple making the identical identification. Thomas the doubter voiced the Gospel's central claim more explicitly than any other disciple."
  },
  {
    "id": 14095,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'Do you love Me more than these?' in a restoration conversation that recommissioned a failed disciple to shepherd?",
    "choices": [
      "Peter",
      "John",
      "Jesus",
      "The Father"
    ],
    "answer": 2,
    "reference": "John 21:15-17",
    "verseText": "Do you love Me more than these?",
    "explanation": "John 21:15-17 records Jesus asking Peter three times: 'Simon, son of Jonah, do you love Me?' Each question was followed by a shepherding commission ('Feed My lambs,' 'Tend My sheep,' 'Feed My sheep'). The three questions corresponded to Peter's three denials — each act of failure met by a specific act of restoration and recommissioning. Jesus used Peter's birth name rather than his apostolic name, signaling a personal and foundational reset."
  },
  {
    "id": 14096,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Repent, and let every one of you be baptized in the name of Jesus Christ,' answering the pierced conscience of Pentecost hearers?",
    "choices": [
      "Paul",
      "John",
      "Stephen",
      "Peter"
    ],
    "answer": 3,
    "reference": "Acts 2:37-38",
    "verseText": "Repent, and let every one of you be baptized in the name of Jesus Christ.",
    "explanation": "Acts 2:38 records Peter's answer to the Pentecost crowd's question: 'Repent, and let every one of you be baptized in the name of Jesus Christ for the remission of sins; and you shall receive the gift of the Holy Spirit.' The command sequence — repentance, baptism, forgiveness, Spirit — structured early church initiation. 'In the name of Jesus Christ' distinguished Christian baptism from John's preparatory baptism."
  },
  {
    "id": 14097,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Silver and gold I do not have,' before healing a lame man at the temple gate?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "Stephen"
    ],
    "answer": 0,
    "reference": "Acts 3:6",
    "verseText": "Silver and gold I do not have.",
    "explanation": "Acts 3:6 records Peter's declaration to the lame man: 'Silver and gold I do not have, but what I do have I give you: In the name of Jesus Christ of Nazareth, rise up and walk.' The apostolic mission began without institutional wealth — it began with the authority of the risen Christ's name applied to specific human need. The healing immediately became the occasion for proclamation and then arrest."
  },
  {
    "id": 14098,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'We ought to obey God rather than men,' in answer to authorities trying to silence apostolic witness?",
    "choices": [
      "Paul and Barnabas",
      "Peter and the apostles",
      "Stephen",
      "James and John"
    ],
    "answer": 1,
    "reference": "Acts 5:29",
    "verseText": "We ought to obey God rather than men.",
    "explanation": "Acts 5:29 records the apostles' answer to the high priest's charge: 'We ought to obey God rather than men.' Acts 4:19 records an earlier version: 'Whether it is right in the sight of God to listen to you more than to God, you judge.' The principle was not general civil disobedience but specific: when direct divine command was contradicted by human authority, the divine command prevailed."
  },
  {
    "id": 14099,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Look! I see the heavens opened and the Son of Man standing at the right hand of God!' just before martyrdom?",
    "choices": [
      "Peter",
      "Paul",
      "Stephen",
      "John"
    ],
    "answer": 2,
    "reference": "Acts 7:56",
    "verseText": "Look! I see the heavens opened and the Son of Man standing at the right hand of God!",
    "explanation": "Acts 7:56 records Stephen's declaration at his trial: 'Look! I see the heavens opened and the Son of Man standing at the right hand of God!' Daniel 7:13-14's 'one like the Son of Man' was usually seated at the right hand (Psalm 110:1). The standing position may indicate the Son of Man rising to receive Stephen — or to bear witness at his trial — as he was about to be condemned and stoned."
  },
  {
    "id": 14100,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who prayed, 'Lord, do not charge them with this sin,' echoing his Lord while dying at the hands of his enemies?",
    "choices": [
      "Paul",
      "Peter",
      "James",
      "Stephen"
    ],
    "answer": 3,
    "reference": "Acts 7:60",
    "verseText": "Lord, do not charge them with this sin.",
    "explanation": "Acts 7:60 records Stephen's final prayer: 'Lord, do not charge them with this sin.' The prayer deliberately echoed Jesus' cross prayer in Luke 23:34. Stephen's martyrdom modeled the pattern of his Lord — forgiving persecutors rather than calling down judgment. Paul was present at Stephen's stoning (Acts 7:58; 8:1) and may have remembered Stephen's prayer in his own subsequent conversion."
  },
  {
    "id": 14101,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'Lord, what do You want me to do?' after being confronted by the risen Christ on the Damascus road?",
    "choices": [
      "Saul of Tarsus",
      "Peter",
      "Cornelius",
      "Ananias"
    ],
    "answer": 0,
    "reference": "Acts 9:3-6",
    "verseText": "Lord, what do You want me to do?",
    "explanation": "Acts 9:6 records Saul's response to the risen Christ's appearance on the Damascus road: 'Lord, what do You want me to do?' The question was complete surrender — the 'Lord' acknowledged Christ's authority; the question asked only what was required of him. The persecutor of the church became, in one sentence, completely available to the one he had been fighting."
  },
  {
    "id": 14102,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Can anyone forbid water, that these should not be baptized?' when the Spirit fell on Gentiles?",
    "choices": [
      "Paul",
      "Peter",
      "Philip",
      "Barnabas"
    ],
    "answer": 1,
    "reference": "Acts 10:44-48",
    "verseText": "Can anyone forbid water, that these should not be baptized?",
    "explanation": "Acts 10:47 records Peter's rhetorical question after the Spirit fell on Cornelius's household: 'Can anyone forbid water, that these should not be baptized who have received the Holy Spirit just as we have?' The question was unanswerable — God had already given the Spirit before any human religious action. Peter's argument to the Jerusalem council (Acts 11:17) was the same: 'Who was I that I could withstand God?'"
  },
  {
    "id": 14103,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'We also are men with the same nature as you,' correcting a crowd that wanted to worship human messengers as gods?",
    "choices": [
      "Peter and John",
      "Silas and Timothy",
      "Paul and Barnabas",
      "Apollos and Aquila"
    ],
    "answer": 2,
    "reference": "Acts 14:14-15",
    "verseText": "We also are men with the same nature as you.",
    "explanation": "Acts 14:15 records Paul and Barnabas's response when the crowd at Lystra began offering sacrifices to them as Hermes and Zeus: 'Men, why are you doing these things? We also are men with the same nature as you, and preach to you that you should turn from these useless things to the living God.' The correction was urgent and theological — the crowd's enthusiasm was redirected from the messengers to the message and the God behind it."
  },
  {
    "id": 14104,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who asked, 'Sirs, what must I do to be saved?' after prison doors opened and his assumptions collapsed in one night?",
    "choices": [
      "Cornelius",
      "The Ethiopian eunuch",
      "Lydia",
      "The Philippian jailer"
    ],
    "answer": 3,
    "reference": "Acts 16:29-30",
    "verseText": "Sirs, what must I do to be saved?",
    "explanation": "Acts 16:30 records the Philippian jailer's question after the earthquake: 'Sirs, what must I do to be saved?' The question moved from panic (assuming the prisoners had escaped) to genuine spiritual inquiry under the circumstances Paul and Silas had created by staying rather than fleeing. The jailer's question is the pivotal evangelistic question of Acts."
  },
  {
    "id": 14105,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who answered, 'Believe on the Lord Jesus Christ, and you will be saved,' in reply to the Philippian jailer's question?",
    "choices": [
      "Paul and Silas",
      "Peter and John",
      "Barnabas and Mark",
      "James and Jude"
    ],
    "answer": 0,
    "reference": "Acts 16:31",
    "verseText": "Believe on the Lord Jesus Christ, and you will be saved.",
    "explanation": "Acts 16:31 records Paul and Silas's answer: 'Believe on the Lord Jesus Christ, and you will be saved, you and your household.' The answer was a person and a title — not a process, a list of requirements, or an institution, but the Lord Jesus Christ. 'Your household' acknowledged the social structure through which belief spreads — the jailer's family was baptized and rejoiced with him (v.33-34)."
  },
  {
    "id": 14106,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'In Him we live and move and have our being,' in a Mars Hill address that confronted pagan religiosity with the true God?",
    "choices": [
      "Peter",
      "Paul",
      "Luke",
      "Apollos"
    ],
    "answer": 1,
    "reference": "Acts 17:22-28",
    "verseText": "In Him we live and move and have our being.",
    "explanation": "Acts 17:28 records Paul's quotation on the Areopagus: 'in Him we live and move and have our being.' Paul cited pagan Greek poets (Epimenides and Aratus) whose language about Zeus was redirected toward the Creator God. The strategy was to find common ground before introducing the distinctly Christian claims about resurrection and judgment."
  },
  {
    "id": 14107,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'I am not ashamed of the gospel of Christ,' introducing the theological program of Romans?",
    "choices": [
      "Peter",
      "John",
      "Paul",
      "James"
    ],
    "answer": 2,
    "reference": "Romans 1:16-17",
    "verseText": "I am not ashamed of the gospel of Christ.",
    "explanation": "Romans 1:16 records: 'I am not ashamed of the gospel of Christ, for it is the power of God to salvation for everyone who believes, for the Jew first and also for the Greek.' The affirmation introduced the theological program of Romans: the gospel is God's power (not merely good advice), it is universal in scope (Jew and Gentile), and it operates through faith."
  },
  {
    "id": 14108,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'There is none righteous, no, not one,' stitching Scripture together to establish universal guilt?",
    "choices": [
      "Peter",
      "James",
      "John",
      "Paul"
    ],
    "answer": 3,
    "reference": "Romans 3:10-18",
    "verseText": "There is none righteous, no, not one.",
    "explanation": "Romans 3:10 records Paul quoting Psalm 14:1-3 and Psalm 53:1-3: 'There is none righteous, no, not one.' Paul stitched together multiple OT texts (vv.10-18) to demonstrate that Scripture itself established universal human guilt before God — the law's own testimony witnesses against those under the law."
  },
  {
    "id": 14111,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'If God is for us, who can be against us?' while celebrating the security of those in Christ?",
    "choices": [
      "Paul",
      "Peter",
      "John",
      "James"
    ],
    "answer": 0,
    "reference": "Romans 8:31-39",
    "verseText": "If God is for us, who can be against us?",
    "explanation": "Romans 8:31 records: 'What then shall we say to these things? If God is for us, who can be against us?' The question followed the list of assurances in Romans 8:28-30 (calling, justification, glorification). The 'against us' does not deny that opponents exist — Romans 8:35-39 lists real threats. The point is that none of them can ultimately prevail when God himself is the advocate."
  },
  {
    "id": 14112,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who urged believers to 'present your bodies a living sacrifice,' translating gospel theology into embodied worship?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "James"
    ],
    "answer": 1,
    "reference": "Romans 12:1",
    "verseText": "Present your bodies a living sacrifice.",
    "explanation": "Romans 12:1 records: 'I beseech you therefore, brethren, by the mercies of God, that you present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service.' The 'therefore' connects to all eleven preceding chapters — the ethics of chapters 12-16 flow from the theology of 1-11. 'Living sacrifice' is the paradox: sacrifice was killed; this one is offered alive, permanently devoted rather than consumed."
  },
  {
    "id": 14113,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Therefore, whether you eat or drink, or whatever you do, do all to the glory of God,' in a discussion about Christian liberty and conscience?",
    "choices": [
      "Peter",
      "James",
      "Paul",
      "John"
    ],
    "answer": 2,
    "reference": "1 Corinthians 10:31",
    "verseText": "Do all to the glory of God.",
    "explanation": "1 Corinthians 10:31 records: 'Therefore, whether you eat or drink, or whatever you do, do all to the glory of God.' The statement closed Paul's discussion of food offered to idols by establishing the governing principle for all disputed matters: the ultimate question is not whether an action is technically permitted but whether it brings glory to God and builds up the community."
  },
  {
    "id": 14114,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Though I speak with the tongues of men and of angels, but have not love,' showing that giftedness without love is empty?",
    "choices": [
      "Peter",
      "John",
      "James",
      "Paul"
    ],
    "answer": 3,
    "reference": "1 Corinthians 13:1-3",
    "verseText": "Though I speak with the tongues of men and of angels, but have not love.",
    "explanation": "1 Corinthians 13:1 records: 'Though I speak with the tongues of men and of angels, but have not love, I have become sounding brass or a clanging cymbal.' The chapter is embedded between discussions of spiritual gifts (chapters 12 and 14) as the 'more excellent way' that governs all gift use. Without love as the animating motive, spectacular spiritual activity profits nothing."
  },
  {
    "id": 14115,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Death is swallowed up in victory,' after arguing at length for bodily resurrection?",
    "choices": [
      "Paul",
      "John",
      "Peter",
      "James"
    ],
    "answer": 0,
    "reference": "1 Corinthians 15:51-57",
    "verseText": "Death is swallowed up in victory.",
    "explanation": "1 Corinthians 15:54-55 records Paul quoting Isaiah 25:8 and Hosea 13:14: 'Death is swallowed up in victory. O Death, where is your sting? O Hades, where is your victory?' The taunt was eschatological — directed at a defeated enemy whose dominion was ended by the resurrection. Paul's argument: because Christ rose, death's ultimate claim on believers is broken."
  },
  {
    "id": 14116,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who heard, 'My grace is sufficient for you,' in answer to prayer about a persistent thorn?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "An angel"
    ],
    "answer": 1,
    "reference": "2 Corinthians 12:7-9",
    "verseText": "My grace is sufficient for you.",
    "explanation": "2 Corinthians 12:9 records God's answer to Paul's three prayers about 'a thorn in the flesh': 'My grace is sufficient for you, for My strength is made perfect in weakness.' Paul's conclusion: 'when I am weak, then I am strong.' The refusal to remove the thorn was itself grace — it maintained the condition in which divine power was most clearly displayed through human inadequacy."
  },
  {
    "id": 14117,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'The fruit of the Spirit is love, joy, peace,' contrasting Spirit-formed life with the works of the flesh?",
    "choices": [
      "James",
      "Peter",
      "Paul",
      "John"
    ],
    "answer": 2,
    "reference": "Galatians 5:22-23",
    "verseText": "The fruit of the Spirit is love, joy, peace.",
    "explanation": "Galatians 5:22-23 records the fruit of the Spirit: 'love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control.' The list stands in contrast to the works of the flesh (vv.19-21). 'Fruit' is singular — these qualities grow together as one expression of Spirit-formed character rather than as separate items to be acquired. 'Against such there is no law': the law's condemnation has no purchase on Spirit-produced character."
  },
  {
    "id": 14118,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'God forbid that I should boast except in the cross of our Lord Jesus Christ,' making the cross the only ground of boasting?",
    "choices": [
      "Peter",
      "John",
      "James",
      "Paul"
    ],
    "answer": 3,
    "reference": "Galatians 6:14",
    "verseText": "God forbid that I should boast except in the cross of our Lord Jesus Christ.",
    "explanation": "Galatians 6:14 records: 'But God forbid that I should boast except in the cross of our Lord Jesus Christ, by whom the world has been crucified to me, and I to the world.' The statement closed Galatians' argument against boasting in circumcision. Paul's alternative boast was the cross — the most shameful object in Roman culture — and his relationship to it had created a mutual crucifixion between himself and the world's value system."
  },
  {
    "id": 14120,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who urged believers to 'Put on the whole armor of God,' framing Christian life as warfare against spiritual powers?",
    "choices": [
      "Paul",
      "Peter",
      "James",
      "John"
    ],
    "answer": 0,
    "reference": "Ephesians 6:10-18",
    "verseText": "Put on the whole armor of God.",
    "explanation": "Ephesians 6:11 records: 'Put on the whole armor of God, that you may be able to stand against the wiles of the devil.' The armor passage (vv.11-17) identified the real enemy: 'not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this age.' The armor equips for standing, not advancing — the posture of maintained resistance."
  },
  {
    "id": 14121,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'For to me, to live is Christ, and to die is gain,' turning imprisonment into theological testimony?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "James"
    ],
    "answer": 1,
    "reference": "Philippians 1:20-21",
    "verseText": "For to me, to live is Christ, and to die is gain.",
    "explanation": "Philippians 1:21 records: 'For to me, to live is Christ, and to die is gain.' The statement defined existence in Christ: life is not merely Christ's possession but Christ himself as the content of living. Death is gain not because life is bad but because being with Christ exceeds any earthly good. The verse is the compressed theology of Paul's imprisonment letter."
  },
  {
    "id": 14122,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Let this mind be in you which was also in Christ Jesus,' grounding humility in Christ's descent and exaltation?",
    "choices": [
      "Peter",
      "John",
      "Paul",
      "James"
    ],
    "answer": 2,
    "reference": "Philippians 2:5-11",
    "verseText": "Let this mind be in you which was also in Christ Jesus.",
    "explanation": "Philippians 2:5 records: 'Let this mind be in you which was also in Christ Jesus.' The exhortation introduced the Christ-hymn (vv.6-11) — the incarnation as the pattern for community relationships. Christ's self-emptying and humiliation was not merely an event to admire but a disposition to embody. The ethical imperative ('let this mind be in you') grounded humility in Christology rather than in mere social courtesy."
  },
  {
    "id": 14124,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Christ in you, the hope of glory,' as part of unveiling the mystery once hidden and now revealed?",
    "choices": [
      "Peter",
      "John",
      "James",
      "Paul"
    ],
    "answer": 3,
    "reference": "Colossians 1:25-27",
    "verseText": "Christ in you, the hope of glory.",
    "explanation": "Colossians 1:27 records: 'Christ in you, the hope of glory.' The mystery previously hidden from ages and generations (v.26) was now disclosed: Christ dwelling among and within Gentiles as well as Jews. The indwelling presence was not merely assurance — it was the basis ('hope') and guarantee of the future glory promised to believers."
  },
  {
    "id": 14125,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Pray without ceasing,' in a letter marked by watchfulness, holiness, and hope?",
    "choices": [
      "Paul",
      "Peter",
      "James",
      "John"
    ],
    "answer": 0,
    "reference": "1 Thessalonians 5:16-18",
    "verseText": "Pray without ceasing.",
    "explanation": "1 Thessalonians 5:17 records: 'Pray without ceasing.' The Greek adverb adialeiptōs means 'without interruption.' The command does not require unbroken verbal prayer but an orientation of continuous communion — the underlying posture of dependence that maintains contact with God whether formally praying or not."
  },
  {
    "id": 14126,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'God was manifested in the flesh,' in a verse celebrating the mystery of godliness?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "Luke"
    ],
    "answer": 1,
    "reference": "1 Timothy 3:16",
    "verseText": "God was manifested in the flesh.",
    "explanation": "1 Timothy 3:16 records: 'God was manifested in the flesh, justified in the Spirit, seen by angels, preached among the Gentiles, believed on in the world, received up in glory.' The verse is widely recognized as an early creed or hymn — structured in three couplets covering incarnation, vindication-and-witness, and proclamation-and-glorification. It celebrated the 'mystery of godliness' as the content of the gospel."
  },
  {
    "id": 14127,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who urged, 'Be diligent to present yourself approved to God,' in a pastoral letter about rightly handling the word of truth?",
    "choices": [
      "Peter",
      "James",
      "Paul",
      "John"
    ],
    "answer": 2,
    "reference": "2 Timothy 2:15",
    "verseText": "Be diligent to present yourself approved to God.",
    "explanation": "2 Timothy 2:15 records: 'Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth.' 'Rightly dividing' (orthotomounta — cutting straight) was a metaphor from craftsmanship. The charge was for precision in handling Scripture — cutting it correctly rather than distorting it through carelessness or false teaching."
  },
  {
    "id": 14128,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'I have fought the good fight, I have finished the race, I have kept the faith,' as martyrdom approached?",
    "choices": [
      "Peter",
      "John",
      "Stephen",
      "Paul"
    ],
    "answer": 3,
    "reference": "2 Timothy 4:6-8",
    "verseText": "I have fought the good fight, I have finished the race, I have kept the faith.",
    "explanation": "2 Timothy 4:7-8 records Paul's testimony near death: 'I have fought the good fight, I have finished the race, I have kept the faith. Finally, there is laid up for me the crown of righteousness.' Three metaphors — military combat, athletic competition, and faithful stewardship — together described the apostolic life. The crown awaits 'all who have loved His appearing,' not Paul alone."
  },
  {
    "id": 14129,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Looking for the blessed hope,' tying ethics to the appearing of Christ?",
    "choices": [
      "Paul",
      "Peter",
      "John",
      "James"
    ],
    "answer": 0,
    "reference": "Titus 2:11-13",
    "verseText": "Looking for the blessed hope.",
    "explanation": "Titus 2:13 records: 'looking for the blessed hope and glorious appearing of our great God and Savior Jesus Christ.' The 'blessed hope' grounded the ethical instructions surrounding it (vv.11-14). Living soberly, righteously, and godly 'in the present age' (v.12) was oriented toward the future appearance — eschatology shaped ethics."
  },
  {
    "id": 14130,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Without faith it is impossible to please Him,' in a chapter built around persevering trust across redemptive history?",
    "choices": [
      "Paul",
      "The writer of Hebrews",
      "Peter",
      "James"
    ],
    "answer": 1,
    "reference": "Hebrews 11:1-6",
    "verseText": "Without faith it is impossible to please Him.",
    "explanation": "Hebrews 11:6 records: 'without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.' Two elements of saving faith: belief in God's existence ('He is') and belief in his responsive character ('a rewarder of those who seek him'). Both are necessary — mere theism without trust in God's responsiveness is insufficient."
  },
  {
    "id": 14132,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'But be doers of the word, and not hearers only,' insisting that reception of truth must become lived obedience?",
    "choices": [
      "Peter",
      "John",
      "James",
      "Paul"
    ],
    "answer": 2,
    "reference": "James 1:22",
    "verseText": "But be doers of the word, and not hearers only.",
    "explanation": "James 1:22 records: 'be doers of the word, and not hearers only, deceiving yourselves.' The self-deception is specific: assuming that intellectual knowledge of or emotional response to the word fulfills its requirement. James's mirror metaphor (vv.23-24) illustrated the absurdity: a person who looks in a mirror, sees their face, and immediately forgets what they saw — the look accomplished nothing because nothing changed."
  },
  {
    "id": 14133,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Faith without works is dead,' not to deny faith, but to deny empty profession?",
    "choices": [
      "Paul",
      "Peter",
      "John",
      "James"
    ],
    "answer": 3,
    "reference": "James 2:14-26",
    "verseText": "Faith without works is dead.",
    "explanation": "James 2:17 records: 'Thus also faith by itself, if it does not have works, is dead.' James did not deny that faith justifies — he denied that claimed faith without visible fruit is genuine faith. His examples (Abraham offering Isaac, Rahab hiding the spies) showed that the faith that justified was exactly the faith that produced works. The two were inseparable — not faith plus works but the faith that works."
  },
  {
    "id": 14134,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'No man can tame the tongue,' in a warning about the destructive power of speech within the covenant community?",
    "choices": [
      "James",
      "Peter",
      "Paul",
      "Jude"
    ],
    "answer": 0,
    "reference": "James 3:5-10",
    "verseText": "No man can tame the tongue.",
    "explanation": "James 3:8 records: 'But no man can tame the tongue. It is an unruly evil, full of deadly poison.' The inability to tame the tongue (v.8) was not fatalistic but diagnostic — the speech problem is rooted in the heart and only divine transformation can address it. James's preceding images (the bit, the rudder, the spark) showed small causes producing enormous effects, making the tongue's influence disproportionate to its size."
  },
  {
    "id": 14135,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Draw near to God and He will draw near to you,' as part of a call to repentance from worldliness?",
    "choices": [
      "Peter",
      "James",
      "Paul",
      "John"
    ],
    "answer": 1,
    "reference": "James 4:7-10",
    "verseText": "Draw near to God and He will draw near to you.",
    "explanation": "James 4:8 records: 'Draw near to God and He will draw near to you.' The command was part of a sequence: submit to God, resist the devil, draw near to God, cleanse your hands, purify your hearts (vv.7-8). The promise of divine approach was conditional on human approach — not that human initiative causes God to move, but that the posture of drawing near is the position in which God's nearness is experienced."
  },
  {
    "id": 14136,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Casting all your care upon Him, for He cares for you,' in the middle of exhortations to humble endurance?",
    "choices": [
      "Paul",
      "James",
      "Peter",
      "John"
    ],
    "answer": 2,
    "reference": "1 Peter 5:6-7",
    "verseText": "Casting all your care upon Him, for He cares for you.",
    "explanation": "1 Peter 5:7 records: 'casting all your care upon Him, for He cares for you.' The instruction was set in the context of humility under God's hand (v.6) and vigilance against the devil (v.8). The care-casting was active, not passive — the Greek verb (epiriptō) means to throw upon. God's caring was the reason the throwing was possible: the weight could be transferred because someone capable of bearing it actually cared."
  },
  {
    "id": 14137,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Be sober, be vigilant; because your adversary the devil walks about like a roaring lion,' framing suffering in spiritual conflict terms?",
    "choices": [
      "James",
      "Paul",
      "John",
      "Peter"
    ],
    "answer": 3,
    "reference": "1 Peter 5:8-9",
    "verseText": "Be sober, be vigilant; because your adversary the devil walks about like a roaring lion.",
    "explanation": "1 Peter 5:8 records: 'Be sober, be vigilant; because your adversary the devil walks about like a roaring lion, seeking whom he may devour.' The lion metaphor communicated purposeful, active threat rather than casual temptation. Peter's instruction was neither alarm nor dismissal — it was clear-headed alertness combined with steadfast faith (v.9) and confidence in God's ultimate restoration (v.10)."
  },
  {
    "id": 14138,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'For we did not follow cunningly devised fables,' grounding apostolic proclamation in witnessed majesty?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "Luke"
    ],
    "answer": 0,
    "reference": "2 Peter 1:16-18",
    "verseText": "For we did not follow cunningly devised fables.",
    "explanation": "2 Peter 1:16 records: 'For we did not follow cunningly devised fables when we made known to you the power and coming of our Lord Jesus Christ, but were eyewitnesses of His majesty.' The Transfiguration was the specific event Peter cited (vv.17-18). The apostolic witness was grounded in historical, physical experience — not mythology or spiritual vision detached from events."
  },
  {
    "id": 14139,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'No prophecy of Scripture is of any private interpretation,' locating prophecy's origin in the Holy Spirit rather than human will?",
    "choices": [
      "Paul",
      "Peter",
      "John",
      "James"
    ],
    "answer": 1,
    "reference": "2 Peter 1:20-21",
    "verseText": "No prophecy of Scripture is of any private interpretation.",
    "explanation": "2 Peter 1:20-21 records: 'no prophecy of Scripture is of any private interpretation, for prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.' 'Private interpretation' addressed both origin (not individually produced) and reading (not to be interpreted in isolation from the whole). The Spirit who inspired the Scripture is also the guide for its interpretation within the community of faith."
  },
  {
    "id": 14140,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'God is light, and in Him is no darkness at all,' joining theology to tests of fellowship and truth?",
    "choices": [
      "Peter",
      "Paul",
      "John",
      "James"
    ],
    "answer": 2,
    "reference": "1 John 1:5-7",
    "verseText": "God is light, and in Him is no darkness at all.",
    "explanation": "1 John 1:5 records: 'God is light, and in Him is no darkness at all.' The statement established the ground for all of 1 John's ethical argument: because God is light (morally pure, self-revealing, penetrating), fellowship with him requires walking in light. The absolute — 'no darkness at all' — ruled out any partial accommodation of darkness in the one claiming fellowship with God."
  },
  {
    "id": 14141,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'If we confess our sins, He is faithful and just to forgive us our sins,' connecting honesty about sin with divine cleansing?",
    "choices": [
      "James",
      "Paul",
      "Peter",
      "John"
    ],
    "answer": 3,
    "reference": "1 John 1:9",
    "verseText": "If we confess our sins, He is faithful and just to forgive us our sins.",
    "explanation": "1 John 1:9 records: 'If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.' The condition is confession; the basis is God's faithfulness and justice — not merely his mercy. The justice is significant: forgiveness is not a suspension of divine standards but their fulfillment, because Christ has satisfied what justice required."
  },
  {
    "id": 14142,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote, 'Do not love the world or the things in the world,' warning against rival loves and passing desires?",
    "choices": [
      "John",
      "Peter",
      "Paul",
      "James"
    ],
    "answer": 0,
    "reference": "1 John 2:15-17",
    "verseText": "Do not love the world or the things in the world.",
    "explanation": "1 John 2:15 records: 'Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him.' The 'world' here is not physical creation (which God loves — John 3:16) but the system of values and allegiances organized in opposition to God (vv.16-17: the lust of the flesh, lust of the eyes, and pride of life). The prohibition is about rival ultimate allegiance."
  },
  {
    "id": 14145,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who wrote that believers should 'earnestly contend for the faith which was once for all delivered to the saints'?",
    "choices": [
      "Peter",
      "Jude",
      "John",
      "James"
    ],
    "answer": 1,
    "reference": "Jude 1:3",
    "verseText": "Earnestly contend for the faith which was once for all delivered to the saints.",
    "explanation": "Jude 1:3 records: 'I found it necessary to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints.' The word 'once for all' (hapax) established the faith as a definite, completed deposit — not ongoing revelation to be revised but received truth to be defended. Jude had intended to write about salvation but the emergency of false teachers redirected the letter."
  },
  {
    "id": 14146,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Holy, holy, holy, Lord God Almighty,' in John's throne-room vision?",
    "choices": [
      "The twenty-four elders",
      "The redeemed multitude",
      "The four living creatures",
      "An angel at the altar"
    ],
    "answer": 2,
    "reference": "Revelation 4:8",
    "verseText": "Holy, holy, holy, Lord God Almighty.",
    "explanation": "Revelation 4:8 records the four living creatures crying day and night: 'Holy, holy, holy, Lord God Almighty, who was and is and is to come!' The triple holiness echoes Isaiah 6:3. The living creatures' unceasing worship frames the heavenly throne scene that grounds all of Revelation's subsequent visions — the sovereignty of God is the theological foundation on which the book's drama rests."
  },
  {
    "id": 14147,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who sang, 'Worthy is the Lamb who was slain,' interpreting redemptive victory through sacrificial death?",
    "choices": [
      "The dragon's followers",
      "The merchants of Babylon",
      "The kings of the earth",
      "Many angels around the throne"
    ],
    "answer": 3,
    "reference": "Revelation 5:11-12",
    "verseText": "Worthy is the Lamb who was slain.",
    "explanation": "Revelation 5:12 records myriads of angels around the throne singing: 'Worthy is the Lamb who was slain to receive power and riches and wisdom, and strength and honor and glory and blessing!' The sevenfold ascription gave the Lamb every attribute of divine sovereignty. The worship followed the Lamb's unique qualification to open the sealed scroll (v.9) — worthy because he was slain and with his blood redeemed people from every tribe, tongue, people, and nation."
  },
  {
    "id": 14148,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who declared, 'Now salvation, and strength, and the kingdom of our God...have come,' after Satan was cast down?",
    "choices": [
      "A loud voice in heaven",
      "John",
      "Michael",
      "One of the elders"
    ],
    "answer": 0,
    "reference": "Revelation 12:10",
    "verseText": "Now salvation, and strength, and the kingdom of our God...have come.",
    "explanation": "Revelation 12:10 records a loud voice in heaven declaring: 'Now salvation, and strength, and the kingdom of our God, and the power of His Christ have come, for the accuser of our brethren, who accused them before our God day and night, has been cast down.' The declaration interpreted the war in heaven following the woman's son being caught up to God — the dragon's expulsion was the direct consequence of the cross and resurrection."
  },
  {
    "id": 14149,
    "game": "Quotes",
    "testament": "New Testament",
    "category": "Speaker and Setting",
    "difficulty": "Advanced",
    "question": "Who said, 'Surely I am coming quickly,' in the final exchange of the canon's closing chapter?",
    "choices": [
      "John",
      "Jesus",
      "An angel",
      "The Spirit and the bride"
    ],
    "answer": 1,
    "reference": "Revelation 22:20",
    "verseText": "Surely I am coming quickly.",
    "explanation": "Revelation 22:20 records Jesus' final statement: 'Surely I am coming quickly.' The closing exchange of the canon ends with a promise and a prayer. 'Quickly' (tachu) does not necessarily mean 'soon' in calendar terms but 'suddenly, without delay, when the time comes.' The church's response — 'Even so, come, Lord Jesus' — is the posture of expectant longing with which the whole Bible ends."
  }
];
