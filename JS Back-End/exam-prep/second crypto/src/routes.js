const router = require('express').Router();
const homeController = require('../src/controllers/homeController');
const authController = require('../src/controllers/authController');
const cryptoController = require('../src/controllers/cryptoController');

router.use(homeController);
router.use(authController);
router.use('/crypto', cryptoController);
router.all('*', (req,res)=>{
    res.render('home/404');
})

module.exports = router;
