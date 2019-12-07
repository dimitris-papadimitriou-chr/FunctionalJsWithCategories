<a href="https://github.com/fantasyland/fantasy-land"><img alt="Fantasy Land" src="https://raw.githubusercontent.com/fantasyland/fantasy-land/master/logo.png" width="75" height="75" align="left"></a>

# sanctuary-pair

Pair is the canonical product type: a value of type `Pair a b` always
contains exactly two values: one of type `a`; one of type `b`.

`Pair a b` satisfies the following [Fantasy Land][] specifications:

```javascript
> const Useless = require ('sanctuary-useless')

> S.map (k => k + ' '.repeat (16 - k.length) +
.             (Z[k].test (Pair (Useless) (Useless)) ? '\u2705   ' :
.              Z[k].test (Pair (['foo']) (['bar'])) ? '\u2705 * ' :
.              /* otherwise */                        '\u274C   '))
.       (S.keys (S.unchecked.filter (S.is ($.TypeClass)) (Z)))
[ 'Setoid          ✅ * ',  // if ‘a’ and ‘b’ satisfy Setoid
. 'Ord             ✅ * ',  // if ‘a’ and ‘b’ satisfy Ord
. 'Semigroupoid    ✅   ',
. 'Category        ❌   ',
. 'Semigroup       ✅ * ',  // if ‘a’ and ‘b’ satisfy Semigroup
. 'Monoid          ❌   ',
. 'Group           ❌   ',
. 'Filterable      ❌   ',
. 'Functor         ✅   ',
. 'Bifunctor       ✅   ',
. 'Profunctor      ❌   ',
. 'Apply           ✅ * ',  // if ‘a’ satisfies Semigroup
. 'Applicative     ❌   ',
. 'Chain           ✅ * ',  // if ‘a’ satisfies Semigroup
. 'ChainRec        ❌   ',
. 'Monad           ❌   ',
. 'Alt             ❌   ',
. 'Plus            ❌   ',
. 'Alternative     ❌   ',
. 'Foldable        ✅   ',
. 'Traversable     ✅   ',
. 'Extend          ✅   ',
. 'Comonad         ✅   ',
. 'Contravariant   ❌   ' ]
```

#### <a name="Pair" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L125">`Pair :: a -⁠> b -⁠> Pair a b`</a>

Pair's sole data constructor. Additionally, it serves as the
Pair [type representative][].

```javascript
> Pair (1) (2)
Pair (1) (2)
```

#### <a name="Pair.fst" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L156">`Pair.fst :: Pair a b -⁠> a`</a>

`fst (Pair (x) (y))` is equivalent to `x`.

```javascript
> Pair.fst (Pair ('abc') ([1, 2, 3]))
'abc'
```

#### <a name="Pair.snd" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L166">`Pair.snd :: Pair a b -⁠> b`</a>

`snd (Pair (x) (y))` is equivalent to `y`.

```javascript
> Pair.snd (Pair ('abc') ([1, 2, 3]))
[1, 2, 3]
```

#### <a name="Pair.swap" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L176">`Pair.swap :: Pair a b -⁠> Pair b a`</a>

`swap (Pair (x) (y))` is equivalent to `Pair (y) (x)`.

```javascript
> Pair.swap (Pair ('abc') ([1, 2, 3]))
Pair ([1, 2, 3]) ('abc')
```

#### <a name="Pair.@@type" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L186">`Pair.@@type :: String`</a>

Pair [type identifier][].

```javascript
> type (Pair ('abc') ([1, 2, 3]))
'sanctuary-pair/Pair@1'

> type.parse (type (Pair ('abc') ([1, 2, 3])))
{namespace: 'sanctuary-pair', name: 'Pair', version: 1}
```

#### <a name="Pair.prototype.@@show" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L199">`Pair#@@show :: (Showable a, Showable b) => Pair a b ~> () -⁠> String`</a>

`show (Pair (x) (y))` is equivalent to
`'Pair (' + show (x) + ') (' + show (y) + ')'`.

```javascript
> show (Pair ('abc') ([1, 2, 3]))
'Pair ("abc") ([1, 2, 3])'
```

#### <a name="Pair.prototype.fantasy-land/equals" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L212">`Pair#fantasy-land/equals :: (Setoid a, Setoid b) => Pair a b ~> Pair a b -⁠> Boolean`</a>

`Pair (x) (y)` is equal to `Pair (v) (w)` [iff][] `x` is equal to `v`
and `y` is equal to `w` according to [`Z.equals`][].

```javascript
> S.equals (Pair ('abc') ([1, 2, 3])) (Pair ('abc') ([1, 2, 3]))
true

> S.equals (Pair ('abc') ([1, 2, 3])) (Pair ('abc') ([3, 2, 1]))
false
```

#### <a name="Pair.prototype.fantasy-land/lte" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L228">`Pair#fantasy-land/lte :: (Ord a, Ord b) => Pair a b ~> Pair a b -⁠> Boolean`</a>

`Pair (x) (y)` is less than or equal to `Pair (v) (w)` [iff][] `x` is
less than `v` or `x` is equal to `v` and `y` is less than or equal to
`w` according to [`Z.lte`][].

```javascript
> S.filter (S.lte (Pair ('b') (2)))
.          ([Pair ('a') (1), Pair ('a') (2), Pair ('a') (3),
.            Pair ('b') (1), Pair ('b') (2), Pair ('b') (3),
.            Pair ('c') (1), Pair ('c') (2), Pair ('c') (3)])
[ Pair ('a') (1),
. Pair ('a') (2),
. Pair ('a') (3),
. Pair ('b') (1),
. Pair ('b') (2) ]
```

