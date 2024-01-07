document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

// Add this at the end of your existing JavaScript
var audioSwitch = document.getElementById('audio-switch');
var audioElement = new Audio('path/to/your-audio-file.mp3'); // Replace with the actual path to your MP3 file

audioSwitch.addEventListener('change', function () {
    if (audioSwitch.checked) {
        audioElement.play();
    } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset the audio to the beginning
    }
});
