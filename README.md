<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
            text-align: center;
        }

        h1 {
            font-size: 11px;
            margin: 0;
        }

        img {
            width: 30%;
            max-width: 300px;
        }
    </style>
</head>
<body>
    <img src="images/logo.png">
    <div class="separator">
  <hr class="separator-line">
  <span class="separator-text">"And hold firmly to the rope of Allah all together, and do not be divided."</span>
  <hr class="separator-line">
</div>
    <div id="language-buttons">
        <button id="english-button">English</button>
        <button id="malay-button">Bahasa</button>
    </div>

    <script>
        document.getElementById('english-button').addEventListener('click', function () {
            window.location.href = 'english.html'; // Replace with your English page URL
        });

        document.getElementById('malay-button').addEventListener('click', function () {
            window.location.href = 'malay.html'; // Replace with your Bahasa page URL
        });
    </script>
</body>
