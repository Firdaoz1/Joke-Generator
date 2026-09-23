const toggleBtn = document.getElementById("toggle-btn");
const jokesId = document.getElementById("jokes-id");
const button = document.getElementById("btn");
const joke = document.getElementById("jokes")

async function getData() {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";
  const response = await fetch (url);
  

  if(!response.ok){
    throw new Error(response.status);
  }

  const result = await response.json();

  jokesId.textContent = `Jokes: ${result.id}`;
  joke.textContent = result.joke;
}

getData();

 button.addEventListener("click", getData);

 toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
 })
 