import { entities as tbl } from './table/tables'
import { category } from './category';

 class Product {

    private static instance:Product
    private tblProduct: tbl.IProductfields[] = []

    constructor(product: tbl.IProductfields[]) {
        this.tblProduct = product
        console.log("product instance is created ...")
    }

    static getInstance(){
        if(!Product.instance)
            Product.instance=new Product([])
        return this.instance
    }


    add(product: tbl.IProductfields, categoryId: number) {
        //check argument
        if (typeof product !== 'object' && typeof categoryId !== 'number')
            throw TypeError("invalid argument!")
 
        const doesExit = category.categories.some(el => el.id === categoryId)

        doesExit ? this.tblProduct.push(product) : "Invalid category id, please check your category collection"

      return this
    }

    edit(productId: number) {
        const product = this.tblProduct.filter(product => product.id === productId)
        return product
    }


    update(productId: number, productName?: string, productPrice?: number) {
        const product = this.tblProduct.filter(product => product.id === productId)
        //has name
        if (productName !== undefined)
            product[0].name = productName
        //has price
        if (productPrice !== undefined)
            product[0].price = productPrice

        return this
    }

    delete(productId: number) {
        const product = this.tblProduct.filter(product => product.id !== productId)
        return product
    }



    //make purchase
    /** 
    *@param product to add
    *@param supplyProduct class
    */
    storePurchase(newProduct: tbl.IsupplyField) {
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


export const product=Product.getInstance()




