import { render, html } from './node_modules/lit-html/lit-html.js';

async function getData() {
    const res = await fetch(`http://localhost:3030/jsonstore/advanced/table`);
    return await res.json();
}
let data = Object.values(await getData());
let tbody = document.querySelector('#tbody');
function trTemplate(data) {
    let result = html`
        ${data.map(
            (e) => html`
                <tr>
                    <td>${e.firstName} ${e.lastName}</td>
                    <td>${e.email}</td>
                    <td>${e.course}</td>
                </tr>
            `
        )}
    `;
    return result;
}

update(data);
async function update(data) {
    render(trTemplate(data), tbody);
}

document.querySelector('#searchBtn').addEventListener('click', onClick);

let inputElement = document.getElementById('searchField');

function onClick() {
    Array.from(document.querySelectorAll('#tbody tr')).forEach((everyRow) => {
        if (
            everyRow.textContent
                .toLowerCase()
                .includes(inputElement.value.toLowerCase())
        ) {
            everyRow.classList.add('select'); // setAttribute("class", select); other option to set attribute
        } else {
            everyRow.classList.remove('select');
        }
    });

    inputElement.value = '';
}
