var demo = function () {

  const right = (v) => ({
    map: (f) => right(f(v)),
    cata: (alg) => alg.right(v),
  });
  
  const left = (v) => ({
    map: () => left(v),
    cata: (alg) => alg.left(v),
  });
  
  
  var Try = (f) => {
    try {
      var result = f();
      return right(result);
    } catch (e) {
      return left(e);
    }
  }
  
  var finalPrice = Try(() => {
    var discount = 0.1;
    var finalPrice = 10 - discount * 10;
    return finalPrice;
  });
  
  finalPrice.cata({
    right: v => console.log(v),
    left: v => console.log("left" + v)
  })
  
 
}



module.exports = demo;


