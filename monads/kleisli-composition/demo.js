import R from 'ramda'
import S from 'sanctuary'
import { composeK } from "./composeK.js"
import { Id } from "../Id.js"
import { Db } from '../model/Db.js';
export function demo() {

    {
        var f1 = x => Id(x * x);
        var f2 = x => Id(2 * x);

        var composeK = (f, g) => a => f(a).map(b => g(b)).bind(x => x);

        console.log(composeK(f1, f2)(4).getValue()); //32
    }

    {
        var getClients = clientId => Db.Clients.filter(client => client.id == clientId);
        var getEmployees = employeeId => Db.Employees.filter(employee => employee.id == employeeId);

        let getEmployeeNameByClientId = id => {
            //let employee = ;
            let name = getClients(id)
                .map(client => client.employeeId)
                .flatMap(getEmployees);

            return name;
        }

        //let optional = (o, f) => o != null ? f(o) : null; 
        // let getEmployeeNameByClientId = id => {
        //     //let employee = ;
        //     let name = optional(getEmployee(optional(getClients(id), x => x.employeeId)), x => x.name);
        //     return name;
        // }

        console.log(getEmployeeNameByClientId(1))
    }



}
