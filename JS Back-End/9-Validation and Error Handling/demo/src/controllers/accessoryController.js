const router = require('express').Router();

const accessoryService=require('../service/accessoryService');
const {isAuth}=require('../middlewares/authMiddleware');

// router.use(isAuth)


router.get('/create',isAuth, (req,res)=>{
    res.render('accessory/create');
})

router.post('/create',isAuth,  async (req,res)=>{

    const {name,description,imageUrl}=req.body;

    await accessoryService.create({name,description,imageUrl});

    res.redirect('/');

})

module.exports=router;