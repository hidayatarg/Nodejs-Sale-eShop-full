const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('application started'); 
    // move to next middleware
    next();
});

app.use((req, res, next) => {
    console.log('Middle ware 2 works'); 
});

app.listen(3000);