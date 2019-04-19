const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
// views folder default is views
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

// work under admin route
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// page not found
app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(3000);