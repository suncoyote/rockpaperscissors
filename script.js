
function getComputerChoice() {
   
   let choiceNumber = Math.floor(Math.random()*(3 - 0) + 1 );
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

function playGame(){


   let humanScore = 0;
   let computerScore = 0;

   function playRound (humanChoice, computerChoice){
      if((humanChoice === "rock") && (computerChoice === "rock")){ 
         console.log ("Tie! \n ")
         
      }else if((humanChoice === "rock") && (computerChoice === "paper")){ 
         console.log ("You lose! Paper covers rock. \n ")
         computerScore++;

      }else if((humanChoice === "rock") && (computerChoice ==="scissors")){ 
         console.log ("You win! Rock crushes scissors. \n ")
         humanScore++;
      
      }else if((humanChoice === "paper") && (computerChoice === "rock")){ 
         console.log ("You win! Paper covers rock. \n ")
         humanScore++;
         
      }else if((humanChoice === "paper") && (computerChoice === "paper")){ 
         console.log ("Tie! \n ")

      }else if((humanChoice === "paper") && (computerChoice === "scissors")){ 
         console.log ("You lose! Scissors cuts paper. \n ")
         computerScore++;
      
      }else if((humanChoice === "scissors") && (computerChoice === "rock")){ 
         console.log ("You lose! Rock crushes scissors. \n ")
         computerScore++;
         
      }else if((humanChoice === "scissors") && (computerChoice === "paper")){ 
         console.log ("You win! Scissors cuts paper. \n ")
         humanScore++;
      }else if((humanChoice === "scissors") && (computerChoice === "scissors")){ 
         console.log ("Tie! \n ")
      
      }

   }

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();

   const humanSelection2 = getHumanChoice();
   const computerSelection2 = getComputerChoice();

   const humanSelection3 = getHumanChoice();
   const computerSelection3 = getComputerChoice();

   const humanSelection4 = getHumanChoice();
   const computerSelection4 = getComputerChoice();

   const humanSelection5 = getHumanChoice();
   const computerSelection5 = getComputerChoice();



   console.log ("Computer chose: " + computerSelection)
   playRound(humanSelection, computerSelection);

   console.log ("Computer chose: " + computerSelection2)
   playRound(humanSelection2, computerSelection2);

   console.log ("Computer chose: " + computerSelection3)
   playRound(humanSelection3, computerSelection3);

   console.log ("Computer chose: " + computerSelection4)
   playRound(humanSelection4, computerSelection4);

   console.log ("Computer chose: " + computerSelection5 )
   playRound(humanSelection5, computerSelection5);


   console.log ("\n Your score: " + humanScore + " // Computer score: " +  computerScore)
   
}

playGame()