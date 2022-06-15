"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//we'll use this run to run our applicaton
const product_1 = require("./product");
const category_1 = require("./category");
const supply_1 = require("./supply");
const stock_1 = require("./stock");
category_1.category
    .add({ id: 1, name: "JUS" })
    .add({ id: 2, name: "VIN" });
// console.log(category.edit(2))
console.log(category_1.category.categories);
//add product
try {
    product_1.product
        .add({ id: 1, name: "Jus", price: 12, category_id: 2 }, 1, category_1.category.categories)
        .add({ id: 2, name: "Energie", price: 16, category_id: 2 }, 2, category_1.category.categories);
    // property
    console.log(product_1.product.select(product_1.product.tblProduct, ["price"]));
}
catch (error) {
    console.log(error.message);
}
// console.log(product)
//supply
try {
    supply_1.supply
        .add({ id: 1, product_id: 2, quantity: 23 })
        .add({ id: 2, product_id: 2, quantity: 23 })
        .add({ id: 3, product_id: 2, quantity: 45 });
    console.log(supply_1.supply);
}
catch (error) {
    console.log(error.message);
}
//stock
stock_1.stock.add(supply_1.supply.tblSupplies);
console.log(stock_1.stock);
