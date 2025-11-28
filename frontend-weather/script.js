async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `http://localhost:8081/api/weather/${city}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
        `;
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            "<p style='color:red;'>City not found!</p>";
    }
}
