/* Step 3: Smart-ease - Back to the basics! 

NOnoN0nOYes (Note taking app)   */
let notes = [];
// content is a string and id is a number
function addNote(content, id) {
    if (typeof id !== 'number') {
        return "id has to be of type number";
    }

    if (typeof content !== 'string') {
        return "content has to be of type string";
    }
    const obj = {
        content,
        id
    };
    notes.push(obj);
}

function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return 'Item with id' + 'not found';
}

function returnNotes() {
    return notes;
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id:" + notes[i].id, "has the following note text: " + notes[i].content);
    }
}
console.log(notes);
addNote('this is a string', 1);
addNote('Javascript is important', 2);
console.log(notes);
logOutNotesFormatted();