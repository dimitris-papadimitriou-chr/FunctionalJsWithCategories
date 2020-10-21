export let Some = (v) => ({
    map: f => Some(f(v)),
    match: pattern => pattern.some(v),
    bind: f => f(v),
});

export let None = () => ({
    map: _ => None(),
    match: pattern => pattern.none(),
    bind: _ => None(),
});
