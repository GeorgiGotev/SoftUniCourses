import { showDetails } from './details.js';

const section = document.querySelector('main');
section.querySelector('div.topic-title').addEventListener('click', showDetails);
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('.cancel').addEventListener('click', clearForm);
let container=section.querySelector('.topic-title');
section.remove();

export async function showHome(e) {
    e && e.preventDefault();
    document.getElementById('main').replaceChildren('loading....');

    const res = await fetch(
        `http://localhost:3030/jsonstore/collections/myboard/posts`
    );
    let data = await res.json();

    container.replaceChildren(...Object.values(data).map(createPostPreview))
        
    document.getElementById('main').replaceChildren(section);
}

function createPostPreview(post) {
    let element = document.createElement('div');
    element.className = 'topic-container';
    element.id=post._id
    let curr=document.createElement('div');
    curr.className='topic-name-wrapper';
    curr.innerHTML = `
    <div class="topic-name">
        <a href="#" class="normal">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>
                    Date:
                    <time
                        >${post.dateCreated}</time
                    >
                </p>
                <div class="nick-name">
                    <p>Username: <span>${post.userName}</span></p>
                </div>
            </div>
        </div>
    </div>            
    `;
    element.appendChild(curr);
    return element;
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // console.log(Object.fromEntries(formData));
    let title = formData.get('topicName');
    let userName = formData.get('username');
    let content = formData.get('postText');

    let url = `http://localhost:3030/jsonstore/collections/myboard/posts`;
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                userName,
                content,
                dateCreated: new Date(),
            }),
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        form.reset();
        showHome();
    } catch (err) {
        alert(err.message);
    }
}

function clearForm(e) {
    e.preventDefault();
    form.reset();
}


