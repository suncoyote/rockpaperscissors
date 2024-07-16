
function getComputerChoice() {
 let choiceNumber = Math.floor(Math.random()*(3 -0) + 1);

 if (choiceNumber == 1) { 
    return "rock"

 }else if (choiceNumber == 2){ 
    return "paper"

 }else { 
    return "scissors"

 }

}

console.log (getComputerChoice())

function getHumanChoice() {
    let input = prompt('Please enter your choice: (you can pick "Rock", "Paper" or "Scissors")')
    return input
}
console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0



