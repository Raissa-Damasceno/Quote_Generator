const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

const newQuote = () => {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  quote.author
    ? (authorText.textContent = quote.author)
    : (authorText.textContent = "Unknown");

  quote.text.length > 50
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");

  quoteText.textContent = quote.text;
};

newQuote();
