import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"
import { PromiseMaybeT } from "./PromiseMaybeT.js"

export function demo() {
 
    let getEmployeeNameByClientId = clientId =>            //===============Type=====================
        PromiseMaybeT(ClientRepository.getById(clientId))  //PromiseMaybeT< Promise< Maybe< Client >>>>
            .map(Client.employeeId)                        //PromiseMaybeT< Promise< Maybe< Integer >>>>
            .bind(EmployeeRepository.getById)              //PromiseMaybeT< Promise< Maybe< Employee >>>>
            .map(Employee.name)                            //PromiseMaybeT< Promise< Maybe< String >>>>
            .match({                                       //PromiseMaybeT< Promise< String >>>
                some: value => `employee name: ${value}`,
                none: _ => `nothing found`
            })
            .unwrap();                                   // Promise< String>>


    getEmployeeNameByClientId(1).then(r => console.log(`id:1   ${r}`));
    getEmployeeNameByClientId(2).then(r => console.log(`id:2  ${r}`));
    getEmployeeNameByClientId(3).then(r => console.log(`id:3   ${r}`));

}
