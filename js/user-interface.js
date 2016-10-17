var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  $("#search" ).submit(function(event) {
    event.preventDefault();

        var username = $('#username').val(),
        user = new userModule(username);
        $('#username').val("");

        user.getRepos().then(function (response) {
           $("#user-return").append('<h2>Total Repositories :" >'+response.length+'</h2>');

           response.forEach(function (objRepo) {
                   $("#user-return").append("h4>" +  objRepo.html_url+ "</h4>" + "<ul>" + "<li>" + objRepo.name + objRepo.description + "</li> </ul>" );
               });
             });
// https://api.github.com

  });
});
