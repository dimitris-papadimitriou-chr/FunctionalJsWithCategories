import assert from "assert"
import { optionalToMaybe } from "../../common/optionalToMaybe.js"

describe('optionalToMaybe', function () {
    it('should match none when null', function () {
        var actual = optionalToMaybe(null).match({
            some: v => v,
            none: () => -1
        })
        assert.strict.equal(actual, -1)
    });

    it('should match Some when not null', function () {
        var actual = optionalToMaybe(5).match({
            some: v => v,
            none: () => -1
        })
        assert.strict.equal(actual, 5)
    });
});

