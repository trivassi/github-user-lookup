var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  $("#search" ).submit(function(event) {
        // $("#form-login").submit(function (event) {
    event.preventDefault();

        var username = $('#username').val(), user = new userModule(username, userModule);



// https://api.github.com

  });
  event.preventDefault();
});
