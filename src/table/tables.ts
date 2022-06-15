export namespace entities{

    export interface IProductfields {
        id: number,
        name: string,
        category_id:number,
        price: number,
    }

    export interface ICategory {
        id: number,
        name?:String
    }
 
    export interface IsupplyField{
        id:number,
        product_id:number,
        quantity:number
    }

   export interface IStockField{
        id?:number,
        product_id:number,
        quantity:number,
        date?:string
    }

    export interface ISoldProduct{
        id:number,
        client_id:number,
        product_id:number,
        product_price:number,
        quantity:number  
    }

    export interface ICashIhistory{

    }

    export interface ICashDesk{

    }

  
}