function buildQuizQuestionPool(groupedQuestions){
  const pool = [];
  Object.keys(groupedQuestions).forEach(category => {
    const levels = groupedQuestions[category];
    Object.keys(levels).forEach(level => {
      levels[level].forEach(q => {
        pool.push({
          game: category,
          difficulty: level,
          question: q.question,
          choices: q.choices,
          answer: q.answer,
          reference: q.reference,
          verseText: q.verseText
        });
      });
    });
  });
  return pool;
}

const groupedQuestions = {
  "General Bible Trivia": {
    "Beginner": [
      {
        "question": "Sample general question 1 (easy)?",
        "choices": [
          "Jeremiah",
          "Moses",
          "Abraham",
          "Isaiah"
        ],
        "answer": 1,
        "reference": "2 Samuel 13:12",
        "verseText": "Sample verse text from 2 Samuel 13:12."
      },
      {
        "question": "Sample general question 2 (easy)?",
        "choices": [
          "Paul",
          "Moses",
          "David",
          "Jeremiah"
        ],
        "answer": 0,
        "reference": "Joshua 15:27",
        "verseText": "Sample verse text from Joshua 15:27."
      },
      {
        "question": "Sample general question 3 (easy)?",
        "choices": [
          "Elijah",
          "Isaiah",
          "Paul",
          "Jeremiah"
        ],
        "answer": 2,
        "reference": "Joshua 1:18",
        "verseText": "Sample verse text from Joshua 1:18."
      },
      {
        "question": "Sample general question 4 (easy)?",
        "choices": [
          "Abraham",
          "David",
          "Samuel",
          "Elijah"
        ],
        "answer": 0,
        "reference": "2 Samuel 19:1",
        "verseText": "Sample verse text from 2 Samuel 19:1."
      },
      {
        "question": "Sample general question 5 (easy)?",
        "choices": [
          "Elijah",
          "Abraham",
          "Paul",
          "Solomon"
        ],
        "answer": 3,
        "reference": "Matthew 2:16",
        "verseText": "Sample verse text from Matthew 2:16."
      },
      {
        "question": "Sample general question 6 (easy)?",
        "choices": [
          "Samuel",
          "Solomon",
          "Moses",
          "Elijah"
        ],
        "answer": 3,
        "reference": "Joshua 17:20",
        "verseText": "Sample verse text from Joshua 17:20."
      },
      {
        "question": "Sample general question 7 (easy)?",
        "choices": [
          "Jeremiah",
          "Moses",
          "Abraham",
          "Solomon"
        ],
        "answer": 0,
        "reference": "Matthew 16:12",
        "verseText": "Sample verse text from Matthew 16:12."
      },
      {
        "question": "Sample general question 8 (easy)?",
        "choices": [
          "Peter",
          "Moses",
          "Samuel",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "2 Samuel 4:19",
        "verseText": "Sample verse text from 2 Samuel 4:19."
      },
      {
        "question": "Sample general question 9 (easy)?",
        "choices": [
          "Moses",
          "Isaiah",
          "Abraham",
          "Peter"
        ],
        "answer": 0,
        "reference": "2 Samuel 10:23",
        "verseText": "Sample verse text from 2 Samuel 10:23."
      },
      {
        "question": "Sample general question 10 (easy)?",
        "choices": [
          "Jeremiah",
          "Paul",
          "Elijah",
          "David"
        ],
        "answer": 3,
        "reference": "Acts 10:27",
        "verseText": "Sample verse text from Acts 10:27."
      }
    ],
    "Student": [
      {
        "question": "Sample general question 1 (medium)?",
        "choices": [
          "Jeremiah",
          "Solomon",
          "Peter",
          "Paul"
        ],
        "answer": 0,
        "reference": "Judges 3:22",
        "verseText": "Sample verse text from Judges 3:22."
      },
      {
        "question": "Sample general question 2 (medium)?",
        "choices": [
          "Abraham",
          "Samuel",
          "Jeremiah",
          "Paul"
        ],
        "answer": 1,
        "reference": "Joshua 9:24",
        "verseText": "Sample verse text from Joshua 9:24."
      },
      {
        "question": "Sample general question 3 (medium)?",
        "choices": [
          "Elijah",
          "Paul",
          "Abraham",
          "Samuel"
        ],
        "answer": 1,
        "reference": "Exodus 4:16",
        "verseText": "Sample verse text from Exodus 4:16."
      },
      {
        "question": "Sample general question 4 (medium)?",
        "choices": [
          "Elijah",
          "Solomon",
          "Isaiah",
          "Samuel"
        ],
        "answer": 0,
        "reference": "1 Kings 3:13",
        "verseText": "Sample verse text from 1 Kings 3:13."
      },
      {
        "question": "Sample general question 5 (medium)?",
        "choices": [
          "Moses",
          "Paul",
          "Elijah",
          "Solomon"
        ],
        "answer": 0,
        "reference": "2 Samuel 2:2",
        "verseText": "Sample verse text from 2 Samuel 2:2."
      },
      {
        "question": "Sample general question 6 (medium)?",
        "choices": [
          "Isaiah",
          "Samuel",
          "David",
          "Elijah"
        ],
        "answer": 0,
        "reference": "Acts 15:16",
        "verseText": "Sample verse text from Acts 15:16."
      },
      {
        "question": "Sample general question 7 (medium)?",
        "choices": [
          "Moses",
          "Peter",
          "David",
          "Isaiah"
        ],
        "answer": 1,
        "reference": "1 Kings 17:8",
        "verseText": "Sample verse text from 1 Kings 17:8."
      },
      {
        "question": "Sample general question 8 (medium)?",
        "choices": [
          "David",
          "Samuel",
          "Solomon",
          "Peter"
        ],
        "answer": 1,
        "reference": "Acts 4:24",
        "verseText": "Sample verse text from Acts 4:24."
      },
      {
        "question": "Sample general question 9 (medium)?",
        "choices": [
          "Jeremiah",
          "Samuel",
          "Elijah",
          "Moses"
        ],
        "answer": 1,
        "reference": "Judges 8:15",
        "verseText": "Sample verse text from Judges 8:15."
      },
      {
        "question": "Sample general question 10 (medium)?",
        "choices": [
          "Moses",
          "Paul",
          "Jeremiah",
          "Isaiah"
        ],
        "answer": 2,
        "reference": "1 Samuel 4:30",
        "verseText": "Sample verse text from 1 Samuel 4:30."
      }
    ],
    "Scholar": [
      {
        "question": "Sample general question 1 (hard)?",
        "choices": [
          "Isaiah",
          "Jeremiah",
          "David",
          "Peter"
        ],
        "answer": 3,
        "reference": "2 Samuel 19:12",
        "verseText": "Sample verse text from 2 Samuel 19:12."
      },
      {
        "question": "Sample general question 2 (hard)?",
        "choices": [
          "Elijah",
          "Samuel",
          "David",
          "Jeremiah"
        ],
        "answer": 3,
        "reference": "Joshua 13:6",
        "verseText": "Sample verse text from Joshua 13:6."
      },
      {
        "question": "Sample general question 3 (hard)?",
        "choices": [
          "David",
          "Peter",
          "Samuel",
          "Paul"
        ],
        "answer": 0,
        "reference": "2 Kings 15:21",
        "verseText": "Sample verse text from 2 Kings 15:21."
      },
      {
        "question": "Sample general question 4 (hard)?",
        "choices": [
          "Isaiah",
          "David",
          "Peter",
          "Elijah"
        ],
        "answer": 2,
        "reference": "1 Samuel 4:6",
        "verseText": "Sample verse text from 1 Samuel 4:6."
      },
      {
        "question": "Sample general question 5 (hard)?",
        "choices": [
          "Paul",
          "Isaiah",
          "Peter",
          "Solomon"
        ],
        "answer": 2,
        "reference": "1 Samuel 4:4",
        "verseText": "Sample verse text from 1 Samuel 4:4."
      },
      {
        "question": "Sample general question 6 (hard)?",
        "choices": [
          "David",
          "Moses",
          "Solomon",
          "Jeremiah"
        ],
        "answer": 3,
        "reference": "1 Samuel 5:21",
        "verseText": "Sample verse text from 1 Samuel 5:21."
      },
      {
        "question": "Sample general question 7 (hard)?",
        "choices": [
          "Moses",
          "Abraham",
          "Elijah",
          "Solomon"
        ],
        "answer": 3,
        "reference": "2 Kings 4:10",
        "verseText": "Sample verse text from 2 Kings 4:10."
      },
      {
        "question": "Sample general question 8 (hard)?",
        "choices": [
          "Paul",
          "Moses",
          "Elijah",
          "Samuel"
        ],
        "answer": 3,
        "reference": "Joshua 19:25",
        "verseText": "Sample verse text from Joshua 19:25."
      },
      {
        "question": "Sample general question 9 (hard)?",
        "choices": [
          "Samuel",
          "Elijah",
          "Paul",
          "Abraham"
        ],
        "answer": 2,
        "reference": "Joshua 20:1",
        "verseText": "Sample verse text from Joshua 20:1."
      },
      {
        "question": "Sample general question 10 (hard)?",
        "choices": [
          "Isaiah",
          "Jeremiah",
          "Moses",
          "Samuel"
        ],
        "answer": 0,
        "reference": "1 Kings 11:21",
        "verseText": "Sample verse text from 1 Kings 11:21."
      }
    ]
  },
  "Who said it?": {
    "Beginner": [
      {
        "question": "Sample who said it question 1 (easy)?",
        "choices": [
          "Isaiah",
          "Jeremiah",
          "Peter",
          "Abraham"
        ],
        "answer": 3,
        "reference": "1 Samuel 7:14",
        "verseText": "Sample verse text from 1 Samuel 7:14."
      },
      {
        "question": "Sample who said it question 2 (easy)?",
        "choices": [
          "Solomon",
          "Abraham",
          "Jeremiah",
          "David"
        ],
        "answer": 1,
        "reference": "Judges 2:9",
        "verseText": "Sample verse text from Judges 2:9."
      },
      {
        "question": "Sample who said it question 3 (easy)?",
        "choices": [
          "Elijah",
          "David",
          "Paul",
          "Moses"
        ],
        "answer": 0,
        "reference": "Judges 17:21",
        "verseText": "Sample verse text from Judges 17:21."
      },
      {
        "question": "Sample who said it question 4 (easy)?",
        "choices": [
          "Moses",
          "Solomon",
          "Isaiah",
          "Elijah"
        ],
        "answer": 3,
        "reference": "Genesis 7:15",
        "verseText": "Sample verse text from Genesis 7:15."
      },
      {
        "question": "Sample who said it question 5 (easy)?",
        "choices": [
          "Abraham",
          "David",
          "Moses",
          "Isaiah"
        ],
        "answer": 2,
        "reference": "Matthew 10:28",
        "verseText": "Sample verse text from Matthew 10:28."
      },
      {
        "question": "Sample who said it question 6 (easy)?",
        "choices": [
          "Jeremiah",
          "Peter",
          "Elijah",
          "David"
        ],
        "answer": 1,
        "reference": "Judges 20:27",
        "verseText": "Sample verse text from Judges 20:27."
      },
      {
        "question": "Sample who said it question 7 (easy)?",
        "choices": [
          "Paul",
          "Jeremiah",
          "Abraham",
          "Solomon"
        ],
        "answer": 2,
        "reference": "Genesis 12:28",
        "verseText": "Sample verse text from Genesis 12:28."
      },
      {
        "question": "Sample who said it question 8 (easy)?",
        "choices": [
          "Jeremiah",
          "Samuel",
          "Abraham",
          "Paul"
        ],
        "answer": 0,
        "reference": "Genesis 16:18",
        "verseText": "Sample verse text from Genesis 16:18."
      },
      {
        "question": "Sample who said it question 9 (easy)?",
        "choices": [
          "Paul",
          "Moses",
          "Samuel",
          "Abraham"
        ],
        "answer": 0,
        "reference": "1 Kings 19:30",
        "verseText": "Sample verse text from 1 Kings 19:30."
      },
      {
        "question": "Sample who said it question 10 (easy)?",
        "choices": [
          "Isaiah",
          "Samuel",
          "Elijah",
          "Paul"
        ],
        "answer": 3,
        "reference": "2 Kings 2:25",
        "verseText": "Sample verse text from 2 Kings 2:25."
      }
    ],
    "Student": [
      {
        "question": "Sample who said it question 1 (medium)?",
        "choices": [
          "Solomon",
          "David",
          "Moses",
          "Paul"
        ],
        "answer": 3,
        "reference": "2 Kings 1:14",
        "verseText": "Sample verse text from 2 Kings 1:14."
      },
      {
        "question": "Sample who said it question 2 (medium)?",
        "choices": [
          "Isaiah",
          "Samuel",
          "Elijah",
          "Abraham"
        ],
        "answer": 3,
        "reference": "Joshua 20:11",
        "verseText": "Sample verse text from Joshua 20:11."
      },
      {
        "question": "Sample who said it question 3 (medium)?",
        "choices": [
          "Peter",
          "Samuel",
          "Abraham",
          "Solomon"
        ],
        "answer": 0,
        "reference": "1 Samuel 12:5",
        "verseText": "Sample verse text from 1 Samuel 12:5."
      },
      {
        "question": "Sample who said it question 4 (medium)?",
        "choices": [
          "Solomon",
          "Peter",
          "David",
          "Jeremiah"
        ],
        "answer": 2,
        "reference": "Exodus 4:9",
        "verseText": "Sample verse text from Exodus 4:9."
      },
      {
        "question": "Sample who said it question 5 (medium)?",
        "choices": [
          "Elijah",
          "Samuel",
          "Isaiah",
          "Peter"
        ],
        "answer": 0,
        "reference": "2 Samuel 4:3",
        "verseText": "Sample verse text from 2 Samuel 4:3."
      },
      {
        "question": "Sample who said it question 6 (medium)?",
        "choices": [
          "Paul",
          "Peter",
          "David",
          "Isaiah"
        ],
        "answer": 3,
        "reference": "2 Kings 4:7",
        "verseText": "Sample verse text from 2 Kings 4:7."
      },
      {
        "question": "Sample who said it question 7 (medium)?",
        "choices": [
          "Moses",
          "Isaiah",
          "Samuel",
          "Paul"
        ],
        "answer": 0,
        "reference": "2 Kings 18:7",
        "verseText": "Sample verse text from 2 Kings 18:7."
      },
      {
        "question": "Sample who said it question 8 (medium)?",
        "choices": [
          "David",
          "Jeremiah",
          "Moses",
          "Peter"
        ],
        "answer": 1,
        "reference": "Joshua 11:10",
        "verseText": "Sample verse text from Joshua 11:10."
      },
      {
        "question": "Sample who said it question 9 (medium)?",
        "choices": [
          "Solomon",
          "David",
          "Paul",
          "Elijah"
        ],
        "answer": 0,
        "reference": "Exodus 8:4",
        "verseText": "Sample verse text from Exodus 8:4."
      },
      {
        "question": "Sample who said it question 10 (medium)?",
        "choices": [
          "Jeremiah",
          "Samuel",
          "David",
          "Paul"
        ],
        "answer": 0,
        "reference": "Acts 13:22",
        "verseText": "Sample verse text from Acts 13:22."
      }
    ],
    "Scholar": [
      {
        "question": "Sample who said it question 1 (hard)?",
        "choices": [
          "Isaiah",
          "Samuel",
          "Jeremiah",
          "Solomon"
        ],
        "answer": 3,
        "reference": "Acts 17:10",
        "verseText": "Sample verse text from Acts 17:10."
      },
      {
        "question": "Sample who said it question 2 (hard)?",
        "choices": [
          "Isaiah",
          "Solomon",
          "Moses",
          "Abraham"
        ],
        "answer": 3,
        "reference": "Joshua 4:12",
        "verseText": "Sample verse text from Joshua 4:12."
      },
      {
        "question": "Sample who said it question 3 (hard)?",
        "choices": [
          "Abraham",
          "Paul",
          "Jeremiah",
          "Samuel"
        ],
        "answer": 0,
        "reference": "2 Samuel 14:26",
        "verseText": "Sample verse text from 2 Samuel 14:26."
      },
      {
        "question": "Sample who said it question 4 (hard)?",
        "choices": [
          "Samuel",
          "Moses",
          "Jeremiah",
          "Elijah"
        ],
        "answer": 1,
        "reference": "Acts 5:9",
        "verseText": "Sample verse text from Acts 5:9."
      },
      {
        "question": "Sample who said it question 5 (hard)?",
        "choices": [
          "Peter",
          "Moses",
          "Samuel",
          "Abraham"
        ],
        "answer": 0,
        "reference": "Matthew 16:20",
        "verseText": "Sample verse text from Matthew 16:20."
      },
      {
        "question": "Sample who said it question 6 (hard)?",
        "choices": [
          "Solomon",
          "Elijah",
          "Isaiah",
          "Jeremiah"
        ],
        "answer": 2,
        "reference": "Matthew 3:15",
        "verseText": "Sample verse text from Matthew 3:15."
      },
      {
        "question": "Sample who said it question 7 (hard)?",
        "choices": [
          "Solomon",
          "Moses",
          "Peter",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "Joshua 8:19",
        "verseText": "Sample verse text from Joshua 8:19."
      },
      {
        "question": "Sample who said it question 8 (hard)?",
        "choices": [
          "Moses",
          "Isaiah",
          "Abraham",
          "Jeremiah"
        ],
        "answer": 3,
        "reference": "Acts 3:23",
        "verseText": "Sample verse text from Acts 3:23."
      },
      {
        "question": "Sample who said it question 9 (hard)?",
        "choices": [
          "David",
          "Abraham",
          "Moses",
          "Solomon"
        ],
        "answer": 0,
        "reference": "Exodus 8:29",
        "verseText": "Sample verse text from Exodus 8:29."
      },
      {
        "question": "Sample who said it question 10 (hard)?",
        "choices": [
          "Isaiah",
          "Paul",
          "Solomon",
          "Moses"
        ],
        "answer": 3,
        "reference": "Genesis 15:30",
        "verseText": "Sample verse text from Genesis 15:30."
      }
    ]
  },
  "Bible Timeline": {
    "Beginner": [
      {
        "question": "Sample timeline question 1 (easy)?",
        "choices": [
          "Jeremiah",
          "David",
          "Moses",
          "Peter"
        ],
        "answer": 0,
        "reference": "2 Samuel 1:7",
        "verseText": "Sample verse text from 2 Samuel 1:7."
      },
      {
        "question": "Sample timeline question 2 (easy)?",
        "choices": [
          "Paul",
          "Abraham",
          "Elijah",
          "Solomon"
        ],
        "answer": 1,
        "reference": "2 Samuel 8:30",
        "verseText": "Sample verse text from 2 Samuel 8:30."
      },
      {
        "question": "Sample timeline question 3 (easy)?",
        "choices": [
          "Moses",
          "Peter",
          "Solomon",
          "Abraham"
        ],
        "answer": 2,
        "reference": "1 Samuel 13:28",
        "verseText": "Sample verse text from 1 Samuel 13:28."
      },
      {
        "question": "Sample timeline question 4 (easy)?",
        "choices": [
          "Samuel",
          "Abraham",
          "David",
          "Paul"
        ],
        "answer": 2,
        "reference": "Joshua 15:18",
        "verseText": "Sample verse text from Joshua 15:18."
      },
      {
        "question": "Sample timeline question 5 (easy)?",
        "choices": [
          "Samuel",
          "David",
          "Abraham",
          "Isaiah"
        ],
        "answer": 2,
        "reference": "Acts 4:30",
        "verseText": "Sample verse text from Acts 4:30."
      },
      {
        "question": "Sample timeline question 6 (easy)?",
        "choices": [
          "Peter",
          "Abraham",
          "Jeremiah",
          "Paul"
        ],
        "answer": 1,
        "reference": "Matthew 17:19",
        "verseText": "Sample verse text from Matthew 17:19."
      },
      {
        "question": "Sample timeline question 7 (easy)?",
        "choices": [
          "Moses",
          "Paul",
          "Samuel",
          "Peter"
        ],
        "answer": 2,
        "reference": "Judges 8:14",
        "verseText": "Sample verse text from Judges 8:14."
      },
      {
        "question": "Sample timeline question 8 (easy)?",
        "choices": [
          "Elijah",
          "David",
          "Abraham",
          "Moses"
        ],
        "answer": 1,
        "reference": "Genesis 4:18",
        "verseText": "Sample verse text from Genesis 4:18."
      },
      {
        "question": "Sample timeline question 9 (easy)?",
        "choices": [
          "Abraham",
          "Paul",
          "Isaiah",
          "Solomon"
        ],
        "answer": 2,
        "reference": "Matthew 4:17",
        "verseText": "Sample verse text from Matthew 4:17."
      },
      {
        "question": "Sample timeline question 10 (easy)?",
        "choices": [
          "Isaiah",
          "Paul",
          "Abraham",
          "Elijah"
        ],
        "answer": 3,
        "reference": "Judges 5:27",
        "verseText": "Sample verse text from Judges 5:27."
      }
    ],
    "Student": [
      {
        "question": "Sample timeline question 1 (medium)?",
        "choices": [
          "Solomon",
          "Isaiah",
          "Abraham",
          "Peter"
        ],
        "answer": 3,
        "reference": "2 Kings 6:13",
        "verseText": "Sample verse text from 2 Kings 6:13."
      },
      {
        "question": "Sample timeline question 2 (medium)?",
        "choices": [
          "David",
          "Solomon",
          "Isaiah",
          "Abraham"
        ],
        "answer": 3,
        "reference": "1 Samuel 17:27",
        "verseText": "Sample verse text from 1 Samuel 17:27."
      },
      {
        "question": "Sample timeline question 3 (medium)?",
        "choices": [
          "Paul",
          "Jeremiah",
          "Moses",
          "Samuel"
        ],
        "answer": 3,
        "reference": "Judges 19:26",
        "verseText": "Sample verse text from Judges 19:26."
      },
      {
        "question": "Sample timeline question 4 (medium)?",
        "choices": [
          "Moses",
          "Jeremiah",
          "Peter",
          "Paul"
        ],
        "answer": 3,
        "reference": "Matthew 16:18",
        "verseText": "Sample verse text from Matthew 16:18."
      },
      {
        "question": "Sample timeline question 5 (medium)?",
        "choices": [
          "David",
          "Peter",
          "Paul",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "Acts 5:8",
        "verseText": "Sample verse text from Acts 5:8."
      },
      {
        "question": "Sample timeline question 6 (medium)?",
        "choices": [
          "Elijah",
          "Jeremiah",
          "Peter",
          "Moses"
        ],
        "answer": 3,
        "reference": "Acts 20:5",
        "verseText": "Sample verse text from Acts 20:5."
      },
      {
        "question": "Sample timeline question 7 (medium)?",
        "choices": [
          "Solomon",
          "Abraham",
          "David",
          "Jeremiah"
        ],
        "answer": 0,
        "reference": "Exodus 19:11",
        "verseText": "Sample verse text from Exodus 19:11."
      },
      {
        "question": "Sample timeline question 8 (medium)?",
        "choices": [
          "Jeremiah",
          "Isaiah",
          "Samuel",
          "David"
        ],
        "answer": 2,
        "reference": "Genesis 11:16",
        "verseText": "Sample verse text from Genesis 11:16."
      },
      {
        "question": "Sample timeline question 9 (medium)?",
        "choices": [
          "Elijah",
          "Peter",
          "Solomon",
          "Moses"
        ],
        "answer": 0,
        "reference": "2 Kings 2:15",
        "verseText": "Sample verse text from 2 Kings 2:15."
      },
      {
        "question": "Sample timeline question 10 (medium)?",
        "choices": [
          "Elijah",
          "Samuel",
          "Moses",
          "Peter"
        ],
        "answer": 0,
        "reference": "Matthew 4:30",
        "verseText": "Sample verse text from Matthew 4:30."
      }
    ],
    "Scholar": [
      {
        "question": "Sample timeline question 1 (hard)?",
        "choices": [
          "Isaiah",
          "Elijah",
          "Abraham",
          "Solomon"
        ],
        "answer": 2,
        "reference": "1 Kings 2:30",
        "verseText": "Sample verse text from 1 Kings 2:30."
      },
      {
        "question": "Sample timeline question 2 (hard)?",
        "choices": [
          "Solomon",
          "David",
          "Isaiah",
          "Samuel"
        ],
        "answer": 2,
        "reference": "2 Kings 8:28",
        "verseText": "Sample verse text from 2 Kings 8:28."
      },
      {
        "question": "Sample timeline question 3 (hard)?",
        "choices": [
          "Samuel",
          "Abraham",
          "David",
          "Moses"
        ],
        "answer": 3,
        "reference": "Exodus 9:4",
        "verseText": "Sample verse text from Exodus 9:4."
      },
      {
        "question": "Sample timeline question 4 (hard)?",
        "choices": [
          "Abraham",
          "Isaiah",
          "Elijah",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "2 Samuel 17:22",
        "verseText": "Sample verse text from 2 Samuel 17:22."
      },
      {
        "question": "Sample timeline question 5 (hard)?",
        "choices": [
          "Peter",
          "Moses",
          "Solomon",
          "Elijah"
        ],
        "answer": 0,
        "reference": "1 Samuel 16:27",
        "verseText": "Sample verse text from 1 Samuel 16:27."
      },
      {
        "question": "Sample timeline question 6 (hard)?",
        "choices": [
          "Isaiah",
          "David",
          "Samuel",
          "Elijah"
        ],
        "answer": 3,
        "reference": "1 Kings 12:8",
        "verseText": "Sample verse text from 1 Kings 12:8."
      },
      {
        "question": "Sample timeline question 7 (hard)?",
        "choices": [
          "David",
          "Samuel",
          "Elijah",
          "Abraham"
        ],
        "answer": 3,
        "reference": "2 Kings 11:19",
        "verseText": "Sample verse text from 2 Kings 11:19."
      },
      {
        "question": "Sample timeline question 8 (hard)?",
        "choices": [
          "Paul",
          "Abraham",
          "Peter",
          "Elijah"
        ],
        "answer": 1,
        "reference": "Judges 18:22",
        "verseText": "Sample verse text from Judges 18:22."
      },
      {
        "question": "Sample timeline question 9 (hard)?",
        "choices": [
          "Peter",
          "Jeremiah",
          "Isaiah",
          "Solomon"
        ],
        "answer": 1,
        "reference": "Judges 20:25",
        "verseText": "Sample verse text from Judges 20:25."
      },
      {
        "question": "Sample timeline question 10 (hard)?",
        "choices": [
          "Peter",
          "Jeremiah",
          "Abraham",
          "Moses"
        ],
        "answer": 3,
        "reference": "Exodus 1:27",
        "verseText": "Sample verse text from Exodus 1:27."
      }
    ]
  },
  "Finish the Verse": {
    "Beginner": [
      {
        "question": "Sample finish the verse question 1 (easy)?",
        "choices": [
          "Peter",
          "Moses",
          "Isaiah",
          "Solomon"
        ],
        "answer": 0,
        "reference": "2 Kings 5:13",
        "verseText": "Sample verse text from 2 Kings 5:13."
      },
      {
        "question": "Sample finish the verse question 2 (easy)?",
        "choices": [
          "Samuel",
          "Jeremiah",
          "Moses",
          "Solomon"
        ],
        "answer": 2,
        "reference": "Genesis 8:21",
        "verseText": "Sample verse text from Genesis 8:21."
      },
      {
        "question": "Sample finish the verse question 3 (easy)?",
        "choices": [
          "Peter",
          "David",
          "Abraham",
          "Paul"
        ],
        "answer": 0,
        "reference": "Exodus 19:18",
        "verseText": "Sample verse text from Exodus 19:18."
      },
      {
        "question": "Sample finish the verse question 4 (easy)?",
        "choices": [
          "Jeremiah",
          "David",
          "Abraham",
          "Samuel"
        ],
        "answer": 0,
        "reference": "Genesis 2:29",
        "verseText": "Sample verse text from Genesis 2:29."
      },
      {
        "question": "Sample finish the verse question 5 (easy)?",
        "choices": [
          "Isaiah",
          "Peter",
          "Abraham",
          "Elijah"
        ],
        "answer": 1,
        "reference": "Exodus 15:12",
        "verseText": "Sample verse text from Exodus 15:12."
      },
      {
        "question": "Sample finish the verse question 6 (easy)?",
        "choices": [
          "Isaiah",
          "Peter",
          "Paul",
          "Samuel"
        ],
        "answer": 3,
        "reference": "1 Samuel 16:13",
        "verseText": "Sample verse text from 1 Samuel 16:13."
      },
      {
        "question": "Sample finish the verse question 7 (easy)?",
        "choices": [
          "Abraham",
          "Moses",
          "Solomon",
          "Jeremiah"
        ],
        "answer": 2,
        "reference": "Acts 10:25",
        "verseText": "Sample verse text from Acts 10:25."
      },
      {
        "question": "Sample finish the verse question 8 (easy)?",
        "choices": [
          "Samuel",
          "David",
          "Isaiah",
          "Abraham"
        ],
        "answer": 1,
        "reference": "Matthew 6:21",
        "verseText": "Sample verse text from Matthew 6:21."
      },
      {
        "question": "Sample finish the verse question 9 (easy)?",
        "choices": [
          "Isaiah",
          "Abraham",
          "Solomon",
          "Peter"
        ],
        "answer": 2,
        "reference": "Acts 12:27",
        "verseText": "Sample verse text from Acts 12:27."
      },
      {
        "question": "Sample finish the verse question 10 (easy)?",
        "choices": [
          "Elijah",
          "Solomon",
          "Moses",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "2 Kings 14:16",
        "verseText": "Sample verse text from 2 Kings 14:16."
      }
    ],
    "Student": [
      {
        "question": "Sample finish the verse question 1 (medium)?",
        "choices": [
          "Moses",
          "Peter",
          "Solomon",
          "Jeremiah"
        ],
        "answer": 1,
        "reference": "Matthew 16:20",
        "verseText": "Sample verse text from Matthew 16:20."
      },
      {
        "question": "Sample finish the verse question 2 (medium)?",
        "choices": [
          "Jeremiah",
          "Samuel",
          "Moses",
          "Paul"
        ],
        "answer": 0,
        "reference": "Genesis 18:6",
        "verseText": "Sample verse text from Genesis 18:6."
      },
      {
        "question": "Sample finish the verse question 3 (medium)?",
        "choices": [
          "Peter",
          "Isaiah",
          "Samuel",
          "Elijah"
        ],
        "answer": 0,
        "reference": "Exodus 15:26",
        "verseText": "Sample verse text from Exodus 15:26."
      },
      {
        "question": "Sample finish the verse question 4 (medium)?",
        "choices": [
          "Samuel",
          "David",
          "Solomon",
          "Paul"
        ],
        "answer": 2,
        "reference": "Exodus 8:13",
        "verseText": "Sample verse text from Exodus 8:13."
      },
      {
        "question": "Sample finish the verse question 5 (medium)?",
        "choices": [
          "Jeremiah",
          "Solomon",
          "Samuel",
          "Elijah"
        ],
        "answer": 2,
        "reference": "1 Kings 14:15",
        "verseText": "Sample verse text from 1 Kings 14:15."
      },
      {
        "question": "Sample finish the verse question 6 (medium)?",
        "choices": [
          "Abraham",
          "Elijah",
          "Isaiah",
          "David"
        ],
        "answer": 3,
        "reference": "2 Samuel 17:19",
        "verseText": "Sample verse text from 2 Samuel 17:19."
      },
      {
        "question": "Sample finish the verse question 7 (medium)?",
        "choices": [
          "Isaiah",
          "Paul",
          "Peter",
          "David"
        ],
        "answer": 0,
        "reference": "Acts 19:1",
        "verseText": "Sample verse text from Acts 19:1."
      },
      {
        "question": "Sample finish the verse question 8 (medium)?",
        "choices": [
          "Jeremiah",
          "Abraham",
          "Samuel",
          "Isaiah"
        ],
        "answer": 1,
        "reference": "2 Kings 6:14",
        "verseText": "Sample verse text from 2 Kings 6:14."
      },
      {
        "question": "Sample finish the verse question 9 (medium)?",
        "choices": [
          "Samuel",
          "Solomon",
          "Moses",
          "Paul"
        ],
        "answer": 2,
        "reference": "Matthew 4:20",
        "verseText": "Sample verse text from Matthew 4:20."
      },
      {
        "question": "Sample finish the verse question 10 (medium)?",
        "choices": [
          "Peter",
          "Moses",
          "Isaiah",
          "Solomon"
        ],
        "answer": 3,
        "reference": "Acts 9:29",
        "verseText": "Sample verse text from Acts 9:29."
      }
    ],
    "Scholar": [
      {
        "question": "Sample finish the verse question 1 (hard)?",
        "choices": [
          "Solomon",
          "David",
          "Elijah",
          "Abraham"
        ],
        "answer": 0,
        "reference": "Joshua 6:27",
        "verseText": "Sample verse text from Joshua 6:27."
      },
      {
        "question": "Sample finish the verse question 2 (hard)?",
        "choices": [
          "Abraham",
          "Paul",
          "Peter",
          "Jeremiah"
        ],
        "answer": 0,
        "reference": "1 Samuel 18:13",
        "verseText": "Sample verse text from 1 Samuel 18:13."
      },
      {
        "question": "Sample finish the verse question 3 (hard)?",
        "choices": [
          "Moses",
          "Samuel",
          "Isaiah",
          "Abraham"
        ],
        "answer": 3,
        "reference": "1 Samuel 7:17",
        "verseText": "Sample verse text from 1 Samuel 7:17."
      },
      {
        "question": "Sample finish the verse question 4 (hard)?",
        "choices": [
          "Moses",
          "Peter",
          "David",
          "Abraham"
        ],
        "answer": 2,
        "reference": "Genesis 9:11",
        "verseText": "Sample verse text from Genesis 9:11."
      },
      {
        "question": "Sample finish the verse question 5 (hard)?",
        "choices": [
          "Abraham",
          "Peter",
          "David",
          "Samuel"
        ],
        "answer": 1,
        "reference": "Exodus 15:13",
        "verseText": "Sample verse text from Exodus 15:13."
      },
      {
        "question": "Sample finish the verse question 6 (hard)?",
        "choices": [
          "Elijah",
          "Samuel",
          "Solomon",
          "David"
        ],
        "answer": 3,
        "reference": "Exodus 10:10",
        "verseText": "Sample verse text from Exodus 10:10."
      },
      {
        "question": "Sample finish the verse question 7 (hard)?",
        "choices": [
          "Jeremiah",
          "Abraham",
          "Samuel",
          "Solomon"
        ],
        "answer": 1,
        "reference": "Exodus 14:7",
        "verseText": "Sample verse text from Exodus 14:7."
      },
      {
        "question": "Sample finish the verse question 8 (hard)?",
        "choices": [
          "Jeremiah",
          "Elijah",
          "Solomon",
          "Peter"
        ],
        "answer": 0,
        "reference": "Genesis 14:17",
        "verseText": "Sample verse text from Genesis 14:17."
      },
      {
        "question": "Sample finish the verse question 9 (hard)?",
        "choices": [
          "David",
          "Elijah",
          "Jeremiah",
          "Moses"
        ],
        "answer": 2,
        "reference": "Exodus 1:6",
        "verseText": "Sample verse text from Exodus 1:6."
      },
      {
        "question": "Sample finish the verse question 10 (hard)?",
        "choices": [
          "Solomon",
          "Paul",
          "Moses",
          "Isaiah"
        ],
        "answer": 0,
        "reference": "1 Samuel 9:12",
        "verseText": "Sample verse text from 1 Samuel 9:12."
      }
    ]
  },
  "Prophecy Quiz": {
    "Beginner": [
      {
        "question": "Sample prophecy question 1 (easy)?",
        "choices": [
          "Paul",
          "Elijah",
          "Samuel",
          "Abraham"
        ],
        "answer": 3,
        "reference": "Judges 10:23",
        "verseText": "Sample verse text from Judges 10:23."
      },
      {
        "question": "Sample prophecy question 2 (easy)?",
        "choices": [
          "Peter",
          "David",
          "Paul",
          "Moses"
        ],
        "answer": 3,
        "reference": "1 Kings 8:17",
        "verseText": "Sample verse text from 1 Kings 8:17."
      },
      {
        "question": "Sample prophecy question 3 (easy)?",
        "choices": [
          "Elijah",
          "Paul",
          "Solomon",
          "Isaiah"
        ],
        "answer": 0,
        "reference": "2 Kings 20:4",
        "verseText": "Sample verse text from 2 Kings 20:4."
      },
      {
        "question": "Sample prophecy question 4 (easy)?",
        "choices": [
          "Paul",
          "Abraham",
          "Samuel",
          "Isaiah"
        ],
        "answer": 2,
        "reference": "2 Kings 15:2",
        "verseText": "Sample verse text from 2 Kings 15:2."
      },
      {
        "question": "Sample prophecy question 5 (easy)?",
        "choices": [
          "Samuel",
          "Paul",
          "Moses",
          "Isaiah"
        ],
        "answer": 3,
        "reference": "1 Samuel 19:25",
        "verseText": "Sample verse text from 1 Samuel 19:25."
      },
      {
        "question": "Sample prophecy question 6 (easy)?",
        "choices": [
          "Paul",
          "David",
          "Samuel",
          "Abraham"
        ],
        "answer": 1,
        "reference": "Exodus 15:3",
        "verseText": "Sample verse text from Exodus 15:3."
      },
      {
        "question": "Sample prophecy question 7 (easy)?",
        "choices": [
          "Peter",
          "Abraham",
          "Elijah",
          "Samuel"
        ],
        "answer": 1,
        "reference": "Exodus 10:20",
        "verseText": "Sample verse text from Exodus 10:20."
      },
      {
        "question": "Sample prophecy question 8 (easy)?",
        "choices": [
          "Abraham",
          "Jeremiah",
          "Moses",
          "Samuel"
        ],
        "answer": 1,
        "reference": "Matthew 19:23",
        "verseText": "Sample verse text from Matthew 19:23."
      },
      {
        "question": "Sample prophecy question 9 (easy)?",
        "choices": [
          "Paul",
          "Solomon",
          "Elijah",
          "Jeremiah"
        ],
        "answer": 3,
        "reference": "Genesis 20:22",
        "verseText": "Sample verse text from Genesis 20:22."
      },
      {
        "question": "Sample prophecy question 10 (easy)?",
        "choices": [
          "Abraham",
          "Solomon",
          "David",
          "Paul"
        ],
        "answer": 1,
        "reference": "Genesis 16:23",
        "verseText": "Sample verse text from Genesis 16:23."
      }
    ],
    "Student": [
      {
        "question": "Sample prophecy question 1 (medium)?",
        "choices": [
          "Solomon",
          "Peter",
          "David",
          "Elijah"
        ],
        "answer": 3,
        "reference": "Acts 7:11",
        "verseText": "Sample verse text from Acts 7:11."
      },
      {
        "question": "Sample prophecy question 2 (medium)?",
        "choices": [
          "Paul",
          "Moses",
          "Isaiah",
          "Peter"
        ],
        "answer": 2,
        "reference": "1 Samuel 8:1",
        "verseText": "Sample verse text from 1 Samuel 8:1."
      },
      {
        "question": "Sample prophecy question 3 (medium)?",
        "choices": [
          "David",
          "Peter",
          "Moses",
          "Abraham"
        ],
        "answer": 2,
        "reference": "2 Kings 4:3",
        "verseText": "Sample verse text from 2 Kings 4:3."
      },
      {
        "question": "Sample prophecy question 4 (medium)?",
        "choices": [
          "Solomon",
          "Jeremiah",
          "Elijah",
          "Paul"
        ],
        "answer": 0,
        "reference": "Matthew 16:26",
        "verseText": "Sample verse text from Matthew 16:26."
      },
      {
        "question": "Sample prophecy question 5 (medium)?",
        "choices": [
          "Samuel",
          "Moses",
          "Solomon",
          "Paul"
        ],
        "answer": 2,
        "reference": "Acts 10:3",
        "verseText": "Sample verse text from Acts 10:3."
      },
      {
        "question": "Sample prophecy question 6 (medium)?",
        "choices": [
          "Elijah",
          "Peter",
          "Isaiah",
          "Solomon"
        ],
        "answer": 3,
        "reference": "Acts 13:6",
        "verseText": "Sample verse text from Acts 13:6."
      },
      {
        "question": "Sample prophecy question 7 (medium)?",
        "choices": [
          "Jeremiah",
          "Paul",
          "David",
          "Abraham"
        ],
        "answer": 1,
        "reference": "1 Samuel 14:17",
        "verseText": "Sample verse text from 1 Samuel 14:17."
      },
      {
        "question": "Sample prophecy question 8 (medium)?",
        "choices": [
          "Peter",
          "Paul",
          "Isaiah",
          "David"
        ],
        "answer": 3,
        "reference": "Matthew 18:26",
        "verseText": "Sample verse text from Matthew 18:26."
      },
      {
        "question": "Sample prophecy question 9 (medium)?",
        "choices": [
          "Elijah",
          "Solomon",
          "Jeremiah",
          "Moses"
        ],
        "answer": 1,
        "reference": "Genesis 1:5",
        "verseText": "Sample verse text from Genesis 1:5."
      },
      {
        "question": "Sample prophecy question 10 (medium)?",
        "choices": [
          "Solomon",
          "Peter",
          "Moses",
          "David"
        ],
        "answer": 2,
        "reference": "Exodus 19:20",
        "verseText": "Sample verse text from Exodus 19:20."
      }
    ],
    "Scholar": [
      {
        "question": "Sample prophecy question 1 (hard)?",
        "choices": [
          "Jeremiah",
          "David",
          "Samuel",
          "Abraham"
        ],
        "answer": 0,
        "reference": "1 Kings 2:13",
        "verseText": "Sample verse text from 1 Kings 2:13."
      },
      {
        "question": "Sample prophecy question 2 (hard)?",
        "choices": [
          "Elijah",
          "Solomon",
          "Isaiah",
          "Peter"
        ],
        "answer": 3,
        "reference": "Genesis 9:13",
        "verseText": "Sample verse text from Genesis 9:13."
      },
      {
        "question": "Sample prophecy question 3 (hard)?",
        "choices": [
          "Abraham",
          "Peter",
          "Samuel",
          "Isaiah"
        ],
        "answer": 1,
        "reference": "2 Samuel 13:26",
        "verseText": "Sample verse text from 2 Samuel 13:26."
      },
      {
        "question": "Sample prophecy question 4 (hard)?",
        "choices": [
          "Peter",
          "Elijah",
          "Jeremiah",
          "Samuel"
        ],
        "answer": 3,
        "reference": "1 Kings 3:6",
        "verseText": "Sample verse text from 1 Kings 3:6."
      },
      {
        "question": "Sample prophecy question 5 (hard)?",
        "choices": [
          "David",
          "Jeremiah",
          "Solomon",
          "Abraham"
        ],
        "answer": 2,
        "reference": "Acts 7:5",
        "verseText": "Sample verse text from Acts 7:5."
      },
      {
        "question": "Sample prophecy question 6 (hard)?",
        "choices": [
          "Samuel",
          "Jeremiah",
          "Peter",
          "Paul"
        ],
        "answer": 0,
        "reference": "Matthew 16:8",
        "verseText": "Sample verse text from Matthew 16:8."
      },
      {
        "question": "Sample prophecy question 7 (hard)?",
        "choices": [
          "Jeremiah",
          "David",
          "Samuel",
          "Paul"
        ],
        "answer": 3,
        "reference": "Matthew 11:6",
        "verseText": "Sample verse text from Matthew 11:6."
      },
      {
        "question": "Sample prophecy question 8 (hard)?",
        "choices": [
          "Samuel",
          "Moses",
          "Jeremiah",
          "David"
        ],
        "answer": 1,
        "reference": "Matthew 12:4",
        "verseText": "Sample verse text from Matthew 12:4."
      },
      {
        "question": "Sample prophecy question 9 (hard)?",
        "choices": [
          "Abraham",
          "Isaiah",
          "Jeremiah",
          "Peter"
        ],
        "answer": 0,
        "reference": "Genesis 12:22",
        "verseText": "Sample verse text from Genesis 12:22."
      },
      {
        "question": "Sample prophecy question 10 (hard)?",
        "choices": [
          "Abraham",
          "David",
          "Elijah",
          "Paul"
        ],
        "answer": 3,
        "reference": "Judges 2:10",
        "verseText": "Sample verse text from Judges 2:10."
      }
    ]
  }
};

const quizQuestions = buildQuizQuestionPool(groupedQuestions);
