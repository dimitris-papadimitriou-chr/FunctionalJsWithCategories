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

    // describe("firstOrNone commuting diagram", function() {
    //     it("should preserve structure  when empty array", function() {
    //       var path1 = firstOrNone([]).map(x => x + 1);
      
    //       var path2 = firstOrNone([].map(x => x + 1));
      
    //       expect(match(-1)(path1)).to.deep.equal(match(-1)(path2));
    //     });
      
    //     it("should preserve structure  when non-empty array", function() {
    //       var array = [1, 2, 3, 4, 5];
    //       var path1 = firstOrNone(array).map(x => x + 1);
      
    //       var path2 = firstOrNone(array.map(x => x + 1));
      
    //       expect(match(-1)(path1)).to.deep.equal(match(-1)(path2));
    //     });
    //   });
});

