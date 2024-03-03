import { searchShoe } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTemplate = (user,shoes = [], onSearch) => html`<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input
            id="#search-input"
            type="text"
            name="search"
            placeholder="Search here..."
            required
        />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${shoes.length == 0
            ? html` <h2>There are no results found.</h2>`
            : html`<ul class="card-wrapper">
                  ${shoes.map(shoe=> singleTemplate(user,shoe))}
              </ul>`}
    </div>
</section>`;

const singleTemplate = (user,shoe ) => html`
    <li class="card">
        <img src=${shoe.imageUrl} alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        ${user
            ? html`<a class="details-btn" href="/catalog/${shoe._id}"
                  >Details</a
              >`
            : null}
    </li>
`;

export async function searchView(ctx) {
    let user = sessionStorage.getItem('userData');
    
    let shoes;
    ctx.render(searchTemplate(user,shoes, createSubmitHandler(onSearch)));

    async function onSearch({ search }) {
        if (search == '') {
            return alert('Enter search params!');
        }

        shoes = await searchShoe(search);
        ctx.render(searchTemplate(user,shoes, createSubmitHandler(onSearch)));
    }
}

// import { searchFruit } from '../api/data.js';
// import { html } from '../lib.js';
// import { createSubmitHandler } from '../util.js';

// const searchTemplate = (fruits = [], onSearch) => html`<section id="search">
//     <div class="form">
//         <h2>Search</h2>
//         <form @submit=${onSearch} class="search-form">
//             <input type="text" name="search" id="search-input" />
//             <button class="button-list">Search</button>
//         </form>
//     </div>
//     <h4>Results:</h4>
//     <div class="search-result">
//         ${fruits.length == 0 ? html`<p class="no-result">No result.</p>` : html`${fruits.map(fruitCardTemplate)}`}
//     </div>
// </section>`;

// const fruitCardTemplate = (fruit) => html`<div class="fruit">
//     <img src=${fruit.imageUrl} />
//     <h3 class="title">${fruit.name}</h3>
//     <p class="description">${fruit.description}</p>
//     <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
// </div>`;

// export async function searchView(ctx) {
//     let fruits;
//     ctx.render(searchTemplate(fruits, createSubmitHandler(onSearch)));

//     async function onSearch({ search }) {
//         if (search == '') {
//             return alert('Enter search paramater!');
//         }

//         fruits = await searchFruit(search);
//         ctx.render(searchTemplate(fruits, createSubmitHandler(onSearch)));
//     }
// }
