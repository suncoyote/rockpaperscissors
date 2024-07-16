
function getComputerChoice() {
   
   let choiceNumber = Math.floor(Math.random()*(3 -0) + 1 );
   if (choiceNumber == 1) { 
      return "rock"

   }else if (choiceNumber == 2){ 
      return "paper"

   }else { 
      return "scissors"

   };



}


function getHumanChoice() {
    return prompt('Please enter your choice: (you can pick "Rock", "Paper" or "Scissors")').toLowerCase();
    
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
   if((humanChoice === "rock") && (computerChoice === "rock")){ 
      console.log ("Tie!")
      
   }else if((humanChoice === "rock") && (computerChoice === "paper")){ 
      console.log ("You lose! Paper covers rock.")

   }else if((humanChoice === "rock") && (computerChoice ==="scissors")){ 
      console.log ("You win! Rock crushes scissors.")
   
   }else if((humanChoice === "paper") && (computerChoice === "rock")){ 
      console.log ("You win! Paper covers rock.")
      
   }else if((humanChoice === "paper") && (computerChoice === "paper")){ 
      console.log ("Tie!")

   }else if((humanChoice === "paper") && (computerChoice === "scissors")){ 
      console.log ("You lose! Scissors cuts paper.")
   
   }else if(humanChoice === "scissors" && computerChoice === "rock"){ 
      console.log ("You lose! Rock crushes scissors.")
      
   }else if(humanChoice === "scissors" && computerChoice === "paper"){ 
      console.log ("You win! Scissors cuts paper.")

   }else if(humanChoice === "scissors" && computerChoice === "scissors"){ 
      console.log ("Tie!")
   
   }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log ("Computer chose: " + computerSelection)



playRound(humanSelection, computerSelection);