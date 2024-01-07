document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded");
    var image = document.querySelector('.enlargeable-image');
    var overlay = document.getElementById('enlarged-overlay');

    image.addEventListener('click', function () {
        console.log("Image Clicked");
        overlay.classList.toggle('enlarged');
    });
});
