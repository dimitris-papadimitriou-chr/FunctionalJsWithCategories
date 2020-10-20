export let IO = fn => ({
    map: f => IO(() => f(fn())),
    run: () => fn(),                  //aka getValue()
    match: pattern => pattern(fn())   //we could define a match 
})