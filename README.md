# Random Quote Generator

A simple and elegant web application that generates random quotes and allows users to share them on Twitter. This project is built using HTML, CSS, and JavaScript.

## Features

- **Random Quote Display:** Generates and displays a random quote with its author.
- **Animated Highlighting:** Each word in the quote is highlighted sequentially.
- **Twitter Sharing:** Users can share the displayed quote on Twitter with a single click.
- **Responsive Design:** Ensures compatibility across various devices.

## Demo

You can see a live demo of the project [here](https://darrassi1.github.io/RandomQuoteGenerator/).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/darrassi1/RandomQuoteGenerator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd RandomQuoteGenerator
    ```
3. Open `index.html` in your web browser to view the application.

## Usage

- **New Quote:** Click the "Nouvelle citation" button to generate a new random quote.
- **Share on Twitter:** Click the "Partager sur Twitter" button to share the current quote on Twitter.

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for generating and displaying quotes, and for handling the Twitter share functionality.

## Code Overview

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Quote Generator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div id="quote-container">
      <div id="quote"></div>
      <div id="author"></div>
    </div>
    <div class="button-container">
      <button id="new-quote">Nouvelle citation</button>
      <button id="share">Partager sur Twitter</button>
    </div>
  </div>
  <footer>Made by Younes Darrassi</footer>
  <script src="script.js"></script>
</body>
</html>
```

### CSS
```css
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 90%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#quote-container {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 20px;
}

#quote {
  font-size: 1.5rem;
  font-style: italic;
  color: #333;
  white-space: pre-wrap;
}

/* Animation for each word */
#quote span.highlight {
  animation: highlightWord 0.5s ease infinite;
}

@keyframes highlightWord {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: yellow;
  }
}

#author {
  font-size: 1rem;
  margin-top: 10px;
  color: #666;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
```

### JavaScript
```javascript
const quotes = [
  { quote: "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
  { quote: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
  { quote: "La seule manière de faire du bon travail, c'est d'aimer ce que vous faites.", author: "Steve Jobs" },
  { quote: "La vie est 10% ce qui nous arrive et 90% la manière dont nous y réagissons.", author: "Charles R. Swindoll" },
  { quote: "Le bonheur est quelque chose qui se multiplie quand il se divise.", author: "Paulo Coelho" }
];

const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const shareButton = document.getElementById('share');

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  const words = randomQuote.quote.split(' ');
  let html = '';
  
  words.forEach((word) => {
    html += `<span>${word} </span>`;
  });
  
  quoteDisplay.innerHTML = html;
  authorDisplay.textContent = `- ${randomQuote.author}`;

  const wordSpans = quoteDisplay.querySelectorAll('span');
  
  let wordDelay = 0;
  
  wordSpans.forEach((span) => {
    setTimeout(() => {
      span.classList.add('highlight');
    }, wordDelay);
    
    setTimeout(() => {
      span.classList.remove('highlight');
    }, wordDelay + 200);
    
    wordDelay += 250;
  });
}

newQuoteButton.addEventListener('click', displayQuote);

shareButton.addEventListener('click', function() {
  const quote = quoteDisplay.textContent;
  const author = authorDisplay.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" ${author}`)}`;
  window.open(twitterUrl, '_blank');
});

displayQuote();
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made by Younes Darrassi. Feel free to reach out if you have any questions or suggestions!
