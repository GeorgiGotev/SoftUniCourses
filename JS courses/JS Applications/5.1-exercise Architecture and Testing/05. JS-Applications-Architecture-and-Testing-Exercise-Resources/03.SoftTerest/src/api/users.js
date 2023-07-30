import { get, post } from './api.js';

export async function login(email, password) {
    const user = await post('/users/login', { email, password });
    
    localStorage.setItem('user', JSON.stringify(user));
};

export async function register(email, password) {
    const user = await post('/users/register', { email, password });

    localStorage.setItem('user', JSON.stringify(user));
};

export async function logout() {
    get('/users/logout');
    localStorage.removeItem('user');
};
