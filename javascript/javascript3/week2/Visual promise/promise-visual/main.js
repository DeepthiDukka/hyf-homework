const redCircle = document.querySelector('ul.marks li:nth-child(1)');
const blueCircle = document.querySelector('ul.marks li:nth-child(2)');
const greenCircle = document.querySelector('ul.marks li:nth-child(3)');

// translateOneByOne function 

function translateOneByOne() {
    moveElement(redCircle, {
            x: 20,
            y: 300
        })
        .then(() => {
            console.log('Redcircle has been moved');
        })
        .then(() => moveElement(blueCircle, {
            x: 400,
            y: 300
        }))
        .then(() => {
            console.log('Bluecircle has been moved');
        })
        .then(() => moveElement(greenCircle, {
            x: 400,
            y: 20
        }))
        .then(() => {
            console.log('Greencircle has been moved');
        });
}
//translateOneByOne();

// translateAllAtOnce function

function translateAllAtOnce() {
    Promise.all([
        moveElement(redCircle, {
            x: 20,
            y: 300
        }),
        moveElement(blueCircle, {
                x: 400,
                y: 300
            },
            moveElement(greenCircle, {
                x: 400,
                y: 20
            })),
    ]).then(() => console.log('All circles has been moved'));
}

// to translate all at once 
translateAllAtOnce();