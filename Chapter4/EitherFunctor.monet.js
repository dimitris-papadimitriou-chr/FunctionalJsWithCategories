var demo = function () {

  Monet = require("monet")
  
  Monet.Either.fromTry (() => {
    var discount = 0.1;
    var finalPrice = 10 - discount * 10;
    return finalPrice;
    })
    .cata(
       v => console.log(v),
     v => console.log("left" + v)
 )
  
 
}



module.exports = demo;


