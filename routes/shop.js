const express = require('express')
const path = require('path')

const router = express.Router();

// reach products
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    res.render('shop');
});


module.exports = router;