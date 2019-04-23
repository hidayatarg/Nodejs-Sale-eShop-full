const express = require('express')
const path = require('path')

// import controllers
const adminController = require('../controllers/admin')

const router = express.Router();





// /admin/add-product => GET
// passing a reference to the getAddProducts method
router.get('/add-product', adminController.getAddProducts);
    
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts)

// // adminData will refers to following routes and products
// exports.routes = router;
// exports.products = products;

// single export
module.exports = router;