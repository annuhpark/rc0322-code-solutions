const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.nodeName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log(closest);
    closest.remove();
  }
});
