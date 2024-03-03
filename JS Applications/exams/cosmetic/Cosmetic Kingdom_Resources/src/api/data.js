import { del, get, post, put } from './api.js';

export async function getAll() {
    return get('/data/products?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/products/' + id);
}

export async function deleteById(id) {
    return del('/data/products/' + id);
}

export async function createProduct(productData) {
    return post('/data/products', productData);
}

export async function editProduct(id, productData) {
    return put('/data/products/' + id, productData);
}


export async function buy(productId) {
    return post('/data/bought', productId);
}

export async function bought(productId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}

export async function ownBought(productId, userId) {
    return get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}