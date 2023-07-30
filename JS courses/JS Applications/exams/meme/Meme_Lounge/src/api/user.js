import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password ) {
    const { _id, email: resEmail, accessToken,username,gender } = await post('/users/login', { email, password});

    setUserData({
        _id,
        username,
        email: resEmail,
        gender,
        accessToken,
    });
}

export async function register(username, email, password, gender) {
    const { _id, email: userEmail, accessToken } = await post('/users/register', { username, email, password, gender });

    setUserData({
        _id,
        username,
        email: userEmail,
        gender,
        accessToken,
    });
}

export async function logout() {
   get('/users/logout');
    clearUserData();
}