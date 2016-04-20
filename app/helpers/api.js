import axios from 'axios';

const _APIKEY = '4ef8cb52c1b5e85aaee7c7c1571297a4';
const _baseURL = 'http://api.openweathermap.org/data/2.5/';


export function getCurrentWeather (city) {
  return axios.get( _baseURL + 'weather?q='+ city + '&type=accurate&APPID=' + _APIKEY)
  .then( (currentWeatherData) => {})
}

export function getForecast (city) {
  return axios.get(_baseURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + _APIKEY + '&cnt=5')
  .then( (forecastData) => forecastData.data)
}
