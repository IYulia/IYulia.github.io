async function searchWeather() {
    const countryInput = document.getElementById('country');
    const country = countryInput.value;

    if (!country) {
        console.log('Please enter a country.');
        return;
    }

    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=ad0e5d911d6ca005bd9012bcc9c8a180`;

    try {
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            console.log('No results found for the specified country.');
            return;
        }

        const { lat, lon } = geoData[0];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ad0e5d911d6ca005bd9012bcc9c8a180&lang=ua`;

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        createWeather(country, weatherData);

    } catch (error) {
        console.log('An error occurred while fetching weather data:', error);
    }
}

function createWeather(country, weatherData) {

    const weather = weatherData.weather[0];
    const divWeatherInfo = document.getElementById('weather-info');
    let weatherDescription = weather.description;
    let temp = Math.floor(weatherData.main.temp);
    let sunrise = weatherData.sys.sunrise;
    let sunset = weatherData.sys.sunset;
    let wind = weatherData.wind.speed;

    let sunriseTime = getSunriseSunsetTime(sunrise);
    let sunsetTime = getSunriseSunsetTime(sunset);
    const weatherTitel = document.getElementById('weatherTitel');
    weatherTitel.innerHTML = country;

    const html = `
                  <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                  <p class="weatherDescription">${weatherDescription}</p>
                  <h2 class="weatherTemp">${temp}&#8451;</h2>
                  <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                  <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                  <p class="windSpeed">Wind Speed: ${wind} m/s</p>`;

    divWeatherInfo.innerHTML = html;

    divWeatherInfo.style.borderWidth = '1px';
    divWeatherInfo.style.borderStyle = 'solid';
    divWeatherInfo.style.borderColor = 'rgb(113, 113, 113)';
    divWeatherInfo.style.borderRadius = "20px"

    ///////////////////////////////
    const divWeatherInfo2 = document.getElementById("weather-info2")
    console.log(divWeatherInfo2)

    const html2 = `
                  <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                  <p class="weatherDescription">${weatherDescription}</p>
                  <h2 class="weatherTemp">${temp}&#8451;</h2>
                  <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                  <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                  <p class="windSpeed">Wind Speed: ${wind} m/s</p>`;

    divWeatherInfo2.innerHTML = html2;

    divWeatherInfo2.style.borderWidth = '1px';
    divWeatherInfo2.style.borderStyle = 'solid';
    divWeatherInfo2.style.borderColor = 'rgb(113, 113, 113)';
    divWeatherInfo2.style.borderRadius = "20px"

}

function getSunriseSunsetTime(timestamp) {
    const totalSeconds = timestamp;
    const date = new Date(totalSeconds * 1000);
    const timeString = date.toLocaleTimeString().substr(0, 8);
    return timeString;
}

function getRandom(number){
    let random = Math.floor(Math.random() * 10) + 1
    let randomNumber = number + random
    return randomNumber
}