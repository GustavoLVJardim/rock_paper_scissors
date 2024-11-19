
function playGame (){ // o nome desta funçao trata-se de uma exigência do odin project 
  let humanScore = 0 // variavel que armazena o score do humano
  let computerScore = 0 // variavel que armazena o score do computador
  let tieScore = 0 // variavel que armazena o score de empates
  console.log("Welcome to the game of rock, paper, scissors!"); // mensagem de abertura
  
  for (let i = 1; i <= 5; i++){ // loop for que faz cinco rodadas 
    console.log(`Round ${i}`); // mensagem que indica em qual round estamos
    const humanSelection = getHumanChoice(); // constante que armazena o retorno da funcao getHumanChoice
    const computerSelection = getComputerChoice(); // constante que armazena o retorno da funcao getComputerChoice
    console.log(`Human choose: ${humanSelection}`); // mostra a escolha do humano
    console.log(`Computer choose: ${computerSelection}`); // mostra a escolha randomica do computador
    const winner = playRound(humanSelection, computerSelection); // constante que armazena o retorno da funcao playRound

    if ( winner === "human"){ // condicional que verifica quem ganhou a rodada
        humanScore++;
    }
    else if (winner === "computer"){
        computerScore++;
    }
    else if (winner === "tie"){
        tieScore++;
    }
}
  

  console.log(` The final score is: Human: ${humanScore} Computer: ${computerScore} Ties: ${tieScore}`); // mostra o score final

  if (humanScore > computerScore) { // condicional que verifica quem ganhou o jogo
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
    let listChoice = ["rock", "paper", "scissors"]; // cria a lista com as opções
    let randomIndex = Math.floor(Math.random() * listChoice.length); // faz a escolha randomica para o computador
    let computerChoice = listChoice[randomIndex]; // variavel que armazena a escolha randomica
    return computerChoice; // retorna a variavel
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?"); // pede ao usuario para digitar a sua escolha
    humanChoice = humanChoice.toLowerCase() // transforma a escolha em minusculo
    return humanChoice; // retorna a variavel
}



function playRound(humanChoice, computerChoice) { // funcao que faz a jogada
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


