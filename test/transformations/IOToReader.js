import assert from "assert"
import { IOToReader } from "../../common/IOToReader.js"
import { IO } from "../../monads/IO.js"
import { Reader } from "../../monads/Reader.js"


describe('IOToReader', function () {
    it('should return IO value on bind', function () {

        var actual = IOToReader(IO(() => `io`))
            .bind(value => Reader(env => env.x + value + env.y))
            .run({ x: `x`, y: `y` })

        assert.strict.equal(actual, `xioy`)
    });

    it('should return IO value on bind', function () {

        var actual = IOToReader(IO(() => `io`))
            .bind(value => Reader(env => env.x + value + env.y))
            .bind(value => Reader(env => env.x + value + env.y))
            .run({ x: `x`, y: `y` })

        assert.strict.equal(actual, `xxioyy`)
    });

});

