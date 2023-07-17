// import { createEvent } from '../api/data.js';
// import { html } from '../lib.js';
// import { createSubmitHandler } from '../util.js';

// const createEventTemplate = (onCreate) => html`<section id="create">
//     <div class="form">
//         <h2>Add Fruit</h2>
//         <form @submit=${onCreate} class="create-form">
//             <input type="text" name="name" id="name" placeholder="Fruit Name" />
//             <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
//             <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
//             <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
//             <button type="submit">Add Fruit</button>
//         </form>
//     </div>
// </section>`;

// export function createView(ctx) {
//     ctx.render(createEventTemplate(createSubmitHandler(onCreate)));

//     async function onCreate({ name, imageUrl,category, description, date }) {
//         if (name == '' || imageUrl == '' || description == '' || date == '' || category=='') {
//             return alert('All fields are required!');
//         }

//         await createEvent({ name, imageUrl,category, description, date });
//         ctx.page.redirect('/catalog');
//     }
// }

import { createEvent } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createEventTemplate = (onCreate) => html`<section id="create">
    <div @submit=${onCreate} class="form">
        <h2>Add Event</h2>
        <form class="create-form">
            <input type="text" name="name" id="name" placeholder="Event" />
            <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
            />
            <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
            />

            <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
            ></textarea>

            <input type="text" name="date" id="date" placeholder="When?" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export function createView(ctx) {
    ctx.render(createEventTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ name, imageUrl, category, description, date }) {
        if (
            name == '' ||
            imageUrl == '' ||
            description == '' ||
            date == '' ||
            category == ''
        ) {
            return alert('All fields are required!');
        }

        await createEvent({ name, imageUrl, category, description, date });
        ctx.page.redirect('/events');
    }
}
