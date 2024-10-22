/*
/   Scope will be covered more thoroughly shortly, but in order to talk about code blocks...
/   Scope defines where variables and functionality can be accessed or are valid
*/

/*
    ==========  Code Blocks ==========
*/
//  ***** These (code blocks) describe code that are within the same scope
//          Usually delimited by a pair of curly braces {}
//          Usually combined with other JS functionality like conditionals or functions or loops

// ***** Because these variables are create at the top level of the script, they are valid at all levels of the script
let x = 10;
let y = 5;
console.log("x is:", x, "and y is:", y);
// this is showing that z is undefined
// console.log("z is:", z);

{
  // ***** if I declare z in here, it is only valid in here
  //          out of these {}, z does not exist
  let z = x + y;
  console.log("x is:", x, "and y is:", y);
  console.log("z is:", z);
  x = 7;
}

console.log("x is:", x, "and y is:", y);
// this z is also not defined because it is out of the block that z was defined in
// ***** you get the error that z is not defined because it was only valid in the {}
//      once I leave those {} z is destroyed
// console.log("z is:", z);

/*
    ========== Scope    ==========
/   ***** Global Scope - valid everywhere within the script - (so if you use var instead of let)
            but we want to avoid this because it creates the potential for unintentionally overwriting variables later
/   ***** Module Scope - we'll learn more about this later
/   ***** Function Scope - we'll talk about this when we learn about functions (soon)
/   ***** Block Scope - valid only within the BLOCK OF CODE that it was created in {}
*/

// This code from the notes was modified from mdn code that can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had to change the variable name from x to ex because I already have a variable named x
// look at the error that you get if you keep that x variable name

console.log("======================================================");
{
  let ex = 1;
  {
    let ex = 2;
    console.log(ex);
  }
  console.log(ex);
}
console.log(ex);

console.log("======================================================");
{
  var ex = 1;
  {
    var ex = 2;
    console.log(ex);
  }
  console.log(ex);
}
console.log(ex);

/*
        ========== Control Flow and Conditionals
*/
// ***** There are a few different options for conditionals
//          if (condition is true) { code to execute }
//          if (condition is true) { code to execute } else { alternative code }
//              YOU CAN ONLY EXECUTE ONE SET OF {}
//          if (condition is true) { code to execute } else if ( new condition is true ) { different code } else { alternative code }
//              YOU still CAN ONLY EXECUTE ONE SET OF {}
// ***** Remember = is assignment and == or === are both checking for equality of the values
//          you do not need {} if there is only one line, but you do need them any time there is more than one line of code that you
//              want to execute if the condition is true
//          using {} can help with readability while you are learning

console.log("======================================================");
console.log("EXAMPLE of IF/ELSE");
console.log("======================================================");
// ***** EXAMPLE
//          if (condition is true) { code to execute }
x = "10";
console.log("if but no else statement");
if (x === 10) {
  console.log("x is 10");
  console.log(x);
}
console.log("i always print");

// ***** EXAMPLE
//          if (condition is true) { code to execute } else { alternative code }
console.log("");
console.log("if WITH else");
if (x === 10) {
  console.log("x is 10 - the number");
} else {
  console.log("x is NOT 10 - the number");
}
console.log("i always print");

// ***** EXAMPLE
//          if (condition is true) { code to execute }
console.log("");
let isRaining = false;
if (isRaining) {
  console.log("i am bringing my umbrella");
}

// ***** EXAMPLE
//          if (condition is true) { code to execute } else { alternative code }
let age = 6;
if (age > 15) {
  console.log("you are old enough to have a drivers license");
} else {
  console.log("you are NOT old enough to have a drivers license");
}

/*
/ "Truthy" and "Falsy"
/   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
/   https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/   https://www.w3schools.com/js/js_booleans.asp
*/
// Why would I want to use this?
// ***** To check if my variable exists and is initialized
console.log("");
console.log("truthy/falsy examples");
// be careful if 0 is a valid input
let newVar = 0;
if (newVar || newVar == 0) {
  // if (newVar) {
  console.log("I can do things with my variable: ", newVar);
} else {
  console.log("i have to wait until there is something there");
}

// *****  Exercises
let num = 0;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("0, neither positive nor negative");
}

let userAge = 7;
if (userAge >= 18) {
  console.log("access granted");
} else {
  console.log("access denied");
}

/*
    ==========  Nested if/else statements   ==========
        if or else codeblock that had another if/else statement
*/
console.log("");
console.log("example of nested if/else");

