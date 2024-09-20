// Initialize the score
let score = 0;

// Get the elements from the DOM
const scoreElement = document.getElementById('score');
const cookieImage = document.getElementById('cookie');

// Create a new Audio object for the sound effect
const clickSound = new Audio('Sounds/NOM_SOUND.wav');

// Add error handling to check if the audio loads correctly
clickSound.addEventListener('error', (e) => {
    console.error('Error loading audio:', e);
});

// Function to update the score and play the sound
function updateScore() {
    score++; // Increment the score
    scoreElement.textContent = score; // Update the displayed score

    // Play the sound
    clickSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });
}

// Add event listener to the cookie image
cookieImage.addEventListener('click', updateScore);
