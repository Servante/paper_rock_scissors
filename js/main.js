let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
};

function checkGameWin() {
  if (userScore >= 5) {
    alert("User wins!");
    gameOver();
  } else if (computerScore >= 5) {
    alert("User loses!");
    gameOver();
  }  
};

function gameOver() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerText = "Choose a move to play again."
}

function win(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerText = `${convertWord(userChoice)} beats ${convertWord(compChoice)}! User wins!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
  checkGameWin();
};

function lose(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore; 
  computerScore_span.innerHTML = computerScore;
  result_p.innerText = `${convertWord(compChoice)} beats ${convertWord(userChoice)}! User loses!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
  checkGameWin();
};

function draw(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerText = `${convertWord(compChoice)} equals ${convertWord(userChoice)}! Draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break; 
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
};


main();






























// let playerScore = 0
// let computerScore = 0

// function getComputerSelection() {
//   array = ['Rock', 'Paper', 'Scissors']
//   return randomElement = array[Math.floor(Math.random() * array.length)].toLowerCase();
// }

// function getPlayerChoice() {
//   const choice = prompt('Enter "paper", "rock", or "scissors"').toUpperCase();
//   return choice;
// }

// function checkWin(computerSelection, playerSelection) {
//   if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
//     alert('You Lose! rock beats scissors!');
//     return 'c';
//   } else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
//     alert('You win! Paper beats rock!');
//     return 'p';
//   } else if (computerSelection == 'ROCK' && playerSelection == 'ROCK') {
//     alert('Draw!');
//     return 'd';
//   } else if (computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
//     alert('Draw!');
//     return 'd';
//   } else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
//     alert('You win! Rock beats scissors!');
//     return 'p';
//   } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
//     alert('You lose! Scissors beat paper!');
//     return 'c';
//   } else if (computerSelection == 'PAPER' && playerSelection == 'PAPER') {
//     alert('Draw!');
//     return 'd';
//   } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
//     alert('You win! Paper beats rock!');
//     return 'p';
//   } else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
//     alert('You win! Scissors beats paper!');
//     return 'p';
//   } 
// }

// function score(input) {
//   if (input == "c") {
//     computerScore++;
//   } else if (input = "p") {
//     playerScore++;
//   } else {
//     return;
//   }
// }

// function playRound(computerSelection, playerSelection) {
//   score(checkWin(computerSelection, playerSelection));
//   return playerScore;
// }

// function gameOver() {
//   (playerScore > computerScore) ? alert("Congrats, player wins!") : alert("Sorry, the computer wins!");
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     // console.log(i)
//     playRound(getComputerChoice(), getPlayerChoice());
//   }
//   gameOver();
// }

// console.log(game())
// const buttons = document.querySelectorAll('button');
// const result = document.querySelector('.results');

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     console.log(e.target.value);
//      var playerSelection = document.createElement('p');
//      playerSelection.innerText = e.target.value;
//      var computerSelection = document.createElement('p');
//      computerSelection.innerText = getComputerSelection();
//      result.appendChild(playerSelection);
//      result.appendChild(computerSelection);
//   });
// });

