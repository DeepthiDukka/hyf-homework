function gimmeFizzBuzzNumber(number) {

    let result = number;
    if (number % 3 === 0 && number % 5 === 0) {
        result = 'FizzBuzz';
    } else if (number % 3 === 0) {
        result = 'Fizz';
    } else if (number % 5 === 0) {
        result = 'Buzz';
    }
    return result;
}

const result = gimmeFizzBuzzNumber(15);
console.log('The result of number is', result);