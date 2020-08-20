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

    if (player === computer) {
        return 'tie';
    } else if (player === 'rock') {
        switch(computer) {
            case 'scissors':
                return 'win';
            default:
                return 'lose';
        }
    } else if (player === 'scissors') {
        switch(computer) {
            case 'rock':
                return 'lose';
            default:
                return 'win';
        }
    } else if (player === 'paper') {
        switch(computer) {
            case 'rock':
                return 'win';
            case 'scissors':
                return 'lose';
        }
    } else {
        return 'invalid';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieMessage = 'It\'s a tie!';
    let errorMessage = 'You must choose either Rock, Paper, or Scissors!';

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        let lossMessage = `You lose, ${computerSelection} beats ${playerSelection}`;
        let winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        if (round === 'win') {
            playerScore++;
            console.log(winMessage);
        } else if (round === 'lose') {
            computerScore++;
            console.log(lossMessage);
        } else if (round === 'tie') {
            console.log(tieMessage);
        } else if (round === 'invalid') {
            console.log(errorMessage);
        }
    }
    console.log(`The final score was:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
}

game();