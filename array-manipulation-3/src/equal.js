/* exported equal */
function equal(first, second) {
  for (let i = 0; i < second.length; i++) {
    if (second[i] === first[i]) {
      if (first[i] === undefined) {
        return false;
      } else {
        continue;
      }
    } else {
      return false;
    }
  }
  return true;
}
