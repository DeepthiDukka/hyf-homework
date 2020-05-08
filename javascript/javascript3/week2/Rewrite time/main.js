//Rewrite time
//setTimeout
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
setTimeoutPromise(3000)
    .then(() => {
        console.log("Called after 3 seconds");
    });

// Navigator
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}
getCurrentLocation()
    .then(position => {
        // called when the users position is found
        console.log(position);
    })
    .catch(error => {
        // called if there is an error getting the user's location
        console.log(error);
    });