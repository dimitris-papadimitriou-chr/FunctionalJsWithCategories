
import { firstOrNone } from "../../../common/firstOrNone.js"
import fetch from 'node-fetch'

export var ClientRepository = ({
    getById: (id) =>      // returns a Promise<Maybe<Client>> Type
        fetch("https://run.mocky.io/v3/a1678fa6-d99f-4502-939e-44dcd1479f9d")
            .then(response => response.json())
            .then(data => data.clients.filter(client => client.id == id))
            .then(firstOrNone)

});

 