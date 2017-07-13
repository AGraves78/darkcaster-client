const angular = require('angular');

//Services
const WeatherService = require('./services/weather.service');

//Components
const CurrentWeatherComponent = require('./components/current-weather/index');

//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
