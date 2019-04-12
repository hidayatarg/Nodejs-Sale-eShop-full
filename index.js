const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

// page not found
app.use((req, res, next) => {
    res.send('<h1>page not found</h1>')
})

app.listen(3000);