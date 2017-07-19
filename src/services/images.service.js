const clearDay = require('../images/clear-day.png');
const missingImage = require('../images/missing.png');

ImageService.$inject = []

function ImageService(){
  const imageLookup = {
    'clear-day': clearDay
  }
  return {
    lookup: imageLookup,
    missing: missingImage
  }
}

module.exports = ImageService;
