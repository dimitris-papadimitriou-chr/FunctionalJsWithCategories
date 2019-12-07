var demo = function () {
  var A = (x, y, z) => ({ x: x, y: y, z: z, display: () => x + y + z })

  var B = ({ x: false, y: 1, z: "s", w: 3, u: "u", display: () => x + y + z + w + u })
  /**
    *By our definition, we must be able to replace a B with an A in a function like
    *below with  out having a thrown exception
  */
  var EitherAorBMap = A(true, 1, "s");
  console.log(EitherAorBMap.display());
  
  var doSomethingWithA = function (type) {
      return type.x ?
        type.y.toString() :
        type.z
  }
  
  var r = doSomethingWithA(A);//valid 
  var r = doSomethingWithA(B);//valid also since B<:A
  
  var doSomethingWithB = function (type) {
      return type.x ?
        type.w.toString() :
        type.u
  }
  /**
   *invalid  try to access w,u 
   *throws :Cannot read property 'toString' of undefined 
  */
  var r = doSomethingWithB(A);//invalid  try to access w,u 
  console.log(" doSomethingWithB(A);//invalid  try to access w,u ")
  console.log(r)
}



module.exports = demo;


