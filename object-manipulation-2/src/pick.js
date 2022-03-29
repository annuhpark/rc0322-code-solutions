/* exported pick */
function pick(source, keys) {
  const returnedObject = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i] && source[x] !== undefined) {
        returnedObject[x] = source[x];
      }
    }
  }
  return returnedObject;
}
