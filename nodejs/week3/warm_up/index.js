const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Calculator using :method (path) parameter:
app.get('/calculator/:method', (req, res) => {
    const arrayOfNumbers = Object.values(req.query);
    const merged = [].concat.apply([], arrayOfNumbers); // to add the same param twice
    const numbersToCalculate = merged.map(Number); // Calls Number on each value in the array (casting it to a number)
    if (req.params.method === 'multiply') {
        const productOfNumbers = numbersToCalculate.reduce((total, num) => total * num);
        res.send(`Multiplication answer is ${productOfNumbers}`);
    } else if (req.params.method === 'add') {
        const sumOfNumbers = numbersToCalculate.reduce((total, num) => total + num);
        res.send(`Addition answer is ${sumOfNumbers}`);
    } else if (req.params.method === 'divide') {
        const divisionOfNumbers = numbersToCalculate.reduce((total, num) => total / num);
        res.send(`Division answer is ${divisionOfNumbers}`);
    } else if (req.params.method === 'subtract') {
        const subtractionOfNumbers = numbersToCalculate.reduce((total, num) => total - num);
        res.send(`${subtractionOfNumbers}`);
    }
})

// http://localhost:3000/calculator/subtract?firstParam=1&secondParam=2
// http://localhost:3000/calculator/multiply?firstParam=2&secondParam=2&secondParam=2

//Calculator using req.body

app.post('/calculator', (req, res) => {
    console.log('body', req.body);
    const method = req.body.method;
    const arrayOfNumbers = Object.values(req.query);
    const merged = [].concat.apply([], arrayOfNumbers);
    const numbersToCalculate = merged.map(Number);

    if (method === 'multiply') {
        const productOfNumbers = numbersToCalculate.reduce((total, num) => total * num);
        res.send(`Multiplication answer is ${productOfNumbers}`);
    } else if (method === 'add') {
        const sumOfNumbers = numbersToCalculate.reduce((total, num) => total + num);
        res.send(`Addition answer is ${sumOfNumbers}`);
    } else if (method === 'divide') {
        const divisionOfNumbers = numbersToCalculate.reduce((total, num) => total / num);
        res.send(`Division answer is ${divisionOfNumbers}`);
    } else if (method === 'subtract') {
        const subtractionOfNumbers = numbersToCalculate.reduce((total, num) => total - num);
        res.send(`Subtraction answer is ${subtractionOfNumbers}`);
    }
})

// http://localhost:3000/calculator?firstParam=1&secondParam=2
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})