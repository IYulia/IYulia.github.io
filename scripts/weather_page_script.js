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
        country.value = " "
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

    // 2
    const divWeatherInfo2 = document.getElementById("weather-info2")
    let temp2 = getRandom(temp);
    let wind2 = get_Random_Wind(wind)

   sunriseTime = getSunriseSunsetTime(sunrise - 80);
   sunsetTime = getSunriseSunsetTime(sunset + 80);

    const html2 = `
                  <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                  <p class="weatherDescription">${weatherDescription}</p>
                  <h2 class="weatherTemp">${temp2}&#8451;</h2>
                  <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                  <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                  <p class="windSpeed">Wind Speed: ${wind2} m/s</p>`;

    divWeatherInfo2.innerHTML = html2;

    divWeatherInfo2.style.borderWidth = '1px';
    divWeatherInfo2.style.borderStyle = 'solid';
    divWeatherInfo2.style.borderColor = 'rgb(113, 113, 113)';
    divWeatherInfo2.style.borderRadius = "20px"
    
    // 3
    const divWeatherInfo3 = document.getElementById("weather-info3")
    let temp3 = get_Random(temp2);
    let wind3 = get__Random_Wind(wind2)

    sunriseTime = getSunriseSunsetTime(sunrise - 70);
    sunsetTime = getSunriseSunsetTime(sunset + 70);

    const html3 = `
                  <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                  <p class="weatherDescription">${weatherDescription}</p>
                  <h2 class="weatherTemp">${temp3}&#8451;</h2>
                  <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                  <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                  <p class="windSpeed">Wind Speed: ${wind3} m/s</p>`;

    divWeatherInfo3.innerHTML = html3;

    divWeatherInfo3.style.borderWidth = '1px';
    divWeatherInfo3.style.borderStyle = 'solid';
    divWeatherInfo3.style.borderColor = 'rgb(113, 113, 113)';
    divWeatherInfo3.style.borderRadius = "20px"
   // 4
   const divWeatherInfo4 = document.getElementById("weather-info4")
   let temp4 = getRandom(temp3);
   let wind4 = get_Random_Wind(wind3)

   sunriseTime = getSunriseSunsetTime(sunrise - 60);
   sunsetTime = getSunriseSunsetTime(sunset + 60);

   const html4 = `
                 <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                 <p class="weatherDescription">${weatherDescription}</p>
                 <h2 class="weatherTemp">${temp4}&#8451;</h2>
                 <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                 <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                 <p class="windSpeed">Wind Speed: ${wind4} m/s</p>`;

   divWeatherInfo4.innerHTML = html4;

   divWeatherInfo4.style.borderWidth = '1px';
   divWeatherInfo4.style.borderStyle = 'solid';
   divWeatherInfo4.style.borderColor = 'rgb(113, 113, 113)';
   divWeatherInfo4.style.borderRadius = "20px"
   
   // 5
   const divWeatherInfo5 = document.getElementById("weather-info5")
   let temp5 = get_Random(temp4);
   let wind5 = get__Random_Wind(wind4)

   sunriseTime = getSunriseSunsetTime(sunrise - 50);
   sunsetTime = getSunriseSunsetTime(sunset + 50);

   const html5 = `
                 <img class="weatherImg" src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="">
                 <p class="weatherDescription">${weatherDescription}</p>
                 <h2 class="weatherTemp">${temp5}&#8451;</h2>
                 <p class="sunriseTime">Sunrise: ${sunriseTime}</p>
                 <p class="sunsetTime">Sunset: ${sunsetTime}</p>
                 <p class="windSpeed">Wind Speed: ${wind5} m/s</p>`;

   divWeatherInfo5.innerHTML = html5;

   divWeatherInfo5.style.borderWidth = '1px';
   divWeatherInfo5.style.borderStyle = 'solid';
   divWeatherInfo5.style.borderColor = 'rgb(113, 113, 113)';
   divWeatherInfo5.style.borderRadius = "20px"
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
function get_Random(number){
    let random = Math.floor(Math.random() * 10) + 1
    let randomNumber = number - random
    return randomNumber
}

function get_Random_Wind(number){
    let random = Math.floor(Math.random() * 1) + 1
    let randomNumber = number + random
    return randomNumber
}
function get__Random_Wind(number){
    let random = Math.floor(Math.random() * 1) + 1
    let randomNumber = number - random
    return randomNumber
}