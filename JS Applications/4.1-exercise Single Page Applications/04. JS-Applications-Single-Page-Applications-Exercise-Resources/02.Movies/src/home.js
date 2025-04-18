import { detailsPage } from './details.js';
import { showView, updateNav } from './util.js';
const homeSection = document.querySelector('#home-page');
const catalog = homeSection.querySelector(
    '#movie .card-deck.d-flex.justify-content-center'
);
catalog.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        e.preventDefault();
        const id = e.target.dataset.id;
        detailsPage(id);
    }
});
export function homePage() {
    showView(homeSection);
    displayMovies();
}
async function displayMovies() {
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie) {
    let element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
        <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
        <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
        <a  href="/details/${movie._id}">
        <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
        </div>`;
    return element;
}

async function getMovies() {
    const res = await fetch(`http://localhost:3030/data/movies`);
    let data = await res.json();

    return data;
}
