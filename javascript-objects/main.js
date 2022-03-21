var student = {
  firstName: 'Anna',
  lastName: 'Park',
  age: 28
};

const fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Designer';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);

var vehicle = {
  make: 'Bentley',
  model: 'Bentley Mark VI',
  year: '1946'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'fatty',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log(pet);
