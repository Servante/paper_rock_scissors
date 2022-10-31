function getComputerChoice() {
  array = ['Rock', 'Paper', 'Scissors']
  return randomElement = array[Math.floor(Math.random() * array.length)].toUpperCase();
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

function playRound(computerSelection, playerSelection) {
  checkWin(computerSelection, playerSelection)
}

function game() {
  
}

// const computerSelection = getComputerChoice()
// const playerSelection = getPlayerChoice()
 

// console.log(playRound(computerSelection, playerSelection))

console.log(checkWin(getComputerChoice(), getPlayerChoice()))