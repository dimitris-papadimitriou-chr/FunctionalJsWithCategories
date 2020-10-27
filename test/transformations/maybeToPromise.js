import assert from "assert"
import { maybeToPromise } from "../../common/maybeToPromise.js"
import { Some, None } from "../../monads/Maybe.js"

describe('maybeToPromise', function () {
    it('should resolve when Some', function () {
        return maybeToPromise(-1)(Some(5)).then(v => {
            assert.strict.equal(v, 5)
        }).catch(error => {
            assert.fail("should not reach reject")
        })
    });

    it('should reject when None', function (done) {
        maybeToPromise(-1)(None()).then(v => {
            assert.fail("should not reach resolve");
            done()
        }).catch(error => {
            assert.strict.equal(error, -1)
            done();
        })
    });
});

