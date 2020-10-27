
import { sell, buy } from "./transactions.js";

export function demo() {

    var protfolio = {};
    protfolio["AKL"] = 7;
    protfolio["MSR"] = 4;

    var prices = {};
    prices["AKL"] = 100;
    prices["MSR"] = 20;

    var moveTransaction = sell("AKL", 3)
        .bind(buy("MSR"))
        .run({ protfolio: protfolio, prices: prices });
    console.log(JSON.stringify(moveTransaction.state));


}
