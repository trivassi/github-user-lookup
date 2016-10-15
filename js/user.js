//if you have an api key
var apiKey = require('./../.env').apiKey;


function User(){
  this.username = username;
}


User.prototype.getUserName = function (username) {
  $.get('https://api.github.com/' + this.username).then(function (response) {
    displayFunction(this.username);
  }).fail(function(error) {
    $('#ghapidata').text("Error");
  });
};
  // Accept: application/vnd.github.v3+json
  // https://api.github.com



// function requestJSON(url, callback) {
//    $.ajax({
//      url: url,
//      complete: function(xhr) {
//        callback.call(null, xhr.responseJSON);
//      }
//    });
//  }

exports.userModule = User;
//exports.namedoesntmatter = nameofObject
