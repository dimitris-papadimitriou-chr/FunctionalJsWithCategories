
import { firstOrNone } from "../../../common/firstOrNone.js"
import { maybeToEither } from "../../../common/maybeToEither.js"
import { Db } from "./Db.js"
import S from "sanctuary";

// export let ClientRepository = {
//     getById: id =>                                                              //returns an Either<String,Client>
//         maybeToEither(`no client found`)
//             (firstOrNone(Db.Clients.filter(client => client.id == id)))

// };

// A ramda repository that everything is composed using R.comspose. Is equivalent with the one above
// export let ClientRepository = {
//     getById: id => S.compose(                            //returns an Either<String,Client>
//         maybeToEither(`no client found`),
//         firstOrNone,
//         S.filter(client => client.id == id)                      //this is equivalent to ->   R.filter(client => client.id == id)
//     )(Db.Clients)
// };

export let ClientRepository = {
    getById: id => S.maybeToEither(`no client found`)
        (
            S.head(
                S.filter(client => client.id == id)(Db.Clients)
            )
        )
};

