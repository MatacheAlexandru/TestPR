# Proiect Weather App - Documentație și Ghid de Utilizare

## Descrierea Proiectului

Acest proiect este o aplicație web de tip "Weather App" care afișează date meteo
pentru un oraș specificat și o imagine relevantă a orașului folosind API-uri
externe. Structura proiectului este concepută pentru a permite extinderea facilă
a funcționalității prin adăugarea de noi componente și stiluri.

## Ghid de Fork și Gestionare

### Realizarea Fork-ului

1. Accesează pagina proiectului pe GitHub.
2. Apasă butonul "Fork" pentru a crea o copie a proiectului în contul tău.

### Clonarea Proiectului

Clonează proiectul pe mașina ta locală folosind comanda:

```bash
git clone https://github.com/<username>/WeatherApp.git
```

### Instalarea Dependențelor

Navighează în directorul proiectului și instalează dependențele folosind npm:

```bash
cd WeatherApp
npm install
```

### Pornirea Proiectului

Pornește proiectul local folosind comanda:

```bash
npm run start
```

### Adăugarea Noilor Funcționalități

1. **Adaugă fișierele HTML și JS în `partials`**: Creează componentele necesare
   și include-le în `index.html`.
2. **Adaugă fișierele SCSS în `sass`**: Stilizează noile componente și
   compilează SCSS în CSS.
3. **Extinde API-urile**: Adaugă noi funcții în fișierele din folderul `api` și
   importă-le în fișierele necesare.

### Commit și Push

După ce ai făcut modificările, adaugă, commit și push:

```bash
git add .
git commit -m "Added new functionality"
git push origin main
```

### Crearea unui Pull Request

1. Accesează pagina proiectului tău pe GitHub.
2. Apasă butonul "New Pull Request".
3. Descrie modificările tale și trimite Pull Request-ul pentru a fi revizuit și
   integrat în proiectul principal.

## Structura Fișierelor

- **index.html**: Fișierul principal HTML care include toate componentele
  necesare ale aplicației.
- **index.js**: Fișierul principal JavaScript care inițializează componentele
  aplicației.
- **index.css**: Fișierul CSS principal care include stilurile pentru întreaga
  aplicație.
- **apiOpenWeather.js**: Funcții pentru interacțiunea cu OpenWeather API.
- **apiPixabay.js**: Funcții pentru interacțiunea cu Pixabay API.

### Exemple (cum ar trebui să arate)

