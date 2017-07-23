MinutelyWeatherController.$inject = ['WeatherService'];

function MinutelyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  //Functions
  this.search  = search;

  function search(){
    weather.getMinutelyWeather(this.lat, this.lon)
           .then(minutelyWeather => this.minutelyWeather = minutelyWeather);
  }
}

module.exports = MinutelyWeatherController;
