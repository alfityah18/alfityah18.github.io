document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the image and overlay elements
  var image = document.querySelector('.article-image img'); // adjust the selector
  var overlay = document.getElementById('enlarged-overlay');

  // Add a click event listener to the image
  image.addEventListener('click', function () {
    // Toggle the 'enlarged' class on the overlay
    overlay.classList.toggle('enlarged');
  });
});
