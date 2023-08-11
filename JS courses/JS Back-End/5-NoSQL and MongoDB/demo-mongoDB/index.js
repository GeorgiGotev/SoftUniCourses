const mongoose = require('mongoose');
// const { Schema } = mongoose;

const catSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    age: Number,
});

const Cat = mongoose.model('Cat', catSchema);

async function main() {
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb://localhost:27017/catShelter');

    await saveCat('Bobi', 4);
    await readCats();
}

async function readCats() {
    const cats = await Cat.find();
    console.log(cats);
}

async function saveCat(name, age) {

    //this method is without await cat.save();
    await Cat.create({name,age})


    // const cat = new Cat({ name, age });
    // await cat.save();
}
main();
