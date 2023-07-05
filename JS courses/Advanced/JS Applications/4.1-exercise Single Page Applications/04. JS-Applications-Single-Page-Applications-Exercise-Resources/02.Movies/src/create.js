import { homePage } from './home.js';
import { showView } from './util.js';

const createSection = document.querySelector('#add-movie');
const form = createSection.querySelector('form');
form.addEventListener('submit', onSubmit);

export function createPage() {
    showView(createSection);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('img');
    let user = JSON.parse(localStorage.getItem('user'));

    try {
        if (!title || !description || !imageUrl) {
            alert('all must be filled');
            throw new Error('fill everything');
        }
        const res = await fetch(`http://localhost:3030/data/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken,
            },
            body: JSON.stringify({ 'title': title, 'description': description, 'img':imageUrl }),
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        form.reset();
        homePage();
    } catch (err) {
        alert(err.message);
    }
}
//if there is no USER THROW ERROR