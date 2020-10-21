
import { firstOrNone } from "../../../common/firstOrNone.js"
import { toEither } from "../../../common/toEither.js"
import { Db } from "../../model/Db.js"

export let ClientRepository = ({
    getById: (id) =>
        toEither(`no client found`)
            (firstOrNone(Db.Clients.filter(client => client.id == id)))

});

export let EmployeeRepository = ({
    getById: (id) =>
        toEither(`no employee found`)
            (firstOrNone(Db.Employees.filter(employee => employee.id == id)))

});