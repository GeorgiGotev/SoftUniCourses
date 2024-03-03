import { homePage } from './home.js';
import { showView, updateNav } from './util.js';

const registerSection = document.querySelector('#form-sign-up');
const form = registerSection.querySelector('form');
form.addEventListener('submit', onSubmit);

export function registerPage() {
    showView(registerSection);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('repeatPassword');
    
    if (!email || password.length < 6 || password != rePassword) {
        alert('wrong input');
        throw new Error('Wrong input');
    }

    try {
        const res = await fetch(`http://localhost:3030/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, rePassword }),
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const user = await res.json();
        localStorage.setItem('user', JSON.stringify(user));
        form.reset();
        updateNav();
        homePage();
    } catch (err) {
        alert(err.message);
    }
}
