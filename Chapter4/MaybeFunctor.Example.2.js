var demo = function () {

  Promise.prototype.map = function (mapping) {
    var initialPromise = this;
    return new Promise(function (resolve, reject) {
      initialPromise.then(result => resolve(mapping(result))).catch(reject);
    });
  };

  var some = (v) => ({
    map: (f) => some(f(v)),
    cata: alg => alg.some(v),
  });
  var none = () => ({
    map: (f) => none(),
    cata: alg => alg.none(v),
  });
 
  Array.prototype.safeHead = function () {
    return this.length > 0 ?
      some(this[0]) :
      none()
  }

  var fetchClientsMock = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [{ id: 1, name: 'jim', age: 29 },
        { id: 2, name: 'jane', age: 25 }])
    }, 1000);
  })

  var clientRepository = ({
    getById: (id) =>
      fetchClientsMock()
        .map(clients =>
          clients.filter(c => c.id == id)
            .safeHead())

  });

  var clientNameById = id => clientRepository
    .getById(id)
    .map(response => response.map(client => client.name));//we have to map throught promise 
  // and throught Maybe to access client object
  // we will latter see how to simplify this 

  clientNameById(1)
    .then(response => response.cata({
      some: value => console.log(`the client name is ${value}`)
    }))
    .catch(e => console.log(`error getting clients ${e}`))


 

}



module.exports = demo;


