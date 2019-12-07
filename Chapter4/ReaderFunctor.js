var demo = function () {

  Reader = (expr) => ({
    expr: expr,
    map: f => Reader (env=>f(Reader (expr).run(env))) ,
    run: env => expr(env), 
});

var reader = Reader (g => g.x1);
var result = reader.map(x=>x*3).run({x1:20});
console.log(result)

 
 
}



module.exports = demo;


