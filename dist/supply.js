"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supply = void 0;
const product_1 = require("./product");
class Supply {
    constructor(supply) {
        this.tblSupplies = [];
        this.tblSupplies = supply;
    }
    static getInstance() {
        if (!Supply.instance)
            Supply.instance = new Supply([]);
        return Supply.instance;
    }
    add(supply) {
        const products = product_1.product.tblProduct;
        const doesExit = products.some(product => product.id === supply.id);
        if (typeof supply !== 'object')
            throw new TypeError("Invalid argument, argument for add func should be an obj.");
        if (!doesExit)
            throw new Error("invalid Id");
        this.tblSupplies.push(supply);
        return this;
    }
}
exports.supply = Supply.getInstance();
