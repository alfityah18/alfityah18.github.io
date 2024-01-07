document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the image element
  var image = document.querySelector('.enlargeable-image img');

  // Add a click event listener to the image
  image.addEventListener('click', function () {
    // Toggle the 'enlarged' class on the image
    image.classList.toggle('enlarged');
  });
});
