import { lens, view, set, composeLenses } from "../lenses.js";

export function demo() {

    var clientEmployeeLens = lens(`employee`);
    var employeeAgeLens = lens(`age`);

    let client = {
        name: "Jim",
        age: 25,
        employee: {
            name: `john`,
            age: 25
        }
    };

    var clientEmployeeAgeLens = composeLenses(employeeAgeLens, clientEmployeeLens);

    {
        console.log(view(clientEmployeeAgeLens, client)); //view

        var updatedClient = set(clientEmployeeAgeLens, client, 30); //update
        console.log(view(clientEmployeeAgeLens, updatedClient)); //view
    }

}
