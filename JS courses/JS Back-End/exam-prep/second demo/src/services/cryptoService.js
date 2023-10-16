const Crypto = require('../models/Crypto');

exports.create = (ownerId, cryptoData) =>
    Crypto.create({ ...cryptoData, owner: ownerId });

exports.getAll = () => Crypto.find({}).lean();

exports.getOne = (cryptoId) => Crypto.findById(cryptoId);

exports.buy = async (userId, cryptoId) => {
    // const crypto= await Crypto.findById(cryptoId);

    // crypto.buyers.push(userId);

    // return await crypto.save();

    //TODO check if this user is already bought a crypto
    return Crypto.findByIdAndUpdate(cryptoId, { $push: { buyers: userId } });
};

exports.edit = (cryptoId, cryptoData) =>
    Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);

exports.search = async (name, paymentMethod) => {
    let crypto = await this.getAll();
    if (name) {
        crypto = crypto.filter((x) => x.name.toLowerCase() == name);
    }

    if (paymentMethod) {
        crypto = crypto.filter((x) => x == paymentMethod);
    }
    return crypto
};
