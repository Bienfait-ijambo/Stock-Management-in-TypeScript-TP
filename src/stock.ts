import { entities as tbl } from './table/tables';
import { supply } from './supply';

//
class Stock {

    private static instance: Stock
    public tblStock: tbl.IStockField[] = []


    constructor(stock: tbl.IStockField[]) {
        this.tblStock = stock
    }

    static getInstance() {
        if (!Stock.instance)
            Stock.instance = new Stock([])
        return Stock.instance
    }

    add(stock: tbl.IsupplyField[]) {
        stock.forEach((product) => {
            this.tblStock.push({
                product_id: product.product_id,
                quantity: product.quantity
            })
        })
    }

}

export const stock = Stock.getInstance()