import {
    deleteById,
    getById,
    goingTo,
    goingToNum,
    isGoingTo,
} from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (
    isLoggedIn,
    isOwner,
    isClicked,
    event,
    onDelete,
    onGoing,
    goingCount
) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${event.imageUrl} />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
                Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <span>${event.description}</span>
                </div>
            </div>

            <h3>Going: <span id="go">${goingCount}</span> times.</h3>
            <div id="action-buttons">
                ${isOwner
                    ? html`
                          <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                          <a
                              @click=${onDelete}
                              href="javascript:void(0)"
                              id="delete-btn"
                              >Delete</a
                          >
                      `
                    : null}
                ${isLoggedIn && !isOwner && !isClicked
                    ? html`<a
                          @click=${onGoing}
                          href="javascript:void(0)"
                          id="go-btn"
                          >Going</a
                      >`
                    : null}
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    let isClicked = null;
    const isLoggedIn = getUserData();
    const event = await getById(id);
    const user = getUserData();
    let goingCount=await goingToNum(id);
    const isOwner = user && ctx.user._id == event._ownerId;
    if (user) {
        isClicked = await isGoingTo(event._id, user._id);
    }

    ctx.render(
        detailsTemplate(
            isLoggedIn,
            isOwner,
            isClicked,
            event,
            onDelete,
            onGoing,
            goingCount
        )
    );

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect('/events');
        }
    }
    async function onGoing() {
        document.getElementById('go-btn').style.display = 'none';
        await goingTo({ eventId: id });
         goingCount = await goingToNum(id);

        // ctx.page.redirect(`/details/${event._id}`);
    }
}
