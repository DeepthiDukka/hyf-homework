/* My favorite songs */

const songDatabase = [{
        songId: 1,
        title: 'My baby',
        artist: 'Soggy socks',
    },
    {
        songId: 2,
        title: '3 nails in wood',
        artist: 'The carpenters',
    },
    {
        songId: 3,
        title: 'Blacker than black',
        artist: 'Instant coffee',
    },
    {
        songId: 4,
        title: 'When is enough too little?',
        artist: 'The spies girls',
    },
];

function addSongToDatabase(song) {
    songDatabase.push(song);
    return songDatabase;
}

console.log(addSongToDatabase({
    songId: 5,
    title: "I love it when you call me señorita",
    artist: "Camila Cabello"
}));
console.log(addSongToDatabase({
    songId: 6,
    title: "Girls like you",
    artist: "Adam Levine"
}));

function getSongByTitle(title) {

    for (let i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title.includes(title)) {
            // if (songDatabase[i].title === title) {  // fuzzy search : works only when the complete string matches
            return (songDatabase[i]);
        }
    }
}

console.log(getSongByTitle('When is enough too'));
console.log(getSongByTitle("Girls like you"));

/* Create our own playlist */

let myPlaylist = [];

function addSongToMyPlaylist(title) {
    myPlaylist.push(getSongByTitle(title));

}
addSongToMyPlaylist('Blacker than black');
addSongToMyPlaylist('Girls like you');
console.log(myPlaylist);