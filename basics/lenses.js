//generic lens
export const lens = key => ({
    get: obj => obj[key],
    set: (obj, value) => ({ ...obj, [key]: value })
});

export let view = (lens, obj) => lens.get(obj);
export let set = (lens, obj, value) => lens.set(obj, value);
export let over = (lens, map, obj) => lens.set(obj, map(lens.get(obj)));

export const composeLenses = (lens1, lens2) => ({
    get: obj => lens1.get(lens2.get(obj)),
    set: (obj, value) => lens2.set(obj, lens1.set(lens2.get(obj), value))
});
