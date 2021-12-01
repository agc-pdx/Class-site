var socket = io.connect('http://localhost:4000');


$ ('#f1').submit(function(event){
event.preventDefault();
var textInput = $('#myinput').val();
$('#title').html(textInput);

});