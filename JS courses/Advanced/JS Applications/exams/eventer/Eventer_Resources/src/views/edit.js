// import { editFruit, getById } from '../api/data.js';
// import { html } from '../lib.js';
// import { createSubmitHandler } from '../util.js';

// const editTemplate = (fruit, onEdit) => html`<section id="edit">
//     <div class="form">
//         <h2>Edit Fruit</h2>
//         <form @submit=${onEdit} class="edit-form">
//             <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${fruit.name} />
//             <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value=${fruit.imageUrl} />
//             <textarea
//                 id="fruit-description"
//                 name="description"
//                 placeholder="Description"
//                 .value=${fruit.description}
//                 rows="10"
//                 cols="50"></textarea>
//             <textarea
//                 id="fruit-nutrition"
//                 name="nutrition"
//                 placeholder="Nutrition"
//                 .value=${fruit.nutrition}
//                 rows="10"
//                 cols="50"></textarea>
//             <button type="submit">post</button>
//         </form>
//     </div>
// </section>`;

// export async function editView(ctx) {
//     const id = ctx.params.id;
//     const fruit = await getById(id);

//     ctx.render(editTemplate(fruit, createSubmitHandler(onEdit)));

//     async function onEdit({ name, imageUrl, description, nutrition }) {
//         if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
//             return alert('All fields are required!');
//         }

//         await editFruit(id, { name, imageUrl, description, nutrition });

//         ctx.page.redirect('/catalog/' + id);
//     }
// }

import { editEvent, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (event, onEdit) => html`<section id="edit">
    <div class="form">
        <h2>Edit Event</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Event" .value=${event.name}/>
            <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value=${event.imageUrl}
            />
            <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value=${event.category}
            />

            <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${event.description}
            ></textarea>

            <label for="date-and-time">Event Time:</label>
            <input type="text" name="date" id="date" placeholder="When?" .value=${event.date}/>

            <button type="submit">Edit</button>
        </form>
    </div>
</section>`;

export async function editView(ctx) {
    console.log(ctx);
    const id = ctx.params.id;
    const event = await getById(id);

    ctx.render(editTemplate(event, createSubmitHandler(onEdit)));

    async function onEdit({ name, imageUrl, category, description, date }) {
        if (
            name == '' ||
            imageUrl == '' ||
            description == '' ||
            category == '' ||
            date == ''
        ) {
            return alert('All fields are required!');
        }

        await editEvent(id, { name, imageUrl, category, description, date });

        ctx.page.redirect('/details/' + id);
    }
}
