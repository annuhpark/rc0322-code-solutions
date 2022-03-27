/* exported invert */
function invert(source) {
  const newObj = { ...source };
  const returnedObj = {};
  for (const x in newObj) {
    var newProperty = newObj[x];
    var newValue = x;
    returnedObj[newProperty] = newValue;
  }
  return returnedObj;
}
