const router = require('express').Router();
const homeController = require('../src/controllers/homeController');
const authController = require('../src/controllers/authController');
const postsController=require('../src/controllers/postsController');

router.use(homeController);
router.use('/users',authController);
router.use('/post', postsController);


router.all('*', (req,res)=>{
    res.render('home/404');
})

module.exports = router;