- **partials/**: Conține fișiere HTML și JS pentru componentele aplicației.
  - **searchExample.html**: Componente pentru bara de căutare.
  - **weather-cardExample.html**: Componente pentru cardul meteo.
  - **searchExample.js**: Logica pentru bara de căutare.
  - **weather-cardExample.js**: Logica pentru afișarea datelor meteo și imaginii
    orașului.
- **sass/**: Conține fișiere SCSS pentru stilizarea componentelor.
  - **searchExample.scss**: Stiluri pentru bara de căutare.
  - **weather-cardExample.scss**: Stiluri pentru cardul meteo.

## Funcționarea Codului și Încărcarea Componentelor

### index.html

Fișierul `index.html` include componentele HTML și scripturile necesare pentru
funcționarea aplicației. Componentele din folderul `partials` sunt incluse în
`index.html` folosind tag-ul `<include>`. Este esențial să înțelegem rolul
acestui tag și modul în care acesta facilitează structura și organizarea
codului.

#### Detalii despre Tag-ul `<include>`

Tag-ul `<include>` este un mecanism care permite includerea unor fișiere HTML
externe în documentul principal HTML. Acest lucru oferă mai multe avantaje, în
special pentru proiectele mari sau aplicațiile web care au nevoie de o structură
modulară și de o gestionare ușoară a componentelor.

##### Beneficiile utilizării Tag-ului `<include>`:

1. **Modularitate**: Permite dezvoltatorilor să împartă aplicația în componente
   mai mici și mai gestionabile. Fiecare componentă poate fi dezvoltată și
   întreținută separat, ceea ce face mai ușor adăugarea, eliminarea sau
   modificarea unei anumite părți a aplicației fără a afecta întregul cod.

2. **Reutilizarea codului**: Componentele pot fi reutilizate în mai multe părți
   ale aplicației fără a fi necesară duplicarea codului. De exemplu, o bară de
   căutare sau un card meteo pot fi incluse în mai multe pagini ale aplicației.

3. **Îmbunătățirea organizării codului**: Separarea componentelor în fișiere
   individuale ajută la menținerea codului curat și organizat. Acest lucru este
   deosebit de important în cazul proiectelor mari, unde codul poate deveni
   rapid dificil de gestionat.

4. **Întreținere ușoară**: Fișierele individuale sunt mai ușor de întreținut și
   de actualizat. Orice modificare făcută într-un fișier component se reflectă
   automat în toate locurile unde este inclus acel fișier, reducând riscul de
   erori și inconsistențe.

##### Cum funcționează Tag-ul `<include>`:

- **Sintaxa**: `<include src="./path/to/file.html"></include>`. Atributele
  tag-ului includ:

  - `src`: Specifică calea către fișierul HTML care trebuie inclus. Aceasta
    poate fi o cale relativă sau absolută, în funcție de locația fișierului.
  - **Exemplu**: `<include src="./partials/search.html"></include>` va include
    conținutul fișierului `search.html` din folderul `partials`.

- **Ordinea includerii**: Este important să plasezi tag-urile `<include>` în
  ordinea în care vrei să apară componentele pe pagină. De exemplu, dacă bara de
  căutare trebuie să apară înaintea cardului meteo, tag-ul
  `<include src="./partials/search.html"></include>` trebuie plasat înaintea
  tag-ului `<include src="./partials/weather-card.html"></include>`.

- **Includerea scripturilor**: Tag-ul `<include>` poate fi utilizat și pentru
  includerea scripturilor externe, asigurându-se că toate funcționalitățile
  necesare sunt disponibile la încărcarea paginii.

### index.js

Fișierul `index.js` este responsabil pentru inițializarea componentelor și
interacțiunea cu API-urile. Importă funcțiile de inițializare din fișierele JS
ale componentelor și le apelează la încărcarea paginii:

```javascript
import { initializeSearch } from './partials/search.js';
import { initializeWeatherCard } from './partials/weather-card.js';

document.addEventListener('DOMContentLoaded', async () => {
  initializeSearch(); // Inițializează bara de căutare
  initializeWeatherCard(); // Inițializează cardul meteo și afișează datele pentru București
});
```

Importul în JavaScript permite reutilizarea codului din alte fișiere, făcând
aplicația modulară și ușor de gestionat. Funcțiile de inițializare sunt apelate
la încărcarea paginii pentru a asigura că toate componentele sunt pregătite
pentru utilizare.

### Extinderea Funcționalității

#### Adăugarea unei noi componente HTML și JS

1. Creează un fișier HTML în folderul `partials` (e.g., `new-component.html`).
2. Creează un fișier JS corespunzător în același folder (e.g.,
   `new-component.js`).

#### Include componentele în index.html

Adaugă tag-ul `<include src="./partials/new-component.html"></include>` în
`index.html`.

### Inițializează componentele în index.js

Pentru a inițializa componentele în `index.js`, trebuie să importăm funcțiile de
inițializare din fișierele JavaScript corespunzătoare componentelor și să apelăm
aceste funcții în evenimentul `DOMContentLoaded`.

#### Importul funcțiilor din fișierele JS

În `index.js`, importăm funcțiile de inițializare din fișierele JS ale
componentelor. De exemplu:

```javascript
import { initializeSearch } from './partials/searchExample.js';
import { initializeWeatherCard } from './partials/weather-cardExample.js';
```

Aceasta permite reutilizarea codului din alte fișiere și face aplicația modulară
și ușor de gestionat.

#### Apelarea funcțiilor de inițializare

După importarea funcțiilor, le apelăm în evenimentul `DOMContentLoaded` pentru a
ne asigura că toate componentele sunt inițializate corect după încărcarea
completă a paginii.

```javascript
document.addEventListener('DOMContentLoaded', async () => {
  functionName();
});
```

### Exportul funcțiilor

Pentru a putea importa funcțiile dintr-un fișier JS, acestea trebuie exportate.
Iată cum poți face acest lucru:

1. **Definirea funcției**:

   În fișierul JS, definești funcția pe care vrei să o exporți:

   ```javascript
   function functionName() {
     // Logica pentru inițializarea barei de căutare
   }
   ```

2. **Exportul funcției**:

   Adaugi funcția la exporturi pentru a o face disponibilă pentru import în alte
   fișiere:

   ```javascript
   export { functionName };
   ```

Astfel, funcția `functionName` devine disponibilă pentru import în alte fișiere
JavaScript, cum ar fi `index.js`.

Prin utilizarea exportului și importului, poți organiza codul în module,
făcându-l mai ușor de întreținut și extins.

#### Stilizarea componentei

1. Creează un fișier SCSS în folderul `sass` (e.g., `new-component.scss`).
2. Include stilurile SCSS în `index.css` folosind un compilator SCSS (de
   exemplu, Parcel, webpack).

Importul SCSS folosind `@import` în CSS permite organizarea și gestionarea mai
bună a stilurilor, făcându-le modulare și ușor de extins.

```scss
@import './sass/searchExample.scss';
@import './sass/weather-cardExample.scss';
```

Crearea unui fișier SCSS pentru fiecare componentă ajută la menținerea unei
structuri clare și la izolarea stilurilor specifice fiecărei componente.

## Utilizarea API-urilor

Pentru a utiliza funcțiile din fișierele API, importă funcțiile necesare în
fișierul JS al componentei tale și apelează-le după cum este necesar.

```javascript
import { getWeatherByCityName } from './api/apiOpenWeather.js';

getWeatherByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

---

---

---

---

---

# Documentație pentru Funcțiile din apiOpenWeather.js

Acest fișier conține funcții care interacționează cu API-ul OpenWeather pentru a
obține date meteo pentru diverse locații. Mai jos este o descriere detaliată a
fiecărei funcții, modul de utilizare și exemple de integrare în alte fișiere.

## Cum să Folosești Funcțiile din apiOpenWeather.js

### Import și Export

Pentru a utiliza funcțiile din `apiOpenWeather.js` în alte fișiere, trebuie mai
întâi să le exporți și să le imporți corespunzător.

### Export

În `apiOpenWeather.js`, funcțiile sunt exportate astfel:

```javascript
export {
  getWeatherByCityName,
  getWeatherByCoordinates,
  getWeatherForecastByCityName,
  getWeatherForecastByCoordinates,
  get16DayForecastByCityName,
  get16DayForecastByCoordinates,
  getHourlyForecastByCityName,
  getHourlyForecastByCoordinates,
  getUVIndex,
  getAirPollution,
  getGeocoding,
  getReverseGeocoding,
  getHistoricalWeather,
  getWeatherAlerts,
  getWeatherMap,
  getCurrentAndForecast,
  getAirPollutionForecast,
  getAirPollutionHistory,
  getWeatherStations,
  getClimateForecast30Days,
  getHistoricalWeatherByCityName,
};
```

### Import

Pentru a importa și utiliza aceste funcții în alte fișiere, folosește `import`:

```javascript
import {
  getWeatherByCityName,
  getWeatherForecastByCityName,
} from './apiOpenWeather.js';
```

## Descrierea Funcțiilor și Modul de Utilizare

### 1. fetchFromAPI(url)

#### Descriere

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

#### Parametri

- `url` (string): URL-ul pentru cererea API.

#### Returnează

Un Promise care se rezolvă cu datele obținute de la API.

#### Exemplu de Utilizare

```javascript
const API_KEY = 'c28b86768a874c70b1ecd1343e8f0f24';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function fetchFromAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

#### Detalii Importante

Această funcție este folosită intern de toate celelalte funcții pentru a trimite
cereri API și a prelua date. Nu este destinată utilizării directe.

### 2. getWeatherByCityName(city)

#### Descriere

Obține datele meteo actuale pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru orașul specificat.

#### Exemplu de răspuns

```json
{
  "coord": { "lon": 26.1025, "lat": 44.4268 },
  "weather": [
    { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
  ],
  "base": "stations",
  "main": {
    "temp": 28.02,
    "feels_like": 27.79,
    "temp_min": 26.1,
    "temp_max": 30.56,
    "pressure": 1012,
    "humidity": 60
  },
  "visibility": 10000,
  "wind": { "speed": 2.68, "deg": 305, "gust": 3.66 },
  "clouds": { "all": 0 },
  "dt": 1623244323,
  "sys": {
    "type": 2,
    "id": 2038501,
    "country": "RO",
    "sunrise": 1623193180,
    "sunset": 1623251100
  },
  "timezone": 10800,
  "id": 683506,
  "name": "Bucharest",
  "cod": 200
}
```

#### Exemplu de Utilizare

```javascript
import { getWeatherByCityName } from './apiOpenWeather.js';

getWeatherByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `name`: Numele orașului.
- `main.temp`: Temperatura curentă.
- `weather[0].description`: Descrierea vremii.
- `main.humidity`: Umiditatea.

### 3. getWeatherByCoordinates(lat, lon)

#### Descriere

Obține datele meteo actuale pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru coordonatele specificate.

#### Exemplu de răspuns

Vezi [getWeatherByCityName](#getweatherbycityname).

#### Exemplu de Utilizare

```javascript
import { getWeatherByCoordinates } from './apiOpenWeather.js';

getWeatherByCoordinates(44.4268, 26.1025)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- Format similar cu cel al funcției `getWeatherByCityName`.

### 4. getWeatherForecastByCityName(city)

#### Descriere

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru orașul specificat.

#### Exemplu de răspuns

```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1623253200,
      "main": {
        "temp": 28.52,
        "feels_like": 28.65,
        "temp_min": 28.52,
        "temp_max": 28.52,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1007,
        "humidity": 54
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": { "all": 1 },
      "wind": { "speed": 2.68, "deg": 305 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2021-06-09 15:00:00"
    }
    // ...alte date
  ],
  "city": {
    "id": 683506,
    "name": "Bucharest",
    "coord": { "lat": 44.4268, "lon": 26.1025 },
    "country": "RO",
    "population": 1877155,
    "timezone": 10800,
    "sunrise": 1623193180,
    "sunset": 1623251100
  }
}
```

#### Exemplu de Utilizare

```javascript
import { getWeatherForecastByCityName } from './apiOpenWeather.js';

getWeatherForecastByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `list`: O listă de date meteo pentru intervale de 3 ore.
- `city.name`: Numele orașului.
- `list[0].main.temp`: Temperatura la un anumit interval.
- `list[0].weather[0].description`: Descrierea vremii la un anumit interval.

### 5. getWeatherForecastByCoordinates(lat, lon)

#### Descriere

Obține prognoza meteo pe 5 zile la intervale de 3 ore pentru coordonate
geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru coordonatele specificate.

#### Exemplu de răspuns

Vezi [getWeatherForecastByCityName](#getweatherforecastbycityname).

#### Exemplu de Utilizare

```javascript
import { getWeatherForecastByCoordinates } from './apiOpenWeather.js';

getWeatherForecastByCoordinates(44.4268, 26.1025)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Che

ie ale Răspunsului:

- Format similar cu cel al funcției `getWeatherForecastByCityName`.

### 6. get16DayForecastByCityName(city)

#### Descriere

Obține prognoza meteo pe 16 zile pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru orașul specificat.

#### Exemplu de răspuns

```json
{
  "city": {
    "id": 683506,
    "name": "Bucharest",
    "coord": { "lat": 44.4268, "lon": 26.1025 },
    "country": "RO",
    "population": 1877155,
    "timezone": 10800
  },
  "cod": "200",
  "message": 0.0139,
  "cnt": 16,
  "list": [
    {
      "dt": 1623253200,
      "temp": {
        "day": 28.52,
        "min": 18.54,
        "max": 29.13,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "feels_like": {
        "day": 28.65,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "pressure": 1013,
      "humidity": 54,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "speed": 2.68,
      "deg": 305,
      "clouds": 1,
      "pop": 0
    }
    // ...alte date
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { get16DayForecastByCityName } from './apiOpenWeather.js';

get16DayForecastByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `list`: O listă de date meteo zilnice pentru următoarele 16 zile.
- `city.name`: Numele orașului.
- `list[0].temp.day`: Temperatura zilnică.
- `list[0].weather[0].description`: Descrierea vremii.

### 7. get16DayForecastByCoordinates(lat, lon)

#### Descriere

Obține prognoza meteo pe 16 zile pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru coordonatele specificate.

#### Exemplu de răspuns

Vezi [get16DayForecastByCityName](#get16dayforecastbycityname).

#### Exemplu de Utilizare

```javascript
import { get16DayForecastByCoordinates } from './apiOpenWeather.js';

get16DayForecastByCoordinates(44.4268, 26.1025)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- Format similar cu cel al funcției `get16DayForecastByCityName`.

### 8. getHourlyForecastByCityName(city)

#### Descriere

Obține prognoza meteo orară pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru orașul specificat.

#### Exemplu de răspuns

```json
{
  "cod": "200",
  "message": 0.0139,
  "cnt": 48,
  "list": [
    {
      "dt": 1623253200,
      "main": {
        "temp": 28.52,
        "feels_like": 28.65,
        "temp_min": 28.52,
        "temp_max": 28.52,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1007,
        "humidity": 54
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": { "all": 1 },
      "wind": { "speed": 2.68, "deg": 305 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2021-06-09 15:00:00"
    }
    // ...alte date
  ],
  "city": {
    "id": 683506,
    "name": "Bucharest",
    "coord": { "lat": 44.4268, "lon": 26.1025 },
    "country": "RO",
    "population": 1877155,
    "timezone": 10800,
    "sunrise": 1623193180,
    "sunset": 1623251100
  }
}
```

#### Exemplu de Utilizare

```javascript
import { getHourlyForecastByCityName } from './apiOpenWeather.js';

getHourlyForecastByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `list`: O listă de date meteo pentru fiecare oră din următoarele 48 de ore.
- `city.name`: Numele orașului.
- `list[0].main.temp`: Temperatura la un anumit interval.
- `list[0].weather[0].description`: Descrierea vremii la un anumit interval.

### 9. getHourlyForecastByCoordinates(lat, lon)

#### Descriere

Obține prognoza meteo orară pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele meteo pentru coordonatele specificate.

#### Exemplu de răspuns

Vezi [getHourlyForecastByCityName](#gethourlyforecastbycityname).

#### Exemplu de Utilizare

```javascript
import { getHourlyForecastByCoordinates } from './apiOpenWeather.js';

getHourlyForecastByCoordinates(44.4268, 26.1025)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- Format similar cu cel al funcției `getHourlyForecastByCityName`.

### 10. getUVIndex(lat, lon)

#### Descriere

Obține indicele UV pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu indicele UV pentru coordonatele specificate.

#### Exemplu de răspuns

```json
{
  "lat": 44.4268,
  "lon": 26.1025,
  "date_iso": "2021-06-09T12:00:00Z",
  "date": 1623244800,
  "value": 7.15
}
```

#### Exemplu de Utilizare

```javascript
import { getUVIndex } from './apiOpenWeather.js';

getUVIndex(44.4268, 26.1025)
  .then(data => {
    console.log(`Indicele UV pentru coordonatele [44.4268, 26.1025]:`, data);
  })
  .catch(error => {
    console.error('Error fetching UV index:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `lat`: Latitudinea.
- `lon`: Longitudinea.
- `date_iso`: Data și ora pentru care a fost calculat indicele UV.
- `value`: Valoarea indicele UV.

### 11. getAirPollution(lat, lon)

#### Descriere

Obține datele despre poluarea aerului pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele despre poluarea aerului pentru coordonatele
specificate.

#### Exemplu de răspuns

```json
{
  "coord": { "lon": 26.1025, "lat": 44.4268 },
  "list": [
    {
      "main": { "aqi": 3 },
      "components": {
        "co": 201.94,
        "no": 0.0,
        "no2": 0.0,
        "o3": 68.78,
        "so2": 0.64,
        "pm2_5": 15.46,
        "pm10": 20.23,
        "nh3": 0.0
      },
      "dt": 1623244800
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getAirPollution } from './apiOpenWeather.js';

getAirPollution(44.4268, 26.1025)
  .then(data => {
    console.log(
      `Poluarea aerului pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching air pollution data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `coord`: Coordonatele pentru care s-au obținut datele.
- `list[0].main.aqi`: Indexul calității aerului.
- `list[0].components`: Componentele poluării (CO, NO, NO2, O3, SO2, PM2.5,
  PM10, NH3).

### 12. getGeocoding(city)

#### Descriere

Obține coordonatele geografice pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu coordonatele geografice pentru orașul specificat.

#### Exemplu de răspuns

```json
[
  {
    "name": "Bucharest",
    "local_names": { "ro": "București" },
    "lat": 44.4268,
    "lon": 26.1025,
    "country": "RO"
  }
]
```

#### Exemplu de Utilizare

```javascript
import { getGeocoding } from './apiOpenWeather.js';

getGeocoding('București')
  .then(data => {
    console.log(`Coordonatele pentru București:`, data);
  })
  .catch(error => {
    console.error('Error fetching geocoding data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `name`: Numele orașului.
- `lat`: Latitudinea.
- `lon`: Longitudinea.
- `country`: Codul țării.

### 13. getReverseGeocoding(lat, lon)

#### Descriere

Obține numele locației pentru coordonate geografice specificate (geocodare
inversă).

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu numele locației pentru coordonatele specificate.

#### Exemplu de răspuns

```json
[
  {
    "name": "Bucharest",
    "local_names": { "ro": "București" },
    "lat": 44.4268,
    "lon": 26.1025,
    "country": "RO"
  }
]
```

#### Exemplu de Utilizare

```javascript
import { getReverseGeocoding } from './apiOpenWeather.js';

getReverseGeocoding(44.4268, 26.1025)
  .then(data => {
    console.log(
      `Numele locației pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching reverse geocoding data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `name`: Numele locației.
- `lat`: Latitudinea.
- `lon`: Longitudinea.
- `country`: Codul țării.

### 14. getHistoricalWeather(lat, lon, date)

#### Descriere

Obține datele meteo istorice pentru coordonate geografice specificate și o dată
specificată.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `date` (number): Data în format UNIX timestamp.

#### Returnează

Un Promise care se rezolvă cu datele meteo istorice pentru coordonatele
specificate.

#### Exemplu de răspuns

```json
{
  "lat": 44.4268,
  "lon": 26.1025,
  "timezone": "Europe/Bucharest",
  "timezone_offset": 10800,
  "current": {
    "dt": 1623244323,
    "temp": 28.02,
    "feels_like": 27.79,
    "pressure": 1012,
    "humidity": 60,
    "dew_point": 19.46,
    "uvi": 7.15,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 2.68,
    "wind_deg": 305,
    "weather": [
      { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
    ]
  },
  "hourly": [
    {
      "dt": 1623241200,
      "temp": 28.02,
      "feels_like": 27.79,
      "pressure": 1012,
      "humidity": 60,
      "dew_point": 19.46,
      "uvi": 7.15,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 2.68,
      "wind_deg": 305,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getHistoricalWeather } from './apiOpenWeather.js';

getHistoricalWeather(44.4268, 26.1025, 1623244323)
  .then(data => {
    console.log(
      `Date meteo istorice pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching historical weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `current`: Datele meteo curente pentru data specificată.
- `hourly`: Datele meteo pentru fiecare oră din ziua specificată.

### 15. getWeatherAlerts(lat, lon)

#### Descriere

Obține alertele meteo pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu alertele meteo pentru coordonatele specificate.

#### Exemplu de răspuns

```json
{
  "lat": 44.4268,
  "lon": 26.1025,
  "timezone": "Europe/Bucharest",
  "timezone_offset": 10800,
  "alerts": [
    {
      "sender_name": "National Weather Service",
      "event": "Heat Wave",
      "start": 1623241200,
      "end": 1623262800,
      "description": "A heat wave is expected in the area...",
      "tags": ["Extreme temperature"]
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getWeatherAlerts } from './apiOpenWeather.js';

getWeatherAlerts(44.4268, 26.1025)
  .then(data => {
    console.log(`Alerte meteo pentru coordonatele [44.4268, 26.1025]:`, data);
  })
  .catch(error => {
    console.error('Error fetching weather alerts:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `alerts`: O listă de alerte meteo active pentru locația specificată.
- `alerts[0].event`: Tipul alertei (ex. Heat Wave).
- `alerts[0].description`: Descrierea alertei.
- `alerts[0].start` și `alerts[0].end`: Timpul de început și sfârșit al alertei
  în format UNIX timestamp.

### 16. getWeatherMap(layer, zoom, x, y)

#### Descriere

Obține hărți meteo pentru straturi specifice (precipitații, nori, temperatură
etc.).

#### Parametri

- `layer` (string): Tipul stratului de hartă (ex. precipitații, temperatură).
- `zoom` (number): Nivelul de zoom al hărții.
- `x` (number): Coordonata X a hărții.
- `y` (number): Coordonata Y a hărții.

#### Returnează

Un Promise care se rezolvă cu răspunsul HTTP pentru imaginea stratului de hartă.

#### Exemplu de Utilizare

```javascript
import { getWeatherMap } from './apiOpenWeather.js';

getWeatherMap('precipitation', 10, 523, 256)
  .then(response => {
    console.log(`Harta meteo pentru stratul de precipitații:`, response);
  })
  .catch(error => {
    console.error('Error fetching weather map:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- Răspunsul este o imagine care poate fi afișată într-un element HTML `<img>`
  sau salvată pe disc.

### 17. getCurrentAndForecast(lat, lon)

#### Descriere

Obține datele meteo curente și prognoza pentru coordonate specifice.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele meteo curente și prognoza pentru
coordonatele specificate.

#### Exemplu de răspuns

```json
{
  "lat": 44.4268,
  "lon": 26.1025,
  "timezone": "Europe/Bucharest",
  "timezone_offset": 10800,
  "current": {
    "dt": 1623244323,
    "temp": 28.02,
    "feels_like": 27.79,
    "pressure": 1012,
    "humidity": 60,
    "dew_point": 19.46,
    "uvi": 7.15,
    "clouds": 0,
    "visibility": 10000,
    "wind_speed": 2.68,
    "wind_deg": 305,
    "weather": [
      { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
    ]
  },
  "hourly": [
    {
      "dt": 1623241200,
      "temp": 28.02,
      "feels_like": 27.79,
      "pressure": 1012,
      "humidity": 60,
      "dew_point": 19.46,
      "uvi": 7.15,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 2.68,
      "wind_deg": 305,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    }
  ],
  "daily": [
    {
      "dt": 1623253200,
      "sunrise": 1623193180,
      "sunset": 1623251100,
      "temp": {
        "day": 28.52,
        "min": 18.54,
        "max": 29.13,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "feels_like": {
        "day": 28.65,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "pressure": 1013,
      "humidity": 54,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "speed": 2.68,
      "deg": 305,
      "clouds": 1,
      "pop": 0
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getCurrentAndForecast } from './apiOpenWeather.js';

getCurrentAndForecast(44.4268, 26.1025)
  .then(data => {
    console.log(
      `Date meteo curente și prognoza pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching current and forecast weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `current`: Datele meteo curente.
- `hourly`: Prognoza meteo orară.
- `daily`: Prognoza meteo zilnică.

### 18. getAirPollutionForecast(lat, lon)

#### Descriere

Obține prognoza pentru poluarea aerului pentru coordonate geografice
specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu prognoza pentru poluarea aerului pentru
coordonatele specificate.

#### Exemplu de răspuns

```json
{
  "coord": { "lon": 26.1025, "lat": 44.4268 },
  "list": [
    {
      "main": { "aqi": 3 },
      "components": {
        "co": 201.94,
        "no": 0.0,
        "no2": 0.0,
        "o3": 68.78,
        "so2": 0.64,
        "pm2_5": 15.46,
        "pm10": 20.23,
        "nh3": 0.0
      },
      "dt": 1623244800
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getAirPollutionForecast } from './apiOpenWeather.js';

getAirPollutionForecast(44.4268, 26.1025)
  .then(data => {
    console.log(
      `Prognoza poluării aerului pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching air pollution forecast:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `coord`: Coordonatele pentru care s-au obținut datele.
- `list[0].main.aqi`: Indexul calității aerului.
- `list[0].components`: Componentele poluării (CO, NO, NO2, O3, SO2, PM2.5,
  PM10, NH3).

### 19. getAirPollutionHistory(lat, lon, start, end)

#### Descriere

Obține istoricul poluării aerului pentru coordonate geografice specificate între
datele de start și end (în format UNIX timestamp).

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.
- `start` (number): Timpul de început al perioadei în format UNIX timestamp.
- `end` (number): Timpul de sfârșit al perioadei în format UNIX timestamp.

#### Returnează

Un Promise care se rezolvă cu istoricul poluării aerului pentru coordonatele
specificate.

#### Exemplu de răspuns

```json
{
  "coord": { "lon": 26.1025, "lat": 44.4268 },
  "list": [
    {
      "main": { "aqi": 3 },
      "components": {
        "co": 201.94,
        "no": 0.0,
        "no2": 0.0,
        "o3": 68.78,
        "so2": 0.64,
        "pm2_5": 15.46,
        "pm10": 20.23,
        "nh3": 0.0
      },
      "dt": 1623244800
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getAirPollutionHistory } from './apiOpenWeather.js';

getAirPollutionHistory(44.4268, 26.1025, 1623244800, 1623331200)
  .then(data => {
    console.log(
      `Istoricul poluării aerului pentru coordonatele [44.4268, 26.1025]:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching air pollution history:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `coord`: Coordonatele pentru care s-au obținut datele.
- `list[0].main.aqi`: Indexul calității aerului.
- `list[0].components`: Componentele poluării (CO, NO, NO2, O3, SO2, PM2.5,
  PM10, NH3).

### 20. getWeatherStations(lat, lon)

#### Descriere

Obține date despre stațiile meteo pentru coordonate geografice specificate.

#### Parametri

- `lat` (number): Latitudinea locației.
- `lon` (number): Longitudinea locației.

#### Returnează

Un Promise care se rezolvă cu datele despre stațiile meteo pentru coordonatele
specificate.

#### Exemplu de răspuns

```json
{
  "station": [
    {
      "station_id": 123,
      "name": "Bucharest",
      "lat": 44.4268,
      "lon": 26.1025,
      "altitude": 50
    }
  ]
}
```

#### Exemplu de Util

izare

```javascript
import { getWeatherStations } from './apiOpenWeather.js';

getWeatherStations(44.4268, 26.1025)
  .then(data => {
    console.log(`Stațiile meteo pentru coordonatele [44.4268, 26.1025]:`, data);
  })
  .catch(error => {
    console.error('Error fetching weather stations:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `station`: O listă de stații meteo.
- `station[0].name`: Numele stației meteo.
- `station[0].lat`: Latitudinea stației meteo.
- `station[0].lon`: Longitudinea stației meteo.
- `station[0].altitude`: Altitudinea stației meteo.

### 21. getClimateForecast30Days(city)

#### Descriere

Obține prognoza climatică pe 30 de zile pentru un oraș specificat.

#### Parametri

- `city` (string): Numele orașului.

#### Returnează

Un Promise care se rezolvă cu prognoza climatică pe 30 de zile pentru orașul
specificat.

#### Exemplu de răspuns

```json
{
  "city": {
    "id": 683506,
    "name": "Bucharest",
    "coord": { "lat": 44.4268, "lon": 26.1025 },
    "country": "RO",
    "population": 1877155,
    "timezone": 10800
  },
  "cod": "200",
  "message": 0.0139,
  "cnt": 30,
  "list": [
    {
      "dt": 1623253200,
      "temp": {
        "day": 28.52,
        "min": 18.54,
        "max": 29.13,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "feels_like": {
        "day": 28.65,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "pressure": 1013,
      "humidity": 54,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "speed": 2.68,
      "deg": 305,
      "clouds": 1,
      "pop": 0
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getClimateForecast30Days } from './apiOpenWeather.js';

getClimateForecast30Days('București')
  .then(data => {
    console.log(`Prognoza climatică pe 30 de zile pentru București:`, data);
  })
  .catch(error => {
    console.error('Error fetching climate forecast:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `list`: O listă de date meteo zilnice pentru următoarele 30 de zile.
- `city.name`: Numele orașului.
- `list[0].temp.day`: Temperatura zilnică.
- `list[0].weather[0].description`: Descrierea vremii.

### 22. getHistoricalWeatherByCityName(city, start, end)

#### Descriere

Obține date meteo istorice pentru un oraș specificat între datele de start și
end (în format UNIX timestamp).

#### Parametri

- `city` (string): Numele orașului.
- `start` (number): Timpul de început al perioadei în format UNIX timestamp.
- `end` (number): Timpul de sfârșit al perioadei în format UNIX timestamp.

#### Returnează

Un Promise care se rezolvă cu datele meteo istorice pentru orașul specificat.

#### Exemplu de răspuns

```json
{
  "city": {
    "id": 683506,
    "name": "Bucharest",
    "coord": { "lat": 44.4268, "lon": 26.1025 },
    "country": "RO",
    "population": 1877155,
    "timezone": 10800
  },
  "cod": "200",
  "message": 0.0139,
  "cnt": 30,
  "list": [
    {
      "dt": 1623253200,
      "temp": {
        "day": 28.52,
        "min": 18.54,
        "max": 29.13,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "feels_like": {
        "day": 28.65,
        "night": 20.13,
        "eve": 27.45,
        "morn": 19.56
      },
      "pressure": 1013,
      "humidity": 54,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "speed": 2.68,
      "deg": 305,
      "clouds": 1,
      "pop": 0
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getHistoricalWeatherByCityName } from './apiOpenWeather.js';

getHistoricalWeatherByCityName('București', 1623244800, 1623331200)
  .then(data => {
    console.log(
      `Date meteo istorice pentru București între 1623244800 și 1623331200:`,
      data
    );
  })
  .catch(error => {
    console.error('Error fetching historical weather data:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `list`: O listă de date meteo zilnice pentru perioada specificată.
- `city.name`: Numele orașului.
- `list[0].temp.day`: Temperatura zilnică.
- `list[0].weather[0].description`: Descrierea vremii.

### 23. getWeatherIconUrl(iconCode)

#### Descriere

Obține URL-ul iconiței meteo pentru un cod specific de iconiță furnizat de
API-ul OpenWeather.

#### Parametri

- `iconCode` (string): Codul iconiței meteo (de exemplu, `01d`, `02n`).

#### Returnează

Un URL sub formă de string care poate fi utilizat pentru a descărca și afișa
iconița meteo.

#### Exemplu de răspuns

Nu există un răspuns JSON propriu-zis deoarece funcția returnează direct un URL
sub formă de string. URL-ul poate fi utilizat pentru a încărca imaginea iconiței
meteo.

#### Exemplu de Utilizare

```javascript
import { getWeatherIconUrl } from './apiOpenWeather.js';

const iconCode = '01d';
const iconUrl = getWeatherIconUrl(iconCode);

console.log(`URL pentru iconița meteo cu codul ${iconCode}:`, iconUrl);
// URL pentru iconița meteo cu codul 01d: http://openweathermap.org/img/wn/01d.png
```

Iată ce reprezintă aceste coduri:

- **01d**: Zi însorită (clear sky during the day).
- **01n**: Noapte senină (clear sky during the night).
- **02d**: Zi cu câțiva nori (few clouds during the day).
- **02n**: Noapte cu câțiva nori (few clouds during the night).
- **03d**: Zi parțial înnorată (scattered clouds during the day).
- **03n**: Noapte parțial înnorată (scattered clouds during the night).
- **04d**: Zi foarte înnorată (broken clouds during the day).
- **04n**: Noapte foarte înnorată (broken clouds during the night).
- **09d**: Zi cu ploi (shower rain during the day).
- **09n**: Noapte cu ploi (shower rain during the night).
- **10d**: Zi cu ploaie (rain during the day).
- **10n**: Noapte cu ploaie (rain during the night).
- **11d**: Zi cu furtună (thunderstorm during the day).
- **11n**: Noapte cu furtună (thunderstorm during the night).
- **13d**: Zi cu zăpadă (snow during the day).
- **13n**: Noapte cu zăpadă (snow during the night).
- **50d**: Zi cu ceață (mist during the day).
- **50n**: Noapte cu ceață (mist during the night).

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- URL-ul generat poate fi utilizat într-un element HTML `<img>` pentru a afișa
  iconița meteo.
- URL-ul este generat pe baza unui șablon fix, care include codul iconiței
  meteo.

#### Exemple de afișare a iconiței în HTML

Pentru a afișa iconița meteo în aplicația ta, poți utiliza URL-ul returnat de
funcția `getWeatherIconUrl` într-un element HTML `<img>`:

```html
<img id="weather-icon" src="URL_GENRATED_BY_FUNCTION" alt="Weather Icon" />
```

În JavaScript, poți actualiza dinamically src-ul imaginii:

```javascript
document.getElementById('weather-icon').src = iconUrl;
```

Prin utilizarea acestei funcții, poți îmbunătăți vizualizarea datelor meteo în
aplicația ta prin adăugarea iconițelor relevante pentru condițiile meteo
curente.

---

---

---

---

---

# Documentație pentru Funcțiile din apiPixabay.js

Acest fișier conține funcții care interacționează cu API-ul Pixabay pentru a
obține imagini și videouri pentru diverse criterii de căutare. Mai jos este o
descriere detaliată a fiecărei funcții, modul de utilizare și exemple de
integrare în alte fișiere.

## Cum să Folosești Funcțiile din apiPixabay.js

### Import și Export

Pentru a utiliza funcțiile din `apiPixabay.js` în alte fișiere, trebuie mai
întâi să le exporți și să le imporți corespunzător.

### Export

În `apiPixabay.js`, funcțiile sunt exportate astfel:

```javascript
export {
  searchImages,
  searchVideos,
  getImageDetails,
  getVideoDetails,
  getPopularImages,
  getPopularVideos,
  getRandomImages,
  getRandomVideos,
  getImagesByColor,
  getVideosByColor,
};
```

### Import

Pentru a importa și utiliza aceste funcții în alte fișiere, folosește `import`:

```javascript
import { searchImages, getImageDetails } from './apiPixabay.js';
```

## Descrierea Funcțiilor și Modul de Utilizare

### 1. fetchFromAPI(url)

#### Descriere

Funcție auxiliară pentru a face cereri HTTP și a obține date de la API.

#### Parametri

- `url` (string): URL-ul pentru cererea API.

#### Returnează

Un Promise care se rezolvă cu datele obținute de la API.

#### Exemplu de Utilizare

```javascript
const API_KEY = '24587351-f51ecbfdd1a1ed72c58205b43';
const BASE_URL = 'https://pixabay.com/api';

async function fetchFromAPI(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok. Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
```

#### Detalii Importante

Această funcție este folosită intern de toate celelalte funcții pentru a trimite
cereri API și a prelua date. Nu este destinată utilizării directe.

### 2. searchImages(query, page = 1, perPage = 20)

#### Descriere

Obține imagini după un cuvânt cheie.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini pentru cuvântul cheie
specificat.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { searchImages } from './apiPixabay.js';

searchImages('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini găsite.
- `hits[0].previewURL`: URL-ul imaginii de previzualizare.
- `hits[0].largeImageURL`: URL-ul imaginii la rezoluție mare.

### 3. searchVideos(query, page = 1, perPage = 20)

#### Descriere

Obține videouri după un cuvânt cheie.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri pentru cuvântul cheie
specificat.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { searchVideos } from './apiPixabay.js';

searchVideos('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri găsite.
- `hits[0].videos`: Variantele de rezoluție ale videoclipului.
- `hits[0].videos.large.url`: URL-ul videoclipului la rezoluție mare.

### 4. getImageDetails(imageId)

#### Descriere

Obține detalii despre o imagine după ID.

#### Parametri

- `imageId` (number): ID-ul imaginii.

#### Returnează

Un Promise care se rezolvă cu detaliile imaginii pentru ID-ul specificat.

#### Exemplu de răspuns

```json
{
  "total": 1,
  "totalHits": 1,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293

e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getImageDetails } from './apiPixabay.js';

getImageDetails(195893)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching image details:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `hits`: Lista de imagini găsite.
- `hits[0].pageURL`: URL-ul paginii imaginii.
- `hits[0].largeImageURL`: URL-ul imaginii la rezoluție mare.

### 5. getVideoDetails(videoId)

#### Descriere

Obține detalii despre un video după ID.

#### Parametri

- `videoId` (number): ID-ul videoclipului.

#### Returnează

Un Promise care se rezolvă cu detaliile videoclipului pentru ID-ul specificat.

#### Exemplu de răspuns

```json
{
  "total": 1,
  "totalHits": 1,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getVideoDetails } from './apiPixabay.js';

getVideoDetails(16547)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching video details:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `hits`: Lista de videouri găsite.
- `hits[0].pageURL`: URL-ul paginii videoclipului.
- `hits[0].videos.large.url`: URL-ul videoclipului la rezoluție mare.

### 6. getPopularImages(category = '', editorsChoice = false, page = 1, perPage = 20)

#### Descriere

Obține imagini populare.

#### Parametri

- `category` (string): Categoria imaginii (implicit '').
- `editorsChoice` (boolean): Filtru pentru alegerile editorilor (implicit
  false).
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini populare.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getPopularImages } from './apiPixabay.js';

getPopularImages('nature', true)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching popular images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini populare găsite.

### 7. getPopularVideos(category = '', editorsChoice = false, page = 1, perPage = 20)

#### Descriere

Obține videouri populare.

#### Parametri

- `category` (string): Categoria videoclipului (implicit '').
- `editorsChoice` (boolean): Filtru pentru alegerile editorilor (implicit
  false).
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri populare.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL

": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getPopularVideos } from './apiPixabay.js';

getPopularVideos('nature', true)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching popular videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri populare găsite.

### 8. getRandomImages(query, page = 1, perPage = 3)

#### Descriere

Obține imagini aleatorii.

#### Parametri

- `query` (string): Cuvântul cheie pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 3).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini aleatorii.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 3,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getRandomImages } from './apiPixabay.js';

getRandomImages('floare')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching random images:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini aleatorii găsite.

### 9. getRandomVideos(category = '', page = 1, perPage = 20)

#### Descriere

Obține videouri aleatorii.

#### Parametri

- `category` (string): Categoria videoclipului (implicit '').
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri aleatorii.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getRandomVideos } from './apiPixabay.js';

getRandomVideos('nature')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching random videos:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri aleatorii găsite.

### 10. getImagesByColor(color, page = 1, perPage = 20)

#### Descriere

Obține imagini după culoare.

#### Parametri

- `color` (string): Culoarea pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre imagini pentru culoarea specificată.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 195893,
      "pageURL": "https://pixabay.com/photos/blossom-bloom-flower-195893/",
      "type": "photo",
      "tags": "blossom, bloom, flower",
      "previewURL": "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_150.jpg",
      "previewWidth": 150,
      "previewHeight": 84,
      "webformatURL": "https://pixabay.com/get/54e1d14a4e5aa414f1dc846096293e7b1d39dfe1504c704c7d267ad2914fc7_640.jpg",
      "webformatWidth": 640,
      "webformatHeight": 360,
      "largeImageURL": "https://pixabay.com/get/54e1d14a4e5aa414f6da8c7dda793677173fd7e65a516c48732f7edd964ec2_1280.jpg",
      "imageWidth": 4000,
      "imageHeight": 2250,
      "imageSize": 4731420,
      "views": 7671,
      "downloads": 6439,
      "favorites": 1,
      "likes": 5,
      "comments": 2,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte imagini
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getImagesByColor } from './apiPixabay.js';

getImagesByColor('red')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching images by color:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de imagini găsite pentru culoarea specificată.

### 11. getVideosByColor(color, page = 1, perPage = 20)

#### Descriere

Obține videouri după culo

are (dacă este suportat).

#### Parametri

- `color` (string): Culoarea pentru căutare.
- `page` (number): Numărul paginii de rezultate (implicit 1).
- `perPage` (number): Numărul de rezultate pe pagină (implicit 20).

#### Returnează

Un Promise care se rezolvă cu datele despre videouri pentru culoarea
specificată.

#### Exemplu de răspuns

```json
{
  "total": 500,
  "totalHits": 100,
  "hits": [
    {
      "id": 16547,
      "pageURL": "https://pixabay.com/videos/id-16547/",
      "type": "film",
      "tags": "floare, natura, primavara",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/67822/large.mp4",
          "width": 1920,
          "height": 1080,
          "size": 5090874
        },
        "medium": {
          "url": "https://cdn.pixabay.com/vimeo/67822/medium.mp4",
          "width": 1280,
          "height": 720,
          "size": 2222320
        },
        "small": {
          "url": "https://cdn.pixabay.com/vimeo/67822/small.mp4",
          "width": 640,
          "height": 360,
          "size": 715802
        },
        "tiny": {
          "url": "https://cdn.pixabay.com/vimeo/67822/tiny.mp4",
          "width": 320,
          "height": 180,
          "size": 117018
        }
      },
      "views": 2623,
      "downloads": 1834,
      "favorites": 30,
      "likes": 22,
      "comments": 4,
      "user_id": 48777,
      "user": "422737",
      "userImageURL": "https://cdn.pixabay.com/user/2014/06/11/00-53-35-639_250x250.jpg"
    }
    // ...alte videouri
  ]
}
```

#### Exemplu de Utilizare

```javascript
import { getVideosByColor } from './apiPixabay.js';

getVideosByColor('red')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching videos by color:', error);
  });
```

#### Detalii Importante

Elemente Cheie ale Răspunsului:

- `total`: Numărul total de rezultate.
- `totalHits`: Numărul total de rezultate relevante.
- `hits`: Lista de videouri găsite pentru culoarea specificată.

---

Aceasta este documentația detaliată pentru funcțiile din `apiPixabay.js`.
Asigură-te că ai cheia API corectă și că urmezi structura corectă pentru
apelurile API.

---

---

---

---

### Task 1: Căutare și Afișare a Vremii Curente

**Responsabilități:**

- **HTML:**
  - Crearea unui formular de căutare cu un input, un buton și o secțiune pentru
    afișarea orașelor favorite.
  - Implementarea unei stelute pentru marcarea orașelor favorite, o iconiță GPS
    pentru locația curentă și o listă de orașe favorite cu posibilitatea de
    ștergere.( si extindere a listei)
- **SCSS:**
  - Stilizarea formularului de căutare și a listei de orașe favorite pentru a se
    adapta la diferite dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**
  - Implementarea funcției de căutare pentru a prelua input-ul utilizatorului.
  - Gestionarea orașelor favorite:
    - Adăugarea/stergerea orașelor favorite.
    - Afișarea listei de orașe favorite.
    - Gestionarea stării stelutei (default sau galbenă).
  - Implementarea funcționalității de afișare a imaginii orașului căutat în bara
    de căutare folosind `getRandomImages`.
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor necesare pentru a comunica cu task-urile 3 și 4 pentru
    a actualiza cardul de vreme curentă.

### Task 2: Afișarea Meteo Data, Ora Curentă si Citat Inspirativ:

**Responsabilități:**

- **HTML:**
  - Crearea unui card pentru afișarea zilnica a datei, ziua săptămânii,
    iconițele vremii, temperatura minima și maxima.
  - Adăugarea unei secțiuni pentru afișarea citatului inspirator. (citatul
    trebuie sa aibe legatura cu orasul afisat)
- **SCSS:**
  - Stilizarea cardului de prognoză zilnică pentru a se adapta la diferite
    dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**

  - Implementarea gestionării erorilor pentru cererile API și a elementelor
  interactive pentru a îmbunătăți experiența utilizatorului.
  <!--  -->

### Task 3 și Task 4: Afișarea Detaliilor Avansate

**Responsabilități:**

- **HTML:**
  - Crearea secțiunii pentru detalii avansate, inclusiv butoanele "today" și "5
    days", cardul de prognoză pe 5 zile și secțiunea detaliată a prognozei
    orare.
  - Crearea cardului pentru afișarea datelor meteo curente.
- **SCSS:**
  - Stilizarea secțiunii pentru a asigura o afișare corectă pe diferite
    dimensiuni de ecran (desktop, tabletă, mobil).
  - Implementarea media queries pentru a adapta stilurile la diferite dimensiuni
    de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**

  - Implementarea funcționalităților pentru afișarea detaliilor avansate.
  - Gestionarea stării de afișare a cardurilor și secțiunilor de prognoză meteo,
    inclusiv trecerea între vizualizarea zilnică și cea pe 5 zile.
  - Gestionarea stării de afișare/ascundere a secțiunilor relevante în funcție
    de interacțiunile utilizatorului (ex. click pe butonul "more info").
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor pentru a permite task-urilor 1 și 5 să actualizeze
    datele meteo detaliate.
  - Implementarea funcției pentru a obține și afișa prognoza meteo pe 5 zile
    folosind `getWeatherForecastByCityName`.
  - Gestionarea stării de afișare/ascundere a secțiunii de prognoză curentă și
    secțiunii de prognoză pe 5 zile.

  - Exportarea funcțiilor pentru a permite task-urilor 1, 3 și 4 să actualizeze
    prognoza în funcție de orașul căutat.

### Task 5: Afișarea Graficelor Meteo

**Responsabilități:**

- **HTML:**
  - Crearea secțiunii pentru afișarea graficelor meteo.
- **SCSS:**
  - Stilizarea secțiunii pentru grafice pentru a asigura o afișare corectă pe
    diferite dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**
  - Utilizarea librăriilor de graficare (ex. Chart.js) pentru a crea și popula
    graficele cu date meteo avansate (ex. temperatură, umiditate, viteza
    vântului și presiune atmosferică).
  - Implementarea funcționalității pentru afișarea graficelor meteo în secțiunea
    "Show Chart".
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor pentru a permite task-urilor 1, 3 și 4 să actualizeze
    graficele în funcție de orașul căutat.

## UX-ul (User Experience)

reprezintă experiența utilizatorului și se referă la ansamblul de sentimente,
emoții și reacții pe care o persoană le are în timpul interacțiunii cu un
produs, sistem sau serviciu. Aceasta include aspecte precum:

1. **Ușurința de utilizare**: Cât de simplu și intuitiv este pentru utilizator
   să folosească produsul.
2. **Utilitate**: Măsura în care produsul satisface nevoile și așteptările
   utilizatorului.
3. **Accesibilitate**: Cât de accesibil este produsul pentru diverse categorii
   de utilizatori, inclusiv cei cu dizabilități.
4. **Funcționalitate**: Gradul în care produsul își îndeplinește scopul pentru
   care a fost creat.
5. **Design vizual**: Estetica produsului și cât de plăcut este pentru
   utilizator din punct de vedere vizual.
6. **Performanță**: Viteza și eficiența cu care produsul funcționează.

Un UX bun este crucial pentru succesul oricărui produs digital, deoarece poate
influența semnificativ satisfacția utilizatorului și loialitatea acestuia față
de brand. Procesul de design al UX implică cercetarea utilizatorilor,
prototiparea, testarea și iterarea continuă pentru a asigura că produsul final
este cât mai potrivit pentru utilizatori.

## Animation css:

- `https://www.youtube.com/watch?v=nJ81DFmgHdU`
