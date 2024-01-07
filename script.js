document.getElementById('mode-switch').addEventListener('change', function () {
    document.body.classList.toggle('night-mode', this.checked);
    document.getElementById('mode-label').innerText = this.checked ? '🌙' : '☀️';
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the image and overlay elements
  var image = document.querySelector('.article-image img');
  var overlay = document.getElementById('enlarged-overlay');

  // Track touch start position
  var touchStartX = 0;

  // Add a click event listener to the image
  image.addEventListener('click', function () {
    // Toggle the 'enlarged' class on the overlay
    overlay.classList.toggle('enlarged');
  });

  // Add a touchstart event listener for touch devices
  image.addEventListener('touchstart', function (e) {
    // Store the initial touch position
    touchStartX = e.touches[0].clientX;
  });

  // Add a touchend event listener for touch devices
  image.addEventListener('touchend', function (e) {
    // Calculate the horizontal distance moved during touch
    var touchEndX = e.changedTouches[0].clientX;
    var deltaX = touchEndX - touchStartX;

    // If the touch was a tap (small movement), toggle the 'enlarged' class
    if (Math.abs(deltaX) < 5) {
      overlay.classList.toggle('enlarged');
    }
  });
});
