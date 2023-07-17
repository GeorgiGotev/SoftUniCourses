import { html, render } from './node_modules/lit-html/lit-html.js';

let form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

let template = (townsList) => html`
    <ul>
        ${townsList.map(t => html`<li>${t}</li>`)}
    </ul>
`;

let root = document.getElementById('root');



function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let towns = formData.get('towns');
    if (towns) {
        render(template(towns.split(', ')), root);
        form.reset();
    }
}
