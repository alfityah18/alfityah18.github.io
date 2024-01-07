var currentPage = window.location.pathname;

var audioToggle = document.getElementById('audio-switch');
var audio = new Audio();

// Set different audio sources based on the current page
switch (currentPage) {
    case '/page1.html':
        audio.src = 'audio/page1-audio.mp3';
        break;
    case '/page2.html':
        audio.src = 'audio/page2-audio.mp3';
        break;
    // Add more cases for other pages if needed
    default:
        // Default audio for pages not specified
        audio.src = 'audio/default-audio.mp3';
}

audioToggle.addEventListener('change', function () {
    if (this.checked) {
        audio.play();
    } else {
        audio.pause();
    }
});
