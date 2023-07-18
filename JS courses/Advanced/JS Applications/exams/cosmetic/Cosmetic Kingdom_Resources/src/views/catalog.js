import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const allProductsTemplate = (products) => html` <h2>Products</h2>
    ${products.length !=0
        ? html`<section id="dashboard">
              ${products.map(productTemplate)}
          </section>`
        : html`<h2>No products yet.</h2>`}`;


const productTemplate=(product)=> html`<div class="product">
<img src="${product.imageUrl}" alt="example1" />
<p class="title">${product.name}</p>
<p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
<a class="details-btn" href="/details/${product._id}">Details</a>
</div>`

export async function catalogView(ctx) {
    const products = await getAll();
    ctx.render(allProductsTemplate(products));
}
