import { getUserMemes } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (user, products) => html`
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="../images/${user.gender}.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${products.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
     <section id="meme-feed">
           
            <div id="memes">
				${
                    products.length == 0
                        ? html`<p class="no-memes">No memes in database.</p>`
                        : html`${products.map(productCardTemplate)}`
                }				
			</div>
			</div>

        </section>
`;

const productCardTemplate = (product) => html`<div class="user-meme">
    <p class="user-meme-title">${product.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${product.imageUrl} />
    <a class="button" href="/catalog/${product._id}">Details</a>
</div>`;

export async function myProfile(ctx) {
    const user = getUserData();
    const products = await getUserMemes(ctx.user._id);
    ctx.render(catalogTemplate(user, products));
}
