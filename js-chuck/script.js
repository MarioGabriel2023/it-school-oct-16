// fetchApi();

// async function fetchApi() {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const api = await response.json();

//   console.log(api);

//   const jokeElement = document.getElementById("joke");

//   jokeElement.innerText = api.value;

//   const jokeImageURL = "https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg";

//   const imageElement = document.createElement("img");
//   imageElement.src = jokeImageURL;

//   jokeElement.insertBefore(imageElement, jokeElement.firstChild);
// }

const jokeContainer = document.getElementById("joke");
const refreshJokeButton = document.getElementById("refresh");
const clearHistoryButton = document.getElementById("clear");
const jokesHistoryContainer = document.getElementById("jokes-history");

const jokeImages = [
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-0.jpg",
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-1.jpg",
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-2.jpg",
];

fetchJoke();

async function fetchJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await response.json();

  addJokeToUI(joke);
  addJokeToHistory(joke);
}

function addJokeToUI(joke) {
  jokeContainer.innerHTML = "";

  const image = document.createElement("img");
  image.setAttribute("src", jokeImages[Math.floor(Math.random() * jokeImages.length)]);

  const jokeText = document.createElement("p");
  jokeText.innerText = joke.value;

  jokeContainer.appendChild(image);
  jokeContainer.appendChild(jokeText);
}

function addJokeToHistory(joke) {
  const jokeElement = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute("src", jokeImages[Math.floor(Math.random() * jokeImages.length)]);

  const jokeText = document.createElement("p");
  jokeText.innerText = joke.value;

  jokeElement.appendChild(image);
  jokeElement.appendChild(jokeText);

  jokesHistoryContainer.appendChild(jokeElement);
}

refreshJokeButton.addEventListener("click", () => {
  fetchJoke();
});

clearHistoryButton.addEventListener("click", () => {
  jokesHistoryContainer.innerHTML = "";
});
