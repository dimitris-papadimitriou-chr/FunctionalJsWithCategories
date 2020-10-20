import { Id } from "../Id.js";
import { Client } from "../model/Client.js"

export function demo() {

    var getName = client => client.name;
    var toUpperCase = name => name.toUpperCase();
    var composition = client => toUpperCase(getName(client));

    var client = new Client(1, "jake");

    //all the following are equivalent : 
    console.log(composition(client))

    console.log(Id(composition(client)).getValue());
    console.log(Id(composition(client)).map(x => x).getValue());       //F(f○g) ○ 1
    console.log(Id(client).map(composition).getValue());               //F(f○g) 
    console.log(Id(client).map(getName).map(toUpperCase).getValue());  //F(f) ○ F(g)
    console.log(Id(client).map(composition).map(x => x).getValue());   //F(f) ○ F(g) ○ 1

}
