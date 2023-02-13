document.getElementById("nextquote").addEventListener("click", randomQuote)
const quotes = document.getElementById("quote");
const credit = document.getElementById("creds");
var quotepicker = Math.floor(Math.random() * 16);
randomQuote()
function randomQuote() {
    fetch('https://quote.api.fdnd.nl/v1/quote').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        quotepicker = Math.floor(Math.random() * 16);
        quotes.textContent = data.data[quotepicker].text
        credit.textContent = data.data[quotepicker].name


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

}