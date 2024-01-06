// Function to toggle day/night mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('night-mode');

    // Update button text and symbol
    const modeButton = document.getElementById('mode-button');
    const isNightMode = body.classList.contains('night-mode');
    modeButton.innerHTML = isNightMode ? '☀️' : '🌙';
}

// Event listener for the mode button
document.getElementById('mode-button').addEventListener('click', toggleMode);