export const ComposeT = composition => ({
    map: f => ComposeT(composition.map(inner => inner.map(f))),
    unwrap: () => composition
  });
  