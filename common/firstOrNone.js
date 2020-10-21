import { Some, None } from "./../monads/Maybe.js"

export let firstOrNone = array => array.length > 0 ? Some(array[0]) : None();

