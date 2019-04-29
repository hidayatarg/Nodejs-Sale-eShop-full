// all logic related to product is here

// import models
const Product = require('../models/product')



exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',

    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path:       '/checkout',
        pageTitle:  'Checkout'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path:       '/orders',
        pageTitle:  'Orders'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path:       '/orders',
        pageTitle:  'Orders'
    })
}

exports.getProductsById = (req, res, next) => {
    // get the productId > the name that is used in the shop route
    const prodId = req.params.productId;
    console.log('product Id: ', prodId);
    res.redirect('/');
}