document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

  function initializeImageEnlargement() {
    const enlargeableImages = document.querySelectorAll('.enlargeable-image');

    enlargeableImages.forEach(image => {
        image.addEventListener('click', () => {
            document.body.classList.toggle('enlarge-image');
            image.classList.toggle('enlarged');
        });
    });
}

// Call the function to initialize the image enlargement
initializeImageEnlargement();
