const PIXABAY_API_KEY = '24587351-f51ecbfdd1a1ed72c58205b43';
const PIXABAY_BASE_URL = 'https://pixabay.com/api';

// Funcție generală pentru cereri către Pixabay API
async function fetchFromPixabay(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

// Obține o imagine random pentru un oraș specificat
async function getRandomImageByCity(city) {
  const url = `${PIXABAY_BASE_URL}/?key=${PIXABAY_API_KEY}&q=${city}&image_type=photo&per_page=3`; // Ajustat per_page la o valoare validă
  console.log('Fetching image from URL:', url); // Log pentru verificarea URL-ului
  return await fetchFromPixabay(url);
}

export { getRandomImageByCity };
