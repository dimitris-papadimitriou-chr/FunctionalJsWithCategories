import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"

export function demo() {

    let getClientNameById = id =>                        //Promise<String>
        ClientRepository.getById(id)                     ///Promise<Client>
            .then(Client.name)                           //Promise<String>   after the then().catch() patternmatching pair
            .then(value => `employee name: ${value}`)
            .catch(error => `error: ${error}`);

    console.log(`results`)

    getClientNameById(1).then(result => console.log(`id=1: ${result}`));
    getClientNameById(2).then(result => console.log(`id=2: ${result}`));
    getClientNameById(3).then(result => console.log(`id=3: ${result}`));

}
