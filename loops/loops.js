// Loops are cool!

// Basic loop we use, while
// WHILE a condition is true, we iterate

var n = 10; // The value we need to end at
var i = 0;

console.log("While Loop\n========");
// human-read: while i is less n, execute the lines
while(i < n){
  console.log("In the loop: " + i);
  i++;
}

// remember that i will retain its value
console.log("After the loop " + i);

// reset
console.log();
i = 0;

console.log("Do While Loop\n========");

// do-while loops: they at least iterate once, otherwise just the same as while
do {
  console.log("In the loop: " + i);
  i++;
}while(i < n);

// remember that i will retain its value
console.log("After the loop " + i);

console.log();


console.log("For Loop\n========");

// do-while loops: they at least iterate once, otherwise just the same as while
for(var i = 0; i < n; i++) {
  console.log("In the loop: " + i);
}

// remember that i will retain its value
console.log("After the loop " + i);

console.log();

// for...in
console.log("For...in Loop\n========");

// Iterating through an enumerable properties of an object
// it is all about the user-defined properties, see here
var arr = [5,6,7,9]

for(var num in arr){
  console.log('arr[' + num + ']: ' + arr[num]);
}

console.log();

// for...in
console.log("For...of Loop\n========");

// Iterate through an Iterable object
for(var num of arr){
  console.log(num)
}
