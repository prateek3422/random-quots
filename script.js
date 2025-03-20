const bg = document.getElementById("quote-box");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const copyButton = document.getElementById("copy-quote");
const twitterButton = document.getElementById("tweet-quote");

// get random background image from unsplash api

bg.style.backgroundImage = `url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`;

bg.style.backgroundSize = "cover";
bg.style.backgroundPosition = "center";
bg.style.backgroundRepeat = "no-repeat";

// get random quote from freeapi

const getQuote = async () => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );
  const data = await response.json();

  quote.innerHTML = data?.data?.content;
  author.innerHTML = data?.data?.author;
};

// call functions to get random background image and quote

// getbg();
getQuote();

// new quote fetch
newButton.addEventListener("click", () => {
  getQuote();
});

// copy to clipboard
copyButton.addEventListener("click", () => {
  const text = `${quote.innerHTML}`;
  navigator.clipboard.writeText(text);

  copyButton.innerHTML = "Copied!";
  setTimeout(() => {
    copyButton.innerHTML = "Copy quote";
  }, 1000);
});

// tweet quote

twitterButton.addEventListener("click", () => {
  const twitterUrl = `https://twitter.com/intent/tweet/?text=${quote.innerHTML} - ${author.innerHTML}`;
  window.open(twitterUrl, "_blank");
});
