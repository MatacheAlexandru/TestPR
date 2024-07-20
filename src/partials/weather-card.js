import { getWeatherByCityName } from '../apiServer.js';

export function displayWeatherDataOnCard(data) {
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const humidityElement = document.getElementById('humidity');

  if (
    cityNameElement &&
    temperatureElement &&
    descriptionElement &&
    humidityElement
  ) {
    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  } else {
    console.error('One or more elements not found in the DOM');
  }
}

export async function fetchAndDisplayWeatherForCity(city) {
  try {
    const data = await getWeatherByCityName(city);
    displayWeatherDataOnCard(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

export function initializeWeatherCard() {
  fetchAndDisplayWeatherForCity('București'); // Exemplu de utilizare la încărcarea paginii
}
