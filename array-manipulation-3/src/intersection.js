/* exported intersection */
// Direction reworded: With the two inputted arrays, only return elements that both arrays have in common.
// 1. Create a new empty array that will be returned from the function at the end.
// 2. To compare both arrays, use a for loop that loops over the first inputted array. Use the indexOf method to check whether or not each element in the first array is equal to another element in the second array.
// 3. If true, push those elements into the empty array created in step one. If not, do not push.
// 4. Return the array created in step one.

function intersection(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
