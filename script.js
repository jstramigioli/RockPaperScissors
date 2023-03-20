// Create a function called game, wich makes a 5 round game that keeps score and reports a winner
function game() {
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        // Set computerSelection
    const computerSelection = getComputerChoice();
    // Set playerSelection
    let playerSelection = prompt('Select your weapon');
    // Play Round
       let roundResult = playRound(playerSelection, computerSelection, playerScore, computerScore);
    // Update scores
    playerScore = roundResult.playerScore;
    computerScore = roundResult.computerScore;
    // Log score
        console.log(roundResult.resultMessage)
        console.log('Player score: '+playerScore)
        console.log('Computer score: '+computerScore)
    }
}

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

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection.toLowerCase();
    let resultMessage;
    switch(true) {
        case (playerSelection === computerSelection) : 
            resultMessage = 'It\'s a TIE!';
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors') : 
            playerScore++;
            resultMessage = 'You win, rock beats scissors';
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper') : 
            computerScore++;
            resultMessage = 'You lose, paper wraps rock';
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') : 
            computerScore++;
            resultMessage = 'You lose, scissors cut paper';
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock') : 
            playerScore++;
            resultMessage = 'You win, paper wraps rock';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') : 
            playerScore++;
            resultMessage = 'You win, scissors cut paper';
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock') : 
            computerScore++;
            resultMessage = 'You lose, rock smashes scissors';
            break;
        default: 
            return "something went wrong with playRound";
    }
    return { playerScore, computerScore, resultMessage };
}

game()
