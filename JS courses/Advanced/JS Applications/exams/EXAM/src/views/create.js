import { createProduct } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createProductTemplate = (onCreate) => html`
<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${onCreate} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`;

export function createView(ctx) {
    ctx.render(createProductTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ category, 'image-url': imageUrl, description, 'additional-info':moreInfo }) {
        if (category == '' || imageUrl == '' || description == '' || moreInfo == '') {
            return alert('All fields are required!');
        }

        await createProduct({ category, imageUrl, description, moreInfo });
        ctx.page.redirect('/catalog');
    }
}