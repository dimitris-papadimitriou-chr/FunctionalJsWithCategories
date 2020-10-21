import R from 'ramda'
import S from 'sanctuary'

export function demo() {

    var array = [2, 3, 4, 5];
    var mutipleOperations = x => [x * x, x * x * x];
    //native array flatMap
    {
        // map
        let result1 = array.map(mutipleOperations);
        console.log(JSON.stringify(result1));
        //bind
        let result2 = array.flatMap(mutipleOperations);
        console.log(JSON.stringify(result2));
    }

    //ramda
    {
        let flatMap = f => R.compose(R.flatten, R.map(f))
        let result = flatMap(mutipleOperations)(array);
        console.log(JSON.stringify(result));
    }

    //sanctuary
    {
        let flatMap = f => S.pipe([S.map(f), S.join]);
        let result = flatMap(mutipleOperations)(array);
        console.log(JSON.stringify(result));
        //or using the S.chain on the array this is the standar monadic bind a.k.a flatMap

        let result1 = S.chain(mutipleOperations)(array);
        console.log(JSON.stringify(result1));

    }

}