let isHungry = true,
  hasGroceries = true;
if (isHungry) {
  console.log("I should eat");
  if (hasGroceries) {
    console.log("make food");
  } else {
    console.log("buy food");
  }
} else {
  console.log("I won't eat right now");
}

console.log("leave for work");

/*
    ========== Chaining if/else statements  ==========
    /           combining multiple conditions, where you are choosing one from all
    /   ***** Order matters when you are chaining
*/

let temp = 50;
// this if/else is assuming that temp is celsius
if (temp >= 100) {
  console.log("water is boiling at least");
} else if (temp > 0) {
  console.log("water is liquid");
} else if (temp >= 50) {
  console.log("water is hot");
} else {
  console.log("water is frozen, it is ice");
}

let num1 = -3;
if (num1 > 0) {
  console.log("num1 is looking pretty positive");
  if (num1 > 100) {
    console.log("whoa over 100, huh, overachiever much...");
  } else {
    console.log("num1 is positive, but it is less than 100.  Such a shame!");
  }
} else {
  console.log("ew, did you really enter a negative number?!?!");
}

let nub = 40;
if (nub >= 90) {
  console.log("A");
} else if (nub >= 80) {
  console.log("B");
} else if (nub >= 70) {
  console.log("C");
} else if (nub >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// one way that we use mod is to see if things are odd or even
let numCheck = 3;
if (numCheck % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

/*
    ========== switch statements ==========
*/
// ***** switch is a keyword (reserved word) that tells us we're about to do a specific kind of statement
// ***** the variable operand is the value that we have
// ***** and we will compare it to the value in each case
let x1 = 5;
let x2 = 4;
let operand = "-";
console.log(
  "==================================================================="
);
switch (operand) {
  case "+":
    console.log(x1 + x2);
    break;
  case "-":
    console.log(x1 - x2);
    break;
  case "*":
    console.log(x1 * x2);
    break;
  case "/":
    console.log(x1 / x2);
    break;
  default:
    console.log("invalid operand");
    break;
}

// Seasons
let currSeason = "winter";
switch (currSeason) {
  case "winter":
    console.log("it is winter and it is cold");
    break;
  case "spring":
    console.log("it is spring and things are growing");
    break;
  case "summer":
    console.log("it is summer and it is HOT!");
    break;
  case "fall":
    console.log("it is fall and leaves are turning");
    break;
  case "autumn":
    console.log("it is autumn, which is fall but harder to spell");
    break;
  default:
    console.log("that is not a season i recognize...");
    break;
}

/*
    ========== Ternary Operators ==========
*/
// ***** General Syntax:
//      (condition) ? (value if true) : (value if false)
// ***** Compare to
//      if (condition) {
//          (value if true)
//      } else {
//          (value if false)
//      }
console.log(
  "==================================================================="
);
console.log("ternary example");

x = 0;
let isTen;

if (x == 10) {
  isTen = true;
} else {
  isTen = false;
}
console.log("isTen after if/else", isTen);

x == 10 ? (isTen = true) : (isTen = false);
console.log("isTen after ternary", isTen);

2 < 10 ? console.log("that is true") : console.log("that is false");

let emptyVar;
emptyVar
  ? console.log("i can display something or use the variable")
  : console.log("this could cause an error");

/*
    ========== Errors and Error Handling ==========
    ===== Try/Catch =====
*/
// *****    try { something that could result in an error that you can't fix } catch { do something if there is an error } finally { always do this }
x = 10;
try {
  if (x < 0) {
    console.log("negative!");
  } else {
    throw "Error - I don't know what I'm doing!";
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("this runs if there is an error or if there is no error");
}

/*
    ==========  Break, Continue, and Return ==========
*/
// *****    Break - get out of the loop or switch or conditional completely
// *****    Continue - move to the next iteration of the loop
// *****    Return - goes with functions, and we will learn more about it when we get to functions

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePlant = 0.8;

let gardenCapacity = area / spacePlant;

console.log(gardenCapacity);

let initialCount = 20;
let weekCount = 3;
let plantCount = initialCount * 2 ** (weekCount - 1);
console.log(plantCount);

if (plantCount < 50 % gardenCapacity) {
  console.log("plant more");
}
if (plantCount === 50 % gardenCapacity) {
  console.log("watch");
} else if (plantCount >= 80 % gardenCapacity) {
  console.log("prune");
}
