import {
  randomFact
} from "./facts.js"

import {
  randomJoke,
  filterJoke
} from "./jokes.js"

import {
  face,
  turnOff,
  lightsOff,
  postit
} from "./interactions.js"


async function facts() {
  await insertHTML('routes/facts.html');
  const factBtn = document.getElementById("nextfact")
  factBtn.addEventListener("click", () => {
    randomFact()
  })
  document.getElementById("lightswitch").addEventListener("click", lightsOff)
  document.getElementById("offButton").addEventListener("click", turnOff)
  const postext = document.getElementById("postit");
  postext.addEventListener("click", postit);
  const quotes = document.getElementById("fact");
  const cameraBtn = document.getElementById("camerabutton");
  cameraBtn.addEventListener("click", () => {
    face(quotes)
  })
}

async function jokes() {
  await insertHTML('routes/jokes.html');
  const jokeBtn = document.getElementById("nextjoke")
  jokeBtn.addEventListener("click", () => {
    randomJoke()
  })
  document.getElementById("favorite").addEventListener("click", filterJoke);
  document.getElementById("lightswitch").addEventListener("click", lightsOff)
  document.getElementById("offButton").addEventListener("click", turnOff)
  const postext = document.getElementById("postit");
  postext.addEventListener("click", postit);
  const quotes = document.getElementById("fact");
  const cameraBtn = document.getElementById("camerabutton");
  cameraBtn.addEventListener("click", () => {
    face(quotes)
  })
}

async function insertHTML(template) {
  var contentContainer = document.getElementById("content");
  const html = await fetch(template).then((response) => response.text());
  contentContainer.innerHTML = html
}

export default {
  facts,
  jokes,
}