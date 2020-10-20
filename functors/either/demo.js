import { Left, Right } from "./../Either.js"
import { Client } from "../model/Client.js"

export function demo() {

    {
        //1. the right case

        let result = Right(new Client(1, "jake"))
            .map(Client.name)
            .match({
                right: value => `right: ${value}`, //we reach this case
                left: error => `left: ${error}`
            })
        console.log(result);
    }


    {
        //2. the left case

        let result = Left('no client found')
            .map(Client.name)          //the left map ignores the transformations
            .match({
                right: value => `right: ${value}`,
                left: error => `left: ${error}` //we reach this case
            })
        console.log(result);
    }

}
