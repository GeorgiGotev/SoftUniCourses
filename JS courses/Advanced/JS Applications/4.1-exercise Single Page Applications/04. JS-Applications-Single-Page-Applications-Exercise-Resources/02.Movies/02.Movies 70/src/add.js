import { navRender } from './nav.js';
import { viewReset } from './viewReset.js';
import { post } from './api.js';
import { showHome } from './home.js';

const addMovieSection = document.querySelector('#add-movie');
const addMovieForm = addMovieSection.querySelector('form[id="add-movie-form"]');
addMovieForm.addEventListener('submit', onSubmit);

// addMovieForm.addEventListener('submit', onSubmit);

export function onAddMovie(e) {
    // Renders navigation bar
    navRender();

    // Hides all views from page
    viewReset();
    addMovieSection.style.display = 'block';
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(addMovieForm);
    // console.log(formData);
    let { title, description, img } = Object.fromEntries(formData.entries());
    if (title === '' || description === '' || img === '') {
        return alert('All fields are required!')
    }

    const userData = JSON.parse(localStorage['userData']);
    const token = userData.accessToken;
    // console.log(token);
    const result = post('/data/movies', { title, description, img });
    // console.log(result);
    addMovieForm.reset();
    showHome();
}