var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemp = function(city, tempData) {
  $('.showTemp').text("The temperature in " + city + " is " + tempData + " Degrees Kelvin");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#humidity').click(function() {
    var city = $('#city').val();
    $('#city').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
  });

  $('#temp').click(function() {
    var city = $('#city').val();
    $('#city').val("");
    currentWeatherObject.getTemp(city, displayTemp);
  });
});
