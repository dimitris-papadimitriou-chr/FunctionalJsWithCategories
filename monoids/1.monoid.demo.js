
export function demo() {
    var Sum = { empty: () => 0, concat: (x, y) => x + y }
    let arraySum = [1, 2, 3, 4, 5, 6].reduce(Sum.concat, Sum.empty());
    console.log(arraySum);

    var Product = { empty: () => 1, concat: (x, y) => x * y }
    let arrayProduct = [1, 2, 3, 4, 5, 6].reduce(Product.concat, Product.empty());
    console.log(arrayProduct);
}
