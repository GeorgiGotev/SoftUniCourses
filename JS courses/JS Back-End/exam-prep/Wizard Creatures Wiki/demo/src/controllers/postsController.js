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

router.get('/catalog',async (req,res)=>{
    const posts= await postService.getAll().lean();

    res.render('blog/all-posts', {posts})
});

router.get('/my-posts', (req,res)=>{
    res.render('blog/my-posts');
})

router.get('/:postId/details', (req,res)=>{
    res.render('blog/details');
})



module.exports = router;
