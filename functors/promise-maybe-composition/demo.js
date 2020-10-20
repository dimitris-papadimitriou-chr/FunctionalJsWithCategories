import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"
import { mapT, matchT } from "./operators.js"
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

    {//refactored using map,match operations


        ClientRepository.getById(1)
            .then(mapT(R.prop(`name`)))
            .then(matchT({
                some: name => console.log(`client name:${name}`),
                none: () => console.log(`no client found`)
            }))
            .catch(e => console.log(`fetch operation failed ${e}`))//we will remove t his part when we talk about monads,
                                                                    //Since it is logical to merge promise and maybe since there is a transformation from maybe to a Promise .
                                                                    //  In this way there are a Promise in a Promise


    }



}
