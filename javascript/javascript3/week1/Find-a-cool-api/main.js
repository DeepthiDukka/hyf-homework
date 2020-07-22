const apiUrl = "https://api.thecatapi.com/v1/images/search";

function fetchJSON(url) {
  return fetch(url).then(response => response.json())
}

document.querySelector('button').addEventListener('click', () => {
  fetchJSON(apiUrl)
    .then(json => {
      document.querySelector('img').src = json[0].url
    });
})


/* Explanation on how it works:

document.querySelector("button").addEventListener("click", () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(json => {
        document.querySelector("img").src = json[0].url;  //returns a random image
  });
});

1.The api 'https://api.thecatapi.com/v1/images/search' responds with the below data
[
{
"breeds": [],
"id": "mFpp3lf3C",
"url": "https://cdn2.thecatapi.com/images/mFpp3lf3C.jpg",
"width": 1536,
"height": 2048
}
]

2. It is an array[object]
  breeds: array[object]
  id: string
  url: string
  width and height: number */