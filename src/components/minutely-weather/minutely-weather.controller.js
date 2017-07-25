MinutelyWeatherController.$inject = ['WeatherService', 'images'];

function MinutelyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //Functions
  this.search  = search;

  function search(){
    weather.getMinutelyWeather(this.lat, this.lon)
           .then(minutelyWeather => this.minutelyWeather = minutelyWeather);
  }
}

module.exports = MinutelyWeatherController;
