// an Entity

// path
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path')

const p = path.join(
    rootDir,
    'data',
    'products.json'
);

// Helper function
const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileData) => {
        if (err) {
            // no product
            cb([]);
        } else {
            cb(JSON.parse(fileData));
        }
    });
};

module.exports = class Product {
    constructor(t){
        this.title = t
    }

    // function 
    save() {
        // recieve a products
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);                
            })
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }

}