function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // Determine result of matchup
    if (player === computer) {
        return;
    } else if (player === 'rock') {
        switch(computer) {
            case 'scissors':
                playerScore++;
            default:
                computerScore++;
        }
    } else if (player === 'scissors') {
        switch(computer) {
            case 'rock':
                computerScore++;
            default:
                playerScore++;
        }
    } else if (player === 'paper') {
        switch(computer) {
            case 'rock':
                playerScore++;
            case 'scissors':
                computerScore++;
        }
    }
}
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const computerSelection = computerPlay();
        playRound(btn.textContent, computerSelection);
    });
});

// let lossMessage = `You lose, ${computerSelection} beats `;
// let winMessage = `You win!  beats ${computerSelection}`;
// let displayMesage;

// let messageDisplay = document.createElement('div');
// let scoreText = document.createElement('p');
// scoreText.textContent = `Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
// let roundText = document.createElement('p');
// roundText.textContent = displayMessage;
// messageDisplay.appendChild(scoreText);
// messageDisplay.appendChild(roundText);
// document.body.appendChild(messageDisplay);

console.log(`The final score was:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
