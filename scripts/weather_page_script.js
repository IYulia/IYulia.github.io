  //DARK THEME 
  function addOrRemoveTheme() {
    const theme = document.getElementById('them');
    if (theme.className == "theme-light") {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
      localStorage.setItem('theme', 'dark');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const theme = document.getElementById('them');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
    }
  });
  

function formatDate(date) {
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[dayIndex];
  
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day}, ${hours}:${minutes}`;
  }
  
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[day];
  }
  
  function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");
  
    let forecastHTML = `<div class="row">`;
    forecast.forEach(function (forecastDay, index) {
      if (index < 5) {
        forecastHTML =
          forecastHTML +
          `
        <div class="col">
          <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
            <img
              src="http://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span>${Math.round(forecastDay.temp.max)}°</span>
              <span class="weather-forecast-temperature-min">${Math.round(
                forecastDay.temp.min
              )}°</span>
            </div>
          </div>
      `;
      }
    });
  
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }
  
  function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "5774896606a665a971e1d85a7e44770f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }
  
  function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
  
    celsiusTemperature = response.data.main.temp;
  
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
  
    getForecast(response.data.coord);
  }
  
  function searchCity(city) {
    let apiKey = "5774896606a665a971e1d85a7e44770f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
  }
  
  function searchLocation(position) {
    let apiKey = "5774896606a665a971e1d85a7e44770f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function showFahrenheitTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  }
  
  function showCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }
  
  let dateElement = document.querySelector("#date");
  let now = new Date();
  dateElement.innerHTML = formatDate(now);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  let celsuisTemperature = null;
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", showFahrenheitTemperature);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", showCelsiusTemperature);
  
  searchCity("Kyiv");
  