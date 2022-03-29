var $modalButton = document.querySelector('.modal-button');
var $backgroundColor = document.querySelector('body');
var $divViews = document.querySelectorAll('body > div');
var $noButton = document.querySelector('.no-button');

function modalView(event) {
  $divViews[1].className = 'view';
  $backgroundColor.className = 'view gradient-background';
}

$modalButton.addEventListener('click', modalView);

function backToOriginalView(event) {
  $divViews[1].className = 'view-hidden';
  $backgroundColor.className = 'view';
}

$noButton.addEventListener('click', backToOriginalView);
window.addEventListener('click', function (event) {
  if (event.target.className === 'row') {
    backToOriginalView();
  }
  // console.log(event.target.className);
});
