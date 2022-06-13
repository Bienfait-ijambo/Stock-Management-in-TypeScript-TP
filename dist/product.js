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
    edit(productId) {
        const product = this.tblProduct.filter(product => product.id === productId);
        return product;
    }
    update(productName, productPrice) {
        let { name, price } = this.tblProduct[0];
        //has name
        if (productName !== undefined)
            name = productName;
        //has price
        if (productPrice !== undefined)
            price = productPrice;
        return this;
    }
}
const product = new Product([]);
product
    .add({ id: 1, name: "Jus", price: 12 })
    .add({ id: 2, name: "Energie", price: 16 });
const edit = product.edit(2);
console.log("here we get product name :" + edit);
//change name
edit[0].name = "Energie-max";
console.log(product);
console.log(edit);
