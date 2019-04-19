const express = require('express')
const path = require('path')

// utils
const rootDir = require('../utils/path')
const router = express.Router();


// storing product across
const products = [];


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
    });
    
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
    
});

// adminData will refers to following routes and products
exports.routes = router;
exports.products = products;