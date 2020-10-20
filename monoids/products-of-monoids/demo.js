
export function demo() {

    var Sum = { empty: () => 0, concat: (x, y) => x + y }
    //var Mult = { empty: () => 1, concat: (x, y) => x * y }

    var Pair = (m1, m2) => ({
        empty: () => ({ first: m1.empty(), second: m2.empty() }),
        concat: (x, y) => ({
            first: m1.concat(x.first, y.first),
            second: m2.concat(x.second, y.second)
        })
    });

    var pair = Pair(Sum, Sum);

    var fold = [1, 2, 3, 4]
        .map(x => ({ first: x, second: 1 }))
        .reduce(pair.concat, pair.empty()); //{first:10, second:4}

    var average = fold.first / fold.second;
    console.log(average);

}
