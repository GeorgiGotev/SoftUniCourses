const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const productsService = require('../services/productsService');
const { getErrorMessage } = require('../utils/errorHelper');

router.get('/catalog', async (req, res) => {
    try {
        const products = await productsService.getAll().lean();

        res.render('products/catalog', { products });
    } catch (error) {
        res.status(400).render('products/catalog', {
            error: getErrorMessage(error),
        });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('products/create');
});

router.post('/create', isAuth, async (req, res) => {
    const productsData = req.body;

    try {
        await productsService.create(req.user._id, productsData);
    } catch (error) {
        return res
            .status(400)
            .render('products/create', { error: getErrorMessage(error) });
    }

    res.redirect('/products/catalog');
});

router.get('/:productId/details', async (req, res) => {
    try {
        const product = await productsService
            .getOne(req.params.productId)
            .lean();

        const isOwner = product.owner.toString() === req.user?._id;
        const isBuyer = product.buyingList?.some((x) => x == req.user?._id);

        res.render('products/details', { product, isOwner, isBuyer });
    } catch (error) {
        res.render('products/details', { error: getErrorMessage(error) });
    }
});

router.get('/:productId/edit', isAuth, async (req, res) => {
    try {
        const product = await productsService
            .getOne(req.params.productId)
            .lean();

        res.render('products/edit', { product });
    } catch (error) {
        res.render('products/edit', { error: getErrorMessage(error) });
    }
});

router.post('/:productId/edit', isAuth, async (req, res) => {
    try {
        const productData = req.body;

        await productsService.edit(req.params.productId, productData);

        res.redirect(`/products/${req.params.productId}/details`);
    } catch (error) {
        res.render('products/edit', { error: getErrorMessage(error) });
    }
});

router.get('/:productId/delete', isAuth, async (req, res) => {
    try {
        await productsService.delete(req.params.productId);
    } catch (error) {
        return res.render('products/catalog', {
            error: getErrorMessage(error),
        });
    }
    res.redirect('/products/catalog');
});

router.get('/:productId/buy', isAuth, async (req, res) => {
    try {
        await productsService.buy(req.user._id, req.params.productId);
    } catch (error) {
        return res.render('products/details', {
            error: getErrorMessage(error),
        });
    }
    res.redirect(`/products/${req.params.productId}/details`);
});

router.get('/search', isAuth, async (req, res) => {
    try {
        const { name, type } = req.query;
        const products = await productsService.search(name, type);

        res.render('products/search', { products, name, type });
    } catch (error) {
        res.render('products/search', { error: getErrorMessage(error) });
    }
});

module.exports = router;
