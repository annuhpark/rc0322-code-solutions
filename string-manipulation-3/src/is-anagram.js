/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstStringToArray = firstString.split('').sort().join('');
  var secondStringToArray = secondString.split('').sort().join('');
  // console.log(firstStringToArray, secondStringToArray);
  // console.log(firstStringToArray === secondStringToArray);
  if (firstStringToArray === secondStringToArray) {
    return true;
  } else if (firstStringToArray.indexOf(' ') !== -1 && secondStringToArray.indexOf(' ') !== -1) {
    firstStringToArray = firstString.split('').sort();
    for (let i = 0; i < firstStringToArray.length; i++) {
      if (firstStringToArray[i] === ' ') {
        firstStringToArray.splice(i, 1);
        firstStringToArray = firstStringToArray.join('');
        // console.log(firstStringToArray);
      }
    }
    secondStringToArray = secondString.split('').sort();
    for (let y = 0; y < secondStringToArray.length; y++) {
      if (secondStringToArray[y] === ' ') {
        secondStringToArray.splice(y, 1);
        secondStringToArray = secondStringToArray.join('');
        // console.log(secondStringToArray);
      }
    }
    if (secondStringToArray === firstStringToArray) {
      return true;
    } else {
      return false;
    }
  } else if (firstStringToArray !== secondStringToArray && firstStringToArray.indexOf(' ') === -1 && secondStringToArray.indexOf(' ') === -1) {
    return false;
  }
  if (firstStringToArray.indexOf(' ') === -1 && secondStringToArray.indexOf(' ') !== -1) {
    secondStringToArray = secondStringToArray.split('').sort();
    var newArray = [];
    // console.log(secondStringToArray);
    for (let y = 0; y < secondStringToArray.length; y++) {
      if (secondStringToArray[y] === ' ') {
        continue;
      } else {
        newArray.push(secondStringToArray[y]);
        // console.log(newArray);
      }
    }
    newArray = newArray.join('');
    // console.log(newArray);
    // console.log(firstStringToArray);
    // console.log(secondStringToArray);
    // console.log(firstStringToArray);
    if (newArray === firstStringToArray) {
      return true;
    } else {
      return false;
    }
  }
}
