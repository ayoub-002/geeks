//Exercise 1
function fetchHilariousGifs() {
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch hilarious gifs");
      return response.json();
    })
    .then(data => console.log("Exercise 1 - Hilarious Gifs:", data))
    .catch(error => console.error("Exercise 1 Error:", error));
}

//Exercise 2
function fetchSunGifs() {
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch sun gifs");
      return response.json();
    })
    .then(data => console.log("Exercise 2 - Sun Gifs:", data))
    .catch(error => console.error("Exercise 2 Error:", error));
}

//Exercise 3
async function fetchStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) throw new Error("Failed to fetch starship data");
    const data = await response.json();
    console.log("Exercise 3 - Starship:", data.result);
  } catch (error) {
    console.error("Exercise 3 Error:", error);
  }
}

//Exercise 4
function analyzeAsyncFunction() {
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log("Exercise 4 - calling");
    let result = await resolveAfter2Seconds();
    console.log("Exercise 4 -", result);
  }

  asyncCall();
}

// Run all exercises
fetchHilariousGifs();
fetchSunGifs();
fetchStarship();
analyzeAsyncFunction();
