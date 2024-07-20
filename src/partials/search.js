import { fetchAndDisplayWeatherForCity } from './weather-card.js';

export function initializeSearch() {
  document
    .getElementById('search-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const city = document.getElementById('city-input').value.trim();
      if (city) {
        fetchAndDisplayWeatherForCity(city);
      }
    });
}
