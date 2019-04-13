const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

// work under admin route
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// page not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','not-found.html'));
})

app.listen(3000);