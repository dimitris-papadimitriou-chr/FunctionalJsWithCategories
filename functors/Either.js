export let Right = (v) => ({
    map: (f) => Right(f(v)),
    match: (pattern) => pattern.right(v)
});

export let Left = (v) => ({
    map: (_) => Left(v),
    match: (pattern) => pattern.left(v)
});
