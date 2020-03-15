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