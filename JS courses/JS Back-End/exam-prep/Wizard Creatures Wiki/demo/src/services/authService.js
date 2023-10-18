const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

// exports.findByUsername = (username) => User.findOne({ email });
// exports.findByEmail = (email) => User.findOne({ email });

exports.login =async (email, password) => {
    const user =await checkForUser(email)
    
    if (!user) {
        throw new Error ('Email or password wrong');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Invalid user or password!')
    }

    const token = await setToken(user)

    return token;
}

exports.register =async (userData) => {
    const user = await checkForUser(userData.email)
    if (user){
        throw new Error('Username has already been used!')
    }
    if (userData.password !== userData.repeatPassword){
        throw new Error(`Passwords don't match!`)
    }
    
    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash;

    const createdUser =await User.create(userData);

    const token = await setToken(createdUser);

    return token;
}

const checkForUser =async (email) => {
    const user = await User.findOne({email});
    return user;
}

async function setToken(user){
    
    const payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };

    const token =await jwt.sign(payload, SECRET, {
        expiresIn: '2d'
    });

    return token;
}