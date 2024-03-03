import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/events?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/events/' + id);
}

export async function deleteById(id) {
    return del('/data/events/' + id);
}

export async function createEvent(eventData) {
    return post('/data/events/', eventData);
}

export async function editEvent(id, eventData) {
    return put('/data/events/' + id, eventData);
}

export async function goingToNum(id) {
    return get(`/data/going?where=eventId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function isGoingTo(eventId,userId) {
    return get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function goingTo(id) {
    return post(`/data/going`, id);
}


// make crud operations to get data from server