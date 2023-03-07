function randomJoke() {
    const quotes = document.getElementById("fact");
    fetch('https://v2.jokeapi.dev/joke/spooky')
      .then((response) => response.json())
      .then(function (data) {
      
  console.log("new joke");
        quotes.innerHTML = data.setup + "<br><br>" +data.delivery;
  
        quotes.classList.add("active");
        setTimeout(resetanim, 200);
      }).catch(function (err) {
        // voor foutjes
        console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);
        quotes.innerText = "no jokes available :(";
      });
      function resetanim() {

        quotes.classList.remove("active");
        void quotes.offsetWidth;
      }
  }
  

  export { randomJoke}