var demo = function () {


    /** 
      * 3.	S combinator aka substitution S f g x = f(x)(g(x)) 
    */

   const S = f => g => x => f(x)(g(x));
  
   var pricingCalculation = (config => price => price - config.discount * price);
   var getPrice = (config => config.productPrice);
   var config = ({ discount: 0.1, productPrice: 100 });
 
   var discountedPrice = S(pricingCalculation)(getPrice)(config);
 
   console.log(discountedPrice)//90
}



module.exports = demo;


