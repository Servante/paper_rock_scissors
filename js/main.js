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
    return alert('You Lose! rock beats paper!');
  } else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
    alert('You win! Paper beats rock!');
  } else if (computerSelection == 'ROCK' && playerSelection == 'ROCK') {
    alert('Draw!');
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'SCISSORS') {
    alert('Draw!');
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
    alert('You win! Rock beats scissors!');
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
    alert('You lose! Scissors beat paper!');
  } else if (computerSelection == 'PAPER' && playerSelection == 'PAPER') {
    alert('Draw!');
  } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
    alert('You win! Paper beats rock!');
  } else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
    alert('You lose! Scissors beats paper!');
  } 
}

function playRound(computerSelection, playerSelection) {
  checkWin(computerSelection, playerSelection)
}

const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()
 

console.log(playRound(computerSelection, playerSelection))