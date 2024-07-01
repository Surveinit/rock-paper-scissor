let humanScore = 0;
let computerScore = 0;


// This function handles the logic behind the ROCK PAPER SCISSOR
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();


    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            console.log(`You DRAW as you chose ${humanChoice} and computer chose ${computerChoice}`)
        }
        if (computerChoice === 'paper'){
            console.log(`You LOSE as you chose ${humanChoice} and computer chose ${computerChoice}`)
            computerScore += 1;
        }
        if (computerChoice === 'scissor'){
            console.log(`You WIN as you chose ${humanChoice} and computer chose ${computerChoice}`)
            humanScore += 1
        }
    }


    if (humanChoice === 'paper'){
        if (computerChoice === 'rock'){
            console.log(`You WIN as you chose ${humanChoice} and computer chose ${computerChoice}`)
            humanScore += 1
        }
        if (computerChoice === 'paper'){
            console.log(`You DRAW as you chose ${humanChoice} and computer chose ${computerChoice}`)
        }
        if (computerChoice === 'scissor'){
            console.log(`You LOSE as you chose ${humanChoice} and computer chose ${computerChoice}`)
            computerScore += 1
        }
    }


    if (humanChoice === 'scissor'){
        if (computerChoice === 'rock'){
            console.log(`You LOSE as you chose ${humanChoice} and computer chose ${computerChoice}`)
            computerScore += 1
        }
        if (computerChoice === 'paper'){
            console.log(`You WIN as you chose ${humanChoice} and computer chose ${computerChoice}`)
            humanScore += 1
        }
        if (computerChoice === 'scissor'){
            console.log(`You DRAW as you chose ${humanChoice} and computer chose ${computerChoice}`)
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

// Because we have 5 rounds
function playGame(){
    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(Math.floor(Math.random() * 3));

        playRound(humanSelection, computerSelection);
    }

    console.log(`You ${humanScore} : Computer ${computerScore}`)
}


playGame()