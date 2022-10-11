/**
 * Space Spondoolies a game of chance, hit the jackpot and you will be treated like royalty onboard
 * the Mother-Ship.
 * Hit Zero and you are fast food take away for hungry Aliens!
 * Find below the secret Alien code. It just might make the retro-lame-game hall of fame.
 * The good news is that I am somehow slowly learning code.
 * Author: James Tierney.
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
        diceOne();
        diceTwo();
        totalScore();
        statusReport();
        hideElements();
      } else {
        alert("Pressed");
      }
    });
  }
});

/**
 * Function to hide elements on first click.
 * Also trying out a new way to declare a function.
 * It works!!!
 **/
let hideElements = () => {
  document.getElementById("user-name").classList.add("my-button-hide");
  document.getElementById("user-name-head").classList.add("my-button-hide");
};

/**
 * Function to give a random number between 1 and 6 to mimic a dice number. Dice one of two.
 **/
function diceOne() {
  let theDice = Math.floor(Math.random() * 6 + 1);
  let diceOneId = document.getElementById("dice-one");
  diceOneId.innerText = theDice;
  return theDice;
}

/**
 * Function to give a random number between 1 and 6 to mimic a dice number. Dice two of two.
 **/
function diceTwo() {
  let theDice = Math.floor(Math.random() * 6 + 1);
  let diceTwoId = document.getElementById("dice-two");
  diceTwoId.innerText = theDice;
  return theDice;
}

/**
 * Function to update status board on the main page. When the total-score is updated logic
 * is used to update the status.
 * */
function statusReport() {
  let statusScore = parseInt(document.getElementById("total-score").innerText); // Grab current score from main dashboard to use for logic decision making.
  let report = document.getElementById("status-report");
  let divStatus = document.getElementById("div-status");
  let showButton = document.getElementById("hide-button");
  let hideButton = document.getElementById("spin-the-dice");
  let userName = document.getElementById("user-name").value;
  let statusRedOrange = `Warning Warning: Do something ${userName}, rub your nose for luck!! Quick hide the Ketchup!`;
  let statusRed = `Red Alert: Do something extreme ${userName}, quick eat a rabbits tail!! Or you are going to be Alien Fast Food!`;
  let statusOrange = `Orange Alert: ${userName}, as you Humans say, your head is above water!!`;
  let statusGreen = `Go Green: Looking good ${userName}, you humans are a lucky species!!`;

  if (statusScore <= 0 && statusScore >= -5000) {
    report.innerText = statusRedOrange;
    divStatus.style.borderColor = "orangered";
  } else if (statusScore <= -5001 && statusScore >= -9999) {
    report.innerText = statusRed;
    divStatus.style.borderColor = "red";
  } else if (statusScore >= 0 && statusScore <= 5000) {
    report.innerText = statusOrange;
    divStatus.style.borderColor = "orange";
  } else if (statusScore >= 5001 && statusScore <= 9999) {
    report.innerText = statusGreen;
    divStatus.style.borderColor = "green";
  } else if (statusScore >= 10000) {
    divStatus.innerHTML = `
            <h2>Status Report:</h2>
            <p id="status-report">Let the good times begin, the Mother-Ship is coming to collect you!</p>
            <p><img src="assets/images/favicon_io/android-chrome-512x512.png" id="image-alien-512" alt="image of a happy alien"/></p>
            `;
    divStatus.style.borderColor = "yellow";
    showButton.classList.remove("my-button-hide");
    hideButton.classList.add("my-button-hide");
  } else if (statusScore <= -10000) {
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
  let allDice = diceOne() + diceTwo();
  let bonusPoints = document.getElementById("bonus-points");

  if (diceOne() === diceTwo()) {
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
 * Grab current score from dashboard and add/subtract new score from scoreboard() function.
 **/
function totalScore() {
  let oldScore = parseInt(document.getElementById("total-score").innerText);
  document.getElementById("total-score").innerText =
    oldScore + parseInt(scoreBoard());
}