import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"

import Operators from "../../node_modules/rxjs/operators/index.js"; //this is a sortcut to import rxjs module using 
//experimantal modules in order to use the import {} syntax
const { map, } = Operators;

export function demo() {

    var getClientNameById = id =>
        ClientRepository.getById(id)
            .pipe(
                map(Client.name),
                map(name => `client name:${name}`)
            )
            .subscribe({       // this is the pattern matching 
                next: x => console.log(x),
                error: err => console.log(err),
                complete: () => console.log("done")
            });

    getClientNameById(1);
    getClientNameById(2);
    getClientNameById(3);

}
