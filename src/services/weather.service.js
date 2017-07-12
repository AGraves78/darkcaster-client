const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = [];

function WeatherService(){
  return {
    // label      function name
    getCurrentWeather: getCurrently
  }
  function getCurrently(){
    return weatherData.currently;
  }
}

module.exports = WeatherService;
