/* exported zip */
// Direction reworded: Return a new array containing subarrays that takes the same index element from both inputted arrays. (Each sub-array should have two elements). If one inputted array has a longer length, shorten it to match the shorter array.
// 1. Create an empty parent array that will be returned at the end of the function.
// 2. Create an empty sub array that will be pushed to the parent array.
// 3. Figure out which array is longer. From the longer array, use the pop method to get rid of the last element from the longer array.
// 4. Use a for loop on the first inputted array and push the elements of the same index from both arrays into the empty sub array created in step two.
// 5. Push the sub array into the parent array, then empty the sub array.
// 6. Return the parent array created in step one.

function zip(first, second) {
  var parentArray = [];
  var subArray = [];
  if (first.length > second.length) {
    first.pop();
    // console.log(first);
    for (let i = 0; i < first.length; i++) {
      subArray.push(first[i]);
      subArray.push(second[i]);
      parentArray.push(subArray);
      subArray = [];
    }
  } else if (first.length < second.length) {
    second.pop();
    // console.log(second);
    for (let i = 0; i < first.length; i++) {
      subArray.push(first[i]);
      subArray.push(second[i]);
      parentArray.push(subArray);
      subArray = [];
    }
  } else {
    // console.log(first);
    // console.log(second);
    for (let i = 0; i < first.length; i++) {
      subArray.push(first[i]);
      subArray.push(second[i]);
      parentArray.push(subArray);
      subArray = [];
    }
  }
  return parentArray;
}
