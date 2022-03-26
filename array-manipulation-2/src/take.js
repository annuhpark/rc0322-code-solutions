/* exported take */
function take(array, count) {
  const finalArray = [];
  for (let i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return array;
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
