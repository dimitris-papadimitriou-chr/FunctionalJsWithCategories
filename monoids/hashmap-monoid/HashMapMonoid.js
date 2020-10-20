
    export var HashMapMonoid = valueMonoid => ({
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