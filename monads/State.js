export var State = expression => ({
    map: f =>
        State(previousState => {
            var { value, state } = expression(previousState);
            return { value: f(value), state: state };
        }),
    bind: f =>
        State(previousState => {
            var { value, state } = expression(previousState);
            var newState = f(value).run(state);
            return newState;
        }),
    run: previousState => expression(previousState)
});
