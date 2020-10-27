import { Some, None } from "../monads/Maybe.js"

export let optionalToMaybe = value => value ? Some(value) : None();

