/**
 * Space Spondoolies a game of chance, hit the jackpot and you will be treated like royalty onboard
 * the Mother-Ship.
 * Hit Zero and you are fast food take away for hungry Aliens!
 * Find below the secret Alien code. It just might make the retro-lame-game hall of fame.
 * The good news is that I am somehow slowly learning code.
 * 
 */

/**
 * Event Listener linked to button to trigger functions to use logic to
 * update the dashboard on the main page.
 **/
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "spin") {
          eventSubmit()
      } else {
        alert("Pressed");
      }
    });
  }
});

/**
 * Gather functions to use with eventListener.
*/
function eventSubmit() {
  diceOne();
  diceTwo();
  totalScore();
  statusReport();
  hideElements();
  spaceQuizScore();
  spaceQuizReport();
}

/**
 * Function to hide elements on first click.
 * Also trying out a new way to declare a function.
 * It works!!!
 **/
let hideElements = () => {
  document.getElementById("user-name").classList.add("my-button-hide");
  document.getElementById("user-name-head").classList.add("my-button-hide");
  document.getElementById("hide-section").classList.add("my-button-hide");
};

/**
 * Function to give a random number between 1 and 6 to mimic a dice number. Dice one of two.
 **/
function diceOne() {
  let theDice = Math.floor(Math.random() * 6 + 1); // generate random number and floor it to an int.
  let diceOneId = document.getElementById("dice-one");
  //diceOneId.innerText = theDice; // Sent to dice one window. 

switch (theDice) {
  case 0:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-one.png";
    break;
  case 1:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-two.png";
    break;
  case 2:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-three.png";
    break;
  case 3:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-four.png";
    break;
  case 4:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-five.png";
    break;
  case 5:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-six.png";
    break;
  default:
    diceOneId.src = "/assets/images/favicon_io/dice-six-faces-one.png"
}

  return theDice;
}

/**
 * Function to give a random number between 1 and 6 to mimic a dice number. Dice two of two.
 **/
function diceTwo() {
  let theDice = Math.floor(Math.random() * 6 + 1); // generate random number and floor it to an int.
  let diceTwoId = document.getElementById("dice-two");
  // diceTwoId.innerText = theDice; // Sent to dice two window.

  switch (theDice) {
    case 0:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-one.png";
      break;
    case 1:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-two.png";
      break;
    case 2:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-three.png";
      break;
    case 3:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-four.png";
      break;
    case 4:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-five.png";
      break;
    case 5:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-six.png";
      break;
    default:
      diceTwoId.src = "/assets/images/favicon_io/dice-six-faces-one.png"
  }

  return theDice;
}

/**
 * Function to update status board on the main page. When the total-score is updated logic
 * is used to update the status.
 * Have to find away to simplify code.
 **/
function statusReport() {
  let statusScore = parseInt(document.getElementById("total-score").innerText); // Capture current score from main dashboard to use for logic decision making.
  let report = document.getElementById("status-report");
  let divStatus = document.getElementById("div-status");
  let showButton = document.getElementById("hide-button");
  let hideButton = document.getElementById("spin-the-dice");
  let userName = document.getElementById("user-name").value;
  let statusRedOrange = `Warning Warning: Do something ${userName}, rub your nose for luck!! Quick hide the Ketchup!`;
  let statusRed = `Red Alert: Do something extreme ${userName}, quick eat a rabbits tail!! Or you are going to be Alien Fast Food!`;
  let statusOrange = `Orange Alert: ${userName}, as you Humans say, your head is above water!!`;
  let statusGreen = `Go Green: Looking good ${userName}, you humans are a lucky species!!`;

  if (statusScore <= 0 && statusScore >= -5000) { // Logic to send various message to the "Status Report" window.

    report.innerText = statusRedOrange; // Send statusRedOrange variable literal string to the "Status Report" window.
    divStatus.style.borderColor = "orangered"; // Change border color of "Status Report Window".

  } else if (statusScore <= -5001 && statusScore >= -9999) {

    report.innerText = statusRed;
    divStatus.style.borderColor = "red";

  } else if (statusScore >= 0 && statusScore <= 5000) {

    report.innerText = statusOrange;
    divStatus.style.borderColor = "orange";

  } else if (statusScore >= 5001 && statusScore <= 9999) {

    report.innerText = statusGreen;
    divStatus.style.borderColor = "green";

  } else if (statusScore >= 10000) { // Send winning statement and image to "Status Report" window.

    divStatus.innerHTML = `
            <h2>Status Report:</h2>
            <p id="status-report">Let the good times begin, the Mother-Ship is coming to collect you!</p>
            <p><img src="assets/images/favicon_io/android-chrome-512x512.png" id="image-alien-512" alt="image of a happy alien"/></p>
            `;
    divStatus.style.borderColor = "yellow";
    showButton.classList.remove("my-button-hide");
    hideButton.classList.add("my-button-hide");

  } else if (statusScore <= -10000) { // Send losing statement and image to "Status Report" window.

    divStatus.innerHTML = `
            <h2>Status Report:</h2>
            <p id="status-report">We are hungry!! The Catering-Ship is coming for you!</p>
            <p><img src="assets/images/favicon_io/hungry_alien.png" id="image-alien-hungry" alt="image of hungry alien"/></p>
            `;
    divStatus.style.borderColor = "red";
    showButton.classList.remove("my-button-hide");
    hideButton.classList.add("my-button-hide");

  } else {

    report.innerText = "Computing updates.....";
    divStatus.style.borderColor = "orange";

  }
}

