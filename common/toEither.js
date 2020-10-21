import { Left, Right } from "./../monads/Either.js"

//here we placed the left reason as first curried parameter.
export let toEither = defaultLeft =>
    maybe => maybe.match({
        some: v => Right(v),
        none: () => Left(defaultLeft)
    })

