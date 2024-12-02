let humanChoice;
let computerChoice = Math.floor(Math.random() * 3) + 1
let humanScore = 0
let computerScore = 0
let trials = 5
const computerSelection = getComputerChoice()


function getComputerChoice() {
    switch (computerChoice) {
        case(1) :
        computerChoice = "Rock"
        break;

        case(2) :
        computerChoice = "Paper"
        break;

        case(3) :
        computerChoice = "Scissors"
        break;
    }
    computerChoice = computerChoice.toLowerCase()
    return computerChoice
}


const rockSelection = document.querySelector("#rock")
const paperSelection = document.querySelector("#paper")
const scissorsSelection = document.querySelector("#scissors")
const score = document.querySelector(".score")
const finalResult = document.querySelector(".ending")


function playRound(event) {
    let target = event.target
    if (target.id === "rock" && computerSelection === "scissors" 
            || target.id === "paper" && computerSelection === "rock"
            || target.id === "scissors" && computerSelection === "paper"
    ) {
        score.textContent = `You win this round! Your score is ${humanScore += 1} vs opponent's score of ${computerScore}`
    }
    else if (target.id === "rock" && computerSelection === "paper"
            || target.id === "paper" && computerSelection === "scissors" 
            || target.id === "scissors" && computerSelection === "rock"
    ) {
        score.textContent = `You lose this round! Your score is ${humanScore} vs opponent's score of ${computerScore += 1}`
    }
    else if (target.id === "rock" && computerSelection === "rock"
        || target.id === "paper" && computerSelection === "paper"
        || target.id === "scissors" && computerSelection === "scissors"
    ) {
        score.textContent = `Tie! Your score is ${humanScore} vs opponent's score of ${computerScore}`

    }
    if (humanScore === 5) {
        finalResult.textContent = "You finally win!"
        score.remove()
    }
    else if (computerScore === 5) {
        finalResult.textContent = "You finally lose!"
        score.remove()
    }
}

rockSelection.addEventListener("click", playRound)
paperSelection.addEventListener("click", playRound)
scissorsSelection.addEventListener("click", playRound)
