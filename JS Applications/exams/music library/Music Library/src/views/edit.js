import { editProduct, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (product, onEdit) => html` <section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
                type="text"
                name="singer"
                id="album-singer"
                placeholder="Singer/Band"
                .value=${product.singer}
            />
            <input
                type="text"
                name="album"
                id="album-album"
                placeholder="Album"
                .value=${product.album}
            />
            <input
                type="text"
                name="imageUrl"
                id="album-img"
                placeholder="Image url"
                .value=${product.imageUrl}
            />
            <input
                type="text"
                name="release"
                id="album-release"
                placeholder="Release date"
                .value=${product.release}
            />
            <input
                type="text"
                name="label"
                id="album-label"
                placeholder="Label"
                .value=${product.label}
            />
            <input
                type="text"
                name="sales"
                id="album-sales"
                placeholder="Sales"
                .value=${product.sales}
            />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editView(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);

    ctx.render(editTemplate(product, createSubmitHandler(onEdit)));

    async function onEdit({ singer, imageUrl, album, release, label, sales }) {
        if (
            singer == '' ||
            imageUrl == '' ||
            album == '' ||
            release == '' ||
            label == '' ||
            sales == ''
        ) {
            return alert('All fields are required!');
        }

        await editProduct(id, { singer, imageUrl, album, release, label, sales });

        ctx.page.redirect('/catalog/' + id);
    }
}
