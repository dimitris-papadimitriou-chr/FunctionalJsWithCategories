export let composeK = (f, g) => a => f(a).bind(g);

export let composeP = (f, g) => a => f(a).then(g);