const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
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
