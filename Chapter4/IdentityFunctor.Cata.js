var demo = function () {

   
  var Id = v => ({
    v: v,
    map: f => Id(f(v)),
    bind: f => f(v),
    cata: alg => alg(v)
  });
 
  Id(5).cata(console.log) //5
 
  console.log(Id(5).v) // Instead of this 
 


}



module.exports = demo;


