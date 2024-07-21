### Legenda Documentație API

**Titlu Funcție:**

- Reprezintă numele funcției documentate, oferind o descriere sumară a ceea ce
  face funcția.

**Descriere Funcție:**

- O descriere detaliată a scopului și funcționalității funcției.

**Parametri:**

- O listă detaliată cu fiecare parametru pe care funcția îl acceptă, inclusiv:
  - **Numele parametrului:** Descrierea sa.
  - **Tipul de date:** Tipul de date al parametrului (e.g., string, number).
  - **Descriere:** Ce reprezintă parametrul și cum este utilizat.
  - **Implicit:** Valoarea implicită a parametrului, dacă există (opțional).

**Returnează:**

- O descriere a ceea ce returnează funcția, de obicei sub forma unui `Promise`,
  cu detalii despre tipul de date returnat și scopul acestuia.

**Exemplu de utilizare:**

- O secțiune de cod care demonstrează cum poate fi utilizată funcția în
  practică. Acesta ajută la clarificarea modului în care trebuie să fie apelată
  funcția și cum să se gestioneze valorile returnate.

---

# apiOpenWeather

---

````markdown
## Documentație pentru Funcțiile din `apiOpenWeather.js.js`

# 1. `fetchFromAPI(url)`

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

### Parametri:

- `url` (string): URL-ul pentru cererea API.

### Returnează:

- Un `Promise` care se rezolvă cu datele obținute de la API.

---

# 2. `getWeatherByCityName(city)`

Obține datele meteo actuale pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu datele meteo pentru orașul specificat.

### Exemplu de utilizare:

```javascript
import { getWeatherByCityName } from './apiServer.js';

getWeatherByCityName('București').then(data => {
  console.log(data);
});
```
````

---

# 3. `getWeatherByCoordinates(lat, lon)`

Obține datele meteo actuale pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu datele meteo pentru coordonatele specificate.

### Exemplu de utilizare:

```javascript
import { getWeatherByCoordinates } from './apiServer.js';

getWeatherByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 4. `getWeatherForecastByCityName(city)`

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru orașul specificat.

### Exemplu de utilizare:

```javascript
import { getWeatherForecastByCityName } from './apiServer.js';

getWeatherForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

# 5. `getWeatherForecastByCoordinates(lat, lon)`

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru coordonate
geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru coordonatele
  specificate.

### Exemplu de utilizare:

```javascript
import { getWeatherForecastByCoordinates } from './apiServer.js';

getWeatherForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 6. `get16DayForecastByCityName(city)`

Obține prognoza meteo pe 16 zile pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru orașul specificat.

### Exemplu de utilizare:

```javascript
import { get16DayForecastByCityName } from './apiServer.js';

get16DayForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

# 7. `get16DayForecastByCoordinates(lat, lon)`

Obține prognoza meteo pe 16 zile pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru coordonatele
  specificate.

### Exemplu de utilizare:

```javascript
import { get16DayForecastByCoordinates } from './apiServer.js';

get16DayForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 8. `getHourlyForecastByCityName(city)`

Obține prognoza meteo orară pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo orară pentru orașul specificat.

### Exemplu de utilizare:

```javascript
import { getHourlyForecastByCityName } from './apiServer.js';

getHourlyForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

# 9. `getHourlyForecastByCoordinates(lat, lon)`

Obține prognoza meteo orară pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo orară pentru coordonatele
  specificate.

### Exemplu de utilizare:

```javascript
import { getHourlyForecastByCoordinates } from './apiServer.js';

getHourlyForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 10. `getUVIndex(lat, lon)`

Obține indicele UV pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu indicele UV pentru coordonatele specificate.

### Exemplu de utilizare:

```javascript
import { getUVIndex } from './apiServer.js';

