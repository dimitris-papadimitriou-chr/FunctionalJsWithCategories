import { lens, view, over, } from "../lenses.js";

export function demo() {

    var nameLens = lens(`name`);
    let client = { name: "Jim", age: 25 };

    var updatedClient = over(nameLens, x => x.toUpperCase(), client);

    console.log(view(nameLens, updatedClient)); 
}
