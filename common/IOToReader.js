import { Reader } from "../monads/Reader.js"

export let IOToReader = io => Reader(env => io.run())               //discard environment env


