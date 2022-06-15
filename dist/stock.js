"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock = void 0;
//
class Stock {
    constructor(stock) {
        this.tblStock = [];
        this.tblStock = stock;
    }
    static getInstance() {
        if (!Stock.instance)
            Stock.instance = new Stock([]);
        return Stock.instance;
    }
    add(stock) {
        stock.forEach((product) => {
            this.tblStock.push({
                product_id: product.product_id,
                quantity: product.quantity
            });
        });
    }
}
exports.stock = Stock.getInstance();
