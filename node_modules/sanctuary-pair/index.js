       /*                   *\
      //                     \\
     //   @@  @@     @@  @@   \\
    //      @@       @@  @@    \\
    \\      @@       @@  @@    //
     \\   @@  @@  @    @@ @   //
      \\          /       @  //
       \*             @@@@  */

//. <a href="https://github.com/fantasyland/fantasy-land"><img alt="Fantasy Land" src="https://raw.githubusercontent.com/fantasyland/fantasy-land/master/logo.png" width="75" height="75" align="left"></a>
//.
//. # sanctuary-pair
//.
//. Pair is the canonical product type: a value of type `Pair a b` always
//. contains exactly two values: one of type `a`; one of type `b`.

(function(f) {

  'use strict';

  var util = {inspect: {}};

  /* istanbul ignore else */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f (require ('util'),
                        require ('sanctuary-show'),
                        require ('sanctuary-type-classes'));
  } else if (typeof define === 'function' && define.amd != null) {
    define (['sanctuary-show', 'sanctuary-type-classes'], function(show, Z) {
      return f (util, show, Z);
    });
  } else {
    self.sanctuaryPair = f (util,
                            self.sanctuaryShow,
                            self.sanctuaryTypeClasses);
  }

} (function(util, show, Z) {

  'use strict';

  /* istanbul ignore if */
  if (typeof __doctest !== 'undefined') {
    var $ = __doctest.require ('sanctuary-def');
    var type = __doctest.require ('sanctuary-type-identifiers');
    var S = (function() {
      var S = __doctest.require ('sanctuary');
      var PairType = $.BinaryType
        ('sanctuary-pair/Pair')
        ('')
        (function(x) { return type (x) === Pair['@@type']; })
        (function(p) { return [p.fst]; })
        (function(p) { return [p.snd]; });
      var env = Z.concat (S.env,
                          [$.TypeClass, PairType ($.Unknown) ($.Unknown)]);
      return S.create ({checkTypes: true, env: env});
    } ());
  }

  var prototype = {
    /* eslint-disable key-spacing */
    'constructor':            Pair,
    '@@show':                 Pair$prototype$show,
    'fantasy-land/compose':   Pair$prototype$compose,
    'fantasy-land/map':       Pair$prototype$map,
    'fantasy-land/bimap':     Pair$prototype$bimap,
    'fantasy-land/reduce':    Pair$prototype$reduce,
    'fantasy-land/traverse':  Pair$prototype$traverse,
    'fantasy-land/extend':    Pair$prototype$extend,
    'fantasy-land/extract':   Pair$prototype$extract
    /* eslint-enable key-spacing */
  };

  var custom = util.inspect.custom;
  /* istanbul ignore else */
  if (typeof custom === 'symbol') {
    prototype[custom] = Pair$prototype$show;
  } else {
    prototype.inspect = Pair$prototype$show;
  }

  /* istanbul ignore else */
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    prototype[Symbol.iterator] = function() {
      return [this.fst, this.snd][Symbol.iterator] ();
    };
  }

  //. `Pair a b` satisfies the following [Fantasy Land][] specifications:
  //.
  //. ```javascript
  //. > const Useless = require ('sanctuary-useless')
  //.
  //. > S.map (k => k + ' '.repeat (16 - k.length) +
  //. .             (Z[k].test (Pair (Useless) (Useless)) ? '\u2705   ' :
  //. .              Z[k].test (Pair (['foo']) (['bar'])) ? '\u2705 * ' :
  //. .              /* otherwise */                        '\u274C   '))
  //. .       (S.keys (S.unchecked.filter (S.is ($.TypeClass)) (Z)))
  //. [ 'Setoid          ✅ * ',  // if ‘a’ and ‘b’ satisfy Setoid
  //. . 'Ord             ✅ * ',  // if ‘a’ and ‘b’ satisfy Ord
  //. . 'Semigroupoid    ✅   ',
  //. . 'Category        ❌   ',
  //. . 'Semigroup       ✅ * ',  // if ‘a’ and ‘b’ satisfy Semigroup
  //. . 'Monoid          ❌   ',
  //. . 'Group           ❌   ',
  //. . 'Filterable      ❌   ',
  //. . 'Functor         ✅   ',
  //. . 'Bifunctor       ✅   ',
  //. . 'Profunctor      ❌   ',
  //. . 'Apply           ✅ * ',  // if ‘a’ satisfies Semigroup
  //. . 'Applicative     ❌   ',
  //. . 'Chain           ✅ * ',  // if ‘a’ satisfies Semigroup
  //. . 'ChainRec        ❌   ',
  //. . 'Monad           ❌   ',
  //. . 'Alt             ❌   ',
  //. . 'Plus            ❌   ',
  //. . 'Alternative     ❌   ',
  //. . 'Foldable        ✅   ',
  //. . 'Traversable     ✅   ',
  //. . 'Extend          ✅   ',
  //. . 'Comonad         ✅   ',
  //. . 'Contravariant   ❌   ' ]
  //. ```

  //# Pair :: a -> b -> Pair a b
  //.
  //. Pair's sole data constructor. Additionally, it serves as the
  //. Pair [type representative][].
  //.
  //. ```javascript
  //. > Pair (1) (2)
  //. Pair (1) (2)
  //. ```
  function Pair(fst) {
    return function(snd) {
      var pair = Object.create (prototype);
      if (Z.Setoid.test (fst) && Z.Setoid.test (snd)) {
        pair['fantasy-land/equals'] = Pair$prototype$equals;
        if (Z.Ord.test (fst) && Z.Ord.test (snd)) {
          pair['fantasy-land/lte'] = Pair$prototype$lte;
        }
      }
      if (Z.Semigroup.test (fst)) {
        if (Z.Semigroup.test (snd)) {
          pair['fantasy-land/concat'] = Pair$prototype$concat;
        }
        pair['fantasy-land/ap'] = Pair$prototype$ap;
        pair['fantasy-land/chain'] = Pair$prototype$chain;
      }
      pair.fst = fst;
      pair.snd = snd;
      return pair;
    };
  }

  //# Pair.fst :: Pair a b -> a
  //.
  //. `fst (Pair (x) (y))` is equivalent to `x`.
  //.
  //. ```javascript
  //. > Pair.fst (Pair ('abc') ([1, 2, 3]))
  //. 'abc'
  //. ```
  Pair.fst = function(p) { return p.fst; };

  //# Pair.snd :: Pair a b -> b
  //.
  //. `snd (Pair (x) (y))` is equivalent to `y`.
  //.
  //. ```javascript
  //. > Pair.snd (Pair ('abc') ([1, 2, 3]))
  //. [1, 2, 3]
  //. ```
  Pair.snd = function(p) { return p.snd; };

  //# Pair.swap :: Pair a b -> Pair b a
  //.
  //. `swap (Pair (x) (y))` is equivalent to `Pair (y) (x)`.
  //.
  //. ```javascript
  //. > Pair.swap (Pair ('abc') ([1, 2, 3]))
  //. Pair ([1, 2, 3]) ('abc')
  //. ```
  Pair.swap = function(p) { return Pair (p.snd) (p.fst); };

  //# Pair.@@type :: String
  //.
  //. Pair [type identifier][].
  //.
  //. ```javascript
  //. > type (Pair ('abc') ([1, 2, 3]))
  //. 'sanctuary-pair/Pair@1'
  //.
  //. > type.parse (type (Pair ('abc') ([1, 2, 3])))
  //. {namespace: 'sanctuary-pair', name: 'Pair', version: 1}
  //. ```
  Pair['@@type'] = 'sanctuary-pair/Pair@1';

  //# Pair#@@show :: (Showable a, Showable b) => Pair a b ~> () -> String
  //.
  //. `show (Pair (x) (y))` is equivalent to
  //. `'Pair (' + show (x) + ') (' + show (y) + ')'`.
  //.
  //. ```javascript
  //. > show (Pair ('abc') ([1, 2, 3]))
  //. 'Pair ("abc") ([1, 2, 3])'
  //. ```
  function Pair$prototype$show() {
    return 'Pair (' + show (this.fst) + ') (' + show (this.snd) + ')';
  }

  //# Pair#fantasy-land/equals :: (Setoid a, Setoid b) => Pair a b ~> Pair a b -> Boolean
  //.
  //. `Pair (x) (y)` is equal to `Pair (v) (w)` [iff][] `x` is equal to `v`
  //. and `y` is equal to `w` according to [`Z.equals`][].
  //.
  //. ```javascript
  //. > S.equals (Pair ('abc') ([1, 2, 3])) (Pair ('abc') ([1, 2, 3]))
  //. true
  //.
  //. > S.equals (Pair ('abc') ([1, 2, 3])) (Pair ('abc') ([3, 2, 1]))
  //. false
  //. ```
  function Pair$prototype$equals(other) {
    return Z.equals (this.fst, other.fst) && Z.equals (this.snd, other.snd);
  }

  //# Pair#fantasy-land/lte :: (Ord a, Ord b) => Pair a b ~> Pair a b -> Boolean
  //.
  //. `Pair (x) (y)` is less than or equal to `Pair (v) (w)` [iff][] `x` is
  //. less than `v` or `x` is equal to `v` and `y` is less than or equal to
  //. `w` according to [`Z.lte`][].
  //.
  //. ```javascript
  //. > S.filter (S.lte (Pair ('b') (2)))
  //. .          ([Pair ('a') (1), Pair ('a') (2), Pair ('a') (3),
  //. .            Pair ('b') (1), Pair ('b') (2), Pair ('b') (3),
  //. .            Pair ('c') (1), Pair ('c') (2), Pair ('c') (3)])
  //. [ Pair ('a') (1),
  //. . Pair ('a') (2),
  //. . Pair ('a') (3),
  //. . Pair ('b') (1),
  //. . Pair ('b') (2) ]
  //. ```
  function Pair$prototype$lte(other) {
    return Z.equals (this.fst, other.fst) ? Z.lte (this.snd, other.snd)
                                          : Z.lte (this.fst, other.fst);
  }

  //# Pair#fantasy-land/compose :: Pair a b ~> Pair b c -> Pair a c
  //.
  //. `compose (Pair (x) (y)) (Pair (v) (w))` is equivalent to `Pair (v) (y)`.
  //.
  //. ```javascript
  //. > S.compose (Pair ('a') (0)) (Pair ([1, 2, 3]) ('b'))
  //. Pair ([1, 2, 3]) (0)
  //. ```
  function Pair$prototype$compose(other) {
    return Pair (this.fst) (other.snd);
  }

  //# Pair#fantasy-land/concat :: (Semigroup a, Semigroup b) => Pair a b ~> Pair a b -> Pair a b
  //.
  //. `concat (Pair (x) (y)) (Pair (v) (w))` is equivalent to
  //. `Pair (concat (x) (v)) (concat (y) (w))`.
  //.
  //. ```javascript
  //. > S.concat (Pair ('abc') ([1, 2, 3])) (Pair ('xyz') ([4, 5, 6]))
  //. Pair ('abcxyz') ([1, 2, 3, 4, 5, 6])
  //. ```
  function Pair$prototype$concat(other) {
    return Pair (Z.concat (this.fst, other.fst))
                (Z.concat (this.snd, other.snd));
  }

  //# Pair#fantasy-land/map :: Pair a b ~> (b -> c) -> Pair a c
  //.
  //. `map (f) (Pair (x) (y))` is equivalent to `Pair (x) (f (y))`.
  //.
  //. ```javascript
  //. > S.map (Math.sqrt) (Pair ('abc') (256))
  //. Pair ('abc') (16)
  //. ```
  function Pair$prototype$map(f) {
    return Pair (this.fst) (f (this.snd));
  }

  //# Pair#fantasy-land/bimap :: Pair a c ~> (a -> b, c -> d) -> Pair b d
  //.
  //. `bimap (f) (g) (Pair (x) (y))` is equivalent to `Pair (f (x)) (g (y))`.
  //.
  //. ```javascript
  //. > S.bimap (S.toUpper) (Math.sqrt) (Pair ('abc') (256))
  //. Pair ('ABC') (16)
  //. ```
  function Pair$prototype$bimap(f, g) {
    return Pair (f (this.fst)) (g (this.snd));
  }

  //# Pair#fantasy-land/ap :: Semigroup a => Pair a b ~> Pair a (b -> c) -> Pair a c
  //.
  //. `ap (Pair (v) (f)) (Pair (x) (y))` is equivalent to
  //. `Pair (concat (v) (x)) (f (y))`.
  //.
  //. ```javascript
  //. > S.ap (Pair ('abc') (Math.sqrt)) (Pair ('xyz') (256))
  //. Pair ('abcxyz') (16)
  //. ```
  function Pair$prototype$ap(other) {
    return Pair (Z.concat (other.fst, this.fst)) (other.snd (this.snd));
  }

  //# Pair#fantasy-land/chain :: Semigroup a => Pair a b ~> (b -> Pair a c) -> Pair a c
  //.
  //. `chain (f) (Pair (x) (y))` is equivalent to
  //. `Pair (concat (x) (fst (f (y)))) (snd (f (y)))`.
  //.
  //. ```javascript
  //. > S.chain (n => Pair (show (n)) (Math.sqrt (n))) (Pair ('abc') (256))
  //. Pair ('abc256') (16)
  //. ```
  function Pair$prototype$chain(f) {
    var other = f (this.snd);
    return Pair (Z.concat (this.fst, other.fst)) (other.snd);
  }

  //# Pair#fantasy-land/reduce :: Pair a b ~> ((c, b) -> c, c) -> c
  //.
  //. `reduce (f) (x) (Pair (v) (w))` is equivalent to `f (x) (w)`.
  //.
  //. ```javascript
  //. > S.reduce (S.concat) ([1, 2, 3]) (Pair ('abc') ([4, 5, 6]))
  //. [1, 2, 3, 4, 5, 6]
  //. ```
  function Pair$prototype$reduce(f, x) {
    return f (x, this.snd);
  }

  //# Pair#fantasy-land/traverse :: Applicative f => Pair a b ~> (TypeRep f, b -> f c) -> f (Pair a c)
  //.
  //. `traverse (_) (f) (Pair (x) (y))` is equivalent to
  //. `map (Pair (x)) (f (y))`.
  //.
  //. ```javascript
  //. > S.traverse (Array) (S.words) (Pair (123) ('foo bar baz'))
  //. [Pair (123) ('foo'), Pair (123) ('bar'), Pair (123) ('baz')]
  //. ```
  function Pair$prototype$traverse(typeRep, f) {
    return Z.map (Pair (this.fst), f (this.snd));
  }

  //# Pair#fantasy-land/extend :: Pair a b ~> (Pair a b -> c) -> Pair a c
  //.
  //. `extend (f) (Pair (x) (y))` is equivalent to
  //. `Pair (x) (f (Pair (x) (y)))`.
  //.
  //. ```javascript
  //. > S.extend (S.reduce (S.add) (1)) (Pair ('abc') (99))
  //. Pair ('abc') (100)
  //. ```
  function Pair$prototype$extend(f) {
    return Pair (this.fst) (f (this));
  }

  //# Pair#fantasy-land/extract :: Pair a b ~> () -> b
  //.
  //. `extract (Pair (x) (y))` is equivalent to `y`.
  //.
  //. ```javascript
  //. > S.extract (Pair ('abc') ([1, 2, 3]))
  //. [1, 2, 3]
  //. ```
  function Pair$prototype$extract() {
    return this.snd;
  }

  return Pair;

}));

//. [Fantasy Land]:             v:fantasyland/fantasy-land
//. [`Z.equals`]:               v:sanctuary-js/sanctuary-type-classes#equals
//. [`Z.lte`]:                  v:sanctuary-js/sanctuary-type-classes#lte
//. [iff]:                      https://en.wikipedia.org/wiki/If_and_only_if
//. [type identifier]:          v:sanctuary-js/sanctuary-type-identifiers
//. [type representative]:      v:fantasyland/fantasy-land#type-representatives
