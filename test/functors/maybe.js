import { Some, None } from "../../functors/Maybe.js"
import assert from "assert"

describe('Maybe', function () {
    describe('Some.map()', function () {
        it('should map corectly simple types', function () {

            var result = Some(2)
                .map(x => x * x)
                .match({
                    some: v => v,
                    none: () => -1
                });

            assert.deepStrictEqual(result, 4)
        });
    });
    describe('None.map()', function () {
        it('should map corectly simple types', function () {

            var result = None()
                .map(x => x * x)
                .match({
                    some: v => v,
                    none: () => -1
                });

            assert.deepStrictEqual(result, -1)
        });
    });
});