function randomJoke() {
  const quotes = document.getElementById("fact");
  fetch('https://v2.jokeapi.dev/joke/spooky')
    .then((response) => response.json())
    .then(function (data) {

      console.log("new joke");
      quotes.innerHTML = data.setup + "<br><br>" + data.delivery;

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


async function getJoke(id) {
  let response = await fetch('https://v2.jokeapi.dev/joke/Any?idRange=' + id);

  const result = await response.json();
  return result;
}

async function filterJoke() {
  const quotes = document.getElementById("fact");

  //hier haalt hij de items op
  console.log("filtering jokes")
  let fetches = [];

  //de id haalt steeds een op tot hij 10 behaalt
  for (let i = 1; i <= 10; i++) {
    fetches.push(await getJoke(i));
  }

  //hier filtert hij de items en return hij de joke met id 1
  const filteredItems = fetches.filter(item => {
    return item.id == 1;
  });

  console.log(filteredItems);
  

//hier plaatst hij de eerste in de array naar het scherm
  quotes.innerHTML = filteredItems[0].setup + "<br><br>" + filteredItems[0].delivery;

}

export {
  randomJoke,
  filterJoke
}

// quotes.innerHTML = filteredItems.setup + "<br><br>" + filteredItems.delivery;