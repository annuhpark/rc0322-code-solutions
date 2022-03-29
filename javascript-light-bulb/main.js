var $lightBulb = document.querySelector('.circle-light-on');
var $body = document.querySelector('body');

function lightSwitch(event) {
  if (event.target.className === 'circle-light-on') {
    // console.log('hello');
    $lightBulb.className = 'circle-light-off';
    $body.className = 'light-off';
  } else {
    $lightBulb.className = 'circle-light-on';
    $body.className = 'light-on';
  }
}

$lightBulb.addEventListener('click', lightSwitch);
