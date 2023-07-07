// step 1.
// show/hide requested content (login, register, etc.)

// NAVIGATION - routes mapping
// - /login (login action) => login page
// - /register (register action) => register page

import { updateNavigation } from "./utils.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { logout } from "./logout.js";
import { createPage } from "./create.js";

// nav configuration
const routes = {
  "/": homePage,
  "/login": loginPage,
  "/register": registerPage,
  "/logout": logout,
  '/create': createPage,

};


document.querySelector('nav').addEventListener('click', onNavigation)
document.querySelector('#add-movie-button a').addEventListener('click', onNavigation)
export function onNavigation(e) {
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault()
        const path = new URL(e.target.href)
        const pathName = path.pathname
        const view = routes[pathName]
        if (typeof view == 'function') {
            view()
        }
    }
}

updateNavigation();
homePage();
