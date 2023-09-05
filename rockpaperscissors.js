/* || Variables and Data */
const gameButtons = document.querySelectorAll("div.input>button");
const scoreboard = document.querySelectorAll("div.score-window>h3:last-child");
const resetBtn = document.querySelector("#reset");
const resultLabel = document.querySelector("#roundResult");
let playerScore = 0;
let computerScore = 0;

/* || Event Listener Wiring */
gameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    gameInput(e.target);
  });
});

resetBtn.addEventListener("click", () => {
  let ans = window.confirm("Are you sure you want to reset the scores?");
  if (ans) {
    playerScore = 0;
    computerScore = 0;
    console.clear();
    updateScore();
  }
});
/*
1. Listen for click
2. Save player choice
3. Get computer choice
4. Compare using round()
5. Round updates Scores
*/

/* || Functions */
function gameInput(buttonPressed) {
  let playerChoice = "rock";
  switch (buttonPressed.className) {
    case "paper":
      playerChoice = "paper";
      break;
    case "scissors":
      playerChoice = "scissors";
      break;
  }
  round(playerChoice, getComputerChoice());
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

//This function no longer needed since player no-longer types their choice
// const sanitize = (playerInput) => {
//   if (typeof playerInput === "string") {
//     return playerInput.toLowerCase();
//   }
//   if (playerInput === null) {
//     return null;
//   }
//   alert("Player answered unclearly, using default value.");
//   return "rock";
// };

function round(playerSelection, computerSelection) {
  //Sanitization no longer needed.
  // playerSelection = sanitize(playerSelection);
  if (playerSelection === null) {
    // console.log("Cancel round");
  } else if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      // console.log("You tie! You both played Rock!");
      resultLabel.textContent = "You tied!";
    } else if (computerSelection === "paper") {
      // console.log("You lose! Paper beats Rock!");
      resultLabel.textContent = "The computer won the round!";
      computerScore++;
    } else {
      // console.log("You win! Rock beats Scissors!");
      resultLabel.textContent = "You won the round!";
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      // console.log("You win! Paper beats Rock!");
      resultLabel.textContent = "You won the round!";
      playerScore++;
    } else if (computerSelection === "paper") {
      // console.log("You tie! You both played paper!");
      resultLabel.textContent = "You tied!";
    } else {
      // console.log("You lose! Scissors beats Paper!");
      resultLabel.textContent = "The computer won the round!";
      computerScore++;
    }
  } else {
    if (computerSelection === "rock") {
      // console.log("You lose! Rock beats scissors");
      resultLabel.textContent = "The computer won the round!";
      computerScore++;
    } else if (computerSelection === "paper") {
      // console.log("You win! Scissors beats paper!");
      resultLabel.textContent = "You won the round!";
      playerScore++;
    } else {
      // console.log("You tie! You both played Scissors!");
      resultLabel.textContent = "You tied!";
    }
  }
  updateScore();
}

function updateScore() {
  if (playerScore === 5) {
    window.alert("You won the game!");
    playerScore = 0;
    computerScore = 0;
    resultLabel.textContent = "";
    updateScore();
  }
  if (computerScore === 5) {
    window.alert("You lost the game!");
    playerScore = 0;
    computerScore = 0;
    resultLabel.textContent = "";
    updateScore();
  }
  scoreboard[0].textContent = playerScore;
  scoreboard[1].textContent = computerScore;
}

function game() {
  let rounds = 0;
  let playerScore = 0;
  let computerScore = 0;
}

// || Setup the Game //
game();
