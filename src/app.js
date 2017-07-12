const angular = require('angular');


//services
const WeatherService = require('./services/weather.service');

// create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter syntax (no comma)
       .controller('MainController', MainController) //angular's version of require
       .factory('WeatherService', WeatherService);

MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrentWeather();
}
