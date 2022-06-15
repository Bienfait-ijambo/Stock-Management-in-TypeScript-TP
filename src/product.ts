import { entities as tbl } from './table/tables'
// import { category } from './category';

//TODOS: 
//-queryBuilder (select,join,transaction)
//- to use type constrait
//-to use enum for status colums
//-to use promise for making transactions
//-to protected object Id with proxy

class Product {

    private static instance: Product
    public tblProduct: tbl.IProductfields[] = []

    constructor(product: tbl.IProductfields[]) {
        this.tblProduct = product
        console.log("product instance is created ...")
    }

    static getInstance() {
        if (!Product.instance)
            Product.instance = new Product([])
        return this.instance
    }


    add(product: tbl.IProductfields, categoryId: number, category: tbl.ICategory[]) {

        const doesExit = category.some(el => el.id === categoryId)

        //check argument
        if (typeof product !== 'object' || typeof categoryId !== 'number')
            throw TypeError("invalid argument!")

        if (!doesExit)
            throw new Error("Invalid category id, please check your category collection")

        this.tblProduct.push(product)

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





}


export const product = Product.getInstance()




