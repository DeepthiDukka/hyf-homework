// Api key for reference: p39R1wDbrvVj0DknOcq4lM9IJdvNhSz2

// Api link: https://api.giphy.com/v1/gifs/search?api_key=p39R1wDbrvVj0DknOcq4lM9IJdvNhSz2&q=smile

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=p39R1wDbrvVj0DknOcq4lM9IJdvNhSz2';

// Fetch the url
function fetchJsonUrl(url) {
	return fetch(url).then(response => response.json());
}

// Event Listener for the search input field & to fetch data with the given input value:
const body = document.querySelector('body');
const searchButton = document.querySelector('button');
const searchInput = document.querySelector('#searchText');
const searchNumber = document.querySelector('#searchNumber');

// Para if their is no search entered
const para = document.createElement('p');
body.appendChild(para);
searchButton.addEventListener('click', () => {
	const searchTerm = searchInput.value.toLowerCase();
	const limitValue = searchNumber.value;
	// Input value for Number of gif's
	if (searchTerm && limitValue) {
		const limitSearchUrl = `${apiUrl}&q=${searchTerm}&limit=${limitValue}`;
		fetchJsonUrl(limitSearchUrl).then(data => {
			renderGifs(data.data);
		});
	} else if (searchTerm) {
		const searchUrl = `${apiUrl}&q=${searchTerm}`;
		fetchJsonUrl(searchUrl).then(data => {
			renderGifs(data.data);
		});
	} else {
		para.textContent = 'please enter a search for gif';
	}
});
// Render gifs on to the DOM
function renderGifs(gifs) {
	const searchUl = document.querySelector('ul');
	searchUl.innerHTML = '';
	gifs.forEach(gif => {
		const searchResult = document.createElement('li');
		searchResult.classList.add('search-list');
		searchResult.innerHTML = '';
		searchResult.innerHTML = `
      <div><embed src="${gif.images.downsized.url}"></div>
      `;
		searchUl.appendChild(searchResult);
	});
}