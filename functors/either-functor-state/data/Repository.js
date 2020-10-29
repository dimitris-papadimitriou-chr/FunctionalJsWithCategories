
import { firstOrNone } from "../../../common/firstOrNone.js"
import { maybeToEither } from "../../../common/maybeToEither.js"

import { State } from "./../../state.js";



export let ClientRepository = {
    getById: id => State(s => {
        return ({
            value: s.state.Clients.filter(client => client.id == id),
            state: s
        })
    })
        .map(firstOrNone)
        .map(maybeToEither(`no client found`))
    //.run({ state: Db }).value
    //returns an Either<String,Client>

};


