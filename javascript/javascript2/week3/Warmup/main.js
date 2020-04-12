// 1. called after 2.5 seconds
const lateFunction = function () {
    console.log("Called after 2.5 seconds!");
}

setTimeout(lateFunction, 2500) // 2500 ms -> 2.5 s

// 2. function that takes 2 parameters: delay and stringToLog and called using setTimeout()
function delayedFunction(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
delayedFunction(5, "This string logged after 5 seconds");
delayedFunction(3, "This string logged after 3 seconds");

//3. adding the above exercise using button

const listenForClick = document.querySelector('button');
// console.log("Clicked");

const logOutText = () => console.log('Called after 5 secs');
listenForClick.addEventListener("click", () => {
    setTimeout(logOutText, 5 * 1000);
});

//4. Planet Log Function (2 functions assigned to 2 different variables)

const logsEarth = () => {
    console.log('Earth');
}

const logsSaturn = () => {
    console.log('Saturn');
}

function planetLogFunction(planet) {
    planet();
}

planetLogFunction(logsEarth);
planetLogFunction(logsSaturn);

//5. Log location
const body = document.querySelector('body');
const btnLocation = document.querySelector('.logLocation');
const para = document.createElement('p');
const para1 = document.createElement('p');

body.appendChild(para);
body.appendChild(para1);


btnLocation.addEventListener('click', getTheLocation);

function getTheLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    para.textContent = `The Latitude is: ${position.coords.latitude}`
    para1.textContent = `The Longitude is: ${position.coords.longitude}`


}


//7. Run after delay

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}

runAfterDelay(4, function () {
    console.log('Should be logged after 4 seconds');
})

//8. Double clicked on the page

document.addEventListener('dblclick', () => {
    console.log("double click!");
})

// 9.Function Jokecreator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }

}

jokeCreator(true, function logFunnyJoke() {
    console.log('Its a funny joke!');
}, function logBadJoke() {
    console.log('Its is Bad!');
});