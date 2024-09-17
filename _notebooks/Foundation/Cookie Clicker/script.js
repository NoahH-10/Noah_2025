// Initialize the score
let score = 0;

// Get the elements from the DOM
const scoreElement = document.getElementById('score');
const cookieImage = document.getElementById('cookie');

// Create a new Audio object for the sound effect
const clickSound = new Audio('Sounds/NOM_SOUND.wav'); // SOUND EFFECT NOT WORKING - FIX IT

// Function to update the score
function updateScore() {
    score++;
    scoreElement.textContent = score;
    // Play the sound effect
    clickSound.play();
}

// Add event listener to the cookie image
cookieImage.addEventListener('click', updateScore);
