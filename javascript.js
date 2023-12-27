function getComputerChoice(){
    let options  = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);

   
    options = options[num];
    return options;
    
}

let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

let gameStats = true;


while(gameStats){

playerSelection = prompt("Introdu ce alegi");
// console.log(playerSelection);

computerSelection = getComputerChoice();
// console.log(computerSelection)

playRound(playerSelection,computerSelection)
// console.log(userScore);
// console.log(computerScore);

if (userScore == 5) {
    gameStats = false;
    alert("Congrats! You Won)");
}

if ( computerScore == 5){
    gameStats = false;
    alert("HAHA! You lost");
}

}


function playRound(){
 if(playerSelection.toLowerCase() === computerSelection)
    alert("It s draw");
else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors"))
    {userScore += 1;    
    alert("You won! Rock beats scissors");}
else if((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper"))
    {computerScore +=1;     
    alert("You lose! Paper beats rock");}
else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper"))
    {userScore +=1;
    alert("You won! Scissors beats paper");}
else if((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock"))
    {computerScore +=1;
    alert("You lose! Rock beats scissors");}
else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock"))
    {userScore +=1;
    alert("You won! Paper beats rock");}
else if((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors"))
    {computerScore +=1;
    alert("You lose! Scissors beats paper");}
}

