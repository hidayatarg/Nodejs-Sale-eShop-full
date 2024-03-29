const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// controllers
const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
// views folder default is views
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// Serve Static files
app.use(express.static(path.join(__dirname, 'public')));

// work under admin route
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// page not found
app.use(errorController.get404)

app.listen(3000);