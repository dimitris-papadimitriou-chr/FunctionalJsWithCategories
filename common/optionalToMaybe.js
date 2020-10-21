import { Some, None } from "../monads/Maybe.js"

export let firstOrNone = value => value ? Some(value) : None();

