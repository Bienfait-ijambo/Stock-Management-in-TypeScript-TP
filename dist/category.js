"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
class Category {
    constructor() {
        this.categories = [];
        console.log("category table is created...");
    }
    static getInstance() {
        if (!Category.instance)
            Category.instance = new Category();
        return Category.instance;
    }
    add(category) {
        if (typeof category !== 'object')
            throw TypeError("You must provide an object, invalid parameter");
        //create category
        this.categories.push(category);
        return this;
    }
    edit(categoryId) {
        const categories = this.categories;
        const category = categories.filter(category => category.id === categoryId);
        return category;
    }
}
exports.category = Category.getInstance();
