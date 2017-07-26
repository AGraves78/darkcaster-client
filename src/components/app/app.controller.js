MainController.$inject = ['WeatherService'];

function MainController(weather){
  this.lat = 0;
  this.lon = 0;
  this.search = search;
  this.$onInit = onInit;

  function onInit(){
    weather.get(0,0)
           .then(data => {
             this.weatherData = data;
           })
  }
  function search(){
    console.log('getting the weather');
    weather.get(this.lat, this.lon)
           .then(data => this.weatherData = data);
  }
}

module.exports = MainController;
