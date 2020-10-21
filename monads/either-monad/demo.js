import { Left, Right } from "../Either.js"

export function demo() {

    //Right.bind(Left)==Left
    Right(3)
        .bind(x => Left("error2"))
        .match({
            right: v => console.log(`Right:${v}`),
            left: (error) => console.log(`Left ${error}`)
        })

    //Left.bind(Right)==Left
    Left("error1")
        .bind(x => Right(5 + x))
        .match({
            right: v => console.log(`Right:${v}`),
            left: (error) => console.log(`Left ${error}`)
        })

    //Left.bind(Left)==Left
    Left("error1")
        .bind(x => Left("error2"))
        .match({
            right: v => console.log(`Right:${v}`),
            left: (error) => console.log(`Left ${error}`)
        })

    //Right.bind(Right)==Right
    Right(3)
        .bind(x => Right(5 + x))
        .match({
            right: v => console.log(`Right:${v}`),
            left: (error) => console.log(`Left ${error}`)
        })
}
