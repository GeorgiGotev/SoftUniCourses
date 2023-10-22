const router = require('express').Router();
const homeController = require('../src/controllers/homeController');
const authController = require('../src/controllers/authController');
const productsController = require('../src/controllers/productsController');

router.use(homeController);
router.use('/users', authController);
router.use('/products', productsController);

router.all('*', (req, res) => {
    res.render('home/404');
});

module.exports = router;
