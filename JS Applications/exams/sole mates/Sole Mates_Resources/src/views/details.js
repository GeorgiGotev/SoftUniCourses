import { deleteById, getById } from '../api/data.js';
import { html } from '../lib.js';

const detailsTemplate = (shoe, isOwner, onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>Model: <span id="details-model">${shoe.model}</span></p>
            <p>
                Release date: <span id="details-release">${shoe.release}</span>
            </p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${isOwner
            ? html`<div id="action-buttons">
                  <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
                  <a
                      @click=${onDelete}
                      href="javascript:void(0)"
                      id="delete-btn"
                      >Delete</a
                  >
              </div>`
            : null}
    </div>
</section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const shoe = await getById(id);
    // const user= getUserData();
    const isOwner = ctx.user._id == shoe._ownerId;

    ctx.render(detailsTemplate(shoe, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect(`/catalog`);
        }
    }
}

// import { deleteById, getById } from '../api/data.js';
// import { html } from '../lib.js';

// const detailsTemplate = (fruit, isOwner, onDelete) => html`<section id="details">
//     <div id="details-wrapper">
//         <img id="details-img" src=${fruit.imageUrl} alt="example1" />
//         <p id="details-title">${fruit.name}</p>
//         <div id="info-wrapper">
//             <div id="details-description">
//                 <p>${fruit.description}</p>
//                 <p id="nutrition">Nutrition</p>
//                 <p id="details-nutrition">${fruit.nutrition}</p>
//             </div>
//             ${isOwner
//                 ? html`<div id="action-buttons">
//                       <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
//                       <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
//                   </div>`
//                 : null}
//         </div>
//     </div>
// </section>`;

// export async function detailsView(ctx) {
//     const id = ctx.params.id;
//     const fruit = await getById(id);
//     const user= getUserData();
//     const isOwner = user && ctx.user._id == product._ownerId;

//     ctx.render(detailsTemplate(fruit, isOwner, onDelete));

//     async function onDelete() {
//         const choise = confirm('Are you sure?');

//         if (choise) {
//             await deleteById(id);

//             ctx.page.redirect('/');
//         }
//     }
// }
