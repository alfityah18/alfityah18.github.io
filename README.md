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
    <img src="images/logo.png" alt="Logo description">
    <div id="language-buttons">
        <button id="english-button">English Version</button>
        <button id="malay-button">Bahasa Melayu</button>
    </div>

    <script>
        document.getElementById('english-button').addEventListener('click', function () {
            window.location.href = 'english.html'; // Replace with your English Version page URL
        });

        document.getElementById('malay-button').addEventListener('click', function () {
            window.location.href = 'malay.html'; // Replace with your Bahasa Melayu page URL
        });
    </script>
</body>
