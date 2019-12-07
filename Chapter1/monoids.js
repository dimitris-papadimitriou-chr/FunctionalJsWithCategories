var demo = function () {
 
  /** 
    *  	monoids as simple object literals 
  */
 
  var Sum = { empty: () => 0, concat: (x, y) => x + y }
  var Mult = { empty: () => 1, concat: (x, y) => x * y }

  var reduce = [1, 2, 3, 4, 5, 6].reduce(Sum.concat, Sum.empty);

  var Product = { empty: () => 1, concat: (x, y) => x * y }

  Product.concat(Product.empty(), 5);


  /** 
    *  		monoids with ECMAScript class notation
  */
 
  class SumM {

    constructor(v) { this.v = v; }

    static empty() { return new SumM(0); }

    concat(b) { return new SumM(this.v + b.v); }
  };

  var reduce = [1, 2, 3, 4, 5, 6].map(x => new SumM(x)).reduce((a, b) => a.concat(b), SumM.empty());
}



module.exports = demo;


