var $textarea = document.querySelector('textarea');
var $userEmail = document.getElementById('user-email');
var $userName = document.getElementById('user-name');

function handleFocus(event) {
  console.log('focus event is fired');
  console.log(event.target.name);
}
$textarea.addEventListener('focus', handleFocus);
$userEmail.addEventListener('focus', handleFocus);
$userName.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event is fired');
  console.log(event.target.name);
}

$textarea.addEventListener('blur', handleBlur);
$userEmail.addEventListener('blur', handleBlur);
$userName.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name:', event.target.value);
}

$textarea.addEventListener('input', handleInput);
$userEmail.addEventListener('input', handleInput);
$userName.addEventListener('input', handleInput);
