import { Client } from "./Client.js"
import { Employee } from "./Employee.js"


export let Db = {
    Clients:
        [new Client(1, "jim", 2),
        new Client(2, "jane", 3)],

    Employees:
        [new Employee(1, "jack"),
        new Employee(2, "jill")],

}
