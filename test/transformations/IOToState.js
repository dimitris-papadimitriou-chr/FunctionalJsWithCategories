import assert from "assert"
import { IOToState } from "../../common/IOToState.js"
import { IO } from "../../monads/IO.js"
import { State } from "../../monads/State.js"


describe('IOToState', function () {

    it('should return IO value on bind', function () {

        var initialState = ({ x: `x`, y: `y` });

        var actual = IOToState(IO(() => `io`))
            .bind(value => State(s => ({ value: s.x + value + s.y, state: s })))
            .run(initialState);

        assert.strict.equal(actual.value, `xioy`);
        assert.strict.deepEqual(actual.state, initialState);
    });

    it('should return IO value on bind', function () {

        var initialState = ({ x: `x`, y: `y` });

        var actual = IOToState(IO(() => `io`))
            .bind(value => State(s => ({ value: s.x + value + s.y, state: s })))
            .bind(value => State(s => ({ value: s.x + value + s.y, state: s })))
            .run(initialState);

        assert.strict.equal(actual.value, `xxioyy`);
        assert.strict.deepEqual(actual.state, initialState);
    });


});

