/* exported chunk */
// Shift, Pop, Splice methods are not allowed.

function chunk(array, size) {
  let subArray = [];
  const parentArray = [];
  for (let i = 0; i < array.length; i++) {
    if (size === 1) {
      subArray.push(array[i]);
      parentArray.push(subArray);
      subArray = [];
    } else if (i < size) {
      subArray.push(array[i]);
      // console.log(subArray);
    } else if (i === size && i === array.length - 1) {
      parentArray.push(subArray);
      // console.log(parentArray);
      subArray = [];
      subArray.push(array[i]);
      parentArray.push(subArray);
      return parentArray;
    } else if (i === size) {
      parentArray.push(subArray);
      // console.log(parentArray);
      subArray = [];
      subArray.push(array[i]);
    } else if (i > size) {
      for (let i = size + 1; i < array.length; i++) {
        subArray.push(array[i]);
        // console.log(subArray);
      }
      parentArray.push(subArray);
      return parentArray;
    }
  }
  return parentArray;
}

// console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk(['foo', 'bar', 'baz', 'qux'], 2));
// console.log(chunk([false, true, false, true], 3));
// -> [[false, true, false], [true]]
// console.log(chunk([undefined, null, 0, false, NaN, '', undefined], 3));
