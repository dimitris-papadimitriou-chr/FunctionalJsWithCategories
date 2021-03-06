

export function demo() {

    var Sum = { empty: 0, concat: (x, y) => x + y }

    var bigList = [...Array(10e4)].map((_, i) => i);

    var slice = array => size => {
        var sliced = [];
        for (var i = 0; i < array.length; i += size)
            sliced.push(array.slice(i, i + size))
        return sliced;
    }

    var mapReduce = array => f => m =>
        array.map(chunk => chunk.map(f).reduce(m.concat, m.empty))
            .reduce(m.concat, m.empty)

    var total = mapReduce(slice(bigList)(100))(x => x + 1)(Sum);
    console.log(total);


}
