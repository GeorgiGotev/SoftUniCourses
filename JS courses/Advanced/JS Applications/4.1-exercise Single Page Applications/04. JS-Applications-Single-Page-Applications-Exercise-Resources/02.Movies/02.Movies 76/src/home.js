import { detailsPage } from "./details.js";
import { showView } from "./utils.js";

const section = document.getElementById("home-page");

const catalog = section.querySelector("#movie .card-deck.d-flex.justify-content-center");

catalog.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.preventDefault();

    console.log("selected movie id: ", event.target.dataset.id);


    const selectedMovieId = event.target.dataset.id;

    detailsPage(selectedMovieId);
  }
});

export function homePage() {
  showView(section);

  displayMovies();
}

export async function displayMovies() {
  const movies = await getMovies();

  catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
  const liElem = document.createElement("li");
  liElem.className = "card mb-4";
  liElem.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    <div class="card-footer">
    </div>
  `;

  return liElem;
}

async function getMovies() {
  const res = await fetch("http://localhost:3030/data/movies");
  const movies = await res.json();

  return movies;
}
