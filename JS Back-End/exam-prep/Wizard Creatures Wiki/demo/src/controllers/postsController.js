const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const postService = require('../services/postService');
const { getErrorMessage } = require('../utils/errorHelper');

router.get('/create', isAuth, (req, res) => {
    res.render('blog/create');
});

router.post('/create', isAuth, async (req, res) => {
    const postData = req.body;

    try {
        await postService.create(req.user._id, postData);
    } catch (error) {
        return res
            .status(400)
            .render('blog/create', { error: getErrorMessage(error) });
    }

    res.redirect('/post/catalog');
});

router.get('/catalog', async (req, res) => {
    const posts = await postService.getAll().lean();

    res.render('blog/all-posts', { posts });
});

router.get('/my-posts', (req, res) => {
    res.render('blog/my-posts');
});

router.get('/:postId/details', async (req, res) => {
    const post = await postService.getOne(req.params.postId).lean();
    const isOwner = req.user?._id == post.owner._id;

    const voters = [];
    post.votes.forEach((user) => {
        voters.push(user.email);
    });

    function voted() {
        let hasVoted = false;
        for (const user of post.votes) {
            if (user._id == req.user?._id) {
                hasVoted = true;
            }
        }
        return hasVoted;
    }

    res.render('blog/details', {
        post,
        isOwner,
        hasVoted: voted(),
        numberOfVotes: post.votes.length,
        hasVotes: post.votes.length > 0,
        voters: voters.join(', '),
    });
});

router.get('/:postId/vote',isAuth, async(req,res)=>{
    await postService.votePost(req.user._id, req.params.postId);
    res.redirect(`/post/${req.params.postId}/details`)
});

router.get('/:postId/delete', isAuth, async(req,res)=>{
    await postService.delete(req.params.postId);

    res.redirect('/post/catalog');
});

router.get('/:postId/edit', isAuth, async(req,res)=>{
    const post= await postService.getOne(req.params.postId).lean();
    res.render('blog/edit', {post})
});

router.post('/:postId/edit', isAuth, async(req,res)=>{
    
        await postService.editPost(req.params.postId, req.body)
        res.redirect(`/post/${req.params.postId}/details`)
    
})


module.exports = router;
