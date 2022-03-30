var $letter = document.querySelectorAll('span');
var counter = 0;

function typingGame(event) {
  if (event.key === $letter[counter].textContent) {
    $letter[counter].className = 'green-letter';
    if (counter < $letter.length - 1) {
      $letter[counter + 1].className = 'underline';
      counter++;
    }
  } else if (event.code === 'Space' && counter === 1) {
    $letter[counter + 1].className = 'underline';
    $letter[counter].className = '';
    counter++;
  } else if (event.code === 'Space' && counter === 6) {
    $letter[counter + 1].className = 'underline';
    $letter[counter].className = '';
    counter++;
  } else {
    $letter[counter].className = 'underline-red-letter';
  }
}

window.addEventListener('keydown', typingGame);
