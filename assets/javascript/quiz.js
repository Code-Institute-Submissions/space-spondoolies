// Space Quiz

// Space Questions
var spaceQuestions = [
  {
    question: "What was the first mammal in space?",
    answers: {
      a: "Monkey",
      b: "Dog",
      c: "Human",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the largest Planet in the Earth's solar system?",
    answers: {
      a: "Sun",
      b: "Saturn",
      c: "Jupiter",
    },
    correctAnswer: "c",
  },
  {
    question: "Approx how many times larger is the Sun compared to the Earth?",
    answers: {
      a: "1 Hundred Thousand",
      b: "1 million",
      c: "1 Thousand",
    },
    correctAnswer: "b",
  },
  {
    question: "What country was the first person in space from?",
    answers: {
      a: "China",
      b: "USA",
      c: "Russia",
    },
    correctAnswer: "c",
  },
  {
    question: "About how old is the Earth's solar system?",
    answers: {
      a: "4.6 billion years old",
      b: "1.6 billion years old",
      c: "8.6 billion years old",
    },
    correctAnswer: "a",
  },
];
// Space Questions End

var quizBox = document.getElementById("quiz-quiz");
var resultsBox = document.getElementById("results-quiz");
var submitButton = document.getElementById("submit-quiz");

spaceQuiz(spaceQuestions, quizBox, resultsBox, submitButton);

function spaceQuiz(questions, quizBox, resultsBox, submitButton) {

  function theQuestions(questions, quizBox) {
    // store the output and the answer choices
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<p class="question-quiz"><b>' +
          questions[i].question +
          "</b></p>" +
          '<p class="answers-quiz">' +
          answers.join("") +
          "</p>"
      );
    }

    quizBox.innerHTML = output.join("");
  }

  // theQuestions() End
  function theResults(questions, quizBox, resultsBox) {
    // gather answer containers from our quiz
    var answerBoxes = quizBox.querySelectorAll(".answers-quiz");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerBoxes[i].querySelector("input[name=question" + i + "]:checked") ||
        {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerBoxes[i].style.color = "whitesmoke";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerBoxes[i].style.color = "brown";
      }
    }

    // show number of correct answers out of total
    resultsBox.innerHTML = numCorrect + " out of " + questions.length;
  }
  // theResults() End

  theQuestions(questions, quizBox);

  submitButton.addEventListener("click", function() {
    theResults(questions, quizBox, resultsBox);
    alert = function() {};
  });

}
