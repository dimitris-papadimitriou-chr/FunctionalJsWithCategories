import { State } from "./../State.js"


//https://stackblitz.com/edit/state-example-1?file=index.js
// javascript implementation of the example - 1 of the State monad in hasklell
//https://wiki.haskell.org/State_Monad#Complete_and_Concrete_Example_1

export function demo() {

    Array.prototype.match = function (pattern) {
        if (this.length == 0) {
            return pattern.empty();
        } else {
            return pattern.cons(this[0], this.slice(1));
        }
    };


    // type GameValue = Int
    // type GameState = (Bool, Int)

    // playGame :: String -> State GameState GameValue

    var playGame = wordSequence => wordSequence.match({
        empty: () => {
            return State(s => s)
        },//terminates
        cons: (x, xs) => {
            return State(({ on, counter }) => {
                if (x == "a" && on)
                    return ({ state: { on: on, counter: counter + 1 } })
                else if (x == "b" && on)
                    return ({ state: { on: on, counter: counter - 1 } })
                else if (x == "c")
                    return ({ state: { on: !on, counter: counter } })
                else return s
            }).bind(_ => playGame(xs))
        }

    })


    var display = s => console.log(JSON.stringify(playGame(s).run({ on: true, counter: 0 })))

    display(Array.from("aaaabc"))
    display(Array.from("aaaabbbbbbbc"))


}
