<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<!-- Inside the body tag of your HTML -->
<body>
    <img src="images/logo.png" alt="Logo description">
    <div class="separator">
        <hr class="separator-line">
        <span class="separator-text">"And hold firmly to the rope of Allah all together, and do not be divided."</span>
        <hr class="separator-line">
    </div>
    <div id="language-buttons">
        <button id="english-button">English</button>
        <button id="bahasa-button">Bahasa</button>
    </div>
    <div id="social-links">
        <a href="https://www.instagram.com/alfityah18" target="_blank">
            <img src="images/insta.png" alt="Instagram Icon">
        </a>
        <!-- New image and text below Instagram logo -->
        <div class="additional-content">
            <img src="images/pd.png" alt="Additional Image">
            <p class="additional-text">Charter Regular</p>
        </div>
    </div>
    <script>
        document.getElementById('english-button').addEventListener('click', function () {
            window.location.href = 'english.html';
        });

        document.getElementById('bahasa-button').addEventListener('click', function () {
            window.location.href = 'bahasa.html';
        });
    </script>
</body>
