const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'username is required'],
        },
        lastName: {
            type: String,
            required: [true, 'username is required'],
        },
        email: {
            type: String,
            required: [true, 'email is required'],
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
