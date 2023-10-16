const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const cryptoService = require('../services/cryptoService');
const { getErrorMessage } = require('../utils/errorHelper');
const { paymentMethods } = require('../config/config');

router.get('/catalog', async (req, res) => {
    const crypto = await cryptoService.getAll().lean();

    res.render('crypto/catalog', { crypto });
});

router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    await cryptoService.buy(req.user._id, req.params.cryptoId);

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = req.body;

    try {
        await cryptoService.create(req.user._id, cryptoData);
    } catch (error) {
        return res
            .status(400)
            .render('crypto/create', { error: getErrorMessage(error) });
    }

    res.redirect('/crypto/catalog');
});

router.get('/:cryptoId/details', async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();

    const isOwner = crypto.owner.toString() === req.user?._id; // or ==
    const isBuyer = crypto.buyers?.some((x) => x == req.user?._id);

    res.render('crypto/details', { crypto, isOwner, isBuyer });
});

router.get('/:cryptoId/edit', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();

    const methods = Object.keys(paymentMethods).map((key) => ({
        value: key,
        label: paymentMethods[key],
        isSelected: crypto.paymentMethod == key,
    }));

    res.render('crypto/edit', { crypto, methods });
});

router.post('/:cryptoId/edit', isAuth, async (req, res) => {
    const cryptoData = req.body;
    await cryptoService.edit(req.params.cryptoId, cryptoData);

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.get('/:cryptoId/delete', isAuth, async (req, res) => {
    await cryptoService.delete(req.params.cryptoId);
    res.redirect('/crypto/catalog');
});

router.get('/search', async (req, res) => {
    const { name, paymentMethod } = req.query;
    const crypto = await cryptoService.search(name, paymentMethod);

    res.render('crypto/search', { crypto });
});

module.exports = router;
