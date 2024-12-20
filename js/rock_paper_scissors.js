function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Enter your choice (Rock, Paper, Scissors): ");
  const validChoice = ["Rock", "Paper", "Scissors"];
  if (validChoice.includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice.Please choose Rock, Paper or Scissors.");
    return getHumanChoice();
  }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return "Tie";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
    return "Human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
    return "Computer";
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  console.log("Starting a game of 5 rounds!");

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

  if(humanScore > computerScore) {
    console.log("You win the game!");
  }else if (computerScore > humanScore) {
    console.log("You lose the game!");
  }else {
    console.log("The game is tie!");
  }
}

playGame();