"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyProduct = void 0;
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
exports.SupplyProduct = SupplyProduct;
