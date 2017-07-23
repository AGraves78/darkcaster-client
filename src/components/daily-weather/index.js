const htmlTemplate = require('./daily-weather.html');
const dailyController = require('./daily-weather.controller');

const DailyWeatherComponent = {
  template: htmlTemplate,
  controller: dailyController
};


module.exports = DailyWeatherComponent;
