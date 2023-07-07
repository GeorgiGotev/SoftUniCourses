import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { onAddMovie } from './add.js';
import { onLogout } from './login.js';

const views = {
    '/': showHome,
    '/login': showLogin,
    '/register': showRegister,
    '/logout': onLogout,
};
const addMovieButton = document.querySelector('#add-movie-button');
addMovieButton.onclick = onAddMovie;

const navigationElement = document.querySelector('nav[class="navbar navbar-expand-lg navbar-dark bg-dark"]');
navigationElement.onclick = function (e) {
    e.preventDefault();
    if (e.target.tagName === 'A' && e.target.href) {
        const route = new URL(e.target.href);
        views[route.pathname]();
        // console.log(route.pathname)
    }
};

// Start application in home view
showHome();