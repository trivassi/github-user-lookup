var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  $("#search" ).submit(function(event) {
    event.preventDefault();

    $("#results").show();

        var username = $('#username').val(),
        user = new User(username);
        $('#username').val("");
        console.log(username);
//callback
        user.getRepos().then(function (response) {
          $(".panel-title").empty();
          $(".user-profile").empty();
          $(".user-return").empty();
          $(".panel-title").append(username + "'s Repos");
           console.log(response);

           $(".user-profile").append("<p><img src='" + response[0].owner.avatar_url + "' alt='profile-picture'/></p><p><a class='btn btn-default' href="+ response[0].owner.html_url +" role='button'>Go to Github profile</a></p>");

           response.forEach(function (objRepo) {
                   $(".user-return").append("<h4><a href="+ objRepo.html_url + ">"+objRepo.name+"</a></h4>" + "<ul>" + "<li>" + "Repo Language: " + objRepo.language + " , Description: " + objRepo.description + "</li> </ul>" );
               });
             });

// https://api.github.com

  });
});
