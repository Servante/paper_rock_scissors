let playerScore = 0
let computerScore = 0

function getComputerSelection() {
  array = ['Rock', 'Paper', 'Scissors']
  return randomElement = array[Math.floor(Math.random() * array.length)].toLowerCase();
}

function getPlayerChoice() {
  const choice = prompt('Enter "paper", "rock", or "scissors"').toUpperCase();
  return choice;
}

function checkWin(computerSelection, playerSelection) {
  if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
    alert('You Lose! rock beats scissors!');
    return 'c';
  } else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
    alert('You win! Paper beats rock!');
    return 'p';
  } else if (computerSelection == 'ROCK' && playerSelection == 'ROCK') {
    alert('Draw!');
    return 'd';
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
    alert('Draw!');
    return 'd';
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
    alert('You win! Rock beats scissors!');
    return 'p';
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
    alert('You lose! Scissors beat paper!');
    return 'c';
  } else if (computerSelection == 'PAPER' && playerSelection == 'PAPER') {
    alert('Draw!');
    return 'd';
  } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
    alert('You win! Paper beats rock!');
    return 'p';
  } else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
    alert('You win! Scissors beats paper!');
    return 'p';
  } 
}

function score(input) {
  if (input == "c") {
    computerScore++;
  } else if (input = "p") {
    playerScore++;
  } else {
    return;
  }
}

function playRound(computerSelection, playerSelection) {
  score(checkWin(computerSelection, playerSelection));
  return playerScore;
}

function gameOver() {
  (playerScore > computerScore) ? alert("Congrats, player wins!") : alert("Sorry, the computer wins!");
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     // console.log(i)
//     playRound(getComputerChoice(), getPlayerChoice());
//   }
//   gameOver();
// }

// console.log(game())
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.results');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.value);
     var playerSelection = document.createElement('p');
     playerSelection.innerText = e.target.value;
     var computerSelection = document.createElement('p');
     computerSelection.innerText = getComputerSelection();
     result.appendChild(playerSelection);
     result.appendChild(computerSelection);
  });
});

