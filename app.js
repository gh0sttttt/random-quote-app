const quote = document.getElementById('text');
const author = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');

let quotesData;
let currentQuote = '';
let currentAuthor = '';

function getRandomQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      currentQuote = data[Math.floor(Math.random() * data.length)].text;
      currentAuthor = data[Math.floor(Math.random() * data.length)].author;

      console.log(currentQuote, currentAuthor);
      quote.innerText = currentQuote;
      if (currentAuthor[0] == '') {
        author.innerText = 'Unknown';
      } else {
        author.innerText = currentAuthor;
      }
    });
}

function getQuote() {
  getRandomQuote();

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
}


// Event listener
newQuoteBtn.addEventListener('click', getQuote);