
var demo = function () {
    /** 
      * 1. Two ways to look an evaluation 
    */

    var s = a => b => a(b)

    s(console.log)(5) // prints 5

    var t = s(console.log);
    setTimeout(() => { t(5) }, 3000);
    s(x => x(5))(console.log)

    s(resolve => resolve(5))(console.log)

    s(resolve => setTimeout(() => { resolve(5) }, 3000))(console.log)

    new Promise(resolve => resolve(5)).then(console.log)
  
    /**
    * 2. Adding a mapping function 
    */

    var s = a => f => b => a(f(b))

    s(console.log)(x => x + 2)(5)

    // does not work :  s(console.log)(x => x + 2)(x => x + 3)(5)

    s(console.log)(s(x => x + 2)(x => x + 2))(5)

    // does not work : s(resolve => resolve(5))(x => x + 2)(console.log)

    s(resolve => resolve(5))(f => x => f(x + 2))(console.log)

    var map = g => f => x => f(g(x))
    s(resolve => resolve(5))(map(x => x + 2))(console.log)

}



module.exports = demo;


