"use strict";

//The fastest presser in this realm
// 1. Create an input and a button in html. When the button is clicked, get the value of the input. This value will be the amount of time the game should run.
const clickButton = document.querySelector('.start');
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
    window.location.reload();
})
const pTagg = document.createElement('p');
document.body.appendChild(pTagg);
const mainClick = clickButton.addEventListener("click", () => {
    const selectInput = document.querySelector("input").value;
    pTagg.textContent = `${selectInput} Seconds Left`;


    //2. Set a timeout for the time specified by the user. After that time has run out just log out a simple string.
    let timer = selectInput;
    const setTime = setInterval(() => {
        timer -= 1;
        pTagg.textContent = `${timer} Seconds Left`;
        if (timer === 0) {
            clearInterval(setTime);
            pTagg.textContent = "Game 🤷‍ Over";

        }
    }, 1000);
    if (selectInput == "") {
        clearInterval(setTime);
        pTagg.textContent = "Enter 🕒 in seconds";

    }

    // 3. Create an event listener so you can call a function when any key is pressed. Now grap the actual key that was pressed. Fx was it a j or an i. We are interested in s and l. Here google is your friend!
    // 4. Keep a counter for how many times l and s was pressed.  

    let PressSCount = 0;
    let lCount = 0;

    const isGameRunning = () => selectInput > 0 && timer > 0;
    const setup = document.body.addEventListener("keypress", event => {
        if (event.keyCode === 115 && isGameRunning()) {
            //keyCode supports all browsers, which supports all but internetexploral 9.0 only
            PressSCount++;
            document.querySelector(".s-clicks").textContent = PressSCount;
        } else if (event.keyCode === 108 && isGameRunning()) {
            lCount++;
            document.querySelector(".l-clicks").textContent = lCount;
        }
    });
    // 5.
    setTimeout(() => {
        if (PressSCount > lCount) {
            var confettiSettings = {
                target: "confetti-holder"
            };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            document.querySelector(".won-s").textContent =
                "Hurray! you won the game";
        } else if (lCount > PressSCount) {
            var confettiSettings = {
                target: "my-canvas"
            };
            var confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            document.querySelector(".won-l").textContent =
                `Hurray! you won the game`;
        } else if (PressSCount === lCount && selectInput) {
            let draw = document.querySelector(".draw");
            draw.textContent = "Game draw";
        }
    }, selectInput * 1000);
    clickButton.disabled = false;
});