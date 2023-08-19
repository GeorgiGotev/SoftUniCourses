const mongoose=require('mongoose');

const uri='mongodb://localhost:27017/Cubicle';

async function dbConnect(){
    mongoose.connect(uri);
}

module.exports=dbConnect;


