const router = require('express').Router();
const cubeService = require('../service/cubeService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create',async (req, res) => {
   await cubeService.create(req.body);
    res.redirect('/');
});

router.get('/:cubeId/details',(req,res)=>{
    const id=req.params.cubeId;
    let currCube= cubeService.getById(id);
    res.render('details',currCube)
})

module.exports = router;
