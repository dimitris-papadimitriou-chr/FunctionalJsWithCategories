import { Client } from "../model/Client.js"


export function demo() {

    // in order to make obvious the different promise.then() behaviors we can normalize 
    //the pattern matching operations of the promise by defining:
    Promise.prototype.match = function (pattern) {
        return this.then(pattern.right).catch(pattern.left);
    };


    //the successful path 
    {
        Promise.resolve(new Client(1, "jim", 2))
            .then(x => x.name) //this then functions like .map()
            .match({
                right: value => console.log(`client name: ${value}`),
                left: error => console.log(`error: ${error}`)
            });
    }

    {//the failed path 
        // Promise.reject bypass the first then and goes to the catch
        Promise.reject(`nothing found`)
            .then(x => x.name) //this then functions like .map()
            .match({
                right: value => console.log(`client name: ${value}`),
                left: error => console.log(`error: ${error}`)
            });

    }




}
