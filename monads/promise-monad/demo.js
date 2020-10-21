export function demo() {
    //resolve.bind(reject)==reject
    Promise.resolve(3)
        .then(x => Promise.reject("error2"))
        .then(v => console.log(`A-Promise.resolve:${v}`))
        .catch(error => console.log(`A-Promise.reject:${error}`));

    //reject.bind(resolve)==reject
    Promise.reject("error1")
        .then(x => Promise.resolve(5 + x))
        .then(v => console.log(`B-Promise.resolve:${v}`))
        .catch(error => console.log(`B-Promise.reject :${error}`));

    //reject.bind(reject)==reject
    Promise.reject("error1")
        .then(x => Promise.reject("error2"))
        .then(v => console.log(`C-Promise.resolve:${v}`))
        .catch(error => console.log(`C-Promise.reject :${error}`));

    //resolve.bind(resolve)==resolve
    Promise.resolve(3)
        .then(x => Promise.resolve(5 + x))
        .then(v => console.log(`D-Promise.resolve:${v}`))
        .catch(error => console.log(`D-Promise.reject: ${error}`));
}
