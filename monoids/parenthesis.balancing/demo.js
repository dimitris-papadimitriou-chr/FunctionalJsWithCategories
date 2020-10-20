
import { BalanceMonoid, toString } from "./balance.js";
import { parse } from "./parser.js";

export function demo() {
    let balanceMonoid = new BalanceMonoid();

    let getBalance = input =>
        Array.from(input)
            .map(parse)
            .reduce(balanceMonoid.concat, balanceMonoid.empty);

    console.log(toString(getBalance("((()))()"))); //{L:0,R:0}

    console.log(toString(getBalance("((()))("))); //{L:0,R:1}

    console.log(toString(getBalance(")((()))("))); //{L:1,R:1}


}
