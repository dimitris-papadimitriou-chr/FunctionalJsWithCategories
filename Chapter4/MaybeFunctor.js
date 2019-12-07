var demo = function () {

  var some = (v) => ({
    map: (f) => some(f(v)), 
    cata: alg => alg.some(v),
});
var none = () => ({
    map: (f) => none(),
    cata: alg => alg.none(v),
});


some('Jim')
    .map(x => x.toUpperCase())
    .cata({
      some: value => {
        /*do your work here safely*/
        console.log(value)
      },
      none: () => {
        console.log("nothing")
        /*deal with Maybe.none cases here*/
      }
    });

}



module.exports = demo;


