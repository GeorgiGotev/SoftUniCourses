// import { searchProduct } from '../api/data.js';
// import { html } from '../lib.js';
// import { createSubmitHandler } from '../util.js';

// const searchTemplate = (product = [], onSearch) => html`<section id="search">
//     <div class="form">
//         <h2>Search</h2>
//         <form @submit=${onSearch} class="search-form">
//             <input type="text" name="search" id="search-input" />
//             <button class="button-list">Search</button>
//         </form>
//     </div>
//     <h4>Results:</h4>
//     <div class="search-result">
//         ${product.length == 0 ? html`<p class="no-result">No result.</p>` : html`${product.map(fruitCardTemplate)}`}
//     </div>
// </section>`;

// const fruitCardTemplate = (fruit) => html`<div class="fruit">
//     <img src=${fruit.imageUrl} />
//     <h3 class="title">${fruit.name}</h3>
//     <p class="description">${fruit.description}</p>
//     <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
// </div>`;

// export async function searchView(ctx) {
//     let products;
//     ctx.render(searchTemplate(products, createSubmitHandler(onSearch)));

//     async function onSearch({ search }) {
//         if (search == '') {
//             return alert('Enter search paramater!');
//         }

//         products = await searchProduct(search);
//         ctx.render(searchTemplate(products, createSubmitHandler(onSearch)));
//     }
// }