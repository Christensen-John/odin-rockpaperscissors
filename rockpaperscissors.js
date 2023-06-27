function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const sanitize = playerInput => playerInput.toLowerCase();
// const choiceComparison = (player1Choice, player2Choice) => (
    
// );

function round(playerSelection, computerSelection) {
    playerSelection = sanitize(playerSelection);
    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            console.log("You tie! You both played Rock!");
            return 0;
        } else if(computerSelection === 'paper') {
            console.log("You lose! Paper beats Rock!");
            return -1;
        } else {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            console.log("You win! Paper beats Rock!");
            return 1;
        } else if(computerSelection === 'paper') {
            console.log("You tie! You both played paper!");
            return 0;
        } else {
            console.log("You lose! Scissors beats Paper!");
            return -1;
        }
    } else {
        if(computerSelection === 'rock') {
            console.log("You lose! Rock beats scissors");
            return -1;
        } else if(computerSelection === 'paper') {
            console.log("You win! Scissors beats paper!");
            return 1;
        } else {
            console.log("You tie! You both played Scissors!");
            return 0;
        }
    } 
}

function game() {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    while(rounds < 5) {
        let playerChoice = prompt("Type rock, paper, or scissors to choose your play");
        let computerChoice = getComputerChoice();
        let result = round(playerChoice, computerChoice);
        switch(result) {
            case -1:
                computerScore++;
            case 1:
                playerScore++;
        }
        rounds++;
    }
    console.log(`Results:
        Player score: ` + playerScore + `
        Computer Score: ` + computerScore);
}

// let playerChoice = 'rock';
// let computerChoice = getComputerChoice();
// console.log("player choice is: " + playerChoice + " and the computers choice is: " + computerChoice);
// round(playerChoice, computerChoice);
game();