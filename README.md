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

        #language-buttons button {
            font-family: 'Charter', sans-serif;
            background-color: #000000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }

        #language-buttons button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <img src="images/logo.png" alt="Logo description">
    <div id="language-buttons">
        <button id="english-button">English</button>
        <button id="malay-button">Bahasa Melayu</button>
    </div>
</body>
