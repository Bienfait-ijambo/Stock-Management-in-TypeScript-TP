"use strict";
class Product {
    constructor(product) {
        this.tblProduct = [];
        this.tblProduct = product;
        console.log("product instance is created ...");
    }
    add(product) {
        this.tblProduct.push(product);
        return this;
    }
}
const product = new Product([]);
product
    .add({ id: 1, name: "Jus", price: 12 })
    .add({ id: 2, name: "Energie", price: 16 });
console.log(product);
