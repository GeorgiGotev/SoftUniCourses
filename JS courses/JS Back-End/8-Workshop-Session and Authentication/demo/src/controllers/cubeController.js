const router = require('express').Router();
const cubeService = require('../service/cubeService');
const accessoryService = require('../service/accessoryService');
const Cube = require('../models/Cube');

router.get('/create', (req, res) => {
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

router.get('/:cubeId/details', async (req, res) => {
    const id = req.params.cubeId;

    let currCube = await cubeService.getById(id).lean();

    res.render('cube/details', { currCube });
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

    res.render('cube/delete', { cube });
});

router.post('/:cubeId/delete', async(req,res)=>{
    await cubeService.delete(req.params.cubeId);

    res.redirect('/')
})

module.exports = router;
