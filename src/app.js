const angular = require('angular');
const weatherData = require('../mocks/weather.json');


// create our application
angular.module('darkcaster-client', []); //setter syntax

angular.module('darkcaster-client') //getter syntax (no comma)
       .controller('MainController', MainController); //angular's version of require

MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';
  this.weatherData = weatherData.currently;
}
