var fiat = {
  make : "Tvs",
  model : "1997",
  passengers : 2,
  started : false,
  fuel : 0,
  start : function (){
    if (this.fuel > 0){
      this.started = true;
    }
    else{
      console.l0g("No fuel. Please enter fuel");
    }
  },
  stop: function (){
    console.log("Car stopped!");
  },
  drive : function(){
    if(fuel > 0  && this.started){
      console.log("Lets go for a long drive");
    }
    else{
      if(fuel < 0){
        console.log("Add fuel");
      }
      else{
          console.log("Engine not started .Please start the engine");
      }
    }
  },
  addFuel : function (amount){
    this.fuel = this.fuel + amount;
  }
}
