document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

// Use the Google TTS API endpoint
var audio = new Audio('https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY');

function readAloud() {
    // Select the entire article content
    var articleContent = document.querySelector('.article-content');
    
    // Extract text content from the selected element
    var textToRead = articleContent.textContent.trim();

    // Set the text for synthesis
    audio.src = 'https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY';
    audio.play();
}

// Add an event listener to the button
document.getElementById('read-aloud-button').addEventListener('click', readAloud);
