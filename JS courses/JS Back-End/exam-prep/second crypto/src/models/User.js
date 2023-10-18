const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            minLength: 5,
            required: [true, 'Username is required'],
        },
        email: {
            type: String,
            minLength: 10,
            required: [true, 'Email is required'],
        },
        password: {
            type: String,
            required: true,
        },
    }
    // , {
    //     virtuals: {
    //         repeatPassword: {
    //             set(value) {
    //                 if (this.password !== value) {
    //                     throw new mongoose.Error('Password mismatch!');
    //                 }
    //             },
    //         },
    //     },
    // }
    );

const User = mongoose.model('User', userSchema);

module.exports = User;
