"use strict";

let names = [];
let whoAmI = 'What is my name';
let day = 'What day is it today';
let todo = [];
let myTodoList = 'What is on my todo';
let favoriteDish = [];
let event = [];
let eventList = 'What am I doing this week';

function getReply(command) {

    // 1. To save the person's name and returning nice to meet you along the person's name
    if (command.startsWith('Hello') && command.includes('name')) {
        let commandArray = command.split(' ')
        let name = commandArray[commandArray.length - 1]
        names.push(name)
        return `Nice to meet you ${names[names.length -1]}`;
    }

    //If you ask for your name and you have introduced yourself you'll get your name
    if (command === whoAmI && names.length !== 0) {
        return `Your  ${names[names.length -1]}`;
    }
    //If you ask for your name without introducing yourself
    if (command === whoAmI && names.length === 0) {
        return `Please tell me your name and I'll remember it for next time`
    }
    //Logging out what day today is in format 02. April 2020
    if (command === day) {
        let monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        return `Today is ${day}. of ${monthsOfTheYear[month]} ${year}`;
    }
    if (command.includes('what is') && command.split(' ')[command.split(' ').length - 1] === Number) {
        let mathEquation = command.split(' ')
        console.log(mathEquation)
    }
    //Adding things to todo
    if (command.startsWith("Add") && command.endsWith("todo")) {
        let addTodoWord = command.split(' ');
        let wordToAdd = addTodoWord[1]
        todo.push(wordToAdd);
        return `${wordToAdd} added to your todo`;
    }
    //Removing things from todo
    if (command.startsWith('Remove') && command.endsWith('todo')) {
        let removeTodoWord = command.split(' ');
        let wordToRemove = removeTodoWord[1]
        return `${wordToRemove} removed from your todo`
    }
    //Logging out todo
    if (command === myTodoList) {
        return `You have ${todo.join(" and ")} in your todo`;
    }
    //Saving favorite dish
    if (command.startsWith('My favorite') && command.includes('dish')) {
        let dishWordArray = command.split(' ')
        let dishWord = dishWordArray[dishWordArray.length - 1]
        favoriteDish.push(dishWord)
        return `favorite dish saved`
    }
    //Logging out favorite dish
    if (command.startsWith('What is') && command.endsWith('favorite dish') && favoriteDish.length !== 0) {
        return `Your favorite dish is ${favoriteDish.join( " and ")}`
    }
    //Setting timer
    if (command.startsWith('Set a timer')) {
        let timerArray = command.split(' ')
        let counter = timerArray[5]
        let timeForAlarm = timerArray[4]
        let timeToMillisecond = timeForAlarm * 60 * 1000
        //Giving out alarm when time is up
        setTimeout(function () {
            alert("Timer done");
        }, timeToMillisecond);
        return `Timer set for ${timeForAlarm} ${counter}`
    }
    //Adding things to calendar
    if (command.startsWith('Add') && command.endsWith('calendar')) {
        let thingsOnCalendarArray = command.split(' ')
        let thingsToAddTOCalendar = thingsOnCalendarArray[1]
        let thingsToAddTOCalendarDate = thingsOnCalendarArray[3]
        event.push({
            name: thingsToAddTOCalendar,
            date: thingsToAddTOCalendarDate
        })
        return `${thingsToAddTOCalendar} on ${thingsToAddTOCalendarDate} added to your calendar `
    }
    //Loggging out event in calendar
    if (command === eventList && event.length !== 0) {
        return `You have ${event.length} event in your calendar : ${event[0].name} on ${event[0].date}`
    }
}

/* Adding two numbers

if (command.startsWith('What is') && typeof(command[2] = "number") && typeof(command[4] = "number")) {
    let ArithmaticArray = command.split(' ');
          let num1 = Number(mathCommand[2]);
          let sign = mathCommand[3];
          let num2 = Number(mathCommand[4]); */


console.log(getReply('What is my name'))
console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name'))
console.log(getReply('What day is it today'))
console.log(getReply('Add football to my todo'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Remove fishing from my todo'))
console.log(getReply('Add gym to my todo'))
console.log(getReply('What is on my todo'))
console.log(getReply('My favorite dish is Rissoto'))
console.log(getReply('What is my favorite dish'))
console.log(getReply('Set a timer for 5 minute'))
console.log(getReply('Add conference the 3/5/2019 to my calendar'))
console.log(getReply('What am I doing this week'))