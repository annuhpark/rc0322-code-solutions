var $form = document.querySelector('form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Name:', $form.name.value);
  console.log('Email:', $form.email.value);
  console.log('Message:', $form.message.value);
  $form.reset();
});
