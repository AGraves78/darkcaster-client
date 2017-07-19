
HourlyWeatherController.$inject = ['WeatherService'];

function HourlyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  //Functions
  this.search  = search;

  function search(){
    weather.getHourlyWeather(this.lat, this.lon)
           .then(hourlyWeather => this.hourlyWeather = hourlyWeather);
  }
}

module.exports = HourlyWeatherController;
