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

<script>
    const ul = document.getElementById('article-list');
    const items = Array.from(ul.children);

    // Get only the latest 7 items (assumes newest at the top)
    const latest7 = items.slice(0, 7);

    // Clear the list and append only latest 7
    ul.innerHTML = '';
    latest7.forEach(item => ul.appendChild(item));
</script>
