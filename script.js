// Create function getComputerChoice that will randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {

    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'Rock';
            break;
        case 1: return 'Paper';
            break;
        case 2: return 'Scissors';
            break;
        default: return 'No valid number'
    }
}
console.log(getComputerChoice())