// all logic related to product is here

// storing product across
const products = [];

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
    products.push( { title: req.body.title } );
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProduct: products.lenght> 0,
        activeShop: true,
        productCSS: true
    });
}