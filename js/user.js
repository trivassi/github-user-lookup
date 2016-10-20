var apiKey = require('./../.env').apiKey;

function User(username){
  this.username = username;
}

User.prototype.getRepos = function () {
  return $.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey).then(function (response) {
    return response;
  }).fail(function(error) {
    $('.user-return').text(error.responseJSON.message);
  });
};

exports.userModule = User;
