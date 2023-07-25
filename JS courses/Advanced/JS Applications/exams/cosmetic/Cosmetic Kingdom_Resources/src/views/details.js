import { bought, buy, deleteById, getById, ownBought } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (
    product,
    isOwner,
    boughtNum,
    onDelete,
    onBought,
    isClicked
) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${boughtNum}</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>
        <div id="action-buttons">
            <!--Edit and Delete are only for creator-->
            ${isOwner
                ? html` <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                      <a
                          @click=${onDelete}
                          href="javascript:void(0)"
                          id="delete-btn"
                          >Delete</a
                      >`
                : null}

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${!isClicked && !isOwner
                ? html`<a @click=${onBought} href="javascript:void(0)" id="buy-btn">Buy</a>`
                : null}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);
    const user = getUserData();
    const isOwner = user && ctx.user._id == product._ownerId;
    const boughtNum = await bought(product._id);
    const isClicked = await  ownBought(id, user._id);
    console.log(isClicked);

    ctx.render(
        detailsTemplate(
            product,
            isOwner,
            boughtNum,
            onDelete,
            onBought,
            isClicked
        )
    );

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect('/catalog');
        }
    }
    async function onBought() {
        await buy({ productId:id });
        document.getElementById('buy-btn').style.display = 'none';
        ctx.page.redirect(`/details/${id}`)
    }
}
