
class Product {

    private tblProduct: IProductfields[] = []

    constructor(product: IProductfields[]) {
        this.tblProduct = product
        console.log("product instance is created ...")
    }

    
    add(product: IProductfields) {
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

    //make purchase
    /*
    *@param product to add
    *@param supplyProduct class
    */
    storePurchase(newProduct:IsupplyField){
        //check if id exist in the table
        const findId=this.tblProduct.some(product=>product.id===newProduct.product_id)
        if(findId){
           const tblSupply= new SupplyProduct()
           tblSupply.purchase(newProduct)
           console.log(tblSupply)
        //    tblSupply.displayData()
        }else{
            console.log("this product doesnt exist !!")
        }
    }

    

}





const product = new Product([])

product
    .add({ id: 1, name: "Jus", price: 12 })
    .add({ id: 2, name: "Energie", price: 16 })


product.storePurchase({id:1,product_id:2,quantity:22})

console.log(product)

