import { initializeSearch } from './partials/searchExemple.js';
import { initializeWeatherCard } from './partials/weather-cardExample.js';

document.addEventListener('DOMContentLoaded', async () => {
  initializeSearch(); // Inițializează bara de căutare
  initializeWeatherCard(); // Inițializează cardul meteo și afișează datele pentru București
});
