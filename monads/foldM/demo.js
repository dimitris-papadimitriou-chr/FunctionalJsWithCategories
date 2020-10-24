import { Id } from "../Id.js"

//https://stackblitz.com/edit/typescript-foldm-acn4wp?file=index.ts

export function demo() {

    var array = [2, 4, 5, 6];

    var accumulation = new Id(0);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        accumulation = accumulation.bind(acc => new Id(element + acc));
    }
    log(accumulation);
}

