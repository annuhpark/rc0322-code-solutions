/* exported isPalindromic */
// Direction reworded: Check if the inputted string is a palindrome. Return a boolean.

function isPalindromic(string) {
  var newArray = [];
  // console.log(arrayToString);
  // console.log(stringToArray);
  // console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      // console.log('there is a space');
      // console.log(stringToArray);
      continue;
    } else {
      newArray.push(string[i]);
      // console.log(newArray);
    }
  }
  var copiedArray = [...newArray];
  var reversedArray = copiedArray.reverse();
  // console.log(reversedArray);
  var arrayToString = reversedArray.join('');
  // console.log(newArray);
  // console.log(arrayToString);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === arrayToString[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
