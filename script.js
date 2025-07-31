
function getComputerChoice() {
    let choice;
    let num = parseFloat(getRandomNumber().toFixed(0))

    if (num === 1) {
        choice = "rock"
    } else if (num === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}

function getPlayerChoice() {
    const input = document.getElementById("userInput")
    let choice = input.value
    return choice
}

function getRandomNumber() {
    return Math.random() * 3
}

let computerScore = 0
let humanScore = 0

function play() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (computerChoice === "rock" && playerChoice === "scissors") {
        console.log(computerChoice + ` beats ` + playerChoice)
        console.log("you lose")
        computerScore++;
    } else if (computerChoice === playerChoice) {
        console.log(computerChoice + ` & ` + playerChoice)
        console.log("Tie")
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        console.log(computerChoice + ` beats ` + playerChoice)
        console.log("you lose")
        computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log(computerChoice + ` beats ` + playerChoice)
        console.log("you lose")
        computerScore++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log(playerChoice+ ` beats ` + computerChoice)
        console.log("you win")
        humanScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log(playerChoice + ` beats ` + computerChoice)
        console.log("you win")
        humanScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log(playerChoice + ` beats ` + computerChoice)
        console.log("you win")
        humanScore++;
    }

    console.log("playerScore: " + humanScore + " / computerScore: " + computerScore )
}