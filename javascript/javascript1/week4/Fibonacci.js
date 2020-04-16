/*Fibonacci Sequence

0, 1, 1, 2, 3, 5, 8, 13, 21, 34

fib(5) // 3
fib(10) // 34 */

function fib(number) {
    let presentNumber;
    let currentNumber = 0;
    let nextNumber = 1;

    const sequence = [];
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

    for (let i = 0; i < number; i++) {
        sequence.push(currentNumber);
        presentNumber = currentNumber;
        currentNumber = nextNumber + currentNumber;
        nextNumber = presentNumber;
    }
    return sequence; //return currentNumber
}

const seq = fib(10);
console.log(seq);