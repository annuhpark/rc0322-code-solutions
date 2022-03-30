/* var $letter = document.querySelectorAll('span');
// console.log(event.key);

function typingGame() {
  let i = 0;
  while (i < $letter.length) {
    // console.log($letter[i].textContent);
    if (event.key === $letter[i].textContent) {
      $letter[i].className = 'green-letter';
      $letter[i + 1].className = 'underline';
      i++;
    } else {
      $letter[i].className = 'underline-red-letter';
    }
  }
}

window.addEventListener('keydown', typingGame);
*/
