import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/facts?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/facts/' + id);
}

export async function deleteById(id) {
    return del('/data/facts/' + id);
}

export async function createProduct(data) {
    return post('/data/facts', data);
}

export async function editProduct(id, data) {
    return put('/data/facts/' + id, data);
}



//BONUSES
// export async function searchProduct(query) {
//     return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
// }

export async function likeNum(id) {
    return get(`/data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function isLiked(eventId,userId) {
    return get(`/data/likes?where=factId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function like(id) {
    return post(`/data/likes`, id);
}
