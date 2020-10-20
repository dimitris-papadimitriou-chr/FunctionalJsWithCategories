import { Reader } from "../Reader.js"

export function demo() {

    {
        var ENV = {};
        var res = Reader(env => x => y => y + x).ap(Reader(env => 1)).ap(Reader(env => 2)).run(ENV);
        console.log(res);

        var ENV = { x: 1, y: 2, z: 3 };
        var res = Reader(env => x => y => y + x + env.z).ap(Reader(env => env.x)).ap(Reader(env => env.y)).run(ENV);
        console.log(res);
    }

    {
        var Product = (price) => ({
            getFinalPrice(pricingStrategy) {
                return pricingStrategy(price)
            }
        })

        var CONFIG = { discount: 0.1, productPrice: 100 };

        var discountedPrice =
            Reader(config => product => product.getFinalPrice(price => price * (1 - config.discount)))
                .ap(Reader(config => Product(config.productPrice)))
                .run(CONFIG);   //90

        console.log(discountedPrice)

    }
}
