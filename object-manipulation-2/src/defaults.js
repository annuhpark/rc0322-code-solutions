/* exported defaults */
// Direction reworded: There are two inputted objects, the first one being the one that needs to be modified. The property and values from the second object should be added to the first. Nothing is returned from this function. If the first object already has the same property name, even with a different value from the second object, then first object keeps its original property and value.
// 1. Create a for in loop that loops through the first object.
// 2. Follow for in loop from step 1 with another for in loop that loops through the second object.
// 3. Create an if statement with the condition that if the property already exists, to continue with the for loop without any additions.
// 4. Add the property and values onto the first object otherwise.

function defaults(target, source) {

}
