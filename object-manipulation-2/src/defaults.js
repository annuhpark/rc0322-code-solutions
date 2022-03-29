/* exported defaults */
// Direction reworded: There are two inputted objects, the first one being the one that needs to be modified. The property and values from the second object should be added to the first. Nothing is returned from this function. If the first object already has the same property name, even with a different value from the second object, then first object keeps its original property and value.
// 1. Create a for in loop that loops through the first object.
// 2. Follow for in loop from step 1 with another for in loop that loops through the second object.
// 3. Create an if statement with the condition that if the property already exists, to delete the property from the "source" object.
// 4. Follow with an else if statement saying that if the property from the "source" object is not part of the "target" object, to add it into the target object.
// 5. Hard code with an if statement at the beginning saying that if the target object is an empty object, make the target object equal to the source object.

function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    target = source;
  }
  for (let x in target) {
    // console.log(x);
    for (const y in source) {
      // console.log(y);
      if (x === y) {
        // console.log(x);
        delete source[y];
        // console.log(source);
      } else if (x !== y && target[y] === undefined) {
        // console.log(y);
        x = y;
        // console.log(x);
        const missingValue = source[y];
        // console.log(you);
        target[x] = missingValue;
        // console.log(target);
      }
    }
  }
}
