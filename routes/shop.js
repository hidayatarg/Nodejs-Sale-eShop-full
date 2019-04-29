const express = require('express')
const path = require('path')
const shopController = require('../controllers/shop')

const router = express.Router();


// Controllers Imports. There are implemented in the controllers
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts );

// product details by Id
router.get('/products/:productId', shopController.getProductsById);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);

module.exports = router;