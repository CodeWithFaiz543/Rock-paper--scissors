let userScore = 0;
let computerScore = 0;

const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const messageElement = document.getElementById('message');

const choices = ['Rock', 'Paper', 'Scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('Rock'));
document.getElementById('paper').addEventListener('click', () => playGame('Paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));
document.getElementById('reset').addEventListener('click', resetGame);

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    determineWinner(userChoice, computerChoice);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        messageElement.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        userScore++;
        messageElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        messageElement.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
    updateScores();
}

function updateScores() {
    userScoreElement.textContent = `Your Wins: ${userScore}`;
    computerScoreElement.textContent = `Computer Wins: ${computerScore}`;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScores();
    messageElement.textContent = '';
}
