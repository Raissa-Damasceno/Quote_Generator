const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

const newQuote = () => {
  loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  quote.author
    ? (authorText.textContent = quote.author)
    : (authorText.textContent = "Unknown");

  quote.text.length > 50
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");

  quoteText.textContent = quote.text;
  complete();
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

newQuote();
