/**
 * Space Spondoolies a game of chance, hit the jackpot and you will be treated like royality onsup 
 * the Motership.
 * Hit Zero and you are fast food take away!
 */


 document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "spin") {
                diceOne();
                diceTwo();
                totalScore();
                statusReport();
            } else {
                alert("Pressed");
            }
        })
    }
})

function diceOne() {
    let theDice = Math.floor(Math.random() * 6 + 1);
    let diceOneId = document.getElementById("dice-one");
    diceOneId.innerText = theDice;
    return theDice;
}


function diceTwo() {
    let theDice = Math.floor(Math.random() * 6 + 1);
    let diceTwoId = document.getElementById("dice-two");
    diceTwoId.innerText = theDice;
    return theDice;
}

function statusReport() {
    let statusScore = parseInt(document.getElementById("total-score").innerText);
    let report = document.getElementById("status-report");
    let divStatus = document.getElementById("div-status");
    let showButton = document.getElementById("hide-button");

    if(statusScore <= 0 && statusScore >= -9999 ) {
            report.innerText = "Do something, you are going to be Ailen Fast Food!"
            divStatus.style.borderColor = "red";
    } else if(statusScore >= 0 && statusScore <= 9999) {
            report.innerText = "Looking good you humans are a lucky race!!"
            divStatus.style.borderColor = "green";
    } else if(statusScore >= 10000) {
            divStatus.innerHTML = `
            <h2>Status Report:</h2>
            <p id="status-report">Let the good times begin, the Mother-Ship is coming to collect you!</p>
            <p><img src="/assets/images/favicon_io/android-chrome-512x512.png" id="image-ailen-512" /></p>
            `
            divStatus.style.borderColor = "yellow";
            showButton.classList.remove("my-button-hide");
    } else if(statusScore <= -10000) {
            divStatus.innerHTML = `
            <h2>Status Report:</h2>
            <p id="status-report">We are hungry, the Catering-Ship is coming for you</p>
            <p><img src="/assets/images/favicon_io/hungry_alien.png" id="image-ailen-hungry" /></p>
            `
            divStatus.style.borderColor = "red";
            showButton.classList.remove("my-button-hide");
    } else {
            report.innerText = "Computing updates....."
            divStatus.style.borderColor = "orange";
    }
}

function scoreBoard() {

        let allDice = diceOne() + diceTwo();
        
        if (allDice % 2 === 0 ) {
            allDice += (2000 - allDice);
            return[allDice]
        } else if (allDice % 2 === 1 ) {
             allDice -= (2000 + allDice);
             return[allDice]
        } else {
            allDice += (1000 - allDice);
            return[allDice]
        }
}


function totalScore() {
    let oldScore = parseInt(document.getElementById("total-score").innerText);
    document.getElementById("total-score").innerText = oldScore + parseInt(scoreBoard());
}
