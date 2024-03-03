function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let posts = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');
    let h1 = document.getElementById('post-title');
    let p = document.getElementById('post-body');
    let ul = document.getElementById('post-comments');
    let allInfo;

    loadBtn.addEventListener('click', loadFunc);
    async function loadFunc(e) {
        let res = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        let data = await res.json();
        allInfo = data;
        posts.replaceChildren();

        Object.entries(data).forEach((element) => {
            let option = document.createElement('option');
            option.value = element[0];
            option.textContent = element[1].title;
            posts.appendChild(option);
        });
    }
    viewBtn.addEventListener('click', viewFunc);
    async function viewFunc(e) {
        let selectedPostId = document.getElementById('posts').value;
        let res = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        let data = await res.json();
        h1.textContent = allInfo[selectedPostId].title;
        p.textContent = allInfo[selectedPostId].body;

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
