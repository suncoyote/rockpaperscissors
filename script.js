
function getComputerChoice() {
 var choiceNumber = Math.floor(Math.random()*(3 -0) + 1);

 if (choiceNumber == 1) { 
    return "Rock"

 }else if (choiceNumber == 2){ 
    return "Paper"

 }else { 
    return "Scissors"
    
 }

}

var computerChoice = getComputerChoice()
console.log (computerChoice)



