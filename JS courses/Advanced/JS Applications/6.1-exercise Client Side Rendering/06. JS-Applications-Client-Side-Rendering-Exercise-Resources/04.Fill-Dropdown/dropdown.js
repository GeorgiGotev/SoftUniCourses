import { render, html } from './node_modules/lit-html/lit-html.js';

let getUrl = `http://localhost:3030/jsonstore/advanced/dropdown`;
let form = document.querySelector('form');
form.addEventListener('submit', addItem);

async function getData() {
    let res = await fetch(getUrl);
    return await res.json();
}

const selectTemplate = (data) => html`
    <select id="menu">
        ${data.map((el) => html`<option value="${el._id}">${el.text}</option>`)}
    </select>
`;

let data = Object.values(await getData());
let select = document.querySelector('div');
update(data);
function update(data) {
    render(selectTemplate(data), select);
}
async function addItem(e) {
    e.preventDefault();
    let formDate = new FormData(form);
    let text = formDate.get('text');

    const res = await fetch(getUrl, {
        method: 'POST',
        body: JSON.stringify({ text }),
    });
    form.reset();
    data.push(await res.json());
    update(data);
}
