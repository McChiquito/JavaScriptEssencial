function showweatherDetails(event) {
    event.preventDefault();
}

const city = document.getElementById('city').value;
    const apiKey = 'cf0738b9d7f64f95d5b88f2afdc8e3f3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data,name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;<p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
    })

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails );

