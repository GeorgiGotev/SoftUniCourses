import { del, get, post, put } from './api.js';

// export async function getAll() {
//     return get('/data/fruits?sortBy=_createdOn%20desc');
// }

// export async function getById(id) {
//     return get('/data/fruits/' + id);
// }

// export async function deleteById(id) {
//     return del('/data/fruits/' + id);
// }

// export async function createProduct(fruitData) {
//     return post('/data/fruits', fruitData);
// }

// export async function editProduct(id, fruitData) {
//     return put('/data/fruits/' + id, fruitData);
// }



//BONUSES
// export async function searchProduct(query) {
//     return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
// }

// export async function goingToNum(id) {
//     return get(`/data/going?where=eventId%3D%22${id}%22&distinct=_ownerId&count`);
// }

// export async function isGoingTo(eventId,userId) {
//     return get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// }

// export async function goingTo(id) {
//     return post(`/data/going`, id);
// }

// make crud operations to get data from server