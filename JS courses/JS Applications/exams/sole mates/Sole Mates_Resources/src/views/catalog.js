import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (products) => html`
    
    <section id="dashboard"><h2>Collectibles</h2>${products.length == 0 ? html`<h2>There are no items added yet.</h2>` : products.map(shoesCardTemplate)}</section>
`;

const shoesCardTemplate = (product) => html`<li class="card">
<img src=${product.imageUrl} alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${product.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${product.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${product.value}</span>$</p>
<a class="details-btn" href="/catalog/${product._id}">Details</a>
</li>`;

export async function catalogView(ctx) {
    const product = await getAll();
    ctx.render(catalogTemplate(product));
}



