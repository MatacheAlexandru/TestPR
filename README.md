## Documentație pentru Funcțiile din `apiServer.js`

### `fetchFromAPI(url)`

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

#### Parametri:

- `url` (string): URL-ul pentru cererea API.

#### Returnează:

- Un `Promise` care se rezolvă cu datele obținute de la API.

---

### `getWeatherByCityName(city)`

Obține datele meteo actuale pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu datele meteo pentru orașul specificat.

#### Exemplu de utilizare:

```javascript
import { getWeatherByCityName } from './apiServer.js';

getWeatherByCityName('București').then(data => {
  console.log(data);
});
```

---

### `getWeatherByCoordinates(lat, lon)`

Obține datele meteo actuale pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu datele meteo pentru coordonatele specificate.

#### Exemplu de utilizare:

```javascript
import { getWeatherByCoordinates } from './apiServer.js';

getWeatherByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getWeatherForecastByCityName(city)`

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru orașul specificat.

#### Exemplu de utilizare:

```javascript
import { getWeatherForecastByCityName } from './apiServer.js';

getWeatherForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

### `getWeatherForecastByCoordinates(lat, lon)`

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru coordonate
geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru coordonatele
  specificate.

#### Exemplu de utilizare:

```javascript
import { getWeatherForecastByCoordinates } from './apiServer.js';

getWeatherForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `get16DayForecastByCityName(city)`

Obține prognoza meteo pe 16 zile pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru orașul specificat.

#### Exemplu de utilizare:

```javascript
import { get16DayForecastByCityName } from './apiServer.js';

get16DayForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

### `get16DayForecastByCoordinates(lat, lon)`

Obține prognoza meteo pe 16 zile pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo pentru coordonatele
  specificate.

#### Exemplu de utilizare:

```javascript
import { get16DayForecastByCoordinates } from './apiServer.js';

get16DayForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getHourlyForecastByCityName(city)`

Obține prognoza meteo orară pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo orară pentru orașul specificat.

#### Exemplu de utilizare:

```javascript
import { getHourlyForecastByCityName } from './apiServer.js';

getHourlyForecastByCityName('București').then(data => {
  console.log(data);
});
```

---

### `getHourlyForecastByCoordinates(lat, lon)`

Obține prognoza meteo orară pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza meteo orară pentru coordonatele
  specificate.

#### Exemplu de utilizare:

```javascript
import { getHourlyForecastByCoordinates } from './apiServer.js';