/**
 * Convert dice scores to higher values using the modulo operator
 * to check for odd and even numbers.
 * The return values are stored in a array to allow scores to increment or decrement.
 **/
function scoreBoard() {
  let dieOne = diceOne();
  let dieTwo = diceTwo();
  let allDice = dieOne + dieTwo;
  let bonusPoints = document.getElementById("bonus-points");

  if (dieOne === dieTwo) {

    //Bonus Points for a double.
    allDice += 2500 - allDice;
    bonusPoints.classList.toggle("bonus-hide");
    return [allDice];

  } else if (allDice % 2 === 0) {

    //Even numbers.
    allDice += 2000 - allDice;
    bonusPoints.classList.add("bonus-hide");
    return [allDice];

  } else if (allDice % 2 === 1) {

    //Odd numbers.
    allDice -= 2000 + allDice;
    bonusPoints.classList.add("bonus-hide");
    return [allDice];

  } else {

    allDice += 1000 - allDice;
    return [allDice];

  }
}

/**
 * Capture score from Space Quiz.
 **/
 function spaceQuizScore() { // Get the Space Quiz score from quiz.js

  let quizScore = parseInt(document.getElementById("results-quiz").innerText[0]);
  return parseInt(quizScore);

 }
/**
 * Report Space Quiz correct answers and give it a value.
 * Display a report in the "Status Report Window".
 **/
 function spaceQuizReport() {

  let quizScore = spaceQuizScore();
  let quizReport = document.getElementById("space-quiz-report");
  let resultsBox = document.getElementById("results-quiz");

    if (quizScore === 0) {

      quizReport.innerText = "You got 0 quiz bonus points"
      return 0;

    } else if (quizScore === 1) {

    quizReport.innerText = "You got 50 quiz bonus points"
    return 50;

  } else if (quizScore === 2) {

    quizReport.innerText = "You got 100 Space Quiz bonus points"
    return 100;

  } else if (quizScore === 3) {

    quizReport.innerText = "You got 150 Space Quiz bonus points"
    return 150;

  } else if (quizScore === 4) {

    quizReport.innerText = "You go 200 Space Quiz bonus points"
    return 200;

  } else if (quizScore === 5) {

    quizReport.innerText = "You got 250 Space Quiz bonus points"
    return 250;

  } else {

    quizReport = "No Space Quiz Points!!!"
    return 0;

  }
  
}

/**
 * Capture current score from dashboard 
 * and add new score from scoreboard() function.
 * Add bonus score from Space Quiz.
 **/
function totalScore() {

  let alienQuizScore = spaceQuizReport();
  let oldScore = parseInt(document.getElementById("total-score").innerText);
  document.getElementById("total-score").innerText = oldScore + parseInt(scoreBoard()) + parseInt(alienQuizScore);

}

