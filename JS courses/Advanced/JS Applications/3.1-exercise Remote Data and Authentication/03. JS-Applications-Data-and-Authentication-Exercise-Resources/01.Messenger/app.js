function attachEvents() {
    let btnRefresh = document.getElementById('refresh');
    btnRefresh.addEventListener('click', showAll);
    let btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', addMore);
}

let messages = document.getElementById('messages');
let author = document.querySelector('input[name="author"]');
let content = document.querySelector('input[name="content"]');

async function showAll(e) {
    messages.value = '';
    let res = await fetch(`http://localhost:3030/jsonstore/messenger`);
    if(!res.ok){
        throw new Error('error')
    }
    let data = await res.json();
    let comments=[];
    Object.values(data).forEach(
        (x) => comments.push(`${x.author}: ${x.content}`)
    );
    messages.value=comments.join(`\n`);
}
async function addMore(e) {
    if(!author.value || !content.value){
        return
    }
    let data = {
        author: author.value,
        content: content.value,
    };
    author.value = '';
    content.value = '';
    let res = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

attachEvents();
