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
    constructor(title, imageUrl, description, price){
        this.title = title,
        this.imageUrl = imageUrl,
        this.description = description,
        this.price = price
    }

    // function 
    save() {
        // create a random ID for products
        this.id = Math.random().toString();

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

    // expecting id 
    // callback will be executed
    static findById(id, cb) {
        getProductFromFile(products => {
            // filter products
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }

}