import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"

export function demo() {

    let getClientNameById = id =>
        ClientRepository.getById(id)
            .map(Client.name)
            .match({
                right: value => `client name: ${value}`,
                left: error => `error: ${error}`
            });

    console.log(`results`)
    console.log(getClientNameById(1));
    console.log(getClientNameById(2));
    console.log(getClientNameById(3));

}
