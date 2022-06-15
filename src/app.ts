//we'll use this run to run our applicaton
import { product } from "./product";
import { category } from "./category";
import {supply} from "./supply"
import { stock } from './stock';

category
    .add({id:1,name:"JUS"})
     .add({id:2,name:"VIN"})

// console.log(category.edit(2))

console.log(category.categories)
 

//add product
try {
    
    product
        .add({ id: 1, name: "Jus", price: 12,category_id:2 },1,category.categories)
        .add({ id: 2, name: "Energie", price: 16,category_id:2},2,category.categories)

// property
console.log(product.select(product.tblProduct,["price"]))

} catch (error:any) {
    console.log(error.message)
}
// console.log(product)

//supply
try {

    supply
    .add({id:1,product_id:2,quantity:23})
    .add({id:2,product_id:2,quantity:23})
    .add({id:3,product_id:2,quantity:45})

    
    console.log(supply)
} catch (error:any) {
    console.log(error.message)
}


//stock
stock.add(supply.tblSupplies)

console.log(stock)