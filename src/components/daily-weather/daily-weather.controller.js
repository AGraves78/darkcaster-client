DailyWeatherController.$inject = ['WeatherService', 'images'];

function DailyWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //Functions
  this.search  = search;

  function search(){
    weather.getDailyWeather(this.lat, this.lon)
           .then(dailyWeather => this.dailyWeather = dailyWeather);
  }
}

module.exports = DailyWeatherController;
