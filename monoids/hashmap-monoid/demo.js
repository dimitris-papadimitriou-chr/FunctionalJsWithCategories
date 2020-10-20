
import { HashMapMonoid  } from "./HashMapMonoid.js";
export function demo() {
 
    var dictionary1 = {};
    dictionary1["and"] = 5;
    dictionary1["the"] = 3;

    var dictionary2 = {};
    dictionary2["and"] = 7;
    dictionary2["or"] = 4;

    var Sum = { empty: 0, concat: (x, y) => x + y } 

    var mergedDictionary = HashMapMonoid(Sum).concat(dictionary1, dictionary2);

    console.log(mergedDictionary);//{and: 12, or: 4, the: 3}



}
