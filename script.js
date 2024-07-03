let humanScore = 0;
let computerScore = 0;


// This function handles the logic behind the ROCK PAPER SCISSOR
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();


    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
        }
        if (computerChoice === 'paper'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            computerScore += 1;
        }
        if (computerChoice === 'scissor'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            humanScore += 1
        }
    }


    if (humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            humanScore += 1
        }
        if (computerChoice === 'paper'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
        }
        if (computerChoice === 'scissor'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            computerScore += 1
        }
    }


    if (humanChoice === 'scissor'){
        if (computerChoice === 'rock'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            computerScore += 1
        }
        if (computerChoice === 'paper'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
            humanScore += 1
        }
        if (computerChoice === 'scissor'){
            runningScore.textContent = `You ${humanScore} : Computer ${computerScore}`;
        }
    }

}


function getComputerChoice(random_num){
    if (random_num === 0){
        return 'Rock';
    }
    
    if (random_num === 1){
        return 'Paper';
    }

    if (random_num === 2){
        return 'Scissor';
    }
    
}


function getHumanChoice(){
    let human_choice = prompt('Whats your choice, Human?')
    return human_choice;
}


function playGame(human_choice){
    humanSelection = human_choice;
    computerSelection = getComputerChoice(Math.floor(Math.random() * 3));

    playRound(humanSelection, computerSelection);

    if (humanScore >= 5 || computerScore >= 5){
        if (humanScore > computerScore){
            runningScore.textContent = `You won with ${humanScore} points.`;

        }
        else{
            runningScore.textContent = `Computer won with ${computerScore} points.`; 
        }
    }

}


const container = document.querySelector(".container")
const rockButton = document.querySelector(".rockBtn");
const paperButton = document.querySelector(".paperBtn");
const scissorButton = document.querySelector(".scissorBtn");
const runningScore = document.querySelector(".runningScore");

rockButton.addEventListener("click", () => playGame('rock')); 
paperButton.addEventListener("click", () => playGame('paper')); 
scissorButton.addEventListener("click", () => playGame('scissor')); 