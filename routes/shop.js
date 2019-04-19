const express = require('express')
const path = require('path')

const router = express.Router();

// reach products
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('gelen product: ', adminData.products)
    // go one level up
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});


module.exports = router;