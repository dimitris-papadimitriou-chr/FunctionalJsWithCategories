import { Reader } from "../monads/Reader.js"
import { State } from "../monads/State.js"

/** run reader with the state as environment and then use the same state as state */

export let readerToState = reader => State(state => ({ value: reader.run(state).value, state: state }))



