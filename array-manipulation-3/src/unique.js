/* exported unique */
function unique(array) {
  var uniqueArray = [...new Set(array)];
  return uniqueArray;
}
