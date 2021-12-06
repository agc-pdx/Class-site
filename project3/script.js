

$ ('#f1').submit(function(event){
event.preventDefault();
var textInput = $('#myinput').val();
$('#title').html(textInput);


});


const btn = document.getElementsByClassName('btn')[0] 
const comets = document.getElementById('comets')
const text = document.getElementById('text')
btn.addEventListener('click', () => {
  comets.appendChild(createCommentDOM(text.value))
  text.value = ''
})

function createCommentDOM(text) {
  let commentDOM = document.createElement('div')
  commentDOM.classList.add('comment')
  commentDOM.style.top = `${getRandomInt(100)}%`
  commentDOM.innerText = text
  return commentDOM
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}