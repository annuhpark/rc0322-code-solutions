var $image = document.querySelector('img');
var imageSrcValues = ['025.png', '004.png', '007.png', '039.png', '001.png'];
var indexOfImage = 0;
var intervalIndex = 0;
var $buttonCircles = document.querySelector('.circle-buttons-container');
var $circles = document.querySelectorAll('.fa-circle');
var $leftArrow = document.querySelector('.fa-angle-left');
var $rightArrow = document.querySelector('.fa-angle-right');

function changeImage() {
  $image.setAttribute('src', 'images/' + imageSrcValues[intervalIndex]);
  matchIntervalToCircle();
  intervalIndex++;
  if (intervalIndex === 5) {
    intervalIndex = 0;
  }
}

setInterval(changeImage, 3000);

$buttonCircles.addEventListener('click', function (event) {
  for (let i = 0; i < $circles.length; i++) {
    if ($circles[i] === event.target) {
      $circles[i].className = 'fas fa-circle';
      $image.setAttribute('src', 'images/' + imageSrcValues[i]);
      indexOfImage = i;
      intervalIndex = 0;
    } else {
      $circles[i].className = 'far fa-circle';
      intervalIndex = 0;
    }
  }
});

$leftArrow.addEventListener('click', function (event) {
  if (indexOfImage > 0 && indexOfImage <= 4) {
    $image.setAttribute('src', 'images/' + imageSrcValues[indexOfImage - 1]);
    indexOfImage = indexOfImage - 1;
    matchArrowToCircle();
    intervalIndex = 0;
  } else if (indexOfImage <= 0) {
    $image.setAttribute('src', 'images/' + imageSrcValues[4]);
    indexOfImage = 4;
    matchArrowToCircle();
    intervalIndex = 0;
  }
});

$rightArrow.addEventListener('click', function (event) {
  if (indexOfImage >= 0 && indexOfImage < 4) {
    $image.setAttribute('src', 'images/' + imageSrcValues[indexOfImage + 1]);
    indexOfImage = indexOfImage + 1;
    matchArrowToCircle();
    intervalIndex = 0;
  } else if (indexOfImage >= 4) {
    $image.setAttribute('src', 'images/' + imageSrcValues[0]);
    indexOfImage = 0;
    matchArrowToCircle();
    intervalIndex = 0;
  }
});

function matchArrowToCircle() {
  for (let i = 0; i < $circles.length; i++) {
    if (i === indexOfImage) {
      $circles[i].className = 'fas fa-circle';
    } else {
      $circles[i].className = 'far fa-circle';
    }
  }
}

function matchIntervalToCircle() {
  for (let i = 0; i < $circles.length; i++) {
    if (i === intervalIndex) {
      $circles[i].className = 'fas fa-circle';
    } else {
      $circles[i].className = 'far fa-circle';
    }
  }
}
