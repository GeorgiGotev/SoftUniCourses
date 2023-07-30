import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/shoes/' + id);
}

export async function deleteById(id) {
    return del('/data/shoes/' + id);
}

export async function createShoes(shoesData) {
    return post('/data/shoes', shoesData);
}

export async function editShoe(id, shoesData) {
    return put('/data/shoes/' + id, shoesData);
}

export async function searchShoe(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}

// make crud operations to get data from server