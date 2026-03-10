const apostlesQuestions = [

  {
    id: 82,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Which apostle denied Jesus three times?",
    choices: ["John", "Peter", "Andrew", "Thomas"],
    answer: 1,
    reference: "Luke 22:61-62",
    verseText: "And Peter remembered the word of the Lord... And Peter went out, and wept bitterly."
  },

  {
    id: 83,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who replaced Judas Iscariot among the twelve?",
    choices: ["Barnabas", "Silas", "Matthias", "Timothy"],
    answer: 2,
    reference: "Acts 1:26",
    verseText: "And they gave forth their lots; and the lot fell upon Matthias."
  },

  {
    id: 84,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Beginner",
    question: "On what day did the Holy Spirit come upon the disciples in Acts 2?",
    choices: ["Passover", "Pentecost", "Tabernacles", "Atonement"],
    answer: 1,
    reference: "Acts 2:1-4",
    verseText: "And when the day of Pentecost was fully come... they were all filled with the Holy Ghost."
  },

  {
    id: 85,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Student",
    question: "Who was the first Christian martyr recorded in Acts?",
    choices: ["James", "Peter", "Stephen", "Philip"],
    answer: 2,
    reference: "Acts 7:59-60",
    verseText: "And they stoned Stephen, calling upon God... And when he had said this, he fell asleep."
  },

  {
    id: 86,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Student",
    question: "Which apostle was known as 'the beloved disciple' in John's Gospel?",
    choices: ["Peter", "John", "James", "Thomas"],
    answer: 1,
    reference: "John 21:20",
    verseText: "Then Peter, turning about, seeth the disciple whom Jesus loved following."
  },

  {
    id: 87,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Student",
    question: "Who was converted after hearing Philip preach on the road to Gaza?",
    choices: ["The Ethiopian eunuch", "Cornelius", "Lydia", "Apollos"],
    answer: 0,
    reference: "Acts 8:26-39",
    verseText: "Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus."
  },

  {
    id: 88,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "At the council in Jerusalem in Acts 15, which apostle testified about God giving the Holy Spirit to the Gentiles?",
    choices: ["Peter", "Thomas", "Matthew", "Bartholomew"],
    answer: 0,
    reference: "Acts 15:7-9",
    verseText: "Men and brethren, ye know how that a good while ago God made choice among us, that the Gentiles by my mouth should hear the word of the gospel, and believe."
  },

  {
    id: 89,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "Who taught Apollos more perfectly the way of God?",
    choices: ["Peter and John", "Paul and Barnabas", "Priscilla and Aquila", "Silas and Timothy"],
    answer: 2,
    reference: "Acts 18:24-26",
    verseText: "And he began to speak boldly in the synagogue: whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly."
  },

  {
    id: 90,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "Which church was first called 'Christian'?",
    choices: ["Jerusalem", "Corinth", "Antioch", "Ephesus"],
    answer: 2,
    reference: "Acts 11:26",
    verseText: "And the disciples were called Christians first in Antioch."
  },

  {
    id: 190,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who doubted until he saw the risen Jesus?",
    choices: ["Peter", "Thomas", "John", "Matthew"],
    answer: 1,
    reference: "John 20:24-29",
    verseText: "Thomas... said unto them, Except I shall see... I will not believe."
  },

  {
    id: 191,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "Who preached the sermon on the day of Pentecost?",
    choices: ["James", "John", "Peter", "Stephen"],
    answer: 2,
    reference: "Acts 2:14",
    verseText: "Peter, standing up with the eleven, lifted up his voice."
  },

  {
    id: 192,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Beginner",
    question: "Who was a seller of purple in Philippi?",
    choices: ["Priscilla", "Lydia", "Dorcas", "Martha"],
    answer: 1,
    reference: "Acts 16:14",
    verseText: "A certain woman named Lydia, a seller of purple, of the city of Thyatira."
  },

  {
    id: 193,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Beginner",
    question: "True or False: Paul was one of the original twelve apostles.",
    choices: ["True", "False", "Not Stated", "Misquoted"],
    answer: 1,
    reference: "Matthew 10:2-4; Acts 9:1-6",
    verseText: "Paul was called later; he was not among the original twelve."
  },

  {
    id: 194,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Student",
    question: "Who opened her home in Philippi after being baptized?",
    choices: ["Phoebe", "Lydia", "Mary Magdalene", "Lois"],
    answer: 1,
    reference: "Acts 16:15",
    verseText: "She besought us, saying... come into my house, and abide there."
  },

  {
    id: 195,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Student",
    question: "Who was struck dead after lying about the price of the land?",
    choices: ["Simon Magus", "Ananias", "Elymas", "Demas"],
    answer: 1,
    reference: "Acts 5:1-5",
    verseText: "Ananias hearing these words fell down, and gave up the ghost."
  },

  {
    id: 196,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "People",
    difficulty: "Student",
    question: "Who was known as the son of encouragement?",
    choices: ["Silas", "Barnabas", "Mark", "Apollos"],
    answer: 1,
    reference: "Acts 4:36",
    verseText: "Joses, who by the apostles was surnamed Barnabas, (which is... The son of consolation)."
  },

  {
    id: 197,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Student",
    question: "Who am I? I was praying on a rooftop in Joppa when I saw a sheet descending from heaven.",
    choices: ["Peter", "John", "Paul", "Philip"],
    answer: 0,
    reference: "Acts 10:9-16",
    verseText: "Peter went up upon the housetop to pray... and saw heaven opened."
  },

  {
    id: 198,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "Who was stoned and left for dead at Lystra, but rose up and went back into the city?",
    choices: ["Peter", "Paul", "Stephen", "Barnabas"],
    answer: 1,
    reference: "Acts 14:19-20",
    verseText: "Having stoned Paul, drew him out of the city... howbeit... he rose up."
  },

  {
    id: 199,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "Which couple sold a possession and laid the full amount at the apostles' feet, contrasting with Ananias and Sapphira?",
    choices: ["Priscilla and Aquila", "Barnabas alone", "Joseph and Mary", "No married couple is named"],
    answer: 3,
    reference: "Acts 4:36-37; 5:1-2",
    verseText: "Barnabas is named individually; no couple is named as doing the same."
  },

  {
    id: 200,
    game: "Apostles & Early Church",
    testament: "New Testament",
    category: "Early Church",
    difficulty: "Scholar",
    question: "Who said, 'We ought to obey God rather than men'?",
    choices: ["Paul", "Peter and the apostles", "Stephen", "James"],
    answer: 1,
    reference: "Acts 5:29",
    verseText: "Then Peter and the other apostles answered and said, We ought to obey God rather than men."
  }

];
