const COORDS = "coords";
const API_KEY = "eeefe5acc39c4c4049be76dcb6b2bcc2";
const weather = document.querySelector(".js-weather");
let thermometerInside = document.querySelector(".thermometerInside");
thermometerInside.style.marginTop = "-40px";
let thermometerInsideValue = window.getComputedStyle(thermometerInside, null).getPropertyValue("margin-top");


function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function (response) {
    return response.json();
  }).then(function (json) {
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature}º<br>@${place}`;
    thermometerInsideValue = (temperature * -5) + 205;
    thermometerInside.style.marginTop = thermometerInsideValue;
  })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log(`Can't access geo location`);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (!loadedCoords) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
