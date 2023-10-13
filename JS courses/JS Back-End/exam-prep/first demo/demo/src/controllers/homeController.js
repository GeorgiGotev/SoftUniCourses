const router = require('express').Router();
const {isAuth}= require('../middlewares/authMiddleware');


router.get('/', (req, res) => {
    // console.log(req.user);
    res.render('home');
    
});

module.exports = router;
