/* exported reverseWords */
function reverseWords(string) {
  var emptyArray = [];
  var parentArray = [];
  var stringToArray = string.split('');
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === ' ' && i === stringToArray.indexOf(' ')) {
      var reversedArray = emptyArray.reverse('');
      parentArray.push(reversedArray);
      emptyArray = [];
    } else if (stringToArray[i] === ' ') {
      emptyArray.push(stringToArray[i]);
      reversedArray = emptyArray.reverse('');
      emptyArray = [];
      parentArray.push(reversedArray);
    } else if (i > stringToArray.lastIndexOf(' ')) {
      emptyArray.push(stringToArray[i]);
      if (i === stringToArray.length - 1) {
        reversedArray = emptyArray.reverse();
        reversedArray.unshift(' ');
        parentArray.push(reversedArray);
      }
    } else {
      emptyArray.push(stringToArray[i]);
    }
  }
  var combinedArray = [];
  for (let i = 0; i < parentArray.length; i++) {
    combinedArray.push(...parentArray[i]);
  }
  return combinedArray.join('');
}
