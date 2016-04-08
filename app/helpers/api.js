var axios = require('axios');

var _APIKEY = '4ef8cb52c1b5e85aaee7c7c1571297a4';
var _baseURL = 'http://api.openweathermap.org/data/2.5/';




function getCurrentWeather (city) {
  return axios.get( _baseURL + 'weather?q='+ city + '&type=accurate&APPID=' + _APIKEY)
  .then(function (currentWeatherData){
    console.log(currentWeatherData)
  })
}

function getForecast (city) {
  return axios.get(_baseURL + 'forecast/daily?q=' + city + '&unit=metric&type=accurate&APPID=' + _APIKEY + '&cnt=5')
  .then(function (forecastData) {
    console.log(forecastData)
  })
}

module.exports = {getCurrentWeather: getCurrentWeather,
                  getForecast: getForecast
                };