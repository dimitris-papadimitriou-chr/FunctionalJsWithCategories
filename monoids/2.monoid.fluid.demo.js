
export function demo() {
    class Sum {
        constructor(v) { this.value = v; }
        static empty() { return new Sum(0); }
        concat(b) { return new Sum(this.value + b.value); }
    };

    var arraySum = [1, 2, 3, 4, 5, 6]
        .map(x => new Sum(x))
        .reduce((a, b) => a.concat(b), Sum.empty());

    console.log(arraySum)
}
