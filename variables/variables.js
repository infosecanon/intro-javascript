// Basics
// We can assign values to variables
var num = 1;

// We can output them
console.log(num);   // 1

// If you want to see what can be done with arithmetic, you can check out the other section!

// We talked about variables before, in JS, you can declare variables with/without their keyword
// However you cannot access them in the same scope

// This will be important later on, look for Variable Hoisting
function foo(){
  a = 1;        // Exists in the global scope, unless strict mode
  var b = 1;    // Exists only in this scope
}

foo();

console.log(a);     // 1
// console.log(b);  // Our variable won't exist, reference

// declared variables are created before execution
// console.log(x);  // will throw a reference error
// console.log('next line.');
var x;
console.log(x);     // undefined


