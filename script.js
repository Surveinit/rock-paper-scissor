let humanScore = 0;


function getComputerChoice(random_num){
    if (random_num === 0) {
        console.log('Rock');
        return 'Rock';
    }
    
    if (random_num === 1) {
        console.log('Paper');
        return 'Paper';
    }

    if (random_num === 2) {
        console.log('Scissor');
        return 'Scissor';
    }
    
}

getComputerChoice(Math.floor(Math.random() * 3))


function getHumanChoice(){
    let human_choice = prompt('Whats your choice, Human?')
    console.log(human_choice)
    return human_choice;
}


getHumanChoice()