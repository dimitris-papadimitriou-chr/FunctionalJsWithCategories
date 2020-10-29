import { Reader } from "../monads/Reader.js"

/** run state with the enviroment as state and then treun the value */

export let stateToReader = state => Reader(env => state.run(env).value)



