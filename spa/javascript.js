
const camera = document.getElementById("camerabutton");
document.getElementById("camerabutton").addEventListener("click", face)
const quotes = document.getElementById("fact");
document.getElementById("nextfact").addEventListener("click", randomFact)
const postext = document.getElementById("postit");
document.getElementById("offButton").addEventListener("click", turnOff)

randomFact()
function randomFact() {

fetch('https://catfact.ninja/fact')
  .then((response) => response.json())
.then(function (data) {
    console.log(data.fact)
          
    
            quotes.textContent = data.fact
        }).catch(function (err) {
            // voor funny foutjes
            console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);
        });
}

function face() {
  quotes.innerText = ". . . . .╭━━━━━━╮           . . . . . .   "+ ". . . .╭┃   . .  ╭━━━━╮. . . . . ." + "   . . .┃┃  . .  ╰━━━━╯. . . .  " + ". . . . .┃┃ . . . . . ┃ . <-you  . . ." + " . . .╰┃    . ┃ ─┌     . ┃ . . . . ." + "  . . . . . .╰━╯  .  ╰━╯"

}
postext.addEventListener("click", postit);
function postit() {
postext.textContent = "don't touch me"
setTimeout(postReset, 2500)
}

function postReset() {
  postext.textContent = "task: hate humans"
}
function turnOff() {
  const bootscreen = document.getElementById("bootscreen");
bootscreen.classList.toggle("visible");
setTimeout(offMode, 1500)
}
function offMode() {
  bootscreen.classList.toggle("off");
}
// VVVV code die niet werkte of kapot ging VVVV


// fetch('https://quotes.fdnd.nl/api/v1/quotes', {
    
// 	method: "GET",
//  mode:"no-cors"
// })
// .then(res => {
    

//     console.log(res)
// return res.json();
// })
// .catch(err => {
// 		console.log(err);
// });



// document.getElementById("nextquote").addEventListener("click", randomQuote)
// const quotes = document.getElementById("quote");
// const credit = document.getElementById("creds");
// var quotepicker = Math.floor(Math.random() * 16); //zorgen dat ie niet getallen herhaald

// //onload maken?
// randomQuote()

// function randomQuote() {
    
//     fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English_Womens_Super_League').then(function (response) {
//         // The API call was successful!
//         console.log(response)
//         return response.json();
//     }).then(function (data) {
//         // This is the JSON from our response
//         // quotepicker = Math.floor(Math.random() * 16);
//         // quotes.textContent = data.data[quotepicker].text
//         // credit.textContent = data.data[quotepicker].name


//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });

// }