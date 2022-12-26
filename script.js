const randomNumber = function (min, max) {
    const rock = '<i class="fa-solid fa-hand-fist"></i>'
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random === 1) {
        document.getElementById('cpupickimg').innerHTML = rock;
    } else if (random === 2) {
        console.log("I pick PAPER!")
    } else if (random === 3) {
        console.log("I pick SCISSORS!")
    }
}

const rock = function (num) {
    randomNumber(1, 3); 
}

const paper = function (num) {
    console.log("paper")
}

const scissors = function (num) {
    console.log(randomNumber(1, 3))
}

