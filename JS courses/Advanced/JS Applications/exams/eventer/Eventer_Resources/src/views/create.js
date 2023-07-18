

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
