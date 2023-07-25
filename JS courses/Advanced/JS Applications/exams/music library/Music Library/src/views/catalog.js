import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (products) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        ${products.length != 0
            ? html`<ul class="card-wrapper">
                  ${products.map(productCardTemplate)}
              </ul>`
            : html`<h2>There are no albums added yet.</h2>`}
    </section>
`;

const productCardTemplate = (product) => html`
<li class="card">
    <img src=${product.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong
        ><span class="singer">${product.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${product.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${product.sales}</span></p>
    <a class="details-btn" href="/catalog/${product._id}">Details</a>
</li>
`;

export async function catalogView(ctx) {
    const products = await getAll();
    ctx.render(catalogTemplate(products));
}
