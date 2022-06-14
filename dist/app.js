"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//we'll use this run to run our applicaton
const product_1 = require("./product");
const category_1 = require("./category");
category_1.category
    .add({ id: 1, name: "JUS" })
    .add({ id: 2, name: "VIN" });
// console.log(category.edit(2))
console.log(category_1.category);
//add product
product_1.product
    .add({ id: 1, name: "Jus", price: 12, category_id: 2 }, 1)
    .add({ id: 2, name: "Energie", price: 16, category_id: 2 }, 1);
console.log(product_1.product);
