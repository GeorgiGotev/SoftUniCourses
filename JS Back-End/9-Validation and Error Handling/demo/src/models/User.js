const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minLength: [5, 'username is too short'],
        match: /^[A-Za-z0-9]+$/,
        unique: true,
    },
    password: {
        type:String,
        required:[true, 'password is required'],
        validate:{
            validator:function(value){
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message: `Invalid password characters!`
        },
        minLength:8,
    },
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password) {
        throw new Error('Password mismatch!');
    }
});

//Validate if user exist

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

module.exports = mongoose.model('User', userSchema);
