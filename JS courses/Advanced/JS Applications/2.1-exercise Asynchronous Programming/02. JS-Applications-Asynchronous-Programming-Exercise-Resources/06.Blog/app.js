function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let posts = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');
    let h1 = document.getElementById('post-title');
    let p = document.getElementById('post-body');

    let allDates;

    let postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    loadBtn.addEventListener('click', loadFunc);
    async function loadFunc(e) {
        let res = await fetch(postUrl);
        let data = await res.json();
        allDates = data;
        posts.replaceChildren();

        Object.entries(data).forEach((element) => {
            let option = document.createElement('option');
            option.value = element[0];
            option.textContent = element[1].title;
            // option.dataset.body = element[1].body;
            posts.appendChild(option);
        });
    }
    viewBtn.addEventListener('click', viewFunc);
    async function viewFunc(e) {
         let ul = document.getElementById('post-comments');

        let selectedPostId = document.getElementById('posts').value;
        let res = await fetch(commentsUrl);
        let data = await res.json();
        h1.textContent = allDates[selectedPostId].title;
        p.textContent = allDates[selectedPostId].body;

        ul.replaceChildren();
        Object.values(data).forEach((element) => {
            if (element.postId == selectedPostId) {
                let li = document.createElement('li');
                li.id = element.id;
                li.textContent = element.text;
                ul.appendChild(li);
            }
        });
    }
}

attachEvents();
