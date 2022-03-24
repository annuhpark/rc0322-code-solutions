/* exported countdown */
function countdown(number) {
  var newArray = [];
  for (let i = number; i >= 0; i--) {
    newArray.push(i);
  }
  return newArray;
}
