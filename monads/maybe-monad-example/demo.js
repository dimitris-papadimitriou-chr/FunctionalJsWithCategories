import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"


export function demo() {

    let ClientService = {
        getEmployeeNameByClientId: clientId =>
            ClientRepository.getById(clientId)       //  Maybe<Client>
                .map(Client.employeeId)              //  Maybe<Integer>
                .bind(EmployeeRepository.getById)    //  Maybe<Employee>
                .map(Employee.name)                  //  Maybe<String>
                .match({                             //  String
                    some: value => `employee name: ${value}`,
                    none: _ => `Error: could not get employee name `
                })
    };

    console.log(ClientService.getEmployeeNameByClientId(1));
    console.log(ClientService.getEmployeeNameByClientId(2));
    console.log(ClientService.getEmployeeNameByClientId(3));
}
