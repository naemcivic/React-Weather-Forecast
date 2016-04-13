var axios = require('axios');

var _APIKEY = '';
var _baseURL = 'http://api.openweathermap.org/data/2.5/';


function getCurrentWeather (city) {
  return axios.get( _baseURL + 'weather?q='+ city + '&type=accurate&APPID=' + _APIKEY)
  .then(function (currentWeatherData){
  })
}

function getForecast (city) {
  return axios.get(_baseURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + _APIKEY + '&cnt=5')
  .then(function (forecastData) {
    return forecastData.data
  })
}

module.exports = {getCurrentWeather: getCurrentWeather,
                  getForecast: getForecast
                  };
