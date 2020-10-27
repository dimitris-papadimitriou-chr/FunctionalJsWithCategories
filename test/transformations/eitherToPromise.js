import assert from "assert"
import { eitherToPromise } from "../../common/eitherToPromise.js"
import { Left, Right } from "../../monads/Either.js"

describe('eitherToPromise', function () {
    it('should resolve when Right', function () {
        return eitherToPromise(Right(5)).then(v => {
            assert.strict.equal(v, 5)
        }).catch(error => {
            assert.fail("should not reach reject")
        })
    });

    it('should reject when Left with the value as reject reason', function (done) {
        eitherToPromise(Left(-1)).then(v => {
            assert.fail("should not reach resolve");
            done()
        }).catch(error => {
            assert.strict.equal(error, -1)
            done();
        })
    });
});

