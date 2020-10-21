export let toPromise = defaultReject =>
    maybe => new Promise((resolve, reject) => {
        maybe.match({
            some: v => resolve(v),
            none: () => reject(defaultReject)
        })
    })

