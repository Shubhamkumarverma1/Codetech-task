// Function to get weather data from OpenWeatherMap API
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();

  // Display data
  document.getElementById('weatherResult').innerHTML =
    `<h2>${data.name}</h2><p>${data.weather[0].description}</p><p>Temp: ${data.main.temp}°C</p>`;
}
