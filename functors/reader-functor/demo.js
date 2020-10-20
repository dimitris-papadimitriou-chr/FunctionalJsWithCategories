import { Reader } from "../Reader.js"

export function demo() {
    {
        //const titleViewTemplate = Reader(({ firstName, lastName }) => `<div>${firstName} - ${lastName} </div>`)

        var titleView = Reader(({ firstName, lastName }) => `<div>${firstName} - ${lastName} </div>`)
            .run({ firstName: "dimitris", lastName: "papadim" });

        console.log(titleView)

    }

    {
        var decoratedWithSpan =
            Reader(({ firstName, lastName }) => `<div>${firstName} - ${lastName} </div>`)
                .map(x => `<span> this is a span${x}</span>`)
                .run({ firstName: "dimitris", lastName: "papadim" });

        console.log(decoratedWithSpan)
    }



}
