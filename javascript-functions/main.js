function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  return area;
}

getArea(17, 42);

function getFirstName(person) {
  return person.firstName;
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
