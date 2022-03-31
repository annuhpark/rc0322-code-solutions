var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (let y = 0; y < $views.length; y++) {
      if ($dataView === $views[y].getAttribute('data-view')) {
        $views[y].className = 'view';
      } else {
        $views[y].className = 'view hidden';
      }
    }
  }
});
