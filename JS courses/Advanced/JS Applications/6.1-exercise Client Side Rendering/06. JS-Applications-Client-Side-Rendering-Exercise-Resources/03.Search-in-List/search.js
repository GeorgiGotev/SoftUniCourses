import { towns } from './towns.js';
import { render, html } from './node_modules/lite-html/lite-html.js';

let townsTemplate = (towns) =>
    html` <ul>
        ${towns.map((t) => html` <li>${t}</li> `)}
    </ul>`;

let divTowns = document.getElementById('towns');

render(townsTemplate(towns), divTowns);

document.querySelector('body').addEventListener('click', search);
let searchField = document.getElementById('searchText');
let result = document.getElementById('result');

function search(e) {
    let counter = 0;
    if (e.target.tagName == 'BUTTON') {
        e.preventDefault();
        let towns = [...e.target.parentElement.querySelectorAll('#towns li')];

        if(searchField.value!=''){
        towns.forEach((e) => {
            if (
                
                e.textContent
                    .toLowerCase()
                    .includes(searchField.value.toLowerCase())
            ) {
                counter++;
                e.className = 'active';
            } else {
                e.classList.remove('active');
            }
        });
        result.textContent = `${counter} matches found`;
        searchField.value = '';
    }
   }
}
