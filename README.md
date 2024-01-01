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

        #language-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #language-buttons button {
            font-family: 'Charter', sans-serif !important; /* Add !important to ensure font priority */
            background-color: #000000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            margin-bottom: 10px;
        }

        #language-buttons button:hover {
            background-color: #333333;
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
