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
    font-family: 'Charter', sans-serif;
    background: none; /* Remove background color */
    color: #000000; /* Set text color */
    padding: 0; /* Remove padding */
    border: none; /* Remove border */
    text-decoration: underline; /* Add underline */
    cursor: pointer;
}
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
