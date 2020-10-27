export let eitherToPromise = either => new Promise((resolve, reject) => {
    either.match({
        right: value => resolve(value),
        left: error => reject(error)
    })
})

