//Odd doubled Numbers using map and filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddDoublednumbers = numbers.filter(function (value) { // to check the odd numbers
    return value % 2 !== 0; // for odd numbers remainder not = 0
}).map(function (value) {
    return value * 2;
});
console.log(oddDoublednumbers);