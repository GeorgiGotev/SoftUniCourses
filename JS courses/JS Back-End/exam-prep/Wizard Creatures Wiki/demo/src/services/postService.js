const Post = require('../models/Post');

exports.create = (ownerId, postData) =>
    Post.create({ ...postData, owner: ownerId });

exports.getAll = () => Post.find({});

exports.getOne = (postId) => Post.findById(postId).populate('owner').populate('votes');

exports.votePost =async (userId, postId) => {
    let post =await Post.findById(postId);
    post.votes.push(userId);
    post.save();
}

exports.editPost = (postId, postData) => Post.findByIdAndUpdate(postId, postData);

exports.delete = (postId) => Post.findByIdAndDelete(postId);
