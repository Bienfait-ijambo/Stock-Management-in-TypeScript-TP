
import {entities as tbl} from './table/tables'

export class SupplyProduct {

    public tblSupply: tbl.IsupplyField[]=[]

   purchase(product:tbl.IsupplyField){
      this.tblSupply.push(product)
      return this
   }

   displayData(){
      console.log( "----Inserted element"+this.tblSupply[0])
   }


}