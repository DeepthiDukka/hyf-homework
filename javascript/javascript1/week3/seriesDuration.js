/* Series duration of my life */

const seriesDurations = [{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Quantico',
        days: 1,
        hours: 16,
        minutes: 51,
    },
    {
        title: 'Altered Carbon',
        days: 6,
        hours: 1,
        minutes: 4,
    }
];

let total = 0;
for (let i = 0; i < seriesDurations.length; i++) {
    let totalMinutesToHours = seriesDurations[i].minutes / 60;
    let totalHours = totalMinutesToHours + seriesDurations[i].hours;
    let totalHoursToDays = (totalHours / 24);
    let totalDays = totalHoursToDays + seriesDurations[i].days;
    let totalYears = Number((totalDays / 365).toFixed(3));
    let avgLifeSpan = 80;
    let percentForEachSeries = Number((totalYears * 100 / avgLifeSpan).toFixed(2));
    seriesDurations[i].years = percentForEachSeries;
    let titlesOfEachSeries = seriesDurations[i].title;
    console.log((`${titlesOfEachSeries} took ${percentForEachSeries}% of my life`));
    total += seriesDurations[i].years;

}
console.log(`In total that is ${total}% of my life`);

//As per the given feedback : Series Duration code using functions:

const seriesDurations1 = [{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Quantico',
        days: 1,
        hours: 16,
        minutes: 51,
    },
    {
        title: 'Altered Carbon',
        days: 6,
        hours: 1,
        minutes: 4,
    }
];

function calculatePercentage(years) {
    return Number(years * 100 / 80).toFixed(4);
}

function calculateYears(days, hours, minutes) {
    const newHours = hours + (minutes / 60);
    const newDays = days + (newHours / 24);
    const years = (newDays / 365);
    return years;
}

function calculateTimeTakenInMyLife(seriesTime) {
    let totalTime = 0;
    for (let i = 0; i < seriesTime.length; i++) {
        const time = calculateYears(seriesTime[i].days, seriesTime[i].hours, seriesTime[i].minutes);
        totalTime += time;
        console.log(seriesTime[i].title + " took " + calculatePercentage(time) + "% of my life");
    }
    return totalTime;
}
const totalTime = calculateTimeTakenInMyLife(seriesDurations1);
console.log("In total that is " + calculatePercentage(totalTime) + "% of my life");