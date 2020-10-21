
import { ClientRepository } from "./data/Repository.js"
import S from "sanctuary";


export function demo() {

    {
        console.log("Using Either curried composition");
        // composing functions
        var getClientNameById = id =>
            S.either(e => `error : ${e}`)
                (result => `client name:${result}`)(
                    S.map(c => c.name)
                        (S.encase(ClientRepository.getById)(id))
                );

        console.log(getClientNameById(1));
        console.log(getClientNameById(2));
        console.log(getClientNameById(3));
    }

    {
        console.log("Using pipe");
        //using pipe
        var getClientNameById =
            S.pipe([
                S.encase(ClientRepository.getById),    //because S.encase(ClientRepository.getById)(id) the id is moved as the lamdba id => outside of S.pipe
                S.map(S.prop(`name`)),
                S.either(e => `error : ${e}`)
                        (result => `client name:${result}`)
            ]);

        console.log(getClientNameById(1));
        console.log(getClientNameById(2));
        console.log(getClientNameById(3));
    }

}
