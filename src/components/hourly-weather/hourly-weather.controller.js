HourlyWeatherController.$inject = ['WeatherService', 'images'];

function HourlyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //Functions
  this.search  = search;

  function search(){
    weather.getHourlyWeather(this.lat, this.lon)
           .then(hourlyWeather => this.hourlyWeather = hourlyWeather);
  }
}

module.exports = HourlyWeatherController;
