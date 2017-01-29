// When we talk about conditionals we are talking about expressions/values that result in booleans

// Boolean Values: true or false
console.log(true);
console.log(false);
console.log();

// We have operations that do comparisons
console.log( 1 < 2 );   // true
console.log( 2 <= 3 );  // true
console.log( 1 >= 3 );  // false
console.log( 1 > 2 );   // false
console.log();

// **VERY** IMPORTANT
// == and === WILL NOT **ALWAYS** result in the same value
// IF YOU NEED TO SEE VALUES, SAFER TO USE ===
console.log( 1 == 1 );        // true
console.log( 1 === 1 );       // true
console.log( "1" == "1" );    // true
console.log( "1" === "1" );   // true
console.log();

// But now?
console.log( "3" == 3 );
console.log( 3 == '3' );
console.log( "3" === 3 );
console.log( '3' === 3 );
console.log();

// Similar we can do negation (not)
console.log( 1 != 1 );      // false
console.log( 1 !== 1 );     // false
console.log( "1" != "1" );  // false
console.log( "1" !== "1" ); // false
console.log();

// Surprise...
console.log( "3" != 3 );
console.log( 3 != '3' );
console.log( "3" !== 3 );
console.log( '3' !== 3 );
console.log();

// We also have operators for booleans

// && - both sides need to be true to have the entire expression to be true
console.log( true && true );
console.log( false && true );
console.log();

// || - only one side needs to be true to be true
console.log( true || false );
console.log( true || true );
console.log( false || false );
console.log();

// We use these conditionals in ifs and loops too!
// See what happens when you change the booleans
var a = true;
var b = false;
if( a && b ){
  console.log("You see this message because of ANDS");
}
if( a || b) { 
  console.log("You see this message because of ORS");
}
