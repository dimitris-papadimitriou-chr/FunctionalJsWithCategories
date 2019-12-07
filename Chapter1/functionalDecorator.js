var demo = function () {
 
  /** 
    *  	2.1.1.1	Functional idiomatic Decorator Design pattern with composition 
  */
 
 var createProduct = (price) => ({ price: () => price, })
 var addPackaging = (product) => ({ price: () => product.price() + 0.5, })
 var addRibons = (product) => ({ price: () => product.price() + 0.3, })
 
 const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args))) 

 var finalProduct =addRibons(addPackaging(createProduct(20)))//function composition 
 var fincalProduct = compose(addRibons,addPackaging,createProduct)(20);
 console.log(finalProduct.price())
}



module.exports = demo;


