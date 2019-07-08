const choices = document.querySelectorAll('.box-select');
const score = document.querySelector('.score');
const result = document.querySelector('.text-result');
const comChoice = document.querySelector('.com-choice-box');
const userChoice = document.querySelector('.user-choice-box');
const scoreboard = {
    player: 0
}

// Play Game
function play() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice, playerChoice);
}

// Get Computer Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get Game winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice, playerChoice) {
    comChoice.innerHTML = `
        <img src="images/${computerChoice}.png" alt="">
    `;

    userChoice.innerHTML = `
        <img src="images/${playerChoice}.png" alt="">
    `;

    if (winner == 'player') {
        scoreboard.player++;
        score.innerHTML = `
        <h2 class="score">Your score : ${scoreboard.player}</h2>
        `;
        result.innerHTML = `
            <h2>You Win</h2>
        `;
    } else if (winner == 'computer') {
        result.innerHTML = `
            <h2>You Lose</h2>
        `;
    } else {
        result.innerHTML = `
            <h2>Draw</h2>
        `;
    }
}

// Event Listner
choices.forEach((choice) => {
    choice.addEventListener('click', play);
});