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
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad0e5d911d6ca005bd9012bcc9c8a180&lang=ua`;

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        writeWeather(weatherData);

    } catch (error) {
        console.log('An error occurred while fetching weather data:', error);
    }
}

function writeWeather(weatherData) {
    let weather = weatherData.weather[0];
    console.log(weather);
}
