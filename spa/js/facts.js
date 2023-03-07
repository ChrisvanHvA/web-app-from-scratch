function randomFact() {
  const quotes = document.getElementById("fact");
  fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then(function (data) {

      console.log("new fact");
      quotes.textContent = data.fact
      quotes.classList.add("active");
      setTimeout(resetanim, 200);
    }).catch(function (err) {
      // voor foutjes
      console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);
      quotes.innerText = "cat fact missing, try again later";
    });

  function resetanim() {
    quotes.classList.remove("active");
    void quotes.offsetWidth;
  }
}

export {
  randomFact
}