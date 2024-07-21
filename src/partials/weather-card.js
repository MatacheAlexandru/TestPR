import { getWeatherByCityName } from '../apiOpenWeather.js';
import { getRandomImages } from '../apiPixabay.js';

export function displayWeatherDataOnCard(data) {
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const humidityElement = document.getElementById('humidity');
  const weatherCardElement = document.getElementById('weather-card');

  if (
    cityNameElement &&
    temperatureElement &&
    descriptionElement &&
    humidityElement &&
    weatherCardElement
  ) {
    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    // Obține și afișează imaginea orașului
    getRandomImages(data.name, 1, 3) // Cerem trei imagini pentru a evita erorile de validare
      .then(imageData => {
        console.log('Image data:', imageData); // Log pentru verificarea datelor imaginii
        if (imageData && imageData.hits && imageData.hits.length > 0) {
          weatherCardElement.style.backgroundImage = `url(${imageData.hits[0].webformatURL})`;
          weatherCardElement.style.backgroundSize = 'cover';
        }
      })
      .catch(error => {
        console.error('Error fetching image from Pixabay API:', error);
      });
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
