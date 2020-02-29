/*1. Future age calculator*/
let yearOfBirth = 1989;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;
console.log('Your age will be either ' + age + ' or ' + (age - 1));

/*2. Dog age calculator*/

let dogYearOfBirth = 2019;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = 7 * humanYear;

if (shouldShowResultsInDogYears = true) {
        console.log(`Your dog age will be ${shouldShowResultInDogYears} dog years old in 2027.`);

} else {
        console.log(`Your dog age will be + ${ humanYear} + human years old in 2027.`);

}

/*3. Housey pricey (A house price estimator)*/
const volumeInMeters = [
    [8 * 10 * 10],
    [5 * 11 * 8]
];
const gardenSizeInM2 = [100, 70];
const petersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const juliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const peterAndJuliaHouseCost = [2500000, 1000000];
const peterAndJuliaHousePaid = [
    [peterAndJuliaHouseCost[0] - petersHousePrice],
    [juliaHousePrice - peterAndJuliaHouseCost[1]]
];
console.log("Peter has paid " + peterAndJuliaHousePaid[0] + " more than the actual house cost.");
console.log("Julia has paid " + peterAndJuliaHousePaid[1] + " less than the actual house cost.");

/*4. Ez Namey (Startup name generator) Optional*/
const firstWords = ["Easy", "Awesome", "Unique", "Spark", "Feature", "Tech", "Innovango", "Creative", "Coding", "ideal"];
const secondWords = ["Corp", "Lead", "Stack", "Jovia", "Algorial", "Gig", "Powergic", "Quant", "Hyper", "Smart"];
const wordsRandom = [firstWords[Math.floor(Math.random() * 10)],
        [secondWords[Math.floor(Math.random() * 10)]]
];
const startupName = wordsRandom[0].concat(" ", wordsRandom[1]);
const startupNameLength = startupName.length;
console.log(`The startup name ${startupName} and the number of characters are ${startupNameLength}.`);
