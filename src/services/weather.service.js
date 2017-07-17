const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService($http){
  const baseUrl = 'https://lit-forest-38509.herokuapp.com/weather/'
  return {
    // label      function name
    getCurrentWeather: getCurrently,
    getHourlyWeather: getHourly
  }
  function getHourly(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => response.data.hourly);
  }
  function getCurrently(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.currently;
                });
  }
}

module.exports = WeatherService;
