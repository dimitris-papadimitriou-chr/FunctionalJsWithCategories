export let Reader = (expr) => ({
    map: f => Reader(env => f(Reader(expr).run(env))), 
    bind: f => Reader(env => f(expr(env)).run(env)),
    run: env => expr(env),
});
