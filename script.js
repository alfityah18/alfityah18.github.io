document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

var audio = new Audio('https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY');

function readAloud() {
    var articleContent = document.querySelector('.article-content');
    var textToRead = articleContent.textContent.trim();
    audio.src = 'https://texttospeech.googleapis.com/v1/text:synthesize?key=YOUR_API_KEY&q=' + encodeURIComponent(textToRead);
    audio.play();
}

document.getElementById('read-aloud-button').addEventListener('click', readAloud);
