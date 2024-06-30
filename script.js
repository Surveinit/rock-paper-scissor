let humanScore = 0;
let computerScore = 0;


// This function handles the logic behind the ROCK PAPER SCISSOR
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // If human chooses ROCk
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

    // If human chooses PAPER
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

    // If human chooses SCISSOR
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

// This funciton chooses between ROCK PAPER & SCISSOR by a random_num arg
function getComputerChoice(random_num){
    if (random_num === 0){
        // console.log('Rock');
        return 'Rock';
    }
    
    if (random_num === 1){
        // console.log('Paper');
        return 'Paper';
    }

    if (random_num === 2){
        // console.log('Scissor');
        return 'Scissor';
    }
    
}

// Prompts the user to choose ROCK PAPER SCISSOR
function getHumanChoice(){
    let human_choice = prompt('Whats your choice, Human?')
    // console.log(human_choice)
    return human_choice;
}

// Calls playRound() 5 times and console logs the Score
function playGame(){
    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(Math.floor(Math.random() * 3));

        playRound(humanSelection, computerSelection);
    }

    console.log(`You ${humanScore} : Computer ${computerScore}`)
}


playGame()