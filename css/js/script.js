// Seleciona todas as células do tabuleiro (9 divs com a classe "cell")
const cells = document.querySelectorAll(".cell");

// Seleciona o elemento de status do jogo(vitoria, derrota, empate ou vez do jogador)
const statusText = document.getElementById("status");

// Seleciona o botão de reiniciar jogo
const restartBtn = document.getElementById("restart");

// Define o jogador atual, começando com "x"
let currentPlayer = "x";

// array que representa o estado do tabuleiro (9 posições, inicialmente vazias)
let board = ["", "", "", "", "", "", "", "", ""];

// Variável para rastrear se o jogo está ativo
let isGameActive = true;

const winningConditions = [
    [0, 1, 2], // linha superior
    [3, 4, 5], // linha do meio
    [6, 7, 8], // linha inferior
    [0, 3, 6], // coluna esquerda
    [1, 4, 7], // coluna do meio
    [2, 5, 8], // coluna direita
    [0, 4, 8], // diagonal principal
    [2, 4, 6] // diagonal secundária
];
function initializeGame() {
    for (let i = 0; i < 9; i++) {
        cells[i].addEventListener("click", handleCellClick);
    }
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `vez do jogador ${currentPlayer}`;
}

function handleCellClick(event) {
    const Cell = event.target; // A célula que foi clicada
    const Index = parseInt(clickedCell.getAttribute("data-index")); // Índice da célula clicada (0-8)

    // se já tiver valor ou o jogo acabou, ignora o clique
    if (board[Index] !== "" || !GameActive) {
        return;
    };

    board[Index] = currentPlayer;
    Cell.textContent = currentPlayer;

    if(currentPlayer === "x") {
        cells.classlist.add("x");
    } else {
        cells.classlist.add("o");
    }

    chekwinner();
}
