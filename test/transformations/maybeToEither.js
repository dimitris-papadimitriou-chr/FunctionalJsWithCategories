import assert from "assert"
import { maybeToEither } from "../../common/maybeToEither.js"
import { Some, None } from "../../monads/Maybe.js"

describe('maybeToEither', function () {
    it('should match right when Some', function () {
        var actual = maybeToEither(-1)(Some(5)).match({
            right: v => v,
            left: e => e
        })
        assert.strict.equal(actual, 5)
    });

    it('should match left when None', function () {
        var actual = maybeToEither(-1)(None())
            .match({
                right: v => v,
                left: e => e
            })
        assert.strict.equal(actual, -1)
    });
});


  