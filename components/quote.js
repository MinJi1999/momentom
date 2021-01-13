const quoteContainer = document.querySelector(".quoteContainer");
const quoteText = quoteContainer.querySelector(".quoteText");
const quoteAuthor = quoteContainer.querySelector(".quoteAuthor");

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => {
            return response.json();
        })
        .then(json => {
            const content = json.content;
            const author = json.author;
                quoteText.innerHTML = content;
                quoteAuthor.innerHTML = author;
        })
}
setInterval(getQuote, 5000);
