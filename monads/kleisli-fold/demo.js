import { Some, None } from "../Maybe.js"
//https://stackblitz.com/edit/id-kleisli-fold?file=index.js

export function demo() {

    var composeK = (f, g) => a => f(a).bind(g);
    var foldK = maybesK => maybesK.reduce((comp, f) => composeK(comp, f), x => Some(x));

    //validations in kleisli x->Maybe<{name,age}> form
    var validationsK = [
        x => (x.name.length > 0 ? Some(x) : None()), //some validation for the name
        x => (x.age > 25 ? Some(x) : None()) //some validation for the age
    ];

    var overallValidationK = foldK(validationsK);




    var validationResult = overallValidationK({ name: "jane", age: 25 }).match({
        some: x => `employee: ${x.name} is valid`,
        none: _ => `could not validate employee`
    });

    console.log(validationResult);

    {
        var validationResult = overallValidationK({ name: "jane", age: 30 }).match({
            some: x => `employee: ${x.name} is valid`,
            none: _ => `could not validate employee`
        });

        console.log(validationResult);
    }




}
