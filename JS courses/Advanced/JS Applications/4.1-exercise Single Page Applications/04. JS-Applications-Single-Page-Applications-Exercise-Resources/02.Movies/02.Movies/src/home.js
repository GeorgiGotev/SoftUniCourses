import { navRender } from './nav.js';
import { viewReset } from './viewReset.js';
import { get } from './api.js';
import { showDetails } from './details.js';

const homeSection = document.querySelector('#home-page');
const movieListElement = homeSection.querySelector('ul[id="movies-list"].card-deck.d-flex.justify-content-center');
movieListElement.addEventListener('click', showDetails);
// console.log(movieListElement);

export function showHome() {
    // Renders navigation bar
    navRender();

    // Hides all views from page
    viewReset();
    showMovies();
    homeSection.style.display = 'block';
}

async function showMovies() {
    const moviesArrayObjs = await get('/data/movies');
    // console.log(moviesArrayObjs);
    movieListElement.replaceChildren(...moviesArrayObjs.map((movie) => createMoviePreview(movie)));

    function createMoviePreview(movie) {
        const liElem = document.createElement("li");
        liElem.className = "card mb-4";
        liElem.innerHTML = `
          <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
          <div class="card-body">
              <h4 class="card-title">${movie.title}</h4>
              <a href="/details/${movie._id}">
                  <button data-id="${movie._id}" data-ownerId="${movie._ownerId}" type="button" class="btn btn-info">Details</button>
              </a>
          </div>
          <div class="card-footer">
          </div>
        `;
        return liElem;
    }
}
