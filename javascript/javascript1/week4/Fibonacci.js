/*Fibonacci Sequence

0, 1, 1, 2, 3, 5, 8, 13, 21, 34

fib(5) // 3
fib(10) // 34 */

function fib(number) {
    let number1 = 0;
    let number2 = 1;
    let number3;

    const sequence = [];
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

    for (let i = 0; i < number; i++) {
        sequence.push(number1);
        number3 = number2 + number1;
        number1 = number2;
        number2 = number3;

    }
    return sequence; //return currentNumber
}

const seq = fib(10);
console.log(seq);