function getComputerChoice(random_num){
    if (random_num === 0) {
        console.log('Rock');
    }
    
    if (random_num === 1) {
        console.log('Paper');
    }

    if (random_num === 2) {
        console.log('Scissor');
    }
    
}

getComputerChoice(Math.floor(Math.random() * 3))
