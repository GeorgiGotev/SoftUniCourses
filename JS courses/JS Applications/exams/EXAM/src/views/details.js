import { deleteById, getById, isLiked, like, likeNum } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (
    isClicked,
    user,
    product,
    isOwner,
    number,
    onLike,
    onDelete
) => html`<section id="details">
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${product.imageUrl} alt="example1" />
            <p id="details-category">${product.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${product.description}</p>
                    <p id="more-info">${product.moreInfo}</p>
                </div>

                <h3>Likes:<span id="likes">${number}</span></h3>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    ${isOwner
                        ? html` <a href=${`/edit/${product._id}`} id="edit-btn"
                                  >Edit</a
                              >
                              <a
                                  @click=${onDelete}
                                  href="javascript:void(0)"
                                  id="delete-btn"
                                  >Delete</a
                              >`
                        : null}

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${user && !isOwner && !isClicked
                        ? html`<a
                              @click=${onLike}
                              href="javascript:void(0)"
                              id="like-btn"
                              >Like</a
                          >`
                        : null}
                </div>
            </div>
        </div>
    </section>
</section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    let isClicked = null;
    const user = await getUserData();
    const product = await getById(id);
    const isOwner = user && ctx.user._id == product._ownerId;
    const number = await likeNum(id);
    if (user) {
        isClicked = await isLiked(product._id, user._id);
    }

    ctx.render(
        detailsTemplate(
            isClicked,
            user,
            product,
            isOwner,
            number,
            onLike,
            onDelete
        )
    );

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await like({ factId: id });
        document.getElementById('like-btn').style.display = 'none';
        ctx.page.redirect('/catalog/' + id);
    }
}
