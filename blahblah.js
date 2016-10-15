var apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.getHumidity = function (city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
    console.log(response);
  }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemp = function (city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
