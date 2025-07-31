const startBtn = document.getElementById("playBtn")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.querySelector("#scissors")
const hScore = document.querySelector("#hScore")
const cScore = document.querySelector("#cScore")
const notification = document.querySelector(".notify")
const cimage = document.querySelector("#cimage")
const himage = document.querySelector("#himage")
const descripc = document.querySelector(".descripc")
const descriph = document.querySelector(".descriph")

let active = false
let humanScore = 0
let computerScore = 0

const Options = ["rock","paper","scissors"]

const start = function() {
    if (active === false) {
        startBtn.textContent = "Game in progress..."
        active = true
        notification.textContent = "VS"
        return
    }
    console.log("Game already in progress")
}

const randomNum = function() {
    return Math.floor((Math.random() * 3))
}

const play = function(humChoice) {
    if (!active) {
        notification.textContent = "please start the game first"    
        return
    }
    let compChoice = Options[randomNum()]
    if (humChoice === "rock" && compChoice === "scissors" || humChoice === "paper" && compChoice === "rock" || humChoice === "scissors" && compChoice === "paper") {
        notification.textContent = `${humChoice} beats ${compChoice}`
        humanScore++
    }else if (compChoice === "rock" && humChoice === "scissors" || compChoice === "paper" && humChoice === "rock" || compChoice === "scissors" && humChoice === "paper") {
        notification.textContent = `${humChoice} loses to ${compChoice}`
        computerScore++
    }else{
        notification.textContent = "Tie"
    }
    himage.src = `./images/${humChoice}.jpg`
    cimage.src = `./images/${compChoice}.jpg`

    descripc.textContent = compChoice
    descriph.textContent = humChoice

    hScore.textContent = `Human score: ${humanScore}`
    cScore.textContent = `Bot score: ${computerScore}`

    if (humanScore === 5) {
        end("human")
    }else if (computerScore === 5) {
        end("computer")
    }
}
const end = function(winner) {
    if (winner === "human") {
        notification.textContent = `Congratulations you won (${humanScore} / ${computerScore})`
    }else{
        notification.textContent = `Game Over!`
    }
    startBtn.textContent = "Play!"
    humanScore = 0
    computerScore = 0
    hScore.textContent = `Human score: ${humanScore}`
    cScore.textContent = `Bot score: ${computerScore}`
    active = false
}

startBtn.addEventListener("click",start)
rockBtn.addEventListener("click", () => play("rock"))
paperBtn.addEventListener("click", () => play("paper"))
scissorsBtn.addEventListener("click", () => play("scissor"))