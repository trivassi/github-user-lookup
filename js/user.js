//if you have an api key
var apiKey = require('./../.env').apiKey;


function User(){
  this.username = username;
}


// User.prototype.getUserName = function (username) {
//   $.get('https://api.github.com/' + this.username).then(function (response) {
//     displayFunction(this.username, user.name);
//   }).fail(function(error) {
//     $('#ghapidata').text("Error");
//   });
// };

User.prototype.getRepos = function () {
  return $.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey).then(function (response) {
    return response;
  }).fail(function(error) {
    $('#user-return').text(error.responseJSON.message);
  });
};



exports.userModule = User;
//exports.namedoesntmatter = nameofObject
