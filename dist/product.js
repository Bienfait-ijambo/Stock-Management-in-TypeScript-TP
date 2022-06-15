"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
// import { category } from './category';
//TODOS: 
//-queryBuilder (select,join,transaction)
//- to use type constrait
//-to use enum for status colums
//-to use promise for making transactions
//-to protected object Id with proxy
class Product {
    constructor(product) {
        this.tblProduct = [];
        this.tblProduct = product;
        console.log("product instance is created ...");
    }
    static getInstance() {
        if (!Product.instance)
            Product.instance = new Product([]);
        return this.instance;
    }
    add(product, categoryId, category) {
        const doesExit = category.some(el => el.id === categoryId);
        //check argument
        if (typeof product !== 'object' || typeof categoryId !== 'number')
            throw TypeError("invalid argument!");
        if (!doesExit)
            throw new Error("Invalid category id, please check your category collection");
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
}
exports.product = Product.getInstance();
