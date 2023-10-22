const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 10,
        required: [true, 'Product name is required!'],
    },
    type: {
        type: String,
        minLength: 2,
        required: [true, 'Product type is required!'],
    },
    damages: {
        type: String,
        minLength: 10,
        required: [true, 'The condition of the product must be described!'],
    },
    image: {
        type: String,
        validate: {
            validator: /^https?:\/\//,
            message: 'Invalid image format!',
        },
        required: [true, 'Image is required!'],
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 200,
        required: [true, 'Description should be between 10 and 200 chars!'],
    },
    production: {
        type: Number,
        min: 1900,
        max: 2023,
        required: [true, 'Production year should be from 1900 to 2023!'],
    },
    exploitation: {
        type: Number,
        min: 0,
        required: [true, 'Exploitation cannot be a negative!'],
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'Price cannot be a negative!'],
    },
    buyingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
