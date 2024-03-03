// import { deleteById, getById } from '../api/data.js';
// import { html } from '../lib.js';

// const detailsTemplate = (product, isOwner, onDelete) => html`<section id="details">
//     <div id="details-wrapper">
//         <img id="details-img" src=${product.imageUrl} alt="example1" />
//         <p id="details-title">${product.name}</p>
//         <div id="info-wrapper">
//             <div id="details-description">
//                 <p>${product.description}</p>
//                 <p id="nutrition">Nutrition</p>
//                 <p id="details-nutrition">${product.nutrition}</p>
//             </div>
//             ${isOwner
//                 ? html`<div id="action-buttons">
//                       <a href="/edit/${product._id}" id="edit-btn">Edit</a>
//                       <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
//                   </div>`
//                 : null}
//         </div>
//     </div>
// </section>`;

// export async function detailsView(ctx) {
//     const id = ctx.params.id;
//     const product = await getById(id);
//     const isOwner = ctx.user._id == product._ownerId;

//     ctx.render(detailsTemplate(product, isOwner, onDelete));

//     async function onDelete() {
//         const choice = confirm('Are you sure?');

//         if (choice) {
//             await deleteById(id);

//             ctx.page.redirect('/');
//         }
//     }
// }





// import { deleteById, getById, isLiked, like, likeNum } from '../api/data.js';
// import { html } from '../lib.js';
// import { getUserData } from '../util.js';

// const detailsTemplate = (isClicked,user, product, isOwner,number,onLike, onDelete) => html`<section id="details">
// <div id="details-wrapper">
//   <p id="details-title">Album Details</p>
//   <div id="img-wrapper">
//     <img src=${product.imageUrl} alt="example1" />
//   </div>
//   <div id="info-wrapper">
//     <p><strong>Band:</strong><span id="details-singer">${product.singer}</span></p>
//     <p>
//       <strong>Album name:</strong><span id="details-album">${product.album}</span>
//     </p>
//     <p><strong>Release date:</strong><span id="details-release">${product.release}</span></p>
//     <p><strong>Label:</strong><span id="details-label">${product.label}</span></p>
//     <p><strong>Sales:</strong><span id="details-sales">${product.sales}</span></p>
//   </div>
//   <div id="likes">Likes: <span id="likes-count">${number}</span></div>
//   <div id="action-buttons">
  
//   <!--Edit and Delete are only for creator-->
//   ${isOwner
//         ? html`<a href=${`/edit/${product._id}`} id="edit-btn">Edit</a>
//             <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a> `
//         : html`<a style="visibility:hidden;" href=${`/edit/${product._id}`} id="edit-btn">Edit</a>
//             <a style="visibility:hidden;" @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`}
//   ${user && !isOwner && !isClicked  ?
//     html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`: null
//   }
            
//   </div>
// </div>
// </section>`;



// export async function detailsView(ctx) {
    
//     const id = ctx.params.id;
//     let isClicked=null; 
//     const user= await getUserData();
//     const product = await getById(id);
//     const isOwner =user  && ctx.user._id == product._ownerId;
//     const number= await likeNum(id);
//     if(user){
//       isClicked= await isLiked(product._id, user._id)
//     }

//     ctx.render(detailsTemplate(isClicked,user, product, isOwner,number,onLike, onDelete));

    


//     async function onDelete() {
//         const choice = confirm('Are you sure?');

//         if (choice) {
//             await deleteById(id);

//             ctx.page.redirect('/catalog');
//         }
//     }

//     async function onLike() {
//       await like({ albumId:id });
//       document.getElementById('like-btn').style.display = 'none';
//       ctx.page.redirect('/catalog/' + id);
//     }
// }






