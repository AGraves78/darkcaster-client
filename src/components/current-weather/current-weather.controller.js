CurrentWeatherController.$inject = ['WeatherService', 'images']; //magic for us

function CurrentWeatherController(weather, images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.lookup;
  this.missingImage = images.missing;

  //Functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat, this.lon)
           .then(currentWeather => this.weatherData = currentWeather)
           .then(response => this.weatherData);
           //is a promise

  };

}
module.exports = CurrentWeatherController;
