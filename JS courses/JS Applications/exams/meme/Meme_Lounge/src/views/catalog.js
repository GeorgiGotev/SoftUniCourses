import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (products) => html`
     <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${products.length==0? html`<p class="no-memes">No memes in database.</p>`: html`${products.map(productCardTemplate)}`}				
			</div>
        </section>
`;

const productCardTemplate = (product) => html`<div class="meme">
<div class="card">
    <div class="info">
        <p class="meme-title">${product.title}</p>
        <img class="meme-image" alt="meme-img" src=${product.imageUrl}>
    </div>
    <div id="data-buttons">
        <a class="button" href="/catalog/${product._id}">Details</a>
    </div>
</div>
</div>`;

export async function catalogView(ctx) {
    const products = await getAll();
    console.log(products);
    ctx.render(catalogTemplate(products));
}