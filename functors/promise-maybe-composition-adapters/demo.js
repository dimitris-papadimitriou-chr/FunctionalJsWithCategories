import { ClientRepository } from "./data/Repository.js"
import { PromiseMaybeT } from "./operators.js"
import R from 'Ramda'

export function demo() {

    {   //initial 
        ClientRepository.getById(1)
            .then(maybeClient => maybeClient.map(client => client.name))
            .then(
                client => client.match({
                    some: name => console.log(`client name:${name}`),
                    none: () => console.log(`no client found`)
                })
            )
            .catch(e => console.log(`fetch operation failed ${e}`))
    }

    {//refactored using PromiseMaybeT adapter - this is not a "monad transformer" in the strict functional term but acts in a similar manner

        let getClientNameById = id =>
            PromiseMaybeT(ClientRepository.getById(id)) //PromiseMaybeT< Promise< Maybe< Client>>>>
                .map(R.prop('name'))                    //Ramda lense equivalent to client=>client.name   
                                                         //PromiseMaybeT< Promise< Maybe< String>>>>
                .match({                                 //PromiseMaybeT< Promise< String>>>
                    some: name => `client name:${name}`,
                    none: () => `no client found`
                })
                .unwrap();                                //removes the PromiseMaybeT  //Promise< String >>

        getClientNameById(1).then(console.log);
        getClientNameById(2).then(console.log);
        getClientNameById(3).then(console.log);


    }



}
