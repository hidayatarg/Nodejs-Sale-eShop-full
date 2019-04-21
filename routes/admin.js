const express = require('express')
const path = require('path')

// import controllers
const productController = require('../controllers/products')

const router = express.Router();





// /admin/add-product => GET
// passing a reference to the getAddProducts method
router.get('/add-product', productController.getAddProducts);
    
// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

// // adminData will refers to following routes and products
// exports.routes = router;
// exports.products = products;

// single export
module.exports = router;