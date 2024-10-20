const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Make the canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters used in the matrix rain
const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=+<>?{}♤♡◇♧》《¡¿¤☆▪︎';
const fontSize = 14;
const columns = canvas.width / fontSize;

// Create an array of drops for each column
const drops = Array(Math.floor(columns)).fill(0);

// Draw the characters
function draw() {
    // Make the background slightly transparent to create the fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set the text color and font size
    ctx.fillStyle = '#0f0'; // Matrix green
    ctx.font = fontSize + 'Orbitron';

    // Loop over the drops array and draw characters
    for (let i = 0; i < drops.length; i++) {
        // Pick a random character from the matrixChars string
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));

        // Draw the character at (x, y) coordinate
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop to create a raining effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment the y-coordinate for the drop
        drops[i]++;
    }
}

// Draw the animation at an interval
setInterval(draw, 33); // About 30 frames per second
