<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tap Tap Button</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 id="tapCount">Total taps: 0</h1>
    <div class="tap-button" onclick="incrementTap()">
      TAP
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

  /* Resetting margin and padding for consistency */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

/* Centering the content vertically and horizontally */
body {
  background-color: #a35dd3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Main container to hold everything */
.container {
  text-align: center;
}

/* Styling the tap count text */
#tapCount {
  font-size: 32px;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

/* Styling the tap button */
.tap-button {
  width: 200px;
  height: 200px;
  background-color: #ff8c42;
  border: 4px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s;
}

/* Button shrink effect when tapped */
.tap-button:active {
  transform: scale(0.9);
  }

  let tapCount = 0;

function incrementTap() {
  tapCount++;
  document.getElementById('tapCount').innerText = `Total taps: ${tapCount}`;
}
