const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minLength: 2,
        },
        species: {
            type: String,
            required: [true, 'Species is required'],
            minLength: 3,
        },
        skin: {
            type: String,
            required: [true, 'Skin is required'],
            minLength:3
        },
        eye: {
            type: String,
            required: true,
            minLength: 3,
        },
        image: {
            type: String,
            required: true,
            validate: /^https?:\/\//,
        },
        description: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 500
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        votes: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },
        ],
    });



const Post = mongoose.model('Post', postSchema);

module.exports = Post;
