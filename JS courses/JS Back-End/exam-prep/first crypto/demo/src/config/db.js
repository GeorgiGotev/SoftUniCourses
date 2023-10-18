const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/crypto'; //change name

async function dbConnect() {
    mongoose.set('strictQuery', false);
    mongoose.connect(uri);
}

module.exports = dbConnect;
