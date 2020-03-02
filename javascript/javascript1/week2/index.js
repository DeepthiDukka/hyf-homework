function logString(stringToLog,numberOfTimesToLog) {
let result = ""
  for (let i = 0; i < numberOfTimesToLog; i++) {
    result += stringToLog;
}
return result;
}
const myString = logString('hi ',7);
console.log(myString);



/*2. Dog age calculator*/

let dogYearOfBirth = 2019;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - dogYearOfBirth;
let dogYear = 7 * humanYear;
let shouldShowResultInDogYears = dogYear;

if (shouldShowResultsInDogYears=true) {
        console.log(`Your dog age will be ${dogYear} dog years old in 2027.`);

} else {
        console.log(`Your dog age will be ${ humanYear} human years old in 2027.`);

}





/*for (let i = 74; i <= 98; i++) {
  console.log(i); 
}*/






/*
function getCircleArea(radius) {

        return Math.PI * radius * radius;
    }
 
const area = getCircleArea(5);
console.log (area.toFixed(2));

function celciusToFahreneit(celcius) {

   return celcius *1.8 + 32;
}

const myTempInCelcius = 0;
const myTempInFahreneit = celciusToFahreneit(myTempInCelcius);
console.log(myTempInFahreneit);*/





















/*const balance = 10000;


if (balance < 0) {
  console.log('Please earn some money!');
} else if (balance >= 0 && balance < 1000) {
  console.log('Your balance is looking okay');
}
else if (balance >= 1000 && balance < 3000) {
    console.log('Your balance is looking good');
  }
  else if (balance >= 3000 && balance < 10000) {
    console.log('Your balance is fantastic');
  }
  else {
    console.log('Your balance is AMAZING');
  }*/
