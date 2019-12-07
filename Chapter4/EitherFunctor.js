var demo = function () {

  var right = (v) => ({
    map: (f) => right(f(v)),
    cata: alg => alg.right(v)
  });
  var left = (v) => ({
    map: (f) => left(v),
    cata: alg => alg.left(v)
  });
 
  left("error").cata({
    right: value => {
      console.log(value);
    },
    left: value => {
      console.log(value);
    }
  })
 
}



module.exports = demo;


