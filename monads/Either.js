export let Right = (v) => ({
  map: (f) => Right(f(v)),
  match: (pattern) => pattern.right(v),
  bind: f => f(v),
});

export let Left = (v) => ({
  map: (f) => Left(v),      // we discard the f and just pass the value v along 
  match: (pattern) => pattern.left(v),
  bind: f => Left(v),
});