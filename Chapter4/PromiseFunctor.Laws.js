var demo = function () {
  Promise.prototype.map = function (mapping) {
    var initialPromise = this;
    return new Promise(function (resolve, reject) {
      initialPromise.then(result => resolve(mapping(result))).catch(reject);
    });
  };

var id = x=>x;
 var value = 5
  // Law 1 - the identity is preserved   
 new Promise((resolve) => resolve(value)).map(id)
         .then(x=>console.log(x===id(value))) // true
 
 // Law 2 composition of functions is preserved   
 var f =x=>2*x;
 var g =x=>3*x;
 
 new Promise((resolve) => resolve(value)).map(x=>f(g(x))).then(console.log);
 new Promise((resolve) => resolve(value)).map(f).map(g).then(console.log);
 
}



module.exports = demo;


