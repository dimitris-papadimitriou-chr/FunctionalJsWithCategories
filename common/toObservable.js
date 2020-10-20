 
import Rx from "rxjs";

export let toObservable = function (defaultError) {
    return maybe => new Rx.Observable(subscriber => {
        maybe.match({
            some: v => subscriber.next(v),
            none: () => subscriber.error(defaultError)
        });
    });
};
