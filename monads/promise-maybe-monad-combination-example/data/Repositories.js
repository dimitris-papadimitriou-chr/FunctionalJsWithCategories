
import { firstOrNone } from "../../../common/firstOrNone.js"
import { toEither } from "../../../common/toEither.js"
import fetch from 'node-fetch'

export var ClientRepository = ({
    getById: (id) =>
        fetch("https://run.mocky.io/v3/cb2b55a6-803c-40c5-8c04-2a96155a989f")
            .then(response => response.json())
            .then(data => data.clients.filter(client => client.id == id))
            .then(firstOrNone)
});


export var EmployeeRepository = ({
    getById: (id) =>
        fetch("https://run.mocky.io/v3/a1678fa6-d99f-4502-939e-44dcd1479f9d")
            .then(response => response.json())
            .then(data => data.clients.filter(employee => employee.id == id))
            .then(firstOrNone)
});
