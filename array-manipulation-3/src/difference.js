/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (let y = 0; y < second.length; y++) {
    if (first.indexOf(second[y]) === -1) {
      newArray.push(second[y]);
    }
  }
  return newArray;
}
