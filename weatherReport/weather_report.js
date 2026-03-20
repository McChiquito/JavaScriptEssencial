function showweatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    const apiKey = "cf0738b9d7f64f95d5b88f2afdc8e3f3";

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid coordinates or API error");
            }
            return response.json();
        })
        .then(data => {

            document.getElementById("weatherInfo").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherInfo").innerHTML =
                `<p style="color:red">${error.message}</p>`;
        });
}

document
    .getElementById("weatherForm")
    .addEventListener("submit", showweatherDetails);