let form = document.querySelector('form');
form.addEventListener('submit', createBook);
document.querySelector('#loadBooks').addEventListener('click', loadBooks);
let table = document.querySelector('table tbody');
document.querySelector('table').addEventListener('click', modify);

async function createBook(e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector('form'));
    let title = formData.get('title');
    let author = formData.get('author');
    if (!title || !author) {
        return;
    }
    let data = {
        author: title,
        title: author,
    };
    document.querySelector('form').reset();
    let res = await fetch(`http://localhost:3030/jsonstore/collections/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    loadBooks();
}
async function loadBooks(e) {
    let res = await fetch(`http://localhost:3030/jsonstore/collections/books`);
    let data = await res.json();
    table.replaceChildren();
    Object.entries(data).forEach((element) => {
        let tr = document.createElement('tr');
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = element[1].author
        ;
        let tdTitle = document.createElement('td');
        tdTitle.textContent = element[1].title;
        let tdButtons = document.createElement('td');

        let btn1 = document.createElement('button');
        btn1.textContent = 'Edit';
        btn1.setAttribute('id', `${element[0]}`);
        btn1.setAttribute('class', `editBtn`);

        let btn2 = document.createElement('button');
        btn2.textContent = 'Delete';
        btn2.setAttribute('id', `${element[0]}`);
        btn2.setAttribute('class', `deleteBtn`);

        tdButtons.appendChild(btn1);
        tdButtons.appendChild(btn2);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdTitle);
        tr.appendChild(tdButtons);

        table.appendChild(tr);
    });
    let titleField = document.querySelector('input[name="title"]');
    titleField.value='';
    let authorField = document.querySelector('input[name="author"]');
    authorField.value='';
}
async function modify(e) {
    let id = e.target.id;
    let titleField = document.querySelector('input[name="title"]');
    let authorField = document.querySelector('input[name="author"]');
    debugger
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') {
        let res = await fetch(
            `http://localhost:3030/jsonstore/collections/books/${id}`,
            {
                method: 'DELETE',
            }
        );
        loadBooks();
    } else if (
        e.target.tagName === 'BUTTON' &&
        e.target.textContent === 'Edit'
    ) {
        document.querySelector('form h3').textContent = 'Edit FORM';

        titleField.value =
            e.target.parentElement.parentElement.children[0].textContent;
        authorField.value =
            e.target.parentElement.parentElement.children[1].textContent;
        form.removeEventListener('submit', createBook);
        let saveBtn = form.children[5];
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', updateFunc);
    }
    async function updateFunc(e) {
        e.preventDefault();
        if(titleField.value==="" || authorField.value===""){
            return
        }
        const formData = new FormData(e.target.parentNode);
        const data = {
            "author": formData.get('title'),
            "title": formData.get('author')
          }
          
        let res = await fetch(
            `http://localhost:3030/jsonstore/collections/books/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        );
        document.querySelector('form h3').textContent = 'FORM';
        titleField.value='';
        authorField.value='';
        loadBooks();

        form.children[5].textContent = 'Submit';
        form.children[5].removeEventListener('click', updateFunc)
        form.addEventListener('submit', createBook);
    }
}
