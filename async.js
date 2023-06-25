// Making our own promises


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log("DONE WITH REQUEST")
    console.log("Data is:", data)
})
.catch((err) => {
    console.log("OH NO!!", err)
})