import { Id } from "../Id.js"
import { Client } from "../model/Client.js"
import { mapT } from "./mapT.js"

export function demo() {

    // an Array in an Id composition
    {
        let idClients = Id([new Client(1, "jim", 2), new Client(2, "jane", 3)]);

        let idNames = mapT(client => client.name)(idClients);      //Id<Array<String>>

        console.log(JSON.stringify(idNames.getValue())); //Id (['jim', 'jane' ] )
        //the result is an Id<Array[String]>  -An Id of an Array of Strings
    }


    // an Array in an Array composition
    {
        let groupsOfClientsByDepartment = [
            [new Client(1, "jim", 2), new Client(2, "jane", 3)],
            [new Client(3, "kate", 2), new Client(4, "John", 3)]
        ];

        var groupsOfClientNamesByDepartment = mapT(client => client.name)(groupsOfClientsByDepartment);

        console.log(groupsOfClientNamesByDepartment); //[ [ 'jim', 'jane' ], [ 'kate', 'John' ] ]
    }


}
