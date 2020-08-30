//Movies api url
const moviesApiUrl =
	'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

//Array of bad movies and array of bad movies since year 2000
fetch(moviesApiUrl)
	.then(response => response.json())
	.then(movies => {
		const badMovies = movies.filter(movie => movie.rating < 4);
		console.log(badMovies);
		const badMoviesSinceYear2000 = badMovies.filter(movie => movie.year > 2000);
		console.log(badMoviesSinceYear2000);
		const badMoviesTitleSince2000 = badMoviesSinceYear2000.map(movie => movie.title);
		console.log(badMoviesTitleSince2000);
	});