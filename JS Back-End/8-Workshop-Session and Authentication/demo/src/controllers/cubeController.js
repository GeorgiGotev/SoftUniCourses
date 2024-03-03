const router = require('express').Router();
const cubeService = require('../service/cubeService');
const accessoryService = require('../service/accessoryService');
const Cube = require('../models/Cube');
const getViewOptions=require('../util/viewHelpers');
const {isAuth}=require('../middlewares/authMiddleware');

router.get('/:cubeId/details', async (req, res) => {
    const id = req.params.cubeId;
    
    const currCube = await cubeService.getById(id).lean();
    const isOwner=currCube.owner?.toString()===req.user?._id;
    
    res.render('cube/details', { currCube, isOwner });
});

router.use(isAuth) // guard .. is auth? User?   

router.get('/create',(req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeService.create({
        name,
        description,
        imageUrl,
        difficultyLevel,
        owner: req.user._id,
    });
    res.redirect('/');
});



router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();

    const accessories = await accessoryService.getLeft(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    await cubeService.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/delete', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();
    const options=getViewOptions(cube.difficultyLevel);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', async (req, res) => {
    await cubeService.delete(req.params.cubeId);

    res.redirect('/');
});



router.get('/:cubeId/edit', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();
    if(cube.owner.toString()!==req.user._id){  // guard for user owner 
        return res.redirect('/404')
    }
    const options=getViewOptions(cube.difficultyLevel);
    res.render('cube/edit', { cube,options });
});

router.post('/:cubeId/edit', async(req,res)=>{
    const cubeData=req.body;

    await cubeService.update(req.params.cubeId,cubeData);

    res.redirect(`/cubes/${req.params.cubeId}/details`);
})
module.exports = router;
