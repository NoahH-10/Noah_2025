<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        #board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
            margin: 20px auto;
        }
        .cell {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border: 2px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
        }
        .button {
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe Game</h1>
    <div id="board"></div>
    <button class="button" id="resetButton">Reset Game</button>
    <h2 id="status"></h2>
    <script>
        const boardElement = document.getElementById('board');
        const statusElement = document.getElementById('status');
        const resetButton = document.getElementById('resetButton');
        let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
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
        function createBoard() {
            boardElement.innerHTML = '';
            board.forEach((cell, index) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.textContent = cell;
                cellElement.addEventListener('click', () => handleCellClick(index));
                boardElement.appendChild(cellElement);
            });
            updateStatus();
        }
        function handleCellClick(index) {
            if (board[index] === '' && gameActive) {
                board[index] = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                createBoard();
            }
        }
        function checkWinner() {
            let roundWon = false;
            for (const condition of winningConditions) {
                const [a, b, c] = condition;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    roundWon = true;
                    break;
                }
            }
            if (roundWon) {
                statusElement.textContent = `Player ${currentPlayer} wins!`;
                gameActive = false;
                return;
            }
            if (!board.includes('')) {
                statusElement.textContent = 'It\'s a draw!';
                gameActive = false;
            }
        }
        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            statusElement.textContent = '';
            createBoard();
        }
        resetButton.addEventListener('click', resetGame);
        createBoard();
    </script>

</body>
</html>
