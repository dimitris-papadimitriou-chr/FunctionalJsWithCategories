
var demo = function () {
/**
 *Extending Union Types
 */
 
class List {
  mult() { throw new Error('You have to implement the method mul!');    }
}

class Cons extends List {
  constructor(value, rest) {
    super()
    this.value = value;
    this.rest = rest;
  }
  multiply() { return this.value * this.rest.multiply(); }
}

class Empty  extends List {    multiply () { return 1; }   }

var result = new Cons(2, new Cons(2, new Empty  ())).multiply ();

console.log(result)


}



module.exports = demo;


