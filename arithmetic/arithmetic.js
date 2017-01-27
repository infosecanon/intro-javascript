// JavaScript supports basic operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(4 % 2);  // 0

// Arithmetic expressions and values can be assigned to a variable
var a = 2 + 2; // 4
var b = 0;

// Arithmetic expressions involving variables of SAME type
console.log(a + b); // 4

/*** Exercise: What happens when you do this? ***/
var c;
console.log(a + c);

// JavaScript also supports prefix and postfix increment/decrement
var a = 0;
// Increment
console.log(a++); // 0
console.log(a);   // 1
console.log(++a); // 2

// Decrement
console.log(--a); // 1
console.log(a);   // 1
console.log(a--); // 1

// Mostly we have talked about binary operators, + and - can be unary operators with different meanings
console.log(+4);    // 4
console.log(+"4");  // 4
console.log(-(+4)); // -4

/*** Exercise: What happens when you do this? Why? ***/
console.log(+null);

// Tips on Order Precedence, just use parens ()
console.log( 4 * 2 / 8 + 10 - 1)    // 11
console.log( 4 * (2 / 8 + 10) - 1)  // 40
