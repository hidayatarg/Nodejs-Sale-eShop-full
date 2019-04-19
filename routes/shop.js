const express = require('express')
const path = require('path')

const router = express.Router();

// reach products
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/'});
});


module.exports = router;