import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"
import { chain, map, fork, encaseP } from "fluture";

//  encaseP is used to convert from Promise to a Fluture    https://github.com/fluture-js/Fluture#encasep

export function demo() {

    let ClientService = {
        getEmployeeNameByClientId: clientId =>
            encaseP(ClientRepository.getById)(clientId)              // Future<Client>
                .pipe(map(Client.employeeId))                        //  Future<Integer>
                .pipe(chain(encaseP(EmployeeRepository.getById)))    //  Future<Employee>
                .pipe(map(Employee.name))
                .pipe(fork                                           //  Future<String>
                    (x => console.log("error:" + x))
                    (x => console.log(x.name))
                )
    };

    ClientService.getEmployeeNameByClientId(1);
    ClientService.getEmployeeNameByClientId(2);
    ClientService.getEmployeeNameByClientId(3);
}
