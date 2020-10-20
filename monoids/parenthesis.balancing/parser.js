import { Balance } from "./balance.js";

export let parse = (c) => {
    switch (c) {
        case "(":
            return Balance.Left;
        case ")":
            return Balance.Right;
        default:
            return Balance.Empty;
    }
};
