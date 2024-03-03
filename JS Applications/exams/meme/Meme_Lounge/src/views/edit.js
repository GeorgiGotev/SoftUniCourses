import { editProduct, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler, notify } from '../util.js';

const editTemplate = (product, onEdit) => html`<section id="edit-meme">
<form @submit=${onEdit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${product.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${product.description}></textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${product.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>`;

export async function editView(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);

    ctx.render(editTemplate(product, createSubmitHandler(onEdit)));

    async function onEdit({ title, description, imageUrl }) {
        if (title == '' || description == '' || imageUrl == '') {
            return notify('All fields are required!');
        }

        await editProduct(id, {title, description, imageUrl});

        ctx.page.redirect('/catalog/' + id);
    }
}