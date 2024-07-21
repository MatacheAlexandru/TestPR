import { initializeSearch } from './partials/search.js';
import { initializeWeatherCard } from './partials/weather-card.js';

document.addEventListener('DOMContentLoaded', async () => {
  initializeSearch(); // Inițializează bara de căutare
  initializeWeatherCard(); // Inițializează cardul meteo și afișează datele pentru București
});
