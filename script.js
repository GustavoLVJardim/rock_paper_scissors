// Variáveis globais para acompanhar o estado do jogo
let humanChoice = ""; // Armazena a escolha do humano
let computerChoice = ""; // Armazena a escolha do computador
let humanScore = 0; // Pontuação do jogador
let computerScore = 0; // Pontuação do computador
let tieScore = 0; // Pontuação de empates

// Função para capturar a escolha do jogador
function getHumanChoice() {
    const buttons = document.querySelectorAll('.choice-btn'); // Seleciona os botões

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            humanChoice = event.target.alt; // Captura o valor do atributo alt
            displayMessage(`You chose: ${humanChoice}`); // Atualiza mensagem no DOM
            enableNextStep(); // Cria o botão "Play" dinamicamente
        });
    });
}

// Função para gerar a escolha do computador
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Função para processar o resultado de uma rodada
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

// Função para exibir mensagens no DOM
function displayMessage(message) {
    const messageElement = document.getElementById('round-message');
    messageElement.innerHTML = message;
}

// Função para criar dinamicamente o botão "Play"
function enableNextStep() {
    const dynamicContainer = document.getElementById('dynamic-container');
    dynamicContainer.innerHTML = ""; // Limpa qualquer conteúdo existente

    const playButton = document.createElement('button');
    playButton.textContent = "Play";
    playButton.addEventListener('click', () => {
        computerChoice = getComputerChoice(); // Gera escolha do computador
        const winner = playRound(humanChoice, computerChoice); // Determina o vencedor
        updateScores(winner); // Atualiza o placar
        checkGameWinner(); // Verifica se alguém alcançou 5 pontos
    });

    dynamicContainer.appendChild(playButton);
}

// Função para atualizar o placar
function updateScores(winner) {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    } else {
        tieScore++;
    }
    updateScoreboard();
}

// Função para verificar o vencedor do jogo
function checkGameWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winnerMessage = humanScore === 5 ? "You are the winner!" : "The computer wins!";
        displayMessage(`${winnerMessage} Final Score: <br>Human: ${humanScore} <br> Computer: ${computerScore}`);
        resetGame();
    }
}

// Função para atualizar o placar na tela
function updateScoreboard() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `
        <h3>Scoreboard</h3>
        <p>Human: ${humanScore}</p>
        <p>Computer: ${computerScore}</p>
        <p>Ties: ${tieScore}</p>
    `;
}

// Função para reiniciar o jogo
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScoreboard();
}

// Inicializa o jogo
getHumanChoice();
