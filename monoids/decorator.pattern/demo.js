import R from 'ramda';

export function demo() {

    var createProduct = price => ({ price: () => price });

    //decorators
    var addPackaging = product => ({ price: () => product.price() + 0.5 });
    var addRibons = product => ({ price: () => product.price() + 0.3 });
    var addLayeredPackaging = numberOfLayers => product => ({
        price: () => product.price() + 0.5 * numberOfLayers
    });

    //addRibons(addPackaging(createProduct(20)));

    {
        var finalProduct = R.compose(
            addRibons,
            addLayeredPackaging(3),
            addPackaging,
            createProduct
        )(20);

        console.log("using R.compose");
        console.log(finalProduct.price());
    }
    
    //using R.pipe the order of the functions is reversed
    {
        var finalProduct = R.pipe(
            createProduct,
            addLayeredPackaging(3),
            addPackaging,
            addRibons
        )(20);

        console.log("using R.pipe");
        console.log(finalProduct.price());
    }


}
