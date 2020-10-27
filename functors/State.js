export var State = expression => ({
    map: f =>
        State(environment => {
            var { value: value, state: state } = expression(environment);
            return { value: f(value), state: state };
        }),
    run: environment => expression(environment)
});
