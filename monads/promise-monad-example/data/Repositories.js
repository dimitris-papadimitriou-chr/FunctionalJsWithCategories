
import { firstOrNone } from "../../../common/firstOrNone.js"
import { maybeToPromise } from "../../../common/maybeToPromise.js"
import { Db } from "../../model/Db.js"

export let ClientRepository = ({
    getById: (id) =>
    maybeToPromise(`no client found`)
            (firstOrNone(Db.Clients.filter(client => client.id == id)))


});

export let EmployeeRepository = ({
    getById: (id) =>
    maybeToPromise(`no employee found`)
            (firstOrNone(Db.Employees.filter(employee => employee.id == id)))


});