const angular = require('angular');

//Services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/images.service');

//Components
const CurrentWeatherComponent = require('./components/current-weather/index');
const HourlyWeatherComponent = require('./components/hourly-weather/index');
const DailyWeatherComponent = require('./components/daily-weather/index');

//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService)
       .factory('images', ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent)
       .component('dailyWeather', DailyWeatherComponent);
