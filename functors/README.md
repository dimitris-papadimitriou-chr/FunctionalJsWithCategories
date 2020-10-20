## What is a Functor  

In JavaScript one the most famous functional programming idea is to use `Array.map` to replace `for` loops iterations. That is because an array is a Functor, which is a more abstract idea that we will explore in this section.

> **Practically a Functor is a container that has a valid `.map()` method**

We will start by looking at the minimum structure that qualifies as a functor in javascript:

```javascript
 const Id = (v) => ({
  value: v,
  map: (f) => Id(f(v))
});

```

 

This is the minimum construction that we could call a functor because it has exactly two properties:

1. A “constructor” that maps a value v to an object  Id(v). Places the value in the container.
2. And it has a mapping method  map(f) that takes a function f:a→b and transforms an Id(a) to an Id(b)
 


- In our case the container is just the object literal  `({ _:_  })`, and we can place something inside. The first arrow that places items inside the container is the constructor of the Object.

- In our notation we don’t have a constructor  but the lambda arrow is the equivalent of a constructor `v=>({ _:v  })`. If you think about it, a constructor is just a function that takes some parameters as inputs and gives you an object.

## Chain Computations with the Id Functor 

The Id Functor is very simple and doesn’t do that much. *Nonetheless it allows us to **chain computations** using sequential `.map()` computations*:

```javascript
 
const Id = (v) => ({
  getValue: () => v,
  map: (f) => Id(f(v))
});

var result = Id(2)
  .map(x => x * x)
  .map(x => x.toString());

console.log(result.getValue());
```

 [Run this](https://stackblitz.com/edit/the-identity-functor-1?file=index.js) 
 

For a more realistic example usage of the chaining property of the map you can see the following snippet :

```javascript
import { Id } from "./Id.js"
import  { Client } from "./Client.js"

var upperCaseName = Id(new Client(1,"jake"))
.map(client=>client.name)
.map(name=>name.toUpperCase())
.getValue();

console.log(upperCaseName);
 
```

 [Run this](https://stackblitz.com/edit/the-identity-functor-2?file=index.js) 