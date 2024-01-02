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
        </div>
    </div> <!-- Closing div for social-links -->

    <!-- Previous and Next buttons with arrow symbols -->
<button id="prevButton">&#8592; Previous</button>
<button id="nextButton">Next &#8594;</button>

<script>
    // ... (your existing script)

    // Function to update Previous and Next button text based on language
    function updateButtonLabels() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        // Use Unicode arrow characters based on the current language
        const prevArrow = currentLanguage === 'english' ? '&#8592;' : '&#8592;';
        const nextArrow = currentLanguage === 'english' ? '&#8594;' : '&#8594;';

        prevButton.innerHTML = `${prevArrow} Previous`;
        nextButton.innerHTML = `Next ${nextArrow}`;
    }

    // Event listener for language buttons
    document.getElementById('english-button').addEventListener('click', function () {
        currentLanguage = 'english';
        currentPage = 1; // Reset to first page when changing language
        updateButtonLabels(); // Update button labels
        displayArticles();
    });

    document.getElementById('bahasa-button').addEventListener('click', function () {
        currentLanguage = 'bahasa';
        currentPage = 1; // Reset to first page when changing language
        updateButtonLabels(); // Update button labels
        displayArticles();
    });

    // Initial display on page load
    displayArticles();
    updateButtonLabels(); // Update button labels
</script>
</body>
