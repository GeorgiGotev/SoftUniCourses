let table = document.querySelector('table tbody');

// async function request(url, options) {
//     const response = await fetch(url, options);

//     if (response.ok === false) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     return data;
// }

async function getAllBooks(e) {
    e.preventDefault();
    table.replaceChildren();

    let res = await fetch(
        `http://localhost:3030/jsonstore/collections/books`
    );
    let books=await res.json();
    Object.entries(books).forEach((element) => {
        let tr = document.createElement('tr');
        tr.dataset.id = element[0];
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = element[1].title;
        let tdTitle = document.createElement('td');
        tdTitle.textContent = element[1].author;
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
}

async function deleteFunc(e) {
    let id = e.target.parentElement.parentElement.dataset.id;
    let res = await fetch(
        `http://localhost:3030/jsonstore/collections/books/${id}`,
        {
            method: 'DELETE',
        }
    );
    getAllBooks();
}
let id;
async function updateFunc(e) {
    e.preventDefault();
    id = e.target.parentElement.parentElement.dataset.id;
    let titleField = document.querySelector('#editForm input[name="title"]');
    titleField.value =
        e.target.parentElement.parentElement.children[0].textContent;
    let authorField = document.querySelector('#editForm input[name="author"]');
    authorField.value =
        e.target.parentElement.parentElement.children[1].textContent;
    
}
async function saveFunc(e){
    e.preventDefault();
    const formData = new FormData(e.target.parentNode);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };
    
    let res = await fetch(
        `http://localhost:3030/jsonstore/collections/books/${id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book),
        }
    );
    getAllBooks(e);
}
async function createBook(e) {
    
    let formData = new FormData(e.target.parentNode);
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
}

function attachEvents(e) {
    document.getElementById('editForm').style.display = 'none';
    document.querySelector('body').addEventListener('click', actionFunc);
}

function actionFunc(e) {
    if (
        e.target.tagName === 'BUTTON' &&
        e.target.textContent === 'LOAD ALL BOOKS'
    ) {
        getAllBooks(e);
    } else if (
        e.target.tagName === 'BUTTON' &&
        e.target.textContent === 'Delete'
    ) {
        deleteFunc(e);
    }
     else if (
        e.target.tagName === 'BUTTON' &&
        e.target.textContent === 'Edit'
    ) {
        document.getElementById('editForm').style.display = 'block';
        document.getElementById('createForm').style.display = 'none';
        updateFunc(e);

    }else if(e.target.tagName === 'BUTTON' &&
    e.target.textContent === 'Save'){
        saveFunc(e);
        document.getElementById('editForm').style.display = 'none';
        document.getElementById('createForm').style.display = 'block';
    }else if(e.target.tagName === 'BUTTON' &&
    e.target.textContent === 'Submit'){
        createBook(e);
    }
}
attachEvents();
