
const quizQuestions = [

// GENERAL BIBLE TRIVIA — BEGINNER (10)
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who built the ark?",choices:["David","Noah","Abraham","Moses"],answer:1,reference:"Genesis 6:14",verseText:"Make yourself an ark of gopher wood."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who fought Goliath?",choices:["David","Saul","Joshua","Elijah"],answer:0,reference:"1 Samuel 17:50",verseText:"David prevailed over the Philistine with a sling and a stone."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who was swallowed by a great fish?",choices:["Jonah","Daniel","Samuel","Joseph"],answer:0,reference:"Jonah 1:17",verseText:"The Lord prepared a great fish to swallow Jonah."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who led Israel out of Egypt?",choices:["Joshua","Moses","Aaron","David"],answer:1,reference:"Exodus 3:10",verseText:"I will send you to Pharaoh that you may bring My people out of Egypt."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who was the first man?",choices:["Adam","Noah","Abraham","Isaac"],answer:0,reference:"Genesis 2:7",verseText:"The Lord God formed man of the dust of the ground."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"Old Testament",question:"Who was the strongest man in the Bible?",choices:["Samson","David","Solomon","Elijah"],answer:0,reference:"Judges 16:17",verseText:"If I am shaved, then my strength will leave me."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"Places",testament:"Old Testament",question:"Where was Jesus born?",choices:["Jerusalem","Nazareth","Bethlehem","Galilee"],answer:2,reference:"Matthew 2:1",verseText:"Jesus was born in Bethlehem of Judea."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"People",testament:"New Testament",question:"Who baptized Jesus?",choices:["Peter","John the Baptist","Paul","James"],answer:1,reference:"Matthew 3:13",verseText:"Jesus came from Galilee to John at the Jordan."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"Events",testament:"New Testament",question:"How many disciples did Jesus choose?",choices:["10","11","12","13"],answer:2,reference:"Luke 6:13",verseText:"He chose twelve whom He named apostles."},
{game:"General Bible Trivia",difficulty:"Beginner",category:"Events",testament:"New Testament",question:"What miracle did Jesus perform at a wedding?",choices:["Walked on water","Raised Lazarus","Turned water into wine","Fed 5000"],answer:2,reference:"John 2:9",verseText:"The water that had been made wine."},


// GENERAL BIBLE TRIVIA — STUDENT (10)
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"Old Testament",question:"Who interpreted Pharaoh's dreams?",choices:["Daniel","Joseph","Moses","Aaron"],answer:1,reference:"Genesis 41:25",verseText:"God has shown Pharaoh what He is about to do."},
{game:"General Bible Trivia",difficulty:"Student",category:"Events",testament:"Old Testament",question:"How many days did it rain during the flood?",choices:["30","40","50","60"],answer:1,reference:"Genesis 7:12",verseText:"The rain was on the earth forty days and forty nights."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"Old Testament",question:"Who succeeded Moses?",choices:["Caleb","Joshua","Aaron","Samuel"],answer:1,reference:"Joshua 1:2",verseText:"Moses my servant is dead; arise, go over this Jordan."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"Old Testament",question:"Who wrote many of the Psalms?",choices:["Solomon","David","Moses","Isaiah"],answer:1,reference:"Psalm 23:1",verseText:"The Lord is my shepherd."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"Old Testament",question:"Who built the first temple?",choices:["David","Solomon","Hezekiah","Nehemiah"],answer:1,reference:"1 Kings 6:1",verseText:"He began to build the house of the Lord."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"New Testament",question:"Who denied Jesus three times?",choices:["John","Peter","James","Thomas"],answer:1,reference:"Luke 22:61",verseText:"Peter remembered the word of the Lord."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"New Testament",question:"Who wrote the book of Acts?",choices:["Paul","Luke","John","Peter"],answer:1,reference:"Acts 1:1",verseText:"The former account I made, O Theophilus."},
{game:"General Bible Trivia",difficulty:"Student",category:"People",testament:"New Testament",question:"Who was the tax collector that followed Jesus?",choices:["Matthew","Mark","Luke","Simon"],answer:0,reference:"Matthew 9:9",verseText:"He saw a man named Matthew sitting at the tax office."},
{game:"General Bible Trivia",difficulty:"Student",category:"Events",testament:"New Testament",question:"How many people were fed with five loaves and two fish?",choices:["3000","4000","5000","6000"],answer:2,reference:"Matthew 14:21",verseText:"About five thousand men."},
{game:"General Bible Trivia",difficulty:"Student",category:"Events",testament:"New Testament",question:"On what day did Jesus rise?",choices:["Friday","Saturday","Sunday","Monday"],answer:2,reference:"Matthew 28:1",verseText:"After the Sabbath, as the first day of the week began."},


// GENERAL BIBLE TRIVIA — SCHOLAR (10)
{game:"General Bible Trivia",difficulty:"Scholar",category:"People",testament:"Old Testament",question:"How old was Noah when the flood came?",choices:["500","550","600","650"],answer:2,reference:"Genesis 7:6",verseText:"Noah was six hundred years old."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"Places",testament:"Old Testament",question:"On what mountain did the ark rest?",choices:["Sinai","Ararat","Carmel","Hermon"],answer:1,reference:"Genesis 8:4",verseText:"The ark rested upon the mountains of Ararat."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"People",testament:"Old Testament",question:"Who interpreted the handwriting on the wall?",choices:["Isaiah","Jeremiah","Daniel","Ezekiel"],answer:2,reference:"Daniel 5:25",verseText:"MENE, MENE, TEKEL, UPHARSIN."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"Events",testament:"Old Testament",question:"How many plagues struck Egypt?",choices:["7","10","12","14"],answer:1,reference:"Exodus 7-12",verseText:"Ten plagues fell upon Egypt."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"People",testament:"Old Testament",question:"Who rebuilt Jerusalem's walls?",choices:["Ezra","Nehemiah","Zerubbabel","Haggai"],answer:1,reference:"Nehemiah 6:15",verseText:"The wall was finished."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"People",testament:"New Testament",question:"Who wrote most New Testament letters?",choices:["Peter","John","Paul","James"],answer:2,reference:"Romans 1:1",verseText:"Paul, a servant of Jesus Christ."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"Places",testament:"New Testament",question:"Where were believers first called Christians?",choices:["Rome","Jerusalem","Antioch","Ephesus"],answer:2,reference:"Acts 11:26",verseText:"The disciples were first called Christians in Antioch."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"Events",testament:"New Testament",question:"How many days after resurrection was Pentecost?",choices:["40","50","60","70"],answer:1,reference:"Acts 2:1",verseText:"When the day of Pentecost had fully come."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"People",testament:"New Testament",question:"Who replaced Judas?",choices:["Barnabas","Matthias","Silas","Timothy"],answer:1,reference:"Acts 1:26",verseText:"The lot fell on Matthias."},
{game:"General Bible Trivia",difficulty:"Scholar",category:"Events",testament:"New Testament",question:"Who saw the vision of the sheet with animals?",choices:["Paul","Peter","James","John"],answer:1,reference:"Acts 10:11",verseText:"A great sheet descending from heaven."}

];
