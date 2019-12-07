var demo = function () {


  var Reader = (expr) => ({
    expr: expr,
    map: f => Reader (env=>f(Reader (expr).run(env))) ,
    run: env => expr(env), 
});
 
const titleViewTemplate = Reader(({ firstName, lastName }) => `<div>${firstName} - ${lastName} </div>` )
 
var titleView  = titleViewTemplate.run({firstName:"dimitris", lastName:"papadim"});
//console.log(titleView);//<div>dimitris - papadim </div>
$(`#container`).append(titleView)

var addToSpan  = titleViewTemplate.map( x=>`<span> this is a span${x}</span>`).run({firstName:"dimitris", lastName:"papadim"});
$(`#container`).append(addToSpan)

//console.log(addToSpan); //<span><div>dimitris - papadim </div></span>
 
 
}



module.exports = demo;


