import { Product } from "./Product.js";
import { Spec } from "./Specification.js";

export function demo() {
  
    var products = [
        new Product(100, "widgetA"),
        new Product(1100, "widgetB"),
        new Product(2000, "widgetA"),
        new Product(300, "widgetB")
    ];

    var nameContains = pattern => product => product.name.includes(pattern);

    var highPriced = product => product.price > 1000;

    {
        // For example, if we have a list of products we can filter them with their conjunction using and
        var spec1 = new Spec(nameContains(`A`)).and(highPriced);

        var products1 = products
            .filter(x => spec1.isSatisfiedBy(x))
            .map(Product.name);

        console.log("productsA And High Priced");
        console.log(products1);
    }

    {
        var spec2 = new Spec(nameContains(`A`)).or(highPriced);

        var products2 = products
            .filter(x => spec2.isSatisfiedBy(x))
            .map(Product.name);

        console.log("products A Or High Priced");
        console.log(products2);
    }

    {
        var spec3 = new Spec(nameContains(`A`)).or(highPriced).not();

        var products3 = products
            .filter(x => spec3.isSatisfiedBy(x))
            .map(Product.name);

        console.log("Not (products A Or High Priced)");
        console.log(products3);
    }

    {
        var spec4 = new Spec(nameContains(`A`)).not().or(highPriced);

        var products4 = products
            .filter(x => spec4.isSatisfiedBy(x))
            .map(Product.name);

        console.log("Not products A Or High Priced");
        console.log(products4);
    }

}
