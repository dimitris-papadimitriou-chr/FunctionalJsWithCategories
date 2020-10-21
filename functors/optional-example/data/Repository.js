
 
import { Db } from "./Db.js"

export let ClientRepository = {
    getById: id => Db.Clients.find(client => client.id == id) 
    //returns a Maybe<T>
};