getUVIndex(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 11. `getAirPollution(lat, lon)`

Obține datele despre poluarea aerului pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu datele despre poluarea aerului pentru
  coordonatele specificate.

### Exemplu de utilizare:

```javascript
import { getAirPollution } from './apiServer.js';

getAirPollution(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 12. `getGeocoding(city)`

Obține coordonatele geografice pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu coordonatele geografice pentru orașul
  specificat.

### Exemplu de utilizare:

```javascript
import { getGeocoding } from './apiServer.js';

getGeocoding('București').then(data => {
  console.log(data);
});
```

---

# 13. `getReverseGeocoding(lat, lon)`

Obține numele locației pentru coordonate geografice specificate (geocodare
inversă).

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu numele locației pentru coordonatele
  specificate.

### Exemplu de utilizare:

```javascript
import { getReverseGeocoding } from './apiServer.js';

getReverseGeocoding(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 14. `getHistoricalWeather(lat, lon, date)`

Obține datele meteo istorice pentru coordonate geografice specificate și o dată
specificată.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `date` (number): Data în format UNIX timestamp.

### Returnează:

- Un `Promise` care se rezolvă cu datele meteo istorice pentru coordonatele și
  data specificată.

### Exemplu de utilizare:

```javascript
import { getHistoricalWeather } from './apiServer.js';

const date = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
getHistoricalWeather(44.4268, 26.1025, date).then(data => {
  console.log(data);
});
```

---

# 15. `getWeatherAlerts(lat, lon)`

Obține alertele meteo pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu alertele meteo pentru coordonatele
  specificate.

### Exemplu de utilizare:

```javascript
import { getWeatherAlerts } from './apiServer.js';

getWeatherAlerts(44.4268, 26.

1025).then(data => {
  console.log(data);
});
```

---

# 16. `getWeatherMap(layer, zoom, x, y)`

Obține hărți meteo pentru straturi specifice (precipitații, nori, temperatură
etc.).

### Parametri:

- `layer` (string): Tipul de strat (precipitații, nori, temperatură etc.).
- `zoom` (number): Nivelul de zoom.
- `x` (number): Coordonata X.
- `y` (number): Coordonata Y.

### Returnează:

- Un `Promise` care se rezolvă cu răspunsul imaginii hărții meteo.

### Exemplu de utilizare:

```javascript
import { getWeatherMap } from './apiServer.js';

getWeatherMap('precipitation', 5, 10, 10).then(response => {
  console.log(response.url);
});
```

---

# 17. `getCurrentAndForecast(lat, lon)`

Obține datele meteo curente și prognoza pentru coordonate specifice.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu datele meteo curente și prognoza pentru
  coordonatele specifice.

### Exemplu de utilizare:

```javascript
import { getCurrentAndForecast } from './apiServer.js';

getCurrentAndForecast(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 18. `getAirPollutionForecast(lat, lon)`

Obține prognoza pentru poluarea aerului pentru coordonate geografice specifice.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza pentru poluarea aerului pentru
  coordonatele specificate.

### Exemplu de utilizare:

```javascript
import { getAirPollutionForecast } from './apiServer.js';

getAirPollutionForecast(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 19. `getAirPollutionHistory(lat, lon, start, end)`

Obține istoricul poluării aerului pentru coordonate geografice specificate între
datele de start și end (în format UNIX timestamp).

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `start` (number): Data de start în format UNIX timestamp.
- `end` (number): Data de end în format UNIX timestamp.

### Returnează:

- Un `Promise` care se rezolvă cu istoricul poluării aerului pentru coordonatele
  și perioada specificată.

### Exemplu de utilizare:

```javascript
import { getAirPollutionHistory } from './apiServer.js';

const start = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
const end = Math.floor(Date.now() / 1000); // Acum
getAirPollutionHistory(44.4268, 26.1025, start, end).then(data => {
  console.log(data);
});
```

---

# 20. `getWeatherStations(lat, lon)`

Obține date despre stațiile meteo pentru coordonate geografice specificate.

### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

### Returnează:

- Un `Promise` care se rezolvă cu datele despre stațiile meteo pentru
  coordonatele specificate.

### Exemplu de utilizare:

```javascript
import { getWeatherStations } from './apiServer.js';

getWeatherStations(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

# 21. `getClimateForecast30Days(city)`

Obține prognoza climatică pe 30 de zile pentru un oraș specificat.

### Parametri:

- `city` (string): Numele orașului.

### Returnează:

- Un `Promise` care se rezolvă cu prognoza climatică pentru orașul specificat.

### Exemplu de utilizare:

```javascript
import { getClimateForecast30Days } from './apiServer.js';

getClimateForecast30Days('București').then(data => {
  console.log(data);
});
```

---

# 22. `getHistoricalWeatherByCityName(city, start, end)`

Obține date meteo istorice pentru un oraș specificat între datele de start și
end (în format UNIX timestamp).

### Parametri:

- `city` (string): Numele orașului.
- `start` (number): Data de start în format UNIX timestamp.
- `end` (number): Data de end în format UNIX timestamp.

### Returnează:

- Un `Promise` care se rezolvă cu datele meteo istorice pentru orașul și
  perioada specificată.

### Exemplu de utilizare:

```javascript
import { getHistoricalWeatherByCityName } from './apiServer.js';

const start = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
const end = Math.floor(Date.now() / 1000); // Acum
getHistoricalWeatherByCityName('București', start, end).then(data => {
  console.log(data);
});
```

---

# apiPixabay.js

---

## Documentație pentru Funcțiile din `apiPixabay.js`

### 1. `fetchFromAPI(url)`

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

#### Parametri:

- `url` (string): URL-ul pentru cererea API.

#### Returnează:

- Un `Promise` care se rezolvă cu datele obținute de la API.

---

### 2. `searchImages(query, page = 1, perPage = 20)`

Obține imagini după un cuvânt cheie.

#### Parametri:

- `query` (string): Termenul de căutare (cuvânt cheie).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu datele imaginii pentru termenul de căutare
  specificat.

#### Exemplu de utilizare:

```javascript
import { searchImages } from './apiPixabay.js';

searchImages('București').then(data => {
  console.log(data);
});
```

---

### 3. `searchVideos(query, page = 1, perPage = 20)`

Obține videouri după un cuvânt cheie.

#### Parametri:

- `query` (string): Termenul de căutare (cuvânt cheie).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu datele videourilor pentru termenul de căutare
  specificat.

#### Exemplu de utilizare:

```javascript
import { searchVideos } from './apiPixabay.js';

searchVideos('București').then(data => {
  console.log(data);
});
```

---

### 4. `getImageDetails(imageId)`

Obține detalii despre o imagine după ID.

#### Parametri:

- `imageId` (number): ID-ul imaginii.

#### Returnează:

- Un `Promise` care se rezolvă cu detaliile imaginii specificate.

#### Exemplu de utilizare:

```javascript
import { getImageDetails } from './apiPixabay.js';

getImageDetails(123456).then(data => {
  console.log(data);
});
```

---

### 5. `getVideoDetails(videoId)`

Obține detalii despre un video după ID.

#### Parametri:

- `videoId` (number): ID-ul videoului.

#### Returnează:

- Un `Promise` care se rezolvă cu detaliile videoului specificat.

#### Exemplu de utilizare:

```javascript
import { getVideoDetails } from './apiPixabay.js';

getVideoDetails(123456).then(data => {
  console.log(data);
});
```

---

### 6. `getPopularImages(category = '', editorsChoice = false, page = 1, perPage = 20)`

Obține imagini populare.

#### Parametri:

- `category` (string): Categoria imaginilor (implicit gol).
- `editorsChoice` (boolean): Selectarea editorilor (implicit false).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu imaginile populare pentru parametrii
  specificați.

#### Exemplu de utilizare:

```javascript
import { getPopularImages } from './apiPixabay.js';

getPopularImages('nature', true).then(data => {
  console.log(data);
});
```

---

### 7. `getPopularVideos(category = '', editorsChoice = false, page = 1, perPage = 20)`

Obține videouri populare.

#### Parametri:

- `category` (string): Categoria videourilor (implicit gol).
- `editorsChoice` (boolean): Selectarea editorilor (implicit false).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu videourile populare pentru parametrii
  specificați.

#### Exemplu de utilizare:

```javascript
import { getPopularVideos } from './apiPixabay.js';

getPopularVideos('nature', true).then(data => {
  console.log(data);
});
```

---

### 8. `getRandomImages(query, page = 1, perPage = 3)`

Obține imagini aleatorii pentru un cuvânt cheie (ex. oraș).

#### Parametri:

- `query` (string): Termenul de căutare (cuvânt cheie).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 3).

#### Returnează:

- Un `Promise` care se rezolvă cu imaginile aleatorii pentru termenul de căutare
  specificat.

#### Exemplu de utilizare:

```javascript
import { getRandomImages } from './apiPixabay.js';

getRandomImages('București').then(data => {
  console.log(data);
});
```

---

### 9. `getRandomVideos(category = '', page = 1, perPage = 20)`

Obține videouri aleatorii.

#### Parametri:

- `category` (string): Categoria videourilor (implicit gol).
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu videourile aleatorii pentru parametrii
  specificați.

#### Exemplu de utilizare:

```javascript
import { getRandomVideos } from './apiPixabay.js';

getRandomVideos('nature').then(data => {
  console.log(data);
});
```

---

### 10. `getImagesByColor(color, page = 1, perPage = 20)`

Obține imagini după culoare.

#### Parametri:

- `color` (string): Culoarea dorită.
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu imaginile filtrate după culoare.

#### Exemplu de utilizare:

```javascript
import { getImagesByColor } from './apiPixabay.js';

getImagesByColor('red').then(data => {
  console.log(data);
});
```

---

### 11. `getVideosByColor(color, page = 1, perPage = 20)`

Obține videouri după culoare (dacă este suportat).

#### Parametri:

- `color` (string): Culoarea dorită.
- `page` (number): Numărul paginii (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează:

- Un `Promise` care se rezolvă cu videourile filtrate după culoare.

#### Exemplu de utilizare:

```javascript
import { getVideosByColor } from './apiPixabay.js';

getVideosByColor('red').then(data => {
  console.log(data);
});
```

---

```

```
