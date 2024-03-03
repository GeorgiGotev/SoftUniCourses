const Product = require('../models/Product');

exports.getAll = () => Product.find({}).lean();

exports.create = (ownerId, productsData) =>
    Product.create({ ...productsData, owner: ownerId });

exports.getOne = (productID) => Product.findById(productID);

exports.edit = (productId, productData) =>
    Product.findByIdAndUpdate(productId, productData, { runValidators: true });

exports.delete = (productId) => Product.findByIdAndDelete(productId);

exports.buy = async (userId, productId) => {
    return Product.findByIdAndUpdate(productId, {
        $push: { buyingList: userId },
    });
};

exports.search = async (name, type) => {
    let products = await this.getAll();
    if (name) {
        products = products.filter((x) =>
            x.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (type) {
        products = products.filter((x) =>
            x.type.toLowerCase().includes(type.toLowerCase())
        );
    }
    return products;
};
