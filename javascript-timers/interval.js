var $text = document.querySelector('.countdown-display');
var intervalID = setInterval(changeText, 1000);

function changeText() {
  $text.textContent--;
  if ($text.textContent === '0') {
    clearInterval(intervalID);
    $text.textContent = '~ earth below us ~';
  }
}
