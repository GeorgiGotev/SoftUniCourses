const User = require('../models/User');

exports.register = async (username, email, password, repeatPassword) => {
    if(password!==repeatPassword){
        throw new Error ('Password mismatch!')
    }
    
    await User.create({ username, email, password });
};
