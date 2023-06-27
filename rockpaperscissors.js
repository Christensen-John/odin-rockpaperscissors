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

// function round(playerSelection, computerSelection) {
//     playerSelection = sanitize(playerSelection);
//     if(playerSelection === 'rock') {
//         if(computerSelection === 'rock') {
//             console.log("You tie! You both played Rock");
//         } else if(computerSelection === 'paper') {
//             console.log("You lose! Paper beats Rock!");
//         } else {
//             console.log("You win! Rock beats Scissors!");
//         }
//     } 
// }

console.log(getComputerChoice());