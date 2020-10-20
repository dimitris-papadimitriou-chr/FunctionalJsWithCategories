
import { firstOrNone } from "../../../common/firstOrNone.js"
import { toEither } from "../../../common/toEither.js"
import { Db } from "./Db.js"
import R from 'ramda'


// export let ClientRepository = {
//     getById: id =>                                                              //returns an Either<String,Client>
//         toEither(`no client found`)
//             (firstOrNone(Db.Clients.filter(client => client.id == id)))

// };

// A ramda repository that everything is composed using R.comspose. Is equivalent with the one above
export let ClientRepository = {
    getById: id => R.compose(                            //returns an Either<String,Client>
        toEither(`no client found`),
        firstOrNone,
        R.filter(R.propEq('id', id))                      //this is equivalent to ->   R.filter(client => client.id == id)
    )(Db.Clients)
};
