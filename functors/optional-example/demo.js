import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"

export function demo() {

    let getClientNameById = id => {
        var client = ClientRepository.getById(id);
        returnclient ? `client name:${client?.name?.toUpperCase()}`
            : `no client found`;
    };

    log(getClientNameById(new Client(1, "jake")));
    log(getClientNameById(null));

}
