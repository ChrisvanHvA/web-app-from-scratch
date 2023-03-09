
const camera = document.getElementById("camerabutton");
const quotes = document.getElementById("fact");
const postext = document.getElementById("postit");

//als je de webcam klikt dan verschijnt deze message
function face(quotes) {
    quotes.innerText = ". . . . .╭━━━━━━╮      . .  . . . . . .   " + ". . .╭┃   . .  ╭━━━━╮. . . . . ." + "  . . . .┃┃  . .  ╰━━━━╯. . . .  " + ". . . . . .┃┃ . . . . . ┃ . <-you  . . ." + " . . . .╰┃    . ┃ ─┌     . ┃ . . . . ." + "  . . . . . . .╰━╯  .  ╰━╯"
  

}
//doet de beeldscherm uit
function turnOff() {
    const bootscreen = document.getElementById("bootscreen");
    bootscreen.classList.toggle("visible");
    setTimeout(offMode, 1500)
  }
  //maakt het scherm zwart
  function offMode() {
    bootscreen.classList.toggle("off");
  }

  //doet de lichten uit en haalt de schaduwen weg
  function lightsOff() {
    darkness.classList.toggle("active");
    if (darkness.classList.contains('active')) {
  
      document.getElementById("bgimage").src = "./images/pcdarkness.png";
    } else {
      document.getElementById("bgimage").src = "./images/pc.png";
    }
}


//hier past de post text zich aan.
function postit() {
    const postext = document.getElementById("postit");
    postext.textContent = "don't touch me"
    setTimeout(postReset, 2500)
  }
  
  function postReset() {
    const postext = document.getElementById("postit");
    postext.textContent = "task: hate humans"
    
  }

  

export { lightsOff}
export { face }
export { turnOff }
export { postit }
