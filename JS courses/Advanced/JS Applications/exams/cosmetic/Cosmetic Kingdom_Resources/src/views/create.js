import { createProduct } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createProductTemplate = (onCreate) => html`<section id="create">
    <div @submit=${onCreate} class="form">
        <h2>Add Product</h2>
        <form class="create-form">
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
            />
            <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
            />
            <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
            />
            <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
            ></textarea>

            <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
            />

            <button type="submit">Add</button>
        </form>
    </div>
</section> `;

export function createView(ctx) {
    ctx.render(createProductTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ name, imageUrl, category, description, price }) {
        if (
            name == '' ||
            imageUrl == '' ||
            description == '' ||
            price == '' ||
            category == ''
        ) {
            return alert('All fields are required!');
        }

        await createProduct({ name, imageUrl, category, description, price });
        ctx.page.redirect('/catalog');
    }
}

