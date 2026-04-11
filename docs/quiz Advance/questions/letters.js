const lettersQuestions = [
  {
    "id": 21001,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What is the central claim of Romans 1:17 that Paul unfolds as the letter's governing thesis?",
    "choices": [
      "The righteous shall live by faith — God's righteousness is received through faith, not achieved through works",
      "The law alone makes a person righteous before God",
      "Circumcision secures covenant standing before God",
      "Wisdom is the proper path to divine righteousness"
    ],
    "answer": 0,
    "reference": "Romans 1:17; Habakkuk 2:4",
    "verseText": "For in it the righteousness of God is revealed from faith to faith.",
    "explanation": "Romans 1:17 quotes Habakkuk 2:4 to establish that the righteousness God requires and provides is the same righteousness — received by faith. This is the hinge on which the entire letter turns."
  },
  {
    "id": 21002,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Paul argue in Romans 1:18–32 has left all humanity without excuse before God's judgment?",
    "choices": [
      "The giving of the Mosaic law to Israel",
      "General revelation through creation — God's invisible attributes are clearly perceived",
      "The preaching of the prophets to the nations",
      "Dreams and visions given universally to all peoples"
    ],
    "answer": 1,
    "reference": "Romans 1:20",
    "verseText": "For since the creation of the world His invisible attributes are clearly seen.",
    "explanation": "Paul's argument is that creation itself constitutes sufficient revelation of God's eternal power and divine nature. Suppression of this knowledge is culpable, not innocent ignorance."
  },
  {
    "id": 21003,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Paul's argument in Romans 2 chiefly establish about the Jewish possession of the law?",
    "choices": [
      "That Gentiles are automatically condemned for lacking it",
      "That circumcision is entirely meaningless",
      "Possession of the law does not guarantee acquittal — the law must be done, not merely heard",
      "That all Gentiles already possess saving faith"
    ],
    "answer": 2,
    "reference": "Romans 2:13",
    "verseText": "For not the hearers of the law are just in the sight of God, but the doers of the law will be justified.",
    "explanation": "Paul uses the rhetorical strategy of addressing an imagined Jewish interlocutor to show that covenant privilege does not exempt from judgment — the very law that gives light also increases accountability."
  },
  {
    "id": 21004,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What is the function of Romans 3:21–26 within the letter's argument about sin and condemnation?",
    "choices": [
      "It introduces law-keeping as the path to righteousness",
      "It argues God's wrath has been permanently removed from Israel",
      "It proves all people are automatically justified",
      "It announces God's righteousness through faith in Christ as the resolution to humanity's condemned state"
    ],
    "answer": 3,
    "reference": "Romans 3:21-26",
    "verseText": "But now the righteousness of God apart from the law is revealed.",
    "explanation": "After three chapters establishing universal guilt (Gentiles in ch. 1, moralists in ch. 2, Jews in ch. 3:1-20), Paul introduces the 'but now' — the turning point where Christ's propitiatory sacrifice resolves what the law could not."
  },
  {
    "id": 21005,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does baptism signify in Romans 6 according to Paul's argument against continuing in sin?",
    "choices": [
      "Union with Christ in death and resurrection, breaking sin's dominion over the believer",
      "Outward church membership with no interior transformation",
      "The beginning of law observance under the new covenant",
      "A second spiritual birth separate from the first conversion"
    ],
    "answer": 0,
    "reference": "Romans 6:3-4",
    "verseText": "Do you not know that as many of us as were baptized into Christ Jesus were baptized into His death?",
    "explanation": "Paul's argument is not merely moral exhortation but indicative theology: baptism marks union with Christ's death and resurrection. The believer has already died to sin's jurisdiction — continuing in sin contradicts their new identity."
  },
  {
    "id": 21006,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Romans 5:12–19 establish as the parallel between Adam and Christ?",
    "choices": [
      "Both were created without sin and remained without sin throughout their lives",
      "Both acted as representative heads whose acts carried consequences for many — condemnation through Adam, justification through Christ",
      "Both wrote Scripture that governed God's people",
      "Both were priests who offered sacrifice for the community"
    ],
    "answer": 1,
    "reference": "Romans 5:18-19",
    "verseText": "Through one Man's righteous act the free gift came to all men, resulting in justification of life.",
    "explanation": "The Adam-Christ parallel is about representative headship: just as one man's trespass brought condemnation to many through solidarity, one man's obedience brings righteousness to many through the same principle of representation."
  },
  {
    "id": 21007,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does the conflict described in Romans 7 primarily expose?",
    "choices": [
      "An excuse that persistent sin is unavoidable and therefore not culpable",
      "Proof that Paul had never truly converted before writing this letter",
      "The law's inability to produce righteousness in the flesh — it reveals and even inflames sin without providing power to overcome it",
      "That believers live without internal struggle once properly sanctified"
    ],
    "answer": 2,
    "reference": "Romans 7:14-24",
    "verseText": "For what I am doing, I do not understand. For what I will to do, that I do not practice.",
    "explanation": "Romans 7 shows the law is holy but powerless to produce the obedience it demands in fallen flesh. The resolution comes in Romans 8 with the Spirit — the law diagnoses; the Spirit liberates."
  },
  {
    "id": 21008,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What is Paul's answer in Romans 8:31–39 to every potential source of condemnation against the elect?",
    "choices": [
      "Church courts can assess and potentially revoke standing",
      "Past serious sin permanently disqualifies a believer from assurance",
      "Only continued perfect obedience maintains one's election",
      "Nothing can separate believers from the love of God in Christ Jesus — every accuser, every threat, every circumstance is overcome"
    ],
    "answer": 3,
    "reference": "Romans 8:38-39",
    "verseText": "I am persuaded that neither death nor life... shall be able to separate us from the love of God.",
    "explanation": "Paul surveys every conceivable threat — judicial (condemnation), relational (Christ's advocacy), cosmic (death, life, angels, powers), temporal (present, future), and spatial (height, depth) — and declares all of them defeated."
  },
  {
    "id": 21009,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Romans 9–11 address within the letter's overall argument?",
    "choices": [
      "The faithfulness of God's word despite Israel's present unbelief — God's sovereign election, Israel's hardening, and the hope of future restoration",
      "A complete digression unrelated to the main argument about justification",
      "Proof that Israel's covenant has been entirely replaced by the church",
      "Evidence that national Israel has no future role in God's redemptive purposes"
    ],
    "answer": 0,
    "reference": "Romans 11:1, 25-26",
    "verseText": "Has God cast away His people? Certainly not!",
    "explanation": "The question 'has God's word failed?' (9:6) drives the three chapters. Paul argues God's word has not failed because election was always by grace, Israel's hardening serves Gentile inclusion, and a remnant and ultimate restoration are promised."
  },
  {
    "id": 21010,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What practical exhortation opens Romans 12, and how does Paul ground it theologically?",
    "choices": [
      "Pursue political influence in Rome as the primary mission",
      "Present your bodies as living sacrifices — the fitting response to all the mercies of God detailed in chapters 1–11",
      "Seek leadership positions in the Roman church immediately",
      "Withdraw entirely from contact with unbelieving society"
    ],
    "answer": 1,
    "reference": "Romans 12:1",
    "verseText": "I beseech you therefore, brethren, by the mercies of God, that you present your bodies a living sacrifice.",
    "explanation": "The 'therefore' is crucial — all of Romans 12–16's ethics flow from the indicatives of chapters 1–11. Ethics is not the ground of salvation but the response to it. 'By the mercies of God' is the only legitimate motivator."
  },
  {
    "id": 21011,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What fundamental problem divided the Corinthian church at the outset of 1 Corinthians?",
    "choices": [
      "Disagreement over circumcision as a requirement for Gentiles",
      "Collective refusal to accept Paul's apostolic authority",
      "Factional loyalties to different teachers that undermined the centrality of Christ",
      "Theological errors specifically about Old Testament interpretation"
    ],
    "answer": 2,
    "reference": "1 Corinthians 1:11-13",
    "verseText": "Each of you says, 'I am of Paul,' or 'I am of Apollos,' or 'I am of Cephas,' or 'I am of Christ.'",
    "explanation": "The divisions were personality-based allegiances masquerading as theological positions. Paul's response is not to arbitrate between teachers but to demolish the very premise that apostolic messengers are worth competing over."
  },
  {
    "id": 21012,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "Why does Paul say in 1 Corinthians 2 that he came to Corinth without 'excellence of speech'?",
    "choices": [
      "Because he was an unskilled communicator who acknowledged his weakness",
      "Because he distrusted Greco-Roman culture entirely",
      "He was saving his rhetorical skill for his letter to Rome",
      "So that faith would rest on God's power rather than human persuasion — making the cross, not eloquence, the basis of response"
    ],
    "answer": 3,
    "reference": "1 Corinthians 2:4-5",
    "verseText": "My speech and my preaching were not with persuasive words of human wisdom, but in demonstration of the Spirit and of power.",
    "explanation": "The Corinthians prized sophistry and rhetoric. Paul's deliberate plainness was a theological statement: if persuasion converts, faith rests on human wisdom; if the Spirit converts, faith rests on God's power."
  },
  {
    "id": 21013,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul teach about the believer's body in 1 Corinthians 6 that makes sexual immorality uniquely serious?",
    "choices": [
      "The body is a temple of the Holy Spirit purchased by Christ — sexual sin is uniquely against one's own body and against the indwelling Spirit",
      "The body is irrelevant to spiritual life and can be used however one chooses",
      "Bodily actions carry no moral weight for those who are spiritually mature",
      "Only the spirit needs to be guarded; the body is temporary"
    ],
    "answer": 0,
    "reference": "1 Corinthians 6:19-20",
    "verseText": "Your body is the temple of the Holy Spirit who is in you... therefore glorify God in your body.",
    "explanation": "Paul's argument is christological and pneumatological: the body is bought with a price (the cross) and indwelt (the Spirit). Sexual immorality is not merely immoral — it desecrates a dwelling of God."
  },
  {
    "id": 21014,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What is the governing principle Paul uses to evaluate spiritual gifts in 1 Corinthians 12–14?",
    "choices": [
      "The most spectacular gift is always most valuable",
      "Edification of the whole body — the measure of a gift's proper use is whether it builds up the community",
      "Tongues rank above all other gifts as the primary sign",
      "Individual spiritual experience is the proper goal of all gifts"
    ],
    "answer": 1,
    "reference": "1 Corinthians 14:12",
    "verseText": "Seek to excel in gifts that build up the church.",
    "explanation": "1 Corinthians 14 contains the word 'edify' or 'build up' nine times. Paul subordinates all gifts to this communal standard — even prophecy over tongues is preferred because it edifies without an interpreter."
  },
  {
    "id": 21015,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul identify in 1 Corinthians 13 as the quality without which all gifts, knowledge, and sacrifice are worthless?",
    "choices": [
      "Prophecy, as the greatest and most needed gift",
      "Knowledge, which must always accompany spiritual action",
      "Love — agapē — the self-giving love that bears, believes, hopes, and endures all things",
      "Tongues, because they connect directly to the Spirit"
    ],
    "answer": 2,
    "reference": "1 Corinthians 13:1-3",
    "verseText": "Though I speak with the tongues of men and of angels, but have not love, I have become sounding brass.",
    "explanation": "Chapter 13 is positioned between chapters 12 and 14 deliberately — it is the 'more excellent way' that governs all gift use. Without love as the animating motive, even the most spectacular spiritual activity profits nothing."
  },
  {
    "id": 21016,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "Why does Paul argue at length for bodily resurrection in 1 Corinthians 15?",
    "choices": [
      "He was correcting Sadducees who had infiltrated the Corinthian church",
      "The Corinthians had rejected the resurrection entirely and all were lost",
      "To prove Paul had personally seen the risen Christ and thus possessed apostolic authority",
      "Some in Corinth were saying there is no resurrection of the dead — Paul shows this destroys the entire gospel"
    ],
    "answer": 3,
    "reference": "1 Corinthians 15:12",
    "verseText": "Now if Christ is preached that He has been raised from the dead, how do some among you say there is no resurrection of the dead?",
    "explanation": "The denial was probably Greek-influenced: physical matter is inferior to spirit, so bodily resurrection seemed undesirable. Paul shows that if no resurrection, Christ is not raised; if Christ is not raised, faith is futile and the dead are lost."
  },
  {
    "id": 21017,
    "game": "Letters of the Apostles",
    "category": "2 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul's 'thorn in the flesh' in 2 Corinthians 12 ultimately teach about the relationship between weakness and grace?",
    "choices": [
      "God's power is perfected in weakness — the refusal to remove it was itself grace, making Paul's suffering a vehicle for divine strength",
      "That believers should expect physical healing whenever they pray with sufficient faith",
      "That Paul had personally sinned and was being disciplined",
      "That prayer for healing is always denied during the present church age"
    ],
    "answer": 0,
    "reference": "2 Corinthians 12:9",
    "verseText": "My grace is sufficient for you, for My strength is made perfect in weakness.",
    "explanation": "God refused three times, but Paul learned that the very weakness he wanted removed was the condition for the display of power that could not be mistaken for human achievement. The thorn was a gift disguised as deprivation."
  },
  {
    "id": 21018,
    "game": "Letters of the Apostles",
    "category": "2 Corinthians",
    "difficulty": "Advanced",
    "question": "What is the 'new creation' Paul announces in 2 Corinthians 5:17?",
    "choices": [
      "A second physical world that will replace the material cosmos",
      "Anyone in Christ is a new creation — the old has gone, the new has come — a present transformation, not merely a future promise",
      "A political kingdom that will replace Rome in God's timing",
      "An angelic order superior to the natural created realm"
    ],
    "answer": 1,
    "reference": "2 Corinthians 5:17",
    "verseText": "If anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.",
    "explanation": "Paul uses creation language to describe conversion — the same God who said 'let there be light' has spoken again in Christ. The believer's union with Christ is not merely moral improvement but an act of new creation."
  },
  {
    "id": 21019,
    "game": "Letters of the Apostles",
    "category": "Galatians",
    "difficulty": "Advanced",
    "question": "What is the central crisis Paul addresses in Galatians?",
    "choices": [
      "Gentile immorality threatening the churches' witness",
      "Disputes over the proper celebration of the Lord's Supper",
      "The addition of law observance — especially circumcision — as required for full standing before God alongside faith in Christ",
      "False teaching about the nature of the resurrection"
    ],
    "answer": 2,
    "reference": "Galatians 1:6-9; 5:2-4",
    "verseText": "If you become circumcised, Christ will profit you nothing.",
    "explanation": "The Galatian agitators (Judaizers) were not denying Christ but adding to him — requiring circumcision for full covenant membership. Paul sees this as a different gospel because it relocates justification from Christ alone to Christ plus law."
  },
  {
    "id": 21020,
    "game": "Letters of the Apostles",
    "category": "Galatians",
    "difficulty": "Advanced",
    "question": "In Galatians 2, what is the theological reason Paul publicly rebukes Peter at Antioch?",
    "choices": [
      "Peter had denied the resurrection in a public teaching",
      "Peter had claimed superior authority over Paul in Antioch",
      "Peter had returned to animal sacrifice at the Jerusalem temple",
      "Peter's withdrawal from Gentile table fellowship was walking inconsistently with the truth of the gospel — his actions implied Gentiles needed to Judaize for full acceptance"
    ],
    "answer": 3,
    "reference": "Galatians 2:11-14",
    "verseText": "I withstood him to his face, because he was to be blamed.",
    "explanation": "Peter's conduct was not heresy in theory but hypocrisy in practice — his table withdrawal told Gentile believers their standing was incomplete. Paul saw this as the gospel itself being compromised by social pressure."
  },
  {
    "id": 21021,
    "game": "Letters of the Apostles",
    "category": "Galatians",
    "difficulty": "Advanced",
    "question": "What is the function of Hagar and Sarah in Galatians 4:21–31?",
    "choices": [
      "An allegory of two covenants — bondage under law versus freedom under the covenant of promise",
      "To establish the proper roles of women in the early church",
      "To prove that Abraham had two equally legitimate covenant families",
      "To describe the sacred geography of the promised land"
    ],
    "answer": 0,
    "reference": "Galatians 4:24",
    "verseText": "These things are symbolic. For these are the two covenants.",
    "explanation": "Paul reads the Hagar-Sarah story typologically: Hagar represents Sinai/present Jerusalem producing children in bondage; Sarah represents the Jerusalem above producing children in freedom. The Galatians who turn to law are aligning with Hagar's line."
  },
  {
    "id": 21022,
    "game": "Letters of the Apostles",
    "category": "Ephesians",
    "difficulty": "Advanced",
    "question": "What does Paul describe as the mystery now revealed in Ephesians 3?",
    "choices": [
      "The hidden chronological code embedded within Old Testament prophecy",
      "That Gentiles are fellow heirs, fellow members of the body, and fellow partakers of the promise in Christ Jesus",
      "The precise date and circumstances of the second coming",
      "The identity of the figures symbolized in Revelation's apocalyptic visions"
    ],
    "answer": 1,
    "reference": "Ephesians 3:6",
    "verseText": "That the Gentiles should be fellow heirs, of the same body, and partakers of His promise in Christ.",
    "explanation": "The 'mystery' in Paul is not something inherently unknowable but something previously hidden and now disclosed — here, that Gentile full inclusion in the one body was always God's plan, not an afterthought to Israel's failure."
  },
  {
    "id": 21023,
    "game": "Letters of the Apostles",
    "category": "Ephesians",
    "difficulty": "Advanced",
    "question": "What does Ephesians 2:8–9 identify as the source, basis, and nature of salvation?",
    "choices": [
      "Human decision consistently applied over time, leading to justification",
      "Baptism administered by the apostles or their successors",
      "Grace through faith — it is the gift of God, not of works, so that no one can boast",
      "Circumcision and covenant membership as the foundation of faith"
    ],
    "answer": 2,
    "reference": "Ephesians 2:8-9",
    "verseText": "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God.",
    "explanation": "Paul's three negatives — 'not of yourselves,' 'not of works,' 'lest anyone should boast' — eliminate every human contribution to salvation. Grace and faith are both God's provision; the ground of boasting is removed."
  },
  {
    "id": 21024,
    "game": "Letters of the Apostles",
    "category": "Ephesians",
    "difficulty": "Advanced",
    "question": "What does the armor of God in Ephesians 6 serve to equip believers for?",
    "choices": [
      "Physical military warfare against Rome's occupation of Judea",
      "Leadership competition within the internal structures of the church",
      "Evangelism campaigns directed primarily toward Gentile populations",
      "Spiritual struggle against cosmic powers of darkness — rulers, authorities, powers, and spiritual forces of evil in heavenly places"
    ],
    "answer": 3,
    "reference": "Ephesians 6:12",
    "verseText": "For we do not wrestle against flesh and blood, but against principalities, against powers.",
    "explanation": "Paul explicitly names the real enemy: not human opponents but cosmic spiritual forces. The armor pieces (truth, righteousness, peace, faith, salvation, word) are all defensive and proclamatory — the battle is fought by standing firm in Christ."
  },
  {
    "id": 21025,
    "game": "Letters of the Apostles",
    "category": "Philippians",
    "difficulty": "Advanced",
    "question": "What circumstance frames Philippians, and how does Paul's response to it reframe the situation theologically?",
    "choices": [
      "Imprisonment, which Paul reframes as actually advancing the gospel — his chains have made Christ known throughout the Praetorium",
      "Persecution in Ephesus, which he calls a sign of defeat for the mission",
      "Famine in Philippi, which he connects to the believers' own generosity",
      "False teaching requiring him to catalogue and name specific heretics"
    ],
    "answer": 0,
    "reference": "Philippians 1:12-13",
    "verseText": "The things which happened to me have actually turned out for the furtherance of the gospel.",
    "explanation": "This is the letter's paradigmatic move — circumstances that appear to be defeats (imprisonment, suffering, even death) are reinterpreted through the lens of Christ's lordship. What looks like setback is actually advance."
  },
  {
    "id": 21026,
    "game": "Letters of the Apostles",
    "category": "Philippians",
    "difficulty": "Advanced",
    "question": "What does the Christ-hymn in Philippians 2:5–11 establish as both theological fact and community pattern?",
    "choices": [
      "That Christ's equality with God is a position always fully and visibly exercised",
      "Christ's self-emptying and humiliation followed by divine exaltation establishes humility as the shape of relationships within the body",
      "That worship takes precedence over ethics in the ordering of community life",
      "That spiritual pride is acceptable when grounded in correct doctrinal position"
    ],
    "answer": 1,
    "reference": "Philippians 2:5-8",
    "verseText": "Let this mind be in you which was also in Christ Jesus.",
    "explanation": "The hymn is embedded in an exhortation about unity and humility — Paul is not merely making Christological claims but using the incarnation as the pattern for how believers should treat one another. Theology shapes ethics directly."
  },
  {
    "id": 21027,
    "game": "Letters of the Apostles",
    "category": "Philippians",
    "difficulty": "Advanced",
    "question": "What does Paul mean by 'counting all things as loss' in Philippians 3?",
    "choices": [
      "That material possessions should be physically renounced as part of discipleship",
      "That Paul had no significant religious background before conversion",
      "Every former source of confidence and status — even his impressive Jewish credentials — is counted as refuse compared to knowing Christ",
      "That Jewish religious practices were sinful and not merely insufficient"
    ],
    "answer": 2,
    "reference": "Philippians 3:7-8",
    "verseText": "But what things were gain to me, these I have counted loss for Christ.",
    "explanation": "Paul lists his Jewish credentials (circumcision, tribe, Pharisee, blameless in law) as genuine advantages — and counts them as loss. This is not a rejection of Judaism but a revaluation in light of the surpassing worth of Christ."
  },
  {
    "id": 21028,
    "game": "Letters of the Apostles",
    "category": "Colossians",
    "difficulty": "Advanced",
    "question": "What false teaching does Colossians most directly counter?",
    "choices": [
      "Pure moral libertinism claiming that those in Christ are free from all ethical standards",
      "A denial of Christ's genuine humanity claiming He only appeared to suffer",
      "A Judaizing movement identical in every respect to that addressed in Galatians",
      "A philosophy that diminished Christ by adding angelic intermediaries, ascetic observances, and special knowledge as necessary components"
    ],
    "answer": 3,
    "reference": "Colossians 2:8, 18",
    "verseText": "Beware lest anyone cheat you through philosophy and empty deceit... and worship of angels.",
    "explanation": "The Colossian 'philosophy' appears to be a syncretistic system combining Jewish elements (food laws, Sabbaths) with pagan mysticism (angel veneration, asceticism for spiritual access). Paul's response is the complete sufficiency of Christ."
  },
  {
    "id": 21029,
    "game": "Letters of the Apostles",
    "category": "Colossians",
    "difficulty": "Advanced",
    "question": "How does Colossians 2:16–17 interpret the Old Testament ceremonial calendar?",
    "choices": [
      "As shadows of what was to come, while the substance itself belongs to Christ — therefore no one may judge believers regarding these observances",
      "As permanently binding on all believers in every era, including the new covenant",
      "As irrelevant cultural artifacts with no theological content",
      "As signs pointing to Torah observance continuing in full under the new covenant"
    ],
    "answer": 0,
    "reference": "Colossians 2:17",
    "verseText": "Which are a shadow of things to come, but the substance is of Christ.",
    "explanation": "The shadow-substance language is decisive: shadows are real but point beyond themselves. Once the substance arrives, insisting on the shadow is disorienting. The festivals, new moons, and Sabbaths find their reality in Christ."
  },
  {
    "id": 21030,
    "game": "Letters of the Apostles",
    "category": "Thessalonians",
    "difficulty": "Advanced",
    "question": "What does Paul address in 1 Thessalonians 4:13–18 that was troubling the believers there?",
    "choices": [
      "The teaching that deceased believers have perished forever with no future resurrection",
      "Grief over those who had died before Christ's return — Paul assures that the dead in Christ will be raised and joined with the living",
      "The view that grief over death is incompatible with genuine faith",
      "Confusion about whether resurrection is only metaphorical for spiritual renewal"
    ],
    "answer": 1,
    "reference": "1 Thessalonians 4:13-14",
    "verseText": "I do not want you to be ignorant... concerning those who have fallen asleep.",
    "explanation": "The Thessalonians apparently feared that believers who died before the Parousia would miss it. Paul corrects this: the dead in Christ rise first; then living believers are caught up together with them. Death cannot separate from the promise."
  },
  {
    "id": 21031,
    "game": "Letters of the Apostles",
    "category": "Thessalonians",
    "difficulty": "Advanced",
    "question": "What error does 2 Thessalonians correct about 'the day of the Lord'?",
    "choices": [
      "That the day of the Lord had already passed before the letter was written",
      "That the day would never occur at all, making eschatology irrelevant",
      "The claim that the day of the Lord had already come — causing some to abandon normal responsibilities and live in disorderly idleness",
      "That only Paul himself would be alive to witness the Lord's return"
    ],
    "answer": 2,
    "reference": "2 Thessalonians 2:1-2",
    "verseText": "Not to be soon shaken in mind or troubled... as though the day of Christ had come.",
    "explanation": "The agitation was apparently caused by a false letter or teaching claiming the day had arrived. Paul shows that certain events must precede it. The practical effect of the false teaching was idleness — Paul addresses this in chapter 3."
  },
  {
    "id": 21032,
    "game": "Letters of the Apostles",
    "category": "Pastoral Epistles",
    "difficulty": "Advanced",
    "question": "What does Paul mean by 'sound doctrine' (hygiainousē didaskalia) in the Pastoral Epistles?",
    "choices": [
      "Doctrine that is emotionally satisfying and accessible to all listeners",
      "Orthodox doctrine derived from Greek philosophical sources",
      "Doctrine specifically approved and transmitted by the Jerusalem council",
      "Teaching that is spiritually health-producing, in contrast to diseased teaching that corrupts — the medical metaphor implies doctrine shapes the community's spiritual health"
    ],
    "answer": 3,
    "reference": "1 Timothy 1:10; 2 Timothy 4:3; Titus 1:9",
    "verseText": "According to the glorious gospel of the blessed God... committed to my trust.",
    "explanation": "The Greek word hygiainō means 'to be healthy.' Paul describes false teaching as a disease (gangrenous, 2 Tim 2:17) and sound teaching as spiritually life-giving. The pastoral concern is the community's health, not merely its intellectual accuracy."
  },
  {
    "id": 21033,
    "game": "Letters of the Apostles",
    "category": "Pastoral Epistles",
    "difficulty": "Advanced",
    "question": "What does 2 Timothy 3:16–17 claim about the nature and purpose of Scripture?",
    "choices": [
      "All Scripture is breathed out by God and is profitable for doctrine, reproof, correction, and training in righteousness, equipping the man of God for every good work",
      "That some portions are inspired and others merely helpful human documents",
      "That the inspiration of Scripture depends upon the faith and preparation of the reader",
      "That Paul's letters exceed the Old Testament in doctrinal authority"
    ],
    "answer": 0,
    "reference": "2 Timothy 3:16-17",
    "verseText": "All Scripture is given by inspiration of God, and is profitable for doctrine.",
    "explanation": "'Breathed out by God' (theopneustos) is active: Scripture is the product of the divine breath, not merely human writing that God approved afterward. Its fourfold purpose covers the full scope of formation: teaching, correcting, training."
  },
  {
    "id": 21034,
    "game": "Letters of the Apostles",
    "category": "Pastoral Epistles",
    "difficulty": "Advanced",
    "question": "What does Paul's charge to Timothy to 'preach the word; be instant in season and out of season' assume about the nature of ministry?",
    "choices": [
      "That preaching is secondary to administrative church management",
      "That faithful proclamation is urgent regardless of whether it is welcome or convenient — neither popularity nor rejection changes the obligation",
      "That Timothy should restrict preaching to times when the congregation is receptive",
      "That eloquent style and philosophical engagement matter more than content"
    ],
    "answer": 1,
    "reference": "2 Timothy 4:2",
    "verseText": "Preach the word! Be ready in season and out of season.",
    "explanation": "The charge assumes that cultural receptivity will shift ('the time will come when they will not endure sound doctrine') but the preacher's mandate does not shift with it. Faithfulness is measured by obedience, not response."
  },
  {
    "id": 21035,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What is the organizing theme of Hebrews that ties every section of the letter together?",
    "choices": [
      "The failure and worthlessness of the entire Old Testament revelation",
      "The abolition of all worship, temple, and sacrifice in the new covenant",
      "Jesus as the superior and final high priest who fulfills and surpasses every Old Testament type, institution, and covenant",
      "The priority of Gentile mission over ongoing engagement with Jewish concerns"
    ],
    "answer": 2,
    "reference": "Hebrews 4:14-16; 7:26-28",
    "verseText": "Seeing then that we have a great High Priest who has passed through the heavens.",
    "explanation": "The argument of Hebrews is consistently comparative: Jesus is better than angels (ch. 1-2), Moses (ch. 3), Joshua (ch. 4), Aaron (ch. 5-10). The 'better' is not rejection but fulfillment — shadows give way to the substance."
  },
  {
    "id": 21036,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What does 'once for all' (ephapax) emphasize about Christ's sacrifice in Hebrews 9–10?",
    "choices": [
      "That Christ was sacrificed once in history but this sacrifice repeats mystically in worship",
      "That Old Testament sacrifices were equally sufficient within their own era",
      "That Christ's death covered only sins committed before conversion",
      "Christ's sacrifice was singular, unrepeatable, and fully sufficient — eliminating any need for further offering or priestly mediation"
    ],
    "answer": 3,
    "reference": "Hebrews 10:10",
    "verseText": "We have been sanctified through the offering of the body of Jesus Christ once for all.",
    "explanation": "The Levitical priests stood daily offering sacrifices that could never take away sin (10:11). Christ sat down (10:12) — the priestly work is finished. The contrast between standing and sitting is the contrast between ongoing inadequacy and completed sufficiency."
  },
  {
    "id": 21037,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What is the function of Hebrews 11's 'hall of faith' within the letter's argument?",
    "choices": [
      "To demonstrate that OT believers lived by trusting promises not yet received — establishing faith as always forward-looking and persevering without sight",
      "To prove that faith alone without specific content is sufficient for salvation",
      "To argue that the saints had already received everything they hoped for during their lifetimes",
      "To rank the most important believers in Israel's history by their spiritual achievement"
    ],
    "answer": 0,
    "reference": "Hebrews 11:13",
    "verseText": "These all died in faith, not having received the promises, but having seen them afar off.",
    "explanation": "The hall of faith prepares for chapter 12's exhortation: if Abel, Noah, Abraham, and Moses endured by looking ahead, how much more should those who have now received what they anticipated? The saints' faith shames any recoiling under pressure."
  },
  {
    "id": 21038,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What does Hebrews 13:8 ('Jesus Christ is the same yesterday, today, and forever') accomplish in its immediate context?",
    "choices": [
      "It is an abstract timeless philosophical claim about the eternal nature of the divine",
      "It provides a theological anchor against novelty — the changeless Christ is the reason not to be carried away by strange and varied teachings",
      "It proves Christ never changed his mind on any position he expressed during the incarnation",
      "It functions as a liturgical formula with no argumentative connection to surrounding material"
    ],
    "answer": 1,
    "reference": "Hebrews 13:8-9",
    "verseText": "Jesus Christ is the same yesterday, today, and forever. Do not be carried about with various and strange doctrines.",
    "explanation": "The verse is sandwiched between a call to remember faithful leaders (v.7) and a warning about strange doctrines (v.9). The unchanging Christ provides stability against doctrinal novelty — new teachings have no advantage over the apostolic gospel."
  },
  {
    "id": 21039,
    "game": "Letters of the Apostles",
    "category": "James",
    "difficulty": "Advanced",
    "question": "How does James define 'pure and undefiled religion' in James 1:27?",
    "choices": [
      "Correct doctrinal confession and regular attendance at worship gatherings",
      "Regular temple sacrifice and the annual observance of festivals",
      "Caring for orphans and widows in their distress and keeping oneself unstained from the world — ethics and purity united",
      "Missionary activity and evangelism as the primary expression of faith"
    ],
    "answer": 2,
    "reference": "James 1:27",
    "verseText": "Pure and undefiled religion before God... is this: to visit orphans and widows in their trouble.",
    "explanation": "James holds together what is often separated: practical mercy to the vulnerable and personal holiness before the world. Neither activism without purity nor piety without action qualifies as the religion God recognizes."
  },
  {
    "id": 21040,
    "game": "Letters of the Apostles",
    "category": "James",
    "difficulty": "Advanced",
    "question": "What does James mean by 'faith without works is dead' in James 2?",
    "choices": [
      "That works earn justification alongside faith in a cooperative scheme",
      "That Paul's theology of faith is inadequate and needs supplementing",
      "That works alone are sufficient for salvation without faith as their basis",
      "Genuine saving faith necessarily produces works — a faith that produces nothing is not real faith, not faith plus works replacing faith"
    ],
    "answer": 3,
    "reference": "James 2:17, 26",
    "verseText": "Thus also faith by itself, if it does not have works, is dead.",
    "explanation": "James is not contradicting Paul but addressing a different problem: not 'do I need works to be justified?' but 'is my claimed faith genuine?' The test of real faith is its fruit. Dead faith is not faith at all — it is an empty claim."
  },
  {
    "id": 21041,
    "game": "Letters of the Apostles",
    "category": "James",
    "difficulty": "Advanced",
    "question": "What is James's primary concern about the tongue in chapter 3?",
    "choices": [
      "The tongue's disproportionate power to corrupt — it is a small member that sets great fires, revealing that an uncontrolled tongue signals an uncontrolled heart",
      "That believers should reduce their volume of public speech",
      "That Greek-style rhetoric is spiritually dangerous for Jewish Christians",
      "That the gift of prophecy should replace ordinary speech in the community"
    ],
    "answer": 0,
    "reference": "James 3:5-6",
    "verseText": "Even so the tongue is a little member and boasts great things. See how great a forest a little fire kindles!",
    "explanation": "James piles up images — the bit, the rudder, the spark — to show small causes producing enormous effects. No human can tame the tongue (3:8), which means the speech problem is rooted in the heart and only divine transformation can address it."
  },
  {
    "id": 21042,
    "game": "Letters of the Apostles",
    "category": "1 Peter",
    "difficulty": "Advanced",
    "question": "What does Peter mean in 1 Peter 2:9 by calling believers 'a chosen generation, a royal priesthood, a holy nation, His own special people'?",
    "choices": [
      "That these titles replace Israel's identity entirely with no continuity",
      "Believers now corporately bear the identity Israel was called to embody, with a view to declaring God's excellencies — the mission remains the same",
      "That physical descent from Israel is required to bear these titles properly",
      "That only ordained church officers carry this collective identity"
    ],
    "answer": 1,
    "reference": "1 Peter 2:9",
    "verseText": "But you are a chosen generation, a royal priesthood, a holy nation, His own special people.",
    "explanation": "Peter applies four Exodus/Sinai titles (from Exodus 19:5-6 and Isaiah 43:20-21) to the believing community. This is not replacement but fulfillment — the purpose ('that you may proclaim the praises') remains identical to Israel's original calling."
  },
  {
    "id": 21043,
    "game": "Letters of the Apostles",
    "category": "1 Peter",
    "difficulty": "Advanced",
    "question": "What does Peter mean in 1 Peter 4:12 by saying the 'fiery trial' is 'not strange'?",
    "choices": [
      "That literal fire would come upon the churches in Asia Minor in the near future",
      "That persecution indicates a deficiency of faith requiring urgent correction",
      "Suffering for Christ is expected — it is participation in Christ's own pattern and a test of authentic faith, not a sign of abandonment",
      "That trials always indicate divine punishment for some unaddressed sin"
    ],
    "answer": 2,
    "reference": "1 Peter 4:12-13",
    "verseText": "Do not think it strange concerning the fiery trial which is to try you, as though some strange thing happened to you.",
    "explanation": "The word 'strange' (xenos) means foreign, alien. Peter says suffering for Christ should not surprise believers — rejoicing is the proper response because suffering joins them to Christ's sufferings and anticipates sharing His glory."
  },
  {
    "id": 21044,
    "game": "Letters of the Apostles",
    "category": "2 Peter",
    "difficulty": "Advanced",
    "question": "What two dangers does 2 Peter especially warn against?",
    "choices": [
      "Political compromise with Roman imperial power and economic exploitation of congregations",
      "Immorality among Gentile converts and chronic poverty in Jewish Christian communities",
      "Legalism requiring Gentile circumcision and antinomianism rejecting all moral standards",
      "False teachers who distort the faith for personal gain, and mockers who scoff at Christ's promised return"
    ],
    "answer": 3,
    "reference": "2 Peter 2:1; 3:3-4",
    "verseText": "There will be false teachers among you... and scoffers will come in the last days.",
    "explanation": "2 Peter 2 addresses false teachers (modeled on OT examples of judgment: angels, Noah, Lot, Balaam) while chapter 3 addresses scoffers who use the apparent delay of Christ's return to deny it will happen. Both threats distort the apostolic deposit."
  },
  {
    "id": 21045,
    "game": "Letters of the Apostles",
    "category": "1 John",
    "difficulty": "Advanced",
    "question": "What does 1 John 1:5–7 establish as the test of genuine fellowship with God?",
    "choices": [
      "Walking in the light — that one's life is characterized by transparency, truth, and moral integrity, not darkness",
      "Claiming to have no sin, thereby demonstrating spiritual advancement",
      "Speaking in tongues as the initial evidence of the Spirit's presence",
      "Possessing secret spiritual knowledge unavailable to ordinary believers"
    ],
    "answer": 0,
    "reference": "1 John 1:6-7",
    "verseText": "If we say that we have fellowship with Him, and walk in darkness, we lie.",
    "explanation": "John's structure is a series of 'if we say' claims followed by reality checks. Fellowship with the God who is light cannot coexist with walking in darkness — the claim is self-contradictory. Walking in light enables both fellowship with God and with one another."
  },
  {
    "id": 21046,
    "game": "Letters of the Apostles",
    "category": "1 John",
    "difficulty": "Advanced",
    "question": "What does John mean by 'abiding in Christ' as a recurring theme in 1 John?",
    "choices": [
      "Mystical union requiring physical withdrawal from the world into contemplative isolation",
      "A life in ongoing relationship with Christ that produces obedience, love for brothers, and growing confidence before God at His coming",
      "Periodic intense spiritual retreats as the primary discipline of Christian growth",
      "Formal church membership and regular participation in the sacraments"
    ],
    "answer": 1,
    "reference": "1 John 2:27-28; 4:13",
    "verseText": "Abide in Him, that when He appears, we may have confidence.",
    "explanation": "'Abiding' in John is not passive but the active life of those who remain in relationship with Christ — characterized by obedience to his commands (2:3-6), love of brothers (4:12), and confidence rather than shame at his appearing."
  },
  {
    "id": 21047,
    "game": "Letters of the Apostles",
    "category": "Jude",
    "difficulty": "Advanced",
    "question": "What does Jude mean by 'contending earnestly for the faith once for all delivered to the saints'?",
    "choices": [
      "Fighting for personally validated spiritual experiences",
      "Engaging in academic disputation with Greek philosophers in public forums",
      "Actively defending the body of truth given through the apostles against those who would distort or silently discard it",
      "Maintaining ceremonial purity against contamination from Gentile practices"
    ],
    "answer": 2,
    "reference": "Jude 1:3",
    "verseText": "Contend earnestly for the faith which was once for all delivered to the saints.",
    "explanation": "'Once for all' (hapax) is significant — the faith is not being progressively revised but was definitively delivered. The contending is not about personal opinion but the apostolic deposit. Jude had planned to write on salvation but instead had to address an emergency."
  },
  {
    "id": 21048,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "What does the shared emphasis on suffering across the epistles most clearly teach?",
    "choices": [
      "That suffering indicates divine abandonment requiring urgent repentance",
      "That Christians should avoid all situations and vocations that might produce hardship",
      "That suffering is always divine punishment for a specific personal sin",
      "Suffering is the expected experience of those who belong to Christ in a world that rejected Him — not an anomaly but a participation in His pattern"
    ],
    "answer": 3,
    "reference": "1 Peter 4:12-13; Philippians 1:29; Romans 8:17",
    "verseText": "For to you it has been granted on behalf of Christ, not only to believe in Him, but also to suffer for His sake.",
    "explanation": "Paul, Peter, and James all treat suffering as expected. The consistent pattern is Christological: Christ suffered before being glorified; the servant is not above the master. Suffering is not a problem to be explained away but a fellowship to be entered."
  },
  {
    "id": 21049,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "What is the most consistent ecclesiology across the New Testament epistles?",
    "choices": [
      "The church is a Spirit-constituted body built on apostolic teaching, characterized by love, holiness, and mutual service under Christ's headship",
      "The church is primarily a political institution with governance structures as its defining feature",
      "Individual private faith without community is entirely sufficient for the Christian life",
      "Church administration and governance structures are the primary concern of the letters"
    ],
    "answer": 0,
    "reference": "Ephesians 2:19-22; 1 Corinthians 12:12-13; Hebrews 10:24-25",
    "verseText": "Having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.",
    "explanation": "Despite different contexts (Jewish, Greek, mixed), the epistles consistently present the church as a gathered community under apostolic teaching, constituted by the Spirit, and ordered by love and mutual accountability — not a collection of private relationships with God."
  },
  {
    "id": 21050,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "How does the concept 'in Christ' (en Christō) function across Paul's letters?",
    "choices": [
      "As a spatial metaphor simply meaning active church attendance and participation",
      "As the foundational relational location defining the believer's identity, standing, and destiny — every spiritual blessing flows from being united to Christ",
      "As a synonym for the act of baptism, marking the moment of conversion only",
      "As a phrase limited in meaning to Jewish Christians already familiar with covenant theology"
    ],
    "answer": 1,
    "reference": "Ephesians 1:3; Romans 8:1; Galatians 2:20",
    "verseText": "Blessed be the God... who has blessed us with every spiritual blessing in the heavenly places in Christ.",
    "explanation": "'In Christ' appears over 160 times in Paul's letters. It is not merely a preposition but a theological location: union with Christ means the believer participates in his death, resurrection, righteousness, and inheritance. It is the most basic description of Christian existence."
  },
  {
    "id": 21051,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Romans 12:1's phrase 'reasonable service' (logikēn latreian) suggest about Christian worship?",
    "choices": [
      "That worship is primarily intellectual and requires no bodily engagement",
      "That Paul rejected all formal worship practices in the new covenant era",
      "The entirety of life presented to God is itself the logical response to mercy — worship encompasses all of existence, not merely ritual moments",
      "That sacrifice was completely abolished and replaced by moral effort"
    ],
    "answer": 2,
    "reference": "Romans 12:1",
    "verseText": "Present your bodies a living sacrifice... which is your reasonable service.",
    "explanation": "Logikēn (from logos) means 'rational' or 'logical' — given who God is and what he has done, offering one's entire existence is the only sensible response. The body is included because whole-life worship cannot stop at the neck."
  },
  {
    "id": 21052,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul's ruling in 1 Corinthians 5 about the incestuous man reveal about his understanding of church discipline?",
    "choices": [
      "That maximum tolerance should be maintained to preserve congregational size and relationships",
      "That private sin is no concern of the gathered church community",
      "That Roman civil courts rather than the church should handle such moral matters",
      "The holiness and credible witness of the whole community require decisive action — tolerance of open sin corrupts the whole and fails the sinner"
    ],
    "answer": 3,
    "reference": "1 Corinthians 5:6-7",
    "verseText": "Do you not know that a little leaven leavens the whole lump?",
    "explanation": "Paul uses the Passover leaven metaphor: the community's holiness is corrupted by harboring boasted immorality. Discipline serves both the community's integrity and — ultimately — the offender's soul (5:5: 'that his spirit may be saved')."
  },
  {
    "id": 21053,
    "game": "Letters of the Apostles",
    "category": "1 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul say makes the Lord's Supper invalid as practiced in Corinth in 1 Corinthians 11?",
    "choices": [
      "Failure to discern the body — eating in self-serving division rather than communal remembrance of Christ's death — with some gorging while others go hungry",
      "Using leavened rather than unleavened bread as the physical element",
      "Holding the supper on the wrong day of the week",
      "Allowing women to participate in the observance on equal terms with men"
    ],
    "answer": 0,
    "reference": "1 Corinthians 11:20-22",
    "verseText": "Therefore when you come together in one place, it is not to eat the Lord's Supper.",
    "explanation": "Paul's critique is social and theological: the wealthy arrive early, eat and drink their fill, while the poor arrive to find nothing. This class division contradicts the gospel the supper proclaims. 'Discerning the body' means recognizing both Christ's body and the church as his body."
  },
  {
    "id": 21054,
    "game": "Letters of the Apostles",
    "category": "2 Corinthians",
    "difficulty": "Advanced",
    "question": "What does Paul's 'thorn in the flesh' prayer in 2 Corinthians 12 teach about prayer and God's sovereignty?",
    "choices": [
      "That persistent prayer always changes God's stated answer eventually",
      "God's purposes may be better served through an unanswered petition than through relief — the refusal of the request was itself an act of grace",
      "That the thorn was a demonic attack entirely outside God's control",
      "That Paul's faith was insufficient to receive the healing he sought"
    ],
    "answer": 1,
    "reference": "2 Corinthians 12:8-9",
    "verseText": "Three times I pleaded with the Lord to take it away from me. But He said to me, 'My grace is sufficient for you.'",
    "explanation": "Three serious prayers — and a 'no.' Paul received instead an explanation: the thorn served to keep him humble (12:7) and the refusal became the occasion for the greatest theological insight: power and weakness are not opposites in God's economy."
  },
  {
    "id": 21055,
    "game": "Letters of the Apostles",
    "category": "Galatians",
    "difficulty": "Advanced",
    "question": "What does Paul mean by 'another gospel' in Galatians 1:6–9?",
    "choices": [
      "A different biographical account of Jesus' life and ministry",
      "Differences in preaching style or cultural presentation of the same truth",
      "Any gospel that adds human religious merit or observance to faith as a condition of justification — it is not really another gospel but a distortion",
      "Teachings about justification that came through other recognized apostles"
    ],
    "answer": 2,
    "reference": "Galatians 1:7",
    "verseText": "Which is not another; but there are some who trouble you and want to pervert the gospel of Christ.",
    "explanation": "Paul's grammar is careful: 'not another of the same kind' — a gospel plus works is not a variant but a perversion. The strength of his language (double curse, 1:8-9) reflects his conviction that the gospel's integrity is the gospel's identity."
  },
  {
    "id": 21056,
    "game": "Letters of the Apostles",
    "category": "Ephesians",
    "difficulty": "Advanced",
    "question": "What does the household code in Ephesians 5–6 ground in theological reality rather than mere cultural convention?",
    "choices": [
      "Roman customs of household management adapted for Christian use",
      "A Platonic hierarchical social philosophy baptized with Christian language",
      "Temple priestly hierarchy transferred into domestic settings",
      "The relationship of wives-husbands as a picture of Christ and the church, children-parents in the Lord, and servants-masters with an eternal accountability"
    ],
    "answer": 3,
    "reference": "Ephesians 5:31-32",
    "verseText": "This is a great mystery, but I speak concerning Christ and the church.",
    "explanation": "Paul's household instructions are not sociological but Christological — the husband-wife relationship is a living display of Christ's love for the church. The 'because' and 'as' constructions throughout tie every command to a theological reality rather than a cultural norm."
  },
  {
    "id": 21057,
    "game": "Letters of the Apostles",
    "category": "Philippians",
    "difficulty": "Advanced",
    "question": "What does Philippians 4:11 reveal about contentment and how it is acquired?",
    "choices": [
      "Contentment is learned through experience, not a natural state — Paul says he has 'learned' it through both abundance and need, grounded in Christ's strength",
      "Contentment is the natural disposition of anyone who correctly believes the gospel",
      "Contentment comes automatically with sufficient material provision",
      "Contentment is a gift that bypasses the ordinary process of formation"
    ],
    "answer": 0,
    "reference": "Philippians 4:11-13",
    "verseText": "I have learned, in whatever state I am, to be content.",
    "explanation": "'Learned' (memathēka) implies a process — contentment is not instinctive but cultivated through experience. Paul has been through both poverty and abundance and discovered that neither generates contentment; only Christ's sustaining strength does."
  },
  {
    "id": 21058,
    "game": "Letters of the Apostles",
    "category": "Colossians",
    "difficulty": "Advanced",
    "question": "What does 'Christ in you, the hope of glory' mean in Colossians 1:27?",
    "choices": [
      "A mystical absorption into the divine being that erases personal identity",
      "The indwelling presence of Christ is itself the foundation and guarantee of eschatological hope — the mystery is Christ among the Gentiles as well as Jews",
      "A political reversal of Roman dominance coming in Paul's own lifetime",
      "That the Colossians would personally live to witness the second coming"
    ],
    "answer": 1,
    "reference": "Colossians 1:27",
    "verseText": "Christ in you, the hope of glory.",
    "explanation": "The mystery (previously hidden, now revealed) is that Christ — the glory of God — now dwells in Gentiles as well as Jews. This indwelling is the guarantee of the future glory: the same Christ who is now within will be the basis of the final transformation."
  },
  {
    "id": 21059,
    "game": "Letters of the Apostles",
    "category": "Pastoral Epistles",
    "difficulty": "Advanced",
    "question": "What qualifications does 1 Timothy 3 establish for overseers, and what do they primarily concern?",
    "choices": [
      "Primarily wealth, education, and philosophical training as marks of social credibility",
      "Supernatural gifts above all else, especially prophecy and healings",
      "Above reproach in character, household management, and community reputation — moral qualities take precedence over academic credentials or supernatural gifts",
      "Levitical descent or recognized family lineage within Israel"
    ],
    "answer": 2,
    "reference": "1 Timothy 3:1-7",
    "verseText": "A bishop then must be blameless, the husband of one wife, temperate, sober-minded, of good behavior.",
    "explanation": "The list in 1 Timothy 3 is almost entirely character-based — the only skill mentioned is teaching (v.2). The emphasis on household management (v.4-5) connects private virtue to public trust: how one leads a family reveals how one will lead a church."
  },
  {
    "id": 21060,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What does Hebrews 4:12 say about the word of God?",
    "choices": [
      "Useful for encouraging the discouraged but not for conveying divine judgment",
      "Its power depends on the spiritual preparation and faith of those who receive it",
      "It functions only through ordained ministers who have authority to interpret it",
      "Living and active, sharper than any two-edged sword, able to penetrate and discern the thoughts and intentions of the heart"
    ],
    "answer": 3,
    "reference": "Hebrews 4:12",
    "verseText": "For the word of God is living and powerful, and sharper than any two-edged sword.",
    "explanation": "The context is warning: Hebrews has just cited Psalm 95 about the wilderness generation's hardening. The word that convicts is unstoppable — it gets past every defense. This is both terrifying for those who resist and stabilizing for those who submit."
  },
  {
    "id": 21061,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What does 'looking to Jesus, the author and perfecter of faith' in Hebrews 12:2 call suffering believers to do?",
    "choices": [
      "Fix their gaze on the one who ran the race to completion — his endurance of the cross for the joy set before him is the model and motivation for their own endurance",
      "Engage primarily in systematic theological study of the person of Christ",
      "Seek repeated visions of the risen Christ as sources of personal strength",
      "Trust in the surrounding Christian community as the primary support for endurance"
    ],
    "answer": 0,
    "reference": "Hebrews 12:2",
    "verseText": "Looking unto Jesus, the author and finisher of our faith.",
    "explanation": "The word for 'author' (archēgon) also means pioneer or trailblazer — Jesus has gone before. 'Perfecter' (teleiōtēn) means he brought faith to its complete expression by enduring to the end. The call is to look at him, not inward at one's own resources."
  },
  {
    "id": 21062,
    "game": "Letters of the Apostles",
    "category": "James",
    "difficulty": "Advanced",
    "question": "What does James identify as the root of conflict among believers in James 4:1?",
    "choices": [
      "Theological disagreements about the interpretation of Scripture",
      "Desires at war within — craving what one does not have leads to fighting and quarreling rather than asking God",
      "Apostolic authority disputes imported from the Jerusalem council",
      "Economic inequality in the congregation producing resentment"
    ],
    "answer": 1,
    "reference": "James 4:1",
    "verseText": "Where do wars and fights come from among you? Do they not come from your desires for pleasure that war in your members?",
    "explanation": "James traces social conflict to internal disorder. External disputes are symptoms of internal passions (hēdonōn — pleasures) at war within the person. The solution is not better conflict resolution techniques but submission to God (4:7) and cleansed hearts (4:8)."
  },
  {
    "id": 21063,
    "game": "Letters of the Apostles",
    "category": "1 Peter",
    "difficulty": "Advanced",
    "question": "What does Peter mean in 1 Peter 5:8 by 'Be sober, be vigilant; because your adversary the devil walks about like a roaring lion'?",
    "choices": [
      "That demonic possession is the primary threat to the Christian life",
      "That suffering proves believers are under satanic attack without divine protection",
      "Spiritual danger is real and active — the believer's response must be alert sobriety, not passive comfort, combined with steadfast faith",
      "That vigilance means avoiding all contact with the surrounding non-Christian world"
    ],
    "answer": 2,
    "reference": "1 Peter 5:8-9",
    "verseText": "Your adversary the devil walks about like a roaring lion, seeking whom he may devour.",
    "explanation": "The context is persecuted believers in Asia Minor. Peter neither dismisses the threat nor counsels panic — instead: sobriety (clear-headedness), vigilance (alertness), and steadfast resistance grounded in faith. The suffering is shared by all believers worldwide (v.9)."
  },
  {
    "id": 21064,
    "game": "Letters of the Apostles",
    "category": "2 Peter",
    "difficulty": "Advanced",
    "question": "What does 2 Peter 1:16–21 combine to establish the authority of the apostolic witness?",
    "choices": [
      "Personal spiritual feeling validated by church consensus",
      "Philosophical argument from first principles combined with natural theology",
      "Apostolic credentials established by succession from the Jerusalem council",
      "Eyewitness experience of Christ's majesty at the Transfiguration plus the prophetic word now confirmed — both stand against cunningly devised fables"
    ],
    "answer": 3,
    "reference": "2 Peter 1:16-19",
    "verseText": "For we did not follow cunningly devised fables when we made known to you the power and coming of our Lord Jesus Christ.",
    "explanation": "Peter's two witnesses: what he saw (the Transfiguration, 1:16-18) and what the prophetic Scriptures declare (1:19-21). Both are objective — neither depends on subjective experience alone. The prophetic word is 'more sure' (v.19) because it was God-breathed through human agents."
  },
  {
    "id": 21065,
    "game": "Letters of the Apostles",
    "category": "1 John",
    "difficulty": "Advanced",
    "question": "What is the 'spirit of antichrist' John identifies in 1 John 4:2–3?",
    "choices": [
      "Any spirit that denies that Jesus Christ has come in the flesh — the denial of the genuine incarnation is the defining mark of the antichrist spirit",
      "Political opposition to Christianity from the Roman imperial system",
      "General unbelief and moral failure among those outside the church",
      "The spirit of immorality that characterized Gnostic groups in Ephesus"
    ],
    "answer": 0,
    "reference": "1 John 4:2-3",
    "verseText": "Every spirit that does not confess that Jesus Christ has come in the flesh is not of God.",
    "explanation": "The test is Christological: the genuine incarnation — God truly becoming flesh — is the dividing line. This addresses proto-Gnostic docetism (Christ only appeared human). The test is not generic belief in God but specific confession of the incarnate Son."
  },
  {
    "id": 21066,
    "game": "Letters of the Apostles",
    "category": "1 John",
    "difficulty": "Advanced",
    "question": "What does 3 John's account of Diotrephes reveal about church dynamics in the apostolic era?",
    "choices": [
      "That apostolic authority was universally accepted without challenge in the early church",
      "Love of preeminence and refusal of apostolic authority creates destructive disorder — Diotrephes rejects the elder's letters and expels those who receive traveling brothers",
      "That hospitality to traveling missionaries was considered unimportant",
      "That church governance was entirely democratic without recognized leadership"
    ],
    "answer": 1,
    "reference": "3 John 1:9-10",
    "verseText": "Diotrephes, who loves to have the preeminence among them, does not receive us.",
    "explanation": "3 John is a window into real church life: a local leader who refuses to acknowledge apostolic oversight, refuses to welcome traveling missionaries, and expels those who do. Gaius is commended as the counter-example. Love of preeminence is the root vice."
  },
  {
    "id": 21067,
    "game": "Letters of the Apostles",
    "category": "Jude",
    "difficulty": "Advanced",
    "question": "How does Jude's use of the angels, Sodom, and Cain, Balaam, and Korah function in his argument?",
    "choices": [
      "To prove that extra-biblical Jewish literature is equally authoritative as Scripture",
      "To introduce speculative apocalyptic material beyond what the Old Testament says",
      "To establish historical precedent: God judges the ungodly — the false teachers now threatening the church belong to the same condemned pattern of rebellion and corruption",
      "To identify specific contemporary heretics by giving them symbolic biblical names"
    ],
    "answer": 2,
    "reference": "Jude 1:5-11",
    "verseText": "Woe to them! For they have gone in the way of Cain, have run greedily in the error of Balaam for profit.",
    "explanation": "Jude arrays three pairs (angels/Sodom in vv.6-7, Cain/Balaam/Korah in v.11) as precedents of judgment. The structure argues typologically: these patterns of rebellion have always been judged, and the intruders now exhibit the same patterns — the outcome is certain."
  },
  {
    "id": 21068,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "Why do Paul, Peter, and John all emphasize love as the governing quality of Christian community?",
    "choices": [
      "As a cultural adaptation to Greek ideals of friendship and community harmony",
      "To soften the harder ethical demands of the epistles for easier popular reception",
      "Because love replaces all doctrinal requirements and makes theological precision unnecessary",
      "Because love summarizes the law, flows from the nature of God who is love, and was the distinguishing mark Jesus himself gave His people as their identity before the world"
    ],
    "answer": 3,
    "reference": "John 13:35; Romans 13:10; 1 John 4:8",
    "verseText": "By this all will know that you are My disciples, if you have love for one another.",
    "explanation": "The convergence is not accidental. Paul (Rom 13, 1 Cor 13), Peter (1 Pet 1:22, 4:8), and John (1 Jn 4) all ground love in the character and act of God — his love for us is the only adequate source for genuine love among believers."
  },
  {
    "id": 21069,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "What does the consistent concern about false teachers across 2 Peter, 1 John, Jude, and the Pastorals suggest about the late apostolic period?",
    "choices": [
      "The apostles recognized that as they neared death the church was entering a phase requiring vigilant guardianship of the apostolic deposit against subtle distortion",
      "That orthodoxy was impossibly uncertain and no reliable theological tradition existed",
      "That all theological teaching in this period was too fluid to provide a stable foundation",
      "That the New Testament canon was still being negotiated with no agreed boundaries"
    ],
    "answer": 0,
    "reference": "2 Timothy 1:14; 1 John 4:1; Jude 1:3",
    "verseText": "Guard the good deposit that was entrusted to you — guard it with the help of the Holy Spirit.",
    "explanation": "The convergence of multiple authors on this same concern reveals a shared apostolic awareness: the gospel is a specific content that can be distorted, and the church's health depends on active faithfulness to the received tradition — not innovation."
  },
  {
    "id": 21070,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "What does the epistles' consistent use of the word 'saints' (hagioi, holy ones) reveal about how early believers understood their identity?",
    "choices": [
      "That they had achieved moral perfection and were distinguished by it from ordinary people",
      "They were a people set apart by God through Christ — belonging to him and therefore called to reflect his character, not perfect but definitively consecrated",
      "That the title applied only to recognized martyrs who died for their faith",
      "That it was a title of honor reserved for recognized leaders and teachers"
    ],
    "answer": 1,
    "reference": "Ephesians 1:1; Romans 1:7; Philippians 1:1",
    "verseText": "To all the saints in Christ Jesus who are in Philippi.",
    "explanation": "'Saints' is never used in the NT of a select spiritual elite but of all believers in a congregation. The word is the adjective of holiness (hagios) — they are 'holy ones' not because of achievement but because of belonging: set apart by God, for God."
  },
  {
    "id": 21071,
    "game": "Letters of the Apostles",
    "category": "Romans",
    "difficulty": "Advanced",
    "question": "What does Paul's description of the Spirit's intercession in Romans 8:26 teach about prayer?",
    "choices": [
      "That believers are excused from praying when they feel spiritually weak",
      "That vocal prayer in tongues is the only valid form of prayer according to Paul",
      "The Spirit intercedes with groanings too deep for words when believers do not know how to pray — the Spirit's prayer covers what human language cannot reach",
      "That the Spirit's prayer replaces the need for believers to pray themselves"
    ],
    "answer": 2,
    "reference": "Romans 8:26-27",
    "verseText": "The Spirit also helps in our weaknesses. For we do not know what we should pray for as we ought.",
    "explanation": "This is a profound pastoral comfort: ignorance in prayer is not disqualifying. The Spirit who knows both our needs and God's will bridges the gap between our weakness and God's purpose. The groaning is not a failure of prayer but its deepest form."
  },
  {
    "id": 21072,
    "game": "Letters of the Apostles",
    "category": "Ephesians",
    "difficulty": "Advanced",
    "question": "What does Ephesians 1:3–14 describe as the scope of God's salvific purpose in Christ?",
    "choices": [
      "A contingent plan that responded to humanity's fall with an improvised solution",
      "A purpose limited to Israel that is now extended secondarily to Gentiles",
      "A general divine benevolence that applies automatically to all created beings",
      "Election before creation, redemption through Christ's blood, sealing by the Spirit — the entire scope of salvation from eternity past to eschatological inheritance"
    ],
    "answer": 3,
    "reference": "Ephesians 1:4, 7, 13",
    "verseText": "He chose us in Him before the foundation of the world, that we should be holy and without blame before Him.",
    "explanation": "The passage runs from pre-temporal election (v.4) through historical redemption (v.7) to Spirit-sealing as a guarantee of future inheritance (v.13-14). This trinitarian structure of salvation (Father's election, Son's redemption, Spirit's sealing) spans all time."
  },
  {
    "id": 21073,
    "game": "Letters of the Apostles",
    "category": "Philippians",
    "difficulty": "Advanced",
    "question": "In Philippians 3:20–21, what does Paul describe as the basis for Christian hope in the face of present citizenship in a hostile world?",
    "choices": [
      "Our citizenship is in heaven, from which we await a Savior who will transform our lowly bodies to be like his glorious body",
      "That earthly political engagement is the primary expression of the hope of the gospel",
      "That the heavenly home means withdrawal from all earthly responsibilities",
      "That the resurrection body is entirely spiritual with no physical continuity"
    ],
    "answer": 0,
    "reference": "Philippians 3:20-21",
    "verseText": "Our citizenship is in heaven, from which we also eagerly wait for the Savior.",
    "explanation": "The Philippians lived in a Roman colony where Roman citizenship was a source of honor. Paul inverts this: heavenly citizenship is the decisive identity. But the hope is embodied — Christ 'will transform our lowly body' — not a flight from matter but its transformation."
  },
  {
    "id": 21074,
    "game": "Letters of the Apostles",
    "category": "Colossians",
    "difficulty": "Advanced",
    "question": "What does Colossians 3:1–4 mean by 'seek the things above' following the resurrection logic of chapter 2?",
    "choices": [
      "That physical withdrawal from the world into contemplative life is the highest Christian calling",
      "Since believers have been raised with Christ, their orientation, affections, and thinking should reflect the realm of Christ's lordship — not asceticism or earthly passions",
      "That material concerns are sinful and believers should have no engagement with the physical world",
      "That 'things above' refers to the heavenly powers and spiritual intermediaries of the Colossian philosophy"
    ],
    "answer": 1,
    "reference": "Colossians 3:1-3",
    "verseText": "If then you were raised with Christ, seek those things which are above.",
    "explanation": "Paul grounds ethics in the indicative: you have been raised (past fact). Therefore seek (present orientation). The 'above' does not mean otherworldly escapism but alignment with the realm where Christ reigns — which has direct ethical implications below (3:5-17)."
  },
  {
    "id": 21075,
    "game": "Letters of the Apostles",
    "category": "Hebrews",
    "difficulty": "Advanced",
    "question": "What does Hebrews use Psalm 110:4 ('You are a priest forever according to the order of Melchizedek') to establish about Jesus' priesthood?",
    "choices": [
      "That Jesus belonged biologically to the tribe of Levi through Mary",
      "That the Aaronic priesthood and Christ's priesthood are equal in dignity and function",
      "A priesthood not based on Levitical descent but on the power of an indestructible life — permanent, superior, and requiring only one sacrifice",
      "That Old Testament priests were aware they were types of Christ and preached accordingly"
    ],
    "answer": 2,
    "reference": "Hebrews 7:15-17",
    "verseText": "He has become a priest, not according to the law of a fleshly commandment, but according to the power of an endless life.",
    "explanation": "The OT priests died and were replaced — their priesthood was interrupted by mortality. Jesus' priesthood is permanent because he is indestructible. Psalm 110:4's 'forever' cannot refer to Aaron's line; only an eternally living priest can hold it permanently."
  },
  {
    "id": 21076,
    "game": "Letters of the Apostles",
    "category": "James",
    "difficulty": "Advanced",
    "question": "What wisdom does James 1:19–20 offer about the relationship between speech, listening, and anger?",
    "choices": [
      "That anger is never appropriate for believers under any circumstances",
      "That verbal expression of anger is a necessary emotional health practice",
      "That the tongue should only be used for formal religious speech and prayer",
      "Be quick to listen, slow to speak, slow to anger — human anger does not produce the righteousness God requires, making controlled listening more productive than reactive speech"
    ],
    "answer": 3,
    "reference": "James 1:19-20",
    "verseText": "Let every man be swift to hear, slow to speak, slow to wrath; for the wrath of man does not produce the righteousness of God.",
    "explanation": "James reverses typical human instincts: we are quick to speak and slow to listen. His rationale is practical and theological: reactive human anger cannot achieve the righteous outcome God desires. Listening is the discipline that opens space for wisdom to act."
  },
  {
    "id": 21077,
    "game": "Letters of the Apostles",
    "category": "1 Peter",
    "difficulty": "Advanced",
    "question": "What does Peter mean in 1 Peter 1:6–7 by trials being 'the testing of your faith' that is more precious than gold?",
    "choices": [
      "Faith that survives testing is proven genuine — like refined gold, tested faith is of greater value than untested claims because it has demonstrated its reality",
      "That suffering is intrinsically valuable and should be sought as a spiritual discipline",
      "That God tests believers' faith because he does not yet know whether it is genuine",
      "That gold in the first century was the highest comparison available, with no deeper meaning"
    ],
    "answer": 0,
    "reference": "1 Peter 1:7",
    "verseText": "The genuineness of your faith, being much more precious than gold that perishes, though it is tested by fire.",
    "explanation": "The gold metaphor is precise: fire doesn't create gold but reveals whether what appeared to be gold is genuine. Trials don't create faith but demonstrate whether what appeared to be faith is real. The result of tested faith is 'praise, glory, and honor at the revelation of Jesus Christ.'"
  },
  {
    "id": 21078,
    "game": "Letters of the Apostles",
    "category": "2 Peter",
    "difficulty": "Advanced",
    "question": "What does 2 Peter 3:9 reveal about the apparent delay of Christ's return?",
    "choices": [
      "That the return was incorrectly predicted and has been permanently indefinitely postponed",
      "The Lord is not slow as humans count slowness but is patient — his timing allows for repentance rather than reflecting powerlessness or forgetfulness",
      "That God's perception of time means the return is not a literal future event",
      "That the mockers' point is valid and the delay proves the promise will not be kept"
    ],
    "answer": 1,
    "reference": "2 Peter 3:9",
    "verseText": "The Lord is not slack concerning His promise, as some count slackness, but is longsuffering toward us.",
    "explanation": "Peter reframes the delay: not as failure but as grace. The patience of God that looks like delay is the space for repentance. Verse 8 (a day as a thousand years) is not mathematical but qualitative — God's temporal perspective is not impatience's."
  },
  {
    "id": 21079,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "What does the 'already and not yet' tension throughout the epistles most fundamentally describe about the believer's present situation?",
    "choices": [
      "That salvation is either entirely present or entirely future — the letters do not hold both together",
      "That Paul was confused about eschatology and contradicted himself on this point",
      "Believers genuinely participate in Christ's resurrection life now while still awaiting the consummation of all things — the age to come has begun but has not yet fully arrived",
      "That the kingdom has not arrived in any sense until Christ's physical return"
    ],
    "answer": 2,
    "reference": "Romans 8:23-25; 1 Corinthians 15:20; Ephesians 1:14",
    "verseText": "We ourselves groan within ourselves, eagerly waiting for the adoption, the redemption of our body.",
    "explanation": "The tension is intentional. Paul can say 'you have been saved' (Eph 2:8), 'you are being saved' (1 Cor 1:18), and 'you will be saved' (Rom 5:9) — referring to different dimensions of one salvation: accomplished, applied, consummated."
  },
  {
    "id": 21080,
    "game": "Letters of the Apostles",
    "category": "Cross-Epistle",
    "difficulty": "Advanced",
    "question": "Across all the epistles, what is the ultimate goal toward which God is transforming his people?",
    "choices": [
      "Individual moral achievement and private holiness as ends in themselves",
      "Spiritual perfection reached before physical death",
      "Preparation for a fully disembodied spiritual existence beyond the physical world",
      "Conformity to the image of the Son — to reflect Christ in character, community, and witness, for the display of God's glory"
    ],
    "answer": 3,
    "reference": "Romans 8:29; 2 Corinthians 3:18; Colossians 3:10",
    "verseText": "For whom He foreknew, He also predestined to be conformed to the image of His Son.",
    "explanation": "Romans 8:29 names the goal of predestination: not merely heaven but Christlikeness. 2 Corinthians 3:18 describes the process: beholding the Lord's glory, transformed into the same image. Colossians 3:10 grounds it in the new creation image. The goal is personal and communal Christlikeness."
  }
];
