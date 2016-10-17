var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  $("#search" ).submit(function(event) {
        // $("#form-login").submit(function (event) {
    event.preventDefault();

        var username = $('#username').val(), user = new userModule(username, userModule);
        $('#username').val("");


        api.getRepositories().then(function (response) {
            $("#total-repos").append('<h3>Total Repositories : <span class="label label-danger" >'+response.length+'</span></h3>');

            response.forEach(function (objRepo) {
                $("#response-github").append("<div class='row repository'><div class='col-md-12'><h3 class='form-section'><a href='"+objRepo.html_url+"' target='_blank'>"+objRepo.name+" <b>[ "+objRepo.id+" ]</b></a></h3><p>"+objRepo.description+"</p></div></div>");
            });
        }).catch(function (reason) {
            console.log(reason);
        });
    });
})();

// https://api.github.com

  });
  event.preventDefault();
});
