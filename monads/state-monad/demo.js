import { State } from "../State.js"

export function demo() {

    {
        var state = State(s => {
            return ({ value: s.value, state: s.state + 1 })
        });
        var result = state.run({ value: true, state: 0 })
    }


    {
        var state = State(({ on, counter }) => {
            return ({ state: { on: on, counter: counter + 1 } })
        }).bind(_ => State(({ on, counter }) => {
            return ({ state: { on: on, counter: counter + 1 } })
        }));

        var result = state.run({ on: true, counter: 0 })
    }






}
