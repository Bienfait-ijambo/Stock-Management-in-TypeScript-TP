
import { entities as tbl } from './table/tables'
import { product } from './product';

class Supply {

   private static instance: Supply
   public tblSupplies: tbl.IsupplyField[] = []

   constructor(supply: tbl.IsupplyField[]) {
      this.tblSupplies = supply
   }

   static getInstance() {
      if (!Supply.instance)
         Supply.instance = new Supply([])
      return Supply.instance
   }

   add(supply: tbl.IsupplyField) {

      const products = product.tblProduct
      const doesExit = products.some(product => product.id === supply.product_id)

      if (typeof supply !== 'object')
         throw new TypeError("Invalid argument, argument for add func should be an obj.")

      if (!doesExit)
         throw new Error("invalid Id")

      this.tblSupplies.push(supply)

      return this

   }




}

export const supply = Supply.getInstance()