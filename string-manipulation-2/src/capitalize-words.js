/* exported capitalizeWords */
function capitalizeWords(string) {
  const lowerCased = string.toLowerCase();
  const stringToArray = lowerCased.split('');
  // console.log(stringToArray);
  for (let i = 0; i < stringToArray.length; i++) {
    if (i === 0) {
      var capitalizedFirstLetter = stringToArray[i][0].toUpperCase();
      stringToArray.splice(0, 1, capitalizedFirstLetter);
      // console.log(stringToArray);
    } else if (stringToArray[i] === ' ') {
      stringToArray.splice(i + 1, 1, stringToArray[i + 1].toUpperCase());
      // console.log(stringToArray);
    } else {
      continue;
    }
  }
  return stringToArray.join('');
}
