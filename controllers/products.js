// all logic related to product is here

// import models
const Product = require('../models/product')

exports.getAddProducts = (req, res, next) => {
    res.status(200)
        .render('add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formCSS: true,
            productCSS: true,
            activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const product  = new Product(req.body.title);
    // save
    product.save();

    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProduct: products.lenght > 0,
            activeShop: true,
            productCSS: true
        });
    });
}