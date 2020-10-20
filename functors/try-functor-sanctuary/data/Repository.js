import { Db } from "./Db.js"

export let ClientRepository = {    // a repository that throws an exception . Traditional imperative thinking 
    getById: id => {
        var client = Db.Clients.filter(client => client.id == id);
        if (client && client.length > 0) return client[0];
        else throw new Error(`no client found`);
    }
};