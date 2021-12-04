


$ ('#f1').submit(function(event){
event.preventDefault();
var textInput = $('#myinput').val();
$('#title').html(textInput);

});

io.on('connection',function(socket){
console.log('made socet connection', socket.id)

});

socket.connect 
var socket = io.connect('https://agc-pdx.github.io/Class-site/project3/');