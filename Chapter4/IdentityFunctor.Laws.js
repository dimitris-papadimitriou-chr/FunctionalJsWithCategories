var demo = function () {

   
const Id = (v) => ({
  value: v,
  map: (f) => Id(f(v))
});

 var id = x=>x;
 var value = 5
// Law 1 -  identity preserving     fmap id = id
  console.log(Id(value).map(id).value ===id(value)) 

// Law 2 composition of functions is preserved     fmap (f . g)  ==  fmap f . fmap g
var f =x=>2*x;
var g =x=>3*x;
console.log(Id(value).map(x=>f(g(x))).value ===Id(value).map(f).map(g).value) ;
 
 


}



module.exports = demo;


