//Function as a variable

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const func1 = () => {
    console.log('I am function1');
}
const func2 = () => {
    console.log('I am function2');
}
const func3 = () => {
    console.log('I am function3');
}
const arr = [func1(), func2(), func3()];
arr.forEach((func) => {
    return func;
})


//Create a function as a const and try creating a function normally. Call both functions.
const myFunction = () => {
    console.log('my Function');
}

function myNormalFunction() {
    console.log('my noral Function');
}
myFunction();
myNormalFunction();


//Create an object that has a key whose value is a function. Try calling this function.
const object = {
    key: myFunction()
};
object.key;