// Create function getComputerChoice that will randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {

    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissors';
            break;
        default: return 'getComputerChoice Failed'
    }
}

// Create a function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(true) {
        case (playerSelection === computerSelection) : return 'It\'s a TIE!';
        break;
        case (playerSelection === 'rock' && computerSelection === 'scissors') : return 'You win, rock beats scissors';
        break;
        case (playerSelection === 'rock' && computerSelection === 'paper') : return 'You lose, paper wraps rock';
        break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') : return 'You lose, scissors cut paper';
        break;
        case (playerSelection === 'paper' && computerSelection === 'rock') : return 'You win, paper wraps rock';
        break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') : return 'You win, scissors cut paper';
        break;
        case (playerSelection === 'scissors' && computerSelection === 'rock') : return 'You lose, rock smashes scissors';
        break;
        default: return "something went wrong with playRound"
    }

}

// Set playerSelection
const playerSelection = "Rock";

// Set computerSelection
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))