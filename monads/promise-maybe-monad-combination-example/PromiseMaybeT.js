
export var PromiseMaybeT = (promiseMaybe) => ({
    map: f => PromiseMaybeT(promiseMaybe.then(maybe => maybe.map(f))),
    match: pattern => PromiseMaybeT(promiseMaybe.then(maybe => maybe.match(pattern))),
    bind: f => PromiseMaybeT(promiseMaybe.then(maybe => maybe.bind(f))),
    //this returns the internal Promise
    unwrap: () => promiseMaybe
});