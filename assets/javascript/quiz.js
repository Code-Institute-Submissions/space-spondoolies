/**
 * Space Quiz
 * Adapted from a quiz game from the "JS - Novice to Ninja" book.
 * **/ 

// Space Questions and Answers
let spaceQuestions = [
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

let quizBox = document.getElementById("quiz-quiz");
let resultsBox = document.getElementById("results-quiz");
let submitButton = document.getElementById("submit-quiz");

spaceQuiz(spaceQuestions, quizBox, resultsBox, submitButton); //Calling spaceQuiz and variables

function spaceQuiz(questions, quizBox, resultsBox, submitButton) {

  function theQuestions(questions, quizBox) {
    
    let output = []; // Store the output and the answer choices
    let answers;    // Variable to store answers

    for (let i = 0; i < questions.length; i++) {
      answers = []; // store the answers

      for (letter in questions[i].answers) {
        answers.push( // filling the answers array
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

      output.push( // filling the output array. Adding html elements.
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

  // theResults()  
  function theResults(questions, quizBox, resultsBox) {
    // gather answer containers from our quiz
    let answerBoxes = quizBox.querySelectorAll(".answers-quiz");

    // keep track of user's answers
    let userAnswer = "";
    let numCorrect = 0;

    for (let i = 0; i < questions.length; i++) { // for each question
      
      userAnswer = (answerBoxes[i].querySelector("input[name=question" + i + "]:checked") || {}).value; // find selected answer

      if (userAnswer === questions[i].correctAnswer) { // if answer is correct
        numCorrect++; // add to the number of correct answers
        answerBoxes[i].style.color = "whitesmoke"; // color the answers green
      } else { // if answer is wrong or blank
        answerBoxes[i].style.color = "brown"; // color the answers red
      }
    }
    
    resultsBox.innerHTML = numCorrect + " out of " + questions.length + "<br>"; // show number of correct answers out of total

  }
  // theResults() End

  // theQuestions()
  theQuestions(questions, quizBox);

  // EventListener
  submitButton.addEventListener("click", function() {
    theResults(questions, quizBox, resultsBox);
    alert = function() {}; // stop alert box from showing
  });
  // EventListener End
}
