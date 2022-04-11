function ExampleConstructor() {
}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);
var newFunction = new ExampleConstructor();
console.log(newFunction);
// console.log(newFunction instanceof ExampleConstructor);
var instanceOf = newFunction instanceof ExampleConstructor;
console.log(instanceOf);
