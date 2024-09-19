const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const box = 20;
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = 'RIGHT';
let food = spawnFood();
let score = 0;

// Power-up settings
let powerUp = { x: 0, y: 0, active: false };

// Control the snake with arrow keys
document.addEventListener('keydown', directionControl);

function directionControl(event) {
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    else if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    else if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
    else if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen'; // Head of the snake
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    // Draw power-up
    drawPowerUp();

    // Old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move the snake
    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    // Check for food collision
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = spawnFood();
    } else {
        snake.pop(); // Remove the tail
    }

    // Check for power-up collision
    checkPowerUpCollision();

    // Add new head
    const newHead = { x: snakeX, y: snakeY };

    // Game over conditions
    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over! Your score: ' + score);
    }

    snake.unshift(newHead); // Add new head
}

// Check collision with self
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Spawn food at random position
function spawnFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box,
        };
    } while (collision(newFood, snake)); // Ensure food doesn't spawn on the snake
    return newFood;
}

// Draw power-up
function drawPowerUp() {
    if (powerUp.active) {
        ctx.fillStyle = "blue";
        ctx.fillRect(powerUp.x, powerUp.y, box, box);
    }
}

// Spawn power-up
function spawnPowerUp() {
    if (!powerUp.active) {
        powerUp.x = Math.floor(Math.random() * (canvas.width / box)) * box;
        powerUp.y = Math.floor(Math.random() * (canvas.height / box)) * box;
        powerUp.active = true;
    }
}

// Check for collision with the power-up
function checkPowerUpCollision() {
    if (powerUp.active && snake[0].x === powerUp.x && snake[0].y === powerUp.y) {
        snake.pop(); // Reduce length by removing last segment
        powerUp.active = false; // Deactivate the power-up
    }
}

// Game loop
let game = setInterval(() => {
    spawnPowerUp(); // Spawn power-up if not active
    draw(); // Call the draw function
}, 100);
