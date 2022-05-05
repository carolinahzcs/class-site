function reallySure(event) {
  var message = 'Would you like to see the monster?';
  action = confirm(message) ? true : event.preventDefault();
}
var aElems = document.getElementsByTagName('a');

for (var i = 0, len = aElems.length; i < len; i++) {
  aElems[i].addEventListener('click', reallySure);
}
