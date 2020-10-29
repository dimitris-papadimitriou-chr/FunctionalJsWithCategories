export let IO = fn => ({
    map: f => IO(() => f(fn())),
    bind: f => IO(() => f(fn()).run()),
    run: () => fn(),
    match: pattern => pattern(fn())
});


IO.of = v => IO(() => v);     //pointed functor