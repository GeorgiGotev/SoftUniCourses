import { viewReset } from './viewReset.js';
import { navRender } from './nav.js';
import { post } from './api.js';
import { showHome } from './home.js';
import { get } from './api.js';

const loginSection = document.querySelector('#form-login');
const loginForm = loginSection.querySelector('form[id="login-form"]');
loginForm.onsubmit = onSubmit;
// console.log(loginForm);

export function showLogin() {
    // Renders navigation bar
    navRender();

    // Hides all views from page
    viewReset();

    // Display login section
    loginSection.style.display = 'block';
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(loginForm);
    let { email, password } = Object.fromEntries(formData.entries());
    const userData = await post('/users/login', { email, password });
    // console.log(userData);
    localStorage.setItem('userData', JSON.stringify({
        email: userData.email,
        username: userData.username,
        id: userData._id,
        accessToken: userData.accessToken
    }));
    loginForm.reset();
    showHome();
}

export async function onLogout() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const token = userData.accessToken;
    // console.log(token);
    await get('/users/logout');
    localStorage.removeItem('userData');
    showLogin();
}