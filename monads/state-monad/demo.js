import { State } from "../State.js"

export function demo() {

    {
        var state = State(previousState => {
            var newStateValuePair = ({
                value: "this is the value it can be anything",
                state: { a: false, counter: previousState.counter + 1 }// this is something that must have the same items as the state 
            })
            return newStateValuePair;
        });

        var result = state.run({ a: true, counter: 0 })
        console.log(JSON.stringify(result));
    }


    {
        var state = State(({ on, counter }) => {
            return ({ value: "", state: { on: on, counter: counter + 1 } })  //we ignore the value and work only with the state
        }).bind(_ => State(({ on, counter }) => {                            //we ignore the value and work only with the state
            return ({ value: "", state: { on: on, counter: counter + 1 } })  //we ignore the value and work only with the state
        }));

        var result = state.run({ on: true, counter: 0 });
        console.log(JSON.stringify(result));
    }

 
}
