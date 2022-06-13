interface Ifields {
    id: number,
    name: string,
    price: number
}


class Product {

    private tblProduct: Ifields[] = []

    constructor(product: any[]) {
        this.tblProduct = product
        console.log("product instance is created ...")
    }

    
    add(product: Ifields) {
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

const product = new Product([])

product
    .add({ id: 1, name: "Jus", price: 12 })
    .add({ id: 2, name: "Energie", price: 16 })


product.update(2, "Energie-plus-plus")

console.log(product)

