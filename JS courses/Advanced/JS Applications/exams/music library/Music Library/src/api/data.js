import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function deleteById(id) {
    return del('/data/albums/' + id);
}

export async function createProduct(albumsData) {
    return post('/data/albums', albumsData);
}

export async function editProduct(id, albumsData) {
    return put('/data/albums/' + id, albumsData);
}

export async function likeNum(id) {
    return get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function like(id) {
    return post(`/data/likes`, id);
}

export async function isLiked(albumId,userId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

// export async function searchProduct(query) {
//     return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
// }

// make crud operations to get data from server