import { Client } from "../model/Client.js"
import { Employee } from "../model/Employee.js"
import { ClientRepository, EmployeeRepository } from "./data/Repositories.js"
import { composeK } from "../composeK.js"
import R from 'ramda'

export function demo() {

    var maybeEmployeeIdByClientId = clientId =>
        ClientRepository
            .getById(clientId)
            .map(R.prop(`employeeId`)); //number=>Maybe<number>

    var getEmployeeNameById = employeeId =>
        EmployeeRepository
            .getById(employeeId)
            .map(R.prop(`name`)); //number=>Maybe<String>

    const composeK = R.composeWith((f, res) => res = res.bind(f));

    var employeeNameByClientId = composeK([
        maybeEmployeeIdByClientId,
        getEmployeeNameById]
    );

    var getNameOrError = maybe =>    //fold the maybe to get a string 
        maybe.match({
            some: value => `employee name: ${value}`,
            none: _ => `could not get employee name `
        });

    [1, 2, 3, 4] // a list of ClientIds
        .map(employeeNameByClientId)
        .map(getNameOrError)
        .forEach(console.log);

    //   log(matchMaybe(employeeNameByClientId(1)));
    //   log(matchMaybe(employeeNameByClientId(2)));
    //   log(matchMaybe(employeeNameByClientId(3)));
    //   log(matchMaybe(employeeNameByClientId(4)));
}
