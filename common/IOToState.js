import { State } from "../monads/State.js"

export let IOToState = io => State(s => ({ value: io.run(), state: s }))