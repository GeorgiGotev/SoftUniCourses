const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.login = async (email, password) => {
    const user = await checkForUser(email);

    if (!user) {
        throw new Error('Invalid user or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid user or password!');
    }

    const token = await setToken(user);

    return token;
};

exports.register = async (userData) => {
    const user = await checkForUser(userData.email);

    if (user) {
        throw new Error('Username has already been used!');
    }
    if (userData.password == '') {
        throw new Error('Password is required!');
    }
    if (userData.password.length < 4) {
        throw new Error('Password is too short!');
    }
    if (userData.password !== userData.repeatPassword) {
        throw new Error(`Passwords mismatch!`);
    }

    const hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash;

    const createdUser = await User.create(userData);

    const token = await setToken(createdUser);

    return token;
};

const checkForUser = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

async function setToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, {
        expiresIn: '2d',
    });

    return token;
}
