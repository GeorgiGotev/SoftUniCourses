const section = document.querySelector('.theme-content');
let postElements = {
    title: document.getElementById('details-title'),
    username: document.getElementById('details-username'),
    time: document.getElementById('details-time'),
    content: document.getElementById('details-content'),
};
let commentsElement = document.getElementById('user-comment');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.remove();

export function showDetails(e) {
    let target = e.target;
    if (target.tagName == 'H2') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        e.preventDefault();
        let id =
            e.target.parentElement.parentElement.parentElement.parentElement.id;

        showPost(id);
    }
}

async function showPost(id) {
    const [res, commentsRes] = await Promise.all([
        fetch(
            `http://localhost:3030/jsonstore/collections/myboard/posts/` + id
        ),
        fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/`),
    ]);
    
    const [data, comments]= await Promise.all([
        res.json(),
        commentsRes.json()
    ])
    commentsElement.replaceChildren(...Object.values(comments).filter(c=>c.postId===id).map(createComment));
   


    form.id = id;
    postElements.title.textContent = data.title;
    postElements.username.textContent = data.username;
    postElements.time.textContent = data.dateCreated;
    postElements.content.textContent = data.content;

    document.getElementById('main').replaceChildren(section);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const username = formData.get('username');
    const content = formData.get('postText');
    const postId = form.id;
    try {
        if (!username || !content) {
            throw new Error('all fields are required');
        }
        const res = await fetch(
            `http://localhost:3030/jsonstore/collections/myboard/comments/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    content,
                    postId,
                    dateCreated: new Date(),
                }),
            }
        );
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        form.reset();
        showPost(postId);
    } catch (err) {
        alert(err.message);
    }
}

function createComment(comment){
    let element=document.createElement('div');
    element.className='topic-name-wrapper';
    element.innerHTML=`
    <div class="topic-name">
    <p><strong>${comment.username}</strong> commented on <time>${comment.dateCreated}</time></p>
    <div class="post-content">
        <p>${comment.content}</p>
    </div>
    `
    return element;
}