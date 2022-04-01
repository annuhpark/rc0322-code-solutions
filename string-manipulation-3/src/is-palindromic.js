/* exported isPalindromic */
// Direction reworded: Check if the inputted string is a palindrome. Return a boolean.
// 1. Change the inputted string into an array using the split(); method.
// 2. Use the reverse method to flip the letters.
// 3. Use the join method to change back into a string and set the return of the method as a variable.
// 4. Use an if statement to compare the old and new string.

function isPalindromic(string) {
  var stringToArray = string.split('').reverse();
  var arrayToString = stringToArray.join('');
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === ' ') {
      arrayToString = stringToArray.splice(i, 1).join('');
    }
  }
  if (string === arrayToString) {
    return true;
  } else {
    return false;
  }
}
