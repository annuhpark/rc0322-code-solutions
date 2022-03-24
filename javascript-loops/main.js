/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated = repeated + word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    var doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const x in object) {
    keys.push(x);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (const x in object) {
    var value = object[x];
    values.push(value);
  }
  return values;
}
