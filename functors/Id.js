export let Id = v => ({
    getValue: () => v,
    map: f => Id(f(v))
});
