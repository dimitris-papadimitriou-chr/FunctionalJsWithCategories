import assert from "assert"
import { stateToReader } from "../../common/stateToReader.js"
import { Reader } from "../../monads/Reader.js"
import { State } from "../../monads/State.js"

describe('stateToReader', function () {
    it('should map correctly', function () {

        var env = ({ x: `x`, y: `y` });

        var actual = stateToReader(State(s => ({ value: env.x + `state` + env.y, state: s })))
            .map(value =>  `map(${value})`)
            .run(env)

        assert.strict.equal(actual, 'map(xstatey)')
    });

    it('should bind correctly', function () {

        var env = ({ x: `x`, y: `y` });

        var actual = stateToReader(State(s => ({ value: env.x + `state` + env.y, state: s })))
            .bind(value => Reader(env => `reader` + env.x + value + env.y))
            .run(env)

        assert.strict.equal(actual, 'readerxxstateyy')
    });


});

