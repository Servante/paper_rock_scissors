function getComputerChoice() {
  array = ['Rock', 'Paper', 'Scissors']
  return randomElement = array[Math.floor(Math.random() * array.length)];
}

function getPlayerChoice() {
  const choice = prompt('Enter "paper", "rock", or "scissors"');
  return choice;
}

console.log(getPlayerChoice())