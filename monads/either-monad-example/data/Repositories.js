
import { firstOrNone } from "../../../common/firstOrNone.js"
import { maybeToEither } from "../../../common/maybeToEither.js"
import { Db } from "../../model/Db.js"

export let ClientRepository = ({
    getById: (id) =>
    maybeToEither(`no client found`)
            (firstOrNone(Db.Clients.filter(client => client.id == id)))

});

export let EmployeeRepository = ({
    getById: (id) =>
    maybeToEither(`no employee found`)
            (firstOrNone(Db.Employees.filter(employee => employee.id == id)))

});