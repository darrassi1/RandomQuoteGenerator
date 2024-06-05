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
  let delay = 0;
  words.forEach((word, index) => {
    // Ajouter chaque mot dans une balise span avec un délai d'affichage
    html += `<span>${word} </span>`;
  });
  quoteDisplay.innerHTML = html;
  authorDisplay.textContent = `- ${randomQuote.author}`;

  // Sélectionner tous les spans contenant chaque mot
  const wordSpans = quoteDisplay.querySelectorAll('span');
  
  // Supprimer la classe "highlight" de tous les mots précédemment mis en évidence
  wordSpans.forEach((span) => {
    span.classList.remove('highlight');
  });
  
  // Définir un délai initial
  let wordDelay = 0;
  
  // Parcourir chaque span contenant un mot
  wordSpans.forEach((span, index) => {
    // Appliquer un délai pour chaque span
    setTimeout(() => {
      // Ajouter la classe "highlight" pour l'effet de surlignage
      span.classList.add('highlight');
    }, wordDelay);
    
    // Supprimer la classe "highlight" après un court délai pour passer au mot suivant
    setTimeout(() => {
      span.classList.remove('highlight');
    }, wordDelay + 200); // 400 ms est le délai entre chaque mot (ajustable selon vos préférences)
    
    // Augmenter le délai pour le mot suivant
    wordDelay += 250; // Ajuster ce délai selon vos préférences
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
