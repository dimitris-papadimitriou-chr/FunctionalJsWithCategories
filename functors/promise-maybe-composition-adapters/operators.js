
export var PromiseMaybeT = (promiseMaybe) =>({  
   map: (f) =>PromiseMaybeT(promiseMaybe.then(maybe=>maybe.map(f)))  ,
   match: (pattern)=>PromiseMaybeT(promiseMaybe.then(maybe=>maybe.match(pattern))),
   unwrap:()=>promiseMaybe
 });
 
  