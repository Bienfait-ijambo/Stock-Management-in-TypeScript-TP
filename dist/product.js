"use strict";
class SupplyProduct {
    constructor() {
        this.tblSupply = [];
    }
    purchase(product) {
        this.tblSupply.push(product);
        return this;
    }
    displayData() {
        console.log("----Inserted element" + this.tblSupply[0]);
    }
}
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
    update(productId, productName, productPrice) {
        const product = this.tblProduct.filter(product => product.id === productId);
        //has name
        if (productName !== undefined)
            product[0].name = productName;
        //has price
        if (productPrice !== undefined)
            product[0].price = productPrice;
        return this;
    }
    delete(productId) {
        const product = this.tblProduct.filter(product => product.id !== productId);
        return product;
    }
    //make purchase
    /*
    *@param product to add
    *@param supplyProduct class
    */
    storePurchase(newProduct) {
        //check if id exist in the table
        const findId = this.tblProduct.some(product => product.id === newProduct.product_id);
        if (findId) {
            const tblSupply = new SupplyProduct();
            tblSupply.purchase(newProduct);
            console.log(tblSupply);
            //    tblSupply.displayData()
        }
        else {
            console.log("this product doesnt exist !!");
        }
    }
}
const product = new Product([]);
product
    .add({ id: 1, name: "Jus", price: 12 })
    .add({ id: 2, name: "Energie", price: 16 });
product.storePurchase({ id: 1, product_id: 3, quantity: 22 });
console.log(product);
