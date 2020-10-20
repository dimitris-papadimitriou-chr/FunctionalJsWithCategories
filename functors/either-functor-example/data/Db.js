import { Client } from "../../model/Client.js"

export let Db = {      //mock client Db as Singleton 
    Clients: [
        new Client(1, "jim"),
        new Client(2, "jane")
    ]
}; 