import { html, render } from './node_modules/lit-html/lit-html.js';
// import {styleMap} from './node_modules/lit-html/directives/style-map.js';
import { cats } from './catSeeder.js';

const section = document.getElementById('allCats');
section.addEventListener('click', showMore);

const catTemplate = (cat) => html`
    <ul>
        ${cat.map(
            (c) => html`
                <li>
                    <img
                        src="./images/${c.imageLocation}.jpg"
                        width="250"
                        height="250"
                        alt="Card image cap"
                    />
                    <div class="info">
                        <button class="showBtn">Show status code</button>
                        <div class="status" style="display: none" id="100">
                            <h4>Status Code: ${c.statusCode}</h4>
                            <p>${c.statusMessage}</p>
                        </div>
                    </div>
                </li>
            `
        )}
    </ul>
`;

render(catTemplate(Object.values(cats)), section);

function showMore(e) {
    if (
        e.target.tagName == 'BUTTON' &&
        e.target.textContent === 'Show status code'
    ) {
        e.preventDefault();
        e.target.parentElement.querySelector('.status').style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else if (
        e.target.tagName == 'BUTTON' &&
        e.target.textContent === 'Hide status code'
    ) {
        e.preventDefault();
        e.target.parentElement.querySelector('.status').style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}
