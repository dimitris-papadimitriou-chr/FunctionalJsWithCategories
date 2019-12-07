var demo = function () {

  Promise.prototype.map = function (mapping) {
    var initialPromise = this;
    return new Promise(function (resolve, reject) {
      initialPromise.then(result => resolve(mapping(result))).catch(reject);
    });
  };


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
          clients.filter(c => c.id == id))//promise of a filtered array matching id

  });

  var clientNameById=id => clientRepository
  .getById(id)
  .map(x => x[0].name);//might throw exception  if array is empty     
                       //  we will deal with this in the next section

  clientNameById(1)
    .then(x => console.log(`the client name is ${x}`))
    .catch(e => console.log(`error getting clients ${e}`))

 

 

}



module.exports = demo;


