// Promise that resolves after set time
function getPromise(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I am called asynchronously after ' + resolveAfter + ' seconds');
        }, resolveAfter * 1000)
    })
}
getPromise(3).then(value => console.log(value));
getPromise(6).then(value => console.log(value));

//Using the promise with async and await

async function getValueWithAsync() {
    console.log('calling function');
    const value = await getPromise(5);
    console.log(`async result: ${value}`);
};
getValueWithAsync();