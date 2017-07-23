DailyWeatherController.$inject = ['WeatherService'];

function DailyWeatherController(weather){
  this.lat = 0;
  this.lon = 0;

  //Functions
  this.search  = search;

  function search(){
    weather.getDailyWeather(this.lat, this.lon)
           .then(dailyWeather => this.dailyWeather = dailyWeather);
  }
}

module.exports = DailyWeatherController;
