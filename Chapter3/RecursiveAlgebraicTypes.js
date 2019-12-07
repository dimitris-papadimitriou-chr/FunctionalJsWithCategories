var demo = function () {
/**
 *Defining map for recursive data types
 */
var Cons = (value, rest) => ({
  value: value,
  rest: rest,
  map: f => Cons(f(value), rest.map(f)),
  show:()=>`Cons(${value},${rest.show()})`  //for display purposes
})

var Empty = () => ({
  map: f => Empty(),
  show:()=>`Empty()` //for display purposes
})

var list = Cons(1, Cons(2, Empty()));
console.log(list.show())

var liftedList = list.map(x => x + 2)
 
console.log(liftedList.show())



}



module.exports = demo;


