var demo = function () {



  /**
  *Another way to discriminate would be to add a tag to each type 
*/
var Cons = (value, rest) => ({tag:"Cons", value: value, rest: rest})
var Empty = () => ({tag:"Empty"})

var  multiply  = list => list.tag== "Empty"?1 :list.value*multiply(list.rest);
var list = Cons(2, Cons(2, Empty ())); 
var product = multiply(list);
 console.log(product)


   /**
  *Another way to discriminate by using instanceof 
  *if you are using proper classes definitions.
*/
class List { }
class Cons extends List {
  constructor(value, rest) {
    super()
    this.value = value;
    this.rest = rest;
  }
}
class Empty extends List { }

var list = new Cons(2, new Cons(2, new Empty()));
var multiply = list => (list instanceof Empty) ? 1 : list.value * multiply(list.rest);

console.log(multiply(list))


}



module.exports = demo;


