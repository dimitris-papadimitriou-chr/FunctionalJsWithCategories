
import { firstOrNone } from "../../../common/firstOrNone.js"
import { toEither } from "../../../common/toEither.js"

import { State } from "./../../state.js";



export let ClientRepository = {
    getById: id => State(s => {
        return ({
            value: s.state.Clients.filter(client => client.id == id),
            state: s
        })
    })
        .map(firstOrNone)
        .map(toEither(`no client found`))
    //.run({ state: Db }).value
    //returns an Either<String,Client>

};


