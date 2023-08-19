const router = require('express').Router();

router.get('/create', (req,res)=>{
    res.render('accessory/create');
})

// router.post()

module.exports=router;