// const camera = document.getElementById("camerabutton");
// document.getElementById("camerabutton").addEventListener("click", face)


// import de webcam functie
import {
  face
} from "/face.js"

const quotes = document.getElementById("fact");

const factBtn = document.getElementById("nextfact")
factBtn.addEventListener("click", () => {
  randomFact()
})
//de function die de face.js activeerd
const cameraBtn = document.getElementById("camerabutton");
cameraBtn.addEventListener("click", () => {
  face(quotes)
})

const postext = document.getElementById("postit");
postext.addEventListener("click", postit);

document.getElementById("offButton").addEventListener("click", turnOff)

document.getElementById("lightswitch").addEventListener("click", lightsOff)
const darkness = document.getElementById("darkness");


//dit laad een random feitje uit de api van catfacts
randomFact();

function randomFact() {
  fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then(function (data) {
      console.log(data.fact)

      quotes.textContent = data.fact
      quotes.classList.add("active");
      setTimeout(resetanim, 200);
    }).catch(function (er) {
      // voor foutjes
      console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);
      quotes.innerText = "cat fact missing, try again later";
    });
}

function resetanim() {

  quotes.classList.remove("active");
  void quotes.offsetWidth;
}


//hier past de post text zich aan.
function postit() {
  postext.textContent = "don't touch me"
  setTimeout(postReset, 2500)
}

function postReset() {
  postext.textContent = "task: hate humans"
}

//bij deze function komt er een scherm voor de echte scherm om de illusie te geven dat ie uit staat
function turnOff() {
  const bootscreen = document.getElementById("bootscreen");
  bootscreen.classList.toggle("visible");
  setTimeout(offMode, 1500)
}

function offMode() {
  bootscreen.classList.toggle("off");
}

//doet de lichten uit door een donker vlak voor te plaatsen, the if/else past de achtergrond aan
function lightsOff() {
  darkness.classList.toggle("active");
  if (darkness.classList.contains('active')) {

    document.getElementById("bgimage").src = "/images/pcdarkness.png";
  } else {
    document.getElementById("bgimage").src = "/images/pc.png";
  }

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