getHourlyForecastByCoordinates(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getUVIndex(lat, lon)`

Obține indicele UV pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu indicele UV pentru coordonatele specificate.

#### Exemplu de utilizare:

```javascript
import { getUVIndex } from './apiServer.js';

getUVIndex(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getAirPollution(lat, lon)`

Obține datele despre poluarea aerului pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu datele despre poluarea aerului pentru
  coordonatele specificate.

#### Exemplu de utilizare:

```javascript
import { getAirPollution } from './apiServer.js';

getAirPollution(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getGeocoding(city)`

Obține coordonatele geografice pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu coordonatele geografice pentru orașul
  specificat.

#### Exemplu de utilizare:

```javascript
import { getGeocoding } from './apiServer.js';

getGeocoding('București').then(data => {
  console.log(data);
});
```

---

### `getReverseGeocoding(lat, lon)`

Obține numele locației pentru coordonate geografice specificate (geocodare
inversă).

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu numele locației pentru coordonatele
  specificate.

#### Exemplu de utilizare:

```javascript
import { getReverseGeocoding } from './apiServer.js';

getReverseGeocoding(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getHistoricalWeather(lat, lon, date)`

Obține datele meteo istorice pentru coordonate geografice specificate și o dată
specificată.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `date` (number): Data în format UNIX timestamp.

#### Returnează:

- Un `Promise` care se rezolvă cu datele meteo istorice pentru coordonatele și
  data specificată.

#### Exemplu de utilizare:

```javascript
import { getHistoricalWeather } from './apiServer.js';

const date = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
getHistoricalWeather(44.4268, 26.1025, date).then(data => {
  console.log(data);
});
```

---

### `getWeatherAlerts(lat, lon)`

Obține alertele meteo pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu alertele meteo pentru coordonatele
  specificate.

#### Exemplu de utilizare:

```javascript
import { getWeatherAlerts } from './apiServer

.js';

getWeatherAlerts(44.4268, 26.1025).then(data => {
    console.log(data);
});
```

---

### `getWeatherMap(layer, zoom, x, y)`

Obține hărți meteo pentru straturi specifice (precipitații, nori, temperatură
etc.).

#### Parametri:

- `layer` (string): Tipul de strat (precipitații, nori, temperatură etc.).
- `zoom` (number): Nivelul de zoom.
- `x` (number): Coordonata X.
- `y` (number): Coordonata Y.

#### Returnează:

- Un `Promise` care se rezolvă cu răspunsul imaginii hărții meteo.

#### Exemplu de utilizare:

```javascript
import { getWeatherMap } from './apiServer.js';

getWeatherMap('precipitation', 5, 10, 10).then(response => {
  console.log(response.url);
});
```

---

### `getCurrentAndForecast(lat, lon)`

Obține datele meteo curente și prognoza pentru coordonate specifice.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu datele meteo curente și prognoza pentru
  coordonatele specifice.

#### Exemplu de utilizare:

```javascript
import { getCurrentAndForecast } from './apiServer.js';

getCurrentAndForecast(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getAirPollutionForecast(lat, lon)`

Obține prognoza pentru poluarea aerului pentru coordonate geografice
specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza pentru poluarea aerului pentru
  coordonatele specifice.

#### Exemplu de utilizare:

```javascript
import { getAirPollutionForecast } from './apiServer.js';

getAirPollutionForecast(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getAirPollutionHistory(lat, lon, start, end)`

Obține istoricul poluării aerului pentru coordonate geografice specificate între
datele de start și end (în format UNIX timestamp).

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `start` (number): Data de start în format UNIX timestamp.
- `end` (number): Data de end în format UNIX timestamp.

#### Returnează:

- Un `Promise` care se rezolvă cu istoricul poluării aerului pentru coordonatele
  și perioada specificată.

#### Exemplu de utilizare:

```javascript
import { getAirPollutionHistory } from './apiServer.js';

const start = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
const end = Math.floor(Date.now() / 1000); // Acum
getAirPollutionHistory(44.4268, 26.1025, start, end).then(data => {
  console.log(data);
});
```

---

### `getWeatherStations(lat, lon)`

Obține date despre stațiile meteo pentru coordonate geografice specificate.

#### Parametri:

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează:

- Un `Promise` care se rezolvă cu datele despre stațiile meteo pentru
  coordonatele specificate.

#### Exemplu de utilizare:

```javascript
import { getWeatherStations } from './apiServer.js';

getWeatherStations(44.4268, 26.1025).then(data => {
  console.log(data);
});
```

---

### `getClimateForecast30Days(city)`

Obține prognoza climatică pe 30 de zile pentru un oraș specificat.

#### Parametri:

- `city` (string): Numele orașului.

#### Returnează:

- Un `Promise` care se rezolvă cu prognoza climatică pentru orașul specificat.

#### Exemplu de utilizare:

```javascript
import { getClimateForecast30Days } from './apiServer.js';

getClimateForecast30Days('București').then(data => {
  console.log(data);
});
```

---

### `getHistoricalWeatherByCityName(city, start, end)`

Obține date meteo istorice pentru un oraș specificat între datele de start și
end (în format UNIX timestamp).

#### Parametri:

- `city` (string): Numele orașului.
- `start` (number): Data de start în format UNIX timestamp.
- `end` (number): Data de end în format UNIX timestamp.

#### Returnează:

- Un `Promise` care se rezolvă cu datele meteo istorice pentru orașul și
  perioada specificată.

#### Exemplu de utilizare:

```javascript
import { getHistoricalWeatherByCityName } from './apiServer.js';

const start = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 30; // Cu 30 de zile în urmă
const end = Math.floor(Date.now() / 1000); // Acum
getHistoricalWeatherByCityName('București', start, end).then(data => {
  console.log(data);
});
```

---

Aceste descrieri și exemple ar trebui să ajute colegii tăi să înțeleagă cum să
folosească fiecare funcție din `apiServer.js` în fișierele lor JavaScript.

---

Explicația Funcțiilor

getWeatherByCityName: Obține datele meteo actuale pentru un oraș specificat.

getWeatherByCoordinates: Obține datele meteo actuale pentru coordonate
geografice specificate.

getWeatherForecastByCityName: Obține prognoza meteo pe 5 zile la intervale de 3
ore pentru un oraș specificat.

getWeatherForecastByCoordinates: Obține prognoza meteo pe 5 zile la intervale de
3 ore pentru coordonate geografice specificate.

get16DayForecastByCityName: Obține prognoza meteo pe 16 zile pentru un oraș
specificat.

get16DayForecastByCoordinates: Obține prognoza meteo pe 16 zile pentru
coordonate geografice specificate.

getHourlyForecastByCityName: Obține prognoza meteo orară pentru un oraș
specificat.

getHourlyForecastByCoordinates: Obține prognoza meteo orară pentru coordonate
geografice specificate.

getUVIndex: Obține indicele UV pentru coordonate geografice specificate.

getAirPollution: Obține datele despre poluarea aerului pentru coordonate
geografice specificate.

getGeocoding: Obține coordonatele geografice pentru un oraș specificat.

getReverseGeocoding: Obține numele locației pentru coordonate geografice
specificate (geocodare inversă).

getHistoricalWeather: Obține datele meteo istorice pentru coordonate geografice
specificate și o dată specificată.

getWeatherAlerts: Obține alertele meteo pentru coordonate geografice
specificate.

getWeatherMap: Obține hărți meteo pentru straturi specifice (precipitații, nori,
temperatură etc.).

getCurrentAndForecast: Obține datele meteo curente și prognoza pentru coordonate
specifice.

getAirPollutionForecast: Obține prognoza pentru poluarea aerului pentru
coordonate geografice specificate.

getAirPollutionHistory: Obține istoricul poluării aerului pentru coordonate
geografice specificate între datele de start și end (în format UNIX timestamp).

getWeatherStations: Obține date despre stațiile meteo pentru coordonate
geografice specificate.

getClimateForecast30Days: Obține prognoza climatică pe 30 de zile pentru un oraș
specificat.

getHistoricalWeatherByCityName: Obține date meteo istorice pentru un oraș
specificat între datele de start și end (în format UNIX timestamp).
