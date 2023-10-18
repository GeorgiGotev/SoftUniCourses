const Post = require('../models/Post');

exports.create = (ownerId, postData) =>
    Post.create({ ...postData, owner: ownerId });

exports.getAll = () => Post.find({});
