import { maybeToPromise } from "../../common/maybeToPromise.js"
import { Some, None } from "../../monads/Maybe.js"

export function demo() {

    maybeToPromise(-1)(Some(`5`)).then(v => console.log(`success${v}`)).catch(error => console.log(`success${error}`))


}
