import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"

export function demo() {

    ClientRepository.getById(2)           //returns a Maybe<Client>
        .map(Client.name)                 //Maybe<String>
        .match({                          //String 
            some: name => console.log(`client name:${name}`),
            none: () => console.log(`no client found`)
        });

}
