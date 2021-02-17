const qBank = [
  {
    question:
      "Which year did David Beckham leave Manchester United?   ",
    answers: ["2004", "2007", "2003", "2000"],
    correct: "2003",
    questionId: "099099"
  },
  {
    question:
      'When did Zlatan Ibrahimovic Joined Manchester United"?',
    answers: ["2017", "2016", "2015", "2018"],
    correct: "2016",
    questionId: "183452"
  },
  {
    question:
      "How many games has Ryan Giggs represented Manchester United (total Appearances)?",
    answers: ["1002", "856", "941", "963"],
    correct: "963",
    questionId: "267908"
  },
  {
    question: "Which team is the most decorated football team in England?",
    answers: [
      "Manchester United",
      "Manchester United",
      "Manchester United",
      "Manchester United"
    ],
    correct: "Manchester United",
    questionId: "333247"
  },
  {
    question: "How long did Sir Alex Ferguson manage United?",
    answers: ["26 years 194 days", "25 years 221 days", "27 years 194 days", "23 years 23 days"],
    correct: "26 years 194 days",
    questionId: "496293"
  },
  {
    question:
      "How many players have won the Ballon d'Or while playing for Manchester United?",
    answers: [
      "One",
      "Seven",
      "Four",
      "Three"
    ],
    correct: "Four",
    questionId: "588909"
  },
  {
    question:
      'Who won the UEFA Club footaller of the year in 1999?',
    answers: ["Ryan Giggs", "David Beckham", "Paul Scholes", "Eric Cantona"],
    correct: "David Beckham",
    questionId: "648452"
  },
  {
    question: "When did United win their first First Division / Premier League title?",
    answers: ["1955-56", "1907-08", "1922-23", "1942-43"],
    correct: "1907-08",
    questionId: "786649"
  },
  {
    question:
      "Who is the only player have won CONCACAF Gold Cup while playing for United?",
    answers: ["Di Maria", "Javier Hernández", "Edison Cavani", "Falcao"],
    correct: "Javier Hernández",
    questionId: "839754"
  },
  {
    question:
      "Who holds the shortest premier league appearance record for Manchester United (11 seconds) ?",
    answers: [
      "Ole Gunnar Solskjaer",
      "Chris Smalling",
      "Javier Hernández",
      "Rio Ferdinand"
    ],
    correct: "Chris Smalling",
    questionId: "98390"
  },
  {
    question: "How many goals has Sir Bobby Charlton socred for Manchester United?",
    answers: ["253", "237", "179", "249"],
    correct: "249",
    questionId: "1071006"
  },
  {
    question: "How many players have won FIFA world cup while playing for Manchester United?",
    answers: ["Five", "Ten", "Seven", "Three"],
    correct: "Five",
    questionId: "1174154"
  },
  {
    question: "Which year did Manchester United win FIFA Club World Cup?",
    answers: ["2003", "2007", "2008", "2011"],
    correct: "2008",
    questionId: "1226535"
  },
  {
    question: "When was Manchester United turned into professional football team?",
    answers: ["1888", " 1885", "1901", "1890"],
    correct: "1885",
    questionId: "1310938"
  },
  {
    question: "What was Manchester United's original name?",
    answers: ["Newton Heath L&YR F.C.", "Charlton L&YR F.C.", "Red Devil FC", "MANU FC"],
    correct: "Newton Heath L&YR F.C.",
    questionId: "4811162"
  },
  {
    question: "How many goals Nemanja Vidic has scored for Manchester United?",
    answers: ["15", "23", "18", "7"],
    correct: "15",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
