/* exported isPalindromic */
// Direction reworded: Check if the inputted string is a palindrome. Return a boolean.

function isPalindromic(string) {
  var newArray = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      newArray.push(string[i]);
    }
  }
  var copiedArray = [...newArray];
  var reversedArray = copiedArray.reverse();
  var arrayToString = reversedArray.join('');
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === arrayToString[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
