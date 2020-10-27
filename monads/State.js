export var State = (expression) => ({
    expression: expression,
    map: f => State(environment => {
        var evaluation = expression(environment);
        console.log(evaluation)
        return ({ value: f(evaluation.value), state: evaluation.state });
    }),
    bind: f => State(environment => {
        var evaluation = expression(environment);
        var previousStateValue = evaluation.value
        var newState = f(previousStateValue).run(evaluation.state)
        return newState;
    }),
    run: environment => expression(environment),
});
