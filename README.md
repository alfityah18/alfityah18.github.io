<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<body class="front-page">
    <img src="images/logo.png" alt="Logo description">
    <div class="separator">
        <span class="separator-text">"And hold firmly to the rope of Allah all together, and do not be divided."</span>
    </div>
    <div id="language-buttons">
        <button id="english-button">English</button>
        <button id="bahasa-button">Bahasa</button>
    </div>
    <div id="social-links">
        <a href="https://www.instagram.com/alfityah18" target="_blank">
            <img src="images/insta.png" alt="Instagram Icon">
        </a>
        <div class="additional-content">
            <img id="additional-image" src="images/pd.png" alt="Additional Image">
            <p class="additional-text">Public Domain. Anything in this public domain is freely usable by anyone without obtaining permission and without citing the original author, but no one can ever own this.</p>
            <p>This website is optimized for seamless functionality on phones and tablets, offering an enhanced reading experience, especially in portrait mode.</p>
        </div>
    </div> <!-- Closing div for social-links -->

<script>
        document.getElementById('english-button').addEventListener('click', function () {
    window.location.href = 'english.html';
});

document.getElementById('bahasa-button').addEventListener('click', function () {
    window.location.href = 'bahasa.html';
});
</script> 
</body>
