import { Id } from "../Id.js";


export function demo() {

    var id = x => x;
    var value = 5

    // Law 1 -  identity preserving  
    console.log(Id(value).map(id).getValue() === id(value))

    // Law 2 composition of functions is preserved 

    // for any f and g 
    var f = x => 2 * x;
    var g = x => 3 * x;

    console.log(Id(value).map(x => f(g(x))).getValue() === Id(value).map(f).map(g).getValue());

}
