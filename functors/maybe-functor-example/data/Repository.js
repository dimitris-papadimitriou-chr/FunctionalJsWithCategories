
import { firstOrNone } from "../../../common/firstOrNone.js"
import { Db } from "./Db.js"

export let ClientRepository = {
    getById: id => firstOrNone(Db.Clients.filter(client => client.id == id))
    //returns a Maybe<T>
};