// an Entity

const products = []
module.exports = class Product {
    constructor(t){
        this.title = t
    }

    // function 
    // this refer to the object that will be stored
    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

}