import { viewReset } from './viewReset.js';
import { navRender } from './nav.js';
import { post } from './api.js';
import { showHome } from './home.js';

const registerSection = document.querySelector('#form-sign-up');
const registerForm = registerSection.querySelector('form[id="register-form"]');
registerForm.onsubmit = onSubmit;
// console.log(registerForm);

export function showRegister() {
    // Renders navigation bar
    navRender();

    // Hides all views from page
    viewReset();

    // Display register section
    registerSection.style.display = 'block';
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(registerForm);
    // console.log(formData);
    let { email, password, repeatPassword } = Object.fromEntries(formData.entries());
    if (email === '' || password === '' || password.length < 5) {
        return alert('All fields are required and password must be at least 6 characters long!');
    }
    if (password !== repeatPassword) {
        return alert('Password and Re-password must match!');
    }

    const userData = await post('/users/register', { email, password, repeatPassword });
    // console.log(userData);
    localStorage.setItem('userData', JSON.stringify({
        email: userData.email,
        username: userData.username,
        id: userData._id,
        accessToken: userData.accessToken
    }));
    registerForm.reset();
    showHome();
}