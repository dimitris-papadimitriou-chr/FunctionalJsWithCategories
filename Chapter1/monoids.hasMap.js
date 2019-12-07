var demo = function () {
   
    var dictionary1 = {};
    dictionary1["and"] = 5;
    dictionary1["the"] = 3;

    var dictionary2 = {};
    dictionary2["and"] = 7;
    dictionary2["or"] = 4;

    var Sum = { empty: 0, concat: (x, y) => x + y }

    var mergeHashMaps = valueMonoid => ({
        empty: {},
        concat: (x, y) => {
            var merge = Object.assign({}, y);
            for (var word in x) {
                if (merge[word]) { merge[word] = valueMonoid.concat(merge[word], (x[word])); }
                else {
                    merge[word] = merge[word] = x[word];
                }
            }
            return merge;
        }
    })

    var mergedDictionary = mergeHashMaps(Sum).concat(dictionary1, dictionary2);
    console.log(mergedDictionary);

}



module.exports = demo;


