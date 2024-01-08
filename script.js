document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

  function toggleEnlarged() {
    document.body.classList.toggle('enlarge-image');
}

document.querySelectorAll('.enlargeable-image').forEach(image => {
    image.addEventListener('click', toggleEnlarged);
});
