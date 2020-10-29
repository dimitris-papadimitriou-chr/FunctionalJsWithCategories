import { IO } from "./../monads/IO.js"

export let toIO = value => new IO(() => value)


