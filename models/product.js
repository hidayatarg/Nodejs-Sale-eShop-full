// an Entity

// path
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path')

module.exports = class Product {
    constructor(t){
        this.title = t
    }

    // function 
    save() {
        // root project folder data folder and store file
        const p = path.join(
            rootDir, 
            'data', 
            'products.json'
        );
        // read existing products
        fs.readFile(p, (err, fileData) => {
            let products = [];
            console.log(fileData);
            if (!err) {
                // convert JSON to array
                products = JSON.parse(fileData);
            }
            // this refere to the class
            products.push(this)
            // Stringfiy conver to JSON
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);                
            });
            
        });
    }

    static fetchAll() {
        const p = path.join(
            rootDir,
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileData) =>{
            if (err) {
                // no product
                return [];
            }
            return JSON.parse(fileData);
        });
    }

}