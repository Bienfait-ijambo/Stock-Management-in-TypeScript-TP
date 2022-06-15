import { entities as tbl } from "./table/tables";


class Category {

    private static instance: Category
    public categories: tbl.ICategory[] = []

    constructor() {
        console.log("category table is created...")
    }

    static getInstance() {
        if (!Category.instance)
            Category.instance = new Category()
        return Category.instance
    }

    

    add(category: tbl.ICategory) {
        if (typeof category !== 'object')
            throw TypeError("You must provide an object, invalid parameter")
        //create category
        this.categories.push(category)
        return this
    }

    edit(categoryId: number) {
        const categories = this.categories
        const category = categories.filter(category => category.id === categoryId)
        return category
    }

}

export const category = Category.getInstance()
