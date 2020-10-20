
import { Product } from "./Product.js";

export function demo() {

    var nameContains = pattern => product => product.name.includes(pattern);

    var highPriced = product => product.price > 1000;

    //operations
    var and = (predicate1, predicate2) => item =>
        predicate1(item) && predicate2(item);

    var or = (predicate1, predicate2) => item =>
        predicate1(item) || predicate2(item);

    var not = predicate1 => item => !predicate1(item);

    var products = [
        new Product(100, "widgetA"),
        new Product(1100, "widgetB"),
        new Product(2000, "widgetA"),
        new Product(300, "widgetB")
    ];

    {
        // For example, if we have a list of products we can filter them with their conjunction using and
        var productsAAndHighPriced = products
            .filter(and(highPriced, nameContains("A")))
            .map(Product.name);

        console.log("productsA And High Priced");
        console.log(productsAAndHighPriced);
    }

    {
        var productsBOrHighPriced = products
            .filter(or(highPriced, nameContains("B")))
            .map(Product.name);

        console.log("products B Or High Priced");
        console.log(productsBOrHighPriced);
    }

    {
        var productsNotBOrHighPriced = products
            .filter(not(or(highPriced, nameContains("B"))))
            .map(Product.name);

        console.log("products Not B Or HighPriced");
        console.log(productsNotBOrHighPriced);
    }

}
