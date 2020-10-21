import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"


export function demo() {

    let ClientService = ({
        getEmployeeNameByClientId: clientId =>
            ClientRepository.getById(clientId)              // Promise<Client>
                .then(Client.employeeId)                    //  Promise<Integer>
                .then(EmployeeRepository.getById)           //  Promise<Employee>
                .then(Employee.name)                        //  Promise<String>
                //the following are pattern matching
                .then(value => `employee name: ${value}`)   //   Promise<String>
                .catch(error => `error: ${error}`)          //   Promise<String>
    });

    ClientService.getEmployeeNameByClientId(1).then(r => console.log(`id:1   ${r}`));
    ClientService.getEmployeeNameByClientId(2).then(r => console.log(`id:2   ${r}`));
    ClientService.getEmployeeNameByClientId(3).then(r => console.log(`id:3   ${r}`));
}
