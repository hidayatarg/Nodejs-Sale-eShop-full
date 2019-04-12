const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('application started'); 
});

app.use((req, res, next) => {
    console.log('Middle ware 2 works'); 
});

app.listen(3000);