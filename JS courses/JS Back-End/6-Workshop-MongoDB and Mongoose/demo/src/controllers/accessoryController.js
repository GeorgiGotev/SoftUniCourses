const router = require('express').Router();

router.get('/create', (req,res)=>{
    res.render('accessory/create');
})

router.post('/create', (req,res)=>{

    const {name,description,imageUrl}=req.body;

    //add to DB

    res.redirect('/');

})

module.exports=router;