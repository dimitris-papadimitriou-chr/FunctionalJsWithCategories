import { Some, None } from "./../Maybe.js"
import { Client } from "../model/Client.js"

export function demo() {

    {
        //non-null case

        let result = Some(new Client(1, "jake"))
            .map(client => client.name)
            .match({
                some: v => `client name:${v}`,
                none: () => `no client found`
            });

        console.log(result);
    }


    {
        //null case

        let result = None()
            .map(Client.name)
            .match({
                some: v => `client name:${v}`,
                none: () => `no client found`
            });
        console.log(result);
    }

}
