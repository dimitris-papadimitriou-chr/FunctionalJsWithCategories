export let Reader = (expr) => ({
    expr: expr,
    map: f => Reader(env => f(Reader(expr).run(env))),
    run: env => expr(env),
    ap: reader => Reader(env => Reader(expr).run(env)(reader.run(env)))
});