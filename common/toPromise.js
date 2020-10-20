export let toPromise = function (defaultReject) {
    return maybe => new Promise((resolve, reject) => {
        maybe.match({
            some: v => resolve(v),
            none: () => reject(defaultReject)
        })
    })
}
