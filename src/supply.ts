class SupplyProduct {

    public tblSupply: IsupplyField[]=[]


   purchase(product:IsupplyField){
      this.tblSupply.push(product)
      return this
   }

   displayData(){
      console.log( "----Inserted element"+this.tblSupply[0])
   }

}