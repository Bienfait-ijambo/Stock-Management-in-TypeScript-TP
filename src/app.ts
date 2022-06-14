//we'll use this run to run our applicaton
import { product } from "./product";
import { category } from "./category";


category
    .add({id:1,name:"JUS"})
     .add({id:2,name:"VIN"})

// console.log(category.edit(2))

console.log(category)


//add product
try {
    
    product
        .add({ id: 1, name: "Jus", price: 12,category_id:2 },1)
        .add({ id: 2, name: "Energie", price: 16,category_id:2},4)
} catch (error:any) {
    console.log(error.message)
}


console.log(product)
