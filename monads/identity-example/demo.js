
//this type only purpose is to store the value v in order to witness the mechanics
const Id = (v) => ({
    v: v,
    map: f => Id(f(v)),
    bind: f => f(v),
});


export function demo() {

    // map 
    let result1 = Id(5).map(x => Id(x + 2)); 
    console.log(JSON.stringify(result1));

    //bind
    let result2 = Id(5).bind(x => Id(x + 2));
    console.log(JSON.stringify(result2));
}
