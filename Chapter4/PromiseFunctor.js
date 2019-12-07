var demo = function () {

  Promise.prototype.map = function(f) {
    var initialPromise = this;
    return new Promise(function(resolve,reject) {
      initialPromise.then(result => resolve(f(result)))
                    .catch(reject);
    });
}

new Promise((resolve,reject)=>resolve(5))
.map(x=>x+3)     //Using map
.then(console.log)//8
 
 
}



module.exports = demo;


