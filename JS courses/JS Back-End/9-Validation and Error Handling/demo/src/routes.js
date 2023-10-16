const router=require('express').Router();

const homeController=require('./controllers/homeController');
const cubeController=require('./controllers/cubeController');
const accessoryController=require('./controllers/accessoryController');
const userController=require('./controllers/userController');

router.use(homeController);
router.use('/cubes',cubeController);
router.use('/accessory', accessoryController);
router.use('/users', userController);
router.get('*', (req,res)=>{
    res.render('404');
})

module.exports=router;