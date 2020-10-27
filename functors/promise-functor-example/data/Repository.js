
import { firstOrNone } from "../../../common/firstOrNone.js"
import { Db } from "./Db.js"
import R from 'ramda'
import { maybeToPromise } from "../../../common/maybeToPromise.js";


export let ClientRepository = {
    getById: id => R.compose(                            //returns an Either<String,Client>
        maybeToPromise(`no client found`),
        firstOrNone,
        R.filter(R.propEq('id', id))                      //this is equivalent to ->   R.filter(client => client.id == id)
    )(Db.Clients)
};
