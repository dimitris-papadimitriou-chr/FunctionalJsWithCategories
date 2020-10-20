export let Some = (v) => ({
    map: (f) => Some(f(v)),
    match: pattern => pattern.some(v),
});

export let None = () => ({
    map: (_) => None(),
    match: pattern => pattern.none(),
});
