const router=require('express').Router();
const userService=require('../service/userService');

router.get('/register',(req,res)=>{
    res.render('users/register');
});

router.post('/register',async (req,res)=>{
    const {username, password, repeatPassword}= req.body;
    await userService.register({username, password, repeatPassword});

    res.redirect('/users/login');
});


module.exports=router