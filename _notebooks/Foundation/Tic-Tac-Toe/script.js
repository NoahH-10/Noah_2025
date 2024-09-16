const cells = document.querySelectorAll('[data-cell]');
const statusDisplay = document.querySelector('.status');
const restartButton = document.querySelector('.restart-btn');

let isXTurn = true;
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (cells[a].classList.contains('x') && cells[b].classList.contains('x') && cells[c].classList.contains('x')) {
            roundWon = true;
            setStatus('X wins!');
            break;
        }
        if (cells[a].classList.contains('o') && cells[b].classList.contains('o') && cells[c].classList.contains('o')) {
            roundWon = true;
            setStatus('O wins!');
            break;
        }
    }
    if (!roundWon && [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
        setStatus('Draw!');
    }
};

const handleCellClick = (event) => {
    const cell = event.target;
    if (cell.classList.contains('x') || cell.classList.contains('o') || !gameActive) return;

    cell.classList.add(isXTurn ? 'x' : 'o');
    checkWinner();
    isXTurn = !isXTurn;
};

const setStatus = (message) => {
    statusDisplay.textContent = message;
    gameActive = false;
};

const restartGame = () => {
    cells.forEach(cell => cell.classList.remove('x', 'o'));
    statusDisplay.textContent = '';
    isXTurn = true;
    gameActive = true;
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
