/* Flight booking fullname function */

function getFullname(firstname, surname, useFormalName) {
    if (firstname === "") {
        return "please enter your firstname ";
    } else if (surname === "") {
        return firstname + " !" + " Please enter your surname ";
    } else if (useFormalName) {
        return "Lord" + " " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }

}
const fullname1 = getFullname("Deepthi", "");
const fullname2 = getFullname("Supriya", "Dukka", true);

console.log(fullname1);
console.log(fullname2);

/* Event application */


function getEventWeekday(whatDayEventHeld) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDate = new Date();
    let day = currentDate.getDay();
    let n = (day + whatDayEventHeld) % 7;
    return "The event is on: " + weekDays[n];
}

console.log(getEventWeekday(9));


/* Weather wear */

function weatherWear(temperature) {

    if (temperature >= 0 && temperature <= 4) {
        return "Parka Jakke , Sweater and woolen trouser";
    } else if (temperature > 4 && temperature <= 8) {
        return "Jacket , Sweater and jeans";
    } else if (temperature > 8 && temperature <= 15) {
        return "Jean Jakke , t-shirt and Jeans";
    } else {
        return "shorts and t-shirts";
    }
}


weatherWear(3);

/*Student manager*/
let class07Students = [];

function addStudentToClass(studentName) {
    if (class07Students.length >= 6 && studentName !== "Queen") {
        alert("Cannot add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        alert("Student " + studentName + " is already in the class");
    } else if (!studentName.trim()) {
        alert("You cannot add an empty string to class 07");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    console.log(class07Students);
    console.log(getNumberOfStudents());
    return class07Students.length;

}

/*addCandy function*/
let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
    let amountSpent = 0,
        i = 0;
    while (i < boughtCandyPrices.length) {
        amountSpent += boughtCandyPrices[i];
        i++;
    }
    if (amountToSpend > amountSpent) {
        return "You can buy more, so please do!";
    } else {
        return "Enough candy for you!";
    }
}

function addCandy(candyType, weight) {
    let calculatedPrice;
    if (candyType === "sweet") {
        calculatedPrice = weight * 0.5;
    } else if (candyType === "chocolate") {
        calculatedPrice = weight * 0.7;
    } else if (candyType === "toffee") {
        calculatedPrice = weight * 1.1;
    } else if (candyType === "chewing-gum") {
        calculatedPrice = weight * 0.3;
    }
    boughtCandyPrices.push(calculatedPrice);
    return canBuyMoreCandy();
}

addCandy("sweet", 20);
amountToSpend