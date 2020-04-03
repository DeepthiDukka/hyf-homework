// just for reference
console.log(movies.length);

// 1. To create an array of movies containing the movies with a short title
const shortMovieTitles = movies.filter(movies => movies.title.length < 6);
console.log(shortMovieTitles);

// 2. to create an array of movie titles with long movie titles
const longMovieTitles = movies.filter(movies => movies.title.length > 65);
console.log(longMovieTitles);

// 3. to count the number of movies made between 1980-1989 (including both the years)
const moviesBetween1980And1989 = movies.filter(movies => movies.year >= 1980 && movies.year <= 1989);
console.log(moviesBetween1980And1989);

// 4. Create a new array with extra key called 'tag'. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const extraKeyCalledTag = movies.map(movie => {
	if (movie.rating >= 7) {
		movie.tag = `Good`;
		return movie;
	} else if (movie.rating >= 4) {
		movie.tag = `Average`;
		return movie;
	} else if (movie.rating < 4) {
		movie.tag = `Bad`;
		return movie;
	}
});

console.log(extraKeyCalledTag);

// 5. chaining, movies rated higher than 6

const moviesRatedHigherThan6 = movies
	.filter(movie => movie.rating > 6)
	.map(movie => `movie : ${movie.title}, rating : ${movie.rating}`);

console.log(moviesRatedHigherThan6);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin

const countAllMoviesContainingKeywords = movies.filter(movie => {
	const movieNamesArray = movie.title.toLowerCase().split(' ');
	if (
		movieNamesArray.includes('surfer') ||
		movieNamesArray.includes('alien') ||
		movieNamesArray.includes('benjamin')
	) {
		return movie;
	}
}).length;
console.log(countAllMoviesContainingKeywords);


// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
const duplicatedWordsInTitles = [];

movies.map(movie => movie.title.split(' '))
	.forEach(title => title.filter((word, index) => title.indexOf(word) !== index ? duplicatedWordsInTitles.push(word) : false));
console.log(duplicatedWordsInTitles);

// 8. Find the word that is mostly duplicated using sort

let wordCount = [];

movies
	.map(movie => movie.title)
	.forEach(title => {
		title.split(" ").forEach(word => {
			let pos = wordCount
				.map(e => e.word.toLowerCase())
				.indexOf(word.toLowerCase());
			if (pos !== -1) {
				wordCount[pos].count += 1;
			} else {
				wordCount.push({
					word: word.toLowerCase(),
					count: 1
				});
			}
		});
	});

wordCount.sort((a, b) => b.count - a.count);

console.log(
	`The most duplicated word is "${wordCount[0].word}". It's duplicated ${wordCount[0].count} times.`
);


// 9. average rating of all movies using reduce.

const averageRating = movies.reduce((acc, movie) => (acc += movie.rating / movies.length), 0).toFixed(2);
console.log(`The average rating of the movies array is ${averageRating}`);

// 10. Count the total number of Good,Average, Bad movies

const countTotalNumber = movies.reduce(
	(acc, movie) => {
		if (movie.tag === 'Good') {
			acc.good += 1;
		} else if (movie.tag === 'Average') {
			acc.average += 1;
		} else {
			acc.bad += 1;
		}
		return {
			...acc
		};
	}, {
		good: 0,
		average: 0,
		bad: 0
	}
);

console.log(countTotalNumber);