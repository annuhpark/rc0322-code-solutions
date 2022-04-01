/* exported union */
function union(first, second) {
  var combinedArray = [...first, ...second];
  var uniqueCombinedArray = [...new Set(combinedArray)];
  return uniqueCombinedArray;
}
