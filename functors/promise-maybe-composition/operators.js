export let mapT = function (f) {
    return maybe => maybe.map(f)
 }
 
 export let matchT = function (pattern) {
    return maybe => maybe.match(pattern)
 }
 