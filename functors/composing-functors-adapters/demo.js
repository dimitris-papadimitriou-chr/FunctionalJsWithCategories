import { Id } from "../Id.js"
import { Client } from "../model/Client.js"
import { ComposeT } from "./ComposeT.js"


export function demo() {

    let mapT = f => composite => composite.map(inner => inner.map(f));

    // an Array in an Id composition
    {
        let idClients = Id([new Client(1, "jim", 2), new Client(2, "jane", 3)]);

        let idNames = ComposeT(idClients)
            .map(client => client.name)
            .map(name => name.toUpperCase())
            .unwrap();      //Id<Array<String>>

        console.log(JSON.stringify(idNames.getValue())); //Id (['JIM', 'JANE' ] )
        //the result is an Id<Array[String]>
        // -An Id of an Array of Strings
    }


    // an Array in an Array composition
    {
        let groupsOfClientsByDepartment = [
            [new Client(1, "jim", 2), new Client(2, "jane", 3)],
            [new Client(3, "kate", 2), new Client(4, "John", 3)]
        ];

        let groupsOfClientNamesByDepartment = ComposeT(groupsOfClientsByDepartment)
            .map(client => client.name)
            .map(name => name.toUpperCase())
            .unwrap();      //Id<Array<String>>

        console.log(JSON.stringify(groupsOfClientNamesByDepartment)); //[["JIM","JANE"],["KATE","JOHN"]]

    }


}
