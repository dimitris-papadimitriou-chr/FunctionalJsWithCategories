import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"


export function demo() {

    let ClientService = {
        getEmployeeNameByClientId: clientId =>
            ClientRepository.getById(clientId)
                .map(Client.employeeId)
                .bind(EmployeeRepository.getById)
                .map(Employee.name)
                .match({
                    right: value => `employee name: ${value}`,
                    left: error => `error: ${error}`
                })
    };

    console.log(ClientService.getEmployeeNameByClientId(1));
    console.log(ClientService.getEmployeeNameByClientId(2));
    console.log(ClientService.getEmployeeNameByClientId(3));
}
