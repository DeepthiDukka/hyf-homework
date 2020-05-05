let appId = "054aa182ca9d4cf5d85e9a319eaa6af1";
let units = "metric";

// To receive weather data from the given zipcode,country code
function getSearchMethod(searchTerm) {
  return Number.parseInt(searchTerm[0]) ? "zip" : "q";
}

//Fetch weather data from a city
function searchWeather(searchTerm) {
  const searchMethod = getSearchMethod(searchTerm);
  fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}
 // Fetch background image according to the returned weather data
function init(resultFromServer) {
  switch (resultFromServer.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = 'url("clear.jpg")';
      break;

    case "Clouds":
      document.body.style.backgroundImage = "url('cloudy.jpg')";

      break;
    case "Rain":
    case "Drizzle":
    case "Mist":
      document.body.style.backgroundImage = "url('rain.jpg')";
      break;

    case "Thunderstorm":
      document.body.style.backgroundImage = "url('storm.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('snow.jpg')";
      break;
    default:
      break;
  }

  let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
  let temperatureElement = document.getElementById('temperature');
  let humidityElement = document.getElementById('humidity');
  let windSpeedElement = document.getElementById('windSpeed');
  let sunriseElement = document.getElementById('sunrise');
  let sunsetElement = document.getElementById('sunset');
  let cityHeader = document.getElementById('cityHeader');
  let weatherIcon = document.getElementById('documentIconImg');
  weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

  let resultDescription = resultFromServer.weather[0].description;
  weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

  //to render temperature
  temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176' + 'C';

  //to render windspeed
  windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + ' m/s ';
  
  //to render city name
  cityHeader.innerHTML = resultFromServer.name;

  
  //to render humidity
  humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + ' % ';

  //to render sunrise and sunset
  sunriseElement.innerHTML = `Sunrise:  ${new Date(resultFromServer.sys.sunrise * 1000).toLocaleTimeString([],{timeStyle : 'short'})}`;
  sunsetElement.innerHTML = `Sunset: ${new Date(resultFromServer.sys.sunset * 1000).toLocaleTimeString([], {timeStyle : 'short'})}`;
  setPositionForWeatherInfo();
}

//function for the weather container to be visible once the city details are given by user
function setPositionForWeatherInfo() {
  let weatherContainer = document.getElementById('weatherContainer');
  weatherContainer.style.visibility = 'visible';
}

//for current position button
document.getElementById("btn2").addEventListener('click', getLocation);
document.getElementById("searchBtn").addEventListener("click", () => {
  let searchTerm = document.getElementById("searchInput").value;

  if (searchTerm) {
    searchWeather(searchTerm);
  } else if (searchTerm === "") {
    document.getElementById("message").textContent = "Please enter city name or Correct city name";

  }
})

//Optional a map showing where the city is located
function renderLocationOnGoogleMap(lat, lng, temperature) {
  const mapDiv = document.getElementById("map");
  const map = new google.maps.Map(mapDiv, {
    center: {
      lat,
      lng
    },
    zoom: 10.5
  });

  const marker = new google.maps.Marker({
    //my time to create unique feature
    position: {
      lat,
      lng
    },
    map: map,
    // zoom: 10,
    label: {
      color: "darkblue",
      fontWeight: "bold",
      fontSize: "28px",
      padding:"12px",
      text: `${Math.floor(temperature - 273.15)} °C`
    }
  }); 
  console.log(map);
} 

function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
// renderLocationOnGoogleMap(lat, lon) 

      const mapUrl =
        "https://api.openweathermap.org/data/2.5/weather?lat=" + lat+
        "&lon=" +
        lon +
        "&appid=" +
        appId;
 fetch(mapUrl)
        .then(async (response) => {
          const responseData = await response.json();
            localStorage.setItem("City", responseData.name);
            localStorage.setItem("Country", responseData.sys.country);
          renderLocationOnGoogleMap(lat,lon, responseData.main.temp) 
        })
    });
    
}