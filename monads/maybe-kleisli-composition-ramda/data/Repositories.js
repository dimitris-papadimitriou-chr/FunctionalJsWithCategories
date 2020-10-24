
import { firstOrNone } from "../../../common/firstOrNone.js"
import { Db } from "../../model/Db.js"
  
export let ClientRepository = ({
    getById: (id) =>
        firstOrNone(Db.Clients.filter(client => client.id == id))

});

export let EmployeeRepository = ({
    getById: (id) =>
        firstOrNone(Db.Employees.filter(employee => employee.id == id))

});