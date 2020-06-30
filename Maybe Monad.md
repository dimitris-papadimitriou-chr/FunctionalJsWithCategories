The problem of null or undefined is one of the biggest problems in computation theory. If we want to write meaningful programs, we must accept the fact that some computations might yield no result. The usual way object-oriented languages deal with this is by checking the types for not being undefined in order to use them. Any developer knows the number of bugs that have as source the problem of undefined. 

 
## Dealing with null - Null object Design pattern

The classical solution is using conditionals everywhere to check for null. 

```javascript
 if (result) {   

 result.operation();  

}  else  {    //do  nothing   }   
```

 Run This: [Js Fiddle](https://jsfiddle.net/functionalCategories/gnd4skyx/)  
 

This reduces the cohesion of the codebase, because we must tightly couple to code relating to the cross-cutting concern of null checking. 

## The Null Object Design pattern

A more elegant solution to the problem of Null is the “Null Object”  design pattern. The null object pattern is a special case of the  strategy design pattern. Here **instead of setting something as null** we can set it as `NullObject`, were `NullObject` methods are empty or they don’t do nothing.

 
The fact that `NullObject `is designed in a way that if it is feed to the any method that waits for a `RealObject `type should not create any effect or throw any exceptions.

## The Functional equivalent — Maybe as Functor

Now the Maybe functor idea takes this line of reasoning one step further, by abstracting the null Object mechanism inside a functor. Thus, instead of applying the objects on functions, we reverse the flow by applying the functions onto objects. Now, we can isolate the effect inside a single point; the “map.”

After all this discussion, hopefully, the implementation of maybe functor would be apparent

```javascript
var some = (v) => ({
    map: (f) => some(f(v)), 
    matchWith: pattern => pattern.some(v),
});
var none = () => ({
    map: (f) => none(),
    matchWith: pattern => pattern.none(v),
});
```

we can use the class notation to write the same thing  

```javascript
 class Maybe {
    map(f) {
      throw new Error('You have to implement the method map!');
    }
    matchWith(pattern) {
      throw new Error('You have to implement the method matchWith!');
    }
  }

  class Some extends Maybe {
    constructor(value) {
      super();
      this.value = value;
    }   
    map(f) {
      return new Some(f(this.value))
    }
    matchWith(pattern) {
      return pattern.some(this.value)
    }
  }

  class None extends Maybe {
    map(f) {
      return new None();
    }
    matchWith(pattern) {
      return pattern.none()
    }
  }
```

the Maybe.matchWith implementation for Maybe is used in order to get out the value out of the Maybe and it is called pattern matching. Essentially pattern matching is the functional equivalent to Polymorphism.  We can use the maybe Functor like this :

 
## Maybe Functor Example

Here we will have a Repository that searches in an array and returns the first matching client with a given Id or a null if there is no client with such id. Normally without using the Maybe we should write something like the following  : 

 
but using maybe as functor we can refactor this into the following  : 

```javascript
var clientRepository = ({
    getById: (id) => 
    fetchClientsMock()
    .firstOrNone(c => c.id == id)
  });

  clientRepository.getById(1)
    .map(client => client.name)
    .matchWith({
      some: value => console.log(`the client name is ${value}`),
      none: () => console.log(`there is no client with that id `)
    })
```

<iframe width="100%" height="300" src="//jsfiddle.net/dimitrs_papadimitriou/nuh92f5m/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

in this case we extended the Array and added  the firstOrNone method that hides the null checking and replacing it with a maybe 

```javascript
  Array.prototype.firstOrNone = function (predicate) {
    var result = this.find(predicate);
    if (result)
      return some(result)
    else
      return none()
  }
```
 
# Maybe as Monad

In order to make this maybe implementation into a Monad we have to provide a **bind** method that combines two Maybe monads into one. 

```javascript
const some = (v) => ({
  v: v,
  map: (f) => some(f(v)),
  bind: (f) => f(v),
});

const none = () => ({
  v: null,
  map: (f) => none(),
  bind: (f) => none(),
});
```

There are 4  different ways to combine the 2 possible states of maybe (some,none)one  can see that a valid implementation would be the following :

there are four possible combinations of 2 maybe’s

```javascript
some(x).bind(none)  A
none( ).bind(some)  B
some(x).bind(some)  C
none( ).bind(none)  D                                                 
```

  run this [fiddle](https://jsfiddle.net/functionalCategories/jaxy5emb)




to display in a realistic example how to use Maybe.bind we are going to extend the previous Functor example by adding an Employee repository and we are going to relate the Clients with some Employee by adding an EmployeeId to the client objects :

```javascript
  clientRepository
  .getById(2) 
  .bind(client=>employeesRepository.getById(client.employeeId))
  .map(client => client.name)
  .matchWith({
      some: value => console.log(`the client name is ${value}`),
      none: () => console.log(`no employee found`)
    })
```

  <iframe width="100%" height="300" src="//jsfiddle.net/dimitrs_papadimitriou/m5wtec2q/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
