function getComputerChoice() {
    let num = Math.random();

    if (num <= 0.33) {
        return "rock";
    }
    else if ((num > 0.33) && (num < 0.66)) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function getHumanChoice() {
   let humanChoice = prompt("Please enter rock, paper, or scissors ");
   humanChoice = humanChoice.toLowerCase();
   return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let commputerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose paper beats rock");
                commputerScore += 1;
            }
            else if (computerChoice == "scissors") {
                console.log("You win rock beats scissors");
                humanScore += 1;
            }
            else {
                console.log("You both picked rock, draw");
            }
        } 
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                console.log("You lose scissors beats paper");
                commputerScore += 1;
        }
            else if (computerChoice == "rock") {
                console.log("You win paper beats rock");
                humanScore += 1;
            }
            else {
                console.log("You both picked paper, draw");
            }
        } 
        else {
            if (computerChoice == "rock") {
                console.log("You lose rock beats scissors");
                commputerScore += 1;
            }
            else if (computerChoice == "paper") {
                console.log("You win scissors beats paper");
                humanScore += 1;
            }
            else {
                console.log("You both picked scissors, draw"); }


        }

    }
    for (i=0; i<5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    console.log(humanScore);
    console.log(commputerScore);
}
playGame()