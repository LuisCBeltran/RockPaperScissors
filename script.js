let playerScore = 0
let cpuScore = 0

const randomNumber = function (min, max) {
    const rock = '<i class="fa-solid fa-hand-fist"></i>';
    const paper = '<i class="fa-solid fa-hand"></i>';
    const scissors = '<i class="fa-solid fa-hand-scissors"></i>';
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random === 1) {
        document.getElementById('cpupickimg').innerHTML = rock;
    } else if (random === 2) {
        document.getElementById('cpupickimg').innerHTML = paper;
    } else if (random === 3) {
        document.getElementById('cpupickimg').innerHTML = scissors;
    }
    return(random)
}

const match = function (player, cpu) {
    const win = '<p class="resulttext">YOU WIN!</p>';
    const lose = '<p class="resulttext">YOU LOSE!</p>';
    const tie = '<p class="resulttext">TIE!</p>';
    if (player === cpu) {
        document.getElementById('resulttext').innerHTML = tie;
    } else if (player === 1 && cpu === 2) {
        document.getElementById('resulttext').innerHTML = lose;
        cpuScore++
    } else if (player === 1 && cpu === 3) {
        document.getElementById('resulttext').innerHTML = win;
        playerScore++
    } else if (player === 2 && cpu === 1) {
        document.getElementById('resulttext').innerHTML = win;
        playerScore++
    } else if (player === 2 && cpu === 3) {
        document.getElementById('resulttext').innerHTML = lose;
        cpuScore++
    } else if (player === 3 && cpu === 1) {
        document.getElementById('resulttext').innerHTML = lose;
        cpuScore++
    } else if (player === 3 && cpu === 2) {
        document.getElementById('resulttext').innerHTML = win;
        playerScore++
    }
}

const printScore = function (playerScr, cpuScr) {
    let scoretext = "YOU: " + playerScr + " - CPU: " + cpuScr;
    document.getElementById('score').innerHTML = scoretext;
}

const rock = function (num) {
    const random = randomNumber(1, 3); 
    match(num, random);
    printScore(playerScore, cpuScore);
}

const paper = function (num) {
    const random = randomNumber(1, 3); 
    match(num, random);
    printScore(playerScore, cpuScore);
}

const scissors = function (num) {
    const random = randomNumber(1, 3); 
    match(num, random);
    printScore(playerScore, cpuScore);
}

