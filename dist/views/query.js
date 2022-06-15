"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = void 0;
//query
class QueryBuilder {
    constructor() {
    }
    static getInstance() {
        if (!QueryBuilder.instance)
            QueryBuilder.instance = new QueryBuilder();
        return QueryBuilder.instance;
    }
    /**
     * select property and values that will be displayed
     */
    select(array, property) {
        if (!Array.isArray(array))
            throw new TypeError("invalid argument, provide an array argument !");
        let cloneArray = [...array];
        property.forEach(prop => {
            //we filter out selected
            const toDeleteProperty = Object.keys(array[0]).filter(key => key != prop);
            //loop through property that should be deleted from array
            toDeleteProperty.forEach(element => {
                //we iterate in array that contain property that should be removed
                cloneArray.forEach(el => {
                    delete el[element];
                });
            });
        });
        return cloneArray;
    }
    /**
     * limit the number of rows that should be displayed
     * select an index in table
     */
    limit() {
    }
    /**
     * join two objects
     */
    //  ==tblProduct: [
    //     { id: 1, name: 'Jus', price: 12, category_id: 2 },
    //     { id: 2, name: 'Energie', price: 16, category_id: 2 }
    //   ]
    // tblSupplies: [
    //     { id: 1, product_id: 2, quantity: 23 },
    //     { id: 2, product_id: 2, quantity: 23 },
    //     { id: 3, product_id: 2, quantity: 45 }
    //   ]
    //should produce
    // tview_Supplies: [
    //     { id: 1, product_id: Energie, quantity: 23 },
    //     { id: 2, product_id: Energie, quantity: 23 },
    //     { id: 3, product_id: Energie, quantity: 45 }
    //   ]
    //provide primaryKey
    //provide foreignKey
    join() {
    }
    /**
     * group similar properties id in a sigle row
     */
    groupBy() {
    }
}
exports.queryBuilder = QueryBuilder.getInstance();
//How to decide method that should be chain on another one
