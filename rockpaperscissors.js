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
        } else if(computerSelection === 'paper') {
            console.log("You lose! Paper beats Rock!");
        } else {
            console.log("You win! Rock beats Scissors!");
        }
    } else if (playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            console.log("You win! Paper beats Rock!");
        } else if(computerSelection === 'paper') {
            console.log("You tie! You both played paper!");
        } else {
            console.log("You lose! Scissors beats Paper!");
        }
    } else {
        if(computerSelection === 'rock') {
            console.log("You lose! Rock beats scissors");
        } else if(computerSelection === 'paper') {
            console.log("You win! Scissors beats paper!");
        } else {
            console.log("You tie! You both played Scissors!");
        }
    } 

}

console.log(getComputerChoice());