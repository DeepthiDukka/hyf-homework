//Fetching data from an API URL using promise method:

const astronautsUrl =
	'http://api.open-notify.org/astros.json';

fetch(astronautsUrl)
	.then(response => response.json())
	.then(data => {
		setTimeout(() => {
			console.log(data);
		}, 3 * 1000);
    });
    
//Fetching data from an API URL using async and await method:

async function fetchAndWait(){
    const response = await fetch(astronautsUrl);
    const list = await response.json();
     setTimeout(() => {
        console.log(list);
        }, 3000) 
} 

try {
    fetchAndWait();
} catch (err) {
    console.log(err);
    
}
