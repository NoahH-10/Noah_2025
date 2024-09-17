// script.js
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return gameBoard.includes('') ? null : 'T'; // Return 'T' for tie
}

function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    
    if (gameBoard[index] || checkWinner()) return;
    
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    
    const winner = checkWinner();
    if (winner) {
        setTimeout(() => {
            if (winner === 'T') {
                alert("It's a tie!");
            } else {
                alert(`${winner} wins!`);
            }
        }, 100);
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
