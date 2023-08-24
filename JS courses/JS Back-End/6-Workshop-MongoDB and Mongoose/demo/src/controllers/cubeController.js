const router = require('express').Router();
const cubeService = require('../service/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create',async (req, res) => {
   await cubeService.create(req.body);
    res.redirect('/');
});

router.get('/:cubeId/details',async(req,res)=>{
    const id=req.params.cubeId;

    let currCube=await  cubeService.getById(id).lean();
    
    res.render('details',{currCube})
})

router.get('/:cubeId/attach-accessory', (req,res)=>{
    res.render('accessory/attach');
})

module.exports = router;
