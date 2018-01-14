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
      console.log("No fuel. Please enter fuel");
    }
  },
  stop: function (){
      this.started = false;
    if(this.fuel <= 0){
        console.log("No fuel .Please refill");
    }
    else{
        console.log("Car Stopped puposely by driver");
    }
  },
  drive : function(){
    if(this.fuel > 0  && this.started){
      console.log("Lets go for a long drive");
      this.fuel = this.fuel -1;
    }
    else{
      if(this.fuel <= 0){
        console.log("Fuel Exaushted");
        fiat.stop();
      }
      else{
          console.log("Engine not started .Please start the engine");
      }
    }
  },
  addFuel : function (amount){
    this.fuel = this.fuel + amount;
    console.log("Fuel added amount : " + amount);
  }
}
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop();