#### <a name="Pair.prototype.fantasy-land/compose" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L250">`Pair#fantasy-land/compose :: Pair a b ~> Pair b c -⁠> Pair a c`</a>

`compose (Pair (x) (y)) (Pair (v) (w))` is equivalent to `Pair (v) (y)`.

```javascript
> S.compose (Pair ('a') (0)) (Pair ([1, 2, 3]) ('b'))
Pair ([1, 2, 3]) (0)
```

#### <a name="Pair.prototype.fantasy-land/concat" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L262">`Pair#fantasy-land/concat :: (Semigroup a, Semigroup b) => Pair a b ~> Pair a b -⁠> Pair a b`</a>

`concat (Pair (x) (y)) (Pair (v) (w))` is equivalent to
`Pair (concat (x) (v)) (concat (y) (w))`.

```javascript
> S.concat (Pair ('abc') ([1, 2, 3])) (Pair ('xyz') ([4, 5, 6]))
Pair ('abcxyz') ([1, 2, 3, 4, 5, 6])
```

#### <a name="Pair.prototype.fantasy-land/map" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L276">`Pair#fantasy-land/map :: Pair a b ~> (b -⁠> c) -⁠> Pair a c`</a>

`map (f) (Pair (x) (y))` is equivalent to `Pair (x) (f (y))`.

```javascript
> S.map (Math.sqrt) (Pair ('abc') (256))
Pair ('abc') (16)
```

#### <a name="Pair.prototype.fantasy-land/bimap" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L288">`Pair#fantasy-land/bimap :: Pair a c ~> (a -⁠> b, c -⁠> d) -⁠> Pair b d`</a>

`bimap (f) (g) (Pair (x) (y))` is equivalent to `Pair (f (x)) (g (y))`.

```javascript
> S.bimap (S.toUpper) (Math.sqrt) (Pair ('abc') (256))
Pair ('ABC') (16)
```

#### <a name="Pair.prototype.fantasy-land/ap" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L300">`Pair#fantasy-land/ap :: Semigroup a => Pair a b ~> Pair a (b -⁠> c) -⁠> Pair a c`</a>

`ap (Pair (v) (f)) (Pair (x) (y))` is equivalent to
`Pair (concat (v) (x)) (f (y))`.

```javascript
> S.ap (Pair ('abc') (Math.sqrt)) (Pair ('xyz') (256))
Pair ('abcxyz') (16)
```

#### <a name="Pair.prototype.fantasy-land/chain" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L313">`Pair#fantasy-land/chain :: Semigroup a => Pair a b ~> (b -⁠> Pair a c) -⁠> Pair a c`</a>

`chain (f) (Pair (x) (y))` is equivalent to
`Pair (concat (x) (fst (f (y)))) (snd (f (y)))`.

```javascript
> S.chain (n => Pair (show (n)) (Math.sqrt (n))) (Pair ('abc') (256))
Pair ('abc256') (16)
```

#### <a name="Pair.prototype.fantasy-land/reduce" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L327">`Pair#fantasy-land/reduce :: Pair a b ~> ((c, b) -⁠> c, c) -⁠> c`</a>

`reduce (f) (x) (Pair (v) (w))` is equivalent to `f (x) (w)`.

```javascript
> S.reduce (S.concat) ([1, 2, 3]) (Pair ('abc') ([4, 5, 6]))
[1, 2, 3, 4, 5, 6]
```

#### <a name="Pair.prototype.fantasy-land/traverse" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L339">`Pair#fantasy-land/traverse :: Applicative f => Pair a b ~> (TypeRep f, b -⁠> f c) -⁠> f (Pair a c)`</a>

`traverse (_) (f) (Pair (x) (y))` is equivalent to
`map (Pair (x)) (f (y))`.

```javascript
> S.traverse (Array) (S.words) (Pair (123) ('foo bar baz'))
[Pair (123) ('foo'), Pair (123) ('bar'), Pair (123) ('baz')]
```

#### <a name="Pair.prototype.fantasy-land/extend" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L352">`Pair#fantasy-land/extend :: Pair a b ~> (Pair a b -⁠> c) -⁠> Pair a c`</a>

`extend (f) (Pair (x) (y))` is equivalent to
`Pair (x) (f (Pair (x) (y)))`.

```javascript
> S.extend (S.reduce (S.add) (1)) (Pair ('abc') (99))
Pair ('abc') (100)
```

#### <a name="Pair.prototype.fantasy-land/extract" href="https://github.com/sanctuary-js/sanctuary-pair/blob/v1.2.0/index.js#L365">`Pair#fantasy-land/extract :: Pair a b ~> () -⁠> b`</a>

`extract (Pair (x) (y))` is equivalent to `y`.

```javascript
> S.extract (Pair ('abc') ([1, 2, 3]))
[1, 2, 3]
```

[Fantasy Land]:             https://github.com/fantasyland/fantasy-land/tree/v4.0.1
[`Z.equals`]:               https://github.com/sanctuary-js/sanctuary-type-classes/tree/v11.0.0#equals
[`Z.lte`]:                  https://github.com/sanctuary-js/sanctuary-type-classes/tree/v11.0.0#lte
[iff]:                      https://en.wikipedia.org/wiki/If_and_only_if
[type identifier]:          https://github.com/sanctuary-js/sanctuary-type-identifiers/tree/v2.0.1
[type representative]:      https://github.com/fantasyland/fantasy-land/tree/v4.0.1#type-representatives
