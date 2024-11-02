let humanChoice;
let computerChoice = Math.floor(Math.random() * 3) + 1
let humanScore = 0
let computerScore = 0
let trials = 5
const humanSelection = getHumanChoice()
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


function getHumanChoice () {
    humanChoice = prompt("Please enter your choice").toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    }
    else {
        alert("Please give a valid answer")
    }
    
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`)
        computerScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beat ${computerChoice}`)
        humanScore += 1
    }
    else if (humanChoice === computerChoice) {
        console.log("TIE!")
        humanScore += 1
        computerScore += 1
    }
}


// playRound(humanSelection, computerSelection)



function playGame() {
    
    for (i = 1; i <= trials; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {
        console.log("The ultimate win!!!")
    }
    else if (humanScore < computerScore) {
        console.log("The ultimate loss!!!")
    }
    else {
        console.log("The ultimate tie!!!")
    }
}

playGame()