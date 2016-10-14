$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var Object = require('./../js/template.js').objectModule;
//var namedoesntmatter = require(path).namehastomatchbackendfile

$(document).ready(function() {
  event.preventDefault();
});
