import { Some, None } from "../Maybe.js"

export function demo() {

    //some.bind(None)==None
    Some(3)
        .bind(x => None())
        .match({
            some: v => console.log(`Some:${v}`),
            none: () => console.log(`None`)
        })

    //None.bind(some)==None
    None()
        .bind(x => Some(5 + x))
        .match({
            some: v => console.log(`Some:${v}`),
            none: () => console.log(`None`)
        })

    //None.bind(None)==None
    None()
        .bind(x => None())
        .match({
            some: v => console.log(`Some:${v}`),
            none: () => console.log(`None`)
        })

    //Some.bind(Some)==Some
    Some(3)
        .bind(x => Some(5 + x))
        .match({
            some: v => console.log(`Some:${v}`),
            none: () => console.log(`None`)
        })
}
