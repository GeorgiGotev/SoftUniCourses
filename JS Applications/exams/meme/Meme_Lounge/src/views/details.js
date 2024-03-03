import { deleteById, getById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (product, isOwner, onDelete) => html` <section
    id="meme-details"
>
    <h1>Meme Title: ${product.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${product.imageUrl} />
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${product.description}</p>

            ${isOwner
                ? html`<a class="button warning" href="/edit/${product._id}"
                          >Edit</a
                      >
                      <button
                          id="delete-btn"
                          @click=${onDelete}
                          href="javascript:void(0)"
                          class="button danger"
                      >
                          Delete
                      </button>`
                : null}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);
    const user = getUserData();
    const isOwner = user && user._id == product._ownerId;

    ctx.render(detailsTemplate(product, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect('/catalog');
        }
    }
}


