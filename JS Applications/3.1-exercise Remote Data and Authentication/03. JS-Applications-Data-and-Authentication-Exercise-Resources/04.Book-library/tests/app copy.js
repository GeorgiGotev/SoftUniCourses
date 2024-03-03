let loadBtn = document.getElementById('loadBooks');
let key;
loadBtn.addEventListener('click', loadBooks);
let tbody = document.querySelector('tbody');
let baseForm = document.querySelector('#createForm');
let editForm = document.querySelector('#editForm');
editForm.style.display = 'none';

let url = `http://localhost:3030/jsonstore/collections/books`;

baseForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    let dataForm = new FormData(e.target);
    if(!dataForm.get('author') || !dataForm.get('title')){
        return;
    }
    let data = {
        author: dataForm.get('author'),
        title: dataForm.get('title'),
    };
    let res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    
    loadBooks();
});

async function loadBooks() {
    try {
        let res = await fetch(url);
        if (res.status !== 200) {
            throw new Error('Problem With Loading Data');
        }
        let data = await res.json();
        let entries = Object.entries(data);
        tbody.innerHTML = '';
        for ([id, { title, author }] of entries) {
            let tr = document.createElement('tr');
            let tdAuthor = document.createElement('td');
            tdAuthor.textContent = title;
            let tdTitle = document.createElement('td');
            tdTitle.textContent = author;
            let tdButtons = document.createElement('td');

            let btn1 = document.createElement('button');
            btn1.textContent = 'Edit';
            btn1.setAttribute('class', `editBtn`);
            btn1.dataset.key=id;
            btn1.addEventListener('click', editFunc);
            async function editFunc(e) {
               key=e.target.dataset.key;
                editForm.style.display = 'block';
                baseForm.style.display = 'none';
                let title = tr.children[0].textContent;
                let author = tr.children[1].textContent;
                let titleField = document.querySelector(
                    '#editForm input[name="title"]'
                );
                let authorField = document.querySelector(
                    '#editForm input[name="author"]'
                );
                titleField.value = title;
                authorField.value = author;

                let saveBtn = editForm.querySelector('button');
                saveBtn.addEventListener('click', updateFunc);
                async function updateFunc(e) {
                    e.preventDefault();
                    let names = {
                        author: authorField.value,
                        title: titleField.value,
                    };
                    let res = await fetch(`${url}/${key}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(names),
                    });
                    
                    editForm.style.display = 'none';
                    baseForm.style.display = 'block';
                    loadBooks();
                }
            }

            let btn2 = document.createElement('button');
            btn2.textContent = 'Delete';
            btn2.setAttribute('class', `deleteBtn`);
            btn2.dataset.key=id;
            btn2.addEventListener('click', deleteFunc);
            tdButtons.appendChild(btn1);
            tdButtons.appendChild(btn2);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdTitle);
            tr.appendChild(tdButtons);

            tbody.appendChild(tr);
            async function deleteFunc(e) {
                key=e.target.dataset.key;
                e.preventDefault();
                fetch(`${url}/${key}`, {
                     method: 'DELETE'
                     });
                loadBooks()
            }
        }
    } catch (eer) {
        alert(err);
    }
}
