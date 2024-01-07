function computerChoice(){
    let options  = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random()*3);

   
    options = options[num];
    return options;
    
}

let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector('.roundResult')
const score = document.querySelector('.score')






function playRound(playerSelection = '', computerChoice){
    if (playerSelection === computerChoice){
        roundResult.textContent =`A draw! No winners this time.`,
        score.textContent = `Player ${playerScore} - Computer ${computerScore}`;

        }
    else if (
             ((playerSelection === "Rock") && (computerChoice === "Scissors")) || 
             ((playerSelection === "Paper") && (computerChoice === "Rock")) ||
             ((playerSelection === "Scissors") && (computerChoice === "Paper"))
            ){
                playerScore ++;
                score.textContent = `Player ${playerScore} - Computer ${computerScore}`;
                roundResult.textContent =  `Victory! Your ${playerSelection} triumphs!`;
                if( playerScore === 5){
                    endGame();
                }

            }    
    else if (
                ((playerSelection === "Scissors") && (computerChoice === "Rock")) || 
                ((playerSelection === "Rock") && (computerChoice === "Paper")) ||
                ((playerSelection === "Paper") && (computerChoice === "Scissors"))
               ){
                   computerScore ++;
                   score.textContent = `Player ${playerScore} - Computer ${computerScore}`;
                   roundResult.textContent = `The computer's ${computerChoice} outmatched your ${playerSelection}.`
                   if ( computerScore === 5){
                    endGame();
                   }
   
               }        
}
function endGame() {
    buttons.forEach(disableButton);
    if (playerScore === 5) {
        roundResult.textContent =`You outsmarted the computer! You win!`;

    } else {
        roundResult.textContent =`Defeat! You were beaten by the computer!`;

    }

    const refresh = document.querySelector('.scoreText');
    refresh.textContent = 'Reset';
}

function disableButton(item) {
    item.disabled = true;
    item.style.opacity = 0.3;
}


const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   playRound(button.textContent , computerChoice());
  });
});

