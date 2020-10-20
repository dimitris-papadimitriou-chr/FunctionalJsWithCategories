import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"
import S from "sanctuary";

export function demo() {

    var getClientNameById = id =>
        S.either(e => `error : ${e}`)
            (result => `client name:${result}`)
            (S.map(Client.name)(ClientRepository.getById(id)));


    console.log(`results`)
    console.log(getClientNameById(1));
    console.log(getClientNameById(2));
    console.log(getClientNameById(3));

}
