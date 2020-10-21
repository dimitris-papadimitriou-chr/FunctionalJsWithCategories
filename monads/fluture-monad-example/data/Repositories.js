
import { firstOrNone } from "../../../common/firstOrNone.js"
import { toPromise } from "../../../common/toPromise.js"
import { Db } from "../../model/Db.js"

export let ClientRepository = ({
    getById: (id) =>
        toPromise(`no client found`)
            (firstOrNone(Db.Clients.filter(client => client.id == id)))


});

export let EmployeeRepository = ({
    getById: (id) =>
        toPromise(`no employee found`)
            (firstOrNone(Db.Employees.filter(employee => employee.id == id)))


});