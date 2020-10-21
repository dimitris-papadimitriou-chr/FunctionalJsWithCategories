export const Id = (v) => ({
    map: f => Id(f(v)),
    bind: f => f(v),
    getValue: () => v,
    match: pattern => pattern(v)
});

Id.of = v => Id(v);     //pointed functor