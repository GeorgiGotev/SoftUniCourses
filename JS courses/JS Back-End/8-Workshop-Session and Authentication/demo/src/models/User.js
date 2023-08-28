const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password) {
        throw new mongoose.MongooseError('Password mismatch!');
    }
});

//Validate if user exist

userSchema.pre('save',async function(){
    const hash=await bcrypt.hash(this.password, 10);
    this.password=hash;
})

module.exports = mongoose.model('User', userSchema);
