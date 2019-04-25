const Product = require('../models/product')
exports.getAddProducts = (req, res, next) => {
    res.status(200)
        .render('admin/add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formCSS: true,
            productCSS: true,
            activeAddProduct: true
        });
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    // save
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        // the render is the view path and path is URL path in the Chrome
        res.render('admin/products', {
            prods: products,
            path: '/admin/products',
            pageTitle: 'Admin Products'            
        })
    })
};