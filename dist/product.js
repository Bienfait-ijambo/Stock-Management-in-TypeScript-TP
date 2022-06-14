"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const category_1 = require("./category");
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
    add(product, categoryId) {
        //check argument
        if (typeof product !== 'object' && typeof categoryId !== 'number')
            throw TypeError("invalid argument!");
        const doesExit = category_1.category.categories.some(el => el.id === categoryId);
        doesExit ? this.tblProduct.push(product) : "Invalid category id, please check your category collection";
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
    /**
    *@param product to add
    *@param supplyProduct class
    */
    storePurchase(newProduct) {
        //check if id exist in the table
        // const findId=this.tblProduct.some(product=>product.id===newProduct.product_id)
        // if(findId){
        //    const tblSupply= new SupplyProduct()
        //    tblSupply.purchase(newProduct)
        //    console.log(tblSupply)
        // //    tblSupply.displayData()
        // }else{
        //     console.log("this product doesnt exist !!")
        // }
    }
}
exports.product = Product.getInstance();
