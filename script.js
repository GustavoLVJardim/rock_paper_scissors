
function playGame (){  
  let humanScore = 0
  let computerScore = 0
  let tieScore = 0
  console.log("Welcome to the game of rock, paper, scissors!");
  
  for (let i = 1; i <= 5; i++){
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Human choose: ${humanSelection}`);
    console.log(`Computer choose: ${computerSelection}`);
    const winner = playRound(humanSelection, computerSelection);

    if ( winner === "human"){
        humanScore++;
    }
    else if (winner === "computer"){
        computerScore++;
    }
    else if (winner === "tie"){
        tieScore++;
    }
}
  

  console.log(` The final score is: Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  }
  else if (humanScore < computerScore) {
    console.log("You lose the game!");
  }
  else if (humanScore === computerScore) {
    console.log("It's a tie!");
  }

  
  

  
}  

playGame()



function getComputerChoice (){
    let listChoice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * listChoice.length);
    let computerChoice = listChoice[randomIndex];
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase()
    return humanChoice;
}



function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win this round! Rock beats Scissors");
        return "human";
    }
    else if (humanChoice === 'paper' && computerChoice ==='rock'){
        console.log("You win this round! Paper beats Rock");
        return "human";
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win this round! Scissors beats Paper");
        return "human";
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 'tie'
    }
    else {
        console.log("You lose!");
        return 'computer'
    }
  }


