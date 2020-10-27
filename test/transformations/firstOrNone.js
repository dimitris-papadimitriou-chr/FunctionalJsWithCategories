import assert from "assert"
import { firstOrNone } from "../../common/firstOrNone.js"

describe('firstOrNone', function () {
    it('should match none when empty array', function () {
        var actual = firstOrNone([]).match({
            some: v => v,
            none: () => -1
        })
        assert.strict.equal(actual, -1)
    });

    it('should match Some with the first value when array is non empty ', function () {
        var actual = firstOrNone([1,2,3,4]).match({
            some: v => v,
            none: () => -1
        })
        assert.strict.equal(actual, 1)
    });
});

