let computerScore = 0;
let playerScore = 0;
let roundResult; 
let resultMessage;

const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
btnRock.classList.add('game-btn');

const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
btnPaper.classList.add('game-btn');

const btnScissor = document.createElement('button');
btnScissor.textContent = 'Scissors';
btnScissor.classList.add('game-btn');

const btnContainer = document.querySelector('#btnContainer');

const btnPlayAgain = document.createElement('button');
btnPlayAgain.textContent = 'Play again?';

const txtRoundResult = document.createElement('p');
txtRoundResult.classList.add('txtResult');


const txtCurrentScore = document.createElement('p')
txtCurrentScore.classList.add('currentScore');


let playRoundListener = function(e) {if 
    (e.target.classList.contains('game-btn')) 
    playRound(e)}

function getRoundResult(playerSelection, playerScore, computerScore) {
    const computerSelection = getComputerChoice();
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
            return "something went wrong with getRoundResult";
    }
    txtRoundResult.textContent = resultMessage;
    txtCurrentScore.textContent = playerScore+' - '+computerScore;
    return { playerScore, computerScore, resultMessage };
}


// Add event listener to buttons and play round with corresponding input
function playWhenPressed(playerScore, computerScore) {
    btnContainer.addEventListener('click', playRoundListener)
}

function playRound(e) {
        if(e.target && e.target.tagName === 'BUTTON') {
        roundResult = getRoundResult(e.target.textContent.toLowerCase(), playerScore, computerScore);
        playerScore = roundResult.playerScore;
        computerScore = roundResult.computerScore;
        console.log(roundResult.resultMessage)
        console.log('Player score: '+playerScore)
        console.log('Computer score: '+computerScore)
        if (playerScore === 5) {
            txtRoundResult.textContent = 'You win the game!';
            stopGame()
        }
        else if (computerScore === 5) {
            txtRoundResult.textContent = 'You lost the game!';
            stopGame()
        }
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

function initGame() {
    computerScore = 0;
    playerScore = 0;
    btnContainer.appendChild(txtCurrentScore);
    btnContainer.appendChild(txtRoundResult);
    btnContainer.appendChild(btnRock);
    btnContainer.appendChild(btnPaper);
    btnContainer.appendChild(btnScissor);
    txtCurrentScore.textContent = playerScore+' - '+computerScore;
}

function stopGame() {
    btnContainer.removeEventListener('click', playRoundListener)
    btnContainer.removeChild(btnRock);
    btnContainer.removeChild(btnPaper);
    btnContainer.removeChild(btnScissor);
    btnContainer.removeChild(txtRoundResult);
    btnContainer.appendChild(btnPlayAgain);
    btnPlayAgain.addEventListener('click', playAgain);
    txtRoundResult.textContent = 'Choose your Weapon';
}

function playAgain() {
    btnContainer.removeChild(btnPlayAgain);
    game()
}

function game() {
    initGame();
    playWhenPressed(playerScore, computerScore);
    }
    
game()





