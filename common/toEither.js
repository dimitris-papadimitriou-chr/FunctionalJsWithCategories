import { Left, Right } from "./../functors/either.js"

export let toEither = function (defaultLeft) {                   //here we placed the left reason as first curried parameter.
    return maybe => maybe.match({
        some: v => Right(v),
        none: () => Left(defaultLeft)
    })
}
