var User = require('./../js/user.js').userModule;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  $("#search" ).submit(function(event) {

    $.get
  function requestJSON(url, callback) {
     $.ajax({
       url: url,
       complete: function(xhr) {
         callback.call(null, xhr.responseJSON);
       }
     });
   }

// https://api.github.com

  });
  event.preventDefault();
});
